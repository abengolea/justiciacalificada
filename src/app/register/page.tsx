'use client';

import React, { useState, useMemo } from 'react';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
  addDocumentNonBlocking,
  useCollection,
  useMemoFirebase,
} from '@/firebase';
import {
  User,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, serverTimestamp, collection, getDoc, setDoc } from 'firebase/firestore';
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

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

type Provincia = { id: string; nombre: string; };
type Departamento = { id: string; nombre: string; id_provincia: string; };
type Ciudad = { id: string; nombre: string; id_departamento: string; };

const formSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre es requerido.' }),
  apellido: z.string().min(2, { message: 'El apellido es requerido.' }),
  provincia: z.string({ required_error: 'La provincia es requerida.' }).min(1, 'La provincia es requerida.'),
  ciudad: z.string({ required_error: 'La ciudad es requerida.' }).min(1, 'La ciudad es requerida.'),
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
    .refine((files) => files?.length == 1, "La imagen de la credencial es requerida.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `El tamaño máximo es 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png y .webp son los únicos formatos aceptados."
    ),
});

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { auth, firestore, storage } = useFirebase();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setGoogleLoading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      provincia: '',
      ciudad: '',
      matricula: '',
      email: '',
      password: '',
      credencial: undefined,
    },
  });

  const provinciasQuery = useMemoFirebase(() => collection(firestore, 'provincias'), [firestore]);
  const { data: provincias } = useCollection<Provincia>(provinciasQuery);

  const departamentosQuery = useMemoFirebase(() => collection(firestore, 'departamentos'), [firestore]);
  const { data: departamentos } = useCollection<Departamento>(departamentosQuery);

  const ciudadesQuery = useMemoFirebase(() => collection(firestore, 'ciudades'), [firestore]);
  const { data: ciudades } = useCollection<Ciudad>(ciudadesQuery);

  const selectedProvincia = form.watch('provincia');

  const filteredCiudades = useMemo(() => {
    if (!selectedProvincia || !departamentos || !ciudades || !provincias) return [];
    
    const selectedProvinciaDoc = provincias.find(p => p.nombre === selectedProvincia);
    if (!selectedProvinciaDoc) return [];

    const deparmentosInProvincia = departamentos.filter(d => d.id_provincia === selectedProvinciaDoc.id);
    const departmentIds = new Set(deparmentosInProvincia.map(d => d.id));

    return ciudades.filter(c => departmentIds.has(c.id_departamento)).sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [selectedProvincia, provincias, departamentos, ciudades]);

  const sendRegistrationEmails = (email: string, nombre: string, apellido: string, matricula: string, ciudad: string, provincia: string, provider: 'Email' | 'Google') => {
      const mailCollectionRef = collection(firestore, "mail");
      const adminLink = "https://qualified-justice.web.app/admin/usuarios";

      const adminMailData = {
        to: ['abengolea1@gmail.com'],
        message: {
            subject: `Nuevo Registro Pendiente: ${nombre} ${apellido}`,
            html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #2a3b4f; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">Justicia Calificada</h1>
              </div>
              <div style="padding: 20px; line-height: 1.6; color: #333;">
                <h2 style="color: #1a2c41;">Nuevo Registro Pendiente</h2>
                <p>Un nuevo abogado se ha registrado y está esperando aprobación.</p>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="padding: 5px 0;"><strong>Nombre:</strong> ${nombre} ${apellido}</li>
                    <li style="padding: 5px 0;"><strong>Email:</strong> ${email}</li>
                    <li style="padding: 5px 0;"><strong>Matrícula:</strong> ${matricula}</li>
                    <li style="padding: 5px 0;"><strong>Ubicación:</strong> ${ciudad}, ${provincia}</li>
                    <li style="padding: 5px 0;"><strong>Método de registro:</strong> ${provider}</li>
                </ul>
                <a href="${adminLink}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px;">Revisar Solicitud</a>
              </div>
              <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #6c757d;">
                <p>Este es un correo electrónico automatizado.</p>
              </div>
            </div>
            `,
        },
      };
      addDocumentNonBlocking(mailCollectionRef, adminMailData);
      
      const userMailData = {
        to: [email],
        message: {
          subject: 'Hemos recibido su solicitud de registro en Justicia Calificada',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #2a3b4f; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">Justicia Calificada</h1>
              </div>
              <div style="padding: 20px; line-height: 1.6; color: #333;">
                <h2 style="color: #1a2c41;">¡Gracias por registrarse!</h2>
                <p>Hola ${nombre},</p>
                <p>Su solicitud ha sido recibida y está siendo revisada por nuestros administradores. Este proceso es para garantizar la validez de todos nuestros miembros.</p>
                <p>Recibirá otro correo electrónico una vez que su cuenta haya sido aprobada. ¡Apreciamos su paciencia!</p>
              </div>
              <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #6c757d;">
                <p>Recibió este correo porque está registrado en Justicia Calificada. Este es un correo electrónico automatizado, por favor no responda.</p>
              </div>
            </div>
          `
        }
      }
      addDocumentNonBlocking(mailCollectionRef, userMailData);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    if (!values.password) {
      form.setError("password", { type: "manual", message: "La contraseña es requerida." });
      setIsLoading(false);
      return;
    }
    if (values.password.length < 6) {
      form.setError("password", { type: "manual", message: "La contraseña debe tener al menos 6 caracteres." });
      setIsLoading(false);
      return;
    }
    
    let user: User | null = null;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password!);
      user = userCredential.user;

      const file = values.credencial[0] as File;
      const storageRef = ref(storage, `credenciales/${user.uid}/${file.name}`);
      const uploadTask = await uploadBytes(storageRef, file);
      const credencialUrl = await getDownloadURL(uploadTask.ref);

      const lawyerData = {
        uid: user.uid,
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        provincia: values.provincia,
        ciudad: values.ciudad,
        matricula: values.matricula,
        fechaMatriculacion: values.fechaMatriculacion.toISOString(),
        credencialUrl: credencialUrl,
        role: 'user',
        status: 'pending',
        registrationDate: serverTimestamp(),
      };
      const lawyerDocRef = doc(firestore, "lawyers", user.uid);
      await setDoc(lawyerDocRef, lawyerData);
      
      sendRegistrationEmails(values.email, values.nombre, values.apellido, values.matricula, values.ciudad, values.provincia, 'Email');
      
      toast({
        title: 'Registro Enviado',
        description:
          'Su solicitud ha sido enviada. Recibirá un email cuando su cuenta sea aprobada.',
        variant: 'default',
      });
      form.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

    } catch (error: any) {
      if (user) {
        await user.delete().catch(deleteError => {
          console.error("Fallo al limpiar usuario parcialmente creado:", deleteError);
        });
      }

      console.error("Error de Registro Detallado:", error);

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
    const isValid = await form.trigger();
    if (!isValid) {
        toast({
            title: "Formulario incompleto",
            description: "Por favor, complete todos los campos requeridos, incluyendo la credencial, antes de registrarse con Google.",
            variant: "destructive",
        });
        setGoogleLoading(false);
        return;
    }
    
    const values = form.getValues();

    const provider = new GoogleAuthProvider();
    let user: User | null = null;
    try {
        const result = await signInWithPopup(auth, provider);
        user = result.user;

        const lawyerDocRefCheck = doc(firestore, "lawyers", user.uid);
        const docSnap = await getDoc(lawyerDocRefCheck);
        if (docSnap.exists()) {
             await signOut(auth);
             toast({
                title: 'Email ya registrado',
                description: 'Esta cuenta de Google ya se encuentra registrada. Por favor, intente iniciar sesión.',
                variant: 'destructive',
            });
            setGoogleLoading(false);
            return;
        }
        
        if (user.email !== values.email) {
            await signOut(auth);
            toast({
                title: 'Correo no coincide',
                description: 'El correo del formulario no coincide con su cuenta de Google. Por favor, use el mismo correo.',
                variant: 'destructive',
            });
            setGoogleLoading(false);
            return;
        }
        
        const file = values.credencial[0] as File;
        const storageRef = ref(storage, `credenciales/${user.uid}/${file.name}`);
        const uploadTask = await uploadBytes(storageRef, file);
        const credencialUrl = await getDownloadURL(uploadTask.ref);

        const lawyerData = {
            uid: user.uid,
            nombre: values.nombre,
            apellido: values.apellido,
            email: user.email!,
            provincia: values.provincia,
            ciudad: values.ciudad,
            matricula: values.matricula,
            fechaMatriculacion: values.fechaMatriculacion.toISOString(),
            credencialUrl: credencialUrl,
            role: 'user',
            status: 'pending',
            registrationDate: serverTimestamp(),
        };

        const lawyerDocRef = doc(firestore, "lawyers", user.uid);
        await setDoc(lawyerDocRef, lawyerData);
        
        sendRegistrationEmails(user.email!, values.nombre, values.apellido, values.matricula, values.ciudad, values.provincia, 'Google');
        
        toast({
            title: 'Registro Enviado',
            description: 'Su solicitud ha sido enviada. Recibirá un email cuando su cuenta sea aprobada.',
            variant: 'default',
        });
        form.reset();
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    } catch (error: any) {
        console.error("Error de registro con Google:", error);
        
        if (user) {
            await signOut(auth).catch(signOutError => {
                console.error("Fallo al cerrar sesión del usuario después de un error de registro con Google:", signOutError);
            });
        }

        if (error.code !== 'auth/popup-closed-by-user') {
            toast({
                title: "Error de registro con Google",
                description: error.message || "No se pudo completar el registro. Inténtalo de nuevo.",
                variant: "destructive",
            });
        }
    } finally {
        setGoogleLoading(false);
    }
}


  return (
    <div className="container flex items-center justify-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">
            Registro de Abogado
          </CardTitle>
          <CardDescription>
            Complete el formulario para crear su cuenta. Se requerirá la
            verificación de su matrícula profesional (mínimo 5 años).
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

               <div className="grid grid-cols-2 gap-4">
                 <FormField
                  control={form.control}
                  name="provincia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provincia</FormLabel>
                        <Select onValueChange={(value) => {
                            field.onChange(value)
                            form.resetField('ciudad');
                        }} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger disabled={isLoading || isGoogleLoading || !provincias}>
                            <SelectValue placeholder="Seleccione su provincia" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {provincias?.sort((a,b) => a.nombre.localeCompare(b.nombre)).map(p => (
                            <SelectItem key={p.id} value={p.nombre}>{p.nombre}</SelectItem>
                          ))}
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
                      <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger disabled={isLoading || isGoogleLoading || !selectedProvincia || filteredCiudades.length === 0}>
                            <SelectValue placeholder="Seleccione su ciudad" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                           {filteredCiudades.map(c => (
                            <SelectItem key={c.id} value={c.nombre}>{c.nombre}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
               <FormField
                control={form.control}
                name="credencial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagen de Credencial</FormLabel>
                    <FormControl>
                       <Input 
                        type="file" 
                        accept="image/png, image/jpeg, image/webp"
                        disabled={isLoading || isGoogleLoading}
                        ref={fileInputRef}
                        onChange={(e) => field.onChange(e.target.files)}
                       />
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
