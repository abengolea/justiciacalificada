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

export interface RatingCategories {
  eficiencia: number;
  tiempoResolucion: number;
  atencion: number;
  organizacion: number;
  accesibilidad: number;
}

export interface Rating {
  id: string;
  juzgadoId: string;
  usuarioId: string; // Hashed for anonymity
  puntuaciones: RatingCategories;
  comentario: string;
  fechaExperiencia: string; // ISO date string
  fechaCalificacion: string; // ISO date string
}

export const ratingCategories: {
  key: keyof RatingCategories;
  label: string;
}[] = [
  { key: "eficiencia", label: "Eficiencia procesal" },
  { key: "tiempoResolucion", label: "Tiempo de resolución" },
  { key: "atencion", label: "Atención al profesional" },
  { key: "organizacion", label: "Organización administrativa" },
  { key: "accesibilidad", label: "Accesibilidad" },
];

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  matricula: string;
  role: 'admin' | 'user';
}
