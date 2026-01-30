'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { useFirebase, useUser, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

export default function ContactoPage() {
  const { firestore } = useFirebase();
  const { user } = useUser();
  const { toast } = useToast();

  const handleSendTestEmail = () => {
    if (!firestore) return;

    if (!user) {
      toast({
        title: 'Inicio de sesión requerido',
        description: 'Debe iniciar sesión para poder enviar un correo de prueba.',
        variant: 'destructive',
      });
      return;
    }

    const mailCollectionRef = collection(firestore, "mail");
    const testEmail = {
      to: ['abengolea1@gmail.com'],
      message: {
        subject: 'Correo de Prueba - Justicia Calificada',
        html: 'Este es un correo de prueba para verificar que la configuración de envío de correos funciona correctamente. ¡Felicitaciones!',
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

          <div className="pt-6 border-t">
            <h3 className="text-lg font-semibold mb-2">Prueba de Envío</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Inicie sesión y haga clic aquí para enviar un correo electrónico de prueba y verificar la configuración.
            </p>
            <Button onClick={handleSendTestEmail} variant="secondary">
              Enviar Correo de Prueba
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
