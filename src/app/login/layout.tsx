import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingresar | Justicia Calificada',
  description: 'Inicie sesión en su cuenta de Justicia Calificada para calificar juzgados y participar en la comunidad de abogados.',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
