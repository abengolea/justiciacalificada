'use client';

import { useState, useMemo, useEffect } from 'react';
import { mockCourthouses, mockDependencias } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, Trash2, Edit, Search } from 'lucide-react';
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

export default function AdminCourthousesPage() {
  const [courthouses, setCourthouses] = useState<Courthouse[]>(mockCourthouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [dependenciaFilter, setDependenciaFilter] = useState('all');
  const [fueroFilter, setFueroFilter] = useState('all');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [editingCourthouse, setEditingCourthouse] = useState<Courthouse | null>(null);
  const [showDuplicatesOnly, setShowDuplicatesOnly] = useState(false);
  const { toast } = useToast();

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false);
  const [courthouseIdToDelete, setCourthouseIdToDelete] = useState<string | null>(null);
  const [showBulkEditDialog, setShowBulkEditDialog] = useState(false);

  const form = useForm<Courthouse>();
  const bulkEditForm = useForm<{ dependencia?: string; fuero?: string; instancia?: string; ciudad?: string; }>();

  useEffect(() => {
    if (editingCourthouse) {
      form.reset(editingCourthouse);
    }
  }, [editingCourthouse, form]);

  const dependencias = useMemo(
    () => ['all', ...mockDependencias.map((p) => p.nombre).sort()],
    []
  );

  const fueros = useMemo(
    () => ['all', ...Array.from(new Set(courthouses.map((c) => c.fuero))).sort()],
    [courthouses]
  );
  
  const normalizeForDuplicateCheck = (text: string) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+en\s+lo\s+/g, ' ') // Remove " en lo "
      // eslint-disable-next-line no-irregular-whitespace
      .replace(/n°|nº|nâ°|no\./g, 'n') // Standardize number abbreviations
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-z0-9\s]/gi, '')   // Remove all non-alphanumeric characters (except spaces)
      .replace(/\s\s+/g, ' ');       // Collapse whitespace
  };

  const filteredCourthouses = useMemo(() => {
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);

    let displayCourthouses = courthouses.filter((courthouse) => {
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

    if (showDuplicatesOnly) {
      const nameAndCityCounts = displayCourthouses.reduce((acc, c) => {
        const key = `${normalizeForDuplicateCheck(c.nombre)}|${normalizeForDuplicateCheck(c.ciudad)}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const duplicateKeys = Object.keys(nameAndCityCounts).filter(key => nameAndCityCounts[key] > 1);

      displayCourthouses = displayCourthouses.filter(c => {
        const key = `${normalizeForDuplicateCheck(c.nombre)}|${normalizeForDuplicateCheck(c.ciudad)}`;
        return duplicateKeys.includes(key);
      }).sort((a, b) => {
        const keyA = `${normalizeForDuplicateCheck(a.nombre)}|${normalizeForDuplicateCheck(a.ciudad)}`;
        const keyB = `${normalizeForDuplicateCheck(b.nombre)}|${normalizeForDuplicateCheck(b.ciudad)}`;
        return keyA.localeCompare(keyB);
      });
    }

    return displayCourthouses;

  }, [courthouses, searchTerm, dependenciaFilter, fueroFilter, showDuplicatesOnly]);

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
    const newCourthouse: Courthouse = {
      id: `courthouse-${Date.now()}`,
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
    setCourthouses((prev) => prev.filter((c) => c.id !== courthouseIdToDelete));
    toast({
      title: 'Juzgado eliminado',
      description: 'El juzgado ha sido eliminado correctamente.',
    });
    setShowDeleteConfirm(false);
    setCourthouseIdToDelete(null);
  };

  const handleBulkDelete = () => {
    const count = selectedRows.length;
    setCourthouses((prev) => prev.filter((c) => !selectedRows.includes(c.id)));
    setSelectedRows([]);
    toast({
      title: `${count} juzgado(s) eliminado(s)`,
      description: 'Los juzgados seleccionados han sido eliminados.',
    });
    setShowBulkDeleteConfirm(false);
  }

  const onSubmitEdit = (data: Courthouse) => {
    const isNew = !courthouses.some(c => c.id === data.id);
    if (isNew) {
        setCourthouses([data, ...courthouses]);
        toast({ title: 'Juzgado Creado', description: 'El nuevo juzgado ha sido añadido.' });
    } else {
        setCourthouses(courthouses.map((c) => c.id === data.id ? data : c));
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

    setCourthouses(prev =>
        prev.map(c => {
            if (selectedRows.includes(c.id)) {
                return { ...c, ...updates };
            }
            return c;
        })
    );

    toast({
        title: 'Actualización en bloque exitosa',
        description: `${selectedRows.length} juzgados han sido modificados.`,
    });

    setShowBulkEditDialog(false);
    bulkEditForm.reset();
    setSelectedRows([]);
  };

  const handleFindDuplicates = () => {
    setShowDuplicatesOnly(prev => !prev);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
        <div className="flex gap-2">
           <Button variant="outline" onClick={handleFindDuplicates}>
            <Search className="mr-2 h-4 w-4" />
            {showDuplicatesOnly ? "Mostrar Todos" : "Buscar Repetidos"}
          </Button>
          <Button onClick={handleCreate}>
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
                    selectedRows.length > 0 && selectedRows.length === filteredCourthouses.length ? true :
                    selectedRows.length > 0 && selectedRows.length < filteredCourthouses.length ? 'indeterminate' : false
                  }
                  onCheckedChange={handleSelectAll}
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
            {filteredCourthouses.map((courthouse) => (
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
             {filteredCourthouses.length === 0 && (
                <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                        No se encontraron resultados.
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
                      <DialogTitle>{courthouses.some(c => c.id === editingCourthouse.id) ? 'Editar Juzgado' : 'Crear Juzgado'}</DialogTitle>
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
