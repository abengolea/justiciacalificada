'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReportarProblema } from '@/components/juzgados/reportar-problema';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';

export default function ProponerPage() {
  const { user, isUserLoading } = useUser();

  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 md:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary flex items-center gap-2">
            <Building2 className="h-8 w-8" />
            Proponer nueva dependencia
          </CardTitle>
          <CardDescription>
            ¿Hay un juzgado o dependencia judicial que no figura en nuestra base de datos? Cuéntenos cuál y lo revisaremos para incorporarlo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Debe estar registrado e iniciar sesión para enviar una propuesta. Indique nombre de la dependencia, ciudad, provincia y cualquier dato que conozca.
          </p>
          {isUserLoading ? (
            <p className="text-sm text-muted-foreground">Verificando sesión...</p>
          ) : !user ? (
            <Button asChild>
              <Link href="/login">Iniciar sesión para proponer</Link>
            </Button>
          ) : (
            <ReportarProblema noResults variant="default" />
          )}
          <p className="text-sm text-muted-foreground border-t pt-4">
            Si en cambio detectó un error en los datos de un juzgado ya listado, puede{' '}
            <Link href="/juzgados" className="underline hover:text-primary">ir a la lista de juzgados</Link> y usar &quot;Reportar problema&quot; en la ficha correspondiente.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
