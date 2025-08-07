import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, FileText, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  LOS ABOGADOS CALIFICAMOS A LA JUSTICIA
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Somos una organización sin fines de lucro. Nuestro objetivo es
                  mejorar el sistema judicial a través de la valoración
                  colectiva.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/juzgados">Ver Juzgados</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/register">Registrarse</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              data-ai-hint="courthouse legal"
              width="600"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                Cómo Funciona
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Una Plataforma Transparente y Colaborativa
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Utilizando su matrícula profesional de abogado puede registrarse
                para calificar y comentar, en forma anónima, cada uno de los
                Juzgados de Argentina. Su participación responsable ayudará a
                obtener datos estadísticos que sirvan de referencia a toda la
                comunidad.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">
                  Regístrese como Abogado
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Cree su cuenta verificando su matrícula profesional para
                asegurar la calidad de los datos.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Califique Juzgados</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Evalúe su experiencia de forma anónima en múltiples categorías y
                deje comentarios constructivos.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Consulte Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Acceda a datos y análisis para entender el desempeño de los
                diferentes juzgados del país.
              </CardContent>
            </Card>
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
                    <CheckCircle className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-muted-foreground text-left"><strong>Anonimato garantizado:</strong> Sus calificaciones y comentarios no revelarán su identidad.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-muted-foreground text-left"><strong>Datos verificados:</strong> Solo abogados con matrícula validada pueden participar.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-muted-foreground text-left"><strong>Acceso abierto:</strong> Las estadísticas son públicas para promover la transparencia.</p>
                </div>
                <div className="flex items-start space-x-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-accent" />
                    <p className="text-muted-foreground text-left"><strong>Sin fines de lucro:</strong> Nuestro único objetivo es el bien común.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
