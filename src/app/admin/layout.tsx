'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Home,
  Gavel,
  Users,
  MessageSquare,
  PanelLeft,
  Loader2,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { AppLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useUser, useFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, isUserLoading } = useUser();
  const { firestore } = useFirebase();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);

  useEffect(() => {
    if (isUserLoading) {
      return; // Wait for Firebase Auth to initialize.
    }

    if (!user) {
      router.replace('/login'); // If not loading and no user, redirect.
      return;
    }

    const checkAdminStatus = async () => {
      setIsCheckingAdmin(true);
      try {
        // 1. Check for primary admin role first
        const adminRoleRef = doc(firestore, 'roles_admin', user.uid);
        const adminRoleDoc = await getDoc(adminRoleRef);
        if (adminRoleDoc.exists()) {
          setIsAdmin(true);
          setIsCheckingAdmin(false);
          return;
        }

        // 2. If not a primary admin, check lawyer profile for admin role
        const lawyerProfileRef = doc(firestore, 'lawyers', user.uid);
        const lawyerProfileDoc = await getDoc(lawyerProfileRef);
        if (lawyerProfileDoc.exists() && lawyerProfileDoc.data().role === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
      } finally {
        setIsCheckingAdmin(false);
      }
    };

    checkAdminStatus();
  }, [user, isUserLoading, router, firestore]);

  if (isUserLoading || isCheckingAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Acceso Denegado</h1>
        <p>No tiene permisos para acceder a esta página.</p>
        <Link href="/" passHref>
           <Button variant="link">Volver al inicio</Button>
        </Link>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <AppLogo className="w-6 h-6" />
              <span className="text-lg font-semibold">Panel de Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin" asChild>
                  <Link href="/admin">
                    <Home />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/juzgados" asChild>
                  <Link href="/admin/juzgados">
                    <Gavel />
                    Juzgados
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/usuarios" asChild>
                  <Link href="/admin/usuarios">
                    <Users />
                    Usuarios
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/comentarios" asChild>
                  <Link href="/admin/comentarios">
                    <MessageSquare />
                    Comentarios
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton href="/" asChild>
                        <Link href="/">
                            <PanelLeft/>
                            Volver al Sitio
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="p-4 border-b flex items-center gap-4">
             <SidebarTrigger className="md:hidden" />
             <h1 className="text-2xl font-bold font-headline">Panel de Administración</h1>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
