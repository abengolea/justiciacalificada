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
} from '@/firebase';
import {
  User,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, serverTimestamp, collection, getDoc, setDoc, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { es } from 'date-fns/locale';


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

const baseFormSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre es requerido.' }),
  apellido: z.string().min(2, { message: 'El apellido es requerido.' }),
  matricula: z
    .string()
    .min(1, { message: 'La matrícula es requerida.' }),
  email: z.string().email({ message: 'Por favor, ingrese un email válido.' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    .optional(),
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
  const [isGoogleLoading, setGoogleLoading] = useState(false);
  
  const form = useForm<z.infer<typeof baseFormSchema>>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      matricula: '',
      email: '',
      password: '',
    },
  });

  const fileRef = form.register('credencial');

  async function onSubmit(values: z.infer<typeof baseFormSchema>) {
    setIsLoading(true);
    if (!values.password || values.password.length < 6) {
      form.setError("password", {
        type: "manual",
        message: "La contraseña debe tener al menos 6 caracteres.",
      });
      setIsLoading(false);
      return;
    }
    
    let user: User | null = null;
    try {
      // 1. Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password!);
      user = userCredential.user;

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
      await setDoc(lawyerDocRef, lawyerData);
      
      const mailCollectionRef = collection(firestore, "mail");
      
      // 4. Send email notification to admin for approval
      const adminMailData = {
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
      await addDoc(mailCollectionRef, adminMailData);
      
      // 5. Send "pending" email to user
      const userMailData = {
        to: [values.email],
        message: {
          subject: 'Hemos recibido su solicitud de registro',
          html: `
            <p>Hola ${values.nombre},</p>
            <p>Gracias por registrarse en Justicia Calificada. Su solicitud ha sido recibida y está siendo revisada por nuestros administradores.</p>
            <p>Recibirá otro correo electrónico una vez que su cuenta haya sido aprobada.</p>
            <p>Atentamente,<br>El equipo de Justicia Calificada</p>
          `
        }
      }
      await addDoc(mailCollectionRef, userMailData);
      
      toast({
        title: 'Registro Enviado',
        description:
          'Su solicitud ha sido enviada. Recibirá un email cuando su cuenta sea aprobada.',
        variant: 'default',
      });
      form.reset();
    } catch (error: any) {
      if (user) {
        await user.delete().catch(deleteError => {
          console.error("Failed to clean up partially created user:", deleteError);
        });
      }

      console.error("Error de Registro:", error);

      let title = 'Error en el Registro';
      let description = error.message || 'Ocurrió un error. Por favor, intente de nuevo.';

      if (error.code === 'auth/email-already-in-use') {
        title = 'Email ya registrado';
        description = 'Este correo electrónico ya se encuentra registrado. Por favor, intente iniciar sesión.';
      }
      
      toast({
        title,
        description,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  async function handleGoogleSignIn() {
    setGoogleLoading(true);
    const isValid = await form.trigger(['nombre', 'apellido', 'matricula', 'fechaMatriculacion', 'credencial', 'email']);
    if (!isValid) {
        toast({
            title: "Formulario incompleto",
            description: "Por favor, complete todos los campos requeridos (excepto la contraseña) antes de registrarse con Google.",
            variant: "destructive",
        });
        setGoogleLoading(false);
        return;
    }
    
    const values = form.getValues();

    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const lawyerDocRefCheck = doc(firestore, "lawyers", user.uid);
        const docSnap = await getDoc(lawyerDocRefCheck);
        if (docSnap.exists()) {
             await signOut(auth);
             toast({
                title: 'Email ya registrado',
                description: 'Esta cuenta de Google ya se encuentra registrada. Por favor, intente iniciar sesión.',
                variant: 'destructive',
            });
            return;
        }
        
        if (user.email !== values.email) {
            await signOut(auth);
            toast({
                title: 'Correo no coincide',
                description: 'El correo del formulario no coincide con su cuenta de Google. Por favor, use el mismo correo.',
                variant: 'destructive',
            });
            return;
        }

        const file = values.credencial[0];
        const storageRef = ref(storage, `credenciales/${user.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        const credencialUrl = await getDownloadURL(storageRef);

        const lawyerData = {
            uid: user.uid,
            nombre: values.nombre,
            apellido: values.apellido,
            email: user.email!,
            matricula: values.matricula,
            fechaMatriculacion: values.fechaMatriculacion.toISOString(),
            credencialUrl: credencialUrl,
            role: 'user',
            status: 'pending',
            registrationDate: serverTimestamp(),
        };

        const lawyerDocRef = doc(firestore, "lawyers", user.uid);
        await setDoc(lawyerDocRef, lawyerData);
        
        const mailCollectionRef = collection(firestore, "mail");
        
        const adminMailData = {
            to: ['justiciacalificada@gmail.com'],
            message: { subject: `Nuevo Registro (Google) Pendiente: ${values.nombre} ${values.apellido}`, html: `<p>Un nuevo abogado se ha registrado con Google y está esperando aprobación.</p><ul><li><strong>Nombre:</strong> ${values.nombre} ${values.apellido}</li><li><strong>Email:</strong> ${user.email}</li><li><strong>Matrícula:</strong> ${values.matricula}</li></ul><p>Por favor, ingrese al <a href="https://qualified-justice.web.app/admin/usuarios">panel de administración</a> para revisar la solicitud.</p>` },
        };
        await addDoc(mailCollectionRef, adminMailData);
        
        const userMailData = {
            to: [user.email!],
            message: { subject: 'Hemos recibido su solicitud de registro', html: `<p>Hola ${values.nombre},</p><p>Gracias por registrarse en Justicia Calificada. Su solicitud ha sido recibida y está siendo revisada por nuestros administradores.</p><p>Recibirá otro correo electrónico una vez que su cuenta haya sido aprobada.</p><p>Atentamente,<br>El equipo de Justicia Calificada</p>` }
        };
        await addDoc(mailCollectionRef, userMailData);
        
        toast({
            title: 'Registro Enviado',
            description: 'Su solicitud ha sido enviada. Recibirá un email cuando su cuenta sea aprobada.',
            variant: 'default',
        });
        form.reset();
    } catch (error: any) {
        console.error("Error de registro con Google:", error);
        
        await signOut(auth).catch(signOutError => {
            console.error("Failed to sign out user after Google registration error:", signOutError);
        });

        toast({
            title: "Error de registro con Google",
            description: error.message || "No se pudo completar el registro. Inténtalo de nuevo.",
            variant: "destructive",
        });
    } finally {
        setGoogleLoading(false);
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
                        <Input placeholder="Juan" {...field} disabled={isLoading || isGoogleLoading}/>
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
                        <Input placeholder="Pérez" {...field} disabled={isLoading || isGoogleLoading}/>
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
                      <Input placeholder="Tomo 123 Folio 45" {...field} disabled={isLoading || isGoogleLoading}/>
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
                            disabled={isLoading || isGoogleLoading}
                          >
                            {field.value ? (
                              format(field.value, 'PPP', { locale: es })
                            ) : (
                              <span>Seleccione una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          locale={es}
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown-buttons"
                          fromYear={1950}
                          toYear={new Date().getFullYear()}
                          disabled={(date) =>
                            date > fiveYearsAgo || date < new Date('1950-01-01')
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
                        <Input type="file" {...fileRef} disabled={isLoading || isGoogleLoading} />
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
                        disabled={isLoading || isGoogleLoading}
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
                      <Input type="password" {...field} disabled={isLoading || isGoogleLoading}/>
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

              <Button variant="outline" type="button" onClick={handleGoogleSignIn} disabled={isLoading || isGoogleLoading}>
                 {isGoogleLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                Registrarse con Google
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
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
