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
import { useFirebase } from '@/firebase';
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
  const [statusText, setStatusText] = useState('');
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
    if (!str) return '';
    try {
      // This is a common issue with CSVs exported from systems that use Windows-1252 but are read as UTF-8.
      // A more robust solution would be to detect encoding, but this covers the most frequent cases.
      return decodeURIComponent(escape(str));
    } catch (e) {
      // Fallback for strings that are already correctly encoded or have other issues.
       return str
        .replace(/Ã³/g, 'ó').replace(/Ã±/g, 'ñ').replace(/Ã©/g, 'é')
        .replace(/Ã¡/g, 'á').replace(/Ã­/g, 'í').replace(/Ãº/g, 'ú')
        .replace(/Ã€/g, 'Á').replace(/Ã‰/g, 'É').replace(/Ã/g, 'Í')
        .replace(/Ã“/g, 'Ó').replace(/Ãš/g, 'Ú').replace(/Â°/g, '°');
    }
  };

  const parseFile = <T,>(file: File, name: string): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      setStatusText(`Analizando ${name}...`);
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length) {
            console.error(`Errors parsing ${file.name}:`, results.errors);
            reject(new Error(`Error analizando ${file.name}. Revise el formato del archivo.`));
          } else {
            resolve(results.data as T[]);
          }
        },
        error: (err: any) => {
          console.error(`PapaParse error for ${file.name}:`, err);
          reject(new Error(`No se pudo analizar el archivo ${file.name}: ${err.message}`));
        }
      });
    });
  }

  const streamProcessJuzgados = (
    juzgadosFile: File,
    provinciasMap: Map<string, string>,
    departamentosMap: Map<string, { nombre: string; id_provincia: string }>,
    ciudadesMap: Map<string, string>
  ): Promise<CourthouseFinal[]> => {
      const courthousesToUpload: CourthouseFinal[] = [];
      return new Promise((resolve, reject) => {
        let rowCount = 0;
        setStatusText('Procesando archivo de juzgados...');

        Papa.parse(juzgadosFile, {
            header: true,
            skipEmptyLines: true,
            // Use step callback for streaming to handle large files efficiently
            step: (results) => {
                const juzgado = results.data as JuzgadoRaw;
                 if (juzgado.nombre) {
                    rowCount++;
                    const departamento = departamentosMap.get(juzgado.id_departamento);
                    const ciudad = ciudadesMap.get(juzgado.id_ciudad);
                    
                    const provinciaId = departamento?.id_provincia;
                    const provinciaNombre = provinciaId ? (provinciasMap.get(provinciaId) || 'N/A') : 'N/A';
                    const ciudadNombre = ciudad || 'N/A';

                    courthousesToUpload.push({
                        nombre: fixEncoding(juzgado.nombre),
                        dependencia: provinciaNombre,
                        ciudad: ciudadNombre,
                        fuero: '', 
                        instancia: '',
                        direccion: '',
                        telefono: ''
                    });
                }
            },
            complete: () => {
                setStatusText(`${rowCount} juzgados procesados. Preparando para la carga.`);
                setProgress(40);
                resolve(courthousesToUpload);
            },
            error: (err: any) => {
              console.error(`PapaParse streaming error for juzgados.csv:`, err);
              reject(new Error(`Error procesando el archivo de juzgados: ${err.message}`));
            }
        });
      });
  }


  const handleLoadData = async () => {
    if (!allFilesSelected) return;
    setIsLoading(true);
    setProgress(0);
    setStatusText('');
    setError(null);

    try {
        setStatusText('Analizando archivos de referencia...');
        const [provinciasData, departamentosData, ciudadesData] = await Promise.all([
            parseFile<Provincia>(files.provincias!, 'provincias.csv'),
            parseFile<Departamento>(files.departamentos!, 'departamentos.csv'),
            parseFile<Ciudad>(files.ciudades!, 'ciudades.csv'),
        ]);
        setProgress(10);
        setStatusText('Construyendo mapa de relaciones...');
        
        const provinciasMap = new Map(provinciasData.map(p => [p.id, fixEncoding(p.nombre)]));
        const departamentosMap = new Map(departamentosData.map(d => [d.id, { nombre: fixEncoding(d.nombre), id_provincia: d.id_provincia }]));
        const ciudadesMap = new Map(ciudadesData.map(c => [c.id, fixEncoding(c.nombre)]));
        
        setProgress(20);
        
        // Stream process the large juzgados file
        const courthousesToUpload = await streamProcessJuzgados(files.juzgados!, provinciasMap, departamentosMap, ciudadesMap);

        if (courthousesToUpload.length === 0) {
            throw new Error("No se encontraron juzgados para cargar. Verifique que el archivo 'juzgados.csv' no esté vacío y tenga una columna 'nombre'.");
        }
        
        setStatusText(`Se cargarán ${courthousesToUpload.length} juzgados. Esto puede tardar varios minutos.`);
        toast({ title: 'Subiendo datos...', description: `Se cargarán ${courthousesToUpload.length} juzgados. No cierre esta ventana.` });

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
            const currentProgress = 40 + (totalUploaded / courthousesToUpload.length) * 60;
            setProgress(currentProgress);
            setStatusText(`Cargados ${totalUploaded} de ${courthousesToUpload.length} juzgados.`);
            
            await new Promise(resolve => setTimeout(resolve, 100)); // Increased pause slightly for very large uploads
        }

        setStatusText('¡Carga Completa!');
        toast({
            title: '¡Carga Completa!',
            description: `Se han cargado ${totalUploaded} juzgados en la base de datos.`,
            variant: 'default',
        });
        
    } catch (e: any) {
      console.error("Error during data load:", e);
      const errorMessage = `Ocurrió un error: ${e.message || 'Error desconocido'}. Revise los archivos y la consola para más detalles.`;
      setError(errorMessage);
      setStatusText('Error en la carga.');
      toast({
        title: 'Error durante la importación',
        description: e.message || 'No se pudo completar la carga. Revise los archivos CSV y la consola.',
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
          <p className="text-xs text-muted-foreground">{file.size > 1024 * 1024 ? `${(file.size / (1024*1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`}</p>
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
            Convierta sus tablas SQL (`provincias`, `departamentos`, `ciudades`, `juzgados`) a formato CSV y suba cada archivo. El sistema unirá los datos para crear la base de datos de juzgados.
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
            <div className="space-y-2 pt-4">
                <p className="text-sm text-center text-muted-foreground">{statusText} ({Math.round(progress)}%)</p>
                <Progress value={progress} />
            </div>
          )}

          {error && (
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mt-4">
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
