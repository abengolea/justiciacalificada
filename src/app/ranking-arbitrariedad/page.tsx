'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collectionGroup, collection } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArbitrarySentence, Courthouse } from '@/lib/types';
import { FileText, ExternalLink, Gavel, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Timestamp } from 'firebase/firestore';

function getSubmissionDate(sentence: ArbitrarySentence): Date {
  if (!sentence.submissionDate) return new Date(0);
  if (sentence.submissionDate && typeof (sentence.submissionDate as { toDate?: () => Date }).toDate === 'function') {
    return (sentence.submissionDate as { toDate: () => Date }).toDate();
  }
  if (sentence.submissionDate instanceof Timestamp) return sentence.submissionDate.toDate();
  return new Date(sentence.submissionDate as string | number);
}

export default function RankingArbitrariedadPage() {
  const { firestore } = useFirebase();
  const [dependenciaFilter, setDependenciaFilter] = useState<string>('all');

  const sentencesQuery = useMemoFirebase(
    () => (firestore ? collectionGroup(firestore, 'arbitrary_sentences') : null),
    [firestore]
  );
  const { data: sentences, isLoading: isLoadingSentences } = useCollection<ArbitrarySentence>(sentencesQuery);

  const courthousesQuery = useMemoFirebase(
    () => (firestore ? collection(firestore, 'juzgados') : null),
    [firestore]
  );
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const courthouseMap = useMemo(() => new Map(courthouses?.map((c) => [c.id, c.nombre]) ?? []), [courthouses]);
  const dependenciasList = useMemo(() => {
    if (!courthouses) return ['all'];
    const deps = [...new Set(courthouses.map((c) => c.dependencia).filter(Boolean))].sort();
    return ['all', ...deps];
  }, [courthouses]);

  const approvedSentences = useMemo(() => {
    if (!sentences) return [];
    return sentences
      .filter((s) => s.status === 'approved')
      .sort((a, b) => getSubmissionDate(b).getTime() - getSubmissionDate(a).getTime());
  }, [sentences]);

  const filteredSentences = useMemo(() => {
    if (dependenciaFilter === 'all') return approvedSentences;
    return approvedSentences.filter((s) => {
      const courthouse = courthouses?.find((c) => c.id === s.courthouseId);
      return courthouse?.dependencia === dependenciaFilter;
    });
  }, [approvedSentences, dependenciaFilter, courthouses]);

  const isLoading = isLoadingSentences || isLoadingCourthouses;

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">
          Ranking de Sentencias Arbitrarias
        </h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Registro público de sentencias que han sido declaradas arbitrarias por tribunales superiores.
          Contribución colaborativa de la comunidad de abogados.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
        <Select value={dependenciaFilter} onValueChange={setDependenciaFilter}>
          <SelectTrigger className="w-full sm:w-[280px]">
            <SelectValue placeholder="Filtrar por dependencia" />
          </SelectTrigger>
          <SelectContent>
            {dependenciasList.map((d) => (
              <SelectItem key={d} value={d}>
                {d === 'all' ? 'Todas las dependencias' : d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button asChild>
          <Link href="/sentencias-arbitrarias/nueva">
            <Gavel className="mr-2 h-4 w-4" />
            Cargar sentencia
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i}>
              <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
              <CardContent><Skeleton className="h-20 w-full" /></CardContent>
            </Card>
          ))}
        </div>
      ) : filteredSentences.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <Gavel className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium text-foreground/80">
              {approvedSentences.length === 0
                ? 'Aún no hay sentencias arbitrarias publicadas.'
                : 'No hay sentencias en la dependencia seleccionada.'}
            </p>
            <p className="text-sm mt-2">
              Si tiene un caso verificado, puede{' '}
              <Link href="/sentencias-arbitrarias/nueva" className="underline hover:text-primary">
                cargar una sentencia
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredSentences.map((sentence) => (
            <Card key={sentence.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-headline">
                  {courthouseMap.get(sentence.courthouseId) ?? 'Juzgado'}
                </CardTitle>
                <CardDescription>
                  {sentence.caseDetails.caseName} · Expediente {sentence.caseDetails.caseNumber}/{sentence.caseDetails.caseYear} ·{' '}
                  {format(getSubmissionDate(sentence), "dd 'de' MMMM yyyy", { locale: es })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sentence.summary && (
                  <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3 italic">
                    {sentence.summary}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={sentence.challengedSentenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Sentencia impugnada
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={sentence.rulingSentenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Sentencia revocatoria
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
