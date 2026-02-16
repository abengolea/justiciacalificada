import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparar Juzgados | Justicia Calificada',
  description: 'Compare calificaciones de dos juzgados lado a lado. Transparencia en el sistema judicial.',
};

export default function CompararLayout({ children }: { children: React.ReactNode }) {
  return children;
}
