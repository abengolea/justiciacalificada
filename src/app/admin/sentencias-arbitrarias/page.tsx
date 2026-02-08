'use client';

import { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Trash2, X, ExternalLink, FileText } from 'lucide-react';
import { ArbitrarySentence, Courthouse, Lawyer } from '@/lib/types';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useCollection, useFirebase, useMemoFirebase, updateDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { collection, collectionGroup, doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Timestamp } from 'firebase/firestore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminArbitrarySentencesPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();

  const sentencesQuery = useMemoFirebase(() => collectionGroup(firestore, 'arbitrary_sentences'), [firestore]);
  const { data: sentences, isLoading: isLoadingSentences } = useCollection<ArbitrarySentence>(sentencesQuery);

  const courthousesQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
  const { data: courthouses, isLoading: isLoadingCourthouses } = useCollection<Courthouse>(courthousesQuery);

  const lawyersQuery = useMemoFirebase(() => collection(firestore, 'lawyers'), [firestore]);
  const { data: lawyers, isLoading: isLoadingLawyers } = useCollection<Lawyer>(lawyersQuery);

  const courthouseMap = useMemo(() => new Map(courthouses?.map(c => [c.id, c.nombre])), [courthouses]);
  const lawyerMap = useMemo(() => new Map(lawyers?.map(l => [l.id, l])), [lawyers]);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [sentenceToDelete, setSentenceToDelete] = useState<ArbitrarySentence | null>(null);

  const isLoading = isLoadingSentences || isLoadingCourthouses || isLoadingLawyers;

  const sortedSentences = useMemo(() => {
    if (!sentences) return { pending: [], approved: [], rejected: [] };
    return sentences.reduce((acc, sentence) => {
        acc[sentence.status].push(sentence);
        return acc;
    }, { pending: [] as ArbitrarySentence[], approved: [] as ArbitrarySentence[], rejected: [] as ArbitrarySentence[] });
  }, [sentences]);

  const handleUpdateStatus = (sentence: ArbitrarySentence, status: 'approved' | 'rejected') => {
    // Document path is /courthouses/{courthouseId}/arbitrary_sentences/{sentenceId}
    const sentenceDocRef = doc(firestore, 'courthouses', sentence.courthouseId, 'arbitrary_sentences', sentence.id);
    updateDocumentNonBlocking(sentenceDocRef, { status });

    toast({
      title: 'Sentencia actualizada',
      description: `La sentencia ha sido ${status === 'approved' ? 'aprobada' : 'rechazada'}.`,
    });
  };

  const handleDeleteRequest = (sentence: ArbitrarySentence) => {
    setSentenceToDelete(sentence);
    setShowDeleteConfirm(true);
  };

  const handleDelete = () => {
    if (!sentenceToDelete) return;
    const sentenceDocRef = doc(firestore, 'courthouses', sentenceToDelete.courthouseId, 'arbitrary_sentences', sentenceToDelete.id);
    deleteDocumentNonBlocking(sentenceDocRef);

    toast({
      title: 'Sentencia eliminada',
      description: 'La sentencia ha sido eliminada permanentemente.',
    });
    setShowDeleteConfirm(false);
    setSentenceToDelete(null);
  };

  const getCourthouseName = (id: string) => courthouseMap.get(id) ?? 'Juzgado no encontrado';
  const getUserName = (id: string) => {
      const lawyer = lawyerMap.get(id);
      return lawyer ? `${lawyer.nombre} ${lawyer.apellido}` : 'Usuario desconocido';
  };
  
  const getSubmissionDate = (sentence: ArbitrarySentence) => {
      if (!sentence.submissionDate) return new Date();
      if (sentence.submissionDate instanceof Timestamp) {
        return sentence.submissionDate.toDate();
    }
    return new Date(sentence.submissionDate);
  }

  const statusBadgeVariant = {
      pending: 'secondary',
      approved: 'default',
      rejected: 'destructive'
  } as const;

  const renderSentenceCard = (sentence: ArbitrarySentence) => (
    <Card key={sentence.id} className={sentence.status === 'pending' ? 'border-primary' : ''}>
      <CardHeader>
          <div className="flex justify-between items-start">
              <div>
                  <CardTitle className="text-lg">{getCourthouseName(sentence.courthouseId)}</CardTitle>
                  <CardDescription>
                      Enviado por: {getUserName(sentence.lawyerId)} -{' '}
                      {format(getSubmissionDate(sentence), "dd 'de' MMMM, yyyy", { locale: es })}
                  </CardDescription>
              </div>
              <Badge variant={statusBadgeVariant[sentence.status]}>
                  {sentence.status === 'pending' && 'Pendiente'}
                  {sentence.status === 'approved' && 'Aprobada'}
                  {sentence.status === 'rejected' && 'Rechazada'}
              </Badge>
          </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold">Detalles del Caso</h4>
          <p className="text-sm text-muted-foreground">
            {sentence.caseDetails.caseName} <br/>
            Expediente: {sentence.caseDetails.caseNumber} | Año: {sentence.caseDetails.caseYear}
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="outline" size="sm">
            <a href={sentence.challengedSentenceUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Sentencia Impugnada <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={sentence.rulingSentenceUrl} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Sentencia Revocatoria <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {sentence.status === 'pending' && (
            <>
              <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(sentence, 'approved')} className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700">
                  <Check className="mr-2 h-4 w-4" /> Aprobar
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(sentence, 'rejected')} className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700">
                  <X className="mr-2 h-4 w-4" /> Rechazar
              </Button>
            </>
        )}
        <Button variant="destructive" size="sm" onClick={() => handleDeleteRequest(sentence)}>
            <Trash2 className="mr-2 h-4 w-4" /> Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
  
  const renderTabContent = (data: ArbitrarySentence[], tabName: string) => (
      <div className="space-y-4">
        {isLoading && [...Array(3)].map((_, i) => (
            <Card key={i}>
                <CardHeader><Skeleton className="h-6 w-3/4" /></CardHeader>
                <CardContent><Skeleton className="h-10 w-full" /></CardContent>
                <CardFooter><Skeleton className="h-8 w-24 ml-auto" /></CardFooter>
            </Card>
        ))}
        {!isLoading && data.length > 0 && data.map(renderSentenceCard)}
        {!isLoading && data.length === 0 && (
            <p className="text-muted-foreground text-center py-10">No hay sentencias {tabName}.</p>
        )}
      </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Moderar Sentencias Arbitrarias</h2>
      </div>
      <Tabs defaultValue="pending">
        <TabsList className="mb-4">
            <TabsTrigger value="pending">Pendientes ({sortedSentences.pending.length})</TabsTrigger>
            <TabsTrigger value="approved">Aprobadas ({sortedSentences.approved.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rechazadas ({sortedSentences.rejected.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
            {renderTabContent(sortedSentences.pending, 'pendientes')}
        </TabsContent>
        <TabsContent value="approved">
            {renderTabContent(sortedSentences.approved, 'aprobadas')}
        </TabsContent>
        <TabsContent value="rejected">
            {renderTabContent(sortedSentences.rejected, 'rechazadas')}
        </TabsContent>
      </Tabs>
      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. Esto eliminará permanentemente la carga de esta sentencia.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setSentenceToDelete(null)}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
