
'use client';

import { notFound, useParams } from "next/navigation";
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
  Loader2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Rating, ratingCategories, RatingCategories, Courthouse } from "@/lib/types";
import { CommentCard } from "@/components/juzgados/comment-card";
import { RatingForm } from "@/components/juzgados/rating-form";
import AiSummary from "@/components/juzgados/ai-summary";
import { useDoc, useCollection, useFirebase, useMemoFirebase } from "@/firebase";
import { doc, collection } from "firebase/firestore";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
      weightedScore += score * cat.weight;
    }
    overallTotal += (totalWeight > 0 ? weightedScore / totalWeight : 0);
  }

  const averages: RatingCategories = {
    calidadResoluciones: totals.calidadResoluciones / ratings.length,
    rapidezResoluciones: totals.rapidezResoluciones / ratings.length,
    rapidezDespacho: totals.rapidezDespacho / ratings.length,
    atencionMesaEntradas: totals.atencionMesaEntradas / ratings.length,
    tratoProfesional: totals.tratoProfesional / ratings.length,
    puntualidadAudiencias: totals.puntualidadAudiencias / ratings.length,
    ordenGeneral: totals.ordenGeneral / ratings.length,
    tecnologia: totals.tecnologia / ratings.length,
    practicidad: totals.practicidad / ratings.length,
    capacitacionPersonal: totals.capacitacionPersonal / ratings.length,
  };

  const overallAverage = overallTotal / ratings.length;

  return { averages, overallAverage };
}

export default function CourthouseDetailPage({ params }: CourthouseDetailPageProps) {
  const { firestore } = useFirebase();
  const courthouseId = params.id;

  const courthouseDocRef = useMemoFirebase(() => doc(firestore, 'juzgados', courthouseId), [firestore, courthouseId]);
  const { data: courthouse, isLoading: isLoadingCourthouse } = useDoc<Courthouse>(courthouseDocRef);

  const ratingsCollectionRef = useMemoFirebase(() => collection(firestore, 'juzgados', courthouseId, 'ratings'), [firestore, courthouseId]);
  const { data: ratings, isLoading: isLoadingRatings } = useCollection<Rating>(ratingsCollectionRef);

  const approvedRatings = useMemo(() => ratings?.filter(r => r.status === 'approved') ?? [], [ratings]);
  const { averages, overallAverage } = useMemo(() => getAverageRatings(approvedRatings), [approvedRatings]);

  const isLoading = isLoadingCourthouse || isLoadingRatings;

  if (!isLoading && !courthouse) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              {isLoading ? <Skeleton className="h-9 w-3/4" /> : (
                <CardTitle className="text-3xl font-headline text-primary">
                  {courthouse?.nombre}
                </CardTitle>
              )}
              {isLoading ? (
                <div className="space-y-2 pt-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-1/2" />
                </div>
              ) : (
                <CardDescription className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {courthouse?.direccion}, {courthouse?.ciudad},{" "}
                      {courthouse?.dependencia}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{courthouse?.telefono}</span>
                  </div>
                </CardDescription>
              )}
            </CardHeader>
          </Card>

          <AiSummary
            courtId={courthouseId}
            comments={approvedRatings.map((r) => r.comentario)}
          />

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Calificaciones</CardTitle>
              {isLoading ? <Skeleton className="h-5 w-48 mt-1" /> : (
                <CardDescription>
                  Basado en {approvedRatings.length}{" "}
                  {approvedRatings.length === 1 ? 'evaluación' : 'evaluaciones'}.
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-32" />
                  {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}
                </div>
              ) : (
                <>
                  {approvedRatings.length > 10 ? (
                    <>
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
                    </>
                  ) : (
                    <div className="text-center py-6 text-muted-foreground bg-accent/10 rounded-md">
                      <p className="font-semibold text-foreground/80">Calificación no disponible</p>
                      <p className="text-sm">Se necesitan más de 10 calificaciones para mostrar los promedios.</p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Comentarios de Abogados</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                 <div className="space-y-6">
                    {[...Array(2)].map((_, i) => <Skeleton key={i} className="h-24 w-full" />)}
                 </div>
              ) : approvedRatings.length > 0 ? (
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
            <RatingForm courthouseId={courthouseId} />
          </div>
        </div>
      </div>
    </div>
  );
}
