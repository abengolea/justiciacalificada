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
  Gavel,
  FastForward,
  Timer,
  Users,
  UserCheck,
  Clock,
  FolderKanban,
  Laptop,
  Lightbulb,
  GraduationCap,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Rating, ratingCategories, RatingCategories } from "@/lib/types";
import { CommentCard } from "@/components/juzgados/comment-card";
import { RatingForm } from "@/components/juzgados/rating-form";
import AiSummary from "@/components/juzgados/ai-summary";

interface CourthouseDetailPageProps {
  params: {
    id: string;
  };
}

const iconMap: Record<keyof RatingCategories, React.ReactNode> = {
  calidadResoluciones: <Gavel className="h-5 w-5 mr-2 text-primary" />,
  rapidezResoluciones: <FastForward className="h-5 w-5 mr-2 text-primary" />,
  rapidezDespacho: <Timer className="h-5 w-5 mr-2 text-primary" />,
  atencionMesaEntradas: <Users className="h-5 w-5 mr-2 text-primary" />,
  tratoProfesional: <UserCheck className="h-5 w-5 mr-2 text-primary" />,
  puntualidadAudiencias: <Clock className="h-5 w-5 mr-2 text-primary" />,
  ordenGeneral: <FolderKanban className="h-5 w-5 mr-2 text-primary" />,
  tecnologia: <Laptop className="h-5 w-5 mr-2 text-primary" />,
  practicidad: <Lightbulb className="h-5 w-5 mr-2 text-primary" />,
  capacitacionPersonal: <GraduationCap className="h-5 w-5 mr-2 text-primary" />,
};

function getAverageRatings(ratings: Rating[]) {
  const totals: { [key in keyof RatingCategories]: number } = {
    calidadResoluciones: 0,
    rapidezResoluciones: 0,
    rapidezDespacho: 0,
    atencionMesaEntradas: 0,
    tratoProfesional: 0,
    puntualidadAudiencias: 0,
    ordenGeneral: 0,
    tecnologia: 0,
    practicidad: 0,
    capacitacionPersonal: 0,
  };
  const counts = { ...totals };
  let overallTotal = 0;

  if (ratings.length === 0) {
    return { averages: totals, overallAverage: 0 };
  }

  const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);

  for (const rating of ratings) {
    let weightedScore = 0;
    for (const cat of ratingCategories) {
      const key = cat.key;
      const score = rating.puntuaciones[key] || 0;
      totals[key] += score;
      counts[key]++;
      weightedScore += score * cat.weight;
    }
    overallTotal += (totalWeight > 0 ? weightedScore / totalWeight : 0);
  }

  const averages: RatingCategories = {
    calidadResoluciones: totals.calidadResoluciones / (counts.calidadResoluciones || 1),
    rapidezResoluciones: totals.rapidezResoluciones / (counts.rapidezResoluciones || 1),
    rapidezDespacho: totals.rapidezDespacho / (counts.rapidezDespacho || 1),
    atencionMesaEntradas: totals.atencionMesaEntradas / (counts.atencionMesaEntradas || 1),
    tratoProfesional: totals.tratoProfesional / (counts.tratoProfesional || 1),
    puntualidadAudiencias: totals.puntualidadAudiencias / (counts.puntualidadAudiencias || 1),
    ordenGeneral: totals.ordenGeneral / (counts.ordenGeneral || 1),
    tecnologia: totals.tecnologia / (counts.tecnologia || 1),
    practicidad: totals.practicidad / (counts.practicidad || 1),
    capacitacionPersonal: totals.capacitacionPersonal / (counts.capacitacionPersonal || 1),
  };

  const overallAverage = overallTotal / ratings.length;

  return { averages, overallAverage };
}

export default function CourthouseDetailPage({
  params,
}: CourthouseDetailPageProps) {
  const courthouse = mockCourthouses.find((c) => c.id === params.id);
  if (!courthouse) {
    notFound();
  }

  const approvedRatings = mockRatings.filter(
    (r) => r.juzgadoId === courthouse.id && r.status === 'approved'
  );
  const { averages, overallAverage } = getAverageRatings(approvedRatings);

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
            comments={approvedRatings.map((r) => r.comentario)}
          />

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Calificaciones</CardTitle>
              <CardDescription>
                Promedio de calificaciones basado en {approvedRatings.length}{" "}
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
              {approvedRatings.length > 0 ? (
                <div className="space-y-6">
                  {approvedRatings.map((rating, index) => (
                    <>
                      <CommentCard key={rating.id} rating={rating} />
                      {index < approvedRatings.length - 1 && <Separator />}
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
