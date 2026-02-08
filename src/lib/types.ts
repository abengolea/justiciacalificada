

export interface Courthouse {
  id: string;
  nombre: string;
  dependencia: string;
  ciudad: string;
  fuero: string;
  instancia: string;
  direccion: string;
  telefono: string;
}

export interface Dependencia {
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
  courthouseId: string;
  lawyerId: string;
  puntuaciones: RatingCategories;
  comentario: string;
  fechaExperiencia: string; // ISO date string
  fechaCalificacion: any; // Can be a server timestamp
  status: 'pending' | 'approved' | 'rejected';
}

export const ratingCategories: {
  key: keyof RatingCategories;
  label: string;
  weight: number;
}[] = [
    { key: "calidadResoluciones", label: "Calidad/fundamentación de sentencias/resoluciones", weight: 4 },
    { key: "rapidezResoluciones", label: "Rapidez de sentencias/resoluciones", weight: 3 },
    { key: "rapidezDespacho", label: "Rapidez despacho diario", weight: 3 },
    { key: "atencionMesaEntradas", label: "Atención de mesa de entradas", weight: 2 },
    { key: "tratoProfesional", label: "Trato al profesional", weight: 2 },
    { key: "puntualidadAudiencias", label: "Puntualidad en audiencias", weight: 2 },
    { key: "ordenGeneral", label: "Orden general", weight: 1 },
    { key: "tecnologia", label: "Tecnología", weight: 1 },
    { key: "practicidad", label: "Practicidad", weight: 1 },
    { key: "capacitacionPersonal", label: "Capacitación del personal", weight: 1 },
];

export interface Lawyer {
  id: string; // This will be the Firestore document ID (same as UID)
  uid: string;
  nombre: string;
  apellido: string;
  email: string;
  provincia?: string;
  ciudad?: string;
  matricula: string;
  fechaMatriculacion: string; // ISO date string
  credencialUrl: string;
  role: 'admin' | 'user';
  status: 'pending' | 'approved' | 'rejected';
  registrationDate: any; // Can be a server timestamp
}

export interface ArbitrarySentence {
  id: string;
  lawyerId: string;
  courthouseId: string;
  caseDetails: {
      caseName: string;
      caseNumber: string;
      caseYear: number;
  };
  challengedSentenceUrl: string;
  rulingSentenceUrl: string;
  summary?: string;
  submissionDate: any; // Timestamp
  status: 'pending' | 'approved' | 'rejected';
}

    