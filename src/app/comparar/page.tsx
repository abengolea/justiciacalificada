'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, collectionGroup } from 'firebase/firestore';
import { Courthouse, Rating, ratingCategories, RatingCategories } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, Check, Loader2, Scale, Star } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';

interface CourthouseStats extends Courthouse {
  averageRating: number;
  ratingCount: number;
  averages: RatingCategories;
}

function getStats(courthouses: Courthouse[], ratings: Rating[]): Map<string, CourthouseStats> {
  const statsMap = new Map<string, CourthouseStats>();
  if (!courthouses || !ratings) return statsMap;
  const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);
  const approvedRatings = ratings.filter((r) => r.status === 'approved');

  courthouses.forEach((c) => {
    const courtRatings = approvedRatings.filter((r) => r.courthouseId === c.id);
    if (courtRatings.length === 0) {
      statsMap.set(c.id, { ...c, averageRating: 0, ratingCount: 0, averages: {} as RatingCategories });
      return;
    }
    const totals: Partial<RatingCategories> = {};
    let overallTotal = 0;
    for (const rating of courtRatings) {
      let weightedScore = 0;
      for (const cat of ratingCategories) {
        const score = rating.puntuaciones[cat.key] ?? 0;
        (totals as Record<string, number>)[cat.key] = ((totals as Record<string, number>)[cat.key] ?? 0) + score;
        weightedScore += score * cat.weight;
      }
      overallTotal += totalWeight > 0 ? weightedScore / totalWeight : 0;
    }
    const averages = Object.fromEntries(
      ratingCategories.map((cat) => [cat.key, ((totals as Record<string, number>)[cat.key] ?? 0) / courtRatings.length])
    ) as RatingCategories;
    statsMap.set(c.id, {
      ...c,
      averageRating: overallTotal / courtRatings.length,
      ratingCount: courtRatings.length,
      averages,
    });
  });
  return statsMap;
}

export default function CompararPage() {
  const { firestore } = useFirebase();
  const [idA, setIdA] = useState<string | null>(null);
  const [idB, setIdB] = useState<string | null>(null);
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  const courthousesQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'juzgados') : null), [firestore]);
  const { data: courthouses, isLoading: loadingCourthouses } = useCollection<Courthouse>(courthousesQuery);
  const ratingsQuery = useMemoFirebase(() => (firestore ? collectionGroup(firestore, 'ratings') : null), [firestore]);
  const { data: ratings, isLoading: loadingRatings } = useCollection<Rating>(ratingsQuery);

  const statsMap = useMemo(() => getStats(courthouses ?? [], ratings ?? []), [courthouses, ratings]);
  const sortedCourthouses = useMemo(
    () => (courthouses ? [...courthouses].sort((a, b) => a.nombre.localeCompare(b.nombre)) : []),
    [courthouses]
  );

  const statA = idA ? statsMap.get(idA) : null;
  const statB = idB ? statsMap.get(idB) : null;
  const isLoading = loadingCourthouses || loadingRatings;

  const courthouseA = idA ? sortedCourthouses.find((c) => c.id === idA) : null;
  const courthouseB = idB ? sortedCourthouses.find((c) => c.id === idB) : null;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Comparar Juzgados
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Seleccione dos juzgados para ver sus calificaciones lado a lado.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Seleccionar juzgados
          </CardTitle>
          <CardDescription>
            Elija el primer y el segundo juzgado a comparar.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Primer juzgado</label>
            <Popover open={openA} onOpenChange={setOpenA}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                  disabled={isLoading}
                >
                  {courthouseA?.nombre ?? 'Seleccionar...'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Buscar juzgado..." />
                  <CommandEmpty>No hay resultados.</CommandEmpty>
                  <CommandGroup className="max-h-64 overflow-y-auto">
                    {sortedCourthouses.map((c) => (
                      <CommandItem
                        key={c.id}
                        value={c.nombre}
                        onSelect={() => {
                          setIdA(c.id);
                          setOpenA(false);
                        }}
                      >
                        <Check className={cn('mr-2 h-4 w-4', idA === c.id ? 'opacity-100' : 'opacity-0')} />
                        {c.nombre} · {c.ciudad}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Segundo juzgado</label>
            <Popover open={openB} onOpenChange={setOpenB}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                  disabled={isLoading}
                >
                  {courthouseB?.nombre ?? 'Seleccionar...'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Buscar juzgado..." />
                  <CommandEmpty>No hay resultados.</CommandEmpty>
                  <CommandGroup className="max-h-64 overflow-y-auto">
                    {sortedCourthouses.map((c) => (
                      <CommandItem
                        key={c.id}
                        value={c.nombre}
                        onSelect={() => {
                          setIdB(c.id);
                          setOpenB(false);
                        }}
                      >
                        <Check className={cn('mr-2 h-4 w-4', idB === c.id ? 'opacity-100' : 'opacity-0')} />
                        {c.nombre} · {c.ciudad}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {isLoading && !statA && !statB && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card><CardHeader><Skeleton className="h-8 w-3/4" /></CardHeader><CardContent><Skeleton className="h-40 w-full" /></CardContent></Card>
          <Card><CardHeader><Skeleton className="h-8 w-3/4" /></CardHeader><CardContent><Skeleton className="h-40 w-full" /></CardContent></Card>
        </div>
      )}

      {!isLoading && (!idA || !idB) && (idA || idB) && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Seleccione ambos juzgados para ver la comparación.
          </CardContent>
        </Card>
      )}

      {!isLoading && idA && idB && statA && statB && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{statA.nombre}</CardTitle>
              <CardDescription>
                {statA.dependencia} · {statA.ciudad} · {statA.fuero}
              </CardDescription>
              <div className="flex items-center gap-2 pt-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-2xl font-bold">{statA.averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">/ 10 · {statA.ratingCount} {statA.ratingCount === 1 ? 'voto' : 'votos'}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {ratingCategories.map(({ key, label }) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span className="font-medium">{(statA.averages[key] ?? 0).toFixed(1)}</span>
                  </div>
                  <Progress value={(statA.averages[key] ?? 0) * 10} />
                </div>
              ))}
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href={`/juzgados/${statA.id}`}>Ver ficha completa</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">{statB.nombre}</CardTitle>
              <CardDescription>
                {statB.dependencia} · {statB.ciudad} · {statB.fuero}
              </CardDescription>
              <div className="flex items-center gap-2 pt-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-2xl font-bold">{statB.averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">/ 10 · {statB.ratingCount} {statB.ratingCount === 1 ? 'voto' : 'votos'}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {ratingCategories.map(({ key, label }) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span className="font-medium">{(statB.averages[key] ?? 0).toFixed(1)}</span>
                  </div>
                  <Progress value={(statB.averages[key] ?? 0) * 10} />
                </div>
              ))}
              <Button asChild variant="outline" className="w-full mt-4">
                <Link href={`/juzgados/${statB.id}`}>Ver ficha completa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
