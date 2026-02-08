'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  useFirebase,
  addDocumentNonBlocking,
  useCollection,
  useMemoFirebase,
} from '@/firebase';
import { collection } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre es requerido (mínimo 3 caracteres).' }),
  dependencia: z.string().min(1, { message: 'La dependencia es requerida.' }),
  ciudad: z.string().min(2, { message: 'La ciudad es requerida.' }),
  fuero: z.string().min(1, { message: 'El fuero es requerido.' }),
  instancia: z.string().min(1, { message: 'La instancia es requerida.' }),
  direccion: z.string().optional(),
  telefono: z.string().optional(),
});

type Provincia = { id: string; nombre: string; };
type Fuero = { id: string; nombre: string; };


export default function NewCourthousePage() {
    const { toast } = useToast();
    const router = useRouter();
    const { firestore } = useFirebase();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombre: '',
            dependencia: '',
            ciudad: '',
            fuero: '',
            instancia: '',
            direccion: '',
            telefono: '',
        },
    });
    
    // Data for select inputs
    const provinciasQuery = useMemoFirebase(() => collection(firestore, 'provincias'), [firestore]);
    const { data: provincias, isLoading: isLoadingProvincias } = useCollection<Provincia>(provinciasQuery);
    
    const fuerosQuery = useMemoFirebase(() => collection(firestore, 'fueros'), [firestore]);
    const { data: fueros, isLoading: isLoadingFueros } = useCollection<Fuero>(fuerosQuery);

    const dependencias = useMemo(() => {
        if (!provincias) return [];
        return [...new Set(provincias.map(p => p.nombre).filter(Boolean))].sort();
    }, [provincias]);

    const fuerosList = useMemo(() => {
        if (!fueros) return ['Multifuero'];
        const existingFueros = fueros.map(f => f.nombre).filter(Boolean);
        const allFueros = new Set([...existingFueros, 'Multifuero']);
        return [...allFueros].sort();
    }, [fueros]);

    const isLoadingData = isLoadingProvincias || isLoadingFueros;


    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const juzgadosCollectionRef = collection(firestore, 'juzgados');
            addDocumentNonBlocking(juzgadosCollectionRef, values);

            toast({
                title: 'Juzgado Creado',
                description: `El juzgado "${values.nombre}" ha sido agregado correctamente.`,
            });
            router.push('/admin/correccion');
        } catch (error) {
            console.error("Error creating courthouse:", error);
            toast({
                title: "Error al crear",
                description: "Hubo un problema al crear el juzgado. Por favor, intente de nuevo.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    
    return (
        <div className="container mx-auto max-w-2xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Crear Nuevo Juzgado</CardTitle>
                    <CardDescription>
                        Complete los detalles para agregar un nuevo tribunal a la base de datos.
                    </CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="nombre"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Nombre del Juzgado</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ej: Juzgado de Primera Instancia en lo Civil y Comercial N°1" {...field} disabled={isSubmitting} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="dependencia"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Dependencia (Provincia)</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting || isLoadingData}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccionar dependencia" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {dependencias.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="ciudad"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Ciudad</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: La Plata" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fuero"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Fuero</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting || isLoadingData}>
                                            <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccionar fuero" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                            {fuerosList.map(f => <SelectItem key={f} value={f}>{f}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instancia"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Instancia</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ej: Cámara de Apelaciones" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                             </div>

                             <FormField
                                control={form.control}
                                name="direccion"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Dirección (Opcional)</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isSubmitting} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                             <FormField
                                control={form.control}
                                name="telefono"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Teléfono (Opcional)</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isSubmitting} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full" disabled={isSubmitting || isLoadingData}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Crear Juzgado
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
