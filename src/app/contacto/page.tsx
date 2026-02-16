'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { useFirebase, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useAdminStatus } from "@/hooks/use-admin-status";
import Link from "next/link";
import { emailLayout, emailStyles } from "@/lib/email-templates";

export default function ContactoPage() {
  const { firestore } = useFirebase();
  const { user, isUserLoading } = useUser();
  const { isAdmin } = useAdminStatus();
  const { toast } = useToast();

  const handleSendTestEmail = () => {
    if (!firestore || !user) return;

    const mailCollectionRef = collection(firestore, "mail");
    const testEmail = {
      to: ['abengolea1@gmail.com'],
      message: {
        subject: 'Correo de Prueba - Justicia Calificada',
        html: emailLayout({
          body: `
            <h2 style="${emailStyles.heading}">Correo de Prueba</h2>
            <p style="${emailStyles.body}">Este es un correo de prueba para verificar que la configuración de envío de correos funciona correctamente.</p>
            <p style="${emailStyles.body}">¡Felicitaciones!</p>
          `,
          footer: "Este es un correo electrónico automatizado.",
        }),
      },
    };

    addDocumentNonBlocking(mailCollectionRef, testEmail);

    toast({
      title: 'Correo de prueba enviado',
      description: 'La solicitud para enviar el correo a abengolea1@gmail.com ha sido creada.',
    });
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">
            Contacto
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-foreground/80">
          <p>
            Si tiene alguna pregunta, sugerencia o desea colaborar con
            nosotros, no dude en ponerse en contacto.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-headline text-primary/90">
              Información de Contacto
            </h2>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Correo Electrónico</h3>
                <a
                  href="mailto:contacto@justiciacalificada.com"
                  className="hover:underline"
                >
                  contacto@justiciacalificada.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p>
                  Fundación Abogados por la Justicia (en formación)
                  <br />
                  Belgrano 174, San Nicolás de los Arroyos
                  <br />
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>

          <p className="pt-4 border-t">
            Para cuestiones relacionadas con el registro de usuarios,
            moderación o problemas técnicos, por favor utilice el correo
            electrónico proporcionado.
          </p>

          {isAdmin && (
            <div className="pt-6 border-t">
              <h3 className="text-lg font-semibold mb-2">Prueba de Envío (solo administradores)</h3>
              {isUserLoading ? (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verificando autenticación...
                </div>
              ) : user ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4">
                    Está conectado como {user.email}. Haga clic para enviar un correo de prueba.
                  </p>
                  <Button onClick={handleSendTestEmail} variant="secondary">
                    Enviar Correo de Prueba
                  </Button>
                </>
              ) : null}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
