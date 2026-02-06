import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, FileText, CheckCircle, Star, Gavel } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white">
        <Image
          src="https://picsum.photos/seed/justice/1920/1080"
          data-ai-hint="gavel justice court"
          fill
          alt="Imagen principal"
          className="object-cover -z-10 brightness-[.4]"
        />
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-6">
              <p className="text-lg md:text-xl font-light text-secondary">
                Bienvenidos a Justicia Calificada
              </p>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                LOS ABOGADOS CALIFICAMOS A LA JUSTICIA
              </h1>
              <div className="flex justify-center items-center space-x-2">
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
                <Star className="w-5 h-5 text-secondary fill-secondary" />
              </div>
              <div className="max-w-[700px] mx-auto text-lg md:text-xl text-gray-200/90 space-y-2">
                <p>
                  Es hora de que los abogados de todo el país podamos opinar
                  libremente sobre el servicio de justicia que recibimos día a
                  día.
                </p>
                <p>
                  Gracias al aporte de la comunidad de abogados argentinos
                  contribuiremos a generar la mejor estadística sobre la
                  realidad judicial Argentina.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/juzgados">VER LISTA DE DEPENDENCIAS</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Comprometidos con la Mejora del Sistema Judicial
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra misión es fomentar la transparencia y la eficiencia en la
              justicia a través de la evaluación colectiva y anónima de los
              profesionales del derecho.
            </p>
          </div>
          <div className="relative mx-auto mt-6 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-muted-foreground text-left"><strong>Anonimato garantizado:</strong> Sus calificaciones y comentarios no revelarán su identidad.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-muted-foreground text-left"><strong>Datos verificados:</strong> Solo abogados con matrícula validada pueden participar.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-muted-foreground text-left"><strong>Acceso abierto:</strong> Las estadísticas son públicas para promover la transparencia.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <p className="text-muted-foreground text-left"><strong>Sin fines de lucro:</strong> Nuestro único objetivo es el bien común.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                Nuevo Servicio
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
                Ranking de Sentencias Arbitrarias
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Creamos un registro público y colaborativo de sentencias que han sido declaradas arbitrarias por tribunales superiores. Contribuya subiendo casos verificados y ayude a construir un mapa de la arbitrariedad en el sistema judicial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg">
                  <Link href="/ranking-arbitrariedad">Ver Ranking</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/sentencias-arbitrarias/nueva">Cargar Sentencia</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 rounded-lg bg-card border p-6">
              <div className="flex items-start space-x-4">
                <Gavel className="mt-1 h-6 w-6 text-primary shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold">Transparencia Radical</h3>
                    <p className="text-muted-foreground text-sm">Un registro abierto de decisiones judiciales que han sido revocadas por arbitrariedad manifiesta.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="mt-1 h-6 w-6 text-primary shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold">Casos Verificados</h3>
                    <p className="text-muted-foreground text-sm">Cada caso es revisado por un administrador para asegurar que la sentencia revocatoria sea auténtica y relevante.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="mt-1 h-6 w-6 text-primary shrink-0" />
                <div>
                    <h3 className="text-lg font-semibold">Aporte Comunitario</h3>
                    <p className="text-muted-foreground text-sm">Construido colaborativamente por y para la comunidad de abogados comprometidos con la calidad institucional.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
