
'use client';

import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Loader2, Upload, FileCheck, AlertTriangle, Trash2, CheckCircle, XCircle } from 'lucide-react';
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
import { useFirebase } from '@/firebase';
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

// As per the final prompt, we need to handle all 19 tables.
const REQUIRED_TABLES = [
  'provincias', 'departamentos', 'ciudades', 'juzgados', 'fueros', 
  'fueros_x_juzgados', 'categorias', 'permisos', 'administradores', 'usuarios', 
  'matriculas', 'votantes', 'votantes_temp', 'votos', 'votos_comentarios', 
  'comentarios', 'dependencias', 'ranking_general', 'historico'
];

type FileState = { [key: string]: File | null };
type ProgressState = { [key: string]: { processed: number; total: number; errors: number } };
type LogEntry = { type: 'info' | 'error' | 'success'; message: string };

// Helper class for robust Firestore batching
class FirestoreBatchHandler {
  private db: Firestore;
  private batch: WriteBatch;
  private count: number = 0;
  private batchSize: number;

  constructor(db: Firestore, batchSize: number = 450) {
    this.db = db;
    this.batchSize = batchSize;
    this.batch = writeBatch(db);
  }

  add(docRef: any, data: any) {
    this.batch.set(docRef, data);
    this.count++;
    if (this.count >= this.batchSize) {
      return this.commit();
    }
    return Promise.resolve();
  }

  async commit() {
    if (this.count === 0) return;
    try {
      await this.batch.commit();
    } finally {
      this.batch = writeBatch(this.db);
      this.count = 0;
    }
  }
}

