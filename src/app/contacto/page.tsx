import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

export default function ContactoPage() {
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
        </CardContent>
      </Card>
    </div>
  );
}
