import type { Dependencia, Courthouse } from "./types";

export const mockDependencias: Dependencia[] = [
    { id: 1, nombre: 'Buenos Aires' },
    { id: 2, nombre: 'Catamarca' },
    { id: 3, nombre: 'Chaco' },
    { id: 4, nombre: 'Chubut' },
    { id: 5, nombre: 'Ciudad Autónoma de Buenos Aires' },
    { id: 6, nombre: 'Corrientes' },
    { id: 7, nombre: 'Córdoba' },
    { id: 8, nombre: 'Entre Ríos' },
    { id: 9, nombre: 'Formosa' },
    { id: 10, nombre: 'Jujuy' },
    { id: 11, nombre: 'La Pampa' },
    { id: 12, nombre: 'La Rioja' },
    { id: 13, nombre: 'Mendoza' },
    { id: 14, nombre: 'Misiones' },
    { id: 15, nombre: 'Neuquén' },
    { id: 16, nombre: 'Río Negro' },
    { id: 17, nombre: 'Salta' },
    { id: 18, nombre: 'San Juan' },
    { id: 19, nombre: 'San Luis' },
    { id: 20, nombre: 'Santa Cruz' },
    { id: 21, nombre: 'Santa Fe' },
    { id: 22, nombre: 'Santiago del Estero' },
    { id: 23, nombre: 'Tierra del Fuego' },
    { id: 24, nombre: 'Tucumán' },
    { id: 25, nombre: 'Justicia Federal' },
    { id: 26, nombre: 'Justicia Nacional' },
];

export const mockCourthouses: Omit<Courthouse, 'id'>[] = [
  {
    nombre: "Juzgado Civil y Comercial N°1",
    dependencia: "Buenos Aires",
    ciudad: "La Plata",
    fuero: "Civil y Comercial",
    instancia: "Primera Instancia",
    direccion: "Calle 13 e/ 47 y 48",
    telefono: "0221-410-4400"
  },
  {
    nombre: "Juzgado de Familia N°5",
    dependencia: "Buenos Aires",
    ciudad: "San Isidro",
    fuero: "Familia",
    instancia: "Primera Instancia",
    direccion: "Av. Centenario 1500",
    telefono: "011-4743-5555"
  },
  {
    nombre: "Cámara de Apelación en lo Contencioso Administrativo",
    dependencia: "Ciudad Autónoma de Buenos Aires",
    ciudad: "CABA",
    fuero: "Contencioso Administrativo",
    instancia: "Cámara de Apelación",
    direccion: "Cerrito 536",
    telefono: "011-4371-8011"
  },
  {
    nombre: "Tribunal de Trabajo N°2",
    dependencia: "Córdoba",
    ciudad: "Córdoba",
    fuero: "Laboral",
    instancia: "Tribunal de Instancia Única",
    direccion: "Arturo M. Bas 244",
    telefono: "0351-423-9988"
  },
  {
    nombre: "Juzgado Federal N°1",
    dependencia: "Justicia Federal",
    ciudad: "Rosario",
    fuero: "Federal",
    instancia: "Juzgado Federal de Primera Instancia",
    direccion: "Entre Ríos 435",
    telefono: "0341-449-3322"
  },
  {
    nombre: "Juzgado Nacional en lo Criminal de Instrucción N°10",
    dependencia: "Justicia Nacional",
    ciudad: "CABA",
    fuero: "Penal",
    instancia: "Primera Instancia",
    direccion: "Talcahuano 550",
    telefono: "011-4370-4500"
  }
];
