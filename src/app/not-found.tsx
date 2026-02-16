import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-6" aria-hidden />
      <h1 className="text-3xl font-bold font-headline text-primary mb-2">Página no encontrada</h1>
      <p className="text-muted-foreground max-w-md mb-8">
        La página que busca no existe o fue movida. Puede volver al inicio o explorar la lista de juzgados.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild>
          <Link href="/">Ir al inicio</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/juzgados">Ver juzgados</Link>
        </Button>
      </div>
    </div>
  );
}
