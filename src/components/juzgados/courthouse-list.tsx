
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourthouseCard } from "./courthouse-card";
import { CourthouseListItem } from "./courthouse-list-item";
import type { Courthouse, Rating, Lawyer } from "@/lib/types";
import { ratingCategories } from "@/lib/types";
import { Search, SortAsc, LayoutGrid, List } from "lucide-react";
import { provincias } from "@/lib/data";
import { useCollection, useDoc, useFirebase, useMemoFirebase, useUser } from "@/firebase";
import { collection, collectionGroup, doc } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useAdminStatus } from "@/hooks/use-admin-status";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Fuero { id: string; nombre: string; }

export default function CourthouseList() {
  const [isClient, setIsClient] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { firestore } = useFirebase();
  const { user, isUserLoading } = useUser();

  const lawyerDocRef = useMemoFirebase(
    () => (user ? doc(firestore, 'lawyers', user.uid) : null),
    [user, firestore]
  );
  const { data: lawyerProfile, isLoading: profileLoading } = useDoc<Lawyer>(lawyerDocRef);

  const courthousesQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'juzgados') : null), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const ratingsQuery = useMemoFirebase(() => (firestore ? collectionGroup(firestore, 'ratings') : null), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  const fuerosQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'fueros') : null), [firestore]);
  const { data: fueros, isLoading: isLoadingFueros } = useCollection<Fuero>(fuerosQuery);

  const { isAdmin, isLoading: isLoadingAdmin } = useAdminStatus();

  const [searchTerm, setSearchTerm] = useState("");
  const [dependenciaFilter, setDependenciaFilter] = useState("all");
  const [fueroFilter, setFueroFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating-desc"); // Default sort
  
  const defaultFilterApplied = useRef(false);
  
  const dependenciasList = useMemo(
    () => ["all", ...provincias.sort()],
    []
  );

  useEffect(() => {
    if (lawyerProfile?.provincia && !defaultFilterApplied.current) {
      if (dependenciasList.includes(lawyerProfile.provincia)) {
        setDependenciaFilter(lawyerProfile.provincia);
        defaultFilterApplied.current = true;
      }
    }
  }, [lawyerProfile, dependenciasList]);

  const fuerosList = useMemo(
    () => ["all", ...Array.from(new Set((fueros || []).map((f) => f.nombre).filter(Boolean))).sort()],
    [fueros]
  );
  
  const ratingStats = useMemo(() => {
    const stats = new Map<string, { totalScore: number; count: number }>();
    if (!ratings) return stats;

    const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);

    ratings.forEach(rating => {
      if (rating.status !== 'approved') return;

      const currentStats = stats.get(rating.courthouseId) || { totalScore: 0, count: 0 };
      
      const weightedScore = ratingCategories.reduce((catAcc, cat) => {
        const score = rating.puntuaciones[cat.key] || 0;
        return catAcc + (score * cat.weight);
      }, 0);
      
      const averageScore = totalWeight > 0 ? weightedScore / totalWeight : 0;
      
      currentStats.totalScore += averageScore;
      currentStats.count += 1;
      stats.set(rating.courthouseId, currentStats);
    });
    return stats;
  }, [ratings]);

  const getAverageRating = (courthouseId: string) => {
    const stats = ratingStats.get(courthouseId);
    if (!stats || stats.count === 0) return 0;
    return stats.totalScore / stats.count;
  };

  const getRatingCount = (courthouseId: string) => {
      return ratingStats.get(courthouseId)?.count ?? 0;
  }
  
  const processedAndSortedCourthouses = useMemo(() => {
    if (!courthouses) return [];
    
    let filtered = courthouses.filter((courthouse) => {
        const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);
        const dependenciaMatch = dependenciaFilter === "all" || courthouse.dependencia === dependenciaFilter;
        const fueroMatch = fueroFilter === "all" || courthouse.fuero === fueroFilter;

        if (!dependenciaMatch || !fueroMatch) {
            return false;
        }
      
        if (searchWords.length === 0) {
            return true;
        }

        const courthouseText = [
            courthouse.nombre,
            courthouse.ciudad,
            courthouse.dependencia,
            courthouse.fuero,
            courthouse.instancia,
        ].join(" ").toLowerCase();

        return courthouseText && searchWords.every((word) => courthouseText.includes(word));
    });

    return filtered.sort((a, b) => {
        switch (sortBy) {
            case 'rating-desc':
                return getAverageRating(b.id) - getAverageRating(a.id);
            case 'name-asc':
                return a.nombre.localeCompare(b.nombre);
            case 'ratings-count-desc':
                return getRatingCount(b.id) - getRatingCount(a.id);
            default:
                return 0;
        }
    });

  }, [courthouses, searchTerm, dependenciaFilter, fueroFilter, sortBy, ratingStats]);

  const groupedCourthouses = useMemo(() => {
    if (view !== 'list') return null;

    return processedAndSortedCourthouses.reduce((acc, courthouse) => {
        const groupKey = courthouse.dependencia || 'Sin Dependencia';
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(courthouse);
        return acc;
    }, {} as Record<string, Courthouse[]>);

  }, [processedAndSortedCourthouses, view]);


  const isLoading = isUserLoading || isLoadingCourthouses || isLoadingRatings || isLoadingAdmin || isLoadingFueros || profileLoading;
  const showLoading = !isClient || isLoading;

  const isAnyFilterActive = searchTerm !== '' || dependenciaFilter !== 'all' || fueroFilter !== 'all';


  return (
    <div>
      <div className="mb-6 p-4 bg-card rounded-lg border">
         {lawyerProfile?.provincia && defaultFilterApplied.current && dependenciaFilter === lawyerProfile.provincia && (
            <div className="mb-4 text-sm text-muted-foreground p-2 rounded-md bg-accent/20 border border-accent/50">
                Mostrando juzgados para <strong>{lawyerProfile.provincia}</strong> por defecto. Cambia el filtro para ver otros.
            </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="relative lg:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, ciudad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={dependenciaFilter} onValueChange={setDependenciaFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por dependencia" />
            </SelectTrigger>
            <SelectContent>
              {dependenciasList.map((p) => (
                <SelectItem key={p} value={p}>
                  {p === "all" ? "Todas las dependencias" : p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={fueroFilter} onValueChange={setFueroFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por fuero" />
            </SelectTrigger>
            <SelectContent>
              {fuerosList.map((f) => (
                <SelectItem key={f} value={f}>
                  {f === "all" ? "Todos los fueros" : f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <div className="flex items-center gap-2">
                <SortAsc className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Ordenar por" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating-desc">Mejor Calificados</SelectItem>
              <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
              <SelectItem value="ratings-count-desc">Más Calificados</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end items-center mt-4">
            <div className="flex items-center gap-1 rounded-md bg-muted p-1">
                <Button variant={view === 'grid' ? 'default' : 'ghost'} size="sm" onClick={() => setView('grid')} className="h-8 px-3">
                    <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button variant={view === 'list' ? 'default' : 'ghost'} size="sm" onClick={() => setView('list')} className="h-8 px-3">
                    <List className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </div>
      <div>
        {showLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <Card key={i}>
                    <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
                    <CardContent><Skeleton className="h-4 w-1/2" /></CardContent>
                    <CardFooter><Skeleton className="h-8 w-full" /></CardFooter>
                    </Card>
                ))}
             </div>
        ) : (processedAndSortedCourthouses.length > 0 ? (
            view === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {processedAndSortedCourthouses.map((courthouse) => (
                        <CourthouseCard
                        key={courthouse.id}
                        courthouse={courthouse}
                        averageRating={getAverageRating(courthouse.id)}
                        ratingCount={getRatingCount(courthouse.id)}
                        />
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {groupedCourthouses && Object.keys(groupedCourthouses).sort().map(groupName => (
                        <div key={groupName}>
                            <h2 className="text-xl font-bold font-headline text-primary mb-3 pb-2 border-b">{groupName}</h2>
                            <div className="border rounded-lg">
                                 {groupedCourthouses[groupName].map((courthouse, index) => (
                                     <div key={courthouse.id}>
                                        <CourthouseListItem
                                            courthouse={courthouse}
                                            averageRating={getAverageRating(courthouse.id)}
                                            ratingCount={getRatingCount(courthouse.id)}
                                        />
                                        {index < groupedCourthouses[groupName].length - 1 && <div className="border-b mx-3"></div>}
                                     </div>
                                 ))}
                            </div>
                        </div>
                    ))}
                </div>
            )
        ) : (
          <div className="col-span-full text-center py-10">
            { isAnyFilterActive ? (
                <p className="text-muted-foreground">
                    No se encontraron juzgados que coincidan con su búsqueda.
                </p>
             ) : isAdmin ? (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-muted-foreground">Aún no hay juzgados en la base de datos.</p>
                  <p className="text-sm text-muted-foreground">Como administrador, puedes cargarlos desde el panel de gestión.</p>
                  <Button asChild>
                      <Link href="/admin/juzgados">
                          Ir a Gestionar Juzgados
                      </Link>
                  </Button>
                </div>
             ) : (
                <p className="text-muted-foreground">
                    Aún no hay juzgados en la base de datos.
                </p>
             )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
