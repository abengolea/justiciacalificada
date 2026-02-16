import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ranking de Juzgados | Justicia Calificada',
  description: 'Descubra los juzgados mejor, peor y más calificados por la comunidad de abogados en Argentina.',
};

export default function RankingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
