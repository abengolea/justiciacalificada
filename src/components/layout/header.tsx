"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Facebook,
  Twitter,
  Instagram,
  User as UserIcon,
  ChevronDown,
} from "lucide-react";
import { AppLogo } from "@/components/icons";
import { mockUsers } from "@/lib/data";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function SiteHeader() {
  const pathname = usePathname();
  // Simulación de sesión de usuario.
  const user = mockUsers.find((u) => u.role === "admin");

  const mainNav: {
    title: string;
    href: string;
    subItems?: { title: string; href: string }[];
  }[] = [
    {
      title: "DEPENDENCIAS",
      href: "/juzgados",
      subItems: [
        { title: "Buscar", href: "/juzgados" },
        { title: "Comparar", href: "#" },
        { title: "Ranking", href: "#" },
        { title: "Proponer", href: "#" },
      ],
    },
    { title: "CÓMO FUNCIONA", href: "/como-funciona" },
    { title: "PRIVACIDAD", href: "/terminos-y-condiciones" },
    { title: "CONTACTO", href: "/contacto" },
  ];

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
            {user ? (
              <>
                <Button variant="secondary" size="sm" asChild className="h-8">
                  <Link href="#">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Prueba
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-header-foreground hover:bg-white/10 hover:text-white"
                >
                  Salir
                </Button>
              </>
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
        <div className="container flex h-20 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <AppLogo className="h-12 w-12" />
              <span className="hidden font-bold sm:inline-block text-lg tracking-wider">
                JUSTICIA CALIFICADA
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {mainNav.map((item) =>
                item.subItems ? (
                  <div key={item.title} className="group relative">
                    <div
                      className={cn(
                        "flex items-center gap-1 cursor-pointer transition-colors hover:text-primary",
                        pathname.startsWith(item.href)
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      )}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </div>
                    <div className="absolute top-full left-0 z-10 mt-2 hidden w-40 origin-top-right rounded-md bg-popover text-popover-foreground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none group-hover:block">
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
                ) : (
                  <Link
                    key={item.title}
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
                )
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
              <div className="flex flex-col space-y-2">
                {mainNav.map((item) =>
                  item.subItems ? (
                    <Collapsible key={item.title}>
                      <CollapsibleTrigger className="flex w-full items-center justify-between p-2 font-medium [&[data-state=open]>svg]:rotate-180">
                        <span
                          className={cn(
                            "text-sm font-medium transition-colors hover:text-primary",
                            pathname.startsWith(item.href)
                              ? "text-primary font-semibold"
                              : "text-foreground/80"
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
                                "text-sm transition-colors hover:text-primary",
                                pathname === subItem.href
                                  ? "text-primary font-semibold"
                                  : "text-foreground/80"
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
                        "rounded-md p-2 text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
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