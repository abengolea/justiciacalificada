import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ranking de Sentencias Arbitrarias | Justicia Calificada',
  description:
    'Registro público de sentencias declaradas arbitrarias por tribunales superiores. Transparencia en el sistema judicial argentino.',
};

export default function RankingArbitrariedadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
