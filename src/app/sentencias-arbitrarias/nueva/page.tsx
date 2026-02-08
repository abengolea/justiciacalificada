'use client';

import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import {
    useFirebase,
    useUser,
    useCollection,
    useMemoFirebase,
    useDoc
} from '@/firebase';
import { collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, ChevronsUpDown, Check, FileUp } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Courthouse, Lawyer } from '@/lib/types';


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  courthouseId: z.string().min(1, "Debe seleccionar un juzgado."),
  caseName: z.string().min(3, "La carátula del caso es requerida."),
  caseNumber: z.string().min(1, "El número de caso es requerido."),
  caseYear: z.coerce.number().min(1900, "El año debe ser válido.").max(new Date().getFullYear(), "El año no puede ser futuro."),
  challengedSentence: z.any()
    .refine((files) => files?.length == 1, "El archivo de la sentencia impugnada es requerido.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `El tamaño máximo es 10MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Solo se aceptan archivos PDF."
    ),
  rulingSentence: z.any()
    .refine((files) => files?.length == 1, "El archivo de la sentencia revocatoria es requerido.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `El tamaño máximo es 10MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Solo se aceptan archivos PDF."
    ),
});


export default function NewArbitrarySentencePage() {
    const { toast } = useToast();
    const router = useRouter();
    const { firestore, storage } = useFirebase();
    const { user, isUserLoading } = useUser();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const lawyerDocRef = useMemoFirebase(() => (user ? doc(firestore, 'lawyers', user.uid) : null), [user, firestore]);
    const { data: lawyer, isLoading: isLawyerLoading } = useDoc<Lawyer>(lawyerDocRef);

    const courthousesQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
    const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            caseName: '',
            caseNumber: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!user || lawyer?.status !== 'approved') {
            toast({
                title: "Acción no permitida",
                description: "Debe ser un abogado aprobado para cargar sentencias.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const challengedFile = values.challengedSentence[0] as File;
            const rulingFile = values.rulingSentence[0] as File;
            
            const arbitrarySentencesRef = collection(firestore, 'juzgados', values.courthouseId, 'arbitrary_sentences');
            const newDocRef = doc(arbitrarySentencesRef);
            const sentenceId = newDocRef.id;

            // Upload files
            const challengedStorageRef = ref(storage, `arbitrary_sentences/${sentenceId}/challenged_${challengedFile.name}`);
            const rulingStorageRef = ref(storage, `arbitrary_sentences/${sentenceId}/ruling_${rulingFile.name}`);

            const [challengedUpload, rulingUpload] = await Promise.all([
                uploadBytes(challengedStorageRef, challengedFile),
                uploadBytes(rulingStorageRef, rulingFile)
            ]);

            const [challengedSentenceUrl, rulingSentenceUrl] = await Promise.all([
                getDownloadURL(challengedUpload.ref),
                getDownloadURL(rulingUpload.ref)
            ]);

            // Save data to firestore
            const submissionData = {
                lawyerId: user.uid,
                courthouseId: values.courthouseId,
                caseDetails: {
                    caseName: values.caseName,
                    caseNumber: values.caseNumber,
                    caseYear: values.caseYear,
                },
                challengedSentenceUrl,
                rulingSentenceUrl,
                submissionDate: serverTimestamp(),
                status: 'pending',
            };
            
            await addDoc(arbitrarySentencesRef, submissionData);

            toast({
                title: "Carga Exitosa",
                description: "Su caso de sentencia arbitraria ha sido enviado para revisión.",
            });

            router.push('/'); // Redirect to home or a confirmation page

        } catch (error) {
            console.error("Error submitting arbitrary sentence:", error);
            toast({
                title: "Error en la Carga",
                description: "Hubo un problema al subir su caso. Por favor, intente de nuevo.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    
    const isLoading = isUserLoading || isLawyerLoading || isLoadingCourthouses;

    if (isLoading) {
        return (
            <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        return (
            <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
                <Card className="w-full max-w-md text-center">
                    <CardHeader><CardTitle>Acceso Denegado</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Debe <Link href="/login" className="text-primary underline">iniciar sesión</Link> para poder cargar una sentencia.</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (lawyer?.status !== 'approved') {
        return (
             <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
                <Card className="w-full max-w-md text-center">
                    <CardHeader><CardTitle>Cuenta no Aprobada</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Su cuenta de abogado debe estar aprobada por un administrador para poder cargar sentencias.
                            {lawyer?.status === 'pending' && ' Su registro está actualmente pendiente de revisión.'}
                            {lawyer?.status === 'rejected' && ' Su registro ha sido rechazado.'}
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container mx-auto max-w-3xl py-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">Cargar Sentencia Arbitraria</CardTitle>
                    <CardDescription>
                        Aporte un caso donde un tribunal superior haya declarado arbitraria una sentencia de un tribunal inferior. Su envío será revisado por un administrador antes de ser publicado.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                             <FormField
                                control={form.control}
                                name="courthouseId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                    <FormLabel>Tribunal que dictó la sentencia original</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value
                                                ? courthouses?.find(
                                                    (c) => c.id === field.value
                                                )?.nombre
                                                : "Seleccionar juzgado"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                                        <Command>
                                            <CommandInput placeholder="Buscar juzgado..." />
                                            <CommandEmpty>No se encontró ningún juzgado.</CommandEmpty>
                                            <CommandGroup className="overflow-y-auto">
                                            {courthouses?.sort((a, b) => a.nombre.localeCompare(b.nombre)).map((c) => (
                                                <CommandItem
                                                value={c.nombre}
                                                key={c.id}
                                                onSelect={() => {
                                                    form.setValue("courthouseId", c.id)
                                                }}
                                                >
                                                <Check
                                                    className={cn(
                                                    "mr-2 h-4 w-4",
                                                    c.id === field.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                    )}
                                                />
                                                {c.nombre}
                                                </CommandItem>
                                            ))}
                                            </CommandGroup>
                                        </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                            <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-md">
                                <legend className="text-sm font-medium text-muted-foreground px-1">Detalles del Caso</legend>
                                <FormField
                                    control={form.control}
                                    name="caseName"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-3">
                                        <FormLabel>Carátula</FormLabel>
                                        <FormControl>
                                            <Input placeholder='"Apellido, Nombre c/ ..."' {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="caseNumber"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                        <FormLabel>Número de Expediente</FormLabel>
                                        <FormControl>
                                            <Input placeholder="12345/2022" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                 <FormField
                                    control={form.control}
                                    name="caseYear"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Año</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="2023" {...field} disabled={isSubmitting} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </fieldset>

                            <FormField
                                control={form.control}
                                name="challengedSentence"
                                render={({ field: { onChange, value, ...rest }}) => (
                                <FormItem>
                                    <FormLabel>1. Sentencia Impugnada (PDF)</FormLabel>
                                    <FormDescription>Suba el archivo de la sentencia original que fue declarada arbitraria.</FormDescription>
                                    <FormControl>
                                    <Input 
                                        type="file" 
                                        accept="application/pdf"
                                        disabled={isSubmitting}
                                        onChange={(e) => onChange(e.target.files)}
                                        {...rest}
                                    />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="rulingSentence"
                                render={({ field: { onChange, value, ...rest }}) => (
                                <FormItem>
                                    <FormLabel>2. Sentencia Revocatoria (PDF)</FormLabel>
                                    <FormDescription>Suba el archivo de la sentencia del tribunal superior que revoca la original por arbitrariedad.</FormDescription>
                                    <FormControl>
                                    <Input 
                                        type="file" 
                                        accept="application/pdf"
                                        disabled={isSubmitting}
                                        onChange={(e) => onChange(e.target.files)}
                                        {...rest}
                                    />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FileUp className="mr-2 h-4 w-4" />
                                        Enviar Caso para Revisión
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
