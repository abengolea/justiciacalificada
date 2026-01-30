'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import {
  useFirebase,
  setDocumentNonBlocking,
  addDocumentNonBlocking,
} from '@/firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, serverTimestamp, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.62-4.55 1.62-3.83 0-6.94-2.97-6.94-6.62s3.11-6.62 6.94-6.62c2.18 0 3.54.88 4.38 1.68l2.52-2.52C17.96 4.18 15.34 3 12.48 3 7.23 3 3.24 6.95 3.24 12s3.99 9 9.24 9c2.82 0 5.1-1 6.79-2.72 1.74-1.74 2.4-4.14 2.4-6.55 0-.58-.05-1.15-.14-1.72H12.48z"
      />
    </svg>
  );

const fiveYearsAgo = new Date();
fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);

const formSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre es requerido.' }),
  apellido: z.string().min(2, { message: 'El apellido es requerido.' }),
  matricula: z
    .string()
    .min(1, { message: 'La matrícula es requerida.' }),
  email: z.string().email({ message: 'Por favor, ingrese un email válido.' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  fechaMatriculacion: z
    .date({
      required_error: 'La fecha de matriculación es requerida.',
    })
    .max(fiveYearsAgo, {
      message: 'Debe tener al menos 5 años de matriculación.',
    }),
  credencial: z
    .any()
    .refine((files) => files?.length == 1, 'La foto de la credencial es requerida.')
    .refine(
      (files) => files?.[0]?.size <= 2 * 1024 * 1024,
      `El tamaño máximo del archivo es 2MB.`
    )
    .refine(
        (files) => ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
        "Solo se aceptan formatos .jpg, .png y .webp."
    ),
});

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { auth, firestore, storage } = useFirebase();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      matricula: '',
      email: '',
      password: '',
    },
  });

  const fileRef = form.register('credencial');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      // 2. Upload credential file to Firebase Storage
      const file = values.credencial[0];
      const storageRef = ref(storage, `credenciales/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const credencialUrl = await getDownloadURL(storageRef);

      // 3. Create lawyer document in Firestore
      const lawyerData = {
        uid: user.uid,
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        matricula: values.matricula,
        fechaMatriculacion: values.fechaMatriculacion.toISOString(),
        credencialUrl: credencialUrl,
        role: 'user',
        status: 'pending',
        registrationDate: serverTimestamp(),
      };

      const lawyerDocRef = doc(firestore, "lawyers", user.uid);
      setDocumentNonBlocking(lawyerDocRef, lawyerData, {});
      
      // 4. Send email notification to admin for approval
      const mailData = {
        to: ['justiciacalificada@gmail.com'],
        message: {
            subject: `Nuevo Registro Pendiente: ${values.nombre} ${values.apellido}`,
            html: `
                <p>Un nuevo abogado se ha registrado y está esperando aprobación.</p>
                <ul>
                    <li><strong>Nombre:</strong> ${values.nombre} ${values.apellido}</li>
                    <li><strong>Email:</strong> ${values.email}</li>
                    <li><strong>Matrícula:</strong> ${values.matricula}</li>
                </ul>
                <p>Por favor, ingrese al <a href="https://qualified-justice.web.app/admin/usuarios">panel de administración</a> para revisar la solicitud.</p>
            `,
        },
      };
      const mailCollectionRef = collection(firestore, "mail");
      addDocumentNonBlocking(mailCollectionRef, mailData);
      
      toast({
        title: 'Registro Enviado',
        description:
          'Su solicitud ha sido enviada. Recibirá un email cuando su cuenta sea aprobada.',
        variant: 'default',
      });
      router.push('/');
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: 'Error en el Registro',
        description: error.message || 'Ocurrió un error. Por favor, intente de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  async function handleGoogleSignIn() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        // On successful sign-in, Firebase's onAuthStateChanged listener
        // will handle the user state. We can then redirect the user.
        // We'll also need a Firestore document created for them if it doesn't exist.
        // This logic is best handled in a central place, like the FirebaseProvider or a custom hook.
        // For now, we redirect and assume the user profile will be created or checked elsewhere.
        toast({
            title: 'Inicio de sesión con Google exitoso',
            description: "Serás redirigido a la página principal.",
        });
        router.push('/');
    } catch (error: any) {
        console.error("Google Sign-In Error", error);
        toast({
            title: "Error de inicio de sesión con Google",
            description: "No se pudo iniciar sesión con Google. Inténtalo de nuevo.",
            variant: "destructive",
        });
    } finally {
        setIsLoading(false);
    }
}


  return (
    <div className="container flex items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">
            Registro de Abogado
          </CardTitle>
          <CardDescription>
            Complete el formulario para crear su cuenta. Se requerirá la
            verificación de su matrícula profesional (mínimo 5 años) y
            credencial.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} disabled={isLoading}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="apellido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Pérez" {...field} disabled={isLoading}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="matricula"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Matrícula Profesional</FormLabel>
                    <FormControl>
                      <Input placeholder="Tomo 123 Folio 45" {...field} disabled={isLoading}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fechaMatriculacion"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha de Matriculación</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                            disabled={isLoading}
                          >
                            {field.value ? (
                              format(field.value, 'dd/MM/yyyy')
                            ) : (
                              <span>Seleccione una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1950-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="credencial"
                render={() => (
                  <FormItem>
                    <FormLabel>Foto de la Credencial</FormLabel>
                     <FormControl>
                        <Input type="file" {...fileRef} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="m@ejemplo.com"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} disabled={isLoading}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                    O continuar con
                    </span>
                </div>
              </div>

              <Button variant="outline" type="button" onClick={handleGoogleSignIn} disabled={isLoading}>
                 {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                Registrarse con Google
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Crear Cuenta
              </Button>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Ya tiene una cuenta?{' '}
                <Link href="/login" className="underline hover:text-primary">
                  Ingresar
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
