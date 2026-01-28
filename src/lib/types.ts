export interface Courthouse {
  id: string;
  nombre: string;
  provincia: string;
  ciudad: string;
  fuero: string;
  instancia: string;
  direccion: string;
  telefono: string;
}

export interface Provincia {
  id: number;
  nombre: string;
}

export interface RatingCategories {
  calidadResoluciones: number;
  rapidezResoluciones: number;
  rapidezDespacho: number;
  atencionMesaEntradas: number;
  tratoProfesional: number;
  puntualidadAudiencias: number;
  ordenGeneral: number;
  tecnologia: number;
  practicidad: number;
  capacitacionPersonal: number;
}

export interface Rating {
  id: string;
  juzgadoId: string;
  usuarioId: string; // Hashed for anonymity
  puntuaciones: RatingCategories;
  comentario: string;
  fechaExperiencia: string; // ISO date string
  fechaCalificacion: string; // ISO date string
  status: 'pending' | 'approved' | 'rejected';
}

export const ratingCategories: {
  key: keyof RatingCategories;
  label: string;
  weight: number;
}[] = [
    { key: "calidadResoluciones", label: "Calidad/fundamentación de sentencias y resoluciones", weight: 4 },
    { key: "rapidezResoluciones", label: "Rapidez de sentencias/resoluciones", weight: 3 },
    { key: "rapidezDespacho", label: "Rapidez despacho diario", weight: 3 },
    { key: "atencionMesaEntradas", label: "Atención en mesa de entradas", weight: 2 },
    { key: "tratoProfesional", label: "Trato al profesional", weight: 2 },
    { key: "puntualidadAudiencias", label: "Puntualidad en audiencias", weight: 2 },
    { key: "ordenGeneral", label: "Orden general", weight: 1 },
    { key: "tecnologia", label: "Tecnología", weight: 1 },
    { key: "practicidad", label: "Practicidad", weight: 1 },
    { key: "capacitacionPersonal", label: "Capacitación del personal", weight: 1 },
];

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  matricula: string;
  role: 'admin' | 'user';
  status: 'pending' | 'approved';
}
