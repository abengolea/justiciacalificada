"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  MoreHorizontal,
  Pencil,
  Trash2,
  Copy,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  useCollection,
  useFirebase,
  useMemoFirebase,
  updateDocumentNonBlocking,
  addDocumentNonBlocking,
  deleteDocumentNonBlocking,
} from "@/firebase";
import { collection, doc, serverTimestamp } from "firebase/firestore";
import { Skeleton } from "@/components/ui/skeleton";
import type { Partner } from "@/lib/types";

function generateApiKey(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

function parseCommaList(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function formatCommaList(arr: string[]): string {
  return arr.join(", ");
}

export default function AdminPartnersPage() {
  const { firestore } = useFirebase();
  const partnersQuery = useMemoFirebase(
    () => collection(firestore, "partners"),
    [firestore]
  );
  const { data: partners, isLoading } = useCollection<Partner>(partnersQuery);

  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [partnerToDelete, setPartnerToDelete] = useState<string | null>(null);

  const [formNombre, setFormNombre] = useState("");
  const [formCiudades, setFormCiudades] = useState("");
  const [formDependencias, setFormDependencias] = useState("");
  const [formActivo, setFormActivo] = useState(true);
  const [formApiKey, setFormApiKey] = useState("");

  const resetForm = () => {
    setEditingPartner(null);
    setFormNombre("");
    setFormCiudades("");
    setFormDependencias("");
    setFormActivo(true);
    setFormApiKey("");
  };

  const openCreate = () => {
    resetForm();
    setFormApiKey(generateApiKey());
    setDialogOpen(true);
  };

  const openEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormNombre(partner.nombre);
    setFormCiudades(formatCommaList(partner.ciudadesPermitidas || []));
    setFormDependencias(formatCommaList(partner.dependenciasPermitidas || []));
    setFormActivo(partner.activo ?? true);
    setFormApiKey(partner.apiKey || "");
    setDialogOpen(true);
  };

  const handleRegenerateApiKey = () => {
    setFormApiKey(generateApiKey());
    toast({
      title: "API Key regenerada",
      description: "Copiá la nueva clave antes de guardar.",
    });
  };

  const handleSave = async () => {
    if (!formNombre.trim()) {
      toast({
        title: "Error",
        description: "El nombre es obligatorio.",
        variant: "destructive",
      });
      return;
    }

    const ciudadesPermitidas = parseCommaList(formCiudades);
    const dependenciasPermitidas = parseCommaList(formDependencias);

    const data = {
      nombre: formNombre.trim(),
      apiKey: formApiKey.trim() || generateApiKey(),
      ciudadesPermitidas,
      dependenciasPermitidas,
      activo: formActivo,
      ...(editingPartner ? {} : { createdAt: serverTimestamp() }),
    };

    if (editingPartner) {
      const docRef = doc(firestore, "partners", editingPartner.id);
      updateDocumentNonBlocking(docRef, data);
      toast({
        title: "Partner actualizado",
        description: `${formNombre} ha sido actualizado correctamente.`,
      });
    } else {
      addDocumentNonBlocking(collection(firestore, "partners"), data);
      toast({
        title: "Partner creado",
        description: `${formNombre} ha sido creado correctamente.`,
      });
    }

    setDialogOpen(false);
    resetForm();
  };

  const handleCopyApiKey = (apiKey: string) => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "API Key copiada",
      description: "La clave ha sido copiada al portapapeles.",
    });
  };

  const handleDeleteRequest = (id: string) => {
    setPartnerToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = () => {
    if (!partnerToDelete) return;
    const docRef = doc(firestore, "partners", partnerToDelete);
    deleteDocumentNonBlocking(docRef);
    toast({
      title: "Partner eliminado",
      description: "El partner ha sido eliminado correctamente.",
    });
    setShowDeleteConfirm(false);
    setPartnerToDelete(null);
  };

  const embedUrl = (partner: Partner) => {
    const params = new URLSearchParams();
    const ciudad = partner.ciudadesPermitidas?.[0];
    const dep = partner.dependenciasPermitidas?.[0];
    if (ciudad) params.set("ciudad", ciudad);
    if (dep) params.set("dependencia", dep);
    const q = params.toString();
    return `${typeof window !== "undefined" ? window.location.origin : ""}/embed${q ? `?${q}` : ""}`;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Partners / Embed</h2>
          <p className="text-muted-foreground text-sm mt-1">
            Gestioná los clientes que pueden embeber el widget en su web (Colegios de Abogados, etc.)
          </p>
        </div>
        <Button onClick={openCreate}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nuevo Partner
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Ciudades</TableHead>
              <TableHead>Dependencias</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <>
                {[...Array(3)].map((_, i) => (
                  <TableRow key={i}>
                    <TableCell colSpan={5}>
                      <Skeleton className="h-8 w-full" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {partners &&
              partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="font-medium">{partner.nombre}</TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">
                    {(partner.ciudadesPermitidas || []).length > 0
                      ? formatCommaList(partner.ciudadesPermitidas)
                      : "—"}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">
                    {(partner.dependenciasPermitidas || []).length > 0
                      ? formatCommaList(partner.dependenciasPermitidas)
                      : "—"}
                  </TableCell>
                  <TableCell>
                    <Badge variant={partner.activo ? "default" : "secondary"}>
                      {partner.activo ? "Activo" : "Inactivo"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menú</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onSelect={() => handleCopyApiKey(partner.apiKey)}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Copiar API Key
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a
                            href={embedUrl(partner)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver embed
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={() => openEdit(partner)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                          onSelect={() => handleDeleteRequest(partner.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading && (!partners || partners.length === 0) && (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24">
                  No hay partners. Creá uno para empezar.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingPartner ? "Editar Partner" : "Nuevo Partner"}
            </DialogTitle>
            <DialogDescription>
              {editingPartner
                ? "Modificá los datos del partner."
                : "Agregá un nuevo cliente que puede embeber el widget."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                placeholder="Ej: Colegio de Abogados de San Nicolás"
                value={formNombre}
                onChange={(e) => setFormNombre(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ciudades">Ciudades permitidas</Label>
              <Input
                id="ciudades"
                placeholder="San Nicolás, Rosario, ..." 
                value={formCiudades}
                onChange={(e) => setFormCiudades(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Separadas por coma. Vacío = todas.
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dependencias">Dependencias permitidas</Label>
              <Input
                id="dependencias"
                placeholder="Buenos Aires, Santa Fe, ..."
                value={formDependencias}
                onChange={(e) => setFormDependencias(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Separadas por coma. Vacío = todas.
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apiKey">API Key</Label>
              <div className="flex gap-2">
                <Input
                  id="apiKey"
                  readOnly
                  value={formApiKey}
                  className="font-mono text-sm"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleRegenerateApiKey}
                  title="Regenerar"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleCopyApiKey(formApiKey)}
                  title="Copiar"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                id="activo"
                checked={formActivo}
                onCheckedChange={setFormActivo}
              />
              <Label htmlFor="activo">Activo</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar partner?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El partner ya no podrá usar la API.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPartnerToDelete(null)}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
