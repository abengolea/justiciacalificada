"use client";

import { useState, useMemo } from "react";
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
import { Search } from "lucide-react";
import { mockDependencias } from "@/lib/data";
import { useCollection, useFirebase, useMemoFirebase } from "@/firebase";
import { collection, collectionGroup } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

export default function CourthouseList() {
  const { firestore } = useFirebase();

  const courthousesQuery = useMemoFirebase(() => collection(firestore, 'courthouses'), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const ratingsQuery = useMemoFirebase(() => collectionGroup(firestore, 'ratings'), [firestore]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsQuery);

  const [searchTerm, setSearchTerm] = useState("");
  const [dependenciaFilter, setDependenciaFilter] = useState("all");
  const [fueroFilter, setFueroFilter] = useState("all");

  const dependencias = useMemo(
    () => ["all", ...mockDependencias.map((p) => p.nombre).sort()],
    []
  );

  const fueros = useMemo(
    () => ["all", ...Array.from(new Set((courthouses || []).map((c) => c.fuero))).sort()],
    [courthouses]
  );

  const filteredCourthouses = useMemo(() => {
    if (!courthouses) return [];
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);

    return courthouses.filter((courthouse) => {
      const dependenciaMatch =
        dependenciaFilter === "all" || courthouse.dependencia === dependenciaFilter;
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
      ]
        .join(" ")
        .toLowerCase();

      return searchWords.every((word) => courthouseText.includes(word));
    });
  }, [courthouses, searchTerm, dependenciaFilter, fueroFilter]);

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

  const isLoading = isLoadingCourthouses || isLoadingRatings;

  return (
    <div>
      <div className="mb-6 p-4 bg-card rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, ciudad, fuero..."
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
              <CardContent><Skeleton className="h-4 w-1/2" /></CardContent>
              <CardFooter><Skeleton className="h-8 w-full" /></CardFooter>
            </Card>
          ))
        ) : filteredCourthouses.length > 0 ? (
          filteredCourthouses.map((courthouse) => (
            <CourthouseCard
              key={courthouse.id}
              courthouse={courthouse}
              averageRating={getAverageRating(courthouse.id)}
              ratingCount={getRatingCount(courthouse.id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground py-10">
            No se encontraron juzgados que coincidan con su búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
