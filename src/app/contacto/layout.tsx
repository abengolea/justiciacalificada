import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Justicia Calificada',
  description: 'Póngase en contacto con Justicia Calificada. Consultas, sugerencias y colaboración.',
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
