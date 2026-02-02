
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Trash2, X } from 'lucide-react';
import { Rating, Courthouse, Lawyer } from '@/lib/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
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
import { useCollection, useFirebase, useMemoFirebase, updateDocumentNonBlocking, deleteDocumentNonBlocking, addDocumentNonBlocking } from '@/firebase';
import { collection, collectionGroup, doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Timestamp } from 'firebase/firestore';

export default function AdminCommentsPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();

  const ratingsQuery = useMemoFirebase(() => collectionGroup(firestore, 'ratings'), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  const courthousesQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const lawyersQuery = useMemoFirebase(() => collection(firestore, 'lawyers'), [firestore]);
  const { data: lawyers, isLoading: isLoadingLawyers } = useCollection<Lawyer>(lawyersQuery);

  const courthouseMap = useMemo(() => new Map(courthouses?.map(c => [c.id, c.nombre])), [courthouses]);
  const lawyerMap = useMemo(() => new Map(lawyers?.map(l => [l.id, l])), [lawyers]);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [ratingToDelete, setRatingToDelete] = useState<Rating | null>(null);
  
  const isLoading = isLoadingRatings || isLoadingCourthouses || isLoadingLawyers;

  const handleUpdateStatus = (rating: Rating, status: 'approved' | 'rejected') => {
    const ratingDocRef = doc(firestore, 'juzgados', rating.courthouseId, 'ratings', rating.id);
    updateDocumentNonBlocking(ratingDocRef, { status });

    const lawyer = lawyerMap.get(rating.lawyerId);
    const courthouseName = courthouseMap.get(rating.courthouseId) ?? 'un juzgado';

    if (lawyer && lawyer.email) {
      const mailCollectionRef = collection(firestore, "mail");
      const mailData = {
        to: [lawyer.email],
        message: {
          subject: `Su comentario en Justicia Calificada ha sido ${status === 'approved' ? 'aprobado' : 'rechazado'}`,
          html: `
            <p>Hola ${lawyer.nombre},</p>
            <p>Le informamos que su comentario sobre <strong>${courthouseName}</strong> ha sido <strong>${status === 'approved' ? 'APROBADO' : 'RECHAZADO'}</strong>.</p>
            ${status === 'approved' ? '<p>Su comentario ya es visible para toda la comunidad. ¡Gracias por su contribución!</p>' : '<p>Si cree que esto es un error o que su comentario cumplía con nuestras normas, por favor póngase en contacto con nosotros.</p>'}
            <p>Atentamente,<br>El equipo de Justicia Calificada</p>
          `,
        },
      };
      addDocumentNonBlocking(mailCollectionRef, mailData);
    }
    
    toast({
      title: 'Comentario actualizado',
      description: `El comentario ha sido ${status === 'approved' ? 'aprobado' : 'rechazado'}. Se envió una notificación al usuario.`,
    });
  };
  
  const handleDeleteRequest = (rating: Rating) => {
    setRatingToDelete(rating);
    setShowDeleteConfirm(true);
  };
  
  const handleDelete = () => {
    if (!ratingToDelete) return;
    const ratingDocRef = doc(firestore, 'juzgados', ratingToDelete.courthouseId, 'ratings', ratingToDelete.id);
    deleteDocumentNonBlocking(ratingDocRef);
    
    toast({
      title: 'Comentario eliminado',
      description: 'El comentario ha sido eliminado permanentemente.',
    });
    setShowDeleteConfirm(false);
    setRatingToDelete(null);
  };

  const getCourthouseName = (id: string) => courthouseMap.get(id) ?? 'Juzgado no encontrado';
  const getUserName = (id: string) => {
      const lawyer = lawyerMap.get(id);
      return lawyer ? `${lawyer.nombre} ${lawyer.apellido}` : 'Usuario anónimo';
  };

  const getRatingDate = (rating: Rating) => {
    if (rating.fechaCalificacion instanceof Timestamp) {
      return rating.fechaCalificacion.toDate();
    }
    // Fallback for string dates, though Timestamps are expected from Firestore
    return new Date(rating.fechaCalificacion);
  }
  
  const statusBadgeVariant = {
      pending: 'secondary',
      approved: 'default',
      rejected: 'destructive'
  } as const;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Moderar Comentarios</h2>
      </div>
      <div className="space-y-4">
        {isLoading && [...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
            <CardContent><Skeleton className="h-10 w-full" /></CardContent>
            <CardFooter><Skeleton className="h-8 w-24 ml-auto" /></CardFooter>
          </Card>
        ))}
        {ratings && ratings.map(rating => (
          <Card key={rating.id} className={rating.status === 'pending' ? 'border-primary' : ''}>
            <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{getCourthouseName(rating.courthouseId)}</CardTitle>
                        <CardDescription>
                            Por: {getUserName(rating.lawyerId)} - Calificado el: {' '}
                            {format(getRatingDate(rating), "dd 'de' MMMM, yyyy", {
                                locale: es,
                            })}
                        </CardDescription>
                    </div>
                     <Badge variant={statusBadgeVariant[rating.status]}>
                        {rating.status === 'pending' && 'Pendiente'}
                        {rating.status === 'approved' && 'Aprobado'}
                        {rating.status === 'rejected' && 'Rechazado'}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{rating.comentario}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
               {rating.status === 'pending' && (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleUpdateStatus(rating, 'approved')}
                      className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Aprobar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleUpdateStatus(rating, 'rejected')}
                      className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Rechazar
                    </Button>
                  </>
                )}
                 <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDeleteRequest(rating)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar
                  </Button>
            </CardFooter>
          </Card>
        ))}
        {!isLoading && ratings?.length === 0 && (
            <p className="text-muted-foreground text-center py-10">No hay comentarios para moderar.</p>
        )}
      </div>
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente el comentario.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setRatingToDelete(null)}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
