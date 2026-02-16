'use client';

import { useState, useTransition, useMemo } from 'react';
import Link from 'next/link';
import { useCollection, useFirebase, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { Courthouse } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Wand2, Loader2, Save, X, Pencil, AlertTriangle, PlusCircle, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAiAnalysis } from '@/app/actions';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type Correction = {
    courthouseId: string;
    fieldName: string;
    currentValue: string;
    issueDescription: string;
    suggestedValue: string;
};

export default function DataCorrectionPage() {
    const { firestore } = useFirebase();
    const { toast } = useToast();

    const juzgadosQuery = useMemoFirebase(() => collection(firestore, 'juzgados'), [firestore]);
    const { data: juzgados, isLoading: isLoadingJuzgados } = useCollection<Courthouse>(juzgadosQuery);

    const [editingRows, setEditingRows] = useState<Record<string, Partial<Courthouse>>>({});
    const [analysis, setAnalysis] = useState<Correction[] | null>(null);
    const [isAnalyzing, startAnalysisTransition] = useTransition();
    const [showOnlyWithSuggestions, setShowOnlyWithSuggestions] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [filterNombre, setFilterNombre] = useState('');
    const [filterCiudad, setFilterCiudad] = useState('');
    const [filterDependencia, setFilterDependencia] = useState('');
    const [filterFuero, setFilterFuero] = useState('');
    const [filterInstancia, setFilterInstancia] = useState('');

    const analysisMap = useMemo(() => {
        if (!analysis) return new Map();
        const map = new Map<string, Correction[]>();
        analysis.forEach(correction => {
            const existing = map.get(correction.courthouseId) || [];
            map.set(correction.courthouseId, [...existing, correction]);
        });
        return map;
    }, [analysis]);
    
    const filteredJuzgados = useMemo(() => {
        if (!juzgados) return [];
        let list = juzgados;
        if (showOnlyWithSuggestions && analysis && analysis.length > 0) {
            list = list.filter(juzgado => analysisMap.has(juzgado.id));
        }
        const n = filterNombre.trim().toLowerCase();
        const c = filterCiudad.trim().toLowerCase();
        const d = filterDependencia.trim().toLowerCase();
        const f = filterFuero.trim().toLowerCase();
        const i = filterInstancia.trim().toLowerCase();
        if (!n && !c && !d && !f && !i) return list;
        return list.filter(j => {
            if (n && !(j.nombre || '').toLowerCase().includes(n)) return false;
            if (c && !(j.ciudad || '').toLowerCase().includes(c)) return false;
            if (d && !(j.dependencia || '').toLowerCase().includes(d)) return false;
            if (f && !(j.fuero || '').toLowerCase().includes(f)) return false;
            if (i && !(j.instancia || '').toLowerCase().includes(i)) return false;
            return true;
        });
    }, [juzgados, showOnlyWithSuggestions, analysis, analysisMap, filterNombre, filterCiudad, filterDependencia, filterFuero, filterInstancia]);

    const handleAnalyze = () => {
        if (!juzgados || juzgados.length === 0) {
            toast({ title: "No hay datos", description: "No hay juzgados para analizar.", variant: "destructive" });
            return;
        }

        startAnalysisTransition(async () => {
            toast({ title: "Análisis en progreso...", description: "La IA está revisando los datos. Esto puede tardar un momento." });
            const result = await getAiAnalysis(juzgados);
            setAnalysis(result.corrections);
            if (result.corrections.length > 0) {
                toast({ title: "Análisis completado", description: `Se encontraron ${result.corrections.length} posibles problemas.` });
            } else {
                toast({ title: "Análisis completado", description: "No se encontraron problemas evidentes." });
                setShowOnlyWithSuggestions(false);
            }
        });
    };

    const handleEdit = (courthouse: Courthouse) => {
        setEditingRows(prev => ({ ...prev, [courthouse.id]: { ...courthouse } }));
    };

    const handleCancel = (id: string) => {
        setEditingRows(prev => {
            const newState = { ...prev };
            delete newState[id];
            return newState;
        });
    };

    const handleSave = (id: string) => {
        const updatedData = editingRows[id];
        if (!updatedData) return;

        const juzgadoDocRef = doc(firestore, 'juzgados', id);
        updateDocumentNonBlocking(juzgadoDocRef, updatedData);

        toast({ title: "Guardado", description: "Los cambios se han guardado correctamente." });
        handleCancel(id); // Exit editing mode
    };

    const handleFieldChange = (id: string, field: keyof Courthouse, value: string) => {
        setEditingRows(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: value
            }
        }));
    };
    
    const applySuggestion = (correction: Correction) => {
        const { courthouseId, fieldName, suggestedValue } = correction;
        const fieldKey = fieldName as keyof Courthouse;

        // Update the document in Firestore
        const juzgadoDocRef = doc(firestore, 'juzgados', courthouseId);
        updateDocumentNonBlocking(juzgadoDocRef, { [fieldKey]: suggestedValue });

        // If the row is currently being edited, update the input field as well
        if (editingRows[courthouseId]) {
            handleFieldChange(courthouseId, fieldKey, suggestedValue);
        }

        toast({ title: "Sugerencia aplicada", description: `Se actualizó el campo '${fieldName}'.` });

        // Remove the suggestion from the list so it disappears
        setAnalysis(prev => {
            const newAnalysis = prev?.filter(c => !(c.courthouseId === courthouseId && c.fieldName === fieldName)) || null;
            if (newAnalysis?.length === 0) {
                setShowOnlyWithSuggestions(false);
            }
            return newAnalysis;
        });
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-2">
                <h1 className="text-2xl font-bold">Editar Juzgados</h1>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setSearchOpen(true)}>
                        <Search className="mr-2 h-4 w-4" />
                        Buscar juzgados
                    </Button>
                    <Button asChild>
                        <Link href="/admin/juzgados/nuevo">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Crear Juzgado
                        </Link>
                    </Button>
                </div>
            </div>
            <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Buscar juzgados</DialogTitle>
                        <DialogDescription>
                            Filtrar la lista por nombre u otros criterios. Deje en blanco los que no quiera usar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="filter-nombre">Nombre</Label>
                            <Input
                                id="filter-nombre"
                                placeholder="Ej: Primera Instancia..."
                                value={filterNombre}
                                onChange={e => setFilterNombre(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="filter-ciudad">Ciudad</Label>
                            <Input
                                id="filter-ciudad"
                                placeholder="Ej: CABA, Córdoba..."
                                value={filterCiudad}
                                onChange={e => setFilterCiudad(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="filter-dependencia">Dependencia (Provincia)</Label>
                            <Input
                                id="filter-dependencia"
                                placeholder="Ej: Buenos Aires..."
                                value={filterDependencia}
                                onChange={e => setFilterDependencia(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="filter-fuero">Fuero</Label>
                            <Input
                                id="filter-fuero"
                                placeholder="Ej: Civil, Penal..."
                                value={filterFuero}
                                onChange={e => setFilterFuero(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="filter-instancia">Instancia</Label>
                            <Input
                                id="filter-instancia"
                                placeholder="Ej: Primera, Cámara..."
                                value={filterInstancia}
                                onChange={e => setFilterInstancia(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setFilterNombre('');
                                setFilterCiudad('');
                                setFilterDependencia('');
                                setFilterFuero('');
                                setFilterInstancia('');
                            }}
                        >
                            Limpiar filtros
                        </Button>
                        <Button onClick={() => setSearchOpen(false)}>
                            Cerrar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Card id="lista-juzgados">
                <CardHeader>
                    <CardTitle>Lista de Juzgados</CardTitle>
                    {(filterNombre || filterCiudad || filterDependencia || filterFuero || filterInstancia) && (
                        <CardDescription>
                            Mostrando {filteredJuzgados?.length ?? 0} resultado(s) con filtros aplicados.
                        </CardDescription>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="border rounded-lg overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[300px]">Nombre</TableHead>
                                    <TableHead>Ciudad</TableHead>
                                    <TableHead>Dependencia (Provincia)</TableHead>
                                    <TableHead>Fuero</TableHead>
                                    <TableHead>Instancia</TableHead>
                                    <TableHead className="text-right">Acciones</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoadingJuzgados ? (
                                    [...Array(5)].map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell colSpan={6} className="h-12 text-center">
                                                <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    filteredJuzgados?.map(juzgado => {
                                        const isEditing = !!editingRows[juzgado.id];
                                        const editedJuzgado = editingRows[juzgado.id] || juzgado;
                                        const suggestions = analysisMap.get(juzgado.id);

                                        return (
                                            <TableRow key={juzgado.id} className={isEditing ? "bg-accent/50" : ""}>
                                                <TableCell>
                                                    {isEditing ? (
                                                        <Input value={editedJuzgado.nombre || ''} onChange={e => handleFieldChange(juzgado.id, 'nombre', e.target.value)} />
                                                    ) : (
                                                        <span>{juzgado.nombre}</span>
                                                    )}
                                                    {suggestions?.filter(s => s.fieldName === 'nombre').map((s, i) => (
                                                        <SuggestionCard key={`${s.courthouseId}-${s.fieldName}-${i}`} suggestion={s} onApply={applySuggestion} />
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {isEditing ? (
                                                        <Input value={editedJuzgado.ciudad || ''} onChange={e => handleFieldChange(juzgado.id, 'ciudad', e.target.value)} />
                                                    ) : (
                                                        <span>{juzgado.ciudad}</span>
                                                    )}
                                                     {suggestions?.filter(s => s.fieldName === 'ciudad').map((s, i) => (
                                                        <SuggestionCard key={`${s.courthouseId}-${s.fieldName}-${i}`} suggestion={s} onApply={applySuggestion} />
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {isEditing ? (
                                                        <Input value={editedJuzgado.dependencia || ''} onChange={e => handleFieldChange(juzgado.id, 'dependencia', e.target.value)} />
                                                    ) : (
                                                        <span>{juzgado.dependencia}</span>
                                                    )}
                                                     {suggestions?.filter(s => s.fieldName === 'dependencia').map((s, i) => (
                                                        <SuggestionCard key={`${s.courthouseId}-${s.fieldName}-${i}`} suggestion={s} onApply={applySuggestion} />
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {isEditing ? (
                                                        <Input value={editedJuzgado.fuero || ''} onChange={e => handleFieldChange(juzgado.id, 'fuero', e.target.value)} />
                                                    ) : (
                                                        <span>{juzgado.fuero}</span>
                                                    )}
                                                     {suggestions?.filter(s => s.fieldName === 'fuero').map((s, i) => (
                                                        <SuggestionCard key={`${s.courthouseId}-${s.fieldName}-${i}`} suggestion={s} onApply={applySuggestion} />
                                                    ))}
                                                </TableCell>
                                                <TableCell>
                                                    {isEditing ? (
                                                        <Input value={editedJuzgado.instancia || ''} onChange={e => handleFieldChange(juzgado.id, 'instancia', e.target.value)} />
                                                    ) : (
                                                        <span>{juzgado.instancia}</span>
                                                    )}
                                                    {suggestions?.filter(s => s.fieldName === 'instancia').map((s, i) => (
                                                        <SuggestionCard key={`${s.courthouseId}-${s.fieldName}-${i}`} suggestion={s} onApply={applySuggestion} />
                                                    ))}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {isEditing ? (
                                                        <div className="flex gap-2 justify-end">
                                                            <Button size="icon" variant="ghost" onClick={() => handleSave(juzgado.id)}><Save className="h-4 w-4 text-green-600" /></Button>
                                                            <Button size="icon" variant="ghost" onClick={() => handleCancel(juzgado.id)}><X className="h-4 w-4 text-red-600" /></Button>
                                                        </div>
                                                    ) : (
                                                        <Button size="icon" variant="ghost" onClick={() => handleEdit(juzgado)}>
                                                            <Pencil className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                )}
                                {!isLoadingJuzgados && filteredJuzgados?.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={6} className="h-24 text-center">
                                            {showOnlyWithSuggestions ? "No hay juzgados con observaciones." : "No se encontraron juzgados."}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function SuggestionCard({ suggestion, onApply }: { suggestion: Correction; onApply: (suggestion: Correction) => void; }) {
    return (
        <div className="mt-2 p-2 rounded-md bg-yellow-50 border border-yellow-200 text-xs">
            <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
                <div className="flex-grow">
                    <p className="font-semibold text-yellow-800">{suggestion.issueDescription}</p>
                    <p className="text-yellow-700">Sugerencia: <code className="bg-yellow-100 p-0.5 rounded">{suggestion.suggestedValue}</code></p>
                </div>
                <Button size="sm" variant="ghost" className="h-auto px-2 py-1 text-xs text-yellow-800 hover:bg-yellow-100" onClick={() => onApply(suggestion)}>
                    Aplicar
                </Button>
            </div>
        </div>
    )
}
