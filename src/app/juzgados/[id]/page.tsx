import { notFound } from "next/navigation";
import { mockCourthouses, mockRatings } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Gauge,
  Timer,
  Users,
  FolderKanban,
  Accessibility,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Rating, ratingCategories } from "@/lib/types";
import { CommentCard } from "@/components/juzgados/comment-card";
import { RatingForm } from "@/components/juzgados/rating-form";
import AiSummary from "@/components/juzgados/ai-summary";

interface CourthouseDetailPageProps {
  params: {
    id: string;
  };
}

const iconMap = {
  eficiencia: <Gauge className="h-5 w-5 mr-2 text-primary" />,
  tiempoResolucion: <Timer className="h-5 w-5 mr-2 text-primary" />,
  atencion: <Users className="h-5 w-5 mr-2 text-primary" />,
  organizacion: <FolderKanban className="h-5 w-5 mr-2 text-primary" />,
  accesibilidad: <Accessibility className="h-5 w-5 mr-2 text-primary" />,
};

function getAverageRatings(ratings: Rating[]) {
  const totals = {
    eficiencia: 0,
    tiempoResolucion: 0,
    atencion: 0,
    organizacion: 0,
    accesibilidad: 0,
  };
  const counts = { ...totals };
  let overallTotal = 0;
  let overallCount = 0;

  for (const rating of ratings) {
    for (const key in rating.puntuaciones) {
      const category = key as keyof typeof totals;
      totals[category] += rating.puntuaciones[category];
      counts[category]++;
    }
    const scores = Object.values(rating.puntuaciones);
    overallTotal += scores.reduce((a, b) => a + b, 0) / scores.length;
    overallCount++;
  }

  const averages = {
    eficiencia: totals.eficiencia / (counts.eficiencia || 1),
    tiempoResolucion: totals.tiempoResolucion / (counts.tiempoResolucion || 1),
    atencion: totals.atencion / (counts.atencion || 1),
    organizacion: totals.organizacion / (counts.organizacion || 1),
    accesibilidad: totals.accesibilidad / (counts.accesibilidad || 1),
  };

  const overallAverage = overallTotal / (overallCount || 1);

  return { averages, overallAverage };
}

export default function CourthouseDetailPage({
  params,
}: CourthouseDetailPageProps) {
  const courthouse = mockCourthouses.find((c) => c.id === params.id);
  if (!courthouse) {
    notFound();
  }

  const ratings = mockRatings.filter((r) => r.juzgadoId === courthouse.id);
  const { averages, overallAverage } = getAverageRatings(ratings);

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-headline text-primary">
                {courthouse.nombre}
              </CardTitle>
              <CardDescription className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>
                    {courthouse.direccion}, {courthouse.ciudad},{" "}
                    {courthouse.provincia}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{courthouse.telefono}</span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          <AiSummary
            courtId={courthouse.id}
            comments={ratings.map((r) => r.comentario)}
          />

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Calificaciones</CardTitle>
              <CardDescription>
                Promedio de calificaciones basado en {ratings.length}{" "}
                evaluaciones.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500 mr-2" />
                <span className="text-4xl font-bold">
                  {overallAverage.toFixed(1)}
                </span>
                <span className="text-xl text-muted-foreground ml-2">/ 10</span>
              </div>
              <div className="space-y-4">
                {ratingCategories.map(({ key, label }) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        {iconMap[key]}
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                      <span className="text-sm font-bold">
                        {averages[key].toFixed(1)}
                      </span>
                    </div>
                    <Progress value={averages[key] * 10} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Comentarios de Abogados</CardTitle>
            </CardHeader>
            <CardContent>
              {ratings.length > 0 ? (
                <div className="space-y-6">
                  {ratings.map((rating, index) => (
                    <>
                      <CommentCard key={rating.id} rating={rating} />
                      {index < ratings.length - 1 && <Separator />}
                    </>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  Aún no hay comentarios para este juzgado. ¡Sea el primero en
                  calificar!
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <RatingForm courthouseId={courthouse.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
