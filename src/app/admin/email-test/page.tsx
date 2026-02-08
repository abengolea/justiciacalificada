'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFirebase, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function AdminEmailTestPage() {
  const { firestore } = useFirebase();
  const { user, isUserLoading } = useUser();
  const { toast } = useToast();
  const [recipient, setRecipient] = useState(user?.email || '');
  const [isSending, setIsSending] = useState(false);

  const handleSendTestEmail = () => {
    if (!firestore || !user) {
      toast({
        title: "No autenticado",
        description: "Debe iniciar sesión para enviar un correo.",
        variant: "destructive"
      });
      return;
    }

    if (!recipient) {
      toast({
        title: "Falta destinatario",
        description: "Por favor, ingrese un correo electrónico de destino.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);

    const mailCollectionRef = collection(firestore, "mail");
    const testEmail = {
      to: [recipient],
      message: {
        subject: 'Correo de Prueba desde el Panel de Admin - Justicia Calificada',
        html: `
            <h1>¡El sistema de correos funciona!</h1>
            <p>Este es un correo de prueba enviado desde el panel de administración de <strong>Justicia Calificada</strong>.</p>
            <p>Si recibiste esto, la integración con el servicio de correo (Trigger Email) está configurada y operativa.</p>
            <p>Enviado por: ${user.email}</p>
        `,
      },
    };

    addDocumentNonBlocking(mailCollectionRef, testEmail);

    toast({
      title: 'Correo de prueba enviado',
      description: `La solicitud para enviar el correo a ${recipient} ha sido creada.`,
    });
    
    setIsSending(false);
  };

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Prueba de Envío de Correo</CardTitle>
          <CardDescription>
            Esta página permite verificar que la extensión "Trigger Email" de Firebase está funcionando correctamente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <p>Al hacer clic en el botón, se agregará un nuevo documento a la colección <code>mail</code> en Firestore. La extensión debería detectar este nuevo documento y enviar un correo electrónico al destinatario especificado.</p>
            <div className="space-y-2">
                <label htmlFor="recipient-email" className="text-sm font-medium">Destinatario</label>
                <Input 
                    id="recipient-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    disabled={isUserLoading || isSending}
                />
            </div>
            <Button onClick={handleSendTestEmail} disabled={isUserLoading || isSending}>
                {isSending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Mail className="mr-2 h-4 w-4" />
                )}
                Enviar Correo de Prueba
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
