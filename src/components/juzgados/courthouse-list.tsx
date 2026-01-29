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
import { mockProvincias } from "@/lib/data";

interface CourthouseListProps {
  courthouses: Courthouse[];
  ratings: Rating[];
}

export default function CourthouseList({
  courthouses,
  ratings,
}: CourthouseListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [provinciaFilter, setProvinciaFilter] = useState("all");
  const [fueroFilter, setFueroFilter] = useState("all");

  const provincias = useMemo(
    () => ["all", ...mockProvincias.map((p) => p.nombre).sort()],
    []
  );
  const fueros = useMemo(
    () => ["all", ...Array.from(new Set(courthouses.map((c) => c.fuero))).sort()],
    [courthouses]
  );

  const filteredCourthouses = useMemo(() => {
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);

    return courthouses.filter((courthouse) => {
      const provinciaMatch =
        provinciaFilter === "all" || courthouse.provincia === provinciaFilter;
      const fueroMatch = fueroFilter === "all" || courthouse.fuero === fueroFilter;

      if (!provinciaMatch || !fueroMatch) {
        return false;
      }
      
      if (searchWords.length === 0) {
        return true;
      }

      const courthouseText = [
        courthouse.nombre,
        courthouse.ciudad,
        courthouse.provincia,
        courthouse.fuero,
        courthouse.instancia,
      ]
        .join(" ")
        .toLowerCase();

      return searchWords.every((word) => courthouseText.includes(word));
    });
  }, [courthouses, searchTerm, provinciaFilter, fueroFilter]);

  const getAverageRating = (juzgadoId: string) => {
    const relevantRatings = ratings.filter((r) => r.juzgadoId === juzgadoId && r.status === 'approved');
    if (relevantRatings.length === 0) return 0;
    
    const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);

    const totalScore = relevantRatings.reduce((acc, r) => {
      const weightedScore = ratingCategories.reduce((catAcc, cat) => {
        const score = r.puntuaciones[cat.key] || 0;
        return catAcc + (score * cat.weight);
      }, 0);
      return acc + (totalWeight > 0 ? weightedScore / totalWeight : 0);
    }, 0);

    return totalScore / relevantRatings.length;
  };

  const getRatingCount = (juzgadoId: string) => {
      return ratings.filter(r => r.juzgadoId === juzgadoId && r.status === 'approved').length;
  }

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
          <Select value={provinciaFilter} onValueChange={setProvinciaFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por provincia" />
            </SelectTrigger>
            <SelectContent>
              {provincias.map((p) => (
                <SelectItem key={p} value={p}>
                  {p === "all" ? "Todas las provincias" : p}
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
        {filteredCourthouses.length > 0 ? (
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
