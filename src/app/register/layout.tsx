import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrarse | Justicia Calificada',
  description: 'Regístrese como abogado en Justicia Calificada. Requiere matrícula con al menos 5 años de antigüedad. Calificaciones anónimas.',
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
