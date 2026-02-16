"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import CourthouseList, { type EmbedFilters } from "@/components/juzgados/courthouse-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/firebase";
import { ExternalLink } from "lucide-react";

function EmbedContent() {
  const searchParams = useSearchParams();
  const { user, isUserLoading } = useUser();

  const embedFilters: EmbedFilters = {
    ciudad: searchParams.get("ciudad") ?? undefined,
    dependencia: searchParams.get("dependencia") ?? undefined,
    fuero: searchParams.get("fuero") ?? undefined,
  };

  const hasFilters = !!(embedFilters.ciudad || embedFilters.dependencia || embedFilters.fuero);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Barra superior compacta para embed */}
      <div className="border-b bg-card px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="font-headline text-lg text-primary hover:underline"
          >
            Justicia Calificada
          </Link>
          {hasFilters && (
            <span className="text-sm text-muted-foreground hidden sm:inline">
              · {[embedFilters.ciudad, embedFilters.dependencia, embedFilters.fuero].filter(Boolean).join(" · ")}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!isUserLoading && (
            user ? (
              <Button asChild size="sm" variant="outline">
                <Link href="/juzgados">
                  Ver todos los juzgados
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild size="sm">
                <Link href="/login">Iniciar sesión para calificar</Link>
              </Button>
            )
          )}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto py-6 px-4 md:px-6 flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold font-headline text-primary">
            {hasFilters ? "Juzgados" : "Base de Datos de Juzgados"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {hasFilters
              ? "Calificaciones de abogados. Inicia sesión para calificar."
              : "Busque y explore las calificaciones de los juzgados."}
          </p>
        </div>
        <CourthouseList embedFilters={hasFilters ? embedFilters : undefined} />
      </div>

      {/* Footer mínimo para branding */}
      <div className="border-t py-3 px-4 text-center text-xs text-muted-foreground">
        <Link href="/" className="hover:text-primary hover:underline">
          Powered by Justicia Calificada
        </Link>
      </div>
    </div>
  );
}

export default function EmbedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Cargando...</div>
      </div>
    }>
      <EmbedContent />
    </Suspense>
  );
}
