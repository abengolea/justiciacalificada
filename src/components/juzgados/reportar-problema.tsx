"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Loader2 } from "lucide-react";
import { useFirebase, useUser } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import type { AdminMessageType } from "@/lib/types";

interface ReportarProblemaProps {
  trigger?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  courthouseId?: string;
  courthouseName?: string;
  /** Cuando el usuario no encuentra resultados en la búsqueda (no hay juzgado específico) */
  noResults?: boolean;
}

const TIPOS: { value: AdminMessageType; label: string }[] = [
  { value: "not_found", label: "No encuentro el juzgado" },
  { value: "wrong_data", label: "Nombre o datos incorrectos" },
];

export function ReportarProblema({
  trigger,
  variant = "outline",
  courthouseId,
  courthouseName,
  noResults = false,
}: ReportarProblemaProps) {
  const { firestore } = useFirebase();
  const { user } = useUser();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState<AdminMessageType>("not_found");
  const [mensaje, setMensaje] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !mensaje.trim()) return;

    setIsSubmitting(true);
    try {
      const col = collection(firestore, "admin_messages");
      await addDoc(col, {
        lawyerId: user.uid,
        type: tipo,
        message: mensaje.trim(),
        ...(courthouseId && { courthouseId }),
        ...(courthouseName && { courthouseName }),
        status: "unread",
        createdAt: serverTimestamp(),
      });
      toast({
        title: "Reporte enviado",
        description: "Gracias. El administrador revisará tu mensaje.",
      });
      setOpen(false);
      setMensaje("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "No se pudo enviar el reporte. Intente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const defaultTrigger = (
    <Button variant={variant} size="sm" className="gap-2">
      <AlertCircle className="h-4 w-4" />
      Reportar problema
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Reportar problema</DialogTitle>
            <DialogDescription>
              {noResults
                ? "¿No encontró el juzgado que buscaba? Describa el problema y lo revisaremos."
                : "¿Detectó un error en el nombre o los datos? Cuéntanos qué está mal."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tipo">Tipo de problema</Label>
              <Select
                value={tipo}
                onValueChange={(v) => setTipo(v as AdminMessageType)}
              >
                <SelectTrigger id="tipo">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TIPOS.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mensaje">Mensaje (requerido)</Label>
              <Textarea
                id="mensaje"
                placeholder="Describa el problema..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                rows={4}
                maxLength={500}
                required
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">{mensaje.length}/500</p>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting || !mensaje.trim()}>
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Enviar reporte"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