export default function AdminCourthousesPage() {
  const [files, setFiles] = useState<FileState>(
    REQUIRED_TABLES.reduce((acc, tbl) => ({ ...acc, [tbl]: null }), {})
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
    setLogs(prev => [...prev, { type, message }]);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tableName: string) => {
    const file = e.target.files?.[0] || null;
    setFiles(prev => ({ ...prev, [tableName]: file }));
  };

  const allFilesSelected = REQUIRED_TABLES.every(table => files[table]);
  
  const parseFileInChunks = <T,>(file: File, chunkSize: number, onChunk: (chunk: T[]) => Promise<void>, onComplete: (total: number) => void) => {
    let rowCounter = 0;
    return new Promise<void>((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        chunkSize: chunkSize * 1024, // chunkSize in KB
        chunk: async (results, parser) => {
            parser.pause();
            try {
                rowCounter += results.data.length;
                await onChunk(results.data as T[]);
            } catch (err: any) {
                reject(new Error(`Error processing chunk for ${file.name}: ${err.message}`));
            } finally {
                parser.resume();
            }
        },
        complete: () => {
            onComplete(rowCounter);
            resolve();
        },
        error: (err: any) => {
          reject(new Error(`Failed to parse ${file.name}: ${err.message}`));
        }
      });
    });
  };

  const genericImport = async (tableName: string, file: File) => {
    addLog(`Starting import for table: ${tableName}`);
    const batchHandler = new FirestoreBatchHandler(firestore);
    const errorBatchHandler = new FirestoreBatchHandler(firestore);
    let rowCounter = 0;
    let errorCounter = 0;

    setProgress(prev => ({ ...prev, [tableName]: { processed: 0, total: 0, errors: 0 } }));

    await new Promise<void>((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            worker: false,
            step: async (row: ParseResult<any>, parser) => {
                parser.pause();
                try {
                    const data = row.data;
                    const docId = data.id ? String(data.id) : parser.getCharIndex().toString(); // Use ID or fall back to character index

                    if (!data.id) {
                        addLog(`Row ${rowCounter + 1} in ${tableName} has no ID. Using fallback.`, 'error');
                    }
                    
                    const docRef = doc(firestore, tableName, docId);
                    await batchHandler.add(docRef, data);
                    
                    rowCounter++;
                    if (rowCounter % 100 === 0) {
                        setProgress(prev => ({ ...prev, [tableName]: { ...prev[tableName], processed: rowCounter } }));
                    }

                } catch (err: any) {
                    errorCounter++;
                    const errorDocRef = doc(collection(firestore, 'import_errors'));
                    await errorBatchHandler.add(errorDocRef, {
                        table: tableName,
                        rowNumber: rowCounter,
                        rawRow: JSON.stringify(row.data),
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
                    setProgress(prev => ({ ...prev, [tableName]: { processed: rowCounter, total: rowCounter, errors: errorCounter } }));
                    addLog(`Finished importing ${tableName}: ${rowCounter} rows processed, ${errorCounter} errors.`, 'success');
                    resolve();
                } catch(err: any) {
                    addLog(`Final commit failed for ${tableName}: ${err.message}`, 'error');
                    reject(err);
                }
            },
            error: (err: any) => {
                addLog(`Parsing error for ${tableName}: ${err.message}`, 'error');
                reject(err);
            }
        });
    });
  };

  const handleImportData = async () => {
    if (!allFilesSelected) {
        toast({ title: "Faltan archivos", description: "Por favor, seleccione los 19 archivos CSV requeridos.", variant: "destructive" });
        return;
    }
    setIsImporting(true);
    setLogs([]);
    setProgress({});
    addLog("Starting full database import...", 'info');

    try {
        const memoryMaps = {
            provincias: new Map<string, any>(),
            departamentos: new Map<string, any>(),
            ciudades: new Map<string, any>(),
            fueros: new Map<string, any>(),
            juzgados: new Map<string, any>(),
            usuarios: new Map<string, any>(),
            votos: new Map<string, any>(),
        };

        // Import catalogs first to build in-memory maps for denormalization
        for (const tableName of ['provincias', 'departamentos', 'ciudades', 'fueros', 'usuarios', 'votos']) {
            if (files[tableName]) {
                addLog(`Building in-memory map for ${tableName}...`);
                await new Promise<void>((resolve, reject) => {
                    Papa.parse(files[tableName]!, {
                        header: true,
                        skipEmptyLines: true,
                        complete: (results) => {
                            results.data.forEach((row: any) => {
                                if (row.id && (memoryMaps as any)[tableName]) {
                                    (memoryMaps as any)[tableName].set(String(row.id), row);
                                }
                            });
                            addLog(`Map for ${tableName} created with ${(memoryMaps as any)[tableName].size} entries.`, 'success');
                            resolve();
                        },
                        error: reject
                    });
                });
            }
        }

        // Now import tables in order, using denormalization where needed
        await genericImport('categorias', files.categorias!);
        await genericImport('permisos', files.permisos!);
        await genericImport('administradores', files.administradores!);
        await genericImport('dependencias', files.dependencias!);

        // Special handling for JUZGADOS with denormalization
        addLog(`Starting import for table: juzgados (with denormalization)`);
        const juzgadosBatch = new FirestoreBatchHandler(firestore);
        let juzgadosCount = 0;
        await new Promise<void>((resolve, reject) => {
             Papa.parse(files.juzgados!, {
                header: true, skipEmptyLines: true, worker: false,
                step: async (row: ParseResult<any>, parser) => {
                    parser.pause();
                    const juzgado = row.data;
                    const ciudad = memoryMaps.ciudades.get(juzgado.id_ciudad);
                    const departamento = ciudad ? memoryMaps.departamentos.get(ciudad.id_provincia) : null;
                    const provincia = departamento ? memoryMaps.provincias.get(departamento.id_provincia) : null;

                    const docData = {
                        ...juzgado,
                        provinciaNombre: provincia?.nombre || 'N/A',
                        departamentoNombre: departamento?.nombre || 'N/A',
                        ciudadNombre: ciudad?.nombre || 'N/A'
                    };
                    memoryMaps.juzgados.set(String(juzgado.id), docData); // Add to map for later use
                    await juzgadosBatch.add(doc(firestore, 'juzgados', String(juzgado.id)), docData);
                    juzgadosCount++;
                    if(juzgadosCount % 100 === 0) setProgress(p => ({...p, juzgados: { processed: juzgadosCount, total: 0, errors: 0}}));
                    parser.resume();
                },
                complete: async () => {
                    await juzgadosBatch.commit();
                    setProgress(p => ({...p, juzgados: { processed: juzgadosCount, total: juzgadosCount, errors: 0}}));
                    addLog(`Finished importing juzgados: ${juzgadosCount} rows.`, 'success');
                    resolve();
                },
                error: reject
            });
        });

        // Continue with other tables
        await genericImport('fueros_x_juzgados', files.fueros_x_juzgados!);
        await genericImport('matriculas', files.matriculas!);
        await genericImport('votantes', files.votantes!);
        await genericImport('votantes_temp', files.votantes_temp!);
        await genericImport('votos_comentarios', files.votos_comentarios!);
        await genericImport('comentarios', files.comentarios!);
        await genericImport('ranking_general', files.ranking_general!);
        await genericImport('historico', files.historico!);

        addLog("Data import process finished.", 'success');
        toast({ title: 'Importación Completa', description: 'Todos los archivos han sido procesados.' });

    } catch (e: any) {
      console.error("Error during data import:", e);
      addLog(`CRITICAL ERROR: ${e.message}`, 'error');
      toast({ title: 'Error Crítico en la Importación', description: e.message, variant: 'destructive' });
    } finally {
      setIsImporting(false);
    }
  };

  const handleDeleteAllData = async () => {
    setIsDeleting(true);
    addLog('Starting deletion of all imported collections...', 'info');

    for (const tableName of REQUIRED_TABLES) {
        addLog(`Deleting collection: ${tableName}...`);
        try {
            const querySnapshot = await getDocs(collection(firestore, tableName));
            if (querySnapshot.empty) {
                addLog(`Collection ${tableName} is already empty.`, 'info');
                continue;
            }
            let deletedCount = 0;
            const batchHandler = new FirestoreBatchHandler(firestore);
            
            for(const docSnapshot of querySnapshot.docs) {
                batchHandler.add(docSnapshot.ref, {}); // using add with an empty object on a delete-only batch is a trick
                (batchHandler as any).batch.delete(docSnapshot.ref); // direct access to add delete op
                deletedCount++;
            }
            await batchHandler.commit();

            addLog(`Successfully deleted ${deletedCount} documents from ${tableName}.`, 'success');
        } catch (e: any) {
            addLog(`Error deleting from ${tableName}: ${e.message}`, 'error');
        }
    }
    
    addLog('All specified collections have been cleared.', 'success');
    toast({ title: 'Base de Datos Limpia!', description: 'Se han eliminado todas las colecciones importadas.' });
    setIsDeleting(false);
    setDeleteConfirmText('');
  };

  const FileInputBox = ({ id, label }: { id: string, label: string }) => (
    <div
      className={`relative border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center cursor-pointer transition-colors ${files[id] ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
      onClick={() => fileInputRefs.current[id]?.click()}
    >
      <input type="file" accept=".csv" ref={el => fileInputRefs.current[id] = el} onChange={(e) => handleFileChange(e, id)} className="hidden" />
      {files[id] ? (
        <>
          <FileCheck className="h-8 w-8 text-primary mb-1" />
          <p className="font-semibold text-primary text-xs truncate max-w-full" title={files[id]?.name}>{files[id]?.name}</p>
        </>
      ) : (
        <>
          <Upload className="h-8 w-8 text-muted-foreground mb-1" />
          <p className="font-semibold text-sm">{label}</p>
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
            Importe la base de datos completa subiendo los 19 archivos CSV correspondientes. El proceso se realizar por lotes para manejar grandes volúmenes de datos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {REQUIRED_TABLES.map(table => (
              <FileInputBox key={table} id={table} label={table} />
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 border-t mt-6">
            <Button onClick={handleImportData} disabled={!allFilesSelected || isImporting || isDeleting} size="lg">
              {isImporting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Database className="mr-2 h-5 w-5" />
              )}
              Importar Base Completa (19 tablas)
            </Button>
          </div>

           {(isImporting || logs.length > 0) && (
            <div className="space-y-4 pt-4">
                <h3 className="font-semibold">Progreso de Importación</h3>
                {Object.entries(progress).map(([table, p]) => (
                    <div key={table}>
                        <div className="flex justify-between text-sm mb-1">
                            <span>{table}</span>
                            <span className="text-muted-foreground">{p.processed} / {p.total > 0 ? p.total : '?'} (Errores: {p.errors})</span>
                        </div>
                        <Progress value={p.total > 0 ? (p.processed / p.total) * 100 : 0} />
                    </div>
                ))}
                 <h3 className="font-semibold pt-4">Registros</h3>
                 <ScrollArea className="h-48 w-full rounded-md border p-4 font-mono text-xs">
                    {logs.map((log, i) => (
                        <p key={i} className={
                            log.type === 'error' ? 'text-red-500' :
                            log.type === 'success' ? 'text-green-500' : ''
                        }>
                            {log.message}
                        </p>
                    ))}
                 </ScrollArea>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card className="border-destructive">
          <CardHeader>
              <CardTitle className="text-destructive">Zona de Peligro</CardTitle>
              <CardDescription>
                  Esta acción eliminará permanentemente todos los datos de las 19 colecciones importadas. Úselo para limpiar la base de datos antes de una nueva carga.
              </CardDescription>
          </CardHeader>
          <CardContent>
              {isDeleting && (
                 <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Eliminando datos... Por favor, espere.</span>
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
                              Esta acción es irreversible. Se eliminarán permanentemente todos los documentos de las 19 colecciones importadas. Para confirmar, escriba <strong>BORRAR</strong> en el campo de abajo.
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
