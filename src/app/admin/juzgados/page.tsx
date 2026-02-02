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
import { useToast } from '@/hooks/use-toast';
import Papa, { ParseResult } from 'papaparse';
import { useFirebase, errorEmitter, FirestorePermissionError } from '@/firebase';
import { collection, writeBatch, doc, getDocs, deleteDoc, WriteBatch, Firestore, collectionGroup } from 'firebase/firestore';
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
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

const orderedTables = [
  'provincias',
  'departamentos',
  'ciudades',
  'juzgados',
  'fueros',
  'fueros_x_juzgados',
  'categorias',
  'permisos',
  'administradores',
  'usuarios',
  'matriculas',
  'votantes',
  'votantes_temp',
  'votos',
  'votos_comentarios',
  'comentarios',
  'dependencias',
  'ranking_general',
  'historico',
];

type FileState = { [key: string]: File | null };
type ProgressState = { [key: string]: { processed: number; total: number; errors: number; status: 'pending' | 'processing' | 'done' | 'error' } };
type LogEntry = { type: 'info' | 'error' | 'success' | 'warn'; message: string };

// Helper class for robust Firestore batching
class FirestoreBatchHandler {
  private db: Firestore;
  private batch: WriteBatch;
  private count: number = 0;
  private batchSize: number;
  private currentCollection: string = '';

  constructor(db: Firestore, batchSize: number = 450) {
    this.db = db;
    this.batchSize = batchSize;
    this.batch = writeBatch(db);
  }

  setCurrentCollection(name: string) {
    this.currentCollection = name;
  }

  async add(docRef: any, data: any) {
    this.batch.set(docRef, data);
    this.count++;
    if (this.count >= this.batchSize) {
      await this.commit();
    }
  }

  async commit() {
    if (this.count === 0) return;
    try {
      await this.batch.commit();
    } catch (e: any) {
        const permissionError = new FirestorePermissionError({
            path: `(batch write to collection: ${this.currentCollection || 'unknown'})`,
            operation: 'write',
        });
        errorEmitter.emit('permission-error', permissionError);
        throw e; // re-throw to be caught by the calling function
    } finally {
      this.batch = writeBatch(this.db);
      this.count = 0;
    }
  }

  async addDelete(docRef: any) {
     this.batch.delete(docRef);
     this.count++;
     if (this.count >= this.batchSize) {
        await this.commit();
     }
  }
}

