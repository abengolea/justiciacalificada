import type { Courthouse } from './types';

// Omitimos 'id' porque Firestore lo generará automáticamente.
export const juzgadosDePrueba: Omit<Courthouse, 'id'>[] = [
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil y Comercial Nº 1",
    "dependencia": "Buenos Aires",
    "ciudad": "La Plata",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Calle 13 e/ 47 y 48",
    "telefono": "0221 410-4400"
  },
  {
    "nombre": "Tribunal de Trabajo Nº 2",
    "dependencia": "Buenos Aires",
    "ciudad": "San Isidro",
    "fuero": "Laboral",
    "instancia": "Tribunal de Instancia Única",
    "direccion": "Ituzaingó 340",
    "telefono": "011 4747-1954"
  },
  {
    "nombre": "Cámara de Apelación en lo Civil y Comercial - Sala I",
    "dependencia": "Buenos Aires",
    "ciudad": "Mar del Plata",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "Almirante Brown 2046",
    "telefono": "0223 495-7111"
  },
  {
    "nombre": "Juzgado de Familia Nº 5",
    "dependencia": "Buenos Aires",
    "ciudad": "Lomas de Zamora",
    "fuero": "Familia",
    "instancia": "Primera Instancia",
    "direccion": "Camino Presidente Perón 7000",
    "telefono": "011 4282-7193"
  },
  {
    "nombre": "Juzgado en lo Contencioso Administrativo Nº 1",
    "dependencia": "Buenos Aires",
    "ciudad": "La Plata",
    "fuero": "Contencioso Administrativo",
    "instancia": "Primera Instancia",
    "direccion": "Calle 11 N° 969",
    "telefono": "0221 427-4180"
  },
  {
    "nombre": "Juzgado Civil y Comercial Nº 1",
    "dependencia": "Catamarca",
    "ciudad": "San Fernando del Valle de Catamarca",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "República 635",
    "telefono": "0383 443-7601"
  },
  {
    "nombre": "Cámara de Apelaciones en lo Civil, Comercial, de Minas y del Trabajo",
    "dependencia": "Catamarca",
    "ciudad": "San Fernando del Valle de Catamarca",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "San Martín 392",
    "telefono": "0383 443-7590"
  },
  {
    "nombre": "Juzgado Civil y Comercial Nº 6",
    "dependencia": "Chaco",
    "ciudad": "Resistencia",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "López y Planes 555",
    "telefono": "0362 445-3856"
  },
  {
    "nombre": "Cámara de Apelaciones en lo Civil y Comercial - Sala I",
    "dependencia": "Chaco",
    "ciudad": "Resistencia",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "Juan B. Justo 42",
    "telefono": "0362 445-3882"
  },
  {
    "nombre": "Juzgado Laboral Nº 1",
    "dependencia": "Chaco",
    "ciudad": "Presidencia Roque Sáenz Peña",
    "fuero": "Laboral",
    "instancia": "Primera Instancia",
    "direccion": "Belgrano 445",
    "telefono": "0364 442-1269"
  },
  {
    "nombre": "Juzgado Letrado de Primera Instancia en lo Civil, Comercial, Laboral, Rural y de Minería Nº 1",
    "dependencia": "Chubut",
    "ciudad": "Rawson",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "9 de Julio 155",
    "telefono": "0280 448-2615"
  },
  {
    "nombre": "Cámara de Apelaciones de Trelew - Sala Civil",
    "dependencia": "Chubut",
    "ciudad": "Trelew",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "9 de Julio 490",
    "telefono": "0280 442-7049"
  },
  {
    "nombre": "Juzgado Nacional en lo Civil Nº 25",
    "dependencia": "Ciudad Autónoma de Buenos Aires",
    "ciudad": "CABA",
    "fuero": "Civil",
    "instancia": "Nacional",
    "direccion": "Talcahuano 550",
    "telefono": "011 4371-8011"
  },
  {
    "nombre": "Juzgado Nacional en lo Comercial Nº 1",
    "dependencia": "Ciudad Autónoma de Buenos Aires",
    "ciudad": "CABA",
    "fuero": "Comercial",
    "instancia": "Nacional",
    "direccion": "Roque Sáenz Peña 1211",
    "telefono": "011 4379-1500"
  },
  {
    "nombre": "Cámara Nacional de Apelaciones del Trabajo - Sala V",
    "dependencia": "Ciudad Autónoma de Buenos Aires",
    "ciudad": "CABA",
    "fuero": "Laboral",
    "instancia": "Cámara Nacional de Apelaciones",
    "direccion": "Lavalle 1554",
    "telefono": "011 4124-5700"
  },
  {
    "nombre": "Juzgado Civil y Comercial Nº 3",
    "dependencia": "Corrientes",
    "ciudad": "Corrientes",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "9 de Julio 1099",
    "telefono": "0379 447-6800"
  },
  {
    "nombre": "Cámara de Apelaciones en lo Civil y Comercial - Sala I",
    "dependencia": "Corrientes",
    "ciudad": "Corrientes",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "9 de Julio 1099",
    "telefono": "0379 447-6800"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil y Comercial de 10ª Nominación",
    "dependencia": "Córdoba",
    "ciudad": "Córdoba",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Arturo M. Bas 152",
    "telefono": "0351 448-1000"
  },
  {
    "nombre": "Cámara 5a de Apelaciones en lo Civil y Comercial",
    "dependencia": "Córdoba",
    "ciudad": "Córdoba",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "Arturo M. Bas 152",
    "telefono": "0351 448-1000"
  },
  {
    "nombre": "Juzgado de Conciliación y Trabajo de 3ª Nominación",
    "dependencia": "Córdoba",
    "ciudad": "Río Cuarto",
    "fuero": "Laboral",
    "instancia": "Primera Instancia",
    "direccion": "Alvear 747",
    "telefono": "0358 467-3100"
  },
  {
    "nombre": "Juzgado Civil y Comercial Nº 1",
    "dependencia": "Entre Ríos",
    "ciudad": "Paraná",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Laprida 251",
    "telefono": "0343 420-9400"
  },
  {
    "nombre": "Cámara de Apelaciones - Sala Civil y Comercial",
    "dependencia": "Entre Ríos",
    "ciudad": "Concordia",
    "fuero": "Civil y Comercial",
    "instancia": "Cámara de Apelación",
    "direccion": "Mitre 265",
    "telefono": "0345 421-2555"
  },
  {
    "nombre": "Juzgado de Instrucción y Correccional Nº 1",
    "dependencia": "Formosa",
    "ciudad": "Formosa",
    "fuero": "Penal",
    "instancia": "Primera Instancia",
    "direccion": "San Martín 641",
    "telefono": "0370 442-6323"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil y Comercial Nº 1",
    "dependencia": "Jujuy",
    "ciudad": "San Salvador de Jujuy",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Argañaraz 330",
    "telefono": "0388 423-1888"
  },
  {
    "nombre": "Tribunal del Trabajo - Sala I",
    "dependencia": "Jujuy",
    "ciudad": "San Salvador de Jujuy",
    "fuero": "Laboral",
    "instancia": "Tribunal de Instancia Única",
    "direccion": "Independencia 774",
    "telefono": "0388 422-3999"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil, Comercial, Laboral y de Minería Nº 1",
    "dependencia": "La Pampa",
    "ciudad": "Santa Rosa",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Av. Luro 350",
    "telefono": "02954 45-1800"
  },
  {
    "nombre": "Juzgado Civil, Comercial y de Minas Nº 1",
    "dependencia": "La Rioja",
    "ciudad": "La Rioja",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Joaquín V. González 77",
    "telefono": "0380 445-3800"
  },
  {
    "nombre": "Segundo Juzgado Civil, Comercial y Minas",
    "dependencia": "Mendoza",
    "ciudad": "Mendoza",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Av. España 480",
    "telefono": "0261 449-3300"
  },
  {
    "nombre": "Primera Cámara del Trabajo",
    "dependencia": "Mendoza",
    "ciudad": "Mendoza",
    "fuero": "Laboral",
    "instancia": "Cámara de Apelación",
    "direccion": "San Martín 322",
    "telefono": "0261 449-5400"
  },
  {
    "nombre": "Juzgado Civil y Comercial Nº 1",
    "dependencia": "Misiones",
    "ciudad": "Posadas",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Santa Fe 1630",
    "telefono": "0376 444-6500"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil, Comercial y de Minería Nº 1",
    "dependencia": "Neuquén",
    "ciudad": "Neuquén",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Alberdi 52",
    "telefono": "0299 525-8000"
  },
  {
    "nombre": "Juzgado Civil, Comercial y de Minería Nº 1",
    "dependencia": "Río Negro",
    "ciudad": "Viedma",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "25 de Mayo 567",
    "telefono": "02920 44-1000"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil y Comercial 1ª Nominación",
    "dependencia": "Salta",
    "ciudad": "Salta",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Av. Bolivia 4671",
    "telefono": "0387 425-8000"
  },
  {
    "nombre": "Juzgado Civil, Comercial y Minería 1° Nominación",
    "dependencia": "San Juan",
    "ciudad": "San Juan",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Rivadavia 473 (Este)",
    "telefono": "0264 422-2611"
  },
  {
    "nombre": "Juzgado Civil, Comercial y Ambiental Nº 1",
    "dependencia": "San Luis",
    "ciudad": "San Luis",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Rivadavia 340",
    "telefono": "0266 445-2000"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Civil, Comercial, Laboral y de Minería Nº 1",
    "dependencia": "Santa Cruz",
    "ciudad": "Río Gallegos",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Av. Kirchner 823",
    "telefono": "02966 42-0498"
  },
  {
    "nombre": "Juzgado de Primera Instancia de Distrito en lo Civil y Comercial de la 1ª Nominación",
    "dependencia": "Santa Fe",
    "ciudad": "Santa Fe",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "San Jerónimo 1551",
    "telefono": "0342 457-2700"
  },
  {
    "nombre": "Juzgado de Primera Instancia en lo Laboral de la 2ª Nominación",
    "dependencia": "Santa Fe",
    "ciudad": "Rosario",
    "fuero": "Laboral",
    "instancia": "Primera Instancia",
    "direccion": "Balcarce 1651",
    "telefono": "0341 472-1700"
  },
  {
    "nombre": "Juzgado en lo Civil y Comercial de 1ª Nominación",
    "dependencia": "Santiago del Estero",
    "ciudad": "Santiago del Estero",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Absalón Rojas 236",
    "telefono": "0385 450-7700"
  },
  {
    "nombre": "Juzgado de Primera Instancia del Distrito Judicial Norte en lo Civil y Comercial Nº 1",
    "dependencia": "Tierra del Fuego",
    "ciudad": "Río Grande",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Pedro Edgardo Greca 2450",
    "telefono": "02964 43-5000"
  },
  {
    "nombre": "Juzgado en lo Civil y Comercial Común de la Iª Nominación",
    "dependencia": "Tucumán",
    "ciudad": "San Miguel de Tucumán",
    "fuero": "Civil y Comercial",
    "instancia": "Primera Instancia",
    "direccion": "Lamadrid 450",
    "telefono": "0381 452-4000"
  },
  {
    "nombre": "Juzgado Federal Nº 1",
    "dependencia": "Justicia Federal",
    "ciudad": "Córdoba",
    "fuero": "Federal",
    "instancia": "Federal",
    "direccion": "Concepción Arenal 678",
    "telefono": "0351 433-4333"
  },
  {
    "nombre": "Cámara Federal de Apelaciones de La Plata - Sala I",
    "dependencia": "Justicia Federal",
    "ciudad": "La Plata",
    "fuero": "Federal",
    "instancia": "Cámara Federal",
    "direccion": "Calle 8 N° 925",
    "telefono": "0221 425-9090"
  },
  {
    "nombre": "Juzgado Nacional en lo Criminal y Correccional Federal Nº 4",
    "dependencia": "Justicia Federal",
    "ciudad": "CABA",
    "fuero": "Penal Económico",
    "instancia": "Federal",
    "direccion": "Comodoro Py 2002",
    "telefono": "011 4014-7400"
  },
  {
    "nombre": "Corte Suprema de Justicia de la Nación",
    "dependencia": "Justicia Nacional",
    "ciudad": "CABA",
    "fuero": "Todos",
    "instancia": "Corte Suprema",
    "direccion": "Talcahuano 550",
    "telefono": "011 4370-4600"
  }
]
