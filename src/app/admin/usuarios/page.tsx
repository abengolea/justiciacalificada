'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, MoreHorizontal, Check, Trash2, X, ExternalLink } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Lawyer as User } from '@/lib/types';
import { emailLayout, emailButton, emailStyles } from '@/lib/email-templates';
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
  updateDocumentNonBlocking,
  addDocumentNonBlocking,
  deleteDocumentNonBlocking
} from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';


export default function AdminUsersPage() {
  const { firestore } = useFirebase();
  const usersQuery = useMemoFirebase(() => collection(firestore, 'lawyers'), [firestore]);
  const { data: users, isLoading } = useCollection<User>(usersQuery);

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
  
  const handleUpdateStatus = (userToUpdate: User, status: 'approved' | 'rejected') => {
    const lawyerDocRef = doc(firestore, 'lawyers', userToUpdate.id);
    updateDocumentNonBlocking(lawyerDocRef, { status });

    const mailCollectionRef = collection(firestore, "mail");
    const statusText = status === 'approved' ? 'APROBADA' : 'RECHAZADA';
    const loginLink = "https://qualified-justice.web.app/login";

    const mailData = {
      to: [userToUpdate.email],
      message: {
        subject: `Su registro en Justicia Calificada ha sido ${statusText.toLowerCase()}`,
        html: emailLayout({
          body: `
            <h2 style="${emailStyles.heading}">Actualización de su Registro</h2>
            <p style="${emailStyles.body}">Hola ${userToUpdate.nombre},</p>
            <p style="${emailStyles.body}">Le informamos que su solicitud de registro en Justicia Calificada ha sido <strong>${statusText}</strong>.</p>
            ${status === 'approved' 
              ? `<p style="${emailStyles.body}">¡Felicitaciones! Ya puede iniciar sesión en la plataforma y comenzar a calificar juzgados y contribuir con la comunidad.</p>
                 ${emailButton(loginLink, "Iniciar Sesión")}
                ` 
              : `<p style="${emailStyles.body}">Si cree que esto es un error, por favor póngase en contacto con nosotros respondiendo a este correo o escribiendo a contacto@justiciacalificada.com.</p>`
            }
          `,
        }),
      },
    };
    addDocumentNonBlocking(mailCollectionRef, mailData);

    toast({
      title: `Usuario ${status === 'approved' ? 'aprobado' : 'rechazado'}`,
      description: `El registro del usuario ha sido ${status === 'approved' ? 'aprobado' : 'rechazado'}. Se ha enviado una notificación por correo.`,
    });
  };

  const handleDeleteRequest = (id: string) => {
    setUserIdToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = () => {
    if (!userIdToDelete) return;

    const lawyerDocRef = doc(firestore, 'lawyers', userIdToDelete);
    deleteDocumentNonBlocking(lawyerDocRef);
    
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
      rejected: 'destructive',
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
              <TableHead>Credencial</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <>
                {[...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={7}>
                      <Skeleton className="h-8 w-full" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {users && users.map((user) => (
              <TableRow key={user.id} className={user.status === 'pending' ? 'bg-accent/50' : ''}>
                <TableCell className="font-medium">
                  {user.nombre} {user.apellido}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.matricula}</TableCell>
                <TableCell>
                  {user.credencialUrl && user.credencialUrl !== 'N/A' ? (
                    <Button asChild variant="outline" size="sm">
                       <a href={user.credencialUrl} target="_blank" rel="noopener noreferrer">
                          Ver <ExternalLink className="ml-2 h-3 w-3" />
                       </a>
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">No provista</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={statusBadgeVariant[user.status]}>
                     {user.status === 'pending' && 'Pendiente'}
                     {user.status === 'approved' && 'Aprobado'}
                     {user.status === 'rejected' && 'Rechazado'}
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
                          <DropdownMenuItem onSelect={() => handleUpdateStatus(user, 'approved')}>
                            <Check className="mr-2 h-4 w-4" />
                            Aprobar Registro
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleUpdateStatus(user, 'rejected')} className="text-destructive">
                            <X className="mr-2 h-4 w-4" />
                            Rechazar Registro
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
            {!isLoading && (!users || users.length === 0) && (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  No se encontraron usuarios.
                </TableCell>
              </TableRow>
            )}
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