export default function AdminDatabasePage() {
  const [files, setFiles] = useState<FileState>(
    orderedTables.reduce((acc, tbl) => ({ ...acc, [tbl]: null }), {})
  );
  const [isImporting, setIsImporting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState<ProgressState>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  const { toast } = useToast();
  const { firestore } = useFirebase();
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const addLog = (message: string, type: LogEntry['type'] = 'info') => {
    setLogs(prev => [...prev, { type, message: `[${new Date().toLocaleTimeString()}] ${message}` }]);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tableName: string) => {
    const file = e.target.files?.[0] || null;
    if (file && !file.name.toLowerCase().endsWith('.csv')) {
        toast({ title: "Tipo de archivo incorrecto", description: `Por favor, suba un archivo .csv para la tabla ${tableName}.`, variant: "destructive" });
        return;
    }
    setFiles(prev => ({ ...prev, [tableName]: file }));
  };

  const allFilesSelected = orderedTables.every(table => files[table]);

  const genericImport = (
    tableName: string, 
    file: File, 
    memoryMaps: Record<string, Map<string, any>>,
    onData: (row: any, maps: Record<string, Map<string, any>>) => any,
    getId: (row: any) => string
  ) => {
    return new Promise<void>((resolve, reject) => {
      addLog(`Iniciando importación para: ${tableName}`);
      setProgress(prev => ({ ...prev, [tableName]: { processed: 0, total: file.size, errors: 0, status: 'processing' } }));
      
      const batchHandler = new FirestoreBatchHandler(firestore);
      batchHandler.setCurrentCollection(tableName);
      const errorBatchHandler = new FirestoreBatchHandler(firestore);
      let rowCounter = 0;
      let errorCounter = 0;

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        worker: false, // Must be false to use pause/resume
        step: async (results: ParseResult<any>, parser) => {
          parser.pause();
          try {
            rowCounter++;
            const rawData = results.data;
            if (!rawData.id && tableName !== 'fueros_x_juzgados') {
                throw new Error('La fila no tiene una columna "id".');
            }

            const processedData = onData(rawData, memoryMaps);
            const docId = getId(rawData);
            const docRef = doc(firestore, tableName, docId);
            await batchHandler.add(docRef, processedData);

            if (rowCounter % 100 === 0) {
              setProgress(prev => ({ ...prev, [tableName]: { ...prev[tableName], processed: results.meta.cursor } }));
            }
          } catch (err: any) {
            errorCounter++;
            addLog(`Error en la fila ${rowCounter} de ${tableName}: ${err.message}`, 'error');
            const errorDocRef = doc(collection(firestore, 'import_errors'));
            await errorBatchHandler.add(errorDocRef, {
              table: tableName,
              rowNumber: rowCounter,
              rawRow: JSON.stringify(results.data),
              error: err.message,
              timestamp: new Date()
            });
          } finally {
            parser.resume();
          }
        },
        complete: async () => {
          try {
            await batchHandler.commit();
            await errorBatchHandler.commit();
            setProgress(prev => ({ ...prev, [tableName]: { processed: file.size, total: file.size, errors: errorCounter, status: 'done' } }));
            addLog(`Finalizó importación para ${tableName}: ${rowCounter - errorCounter} filas exitosas, ${errorCounter} errores.`, errorCounter > 0 ? 'warn' : 'success');
            resolve();
          } catch (err: any) {
            addLog(`COMMIT FINAL FALLIDO para ${tableName}: ${err.message}`, 'error');
            setProgress(prev => ({ ...prev, [tableName]: { ...prev[tableName], status: 'error' } }));
            reject(err);
          }
        },
        error: (err: any) => {
          addLog(`Error de parseo para ${tableName}: ${err.message}`, 'error');
          setProgress(prev => ({ ...prev, [tableName]: { ...prev[tableName], status: 'error' } }));
          reject(err);
        }
      });
    });
  };

  const handleImportData = async () => {
    if (!allFilesSelected) {
        toast({ title: "Faltan archivos", description: `Por favor, seleccione los ${orderedTables.length} archivos CSV requeridos.`, variant: "destructive" });
        return;
    }
    setIsImporting(true);
    setLogs([]);
    setProgress(orderedTables.reduce((acc, tbl) => ({ ...acc, [tbl]: { processed: 0, total: 0, errors: 0, status: 'pending' } }), {}));
    addLog("Iniciando importación completa de la base de datos...", 'info');

    try {
        const memoryMaps: Record<string, Map<string, any>> = {
            provincias: new Map(),
            departamentos: new Map(),
            ciudades: new Map(),
            juzgados: new Map(),
            fueros: new Map(),
        };

        const mapBuilder = (tableName: string, file: File, key: string = 'id') => new Promise<void>((resolve, reject) => {
            addLog(`Creando mapa en memoria para ${tableName}...`);
            const map = memoryMaps[tableName];
            let count = 0;
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                worker: false,
                step: (results) => {
                    const row = results.data as any;
                    const idKey = Object.keys(row).find(k => k.toLowerCase() === key);
                    if(idKey && row[idKey]) {
                        map.set(String(row[idKey]), row);
                        count++;
                    }
                },
                complete: () => {
                    addLog(`Mapa para ${tableName} creado con ${count} entradas.`, 'success');
                    resolve();
                },
                error: (err) => {
                    addLog(`Error creando mapa para ${tableName}: ${err.message}`, 'error');
                    reject(err);
                }
            });
        });
        
        await mapBuilder('provincias', files.provincias!);
        await mapBuilder('departamentos', files.departamentos!);
        await mapBuilder('ciudades', files.ciudades!);
        await mapBuilder('fueros', files.fueros!);

        // Import process in order
        for (const tableName of orderedTables) {
            const file = files[tableName];
            if (!file) {
                addLog(`Archivo para la tabla ${tableName} no encontrado. Saltando...`, 'warn');
                continue;
            }

            let onData = (row: any) => row;
            let getId = (row: any) => String(row.id);

            if (tableName === 'juzgados') {
                onData = (row, maps) => {
                    const ciudad = maps.ciudades.get(row.id_ciudad);
                    const departamento = maps.departamentos.get(row.id_departamento);
                    const provincia = departamento ? maps.provincias.get(departamento.id_provincia) : null;
                    
                    return {
                        ...row,
                        provinciaId: provincia?.id || null,
                        dependencia: provincia?.nombre || null,
                        departamentoId: departamento?.id || null,
                        departamentoNombre: departamento?.nombre || null,
                        ciudadId: ciudad?.id || null,
                        ciudad: ciudad?.nombre || null,
                    };
                }
            } else if (tableName === 'fueros_x_juzgados') {
                 onData = (row, maps) => {
                    const juzgado = memoryMaps.juzgados.get(row.id_juzgado);
                    const fuero = maps.fueros.get(row.id_fuero);
                    return {
                      ...row,
                      juzgadoNombre: juzgado?.nombre || null,
                      fueroNombre: fuero?.nombre || null,
                    }
                 };
                 getId = (row: any) => `${row.id_juzgado}_${row.id_fuero}`;
            }

            await genericImport(tableName, file, memoryMaps, onData, getId);

            // If the current table is one that others depend on for denormalization, build its map now.
            if(tableName === 'juzgados') {
              await mapBuilder('juzgados', files.juzgados!);
            }
        }

        addLog("Proceso de importación de datos finalizado.", 'success');
        toast({ title: 'Importación Completa', description: 'Todos los archivos han sido procesados.' });

    } catch (e: any) {
        if (!(e instanceof FirestorePermissionError)) {
            addLog(`ERROR CRÍTICO: ${e.message}`, 'error');
            toast({ title: 'Error Crítico en la Importación', description: e.message, variant: 'destructive' });
        }
    } finally {
      setIsImporting(false);
    }
  };

  const handleDeleteAllData = async () => {
    setIsDeleting(true);
    addLog('Iniciando borrado de todas las colecciones importadas...', 'info');

    const collectionsToDelete = [...orderedTables, 'import_errors'];

    try {
        for (const tableName of collectionsToDelete) {
            addLog(`Eliminando colección: ${tableName}...`);
            const collectionRef = collection(firestore, tableName);
            const batchHandler = new FirestoreBatchHandler(firestore);
            batchHandler.setCurrentCollection(tableName);
            
            const querySnapshot = await getDocs(collectionRef);
            if (querySnapshot.empty) {
                addLog(`La colección ${tableName} ya está vacía.`, 'info');
                continue;
            }
            let deletedCount = 0;
            
            for(const docSnapshot of querySnapshot.docs) {
                await batchHandler.addDelete(docSnapshot.ref);
                deletedCount++;
            }
            await batchHandler.commit(); // Commit any remaining deletes

            addLog(`Se eliminaron ${deletedCount} documentos de ${tableName}.`, 'success');
        }
        
        addLog('Todas las colecciones especificadas han sido limpiadas.', 'success');
        toast({ title: 'Base de Datos Limpia', description: 'Se han eliminado todas las colecciones importadas.' });
    } catch (e: any) {
        // The batchHandler will emit its own contextual error.
        // This catch block is primarily for errors during getDocs.
        if (!(e instanceof FirestorePermissionError)) {
            const permissionError = new FirestorePermissionError({
                path: '(unknown collection during delete)',
                operation: 'list',
            });
            errorEmitter.emit('permission-error', permissionError);
            addLog(`Error al acceder a las colecciones para el borrado.`, 'error');
            toast({ title: 'Error en el Borrado', description: `No se pudo completar el borrado. Verifique los permisos de lectura.`, variant: 'destructive' });
        }
    } finally {
        setIsDeleting(false);
        setDeleteConfirmText('');
    }
  };

  const FileInputBox = ({ id }: { id: string }) => (
    <div
      className={`relative border-2 border-dashed rounded-lg p-3 flex flex-col justify-center items-center text-center cursor-pointer transition-colors ${files[id] ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
      onClick={() => fileInputRefs.current[id]?.click()}
    >
      <input type="file" accept=".csv" ref={el => fileInputRefs.current[id] = el} onChange={(e) => handleFileChange(e, id)} className="hidden" />
      {files[id] ? (
        <>
          <FileCheck className="h-6 w-6 text-primary mb-1" />
          <p className="font-semibold text-primary text-xs truncate max-w-full" title={files[id]?.name}>{files[id]?.name}</p>
        </>
      ) : (
        <>
          <Upload className="h-6 w-6 text-muted-foreground mb-1" />
          <p className="font-semibold text-xs">{id}</p>
          <p className="text-xs text-muted-foreground">(.csv)</p>
        </>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Gestión de Base de Datos</h2>

      <Card>
        <CardHeader>
          <CardTitle>Carga Masiva de Datos desde CSV</CardTitle>
          <CardDescription>
            Importe la base de datos completa subiendo los {orderedTables.length} archivos CSV correspondientes. El proceso se realiza por lotes para manejar grandes volúmenes de datos de forma segura.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {orderedTables.map(table => (
              <FileInputBox key={table} id={table} />
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t mt-6">
            <Button onClick={handleImportData} disabled={!allFilesSelected || isImporting || isDeleting} size="lg">
              {isImporting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Database className="mr-2 h-5 w-5" />
              )}
              Importar Base Completa ({orderedTables.length} tablas)
            </Button>
          </div>

           {(isImporting || logs.length > 0) && (
            <div className="space-y-4 pt-4">
                <h3 className="font-semibold">Progreso de Importación</h3>
                 <div className="space-y-2">
                    {Object.entries(progress).map(([table, p]) => (
                        <div key={table}>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium">{table}</span>
                                <span className={`text-xs font-mono ${p.status === 'done' ? 'text-green-600' : p.status === 'error' ? 'text-red-600' : 'text-muted-foreground'}`}>
                                    {p.status.toUpperCase()} {p.errors > 0 ? `(${p.errors} errores)` : ''}
                                </span>
                            </div>
                            <Progress value={p.total > 0 ? (p.processed / p.total) * 100 : (p.status === 'processing' ? 50 : 0)} />
                        </div>
                    ))}
                 </div>
                 <h3 className="font-semibold pt-4">Registros de Actividad</h3>
                 <ScrollArea className="h-64 w-full rounded-md border p-4 font-mono text-xs bg-muted/20">
                    {logs.map((log, i) => (
                        <p key={i} className={
                            log.type === 'error' ? 'text-red-600' :
                            log.type === 'success' ? 'text-green-600' :
                            log.type === 'warn' ? 'text-yellow-600' : ''
                        }>
                            {log.message}
                        </p>
                    )).reverse()}
                 </ScrollArea>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card className="border-destructive">
          <CardHeader>
              <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
              <CardDescription>
                  Esta acción eliminará permanentemente todos los datos de las {orderedTables.length} colecciones importadas y los registros de errores. Úselo para limpiar la base de datos antes de una nueva carga.
              </CardDescription>
          </CardHeader>
          <CardContent>
              {isDeleting && (
                 <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Eliminando datos... Esto puede tardar varios minutos. Por favor, espere.</span>
                </div>
              )}
          </CardContent>
          <CardFooter>
              <AlertDialog>
                  <AlertDialogTrigger asChild>
                      <Button variant="destructive" disabled={isImporting || isDeleting}>
                          <Trash2 className="mr-2 h-5 w-5" />
                          Borrar Base Importada
                      </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                      <AlertDialogHeader>
                          <AlertDialogTitle>¿Está absolutamente seguro?</AlertDialogTitle>
                          <AlertDialogDescription>
                              Esta acción es irreversible. Se eliminarán permanentemente todos los documentos de las {orderedTables.length} colecciones importadas y la colección `import_errors`. Para confirmar, escriba <strong>BORRAR</strong> en el campo de abajo.
                          </AlertDialogDescription>
                           <Input 
                            value={deleteConfirmText}
                            onChange={(e) => setDeleteConfirmText(e.target.value)}
                            placeholder='Escriba "BORRAR" para confirmar'
                            className="mt-4"
                          />
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setDeleteConfirmText('')}>Cancelar</AlertDialogCancel>
                          <AlertDialogAction
                              onClick={handleDeleteAllData}
                              disabled={deleteConfirmText !== 'BORRAR'}
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
