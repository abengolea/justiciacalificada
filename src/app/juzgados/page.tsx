import CourthouseList from "@/components/juzgados/courthouse-list";

export default function JuzgadosPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Base de Datos de Juzgados
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Busque, filtre y explore las calificaciones de los juzgados de toda
          Argentina.
        </p>
      </div>
      <CourthouseList />
    </div>
  );
}
