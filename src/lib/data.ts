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
  },
  {
    nombre: "Juzgado de Garantías N° 3",
    dependencia: "Buenos Aires",
    ciudad: "Lomas de Zamora",
    fuero: "Penal",
    instancia: "Primera Instancia",
    direccion: "Laprida 650",
    telefono: "011-4244-1234"
  },
  {
    nombre: "Tribunal Oral en lo Criminal N° 15",
    dependencia: "Ciudad Autónoma de Buenos Aires",
    ciudad: "CABA",
    fuero: "Penal",
    instancia: "Tribunal Oral",
    direccion: "Paraguay 1536",
    telefono: "011-4813-5566"
  },
  {
    nombre: "Juzgado de Primera Instancia en lo Civil y Comercial N° 7",
    dependencia: "Santa Fe",
    ciudad: "Rosario",
    fuero: "Civil y Comercial",
    instancia: "Primera Instancia",
    direccion: "Balcarce 1651",
    telefono: "0341-472-1700"
  },
  {
    nombre: "Cámara de Apelaciones en lo Civil y Comercial - Sala II",
    dependencia: "Córdoba",
    ciudad: "Córdoba",
    fuero: "Civil y Comercial",
    instancia: "Cámara de Apelación",
    direccion: "Duarte Quirós 550",
    telefono: "0351-448-1000"
  },
  {
    nombre: "Juzgado de Paz de San Miguel del Monte",
    dependencia: "Buenos Aires",
    ciudad: "San Miguel del Monte",
    fuero: "Paz",
    instancia: "Juzgado de Paz",
    direccion: "Rivadavia 450",
    telefono: "02271-42-0545"
  },
  {
    nombre: "Juzgado Federal de Salta N° 2",
    dependencia: "Justicia Federal",
    ciudad: "Salta",
    fuero: "Federal",
    instancia: "Juzgado Federal de Primera Instancia",
    direccion: "España 394",
    telefono: "0387-431-7777"
  },
  {
    nombre: "Tribunal del Trabajo N° 1 de Avellaneda",
    dependencia: "Buenos Aires",
    ciudad: "Avellaneda",
    fuero: "Laboral",
    instancia: "Tribunal de Instancia Única",
    direccion: "Av. Mitre 541",
    telefono: "011-4201-9876"
  },
  {
    nombre: "Juzgado Nacional de Primera Instancia del Trabajo N° 80",
    dependencia: "Justicia Nacional",
    ciudad: "CABA",
    fuero: "Laboral",
    instancia: "Primera Instancia",
    direccion: "Lavalle 1268",
    telefono: "011-4379-1500"
  },
  {
    nombre: "Juzgado de Menores N° 1",
    dependencia: "Mendoza",
    ciudad: "Mendoza",
    fuero: "Menores",
    instancia: "Primera Instancia",
    direccion: "San Martín 322",
    telefono: "0261-449-3300"
  },
  {
    nombre: "Cámara Federal de Apelaciones de La Plata - Sala I",
    dependencia: "Justicia Federal",
    ciudad: "La Plata",
    fuero: "Federal",
    instancia: "Cámara de Apelación",
    direccion: "Calle 8 N° 925",
    telefono: "0221-425-9001"
  },
  {
    nombre: "Juzgado de Primera Instancia en lo Penal Económico N° 2",
    dependencia: "Justicia Nacional",
    ciudad: "CABA",
    fuero: "Penal Económico",
    instancia: "Primera Instancia",
    direccion: "Av. de los Inmigrantes 1950",
    telefono: "011-5167-5000"
  },
    {
    nombre: "Juzgado de Familia N° 1 de Morón",
    dependencia: "Buenos Aires",
    ciudad: "Morón",
    fuero: "Familia",
    instancia: "Primera Instancia",
    direccion: "Almirante Brown 955",
    telefono: "011-4629-1051"
  },
  {
    nombre: "Cámara Nacional de Apelaciones en lo Comercial - Sala A",
    dependencia: "Justicia Nacional",
    ciudad: "CABA",
    fuero: "Comercial",
    instancia: "Cámara de Apelación",
    direccion: "Diagonal Roque Sáenz Peña 1211",
    telefono: "011-4379-1100"
  },
  {
    nombre: "Juzgado en lo Civil y Comercial N° 14 de Mar del Plata",
    dependencia: "Buenos Aires",
    ciudad: "Mar del Plata",
    fuero: "Civil y Comercial",
    instancia: "Primera Instancia",
    direccion: "Almirante Brown 2046",
    telefono: "0223-495-1200"
  },
  {
    nombre: "Juzgado Federal de San Juan",
    dependencia: "Justicia Federal",
    ciudad: "San Juan",
    fuero: "Federal",
    instancia: "Juzgado Federal de Primera Instancia",
    direccion: "Entre Ríos 281 Sur",
    telefono: "0264-422-5588"
  },
  {
    nombre: "Tribunal Fiscal de la Nación",
    dependencia: "Justicia Nacional",
    ciudad: "CABA",
    fuero: "Fiscal",
    instancia: "Tribunal Fiscal",
    direccion: "Alsina 970",
    telefono: "011-4343-4151"
  },
  {
    nombre: "Juzgado de Ejecución Penal N° 1 de San Isidro",
    dependencia: "Buenos Aires",
    ciudad: "San Isidro",
    fuero: "Ejecución Penal",
    instancia: "Primera Instancia",
    direccion: "Ituzaingó 340",
    telefono: "011-4747-1122"
  },
  {
    nombre: "Cámara Federal de Apelaciones de Tucumán",
    dependencia: "Justicia Federal",
    ciudad: "San Miguel de Tucumán",
    fuero: "Federal",
    instancia: "Cámara de Apelación",
    direccion: "Pasaje Vélez Sarsfield 450",
    telefono: "0381-431-1044"
  },
  {
    nombre: "Juzgado de Primera Instancia de Distrito en lo Laboral N° 5 de Santa Fe",
    dependencia: "Santa Fe",
    ciudad: "Santa Fe",
    fuero: "Laboral",
    instancia: "Primera Instancia",
    direccion: "3 de Febrero 2761",
    telefono: "0342-457-2700"
  },
  {
    nombre: "Cámara de Apelación y Garantías en lo Penal de Bahía Blanca",
    dependencia: "Buenos Aires",
    ciudad: "Bahía Blanca",
    fuero: "Penal",
    instancia: "Cámara de Apelación",
    direccion: "Estomba 34",
    telefono: "0291-455-5011"
  }
];
