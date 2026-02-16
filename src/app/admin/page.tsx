'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Gavel, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, collectionGroup } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Courthouse, Lawyer, Rating } from '@/lib/types';

export default function AdminDashboard() {
  const { firestore } = useFirebase();

  const courthousesQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const usersQuery = useMemoFirebase(() => collection(firestore, 'lawyers'), [firestore]);
  const { data: users, isLoading: isLoadingUsers } = useCollection<Lawyer>(usersQuery);

  const ratingsQuery = useMemoFirebase(() => collectionGroup(firestore, 'ratings'), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  const totalCourthouses = courthouses?.length ?? 0;
  const totalUsers = users?.length ?? 0;
  const totalRatings = ratings?.length ?? 0;

  const isLoading = isLoadingCourthouses || isLoadingUsers || isLoadingRatings;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Juzgados Totales
            </CardTitle>
            <Gavel className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? <Skeleton className="h-8 w-1/4" /> : <div className="text-2xl font-bold">{totalCourthouses}</div>}
            <p className="text-xs text-muted-foreground">
              Juzgados en la base de datos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Usuarios Registrados</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {isLoading ? <Skeleton className="h-8 w-1/4" /> : <div className="text-2xl font-bold">{totalUsers}</div>}
             <p className="text-xs text-muted-foreground">
              Usuarios en la plataforma
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Calificaciones Totales</CardTitle>
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             {isLoading ? <Skeleton className="h-8 w-1/4" /> : <div className="text-2xl font-bold">{totalRatings}</div>}
            <p className="text-xs text-muted-foreground">
              Comentarios y calificaciones de usuarios
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Accesos Rápidos</CardTitle>
          <CardDescription>Atajos a las secciones de administración principales.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button asChild variant="outline">
            <Link href="/admin/juzgados">Gestionar Juzgados</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/correccion">Corregir y Editar Juzgados</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/usuarios">Gestionar Usuarios</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/comentarios">Moderar Comentarios</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/partners">Gestionar Partners / Embed</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
