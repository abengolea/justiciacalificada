'use client';

import { useState } from 'react';
import { mockRatings, mockCourthouses, mockUsers } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Trash2, X } from 'lucide-react';
import { Rating } from '@/lib/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';

export default function AdminCommentsPage() {
  const [ratings, setRatings] = useState<Rating[]>(mockRatings);

  const handleUpdateStatus = (id: string, status: 'approved' | 'rejected') => {
    setRatings(ratings.map((r) => r.id === id ? { ...r, status } : r));
  };
  
  const handleDelete = (id: string) => {
    if (window.confirm('¿Está seguro de que desea eliminar este comentario permanentemente?')) {
      setRatings((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const getCourthouseName = (id: string) => {
    return mockCourthouses.find(c => c.id === id)?.nombre ?? 'Juzgado no encontrado';
  }

  const getUserName = (id: string) => {
      const user = mockUsers.find(u => u.id === id);
      return user ? `${user.nombre} ${user.apellido}` : 'Usuario anónimo';
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
        {ratings.map(rating => (
          <Card key={rating.id} className={rating.status === 'pending' ? 'border-primary' : ''}>
            <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg">{getCourthouseName(rating.juzgadoId)}</CardTitle>
                        <CardDescription>
                            Por: {getUserName(rating.usuarioId)} - Calificado el: {' '}
                            {format(new Date(rating.fechaCalificacion), "dd 'de' MMMM, yyyy", {
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
                      onClick={() => handleUpdateStatus(rating.id, 'approved')}
                      className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                    >
                      <Check className="mr-2 h-4 w-4" />
                      Aprobar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleUpdateStatus(rating.id, 'rejected')}
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
                    onClick={() => handleDelete(rating.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar
                  </Button>
            </CardFooter>
          </Card>
        ))}
        {ratings.length === 0 && (
            <p className="text-muted-foreground text-center py-10">No hay comentarios para moderar.</p>
        )}
      </div>
    </div>
  );
}
