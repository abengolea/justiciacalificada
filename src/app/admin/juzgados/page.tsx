
'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Loader2, Upload, FileCheck, AlertTriangle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Papa from 'papaparse';
import { useFirebase, addDocumentNonBlocking } from '@/firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';
import { Progress } from '@/components/ui/progress';

interface FileState {
  provincias: File | null;
  departamentos: File | null;
  ciudades: File | null;
  juzgados: File | null;
}

type TableName = keyof FileState;

interface Provincia {
  id: string;
  nombre: string;
}

interface Departamento {
  id: string;
  nombre: string;
  id_provincia: string;
}

interface Ciudad {
  id: string;
  nombre: string;
  idprovincia: string; // Note the lowercase 'p' from the SQL file
}

interface JuzgadoRaw {
    id: string;
    nombre: string;
    id_departamento: string;
    id_ciudad: string;
    // Other fields from SQL that we are not using directly for now
    id_tipo?: string;
    juez?: string;
    estado?: string;
}

interface CourthouseFinal {
    nombre: string;
    dependencia: string; // Provincia
    ciudad: string;
    // Fields not present in the provided SQL dumps will be empty
    fuero: string;
    instancia: string;
    direccion: string;
    telefono: string;
}


export default function AdminCourthousesPage() {
  const [files, setFiles] = useState<FileState>({
    provincias: null,
    departamentos: null,
    ciudades: null,
    juzgados: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { firestore } = useFirebase();

  const fileInputRefs = {
    provincias: useRef<HTMLInputElement>(null),
    departamentos: useRef<HTMLInputElement>(null),
    ciudades: useRef<HTMLInputElement>(null),
    juzgados: useRef<HTMLInputElement>(null),
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tableName: TableName) => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({ ...prev, [tableName]: file }));
    setError(null);
  };

  const allFilesSelected = Object.values(files).every(file => file !== null);

  const fixEncoding = (str: string): string => {
    // This is a simplified fix for the most common mojibake issues found in the provided SQL dumps.
    // It's not a full latin1 to utf8 conversion but targets the specific visual artifacts.
    try {
      // Attempt to decode as UTF-8. If it works, it might already be correct.
      // If it throws, it has invalid sequences, which we'll then try to fix.
      decodeURIComponent(escape(str));
      return str;
    } catch (e) {
      // The string is not valid UTF-8, so let's apply common fixes.
      return str
        .replace(/Ã³/g, 'ó').replace(/Ã±/g, 'ñ').replace(/Ã³/g, 'ó')
        .replace(/Ã©/g, 'é').replace(/Ã¡/g, 'á').replace(/Ã­/g, 'í')
        .replace(/Ãº/g, 'ú').replace(/Ã€/g, 'Á').replace(/Ã‰/g, 'É')
        .replace(/Ã/g, 'Í').replace(/Ã“/g, 'Ó').replace(/Ãš/g, 'Ú')
        .replace(/Â°/g, '°');
    }
  };

  const parseCsv = <T,>(file: File): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length) {
            reject(new Error(`Error parsing ${file.name}: ${results.errors[0].message}`));
          } else {
            resolve(results.data as T[]);
          }
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }

  const handleLoadData = async () => {
    if (!allFilesSelected) return;
    setIsLoading(true);
    setProgress(0);
    setError(null);

    try {
        const [provinciasData, departamentosData, ciudadesData, juzgadosData] = await Promise.all([
            parseCsv<Provincia>(files.provincias!),
            parseCsv<Departamento>(files.departamentos!),
            parseCsv<Ciudad>(files.ciudades!),
            parseCsv<JuzgadoRaw>(files.juzgados!),
        ]);
        setProgress(10);
        
        const provinciasMap = new Map(provinciasData.map(p => [p.id, fixEncoding(p.nombre)]));
        const departamentosMap = new Map(departamentosData.map(d => [d.id, { nombre: fixEncoding(d.nombre), id_provincia: d.id_provincia }]));
        const ciudadesMap = new Map(ciudadesData.map(c => [c.id, fixEncoding(c.nombre)]));
        
        toast({ title: 'Archivos procesados', description: 'Generando listado final de juzgados...' });
        setProgress(20);

        const courthousesToUpload: CourthouseFinal[] = juzgadosData.map(juzgado => {
            const departamento = departamentosMap.get(juzgado.id_departamento);
            const ciudad = ciudadesMap.get(juzgado.id_ciudad);
            
            const provinciaId = departamento?.id_provincia;
            const provinciaNombre = provinciaId ? (provinciasMap.get(provinciaId) || 'N/A') : 'N/A';
            const ciudadNombre = ciudad || 'N/A';

            return {
                nombre: fixEncoding(juzgado.nombre),
                dependencia: provinciaNombre,
                ciudad: ciudadNombre,
                // These fields are not in the SQL dumps, so we initialize them as empty.
                fuero: '', 
                instancia: '',
                direccion: '',
                telefono: ''
            };
        }).filter(c => c.nombre); // Filter out any potential empty rows

        setProgress(40);
        toast({ title: 'Subiendo datos...', description: `Se cargarán ${courthousesToUpload.length} juzgados. Esto puede tardar varios minutos.` });

        const batchSize = 400;
        let totalUploaded = 0;
        for (let i = 0; i < courthousesToUpload.length; i += batchSize) {
            const batch = writeBatch(firestore);
            const chunk = courthousesToUpload.slice(i, i + batchSize);
            
            chunk.forEach(courthouse => {
                const docRef = doc(collection(firestore, 'courthouses'));
                batch.set(docRef, courthouse);
            });
            
            await batch.commit();
            totalUploaded += chunk.length;
            setProgress(40 + (totalUploaded / courthousesToUpload.length) * 60);
        }

        toast({
            title: '¡Carga Completa!',
            description: `Se han cargado ${courthousesToUpload.length} juzgados en la base de datos.`,
            variant: 'default',
        });
        
    } catch (e: any) {
      console.error(e);
      setError(`Ocurrió un error: ${e.message}. Revise los archivos y la consola.`);
      toast({
        title: 'Error durante la importación',
        description: e.message || 'No se pudo completar la carga. Revise los archivos CSV.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const FileInputBox = ({ id, label, file }: { id: TableName, label: string, file: File | null }) => (
    <div
      className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col justify-center items-center text-center cursor-pointer transition-colors ${file ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
      onClick={() => fileInputRefs[id].current?.click()}
    >
      <input type="file" accept=".csv" ref={fileInputRefs[id]} onChange={(e) => handleFileChange(e, id)} className="hidden" />
      {file ? (
        <>
          <FileCheck className="h-10 w-10 text-primary mb-2" />
          <p className="font-semibold text-primary truncate">{file.name}</p>
          <p className="text-xs text-muted-foreground">{Math.round(file.size / 1024)} KB</p>
        </>
      ) : (
        <>
          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="font-semibold">Subir {label}</p>
          <p className="text-xs text-muted-foreground">Arrastra o haz clic para seleccionar</p>
        </>
      )}
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carga de Base de Datos desde CSV</CardTitle>
          <CardDescription>
            Por favor, convierta sus archivos SQL a formato CSV y suba cada uno en su respectiva sección. Es fundamental que los archivos CSV tengan cabeceras (headers) que coincidan con los nombres de las columnas de sus tablas SQL.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FileInputBox id="provincias" label="provincias.csv" file={files.provincias} />
            <FileInputBox id="departamentos" label="departamentos.csv" file={files.departamentos} />
            <FileInputBox id="ciudades" label="ciudades.csv" file={files.ciudades} />
            <FileInputBox id="juzgados" label="juzgados.csv" file={files.juzgados} />
          </div>

          {isLoading && (
            <div className="space-y-2">
                <p className="text-sm text-center text-muted-foreground">Cargando... {Math.round(progress)}%</p>
                <Progress value={progress} />
            </div>
          )}

          {error && (
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                 <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
                    <div>
                        <h3 className="font-semibold text-destructive">Error en la Carga</h3>
                        <p className="text-sm text-left text-destructive/80">
                            {error}
                        </p>
                    </div>
                </div>
            </div>
          )}
          
          <div className="flex justify-center pt-4">
            <Button onClick={handleLoadData} disabled={!allFilesSelected || isLoading} size="lg">
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Database className="mr-2 h-5 w-5" />
              )}
              Cargar Base de Datos Completa
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
