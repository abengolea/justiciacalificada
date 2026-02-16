'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
import { useToast } from '@/hooks/use-toast';
import { useFirebase, updateDocumentNonBlocking } from '@/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, sendPasswordResetEmail, type User } from 'firebase/auth';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';


const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.62 1.62-4.55 1.62-3.83 0-6.94-2.97-6.94-6.62s3.11-6.62 6.94-6.62c2.18 0 3.54.88 4.38 1.68l2.52-2.52C17.96 4.18 15.34 3 12.48 3 7.23 3 3.24 6.95 3.24 12s3.99 9 9.24 9c2.82 0 5.1-1 6.79-2.72 1.74-1.74 2.4-4.14 2.4-6.55 0-.58-.05-1.15-.14-1.72H12.48z"
      />
    </svg>
);

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor, ingrese un email válido.' }),
  password: z.string().min(1, { message: 'La contraseña es requerida.' }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { auth, firestore } = useFirebase();
  const [isLoading, setIsLoading] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSuccessfulLogin = async (user: User) => {
    const lawyerProfileRef = doc(firestore, 'lawyers', user.uid);
    const lawyerProfileDoc = await getDoc(lawyerProfileRef);

    if (lawyerProfileDoc.exists()) {
        const lawyerData = lawyerProfileDoc.data();
        
        // For testing purposes, set the location for a specific user.
        if (user.email === 'goyitobengolea@gmail.com') {
          if (lawyerData.ciudad !== 'San Nicolas de los Arroyos' || lawyerData.provincia !== 'Buenos Aires') {
            updateDocumentNonBlocking(lawyerProfileRef, {
              ciudad: 'San Nicolas de los Arroyos',
              provincia: 'Buenos Aires'
            });
          }
        }

        // abengolea1@gmail.com is always admin: ensure role is set (e.g. if profile existed as user first).
        if (user.email === 'abengolea1@gmail.com' && lawyerData.role !== 'admin') {
          updateDocumentNonBlocking(lawyerProfileRef, { role: 'admin' });
          toast({
            title: 'Rol de administrador actualizado',
            description: 'Bienvenido al panel de administración.',
          });
          router.push('/admin');
          return;
        }
        
        if (lawyerData.role === 'admin') {
            toast({
                title: 'Inicio de sesión de Administrador',
                description: 'Bienvenido, administrador.',
            });
            router.push('/admin');
            return;
        }

        if (lawyerData.status === 'approved') {
            toast({
                title: 'Inicio de sesión exitoso',
                description: 'Bienvenido de nuevo.',
            });
            router.push('/');
            return;
        }

        await signOut(auth);
        const description = lawyerData.status === 'pending'
            ? 'Su cuenta aún está pendiente de aprobación por un administrador.'
            : 'Su registro fue rechazado. Póngase en contacto para más información.';
        toast({
            title: 'Acceso Denegado',
            description,
            variant: 'destructive',
        });
        return;

    } else {
        // NEW: Check for the admin email if no profile exists
        if (user.email === 'abengolea1@gmail.com') {
          try {
            toast({
              title: 'Configurando cuenta de administrador',
              description: 'Por favor, espere un momento...',
            });

            const adminData = {
              uid: user.uid,
              nombre: 'Admin',
              apellido: 'Principal',
              email: 'abengolea1@gmail.com',
              matricula: 'N/A',
              fechaMatriculacion: new Date('2000-01-01T00:00:00Z').toISOString(),
              credencialUrl: 'N/A',
              role: 'admin',
              status: 'approved',
              registrationDate: serverTimestamp(),
            };

            await setDoc(lawyerProfileRef, adminData);

            toast({
              title: 'Cuenta de Administrador Creada',
              description: 'Redirigiendo al panel de administración.',
            });
            router.push('/admin');
            return;
          } catch (setupError) {
            console.error('Error creating admin profile:', setupError);
            await signOut(auth);
            toast({
              title: 'Error de configuración',
              description: 'No se pudo crear el perfil de administrador.',
              variant: 'destructive',
            });
            return;
          }
        }
      
        await signOut(auth);
        toast({
            title: 'Acceso Denegado',
            description: 'No existe un perfil de abogado para esta cuenta. Por favor, regístrese.',
            variant: 'destructive',
        });
        return;
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
      await handleSuccessfulLogin(userCredential.user);
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: 'Error de inicio de sesión',
        description: 'El email o la contraseña son incorrectos. Por favor, intente de nuevo.',
        variant: 'destructive',
      });
    } finally {
        setIsLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await handleSuccessfulLogin(result.user);
    } catch (error: any) {
        console.error("Google Sign-In Error", error);
        if (error.code !== 'auth/popup-closed-by-user') {
            toast({
                title: "Error de inicio de sesión con Google",
                description: "No se pudo iniciar sesión con Google. Inténtalo de nuevo.",
                variant: "destructive",
            });
        }
    } finally {
        setIsLoading(false);
    }
  }


  return (
    <div className="container flex h-[calc(100vh-10rem)] items-center justify-center py-12">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Ingresar</CardTitle>
          <CardDescription>
            Ingrese su email y contraseña para acceder a su cuenta.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="m@ejemplo.com" {...field} disabled={isLoading}/>
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
                    <div className="flex items-center justify-between">
                      <FormLabel>Contraseña</FormLabel>
                      <button
                        type="button"
                        className="text-sm text-muted-foreground hover:text-primary underline"
                        onClick={() => setForgotOpen(true)}
                      >
                        ¿Olvidó su contraseña?
                      </button>
                    </div>
                    <FormControl>
                      <Input type="password" {...field} disabled={isLoading}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Ingresar
                </Button>

                <div className="relative my-2 w-full">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                        O continuar con
                        </span>
                    </div>
                </div>

                <Button variant="outline" type="button" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-4 w-4" />}
                    Ingresar con Google
                </Button>

                <div className="mt-4 text-center text-sm text-muted-foreground">
                    No tiene una cuenta?{" "}
                    <Link href="/register" className="underline hover:text-primary">
                    Registrarse
                    </Link>
                </div>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Dialog open={forgotOpen} onOpenChange={setForgotOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recuperar contraseña</DialogTitle>
            <DialogDescription>
              Ingrese el correo electrónico de su cuenta. Le enviaremos un enlace para restablecer la contraseña.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="forgot-email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="forgot-email"
                type="email"
                placeholder="su@email.com"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                disabled={forgotLoading}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setForgotOpen(false)} disabled={forgotLoading}>
              Cancelar
            </Button>
            <Button
              disabled={forgotLoading || !forgotEmail.trim()}
              onClick={async () => {
                const email = forgotEmail.trim();
                if (!email) return;
                setForgotLoading(true);
                try {
                  await sendPasswordResetEmail(auth, email);
                  toast({
                    title: 'Correo enviado',
                    description: 'Revise su bandeja de entrada (y la carpeta de spam) para restablecer la contraseña.',
                  });
                  setForgotOpen(false);
                  setForgotEmail('');
                } catch (err: unknown) {
                  const message = err && typeof err === 'object' && 'code' in err
                    ? (err as { code: string }).code === 'auth/user-not-found'
                      ? 'No existe una cuenta con ese correo.'
                      : 'No se pudo enviar el correo. Intente de nuevo.'
                    : 'No se pudo enviar el correo. Intente de nuevo.';
                  toast({
                    title: 'Error',
                    description: message,
                    variant: 'destructive',
                  });
                } finally {
                  setForgotLoading(false);
                }
              }}
            >
              {forgotLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar enlace
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
