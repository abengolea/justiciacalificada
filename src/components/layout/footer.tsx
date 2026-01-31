'use client';

import { AppLogo } from "@/components/icons";
import Link from "next/link";
import { Shield } from "lucide-react";
import { useUser, useFirebase } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";

export function SiteFooter() {
  const { user } = useUser();
  const { firestore } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      const checkAdmin = async () => {
        const lawyerRef = doc(firestore, 'lawyers', user.uid);
        const lawyerDoc = await getDoc(lawyerRef);
        if (lawyerDoc.exists() && lawyerDoc.data().role === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      };
      checkAdmin();
    } else {
      setIsAdmin(false);
    }
  }, [user, firestore]);

  return (
    <footer className="border-t">
      <div className="container relative py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <AppLogo className="h-8 w-8" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Justicia Calificada. Una
              organización sin fines de lucro.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
             <Link href="/" className="hover:text-foreground">Inicio</Link>
             <Link href="/juzgados" className="hover:text-foreground">Juzgados</Link>
             <Link href="/como-funciona" className="hover:text-foreground">Cómo Funciona</Link>
             <Link href="/terminos-y-condiciones" className="hover:text-foreground">Privacidad</Link>
             <Link href="/contacto" className="hover:text-foreground">Contacto</Link>
          </div>
        </div>
        {isAdmin && (
            <Link href="/admin" className="absolute bottom-4 right-4 hover:text-foreground" title="Administración">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Administración</span>
            </Link>
        )}
      </div>
    </footer>
  );
}
