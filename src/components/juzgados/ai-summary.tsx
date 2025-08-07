"use client";

import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb, AlertTriangle } from "lucide-react";
import { getAiSummary } from "@/app/actions";

interface AiSummaryProps {
  courtId: string;
  comments: string[];
}

export default function AiSummary({ courtId, comments }: AiSummaryProps) {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSummary = () => {
    startTransition(async () => {
      setError(null);
      if (comments.length < 2) {
        setError("Se necesitan al menos 2 comentarios para generar un resumen.");
        return;
      }
      const result = await getAiSummary(courtId, comments);
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setError("No se pudo generar el resumen. Por favor, inténtelo de nuevo.");
      }
    });
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary" />
          <CardTitle className="font-headline">Perspectiva con IA</CardTitle>
        </div>
        <CardDescription>
          Un resumen generado por inteligencia artificial sobre los comentarios
          de los abogados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : error ? (
           <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-destructive/10">
             <AlertTriangle className="w-8 h-8 text-destructive mb-2"/>
             <p className="font-semibold text-destructive">{error}</p>
             {comments.length >= 2 && <Button variant="ghost" size="sm" onClick={handleGenerateSummary} className="mt-2">Reintentar</Button>}
           </div>
        ) : summary ? (
          <p className="text-sm text-foreground/80 whitespace-pre-line">{summary}</p>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-4">
            <p className="mb-4 text-muted-foreground">
              {comments.length > 0
                ? "Haga clic para obtener un análisis de los comentarios."
                : "No hay suficientes comentarios para generar un resumen."}
            </p>
            <Button onClick={handleGenerateSummary} disabled={comments.length < 2}>
              Generar Resumen
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
