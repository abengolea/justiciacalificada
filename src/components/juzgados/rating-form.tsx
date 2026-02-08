'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Star, Loader2 } from "lucide-react";
import { ratingCategories } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useFirebase, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection, serverTimestamp } from "firebase/firestore";

const formSchema = z.object({
  puntuaciones: z.object({
    calidadResoluciones: z.number().min(0).max(10),
    rapidezResoluciones: z.number().min(0).max(10),
    rapidezDespacho: z.number().min(0).max(10),
    atencionMesaEntradas: z.number().min(0).max(10),
    tratoProfesional: z.number().min(0).max(10),
    puntualidadAudiencias: z.number().min(0).max(10),
    ordenGeneral: z.number().min(0).max(10),
    tecnologia: z.number().min(0).max(10),
    practicidad: z.number().min(0).max(10),
    capacitacionPersonal: z.number().min(0).max(10),
  }),
  comentario: z.string().max(500, "El comentario no puede exceder los 500 caracteres.").optional(),
});


const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div className="flex items-center">
      {[...Array(10)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={ratingValue}
            onClick={() => onChange(ratingValue)}
            onMouseEnter={() => setHoverValue(ratingValue)}
            onMouseLeave={() => setHoverValue(0)}
            className="focus:outline-none"
          >
            <Star
              className={cn(
                "h-6 w-6 cursor-pointer transition-colors",
                ratingValue <= (hoverValue || value)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};

export function RatingForm({ courthouseId, courthouseName }: { courthouseId: string, courthouseName?: string }) {
  const { toast } = useToast();
  const { firestore } = useFirebase();
  const { user, isUserLoading } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      puntuaciones: {
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
      },
      comentario: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!user) {
        toast({
            title: "Acción requerida",
            description: "Debe iniciar sesión para poder calificar un juzgado.",
            variant: "destructive",
        });
        return;
    }
    
    const hasRatings = Object.values(values.puntuaciones).some(score => score > 0);
    const hasComment = values.comentario && values.comentario.trim().length > 0;

    if (!hasRatings && !hasComment) {
        toast({
            title: "Calificación vacía",
            description: "Debe proporcionar al menos una calificación o escribir un comentario.",
            variant: "destructive",
        });
        return;
    }

    const ratingsCollectionRef = collection(firestore, 'juzgados', courthouseId, 'ratings');
    
    const newRatingData = { 
      courthouseId: courthouseId, 
      lawyerId: user.uid,
      puntuaciones: values.puntuaciones,
      comentario: values.comentario || '',
      fechaCalificacion: serverTimestamp(),
      fechaExperiencia: new Date().toISOString(),
      status: 'pending' as const,
    };
    
    addDocumentNonBlocking(ratingsCollectionRef, newRatingData);
    
    if (values.comentario && values.comentario.trim().length > 0) {
      const adminLink = `https://qualified-justice.web.app/admin/comentarios`;
      const mailData = {
          to: ['abengolea1@gmail.com'],
          message: {
              subject: 'Nuevo Comentario Pendiente de Moderación',
              html: `
                  <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background-color: #2a3b4f; color: #ffffff; padding: 20px; text-align: center;">
                      <h1 style="margin: 0; font-size: 24px;">Justicia Calificada</h1>
                    </div>
                    <div style="padding: 20px; line-height: 1.6; color: #333;">
                      <h2 style="color: #1a2c41;">Nuevo Comentario para Moderar</h2>
                      <p>Un abogado ha dejado un nuevo comentario que requiere su aprobación.</p>
                      <ul style="list-style-type: none; padding: 0;">
                          <li style="padding: 5px 0;"><strong>Juzgado:</strong> ${courthouseName || courthouseId}</li>
                          <li style="padding: 5px 0;"><strong>Usuario:</strong> ${user.displayName || user.email}</li>
                      </ul>
                      <div style="background-color: #f8f9fa; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0;">
                        <p style="margin: 0; font-style: italic;">"${values.comentario}"</p>
                      </div>
                      <a href="${adminLink}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Moderar Comentario</a>
                    </div>
                    <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #6c757d;">
                      <p>Este es un correo electrónico automatizado.</p>
                    </div>
                  </div>
              `,
          },
      };
      const mailCollectionRef = collection(firestore, "mail");
      addDocumentNonBlocking(mailCollectionRef, mailData);
    }
    
    toast({
      title: "Calificación Enviada",
      description: "Su comentario ha sido enviado y está pendiente de aprobación por un administrador. Gracias por su contribución.",
      variant: 'default',
    });
    form.reset();
  }
  
  const renderForm = () => {
    if (isUserLoading) {
      return (
        <div className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      );
    }

    if (!user) {
       return (
        <div className="p-6 text-center">
            <p className="text-muted-foreground">Debe <a href="/login" className="underline text-primary">iniciar sesión</a> para calificar.</p>
        </div>
       )
    }

    return (
         <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="puntuaciones"
                render={() => (
                  <FormItem>
                    {ratingCategories.map(({ key, label, weight }) => (
                      <FormField
                        key={key}
                        control={form.control}
                        name={`puntuaciones.${key}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{label} <span className="text-muted-foreground text-xs">(x{weight})</span></FormLabel>
                            <FormControl>
                              <StarRating
                                value={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comentario"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comentario (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describa su experiencia..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Enviar Calificación
              </Button>
            </CardFooter>
          </form>
        </Form>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Calificar este Juzgado</CardTitle>
        <CardDescription>
          Su evaluación es anónima y valiosa.
        </CardDescription>
      </CardHeader>
      {renderForm()}
    </Card>
  );
}
