'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, Trash2, Edit, Search, Upload, Loader2, Database } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Courthouse } from '@/lib/types';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  useCollection,
  useFirebase,
  useMemoFirebase,
  addDocumentNonBlocking,
  updateDocumentNonBlocking,
  deleteDocumentNonBlocking,
} from '@/firebase';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import Papa from 'papaparse';
import { mockDependencias, mockCourthouses } from '@/lib/data';

export default function AdminCourthousesPage() {
  const { firestore } = useFirebase();
  const courthousesQuery = useMemoFirebase(() => collection(firestore, 'courthouses'), [firestore]);
  const { data: courthouses, isLoading } = useCollection<Courthouse>(courthousesQuery);
  
  const [isImporting, setIsImporting] = useState(false);
  const [isMockLoading, setIsMockLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [dependenciaFilter, setDependenciaFilter] = useState('all');
  const [fueroFilter, setFueroFilter] = useState('all');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [editingCourthouse, setEditingCourthouse] = useState<Partial<Courthouse> | null>(null);
  const { toast } = useToast();

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);
  const [courthouseIdToDelete, setCourthouseIdToDelete] = useState<string | null>(null);
  const [showBulkEditDialog, setShowBulkEditDialog] = useState(false);

  const form = useForm<Courthouse>();
  const bulkEditForm = useForm<{ dependencia?: string; fuero?: string; instancia?: string; ciudad?: string; }>();

  useEffect(() => {
    if (editingCourthouse) {
      form.reset(editingCourthouse as Courthouse);
    }
  }, [editingCourthouse, form]);

  const dependencias = useMemo(
    () => ['all', ...mockDependencias.map((p) => p.nombre).sort()],
    []
  );

  const fueros = useMemo(
    () => ['all', ...Array.from(new Set((courthouses || []).map((c) => c.fuero))).sort()],
    [courthouses]
  );

  const filteredCourthouses = useMemo(() => {
    if (!courthouses) return [];
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);

    return courthouses.filter((courthouse) => {
      const dependenciaMatch =
        dependenciaFilter === 'all' || courthouse.dependencia === dependenciaFilter;
      const fueroMatch = fueroFilter === 'all' || courthouse.fuero === fueroFilter;

      if (!dependenciaMatch || !fueroMatch) {
        return false;
      }
      
      if (searchWords.length === 0) {
        return true;
      }

      const courthouseText = [
        courthouse.nombre,
        courthouse.ciudad,
        courthouse.dependencia,
        courthouse.fuero,
        courthouse.instancia,
      ]
        .join(' ')
        .toLowerCase();

      return searchWords.every((word) => courthouseText.includes(word));
    });
  }, [courthouses, searchTerm, dependenciaFilter, fueroFilter]);

  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setSelectedRows(filteredCourthouses.map((c) => c.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  const handleCreate = () => {
    const newCourthouse: Partial<Courthouse> = {
      nombre: 'Nuevo Juzgado',
      dependencia: 'Buenos Aires',
      ciudad: 'La Plata',
      fuero: 'Civil y Comercial',
      instancia: 'Primera Instancia',
      direccion: '',
      telefono: ''
    };
    setEditingCourthouse(newCourthouse);
  };

  const handleDeleteRequest = (id: string) => {
    setCourthouseIdToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleSingleDelete = () => {
    if (!courthouseIdToDelete) return;
    deleteDocumentNonBlocking(doc(firestore, 'courthouses', courthouseIdToDelete));
    toast({
      title: 'Juzgado eliminado',
      description: 'El juzgado ha sido eliminado correctamente.',
    });
    setShowDeleteConfirm(false);
    setCourthouseIdToDelete(null);
  };

  const handleBulkDelete = () => {
    const count = selectedRows.length;
    const batch = writeBatch(firestore);
    selectedRows.forEach(id => {
      const docRef = doc(firestore, 'courthouses', id);
      batch.delete(docRef);
    });

    batch.commit().then(() => {
      setSelectedRows([]);
      toast({
        title: `${count} juzgado(s) eliminado(s)`,
        description: 'Los juzgados seleccionados han sido eliminados.',
      });
    }).catch(error => {
      console.error("Error al eliminar en bloque:", error);
      toast({
        variant: "destructive",
        title: "Error de eliminación",
        description: "No se pudieron eliminar los juzgados seleccionados.",
      });
    });
    
    setShowBulkDeleteConfirm(false);
  }

  const onSubmitEdit = (data: Courthouse) => {
    const isNew = !editingCourthouse?.id;
    if (isNew) {
        addDocumentNonBlocking(collection(firestore, 'courthouses'), data);
        toast({ title: 'Juzgado Creado', description: 'El nuevo juzgado ha sido añadido.' });
    } else {
        updateDocumentNonBlocking(doc(firestore, 'courthouses', editingCourthouse!.id!), data);
        toast({ title: 'Juzgado Actualizado', description: 'Los cambios en el juzgado han sido guardados.' });
    }
    setEditingCourthouse(null);
  };
  
  const handleBulkUpdate = (data: { dependencia?: string; fuero?: string; instancia?: string; ciudad?: string }) => {
    const updates = Object.fromEntries(
        Object.entries(data).filter(([, value]) => value && value.trim() !== '')
    );

    if (Object.keys(updates).length === 0) {
        toast({
            variant: 'destructive',
            title: 'No se realizaron cambios',
            description: 'Por favor, complete al menos un campo para actualizar.',
        });
        return;
    }

    const batch = writeBatch(firestore);
    selectedRows.forEach(id => {
      const docRef = doc(firestore, 'courthouses', id);
      batch.update(docRef, updates);
    });

    batch.commit().then(() => {
       toast({
          title: 'Actualización en bloque exitosa',
          description: `${selectedRows.length} juzgados han sido modificados.`,
      });
      setShowBulkEditDialog(false);
      bulkEditForm.reset();
      setSelectedRows([]);
    }).catch(error => {
      console.error("Error al actualizar en bloque:", error);
      toast({
        variant: "destructive",
        title: "Error de actualización",
        description: "No se pudieron actualizar los juzgados seleccionados.",
      });
    });
  };

  const handleFileImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    toast({
        title: "Iniciando importación...",
        description: "Por favor espere mientras se procesa el archivo CSV. Esto puede tardar varios minutos para archivos grandes.",
        duration: 5000,
    });

    Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
            const requiredHeaders = ['nombre', 'dependencia', 'ciudad', 'fuero', 'instancia', 'direccion', 'telefono'];
            const fileHeaders = results.meta.fields || [];
            const missingHeaders = requiredHeaders.filter(h => !fileHeaders.includes(h));

            if (missingHeaders.length > 0) {
                toast({
                    variant: "destructive",
                    title: "Error en el archivo CSV",
                    description: `Faltan las siguientes columnas obligatorias: ${missingHeaders.join(', ')}`,
                    duration: 10000,
                });
                setIsImporting(false);
                return;
            }

            const courthousesData = results.data as any[];
            let successfulImports = 0;
            const batchSize = 499; // Firestore allows a maximum of 500 operations in a single batch.

            try {
                for (let i = 0; i < courthousesData.length; i += batchSize) {
                    const batch = writeBatch(firestore);
                    const chunk = courthousesData.slice(i, i + batchSize);
                    
                    chunk.forEach(courthouse => {
                        if (courthouse.nombre && courthouse.nombre.trim() !== '') {
                            const docRef = doc(collection(firestore, 'courthouses')); // Firestore will generate an ID
                            const newCourthouse = {
                                nombre: courthouse.nombre || '',
                                dependencia: courthouse.dependencia || '',
                                ciudad: courthouse.ciudad || '',
                                fuero: courthouse.fuero || '',
                                instancia: courthouse.instancia || '',
                                direccion: courthouse.direccion || '',
                                telefono: courthouse.telefono || '',
                            };
                            batch.set(docRef, newCourthouse);
                            successfulImports++;
                        }
                    });
                    
                    await batch.commit();
                    
                    toast({
                        title: "Importando...",
                        description: `Se han procesado ${i + chunk.length} de ${courthousesData.length} filas.`,
                        duration: 3000,
                    });
                }
                
                toast({
                    title: "Importación completada",
                    description: `Se han añadido ${successfulImports} juzgados a la base de datos. La página se actualizará.`,
                    duration: 5000,
                });

            } catch (error) {
                console.error("Error al importar juzgados:", error);
                toast({
                    variant: "destructive",
                    title: "Error de importación",
                    description: "Ocurrió un error al guardar los juzgados. Consulte la consola para más detalles.",
                    duration: 10000,
                });
            } finally {
                setIsImporting(false);
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""; // Reset file input
                }
            }
        },
        error: (error: any) => {
            console.error("Error al parsear CSV:", error);
            toast({
                variant: "destructive",
                title: "Error de archivo",
                description: "No se pudo leer el archivo CSV. Verifique el formato.",
                duration: 10000,
            });
            setIsImporting(false);
        }
    });
  };
  
  const handleLoadMockData = async () => {
    if (courthouses && courthouses.length > 0) {
      toast({
        variant: "destructive",
        title: "Base de datos no vacía",
        description: "Para cargar datos de prueba, primero elimine los juzgados existentes para evitar duplicados.",
      });
      return;
    }

    setIsMockLoading(true);
    toast({
      title: "Cargando datos de prueba...",
      description: `Se añadirán ${mockCourthouses.length} juzgados. Por favor espere.`,
    });

    try {
      const batchSize = 499;
      for (let i = 0; i < mockCourthouses.length; i += batchSize) {
        const batch = writeBatch(firestore);
        const chunk = mockCourthouses.slice(i, i + batchSize);
        chunk.forEach(courthouse => {
          const docRef = doc(collection(firestore, 'courthouses'));
          batch.set(docRef, courthouse);
        });
        await batch.commit();
      }
      toast({
        title: "Carga completada",
        description: `Se han añadido ${mockCourthouses.length} juzgados de prueba.`,
      });
    } catch (error) {
      console.error("Error al cargar datos de prueba:", error);
      toast({
        variant: "destructive",
        title: "Error en la carga",
        description: "No se pudieron cargar los datos de prueba. Consulte la consola.",
      });
    } finally {
      setIsMockLoading(false);
    }
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
        <div className="flex gap-2">
           <Button onClick={() => fileInputRef.current?.click()} disabled={isImporting || isMockLoading}>
              {isImporting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
              {isImporting ? 'Importando...' : 'Importar desde CSV'}
           </Button>
           <Input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileImport} 
              className="hidden" 
              accept=".csv"
           />
            <Button onClick={handleLoadMockData} disabled={isImporting || isMockLoading} variant="outline">
              {isMockLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Database className="mr-2 h-4 w-4" />}
              {isMockLoading ? 'Cargando...' : 'Cargar Juzgados de Prueba'}
           </Button>
          <Button onClick={handleCreate} disabled={isImporting || isMockLoading}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Crear Juzgado
          </Button>
        </div>
      </div>

      <div className="mb-4 p-4 bg-card rounded-lg border">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, ciudad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={dependenciaFilter} onValueChange={setDependenciaFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por dependencia" />
            </SelectTrigger>
            <SelectContent>
              {dependencias.map((p) => (
                <SelectItem key={p} value={p}>
                  {p === "all" ? "Todas las dependencias" : p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={fueroFilter} onValueChange={setFueroFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por fuero" />
            </SelectTrigger>
            <SelectContent>
              {fueros.map((f) => (
                <SelectItem key={f} value={f}>
                  {f === "all" ? "Todos los fueros" : f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {selectedRows.length > 0 && (
          <div className="mb-4 flex items-center gap-4">
              <Button variant="destructive" onClick={() => setShowBulkDeleteConfirm(true)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar ({selectedRows.length})
              </Button>
              <Button variant="outline" onClick={() => setShowBulkEditDialog(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Editar en bloque ({selectedRows.length})
              </Button>
              <span className="text-sm text-muted-foreground">{selectedRows.length} seleccionado(s)</span>
          </div>
      )}

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    courthouses && selectedRows.length > 0 && selectedRows.length === filteredCourthouses.length ? true :
                    selectedRows.length > 0 && selectedRows.length < filteredCourthouses.length ? 'indeterminate' : false
                  }
                  onCheckedChange={handleSelectAll}
                  disabled={!courthouses}
                />
              </TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Ciudad</TableHead>
              <TableHead>Dependencia</TableHead>
              <TableHead>Fuero</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && [...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell colSpan={6}><Skeleton className="h-8 w-full" /></TableCell>
              </TableRow>
            ))}
            {!isLoading && filteredCourthouses.map((courthouse) => (
              <TableRow key={courthouse.id} data-state={selectedRows.includes(courthouse.id) && 'selected'}>
                <TableCell>
                  <Checkbox 
                    checked={selectedRows.includes(courthouse.id)}
                    onCheckedChange={(checked) => handleRowSelect(courthouse.id, !!checked)}
                  />
                </TableCell>
                <TableCell className="font-medium">{courthouse.nombre}</TableCell>
                <TableCell>{courthouse.ciudad}</TableCell>
                <TableCell>{courthouse.dependencia}</TableCell>
                <TableCell>{courthouse.fuero}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setEditingCourthouse(courthouse)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onSelect={() => handleDeleteRequest(courthouse.id)}
                      >
                         <Trash2 className="mr-2 h-4 w-4" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
             {!isLoading && filteredCourthouses.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                        No se encontraron resultados. Utilice el botón "Importar desde CSV" para poblar la base de datos.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

       {editingCourthouse && (
          <Dialog open={!!editingCourthouse} onOpenChange={(isOpen) => !isOpen && setEditingCourthouse(null)}>
              <DialogContent>
                  <DialogHeader>
                      <DialogTitle>{editingCourthouse.id ? 'Editar Juzgado' : 'Crear Juzgado'}</DialogTitle>
                      <DialogDescription>
                          Realice cambios en los detalles del juzgado aquí. Haga clic en guardar cuando haya terminado.
                      </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={form.handleSubmit(onSubmitEdit)} className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="nombre">Nombre</Label>
                          <Input id="nombre" {...form.register('nombre')} />
                        </div>
                         <div className="grid gap-2">
                          <Label htmlFor="ciudad">Ciudad</Label>
                          <Input id="ciudad" {...form.register('ciudad')} />
                        </div>
                         <div className="grid gap-2">
                            <Label htmlFor="dependencia">Dependencia</Label>
                            <Select onValueChange={(value) => form.setValue('dependencia', value)} defaultValue={form.getValues('dependencia')}>
                                <SelectTrigger>
                                <SelectValue placeholder="Seleccionar dependencia" />
                                </SelectTrigger>
                                <SelectContent>
                                {mockDependencias.map((p) => (
                                    <SelectItem key={p.id} value={p.nombre}>
                                    {p.nombre}
                                    </SelectItem>
                                ))}
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="grid gap-2">
                          <Label htmlFor="fuero">Fuero</Label>
                          <Input id="fuero" {...form.register('fuero')} />
                        </div>
                         <div className="grid gap-2">
                          <Label htmlFor="instancia">Instancia</Label>
                          <Input id="instancia" {...form.register('instancia')} />
                        </div>
                      <DialogFooter>
                          <Button type="button" variant="ghost" onClick={() => setEditingCourthouse(null)}>Cancelar</Button>
                          <Button type="submit">Guardar Cambios</Button>
                      </DialogFooter>
                  </form>
              </DialogContent>
          </Dialog>
      )}

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente el juzgado.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setCourthouseIdToDelete(null)}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleSingleDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showBulkDeleteConfirm} onOpenChange={setShowBulkDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente los {selectedRows.length} juzgados seleccionados.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleBulkDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog open={showBulkEditDialog} onOpenChange={setShowBulkEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar en Bloque ({selectedRows.length} juzgados)</DialogTitle>
            <DialogDescription>
              Solo los campos que complete se aplicarán a los juzgados seleccionados. Deje un campo en blanco para no modificarlo.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={bulkEditForm.handleSubmit(handleBulkUpdate)} className="space-y-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bulk-dependencia">Dependencia</Label>
              <Select onValueChange={(value) => bulkEditForm.setValue('dependencia', value)} >
                  <SelectTrigger id="bulk-dependencia">
                      <SelectValue placeholder="Seleccionar nueva dependencia" />
                  </SelectTrigger>
                  <SelectContent>
                      {dependencias.filter(d => d !== 'all').map((p) => (
                          <SelectItem key={p} value={p}>
                              {p}
                          </SelectItem>
                      ))}
                  </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bulk-ciudad">Ciudad</Label>
              <Input id="bulk-ciudad" {...bulkEditForm.register('ciudad')} placeholder="Nueva ciudad"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bulk-fuero">Fuero</Label>
              <Input id="bulk-fuero" {...bulkEditForm.register('fuero')} placeholder="Nuevo fuero"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bulk-instancia">Instancia</Label>
              <Input id="bulk-instancia" {...bulkEditForm.register('instancia')} placeholder="Nueva instancia"/>
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => { setShowBulkEditDialog(false); bulkEditForm.reset(); }}>Cancelar</Button>
              <Button type="submit">Aplicar Cambios</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
