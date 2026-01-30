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
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, type User } from 'firebase/auth';
import { Loader2 } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';


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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSuccessfulLogin = async (user: User) => {
    // 1. Check for admin status
    const adminRoleRef = doc(firestore, 'roles_admin', user.uid);
    const lawyerProfileRef = doc(firestore, 'lawyers', user.uid);
    
    const [adminRoleDoc, lawyerProfileDoc] = await Promise.all([
        getDoc(adminRoleRef),
        getDoc(lawyerProfileRef)
    ]);

    const isAdminByRole = adminRoleDoc.exists();
    const isAdminInLawyerProfile = lawyerProfileDoc.exists() && lawyerProfileDoc.data()?.role === 'admin';

    if (isAdminByRole || isAdminInLawyerProfile) {
        toast({
            title: 'Inicio de sesión de Administrador',
            description: 'Bienvenido, administrador.',
        });
        router.push('/admin');
        return;
    }

    // 2. If not admin, check for approved lawyer status
    if (!lawyerProfileDoc.exists()) {
        await signOut(auth);
        toast({
            title: 'Acceso Denegado',
            description: 'Este usuario no está registrado como abogado o su registro fue rechazado.',
            variant: 'destructive',
        });
        return;
    }

    const lawyerData = lawyerProfileDoc.data();

    if (lawyerData.status !== 'approved') {
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
    }

    // 3. If approved lawyer, grant access
    toast({
        title: 'Inicio de sesión exitoso',
        description: 'Bienvenido de nuevo.',
    });
    router.push('/');
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
                    <FormLabel>Contraseña</FormLabel>
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
    </div>
  );
}
