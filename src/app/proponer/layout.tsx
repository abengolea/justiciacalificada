import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proponer Dependencia | Justicia Calificada',
  description: 'Proponga un juzgado o dependencia judicial para que sea incorporado a la base de datos de Justicia Calificada.',
};

export default function ProponerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
