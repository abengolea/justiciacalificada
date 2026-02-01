
'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Loader2, Upload, FileCheck, AlertTriangle, Trash2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Papa, { ParseResult } from 'papaparse';
import { useFirebase } from '@/firebase';
import { collection, writeBatch, doc, getDocs } from 'firebase/firestore';
import { Progress } from '@/components/ui/progress';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';


interface FileState {
  provincias: File | null;
  departamentos: File | null;
  ciudades: File | null;
  juzgados: File | null;
}

type TableName = keyof FileState;

// Raw data structures from CSVs
interface ProvinciaRaw { id: string; nombre: string; }
interface DepartamentoRaw { id:string; nombre: string; id_provincia: string; }
interface CiudadRaw { id: string; nombre: string; idprovincia: string; }
interface JuzgadoRaw {
    id: string;
    nombre: string;
    id_departamento: string;
    id_ciudad: string;
    fuero?: string;
    instancia?: string;
    direccion?: string;
    telefono?: string;
    [key: string]: any;
}

// Final structure for Firestore
interface CourthouseFinal {
    nombre: string;
    dependencia: string;
    ciudad: string;
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
  const [encoding, setEncoding] = useState('ISO-8859-1');

  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState(0);
  const [deleteStatusText, setDeleteStatusText] = useState('');

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
  
