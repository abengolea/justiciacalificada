import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="container flex items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">
            Registro de Abogado
          </CardTitle>
          <CardDescription>
            Complete el formulario para crear su cuenta. Se requerirá la
            verificación de su matrícula profesional.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Nombre</Label>
              <Input id="first-name" placeholder="Juan" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Apellido</Label>
              <Input id="last-name" placeholder="Pérez" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="matricula">Matrícula Profesional</Label>
            <Input
              id="matricula"
              placeholder="Tomo 123 Folio 45"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@ejemplo.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Crear Cuenta</Button>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Ya tiene una cuenta?{" "}
            <Link href="/login" className="underline hover:text-primary">
              Ingresar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
