"use client";

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
import { Star } from "lucide-react";
import { ratingCategories } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";


const formSchema = z.object({
  puntuaciones: z.object({
    calidadResoluciones: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    rapidezResoluciones: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    rapidezDespacho: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    atencionMesaEntradas: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    tratoProfesional: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    puntualidadAudiencias: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    ordenGeneral: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    tecnologia: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    practicidad: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
    capacitacionPersonal: z.number().min(1, "La calificación debe ser al menos 1.").max(10, "La calificación no puede ser mayor a 10."),
  }),
  comentario: z.string().min(10, "El comentario debe tener al menos 10 caracteres.").max(500, "El comentario no puede exceder los 500 caracteres."),
  fechaExperiencia: z.date({
    required_error: "Se requiere la fecha de la experiencia.",
  }),
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

export function RatingForm({ courthouseId }: { courthouseId: string }) {
  const { toast } = useToast();
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
    // En una aplicación real, esto se enviaría a un backend.
    const newRating = { 
      id: `rating-${Date.now()}`,
      juzgadoId, 
      usuarioId: 'user-1', // Mock user
      ...values,
      fechaCalificacion: new Date().toISOString(),
      fechaExperiencia: values.fechaExperiencia.toISOString(),
      status: 'pending' as const,
    };
    
    console.log("Nuevo comentario enviado para moderación:", newRating);
    console.log("Simulando envío de email a admin@example.com...");
    
    toast({
      title: "Calificación Enviada",
      description: "Su comentario ha sido enviado y está pendiente de aprobación por un administrador. Gracias por su contribución.",
      variant: 'default',
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Calificar este Juzgado</CardTitle>
        <CardDescription>
          Su evaluación es anónima y valiosa.
        </CardDescription>
      </CardHeader>
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
              name="fechaExperiencia"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha de la experiencia</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Seleccione una fecha</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comentario"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comentario</FormLabel>
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
    </Card>
  );
}
