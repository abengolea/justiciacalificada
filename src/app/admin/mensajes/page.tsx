'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useCollection, useFirebase, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { collection, doc, query, where, orderBy } from 'firebase/firestore';
import { AdminMessage } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  MessageSquare,
  Loader2,
  Check,
  CheckCheck,
  ExternalLink,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TIPO_LABELS: Record<string, string> = {
  not_found: 'No encuentra el juzgado',
  wrong_data: 'Nombre o datos incorrectos',
};

export default function AdminMensajesPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'unread'>('unread');

  const messagesQuery = useMemoFirebase(
    () =>
      query(
        collection(firestore, 'admin_messages'),
        orderBy('createdAt', 'desc')
      ),
    [firestore]
  );
  const { data: messages, isLoading: isLoadingMessages } = useCollection<AdminMessage>(messagesQuery);

  const filteredMessages = useMemo(() => {
    if (!messages) return [];
    if (filter === 'unread') return messages.filter((m) => m.status === 'unread');
    return messages;
  }, [messages, filter]);

  const unreadCount = useMemo(
    () => messages?.filter((m) => m.status === 'unread').length ?? 0,
    [messages]
  );

  const markAsRead = (msg: AdminMessage) => {
    const ref = doc(firestore, 'admin_messages', msg.id);
    updateDocumentNonBlocking(ref, { status: 'read' });
    toast({ title: 'Marcado como leído' });
  };

  const markAsResolved = (msg: AdminMessage) => {
    const ref = doc(firestore, 'admin_messages', msg.id);
    updateDocumentNonBlocking(ref, { status: 'resolved' });
    toast({ title: 'Marcado como resuelto' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-2xl font-bold">Mensajes de reportes</h1>
        <div className="flex gap-2">
          <Button
            variant={filter === 'unread' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('unread')}
          >
            No leídos
            {unreadCount > 0 && (
              <Badge variant={filter === 'unread' ? 'secondary' : 'outline'} className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </Button>
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            Todos
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Reportes de usuarios
          </CardTitle>
          <CardDescription>
            Los usuarios pueden reportar cuando no encuentran un juzgado o detectan datos incorrectos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingMessages ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {filter === 'unread' ? (
                <>
                  <CheckCheck className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No hay mensajes no leídos.</p>
                </>
              ) : (
                <>
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Aún no hay reportes de usuarios.</p>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredMessages.map((msg) => (
                <MessageRow
                  key={msg.id}
                  msg={msg}
                  onMarkRead={markAsRead}
                  onMarkResolved={markAsResolved}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function MessageRow({
  msg,
  onMarkRead,
  onMarkResolved,
}: {
  msg: AdminMessage;
  onMarkRead: (m: AdminMessage) => void;
  onMarkResolved: (m: AdminMessage) => void;
}) {
  const isUnread = msg.status === 'unread';
  const isResolved = msg.status === 'resolved';

  const createdAt = msg.createdAt
    ? typeof msg.createdAt?.toDate === 'function'
      ? msg.createdAt.toDate()
      : new Date(msg.createdAt as unknown as string)
    : null;

  return (
    <div
      className={`
        border rounded-lg p-4 transition-colors
        ${isUnread ? 'bg-primary/5 border-primary/20' : 'bg-muted/30'}
        ${isResolved ? 'opacity-70' : ''}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <Badge variant="outline" className="text-xs">
              {TIPO_LABELS[msg.type] ?? msg.type}
            </Badge>
            {isUnread && (
              <Badge variant="default" className="text-xs">
                Nuevo
              </Badge>
            )}
            {isResolved && (
              <Badge variant="secondary" className="text-xs">
                Resuelto
              </Badge>
            )}
            {createdAt && (
              <span className="text-xs text-muted-foreground">
                {format(createdAt, "d MMM yyyy, HH:mm", { locale: es })}
              </span>
            )}
          </div>
          <p className="text-sm text-foreground whitespace-pre-wrap">{msg.message}</p>
          {msg.courthouseId && (
            <Link
              href={`/admin/correccion`}
              className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
            >
              <ExternalLink className="h-3 w-3" />
              {msg.courthouseName ? `Ir a editar: ${msg.courthouseName}` : 'Ir a editar juzgados'}
            </Link>
          )}
        </div>
        <div className="flex gap-2 shrink-0">
          {isUnread && (
            <Button size="sm" variant="outline" onClick={() => onMarkRead(msg)}>
              <Check className="h-4 w-4 mr-1" />
              Leído
            </Button>
          )}
          {!isResolved && (
            <Button size="sm" variant="ghost" onClick={() => onMarkResolved(msg)}>
              Resolver
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
