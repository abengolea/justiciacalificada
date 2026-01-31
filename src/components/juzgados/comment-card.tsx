
import { Star, Calendar } from "lucide-react";
import type { Rating } from "@/lib/types";
import { ratingCategories } from "@/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Timestamp } from "firebase/firestore";

interface CommentCardProps {
  rating: Rating;
}

export function CommentCard({ rating }: CommentCardProps) {
  const totalWeight = ratingCategories.reduce((acc, cat) => acc + cat.weight, 0);
  const weightedScore = ratingCategories.reduce((acc, cat) => {
      const score = rating.puntuaciones[cat.key] || 0;
      return acc + (score * cat.weight);
  }, 0);
  const overallScore = totalWeight > 0 ? weightedScore / totalWeight : 0;

  const getRatingDate = () => {
    if (rating.fechaCalificacion instanceof Timestamp) {
      return rating.fechaCalificacion.toDate();
    }
    return new Date(rating.fechaCalificacion);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(overallScore / 2)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-lg">{overallScore.toFixed(1)}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <Calendar className="w-4 h-4" />
          <span>
            Experiencia:{" "}
            {format(new Date(rating.fechaExperiencia), "MMMM yyyy", { locale: es })}
          </span>
        </div>
      </div>
      <p className="text-foreground/90">{rating.comentario}</p>
      <p className="text-xs text-muted-foreground">
        Calificado el{" "}
        {format(getRatingDate(), "dd 'de' MMMM, yyyy", {
          locale: es,
        })}
      </p>
    </div>
  );
}
