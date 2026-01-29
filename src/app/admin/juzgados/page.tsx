'use client';

import { useState, useMemo, useEffect } from 'react';
import { mockCourthouses, mockProvincias } from '@/lib/data';
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

export default function AdminCourthousesPage() {
  const [courthouses, setCourthouses] = useState<Courthouse[]>(mockCourthouses);
  const [searchTerm, setSearchTerm] = useState('');
  const [provinciaFilter, setProvinciaFilter] = useState('all');
  const [fueroFilter, setFueroFilter] = useState('all');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [editingCourthouse, setEditingCourthouse] = useState<Courthouse | null>(null);

  const form = useForm<Courthouse>();

  useEffect(() => {
    if (editingCourthouse) {
      form.reset(editingCourthouse);
    }
  }, [editingCourthouse, form]);

  const provincias = useMemo(
    () => ['all', ...mockProvincias.map((p) => p.nombre).sort()],
    []
  );

  const fueros = useMemo(
    () => ['all', ...Array.from(new Set(courthouses.map((c) => c.fuero))).sort()],
    [courthouses]
  );
  
  const filteredCourthouses = useMemo(() => {
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);

    return courthouses.filter((courthouse) => {
      const provinciaMatch =
        provinciaFilter === 'all' || courthouse.provincia === provinciaFilter;
      const fueroMatch = fueroFilter === 'all' || courthouse.fuero === fueroFilter;

      if (!provinciaMatch || !fueroMatch) {
        return false;
      }
      
      if (searchWords.length === 0) {
        return true;
      }

      const courthouseText = [
        courthouse.nombre,
        courthouse.ciudad,
        courthouse.provincia,
        courthouse.fuero,
        courthouse.instancia,
      ]
        .join(' ')
        .toLowerCase();

      return searchWords.every((word) => courthouseText.includes(word));
    });
  }, [courthouses, searchTerm, provinciaFilter, fueroFilter]);

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
    // Logic for creating a new courthouse
    const newCourthouse: Courthouse = {
      id: `courthouse-${Date.now()}`,
      nombre: 'Nuevo Juzgado',
      provincia: 'Buenos Aires',
      ciudad: 'La Plata',
      fuero: 'Civil y Comercial',
      instancia: 'Primera Instancia',
      direccion: '',
      telefono: ''
    };
    setEditingCourthouse(newCourthouse);
  };

  const handleSingleDelete = (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este juzgado?')) {
      setCourthouses(courthouses.filter((c) => c.id !== id));
    }
  };

  const handleBulkDelete = () => {
     if (window.confirm(`¿Está seguro de que desea eliminar ${selectedRows.length} juzgado(s) seleccionados?`)) {
        setCourthouses(courthouses.filter((c) => !selectedRows.includes(c.id)));
        setSelectedRows([]);
     }
  }

  const onSubmitEdit = (data: Courthouse) => {
    const isNew = !courthouses.some(c => c.id === data.id);
    if (isNew) {
        setCourthouses([data, ...courthouses]);
    } else {
        setCourthouses(courthouses.map((c) => c.id === data.id ? data : c));
    }
    setEditingCourthouse(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
        <Button onClick={handleCreate}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Juzgado
        </Button>
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
          <Select value={provinciaFilter} onValueChange={setProvinciaFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por provincia" />
            </SelectTrigger>
            <SelectContent>
              {provincias.map((p) => (
                <SelectItem key={p} value={p}>
                  {p === "all" ? "Todas las provincias" : p}
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
              <Button variant="destructive" onClick={handleBulkDelete}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar ({selectedRows.length})
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
              <TableHead>Provincia</TableHead>
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
                <TableCell>{courthouse.provincia}</TableCell>
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
                      <DropdownMenuItem onClick={() => setEditingCourthouse(courthouse)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleSingleDelete(courthouse.id)}
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
                            <Label htmlFor="provincia">Provincia</Label>
                            <Select onValueChange={(value) => form.setValue('provincia', value)} defaultValue={form.getValues('provincia')}>
                                <SelectTrigger>
                                <SelectValue placeholder="Seleccionar provincia" />
                                </SelectTrigger>
                                <SelectContent>
                                {mockProvincias.map((p) => (
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

    </div>
  );
}
