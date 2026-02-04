"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import type { Courthouse } from "@/lib/types";

interface CourthouseListItemProps {
  courthouse: Courthouse;
  averageRating: number;
  ratingCount: number;
}

export function CourthouseListItem({ courthouse, averageRating, ratingCount }: CourthouseListItemProps) {
  return (
    <Link href={`/juzgados/${courthouse.id}`} className="block w-full">
      <div className="flex items-center p-3 w-full hover:bg-accent transition-colors duration-200 rounded-md">
        <div className="flex-1 flex flex-col pr-4 overflow-hidden">
          <p className="font-semibold text-foreground truncate" title={courthouse.nombre}>{courthouse.nombre}</p>
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
          <span className="text-muted-foreground text-xs ml-2">
            ({ratingCount} {ratingCount === 1 ? 'voto' : 'votos'})
          </span>
        </div>
      </div>
    </Link>
  );
}
