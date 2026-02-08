'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Users,
  MessageSquare,
  PanelLeft,
  Loader2,
  Upload,
  Pencil,
  Scale,
  Menu,
} from 'lucide-react';
import { AppLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useUser, useFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface AdminLayoutProps {
  children: ReactNode;
}

const NavLink = ({ href, children, onClick }: { href: string; children: ReactNode, onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        isActive && "bg-muted text-primary"
      )}
    >
      {children}
    </Link>
  );
};


const AdminNavContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
        <NavLink href="/admin" onClick={onLinkClick}>
            <Home className="h-4 w-4" />
            Dashboard
        </NavLink>
        <NavLink href="/admin/usuarios" onClick={onLinkClick}>
            <Users className="h-4 w-4" />
            Usuarios
        </NavLink>
        <NavLink href="/admin/juzgados" onClick={onLinkClick}>
            <Upload className="h-4 w-4" />
            Carga Masiva
        </NavLink>
        <NavLink href="/admin/correccion" onClick={onLinkClick}>
            <Pencil className="h-4 w-4" />
            Editar Juzgados
        </NavLink>
        <NavLink href="/admin/comentarios" onClick={onLinkClick}>
            <MessageSquare className="h-4 w-4" />
            Comentarios
        </NavLink>
        <NavLink href="/admin/sentencias-arbitrarias" onClick={onLinkClick}>
            <Scale className="h-4 w-4" />
            Sentencias
        </NavLink>
    </>
);


export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, isUserLoading } = useUser();
  const { firestore } = useFirebase();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);
  const [isMobileSheetOpen, setMobileSheetOpen] = useState(false);

  useEffect(() => {
    if (isUserLoading) return;
    if (!user) {
      router.replace('/login');
      return;
    }

    const checkAdminStatus = async () => {
      try {
        const lawyerRef = doc(firestore, 'lawyers', user.uid);
        const lawyerDoc = await getDoc(lawyerRef);
        if (lawyerDoc.exists() && lawyerDoc.data().role === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          router.replace('/');
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
        router.replace('/');
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
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <p>Redirigiendo...</p>
        <Loader2 className="h-8 w-8 animate-spin text-primary ml-2" />
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <AppLogo className="h-6 w-6" />
              <span className="">Panel de Admin</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <AdminNavContent />
            </nav>
          </div>
          <div className="mt-auto p-4">
             <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <PanelLeft className="h-4 w-4" />
                Volver al Sitio
              </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
           <Sheet open={isMobileSheetOpen} onOpenChange={setMobileSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <AppLogo className="h-6 w-6" />
                  <span className="">Panel de Admin</span>
                </Link>
                <AdminNavContent onLinkClick={() => setMobileSheetOpen(false)} />
              </nav>
              <div className="mt-auto">
                <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <PanelLeft className="h-4 w-4" />
                    Volver al Sitio
                </Link>
              </div>
            </SheetContent>
          </Sheet>
           <div className="w-full flex-1">
             <h1 className="text-xl font-semibold font-headline">Panel de Administración</h1>
           </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

    