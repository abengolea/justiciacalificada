'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Home,
  Users,
  MessageSquare,
  PanelLeft,
  Loader2,
  Upload,
  Pencil,
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
      router.replace('/login'); // If not loading and no user, redirect immediately.
      return;
    }

    const checkAdminStatus = async () => {
      // No need to set isCheckingAdmin to true here, it's true by default
      try {
        const lawyerRef = doc(firestore, 'lawyers', user.uid);
        const lawyerDoc = await getDoc(lawyerRef);
        
        if (lawyerDoc.exists() && lawyerDoc.data().role === 'admin') {
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

  // This effect handles redirection *after* the admin check is complete.
  useEffect(() => {
    if (!isCheckingAdmin && !isAdmin) {
      router.replace('/');
    }
  }, [isCheckingAdmin, isAdmin, router]);

  if (isUserLoading || isCheckingAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Only render children if the check is complete and the user is an admin.
  // Otherwise, the effect above will handle the redirect.
  if (!isAdmin) {
     return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <p>Redirigiendo...</p>
        <Loader2 className="h-8 w-8 animate-spin text-primary ml-2" />
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
                <SidebarMenuButton href="/admin/correccion" asChild>
                  <Link href="/admin/correccion">
                    <Pencil />
                    Editar Juzgados
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/juzgados" asChild>
                  <Link href="/admin/juzgados">
                    <Upload />
                    Carga Masiva
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
