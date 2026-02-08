'use client';

import { useState, useMemo, useTransition } from 'react';
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { getAiSentenceAnalysis } from '@/app/actions';
import {
    useFirebase,
    useUser,
    useCollection,
    useMemoFirebase,
    useDoc,
    addDocumentNonBlocking,
} from '@/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Loader2, ChevronsUpDown, Check, FileUp, Wand2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Courthouse, Lawyer } from '@/lib/types';


const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const fileSchema = z.any()
    .refine((files) => files?.length == 1, "El archivo PDF es requerido.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `El tamaño máximo es 10MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Solo se aceptan archivos PDF."
    );

const formSchema = z.object({
  dependencia: z.string().min(1, "Debe seleccionar una dependencia para filtrar los juzgados."),
  courthouseId: z.string().min(1, "Debe seleccionar un juzgado."),
  caseName: z.string().min(3, "La carátula del caso es requerida."),
  caseNumber: z.string().min(1, "El número de caso es requerido."),
  caseYear: z.coerce.number().min(1900, "El año debe ser válido.").max(new Date().getFullYear(), "El año no puede ser futuro."),
  challengedSentence: fileSchema,
  rulingSentence: fileSchema,
  summary: z.string().optional(),
});


export default function NewArbitrarySentencePage() {
    const { toast } = useToast();
    const router = useRouter();
    const { firestore, storage } = useFirebase();
    const { user, isUserLoading } = useUser();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAnalyzing, startAnalysisTransition] = useTransition();

    const lawyerDocRef = useMemoFirebase(() => (user ? doc(firestore, 'lawyers', user.uid) : null), [user, firestore]);
    const { data: lawyer, isLoading: isLawyerLoading } = useDoc<Lawyer>(lawyerDocRef);

    const courthousesQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
    const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            dependencia: '',
            courthouseId: '',
            caseName: '',
            caseNumber: '',
            summary: '',
        },
    });
    
    const dependencias = useMemo(() => {
        if (!courthouses) return [];
        return [...new Set(courthouses.map(c => c.dependencia).filter(Boolean))].sort();
    }, [courthouses]);

    const selectedDependencia = form.watch('dependencia');
    const challengedSentenceFile = form.watch('challengedSentence');
    const rulingSentenceFile = form.watch('rulingSentence');

    const filteredCourthouses = useMemo(() => {
        if (!courthouses || !selectedDependencia) return [];
        return courthouses
            .filter(c => c.dependencia === selectedDependencia)
            .sort((a,b) => a.nombre.localeCompare(b.nombre));
    }, [courthouses, selectedDependencia]);

    const fileToDataUrl = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    const handleAnalyze = () => {
        const challengedFile = form.getValues('challengedSentence')?.[0];
        const rulingFile = form.getValues('rulingSentence')?.[0];

        if (!challengedFile || !rulingFile) {
            toast({
                title: "Archivos Faltantes",
                description: "Debe seleccionar ambos archivos PDF para poder usar el análisis por IA.",
                variant: "destructive"
            });
            return;
        }

        startAnalysisTransition(async () => {
             toast({
                title: "Análisis en progreso...",
                description: "La IA está procesando los documentos. Esto puede tardar unos segundos.",
            });
            try {
                const [challengedB64, rulingB64] = await Promise.all([
                    fileToDataUrl(challengedFile),
                    fileToDataUrl(rulingFile)
                ]);

                const { analysis, error } = await getAiSentenceAnalysis(challengedB64, rulingB64);

                if (error || !analysis) {
                    toast({
                        title: "Error de Análisis",
                        description: error || "No se pudo obtener una respuesta de la IA.",
                        variant: "destructive"
                    });
                    return;
                }
                
                form.setValue('caseName', analysis.caseName);
                form.setValue('caseNumber', analysis.caseNumber);
                form.setValue('caseYear', analysis.caseYear);
                form.setValue('summary', analysis.summary);
                toast({
                    title: "Análisis Completado",
                    description: "Se han rellenado los detalles del caso y el resumen.",
                });

            } catch (e) {
                 toast({
                    title: "Error Inesperado",
                    description: "Ocurrió un error al procesar los archivos. Por favor, intente de nuevo.",
                    variant: "destructive"
                });
            }
        });
    }


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
            
            const isUserAdmin = lawyer?.role === 'admin';
            const status = isUserAdmin ? 'approved' : 'pending';

            const arbitrarySentencesRef = collection(firestore, 'juzgados', values.courthouseId, 'arbitrary_sentences');
            const newDocRef = doc(arbitrarySentencesRef);
            const sentenceId = newDocRef.id;

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
                summary: values.summary || "",
                submissionDate: serverTimestamp(),
                status: status,
            };
            
            await setDoc(newDocRef, submissionData);

            // Notify admin if a non-admin user submits
            if (!isUserAdmin) {
                const courthouseName = courthouses?.find(c => c.id === values.courthouseId)?.nombre || 'Desconocido';
                const adminLink = `https://qualified-justice.web.app/admin/sentencias-arbitrarias`;
                const mailCollectionRef = collection(firestore, "mail");
                const adminMail = {
                    to: ['abengolea1@gmail.com'],
                    message: {
                        subject: 'Nueva Sentencia Arbitraria para Revisión',
                        html: `
                        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                            <div style="background-color: #2a3b4f; color: #ffffff; padding: 20px; text-align: center;">
                            <h1 style="margin: 0; font-size: 24px;">Justicia Calificada</h1>
                            </div>
                            <div style="padding: 20px; line-height: 1.6; color: #333;">
                            <h2 style="color: #1a2c41;">Nueva Sentencia para Revisar</h2>
                            <p>Un abogado ha cargado una nueva sentencia arbitraria que requiere su aprobación.</p>
                            <ul style="list-style-type: none; padding: 0;">
                                <li style="padding: 5px 0;"><strong>Juzgado:</strong> ${courthouseName}</li>
                                <li style="padding: 5px 0;"><strong>Carátula:</strong> ${values.caseName}</li>
                                <li style="padding: 5px 0;"><strong>Enviado por:</strong> ${lawyer.nombre} ${lawyer.apellido}</li>
                            </ul>
                            <a href="${adminLink}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px;">Revisar Sentencia</a>
                            </div>
                            <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #6c757d;">
                            <p>Este es un correo electrónico automatizado.</p>
                            </div>
                        </div>`
                    }
                };
                addDocumentNonBlocking(mailCollectionRef, adminMail);
            }

            const toastTitle = isUserAdmin ? "Sentencia Publicada" : "Carga Exitosa";
            const toastDescription = isUserAdmin
                ? "El caso se ha publicado directamente y ya es visible."
                : "Su caso de sentencia arbitraria ha sido enviado para revisión.";

            toast({
                title: toastTitle,
                description: toastDescription,
            });

            router.push(isUserAdmin ? '/admin/sentencias-arbitrarias' : '/');

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
    
    const isUserAdmin = lawyer?.role === 'admin';

    return (
        <div className="container mx-auto max-w-3xl py-12">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">Cargar Sentencia Arbitraria</CardTitle>
                    <CardDescription>
                        {isUserAdmin
                            ? "Como administrador, el caso se publicará directamente sin necesidad de revisión."
                            : "Aporte un caso donde un tribunal superior haya declarado arbitraria una sentencia de un tribunal inferior. Su envío será revisado por un administrador antes de ser publicado."
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                             <FormField
                                control={form.control}
                                name="dependencia"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>1. Seleccione la Dependencia</FormLabel>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            form.resetField('courthouseId');
                                        }}
                                        defaultValue={field.value}
                                        disabled={isSubmitting || isAnalyzing}
                                    >
                                        <FormControl>
                                        <SelectTrigger disabled={isLoadingCourthouses}>
                                            <SelectValue placeholder="Seleccione una provincia o jurisdicción" />
                                        </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                        {dependencias.map((d) => (
                                            <SelectItem key={d} value={d}>{d}</SelectItem>
                                        ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />

                             <FormField
                                control={form.control}
                                name="courthouseId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                    <FormLabel>2. Seleccione el Tribunal que dictó la sentencia arbitraria</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant="outline"
                                            role="combobox"
                                            disabled={!selectedDependencia || filteredCourthouses.length === 0 || isSubmitting || isAnalyzing}
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value
                                                ? filteredCourthouses?.find(
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
                                            {filteredCourthouses?.map((c) => (
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
                            
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="challengedSentence"
                                    render={({ field: { onChange, value, ...rest }}) => (
                                    <FormItem>
                                        <FormLabel>3. Sentencia Impugnada (PDF)</FormLabel>
                                        <FormDescription>Suba el archivo de la sentencia original que fue declarada arbitraria.</FormDescription>
                                        <FormControl>
                                        <Input 
                                            type="file" 
                                            accept="application/pdf"
                                            disabled={isSubmitting || isAnalyzing}
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
                                        <FormLabel>4. Sentencia Revocatoria (PDF)</FormLabel>
                                        <FormDescription>Suba el archivo de la sentencia del tribunal superior que revoca la original por arbitrariedad.</FormDescription>
                                        <FormControl>
                                        <Input 
                                            type="file" 
                                            accept="application/pdf"
                                            disabled={isSubmitting || isAnalyzing}
                                            onChange={(e) => onChange(e.target.files)}
                                            {...rest}
                                        />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>

                            <Card className="bg-muted/30">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Wand2 className="text-primary" />
                                        Asistente IA (Opcional)
                                    </CardTitle>
                                    <CardDescription>
                                        Ahorre tiempo y deje que la IA extraiga los detalles del caso y genere un resumen a partir de los PDFs.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button type="button" onClick={handleAnalyze} disabled={isAnalyzing || isSubmitting || !challengedSentenceFile || !rulingSentenceFile}>
                                        {isAnalyzing ? (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        ) : (
                                            <Wand2 className="mr-2 h-4 w-4" />
                                        )}
                                        Analizar PDFs con IA
                                    </Button>
                                </CardContent>
                            </Card>

                            <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded-md">
                                <legend className="text-sm font-medium text-muted-foreground px-1">5. Detalles del Caso</legend>
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
                                name="summary"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>6. Resumen de la Causa de Arbitrariedad</FormLabel>
                                    <FormDescription>
                                        Explique brevemente por qué la sentencia fue considerada arbitraria. Puede usar el resumen generado por IA como punto de partida.
                                    </FormDescription>
                                    <FormControl>
                                        <Textarea
                                        placeholder="Ej: La sentencia fue revocada por omitir pruebas clave presentadas por la defensa..."
                                        className="min-h-[120px]"
                                        {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <Button type="submit" className="w-full !mt-12" size="lg" disabled={isSubmitting || isAnalyzing}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FileUp className="mr-2 h-4 w-4" />
                                        {isUserAdmin ? "Publicar Caso Directamente" : "Enviar Caso para Revisión"}
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