  const parseFile = <T,>(file: File): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        encoding: encoding,
        complete: (results) => {
          if (results.errors.length) {
            console.error(`Errors parsing ${file.name}:`, results.errors);
            reject(new Error(`Error analizando ${file.name}. Verifique el formato y la codificación.`));
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

  const handleLoadData = async () => {
    if (!allFilesSelected) return;
    setIsLoading(true);
    setProgress(0);
    setStatusText('Iniciando proceso...');
    setError(null);

    try {
      setStatusText('Analizando archivos de referencia...');
      setProgress(5);
      const [provinciasData, departamentosData, ciudadesData] = await Promise.all([
        parseFile<ProvinciaRaw>(files.provincias!),
        parseFile<DepartamentoRaw>(files.departamentos!),
        parseFile<CiudadRaw>(files.ciudades!),
      ]);
      
      setProgress(10);
      setStatusText('Construyendo mapas de relaciones...');
      const provinciasMap = new Map(provinciasData.map(p => [p.id, p.nombre]));
      const departamentosMap = new Map(departamentosData.map(d => [d.id, { nombre: d.nombre, id_provincia: d.id_provincia }]));
      const ciudadesMap = new Map(ciudadesData.map(c => [c.id, { nombre: c.nombre, idprovincia: c.idprovincia }]));

      setStatusText(`Procesando juzgados...`);
      setProgress(15);
      
      let batch = writeBatch(firestore);
      let batchCounter = 0;
      let totalProcessed = 0;
      const BATCH_SIZE = 499;

      await new Promise<void>((resolve, reject) => {
        Papa.parse(files.juzgados!, {
          header: true,
          skipEmptyLines: true,
          worker: false,
          encoding: encoding,
          step: async (results: ParseResult<JuzgadoRaw>, parser) => {
            parser.pause();
            try {
              const juzgado = results.data;
              if (!juzgado.nombre || juzgado.nombre.trim() === '') {
                parser.resume();
                return;
              }

              const departamento = departamentosMap.get(juzgado.id_departamento);
              const provinciaId = departamento?.id_provincia;
              const provinciaNombre = provinciaId ? (provinciasMap.get(provinciaId) || 'N/A') : 'N/A';
              
              const ciudadData = ciudadesMap.get(juzgado.id_ciudad);
              const ciudadNombre = ciudadData ? ciudadData.nombre : 'N/A';

              const courthouseDoc: CourthouseFinal = {
                  nombre: juzgado.nombre,
                  dependencia: provinciaNombre,
                  ciudad: ciudadNombre,
                  fuero: juzgado.fuero || 'Sin Fuero',
                  instancia: juzgado.instancia || 'Sin Instancia',
                  direccion: juzgado.direccion || '',
                  telefono: juzgado.telefono || '',
              };

              const docRef = doc(collection(firestore, 'courthouses'));
              batch.set(docRef, courthouseDoc);
              batchCounter++;
              totalProcessed++;

              setStatusText(`Procesando... ${totalProcessed} juzgados encontrados.`);
              if (files.juzgados) {
                const currentProgress = 15 + (results.meta.cursor / files.juzgados.size) * 85;
                setProgress(currentProgress);
              }

              if (batchCounter >= BATCH_SIZE) {
                  await batch.commit();
                  batch = writeBatch(firestore);
                  batchCounter = 0;
                  // Small delay to prevent UI freeze on very large files
                  await new Promise(r => setTimeout(r, 20)); 
              }

            } catch (stepError) {
                console.error("Error procesando una fila:", stepError);
                parser.abort();
                reject(stepError);
            } finally {
                parser.resume();
            }
          },
          complete: async () => {
            try {
              if (batchCounter > 0) {
                await batch.commit();
              }
              setStatusText(`¡Carga Completa! Se procesaron y cargaron ${totalProcessed} juzgados.`);
              setProgress(100);
              toast({
                title: '¡Carga Completa!',
                description: `Se han cargado ${totalProcessed} juzgados en la base de datos.`,
                variant: 'default',
              });
              resolve();
            } catch (finalCommitError) {
              reject(finalCommitError);
            }
          },
          error: (err: any) => {
            reject(new Error(`Error al analizar el archivo de juzgados: ${err.message}`));
          }
        });
      });
        
    } catch (e: any) {
      console.error("Error durante la carga de datos:", e);
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

  const handleDeleteAllData = async () => {
    setIsDeleting(true);
    setDeleteProgress(0);
    setDeleteStatusText('Iniciando eliminación...');
    setError(null);

    try {
      const courthousesRef = collection(firestore, 'courthouses');
      const querySnapshot = await getDocs(courthousesRef);
      const totalDocs = querySnapshot.size;
      
      if (totalDocs === 0) {
        toast({ title: 'No hay juzgados para eliminar.' });
        setIsDeleting(false);
        return;
      }

      setDeleteStatusText(`Encontrados ${totalDocs} juzgados para eliminar.`);
      
      let batch = writeBatch(firestore);
      let batchCounter = 0;
      let deletedCounter = 0;
      const BATCH_SIZE = 499;

      for (const docSnapshot of querySnapshot.docs) {
        batch.delete(doc(firestore, 'courthouses', docSnapshot.id));
        batchCounter++;
        deletedCounter++;
        
        if (batchCounter === BATCH_SIZE || deletedCounter === totalDocs) {
          await batch.commit();
          setDeleteProgress((deletedCounter / totalDocs) * 100);
          setDeleteStatusText(`Eliminando ${deletedCounter} de ${totalDocs} juzgados...`);
          batch = writeBatch(firestore);
          batchCounter = 0;
          await new Promise(r => setTimeout(r, 50));
        }
      }

      setDeleteProgress(100);
      setDeleteStatusText(`¡Eliminación Completa! Se eliminaron ${totalDocs} juzgados.`);
      toast({
        title: '¡Base de Datos Limpia!',
        description: `Se han eliminado todos los juzgados. Ahora puede cargar la lista actualizada.`,
        variant: 'default',
      });

    } catch (e: any) {
        console.error("Error durante la eliminación:", e);
        const errorMessage = `Ocurrió un error al eliminar: ${e.message || 'Error desconocido'}.`;
        setError(errorMessage);
        setDeleteStatusText('Error en la eliminación.');
        toast({
            title: 'Error durante la eliminación',
            description: e.message || 'No se pudo completar la eliminación.',
            variant: 'destructive',
        });
    } finally {
        setIsDeleting(false);
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
          <p className="font-semibold text-primary truncate max-w-full">{file.name}</p>
          <p className="text-xs text-muted-foreground">{file.size > 1024 * 1024 ? `${(file.size / (1024*1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`}</p>
        </>
      ) : (
        <>
          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="font-semibold">Subir {label}</p>
          <p className="text-xs text-muted-foreground">Arrastra o haz clic</p>
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carga de Base de Datos desde CSV</CardTitle>
          <CardDescription>
            Convierta sus tablas SQL a formato CSV y suba cada archivo. Si observa caracteres extraños (ej: `Ã³` en lugar de `ó`), intente cambiar la codificación del archivo antes de cargarlo.
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
                <p className="text-sm text-center text-muted-foreground">{statusText}</p>
                <Progress value={progress} />
            </div>
          )}

          {error && !isDeleting && (
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
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t mt-6">
            <div className="flex items-center gap-2">
              <label htmlFor="encoding-select" className="text-sm font-medium text-muted-foreground">Codificación:</label>
              <Select value={encoding} onValueChange={setEncoding}>
                <SelectTrigger id="encoding-select" className="w-[180px]">
                  <SelectValue placeholder="Seleccionar..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ISO-8859-1">ISO-8859-1 (Latin1)</SelectItem>
                  <SelectItem value="UTF-8">UTF-8</SelectItem>
                  <SelectItem value="windows-1252">Windows-1252</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleLoadData} disabled={!allFilesSelected || isLoading || isDeleting} size="lg">
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
      
      <Card className="border-destructive">
          <CardHeader>
              <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
              <CardDescription>
                  Acciones destructivas que no se pueden deshacer. Úselo con precaución para limpiar la base de datos antes de una nueva carga.
              </CardDescription>
          </CardHeader>
          <CardContent>
              {isDeleting && (
                 <div className="space-y-2">
                    <p className="text-sm text-center text-muted-foreground">{deleteStatusText}</p>
                    <Progress value={deleteProgress} className="[&>div]:bg-destructive" />
                </div>
              )}
              {error && isDeleting && (
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20 mt-4">
                     <div className="flex items-start gap-4">
                        <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
                        <div>
                            <h3 className="font-semibold text-destructive">Error en la Eliminación</h3>
                            <p className="text-sm text-left text-destructive/80">
                                {error}
                            </p>
                        </div>
                    </div>
                </div>
              )}
          </CardContent>
          <CardFooter>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                      <Button variant="destructive" disabled={isLoading || isDeleting}>
                          <Trash2 className="mr-2 h-5 w-5" />
                          Eliminar Todos los Juzgados
                      </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                      <AlertDialogHeader>
                          <AlertDialogTitle>¿Está absolutamente seguro?</AlertDialogTitle>
                          <AlertDialogDescription>
                              Esta acción es irreversible. Se eliminarán permanentemente todos los juzgados de la base de datos.
                          </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                              onClick={handleDeleteAllData}
                              className="bg-destructive hover:bg-destructive/90"
                          >
                              Sí, eliminar todo
                          </AlertDialogAction>
                      </AlertDialogFooter>
                  </AlertDialogContent>
              </AlertDialog>
          </CardFooter>
      </Card>
    </div>
  );
}

    