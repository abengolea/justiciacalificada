"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Scale, Shield } from "lucide-react";
import { AppLogo } from "@/components/icons";
import { mockUsers } from "@/lib/data"; // Asumimos un usuario mock por ahora

export function SiteHeader() {
  const pathname = usePathname();
  // Simulación de sesión de usuario. En una app real, esto vendría de un contexto de autenticación.
  const user = mockUsers.find(u => u.role === 'admin'); 

  const mainNav = [
    {
      title: "Juzgados",
      href: "/juzgados",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <AppLogo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Justicia Calificada
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
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
              <AppLogo className="h-6 w-6" />
              <span className="font-bold">Justicia Calificada</span>
            </Link>
            <div className="flex flex-col space-y-3">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
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
        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <AppLogo className="h-6 w-6" />
            <span className="font-bold">Justicia Calificada</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {user ? (
             <span className="text-sm text-muted-foreground">Hola, {user.nombre}</span>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Ingresar</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Registrarse</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
