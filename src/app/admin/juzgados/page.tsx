'use client';

import { useState } from 'react';
import { mockCourthouses } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Courthouse } from '@/lib/types';

export default function AdminCourthousesPage() {
  const [courthouses, setCourthouses] = useState<Courthouse[]>(mockCourthouses);

  const handleCreate = () => {
    // Lógica para crear un nuevo juzgado (se abriría un modal o una nueva página)
    console.log('Crear nuevo juzgado');
  };

  const handleEdit = (id: string) => {
    // Lógica para editar
    console.log('Editar juzgado:', id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este juzgado?')) {
      setCourthouses(courthouses.filter((c) => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
        <Button onClick={handleCreate}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Juzgado
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Ciudad</TableHead>
              <TableHead>Provincia</TableHead>
              <TableHead>Fuero</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courthouses.map((courthouse) => (
              <TableRow key={courthouse.id}>
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
                      <DropdownMenuItem onClick={() => handleEdit(courthouse.id)}>
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDelete(courthouse.id)}
                      >
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
