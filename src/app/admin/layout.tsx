import { ReactNode } from 'react';
import Link from 'next/link';
import {
  Home,
  Gavel,
  Users,
  MessageSquare,
  PanelLeft,
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

interface AdminLayoutProps {
  children: ReactNode;
}

// Mock user check. Replace with real auth logic.
const user = { role: 'admin' }; 

export default function AdminLayout({ children }: AdminLayoutProps) {
  if (user.role !== 'admin') {
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
