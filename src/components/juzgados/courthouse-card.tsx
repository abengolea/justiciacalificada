"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, PenSquare } from "lucide-react";
import type { Courthouse } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface CourthouseCardProps {
  courthouse: Courthouse;
  averageRating: number;
  ratingCount: number;
}

export function CourthouseCard({ courthouse, averageRating, ratingCount }: CourthouseCardProps) {
  
  return (
      <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-200">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <Link href={`/juzgados/${courthouse.id}`} className="hover:underline">
              <CardTitle className="text-lg font-headline leading-tight pr-2">
                {courthouse.nombre}
              </CardTitle>
            </Link>
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
          </div>
          {courthouse.ciudad && (
            <CardDescription className="flex items-center gap-2 pt-2 text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{courthouse.ciudad}</span>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 text-xs">
            {courthouse.dependencia && <Badge variant="default">{courthouse.dependencia}</Badge>}
            {courthouse.fuero && <Badge variant="secondary">{courthouse.fuero}</Badge>}
            {courthouse.instancia && <Badge variant="outline">{courthouse.instancia}</Badge>}
          </div>
        </CardContent>
        <CardFooter className="pt-4 justify-end">
            <Button asChild size="sm">
                <Link href={`/juzgados/${courthouse.id}`}>
                    <PenSquare className="mr-2" />
                    Calificar
                </Link>
            </Button>
        </CardFooter>
      </Card>
  );
}
