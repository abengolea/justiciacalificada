"use client";

import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourthouseCard } from "./courthouse-card";
import type { Courthouse, Rating } from "@/lib/types";
import { ratingCategories } from "@/lib/types";
import { Search, SortAsc } from "lucide-react";
import { mockDependencias } from "@/lib/data";
import { useCollection, useFirebase, useMemoFirebase } from "@/firebase";
import { collection, collectionGroup } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { useAdminStatus } from "@/hooks/use-admin-status";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CourthouseList() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { firestore } = useFirebase();

  const courthousesQuery = useMemoFirebase(() => (firestore ? collection(firestore, 'courthouses') : null), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const ratingsQuery = useMemoFirebase(() => (firestore ? collectionGroup(firestore, 'ratings') : null), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  const { isAdmin, isLoading: isLoadingAdmin } = useAdminStatus();

  const [searchTerm, setSearchTerm] = useState("");
  const [dependenciaFilter, setDependenciaFilter] = useState("all");
  const [fueroFilter, setFueroFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating-desc"); // Default sort

  const dependencias = useMemo(
    () => ["all", ...mockDependencias.map((p) => p.nombre).sort()],
    []
  );

  const fueros = useMemo(
    () => ["all", ...Array.from(new Set((courthouses || []).map((c) => c.fuero).filter(Boolean))).sort()],
    [courthouses]
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
  
  const processedCourthouses = useMemo(() => {
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

        return searchWords.every((word) => courthouseText.includes(word));
    });

    // Now, sort the filtered results
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


  const isLoading = isLoadingCourthouses || isLoadingRatings || isLoadingAdmin;
  const showLoading = !isClient || isLoading;

  const isAnyFilterActive = searchTerm !== '' || dependenciaFilter !== 'all' || fueroFilter !== 'all';


  return (
    <div>
      <div className="mb-6 p-4 bg-card rounded-lg border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-1">
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
              {dependencias.map((p) => (
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
              {fueros.map((f) => (
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showLoading ? (
          [...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
              <CardContent><Skeleton className="h-4 w-1/2" /></CardContent>
              <CardFooter><Skeleton className="h-8 w-full" /></CardFooter>
            </Card>
          ))
        ) : processedCourthouses.length > 0 ? (
          processedCourthouses.map((courthouse) => (
            <CourthouseCard
              key={courthouse.id}
              courthouse={courthouse}
              averageRating={getAverageRating(courthouse.id)}
              ratingCount={getRatingCount(courthouse.id)}
            />
          ))
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
        )}
      </div>
    </div>
  );
}
