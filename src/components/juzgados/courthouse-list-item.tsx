"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, PenSquare } from "lucide-react";
import type { Courthouse } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CourthouseListItemProps {
  courthouse: Courthouse;
  averageRating: number;
  ratingCount: number;
}

export function CourthouseListItem({ courthouse, averageRating, ratingCount }: CourthouseListItemProps) {
  return (
    <div className="flex items-center p-3 w-full hover:bg-accent/50 transition-colors duration-200 rounded-md gap-4">
      <div className="flex-1 flex flex-col pr-4 overflow-hidden">
        <Link href={`/juzgados/${courthouse.id}`} className="hover:underline">
            <p className="font-semibold text-foreground truncate" title={courthouse.nombre}>{courthouse.nombre}</p>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {courthouse.ciudad && (
              <>
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{courthouse.ciudad}</span>
              </>
          )}
        </div>
      </div>
      <div className="flex-1 hidden md:flex items-center gap-2">
          {courthouse.fuero && <Badge variant="secondary">{courthouse.fuero}</Badge>}
          {courthouse.instancia && <Badge variant="outline">{courthouse.instancia}</Badge>}
      </div>
      <div className="flex items-center gap-2 text-sm shrink-0">
        {ratingCount > 10 ? (
          <>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{averageRating.toFixed(1)}</span>
          </>
        ) : (
          <span className="text-xs text-muted-foreground">Sin calificar</span>
        )}
        <span className="text-muted-foreground text-xs">
          ({ratingCount} {ratingCount === 1 ? 'voto' : 'votos'})
        </span>
      </div>
      <div className="shrink-0">
        <Button asChild variant="outline" size="sm">
            <Link href={`/juzgados/${courthouse.id}`}>
                <PenSquare className="mr-2" />
                Calificar
            </Link>
        </Button>
      </div>
    </div>
  );
}
