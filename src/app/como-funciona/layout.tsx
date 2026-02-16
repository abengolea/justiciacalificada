import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Cómo Funciona? | Justicia Calificada',
  description: 'Registro, acceso a dependencias judiciales y aporte de valoraciones. Justicia Calificada para abogados.',
};

export default function ComoFuncionaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
