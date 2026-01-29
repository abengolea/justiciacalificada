'use client';

import { useState } from 'react';
import { mockUsers } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, Check, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { User } from '@/lib/types';
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


export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const { toast } = useToast();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);

  const handleCreate = () => {
    console.log('Crear nuevo usuario');
    toast({
      title: 'Función no implementada',
      description: 'La creación de usuarios se implementará en una futura versión.',
      variant: 'destructive',
    });
  };

  const handleEdit = (id: string) => {
    console.log('Editar usuario:', id);
    toast({
      title: 'Función no implementada',
      description: 'La edición de usuarios se implementará en una futura versión.',
      variant: 'destructive',
    });
  };
  
  const handleUpdateStatus = (id: string, status: 'approved') => {
    setUsers(users.map((u) => u.id === id ? { ...u, status } : u));
    toast({
      title: 'Usuario aprobado',
      description: 'El registro del usuario ha sido aprobado.',
    });
  };

  const handleDeleteRequest = (id: string) => {
    setUserIdToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = () => {
    if (!userIdToDelete) return;

    setUsers((prev) => prev.filter((u) => u.id !== userIdToDelete));
    toast({
      title: 'Usuario eliminado',
      description: 'El usuario ha sido eliminado correctamente.',
    });

    setShowDeleteConfirm(false);
    setUserIdToDelete(null);
  };
  
  const statusBadgeVariant = {
      pending: 'secondary',
      approved: 'default',
  } as const;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Gestionar Usuarios</h2>
        <Button onClick={handleCreate}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Usuario
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className={user.status === 'pending' ? 'bg-accent/50' : ''}>
                <TableCell className="font-medium">
                  {user.nombre} {user.apellido}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.matricula}</TableCell>
                <TableCell>
                  <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={statusBadgeVariant[user.status]}>
                    {user.status === 'pending' ? 'Pendiente' : 'Aprobado'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {user.status === 'pending' && (
                        <>
                          <DropdownMenuItem onSelect={() => handleUpdateStatus(user.id, 'approved')}>
                            <Check className="mr-2 h-4 w-4" />
                            Aprobar Registro
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </>
                      )}
                      <DropdownMenuItem onSelect={() => handleEdit(user.id)}>
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onSelect={() => handleDeleteRequest(user.id)}
                      >
                         <Trash2 className="mr-2 h-4 w-4" />
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
       <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente al usuario.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setUserIdToDelete(null)}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
