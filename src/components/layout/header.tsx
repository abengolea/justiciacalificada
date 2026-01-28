"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Facebook, Twitter, Instagram, User as UserIcon, Shield } from "lucide-react";
import { AppLogo } from "@/components/icons";
import { mockUsers } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  // Simulación de sesión de usuario.
  const user = mockUsers.find(u => u.role === 'admin'); 

  const mainNav = [
    { title: "DEPENDENCIAS", href: "/juzgados" },
    { title: "CÓMO FUNCIONA", href: "/#how-it-works" },
    { title: "PRIVACIDAD", href: "#" },
    { title: "CONTACTO", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-header text-header-foreground">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div>
            <a href="mailto:justiciacalificada@gmail.com" className="hover:underline text-xs sm:text-sm">
              justiciacalificada@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
             {user ? (
              <>
                <Button variant="secondary" size="sm" asChild className="h-8">
                  <Link href="#">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Prueba
                  </Link>
                </Button>
                 <Button variant="ghost" size="sm" className="h-8 text-header-foreground hover:bg-white/10 hover:text-white">
                  Salir
                </Button>
              </>
            ) : (
               <>
                <Button variant="secondary" size="sm" asChild className="h-8">
                    <Link href="/login">Ingresar</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild className="h-8 text-header-foreground hover:bg-white/10 hover:text-white">
                    <Link href="/register">Registrarse</Link>
                </Button>
              </>
            )}
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <AppLogo className="h-12 w-12" />
              <span className="hidden font-bold sm:inline-block text-lg tracking-wider">
                JUSTICIA CALIFICADA
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
               {user?.role === 'admin' && (
              <Link
                href="/admin"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname.startsWith('/admin')
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Admin
                </div>
              </Link>
            )}
            </nav>
          </div>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="mb-6 flex items-center space-x-2"
                aria-label="Home"
              >
                <AppLogo className="h-8 w-8" />
                <span className="font-bold">JUSTICIA CALIFICADA</span>
              </Link>
              <div className="flex flex-col space-y-3">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-foreground/80"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                 {user?.role === 'admin' && (
                  <Link
                    href="/admin"
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      pathname.startsWith('/admin')
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      Admin
                    </div>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex flex-1 items-center justify-start md:hidden">
            <Link href="/" className="flex items-center space-x-2">
                <AppLogo className="h-10 w-10" />
                <span className="font-bold text-base">JUSTICIA CALIFICADA</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
