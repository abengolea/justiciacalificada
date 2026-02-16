'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Courthouse } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pencil, PlusCircle, Gavel, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminJuzgadosPage() {
  const { firestore } = useFirebase();
  const juzgadosQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
  const { data: juzgados, isLoading } = useCollection<Courthouse>(juzgadosQuery);

  const sortedJuzgados = useMemo(() => {
    if (!juzgados) return [];
    return [...juzgados].sort((a, b) => (a.dependencia || '').localeCompare(b.dependencia || '') || a.nombre.localeCompare(b.nombre));
  }, [juzgados]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-2xl font-bold">Gestionar Juzgados</h1>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/admin/correccion">
              <Pencil className="mr-2 h-4 w-4" />
              Editar juzgados
            </Link>
          </Button>
          <Button asChild>
            <Link href="/admin/juzgados/nuevo">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear juzgado
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gavel className="h-5 w-5" />
            Lista de Juzgados
          </CardTitle>
          <CardDescription>
            {isLoading ? 'Cargando...' : `${sortedJuzgados.length} juzgados en la base de datos. Use "Editar juzgados" para modificar datos o "Crear juzgado" para agregar uno nuevo.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : sortedJuzgados.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              No hay juzgados cargados. <Link href="/admin/juzgados/nuevo" className="underline hover:text-primary">Crear el primero</Link>.
            </p>
          ) : (
            <div className="rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Dependencia</TableHead>
                    <TableHead>Ciudad</TableHead>
                    <TableHead>Fuero</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedJuzgados.slice(0, 50).map((j) => (
                    <TableRow key={j.id}>
                      <TableCell className="font-medium">{j.nombre}</TableCell>
                      <TableCell>{j.dependencia}</TableCell>
                      <TableCell>{j.ciudad}</TableCell>
                      <TableCell>{j.fuero}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/admin/correccion#lista-juzgados`}>
                            Editar
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {sortedJuzgados.length > 50 && (
                <p className="text-sm text-muted-foreground p-4 border-t">
                  Mostrando los primeros 50. Use &quot;Editar juzgados&quot; para buscar y editar todos.
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
