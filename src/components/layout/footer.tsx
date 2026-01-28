import { AppLogo } from "@/components/icons";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <AppLogo className="h-8 w-8" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Justicia Calificada. Una
              organización sin fines de lucro.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
             <Link href="/" className="hover:text-foreground">Inicio</Link>
             <Link href="/juzgados" className="hover:text-foreground">Juzgados</Link>
             <Link href="/terminos-y-condiciones" className="hover:text-foreground">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
