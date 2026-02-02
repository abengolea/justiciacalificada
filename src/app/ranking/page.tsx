
'use client';

import { useMemo, useState, useEffect } from 'react';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, collectionGroup } from 'firebase/firestore';
import { Courthouse, Rating, ratingCategories } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Trophy, Star, ListOrdered, Anchor } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { provincias as allProvincias } from '@/lib/data';

interface CourthouseStats extends Courthouse {
  averageRating: number;
  ratingCount: number;
}

const RankingCard = ({ title, icon, courthouses, isLoading }: { title: string, icon: React.ReactNode, courthouses: CourthouseStats[], isLoading: boolean }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-2">
        {icon}
        <CardTitle className="font-headline">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-full" />)}
        </div>
      ) : courthouses.length > 0 ? (
        <ol className="space-y-4">
          {courthouses.map((courthouse, index) => (
            <li key={courthouse.id} className="flex items-center justify-between gap-4 p-2 rounded-md hover:bg-accent">
              <div className="flex items-center gap-4 overflow-hidden">
                <span className="text-lg font-bold text-muted-foreground w-6 text-center shrink-0">{index + 1}</span>
                <div className="flex flex-col overflow-hidden">
                  <Link href={`/juzgados/${courthouse.id}`} className="font-semibold hover:underline truncate" title={courthouse.nombre}>
                    {courthouse.nombre}
                  </Link>
                  <p className="text-sm text-muted-foreground truncate">{courthouse.ciudad}, {courthouse.dependencia}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold">{courthouse.averageRating.toFixed(2)}</span>
                </Badge>
                <Badge variant="outline">
                  {courthouse.ratingCount} {courthouse.ratingCount === 1 ? 'voto' : 'votos'}
                </Badge>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-muted-foreground text-center py-4">No hay suficientes datos para este filtro.</p>
      )}
    </CardContent>
  </Card>
);

export default function RankingPage() {
  const { firestore } = useFirebase();
  const [isClient, setIsClient] = useState(false);

  const [dependenciaFilter, setDependenciaFilter] = useState('all');
  const [fueroFilter, setFueroFilter] = useState('all');
  const [instanciaFilter, setInstanciaFilter] = useState('all');

  const courthousesQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'juzgados') : null), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const ratingsQuery = useMemoFirebase(() => (firestore ? collectionGroup(firestore, 'ratings') : null), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  useEffect(() => { setIsClient(true) }, []);

  const dependencias = useMemo(() => ['all', ...allProvincias.sort()], []);
  
  const fueros = useMemo(() => {
      if (!courthouses) return ['all'];
      const uniqueFueros = [...new Set(courthouses.map(c => c.fuero).filter(Boolean))];
      return ['all', ...uniqueFueros.sort()];
  }, [courthouses]);

  const instancias = useMemo(() => {
    if (!courthouses) return ['all'];
    const uniqueInstancias = [...new Set(courthouses.map(c => c.instancia).filter(Boolean))];
    return ['all', ...uniqueInstancias.sort()];
}, [courthouses]);


  const courthouseStats = useMemo((): CourthouseStats[] => {
    if (!courthouses || !ratings) return [];

    const statsMap = new Map<string, { totalScore: number; count: number }>();
    const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);

    const approvedRatings = ratings.filter(r => r.status === 'approved');

    approvedRatings.forEach(rating => {
      const currentStats = statsMap.get(rating.courthouseId) || { totalScore: 0, count: 0 };
      
      const weightedScore = ratingCategories.reduce((catAcc, cat) => {
        const score = rating.puntuaciones[cat.key] || 0;
        return catAcc + (score * cat.weight);
      }, 0);
      
      const averageScore = totalWeight > 0 ? weightedScore / totalWeight : 0;
      
      currentStats.totalScore += averageScore;
      currentStats.count += 1;
      statsMap.set(rating.courthouseId, currentStats);
    });

    const filteredCourthouses = courthouses.filter(c => {
        const dependenciaMatch = dependenciaFilter === 'all' || c.dependencia === dependenciaFilter;
        const fueroMatch = fueroFilter === 'all' || c.fuero === fueroFilter;
        const instanciaMatch = instanciaFilter === 'all' || c.instancia === instanciaFilter;
        return dependenciaMatch && fueroMatch && instanciaMatch;
    });

    return filteredCourthouses.map(c => {
      const stats = statsMap.get(c.id);
      return {
        ...c,
        averageRating: stats && stats.count > 0 ? stats.totalScore / stats.count : 0,
        ratingCount: stats?.count ?? 0,
      };
    });
  }, [courthouses, ratings, dependenciaFilter, fueroFilter, instanciaFilter]);

  const topRated = useMemo(() => 
    [...courthouseStats].filter(c => c.ratingCount > 0).sort((a, b) => b.averageRating - a.averageRating).slice(0, 10),
    [courthouseStats]
  );
  
  const bottomRated = useMemo(() => 
    [...courthouseStats]
      .filter(c => c.ratingCount > 0)
      .sort((a, b) => a.averageRating - b.averageRating)
      .slice(0, 10),
    [courthouseStats]
  );

  const mostRated = useMemo(() => 
    [...courthouseStats].filter(c => c.ratingCount > 0).sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 10),
    [courthouseStats]
  );
  
  const isLoading = !isClient || isLoadingCourthouses || isLoadingRatings;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Ranking de Juzgados
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Descubra los juzgados mejor, peor y más calificados por la comunidad de abogados.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
            <CardTitle>Filtros de Ranking</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={dependenciaFilter} onValueChange={setDependenciaFilter}>
                <SelectTrigger>
                    <SelectValue placeholder="Filtrar por Dependencia" />
                </SelectTrigger>
                <SelectContent>
                    {dependencias.map((d) => (
                        <SelectItem key={d} value={d}>
                            {d === 'all' ? 'Todas las Dependencias' : d}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select value={fueroFilter} onValueChange={setFueroFilter} disabled={fueros.length <= 1}>
                <SelectTrigger>
                    <SelectValue placeholder="Filtrar por Fuero" />
                </SelectTrigger>
                <SelectContent>
                    {fueros.map((f) => (
                        <SelectItem key={f} value={f}>
                            {f === 'all' ? 'Todos los Fueros' : f}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select value={instanciaFilter} onValueChange={setInstanciaFilter} disabled={instancias.length <= 1}>
                <SelectTrigger>
                    <SelectValue placeholder="Filtrar por Instancia" />
                </SelectTrigger>
                <SelectContent>
                    {instancias.map((i) => (
                        <SelectItem key={i} value={i}>
                            {i === 'all' ? 'Todas las Instancias' : i}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </CardContent>
      </Card>


      <div className="space-y-8">
        <RankingCard 
          title="Top 10 Mejor Calificados" 
          icon={<Trophy className="w-6 h-6 text-yellow-500" />} 
          courthouses={topRated}
          isLoading={isLoading}
        />
        <RankingCard 
          title="Top 10 Peor Calificados" 
          icon={<Anchor className="w-6 h-6 text-red-500" />}
          courthouses={bottomRated}
          isLoading={isLoading}
        />
        <RankingCard 
          title="Top 10 Más Votados" 
          icon={<ListOrdered className="w-6 h-6 text-blue-500" />}
          courthouses={mostRated}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
