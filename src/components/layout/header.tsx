'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  User as UserIcon,
  LogOut,
} from 'lucide-react';
import { AppLogo } from '@/components/icons';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useEffect } from 'react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';


export function SiteHeader() {
  const [isClient, setIsClient] = useState(false);
  const { user, isUserLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
        await signOut(auth);
        toast({
            title: "Sesión cerrada",
            description: "Ha cerrado sesión correctamente."
        });
        router.push('/');
    } catch (error) {
        toast({
            title: "Error al cerrar sesión",
            description: "No se pudo cerrar la sesión. Por favor, intente de nuevo.",
            variant: "destructive"
        });
    }
  }

  const mainNav: {
    title: string;
    href: string;
    subItems?: { title: string; href: string }[];
  }[] = [
    {
      title: 'DEPENDENCIAS',
      href: '/juzgados',
      subItems: [
        { title: 'Buscar', href: '/juzgados' },
        { title: 'Comparar', href: '#' },
        { title: 'Ranking', href: '#' },
        { title: 'Proponer', href: '#' },
      ],
    },
    { title: 'CÓMO FUNCIONA', href: '/como-funciona' },
  ];
  
  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ').filter(Boolean);
    if (names.length === 0) return 'U';
    return names.map(n => n[0]).join('').toUpperCase();
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-header text-header-foreground">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div>
            <a
              href="mailto:justiciacalificada@gmail.com"
              className="hover:underline text-xs sm:text-sm"
            >
              justiciacalificada@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
              {isUserLoading ? (
                <div className="h-8 w-32 bg-gray-600/50 animate-pulse rounded-md" />
              ) : user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-auto px-2 gap-2 text-header-foreground hover:bg-white/10 hover:text-white">
                           <Avatar className="h-6 w-6">
                                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? ''} />
                                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">{getInitials(user.displayName)}</AvatarFallback>
                           </Avatar>
                           <span className="hidden sm:inline">{user.displayName ?? user.email}</span>
                           <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.displayName}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Cerrar Sesión</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                    <Button variant="secondary" size="sm" asChild className="h-8">
                    <Link href="/login">Ingresar</Link>
                    </Button>
                    <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="h-8 text-header-foreground hover:bg-white/10 hover:text-white"
                    >
                    <Link href="/register">Registrarse</Link>
                    </Button>
                </>
              )}
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <AppLogo className="h-12 w-12" />
              <span className="hidden font-bold sm:inline-block text-lg tracking-wider">
                JUSTICIA CALIFICADA
              </span>
            </Link>
          </div>

          {isClient && (
            <div className="flex items-center gap-4">
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {mainNav.map((item) =>
                  item.subItems ? (
                    <div key={item.title} className="group relative">
                      <div
                        className={cn(
                          'flex items-center gap-1 cursor-pointer transition-colors hover:text-primary',
                          pathname.startsWith(item.href)
                            ? 'text-primary font-semibold'
                            : 'text-foreground/80'
                        )}
                      >
                        {item.title}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </div>
                      <div className="absolute top-full right-0 z-10 hidden pt-2 group-hover:block">
                        <div className="w-40 origin-top-right rounded-md bg-popover text-popover-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                          >
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm hover:bg-accent"
                                role="menuitem"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === item.href
                          ? 'text-primary font-semibold'
                          : 'text-foreground/80'
                      )}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile Nav */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="pr-0">
                    <Link
                      href="/"
                      className="mb-6 flex items-center space-x-2"
                      aria-label="Inicio"
                    >
                      <AppLogo className="h-8 w-8" />
                      <span className="font-bold">JUSTICIA CALIFICADA</span>
                    </Link>
                    <div className="flex flex-col space-y-2">
                      {mainNav.map((item) =>
                        item.subItems ? (
                          <Collapsible key={item.title}>
                            <CollapsibleTrigger className="flex w-full items-center justify-between p-2 font-medium [&[data-state=open]>svg]:rotate-180">
                              <span
                                className={cn(
                                  'text-sm font-medium transition-colors hover:text-primary',
                                  pathname.startsWith(item.href)
                                    ? 'text-primary font-semibold'
                                    : 'text-foreground/80'
                                )}
                              >
                                {item.title}
                              </span>
                              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="py-1 pl-6">
                              <div className="flex flex-col space-y-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className={cn(
                                      'text-sm transition-colors hover:text-primary',
                                      pathname === subItem.href
                                        ? 'text-primary font-semibold'
                                        : 'text-foreground/80'
                                    )}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                              'rounded-md p-2 text-sm font-medium transition-colors hover:text-primary',
                              pathname === item.href
                                ? 'text-primary font-semibold'
                                : 'text-foreground/80'
                            )}
                          >
                            {item.title}
                          </Link>
                        )
                      )}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
