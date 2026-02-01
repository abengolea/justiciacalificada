
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Loader2, AlertTriangle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';


export default function AdminCourthousesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLoadData = () => {
    // Esta función se implementará una vez que tengamos los datos completos
    setIsLoading(true);
    toast({
      title: 'Función en desarrollo',
      description: 'Primero necesito los archivos SQL de ciudades y departamentos para construir la base de datos completa.',
      variant: 'destructive',
    });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Gestionar Juzgados</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carga de Base de Datos</CardTitle>
          <CardDescription>
            Este panel se utilizará para realizar la carga inicial y completa de la base de datos de juzgados, ciudades y provincias.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center p-8 space-y-4">
            <div className="p-4 bg-amber-100 dark:bg-amber-900/20 rounded-lg border border-amber-300 dark:border-amber-800">
                 <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-1" />
                    <div>
                        <h3 className="font-semibold text-amber-800 dark:text-amber-300">Pendiente de Datos</h3>
                        <p className="text-sm text-left text-amber-700 dark:text-amber-400/80">
                            Para activar la carga, necesito que me proporciones los archivos SQL restantes (ciudades.sql y departamentos.sql). Una vez los tenga, habilitaré este botón para cargar toda la base de datos con un solo clic.
                        </p>
                    </div>
                </div>
            </div>

          <Button onClick={handleLoadData} disabled={true} size="lg">
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Database className="mr-2 h-5 w-5" />
            )}
            Cargar Base de Datos Completa (Deshabilitado)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
