import type { Courthouse, Rating, User, Provincia } from "./types";

export const mockUsers: User[] = [
  {
    id: 'user-admin',
    nombre: 'Admin',
    apellido: 'Principal',
    email: 'abengolea1@gmail.com',
    matricula: 'T0 F0',
    role: 'admin',
    status: 'approved',
  },
  {
    id: 'user-1',
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@example.com',
    matricula: 'T123 F45',
    role: 'user',
    status: 'approved',
  },
  {
    id: 'user-2',
    nombre: 'Maria',
    apellido: 'Gomez',
    email: 'maria.gomez@example.com',
    matricula: 'T987 F65',
    role: 'user',
    status: 'pending',
  },
];

export const mockProvincias: Provincia[] = [
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

export const mockCourthouses: Courthouse[] = [
  {
    id: 'juzgado-0',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-151',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-152',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-153',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-154',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-155',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-156',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-157',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-158',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-159',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-160',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-161',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-162',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-163',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-164',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-165',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-166',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-167',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-168',
    nombre: 'Juzgado Civil y Comercial N° 14',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-169',
    nombre: 'Juzgado Civil y Comercial N° 15',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-170',
    nombre: 'Juzgado Civil y Comercial N° 16',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-171',
    nombre: 'Juzgado Civil y Comercial N° 17',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-172',
    nombre: 'Juzgado Civil y Comercial N° 18',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-173',
    nombre: 'Juzgado Civil y Comercial N° 19',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-174',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-175',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-176',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-177',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-178',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-179',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-180',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-181',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-182',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-183',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-184',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-185',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-186',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-187',
    nombre: 'Juzgado Civil y Comercial N° 14',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-188',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-189',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-190',
    nombre: 'Juzgado Civil y Comercial N° 1 - Olavarría',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-191',
    nombre: 'Juzgado Civil y Comercial N° 2 - Olavarría',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-192',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-193',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-194',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-195',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-196',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-197',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-198',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-199',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-200',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-201',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-202',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-203',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-204',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-205',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-206',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-207',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-208',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-209',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-210',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-211',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-212',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-213',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-214',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-215',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-216',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-217',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-218',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-219',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-220',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-221',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-222',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-223',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-224',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-225',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-226',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-227',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-228',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-229',
    nombre: 'Juzgado Civil y Comercial N° 14',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-230',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-231',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-232',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-233',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-234',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-235',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-236',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-237',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-238',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-239',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-240',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-241',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-242',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-243',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-244',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-245',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-246',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-247',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-248',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-249',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-250',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-251',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-252',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-253',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-254',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-255',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-256',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-257',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-258',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-259',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-260',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-261',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-262',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-263',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-264',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-265',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-266',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-267',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-268',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-269',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-270',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-271',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-272',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-273',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-274',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-275',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-276',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-277',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-278',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-279',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-280',
    nombre: 'Juzgado Civil y Comercial N° 14',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-281',
    nombre: 'Juzgado Civil y Comercial N° 15',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-282',
    nombre: 'Juzgado Civil y Comercial N° 16',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-283',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-284',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-285',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-286',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-287',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-288',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-289',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-290',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-291',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-292',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-293',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-294',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-295',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-296',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-301',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-302',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-303',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-304',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-305',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-306',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-307',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-308',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-309',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-310',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-311',
    nombre: 'UFI N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-312',
    nombre: 'UFI N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-313',
    nombre: 'UFI N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-314',
    nombre: 'UFI N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-315',
    nombre: 'Camara de Apelaciones Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-316',
    nombre: 'Camara de Apelaciones Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-317',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-318',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-319',
    nombre: 'Juzgado de Familia N° 1 - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-320',
    nombre: 'Juzgado de Ejecución N°1 - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-321',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-322',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-323',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-324',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-325',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-327',
    nombre: 'Juzgado de Garantias del Joven N° 1 - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-328',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1 - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-329',
    nombre: 'Tribunal de Trabajo - Azul',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-330',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-331',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-333',
    nombre: 'Juzgado de Paz - Benito Juarez',
    provincia: 'Buenos Aires',
    ciudad: 'Benito Juarez (Est. Juarez)',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-334',
    nombre: 'Cámara de Apelaciones Civil y Comercial n°1 - Bahia Blanca',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-335',
    nombre: 'Cámara de Apelaciones Civil y Comercial n°2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-336',
    nombre: 'Cámara de Apelación y Garantías en lo penal n°1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-337',
    nombre: 'Cámara de Apelación y Garantías en lo Penal n°2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-338',
    nombre: 'Fiscalia General - Bahía Blanca',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-339',
    nombre: 'Defensoría General - Bahía Blanca',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-340',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-341',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-342',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-343',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-344',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-345',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-346',
    nombre: 'Juzgado de Ejecución - Bahia Blanca',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-347',
    nombre: 'Juzgado en lo Correcional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-348',
    nombre: 'Juzgado en lo Correcional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-349',
    nombre: 'Juzgado en lo Correcional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-350',
    nombre: 'Juzgado en lo Correcional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-351',
    nombre: 'Juzgado de Transición N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-352',
    nombre: 'Juzgado de Transición N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-353',
    nombre: 'Tribunal de Menores N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-354',
    nombre: 'Tribunal de Menores N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-355',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-356',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-357',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-358',
    nombre: 'Juzgado de Familia N°1 - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-359',
    nombre: 'Juzgado de Garantías del Joven N° 1 - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-360',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-361',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-362',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-363',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-364',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-365',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-366',
    nombre: 'Juzgado de Ejecución - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-367',
    nombre: 'Juzgado en lo Correcional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-368',
    nombre: 'Juzgado en lo Correcional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-369',
    nombre: 'Juzgado en lo Correcional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-370',
    nombre: 'Juzgado en lo Correcional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-371',
    nombre: 'Fiscalia General - Dolores',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-372',
    nombre: 'Fiscalia General',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-373',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - Junín',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-374',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Junin',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-377',
    nombre: 'Tribunal en lo Criminal N° 1 - Junin',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-378',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-379',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-382',
    nombre: 'Juzgado de Ejecución - Junin',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-383',
    nombre: 'Juzgado en lo Correcional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-384',
    nombre: 'Juzgado en lo Correcional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-385',
    nombre: 'Juzgado en lo Correcional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-386',
    nombre: 'Juzgado de Transición N° 1 - Junin',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-387',
    nombre: 'Tribunal de Menores N° 1 - Junin',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-388',
    nombre: 'Camara de Apelación Civil y Comercial - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-389',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-390',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-391',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-392',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-393',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-394',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-395',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-396',
    nombre: 'Juzgado de Ejecucion Penal - Zárate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-397',
    nombre: 'Juzgado de Garantias N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-398',
    nombre: 'Juzgado de Garantias N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-399',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-400',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-401',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-402',
    nombre: 'Juzgado de Garantias N° 3 - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-403',
    nombre: 'Juzgado de Garantias N° 4 - Zárate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-404',
    nombre: 'Juzgado de Garantías del Joven N° 1 - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-405',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1 - Zarate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-406',
    nombre: 'Tribunal de Trabajo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-407',
    nombre: 'Tribunal de Trabajo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-408',
    nombre: 'Tribunal de Trabajo N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-409',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-410',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-411',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 1 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-412',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 2 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-413',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 3 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-414',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 1 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-415',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 2 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-416',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 3 - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-417',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - La Plata, Quilmes, Lomas de Zamora',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-418',
    nombre: 'Camara de Apelacion y Garantias en lo Penal - La Plata',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-419',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-420',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-421',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-422',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-423',
    nombre: 'Juzgado Civil y Comercial N° 20',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-424',
    nombre: 'Juzgado Civil y Comercial N° 21',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-425',
    nombre: 'Juzgado Civil y Comercial N° 22',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-426',
    nombre: 'Juzgado Civil y Comercial N° 23',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-427',
    nombre: 'Juzgado Civil y Comercial N° 24',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-428',
    nombre: 'Juzgado Civil y Comercial N° 25',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-429',
    nombre: 'Juzgado Civil y Comercial N° 26',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-430',
    nombre: 'Juzgado Civil y Comercial N° 27',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-431',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-432',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-433',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-434',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-435',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-436',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-437',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-438',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-439',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-440',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-441',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-442',
    nombre: 'Juzgado de Familia N° 8',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-443',
    nombre: 'Juzgado de Ejecucion N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-444',
    nombre: 'Juzgado de Ejecucion N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-445',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-446',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-447',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-448',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-449',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-450',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-451',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-452',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-453',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-454',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-455',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-456',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-457',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-458',
    nombre: 'Juzgado de Garantias del Joven N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-459',
    nombre: 'Juzgado de Garantias del Joven N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-460',
    nombre: 'Juzgado de Garantias del Joven N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-461',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-462',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-463',
    nombre: 'Tribunal en lo Criminal',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-488',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 1',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-489',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 2',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-490',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 3',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-491',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 4',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-492',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 5',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-493',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 6',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-494',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 7',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-495',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 8',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-496',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 9',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-497',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 10',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-498',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 11',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-499',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 12',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-500',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 13',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-501',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 14',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-502',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 15',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-503',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 16',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-504',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 17',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-505',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 18',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-506',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 19',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-507',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 20',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-508',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 21',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-509',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 22',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-510',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 23',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-511',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 24',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-512',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 1',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-513',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 2',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-514',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 3',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-515',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 4',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-516',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 5',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-517',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 6',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-518',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 7',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-519',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 8',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-520',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 9',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-521',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 10',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-522',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 11',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-523',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 12',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-524',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 13',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-525',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 14',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-526',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 15',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-527',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 16',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-528',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 17',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-529',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 18',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-530',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 19',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-531',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 20',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-532',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 21',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-533',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 22',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-534',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 23',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-535',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 24',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-536',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 25',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-537',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 26',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-538',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 27',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-539',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 28',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-540',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 29',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-541',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 30',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-542',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 31',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-543',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 1',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-544',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 2',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-545',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 3',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-546',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 1',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-547',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 2',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-548',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 3',
    provincia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-550',
    nombre: 'Camara de Apelaciones Civil y Comercial Sala N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-551',
    nombre: 'Camara de Apelaciones Civil y Comercial Sala N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-552',
    nombre: 'Camara de Apelaciones Civil y Comercial Sala N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-553',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-554',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-555',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-556',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-557',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-558',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 6',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-559',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 7',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-560',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 8',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-561',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 9',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-562',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 10',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-563',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-564',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-565',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-566',
    nombre: 'Tribunal Colegiado de Familia N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-567',
    nombre: 'Tribunal Colegiado de Familia N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-568',
    nombre: 'Camara de Apelacion en lo Laboral - Sala N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-569',
    nombre: 'Camara de Apelacion en lo Laboral - Sala N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-570',
    nombre: 'Juzgado de Primera Instancia en lo Laboral Nominación N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-571',
    nombre: 'Juzgado de Primera Instancia en lo Laboral Nominación N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-572',
    nombre: 'Juzgado de Primera Instancia en lo Laboral Nominación N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-573',
    nombre: 'Juzgado de Primera Instancia en lo Laboral Nominación N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-574',
    nombre: 'Juzgado de Primera Instancia en lo Laboral Nominación N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-575',
    nombre: 'Camara de lo Contencioso Administrativo',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-576',
    nombre: 'Camara de Apelacion en lo Penal - Sala N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-577',
    nombre: 'Camara de Apelacion en lo Penal - Sala N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-578',
    nombre: 'Camara de Apelacion en lo Penal - Sala N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-579',
    nombre: 'Camara de Apelacion en lo Penal - Sala N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-580',
    nombre: 'Juzgado Penal de Primera Instancia N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-581',
    nombre: 'Juzgado Penal de Primera Instancia N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-582',
    nombre: 'Juzgado Penal de Primera Instancia N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-583',
    nombre: 'Juzgado Penal de Primera Instancia N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-584',
    nombre: 'Juzgado Penal de Primera Instancia N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-585',
    nombre: 'Juzgado Penal de Primera Instancia N° 6',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-586',
    nombre: 'Juzgado Penal de Primera Instancia N° 7',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-587',
    nombre: 'Juzgado Penal de Primera Instancia N° 8',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-588',
    nombre: 'Juzgado Penal de Primera Instancia N° 9',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-589',
    nombre: 'Juzgado Penal de Primera Instancia N° 10',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-590',
    nombre: 'Juzgado Penal de Primera Instancia N° 11',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-591',
    nombre: 'Juzgado Penal de Primera Instancia N° 12',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-592',
    nombre: 'Juzgado Penal de Primera Instancia N° 13',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-593',
    nombre: 'Juzgado Penal de Primera Instancia N° 14',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-594',
    nombre: 'Juzgado Penal de Primera Instancia N° 15',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-595',
    nombre: 'Juzgado de Primera Instancia de Distrito de Menores N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-596',
    nombre: 'Juzgado de Primera Instancia de Distrito de Menores N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-597',
    nombre: 'Fiscalia Extrapenal N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-598',
    nombre: 'Fiscalia Extrapenal N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-599',
    nombre: 'Fiscalia Extrapenal N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-601',
    nombre: 'Juzgado Federal de San Nicolas n° 1 - Secretaria n° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-602',
    nombre: 'Juzgado Federal de San Nicolas n° 1 - Secretaria n° 3',
    provincia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-603',
    nombre: 'Juzgado Federal N° 1 - San Nicolas',
    provincia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-604',
    nombre: 'Juzgado Federal N° 2 - San Nicolas',
    provincia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-605',
    nombre: 'Juzgado Federal n° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-606',
    nombre: 'Juzgado Federal n° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-607',
    nombre: 'Juzgado Federal',
    provincia: 'Justicia Federal',
    ciudad: 'Rafaela',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-608',
    nombre: 'Cámara Federal de Apelaciones - Sala A - Rosario',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-609',
    nombre: 'Cámara Federal de Apelaciones - Sala B - Rosario',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-610',
    nombre: 'Juzgado Federal',
    provincia: 'Justicia Federal',
    ciudad: 'Venado Tuerto',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-611',
    nombre: 'Juzgado Civil y Comercial Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-612',
    nombre: 'Juzgado Civil y Comercial Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-613',
    nombre: 'Juzgado Civil y Comercial Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-614',
    nombre: 'Juzgado Civil y Comercial Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-615',
    nombre: 'Juzgado Civil y Comercial Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-616',
    nombre: 'Juzgado Civil y Comercial Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-617',
    nombre: 'Juzgado Civil y Comercial Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-618',
    nombre: 'Juzgado Civil y Comercial Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-619',
    nombre: 'Juzgado Civil y Comercial Federal N° 9',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-620',
    nombre: 'Juzgado Civil y Comercial Federal N° 10',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-621',
    nombre: 'Juzgado Civil y Comercial Federal N° 11',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-622',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil y Comercial Federal - Sala N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-623',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil y Comercial Federal - Sala N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-624',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil y Comercial Federal - Sala N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-636',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Adm. Fed. - Sala N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-637',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Adm. Fed. - Sala N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-638',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Adm. Fed. - Sala N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-639',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Adm. Fed. - Sala N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-640',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Adm. Fed. - Sala N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-641',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional Federal - Sala N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-642',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional Federal - Sala N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-643',
    nombre: 'Juzgado Criminal y Correccional Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-644',
    nombre: 'Juzgado Criminal y Correccional Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-645',
    nombre: 'Juzgado Criminal y Correccional Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-646',
    nombre: 'Juzgado Criminal y Correccional Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-647',
    nombre: 'Juzgado Criminal y Correccional Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-648',
    nombre: 'Juzgado Criminal y Correccional Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-649',
    nombre: 'Juzgado Criminal y Correccional Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-650',
    nombre: 'Juzgado Criminal y Correccional Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-651',
    nombre: 'Juzgado Criminal y Correccional Federal N° 9',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-652',
    nombre: 'Juzgado Criminal y Correccional Federal N° 10',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-653',
    nombre: 'Juzgado Criminal y Correccional Federal N° 11',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-654',
    nombre: 'Juzgado Criminal y Correccional Federal N° 12',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-655',
    nombre: 'Juzgado Comercial N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-656',
    nombre: 'Juzgado Comercial N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-657',
    nombre: 'Juzgado Comercial N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-658',
    nombre: 'Juzgado Comercial N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-659',
    nombre: 'Juzgado Comercial N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-660',
    nombre: 'Juzgado Comercial N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-661',
    nombre: 'Juzgado Comercial N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-662',
    nombre: 'Juzgado Comercial N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-663',
    nombre: 'Juzgado Comercial N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-664',
    nombre: 'Juzgado Comercial N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-665',
    nombre: 'Juzgado Comercial N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-666',
    nombre: 'Juzgado Comercial N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-667',
    nombre: 'Juzgado Comercial N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-668',
    nombre: 'Juzgado Comercial N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-669',
    nombre: 'Juzgado Comercial N° 15 - Secretaría N°29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-670',
    nombre: 'Juzgado Comercial N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-671',
    nombre: 'Juzgado Comercial N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-672',
    nombre: 'Juzgado Comercial N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-673',
    nombre: 'Juzgado Comercial N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-674',
    nombre: 'Juzgado Comercial N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-675',
    nombre: 'Juzgado Comercial N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-676',
    nombre: 'Juzgado Comercial N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-677',
    nombre: 'Juzgado Comercial N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-678',
    nombre: 'Juzgado Comercial N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-679',
    nombre: 'Juzgado Comercial N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-680',
    nombre: 'Juzgado Comercial N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-681',
    nombre: 'Juzgado Comercial N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-682',
    nombre: 'Juzgado Comercial N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-683',
    nombre: 'Juzgado Comercial N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-684',
    nombre: 'Juzgado Comercial N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-685',
    nombre: 'Juzgado Comercial N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-686',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala A',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-687',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala B',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-688',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala C',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-689',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala D',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-690',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala E',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-691',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala F',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-692',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-693',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-694',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-695',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-696',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-697',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-698',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-699',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-700',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-701',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo - Sala N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-702',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-703',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-704',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-705',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-706',
    nombre: 'Juzgado del Trabajo N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-707',
    nombre: 'Juzgado del Trabajo N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-708',
    nombre: 'Juzgado del Trabajo N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-709',
    nombre: 'Juzgado del Trabajo N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-710',
    nombre: 'Juzgado del Trabajo N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-711',
    nombre: 'Juzgado del Trabajo N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-712',
    nombre: 'Juzgado del Trabajo N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-713',
    nombre: 'Juzgado del Trabajo N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-714',
    nombre: 'Juzgado del Trabajo N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-715',
    nombre: 'Juzgado del Trabajo N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-716',
    nombre: 'Juzgado del Trabajo N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-717',
    nombre: 'Juzgado del Trabajo N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-718',
    nombre: 'Juzgado del Trabajo N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-719',
    nombre: 'Juzgado del Trabajo N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-720',
    nombre: 'Juzgado del Trabajo N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-721',
    nombre: 'Juzgado del Trabajo N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-722',
    nombre: 'Juzgado del Trabajo N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-723',
    nombre: 'Juzgado del Trabajo N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-724',
    nombre: 'Juzgado del Trabajo N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-725',
    nombre: 'Juzgado del Trabajo N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-726',
    nombre: 'Juzgado del Trabajo N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-727',
    nombre: 'Juzgado del Trabajo N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-728',
    nombre: 'Juzgado del Trabajo N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-729',
    nombre: 'Juzgado del Trabajo N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-730',
    nombre: 'Juzgado del Trabajo N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-731',
    nombre: 'Juzgado del Trabajo N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-732',
    nombre: 'Juzgado del Trabajo N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-733',
    nombre: 'Juzgado del Trabajo N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-734',
    nombre: 'Juzgado del Trabajo N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-735',
    nombre: 'Juzgado del Trabajo N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-736',
    nombre: 'Juzgado del Trabajo N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-737',
    nombre: 'Juzgado del Trabajo N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-738',
    nombre: 'Juzgado del Trabajo N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-739',
    nombre: 'Juzgado del Trabajo N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-740',
    nombre: 'Juzgado del Trabajo N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-741',
    nombre: 'Juzgado del Trabajo N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-742',
    nombre: 'Juzgado del Trabajo N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-743',
    nombre: 'Juzgado del Trabajo N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-744',
    nombre: 'Juzgado del Trabajo N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-745',
    nombre: 'Juzgado del Trabajo N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-746',
    nombre: 'Juzgado del Trabajo N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-747',
    nombre: 'Juzgado del Trabajo N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-748',
    nombre: 'Juzgado del Trabajo N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-749',
    nombre: 'Juzgado del Trabajo N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-750',
    nombre: 'Juzgado del Trabajo N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-751',
    nombre: 'Juzgado del Trabajo N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-752',
    nombre: 'Juzgado del Trabajo N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-753',
    nombre: 'Juzgado del Trabajo N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-754',
    nombre: 'Juzgado del Trabajo N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-755',
    nombre: 'Juzgado del Trabajo N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-756',
    nombre: 'Juzgado del Trabajo N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-757',
    nombre: 'Juzgado del Trabajo N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-758',
    nombre: 'Juzgado del Trabajo N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-759',
    nombre: 'Juzgado del Trabajo N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-760',
    nombre: 'Juzgado del Trabajo N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-761',
    nombre: 'Juzgado del Trabajo N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-762',
    nombre: 'Juzgado del Trabajo N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-763',
    nombre: 'Juzgado del Trabajo N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-764',
    nombre: 'Juzgado del Trabajo N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-765',
    nombre: 'Juzgado del Trabajo N° 64',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-766',
    nombre: 'Juzgado del Trabajo N° 65',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-767',
    nombre: 'Juzgado del Trabajo N° 66',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-768',
    nombre: 'Juzgado del Trabajo N° 67',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-769',
    nombre: 'Juzgado del Trabajo N° 68',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-770',
    nombre: 'Juzgado del Trabajo N° 69',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-771',
    nombre: 'Juzgado del Trabajo N° 70',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-772',
    nombre: 'Juzgado del Trabajo N° 71',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-773',
    nombre: 'Juzgado del Trabajo N° 72',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-774',
    nombre: 'Juzgado del Trabajo N° 73',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-775',
    nombre: 'Juzgado del Trabajo N° 74',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-776',
    nombre: 'Juzgado del Trabajo N° 75',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-777',
    nombre: 'Juzgado del Trabajo N° 76',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-778',
    nombre: 'Juzgado del Trabajo N° 77',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-779',
    nombre: 'Juzgado del Trabajo N° 78',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-780',
    nombre: 'Juzgado del Trabajo N° 79',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-781',
    nombre: 'Juzgado del Trabajo N° 80',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-782',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala A',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-783',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala B',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-784',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala C',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-785',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala D',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-786',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala E',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-787',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala F',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-788',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala G',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-789',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala H',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-790',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala I',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-791',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala J',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-792',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala K',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-793',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala L',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-794',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil - Sala M',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-795',
    nombre: 'Juzgado Civil N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-796',
    nombre: 'Juzgado Civil N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-797',
    nombre: 'Juzgado Civil N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-798',
    nombre: 'Juzgado Civil N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-799',
    nombre: 'Juzgado Civil N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-800',
    nombre: 'Juzgado Civil N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-801',
    nombre: 'Juzgado Civil N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-802',
    nombre: 'Juzgado Civil N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-803',
    nombre: 'Juzgado Civil N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-804',
    nombre: 'Juzgado Civil N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-805',
    nombre: 'Juzgado Civil N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-806',
    nombre: 'Juzgado Civil N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-807',
    nombre: 'Juzgado Civil N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-808',
    nombre: 'Juzgado Civil N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-809',
    nombre: 'Juzgado Civil N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-810',
    nombre: 'Juzgado Civil N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-811',
    nombre: 'Juzgado Civil N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-812',
    nombre: 'Juzgado Civil N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-813',
    nombre: 'Juzgado Civil N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-814',
    nombre: 'Juzgado Civil N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-815',
    nombre: 'Juzgado Civil N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-816',
    nombre: 'Juzgado Civil N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-817',
    nombre: 'Juzgado Civil N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-818',
    nombre: 'Juzgado Civil N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-819',
    nombre: 'Juzgado Civil N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-820',
    nombre: 'Juzgado Civil N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-821',
    nombre: 'Juzgado Civil N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-822',
    nombre: 'Juzgado Civil N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-823',
    nombre: 'Juzgado Civil N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-824',
    nombre: 'Juzgado Civil N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-825',
    nombre: 'Juzgado Civil N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-826',
    nombre: 'Juzgado Civil N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-827',
    nombre: 'Juzgado Civil N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-828',
    nombre: 'Juzgado Civil N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-829',
    nombre: 'Juzgado Civil N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-830',
    nombre: 'Juzgado Civil N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-831',
    nombre: 'Juzgado Civil N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-832',
    nombre: 'Juzgado Civil N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-833',
    nombre: 'Juzgado Civil N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-834',
    nombre: 'Juzgado Civil N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-835',
    nombre: 'Juzgado Civil N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-836',
    nombre: 'Juzgado Civil N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-837',
    nombre: 'Juzgado Civil N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-838',
    nombre: 'Juzgado Civil N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-839',
    nombre: 'Juzgado Civil N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-840',
    nombre: 'Juzgado Civil N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-841',
    nombre: 'Juzgado Civil N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-842',
    nombre: 'Juzgado Civil N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-843',
    nombre: 'Juzgado Civil N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-844',
    nombre: 'Juzgado Civil N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-845',
    nombre: 'Juzgado Civil N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-846',
    nombre: 'Juzgado Civil N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-847',
    nombre: 'Juzgado Civil N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-848',
    nombre: 'Juzgado Civil N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-849',
    nombre: 'Juzgado Civil N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-850',
    nombre: 'Juzgado Civil N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-851',
    nombre: 'Juzgado Civil N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-852',
    nombre: 'Juzgado Civil N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-853',
    nombre: 'Juzgado Civil N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-854',
    nombre: 'Juzgado Civil N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-855',
    nombre: 'Juzgado Civil N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-856',
    nombre: 'Juzgado Civil N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-857',
    nombre: 'Juzgado Civil N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-858',
    nombre: 'Juzgado Civil N° 64',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-859',
    nombre: 'Juzgado Civil N° 65',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-860',
    nombre: 'Juzgado Civil N° 66',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-861',
    nombre: 'Juzgado Civil N° 67',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-862',
    nombre: 'Juzgado Civil N° 68',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-863',
    nombre: 'Juzgado Civil N° 69',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-864',
    nombre: 'Juzgado Civil N° 70',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-865',
    nombre: 'Juzgado Civil N° 71',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-866',
    nombre: 'Juzgado Civil N° 72',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-867',
    nombre: 'Juzgado Civil N° 73',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-868',
    nombre: 'Juzgado Civil N° 74',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-869',
    nombre: 'Juzgado Civil N° 75',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-870',
    nombre: 'Juzgado Civil N° 76',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-871',
    nombre: 'Juzgado Civil N° 77',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-872',
    nombre: 'Juzgado Civil N° 78',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-873',
    nombre: 'Juzgado Civil N° 79',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-874',
    nombre: 'Juzgado Civil N° 80',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-875',
    nombre: 'Juzgado Civil N° 81',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-876',
    nombre: 'Juzgado Civil N° 82',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-877',
    nombre: 'Juzgado Civil N° 83',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-878',
    nombre: 'Juzgado Civil N° 84',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-879',
    nombre: 'Juzgado Civil N° 85',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-880',
    nombre: 'Juzgado Civil N° 86',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-881',
    nombre: 'Juzgado Civil N° 87',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-882',
    nombre: 'Juzgado Civil N° 88',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-883',
    nombre: 'Juzgado Civil N° 89',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-884',
    nombre: 'Juzgado Civil N° 90',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-885',
    nombre: 'Juzgado Civil N° 91',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-886',
    nombre: 'Juzgado Civil N° 92',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-887',
    nombre: 'Juzgado Civil N° 93',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-888',
    nombre: 'Juzgado Civil N° 94',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-889',
    nombre: 'Juzgado Civil N° 95',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-890',
    nombre: 'Juzgado Civil N° 96',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-891',
    nombre: 'Juzgado Civil N° 97',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-892',
    nombre: 'Juzgado Civil N° 98',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-893',
    nombre: 'Juzgado Civil N° 99',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-894',
    nombre: 'Juzgado Civil N° 100',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-895',
    nombre: 'Juzgado Civil N° 101',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-896',
    nombre: 'Juzgado Civil N° 102',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-897',
    nombre: 'Juzgado Civil N° 103',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-898',
    nombre: 'Juzgado Civil N° 104',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-899',
    nombre: 'Juzgado Civil N° 105',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-900',
    nombre: 'Juzgado Civil N° 106',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-901',
    nombre: 'Juzgado Civil N° 107',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-902',
    nombre: 'Juzgado Civil N° 108',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-903',
    nombre: 'Juzgado Civil N° 109',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-904',
    nombre: 'Juzgado Civil N° 110',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-905',
    nombre: 'Cámara Nacional de Casación en lo Criminal y Correccional - Sala N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-906',
    nombre: 'Cámara Nacional de Casación en lo Criminal y Correccional - Sala N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-907',
    nombre: 'Cámara Nacional de Casación en lo Criminal y Correccional - Sala N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-908',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-909',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala AMIA',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-910',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-911',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-912',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-913',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional - Sala N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-914',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-915',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-916',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-917',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-918',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-919',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-920',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-921',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-922',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-923',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-924',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-925',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-926',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-927',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-928',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-929',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-930',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-931',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-932',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-933',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-934',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-935',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-936',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-937',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-938',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-939',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-940',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-941',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-942',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-943',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-944',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-945',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-946',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-947',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-948',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-949',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-950',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-951',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-952',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-953',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-954',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-955',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-956',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-957',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-958',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-959',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-960',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-961',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-962',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-963',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-964',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-965',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-966',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-967',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-968',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-969',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-970',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-971',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-972',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-973',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-974',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-975',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-976',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-977',
    nombre: 'Juzgado de Menores N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-978',
    nombre: 'Juzgado de Menores N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-979',
    nombre: 'Juzgado de Menores N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-980',
    nombre: 'Juzgado de Menores N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-981',
    nombre: 'Juzgado de Menores N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-982',
    nombre: 'Juzgado de Menores N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-983',
    nombre: 'Juzgado de Menores N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-984',
    nombre: 'Tribunal Oral de Menores N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-985',
    nombre: 'Tribunal Oral de Menores N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-986',
    nombre: 'Tribunal Oral de Menores N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-987',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-988',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-989',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-990',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-991',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-992',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-993',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-994',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-995',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-996',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-997',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-998',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-999',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1000',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1001',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1002',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1003',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1004',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1005',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1006',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1007',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1008',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1009',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1010',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1011',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1012',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1013',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1014',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1015',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1016',
    nombre: 'Tribunal Oral en lo Criminal y Correccional N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1017',
    nombre: 'Camara Civil, Comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Marcos Juarez',
    fuero: 'Civil, Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1018',
    nombre: 'Camara de Apelaciones Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1019',
    nombre: 'Camara en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1020',
    nombre: 'Juzgado en lo Contencioso Adminsitrativo n°1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1021',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 1',
    provincia: 'Salta',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1022',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 2',
    provincia: 'Tucumán',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1023',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 3',
    provincia: 'Tucumán',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1024',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 4',
    provincia: 'Tucumán',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1025',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 5',
    provincia: 'Tucumán',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1026',
    nombre: 'Cámara de Apelaciones Civil y Comercial - Sala N° 6',
    provincia: 'Tucumán',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1027',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 1 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1028',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 2 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1029',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 3 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1030',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 4 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1031',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 5 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1032',
    nombre: 'Camara de Apelaciones Civil y Comercial - Sala N° 6 (Salta)',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1033',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1034',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1035',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1036',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1037',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1038',
    nombre: 'Juzgado de Primera Instancia de Personas y Familia N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1039',
    nombre: 'Juzgado 1° Instancia Civil, Comercial, Laboral, de Personas y Familia y de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Cafayate',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia, Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1040',
    nombre: 'Juzgado 1° Instancia Civil, Comercial, Laboral, de Personas y Familia y de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia, Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1041',
    nombre: 'Juzgado 1° Instancia Civil, Comercial, Laboral, de Personas y Familia y de Garantías N° 1 (Dist. Tartagal)',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia, Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1042',
    nombre: 'Primera Cámara de Apelaciones en lo Civil',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1043',
    nombre: 'Segunda Cámara de Apelaciones en lo Civil',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1044',
    nombre: 'Tercera Cámara de Apelaciones en lo Civil',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1045',
    nombre: 'Cuarta Cámara de Apelaciones en lo Civil',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1046',
    nombre: 'Quinta Cámara de Apelaciones en lo Civil',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1047',
    nombre: 'Juzgado de Paz Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Godoy Cruz',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1048',
    nombre: 'Juzgado de Paz Letrado N° 1',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1049',
    nombre: 'Juzgado de Paz Letrado N° 2',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1050',
    nombre: 'Juzgado de Paz Letrado N° 3',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1051',
    nombre: 'Juzgado de Paz Letrado N° 4',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1052',
    nombre: 'Juzgado de Paz Letrado N° 5',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1053',
    nombre: 'Juzgado de Paz Letrado N° 6',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1054',
    nombre: 'Juzgado de Paz Letrado N° 7',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1055',
    nombre: 'Juzgado de Paz Letrado N° 8',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1056',
    nombre: 'Primer Juzgado de Procesos Concursales',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1057',
    nombre: 'Segundo Juzgado de Procesos Concursales',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1058',
    nombre: 'Tercer Juzgado de Procesos Concursales',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1059',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1060',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1061',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1062',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1063',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1064',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1065',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1066',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1067',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1068',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1069',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1070',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1071',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1072',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1073',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1074',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1075',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1076',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1077',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1078',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1079',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1080',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1081',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1082',
    nombre: 'Juzgado Civil y Comercial N° 11',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1083',
    nombre: 'Juzgado Civil y Comercial N° 12',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1084',
    nombre: 'Juzgado Civil y Comercial N° 13',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1085',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial - Sala N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1086',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial - Sala N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1087',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial - Sala n°3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1088',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial - Sala N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1089',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 1',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1090',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 2',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1091',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 3',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1092',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 4',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1093',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 5',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1094',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 6',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1095',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 7',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1096',
    nombre: 'Juzgado en lo Civil y Comercial Común N° 8',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1097',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Familia y de Minería',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1098',
    nombre: 'Cámara del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1099',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N° 1',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1100',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N° 3',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1101',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1102',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1103',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N° 9',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1104',
    nombre: 'Cámara de Apelaciones Civil - Sala A',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1105',
    nombre: 'Cámara de Apelaciones Civil - Sala B',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1106',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1107',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1108',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1109',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1110',
    nombre: 'Juzgado de Ejecución N° 3',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1111',
    nombre: 'Juzgados de Gestión Asociada de Familia N° 1',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1112',
    nombre: 'Juzgados de Gestión Asociada de Familia N° 2',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1113',
    nombre: 'Juzgados de Gestión Asociada de Familia N° 3',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1114',
    nombre: 'Juzgado Civil Segunda Nominación',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1115',
    nombre: 'Juzgado Civil Tercera Nominación',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1116',
    nombre: 'Juzgado Civil Cuarta Nominación',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1117',
    nombre: 'Juzgado Civil Quinta Nominación',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1118',
    nombre: 'Juzgado Civil Sexta Nominación',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1119',
    nombre: 'juzgado 1° instancia en lo civil y comercial Monte Quemado',
    provincia: 'Santiago del Estero',
    ciudad: 'Monte Quemado',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1120',
    nombre: 'Juzgado Civil y Comercial de Frias',
    provincia: 'Santiago del Estero',
    ciudad: 'Frias',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1121',
    nombre: 'Juzgado Civil y Comercial de Primera Nominacion de la Banda',
    provincia: 'Santiago del Estero',
    ciudad: 'La Banda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1122',
    nombre: 'Juzgado Civil y Comercial de Segunda Nominacion de la Banda',
    provincia: 'Santiago del Estero',
    ciudad: 'La Banda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1123',
    nombre: 'juzgado N° 1',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1124',
    nombre: 'juzgado N° 2',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1125',
    nombre: 'juzgado N° 3',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1126',
    nombre: 'juzgado N° 4',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1127',
    nombre: 'juzgado N° 5',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1128',
    nombre: 'juzgado N° 6',
    provincia: 'Santiago del Estero',
    ciudad: 'Añatuya',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1129',
    nombre: 'Cámara Nacional en lo Penal Económico - Sala A',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1130',
    nombre: 'Cámara Nacional en lo Penal Económico - Sala B',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1131',
    nombre: 'Juzgado Penal Económico N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1132',
    nombre: 'Juzgado Penal Económico N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1133',
    nombre: 'Juzgado Penal Económico N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1134',
    nombre: 'Juzgado Penal Económico N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1135',
    nombre: 'Juzgado Penal Económico N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1136',
    nombre: 'Juzgado Penal Económico N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1137',
    nombre: 'Juzgado Penal Económico N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1138',
    nombre: 'Juzgado Penal Económico N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1139',
    nombre: 'Juzgado Penal Económico N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1140',
    nombre: 'Juzgado Penal Económico N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1141',
    nombre: 'Juzgado Penal Económico N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1142',
    nombre: 'Tribunal de Juicio en lo Criminal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1143',
    nombre: 'Tribunal de Juicio en lo Criminal N° 2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1144',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N°1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1145',
    nombre: 'Juzgado de Primera Instancia en lo Civil y Comercial N°2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1146',
    nombre: 'Juzgado de Primera Instancia de Familia y Minoridad N°1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1147',
    nombre: 'Juzgado de Primera Instancia de Familia Y Minoridad N°2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1148',
    nombre: 'Juzgado de Primera Instancia del Trabajo N°1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1149',
    nombre: 'Juzgado de Primera Instancia del Trabajo N°2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1150',
    nombre: 'Juzgado de Instrucción N°1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1151',
    nombre: 'Juzgado de Instrucción N°2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1152',
    nombre: 'Juzgado de Instrucción N°3',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1153',
    nombre: 'Juzgado Correccional',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1154',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1155',
    nombre: 'Ministerio Público Fiscal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1156',
    nombre: 'SUPERIOR TRIBUNAL DE JUSTICIA',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1157',
    nombre: 'Cámara de Apelaciones Sala Civil, Comercial y del Trabajo Dis. Jud. Sur',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1158',
    nombre: 'Cámara de Apelaciones Sala Penal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1159',
    nombre: 'Fiscalía Ante el Superior Tribunal de Justicia',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1160',
    nombre: 'Defensor Ante el Superior Tribunal de Justicia',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1161',
    nombre: 'Tribunal de Juicio en lo Criminal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1162',
    nombre: 'Cámara de Apelaciones Sala Civil, Comercial y del Trabajo Dis. Jud. Norte',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1163',
    nombre: 'Cámara de Apelaciones Sala Penal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1164',
    nombre: 'Tribunal de Juicio en lo Criminal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1165',
    nombre: 'Juzgado Correccional',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1166',
    nombre: 'Juzgado de Instrucción N 1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1167',
    nombre: 'Juzgado de Instrucción N°1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1168',
    nombre: 'Juzgado de Instrucción N°2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1169',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1170',
    nombre: 'Ministerio Público Fiscal',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1171',
    nombre: 'Ministerio Público de la Defensa',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'General',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1172',
    nombre: 'Juzgado de Primera Instancia en lo Civil y Comercial N° 1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1173',
    nombre: 'Juzgado de Primera Instancia en lo Civil y Comercial N° 2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1174',
    nombre: 'Juzgado de Primera Instancia de Familia y Minoridad N° 1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1175',
    nombre: 'Juzgado de Primera Instancia de Familia y Minoridad N° 2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1176',
    nombre: 'Juzgado de Primera Instancia del Trabajo N° 1',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1177',
    nombre: 'Juzgado de Primera Instancia del Trabajo N° 2',
    provincia: 'Tierra del Fuego',
    ciudad: 'Rio Grande',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1178',
    nombre: 'Juzgado Laboral N° 1',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1179',
    nombre: 'Juzgado Laboral N° 2',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1180',
    nombre: 'Cámara en lo Penal',
    provincia: 'Chubut',
    ciudad: 'Comodoro Rivadavia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1181',
    nombre: 'Cámara de Apelaciones Civil',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1182',
    nombre: 'Juzgado Civil ,Comercial y Laboral',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1183',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1184',
    nombre: 'Juzgado de familia N° 1',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1185',
    nombre: 'Juzgado de familia N° 2',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1186',
    nombre: 'Cámara Penal',
    provincia: 'Chubut',
    ciudad: 'Esquel',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1187',
    nombre: 'Juzgado Civil, Familia, Comercial, Laboral, Rural y de Minería',
    provincia: 'Chubut',
    ciudad: 'Lago Puelo',
    fuero: 'Civil, Familia, Comercial, Laboral, Rural, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1188',
    nombre: 'Cámara de Apelaciones Civiles',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1189',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1190',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1191',
    nombre: 'Juzgado Laboral N° 1',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1192',
    nombre: 'Juzgado Laboral N° 2',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1193',
    nombre: 'Juzgado de familia N° 1',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1194',
    nombre: 'Juzgado de familia N° 2',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1195',
    nombre: 'Cámara Penal',
    provincia: 'Chubut',
    ciudad: 'Puerto Madryn',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1196',
    nombre: 'Juzgado Civil, Familia, Comercial, Laboral, Rural y de Minería',
    provincia: 'Chubut',
    ciudad: 'Rawson',
    fuero: 'Civil, Familia, Comercial, Laboral, Rural, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1197',
    nombre: 'Juzgado de Familia',
    provincia: 'Chubut',
    ciudad: 'Rawson',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1198',
    nombre: 'Juzgado Civil, Familia, Comercial, Laboral, Rural y de Minería',
    provincia: 'Chubut',
    ciudad: 'Sarmiento',
    fuero: 'Civil, Familia, Comercial, Laboral, Rural, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1199',
    nombre: 'Cámara de Apelaciones Civil',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Civil',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1200',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1201',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1202',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1203',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1204',
    nombre: 'Juzgado de familia N° 1',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1205',
    nombre: 'Juzgado de familia N° 2',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1206',
    nombre: 'Juzgado Laboral N° 1',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1207',
    nombre: 'Juzgado Laboral N° 2',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1208',
    nombre: 'Juzgado Laboral N° 3',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1209',
    nombre: 'Cámara Penal',
    provincia: 'Chubut',
    ciudad: 'Trelew',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1210',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Familia y de Minería',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1211',
    nombre: 'Cámara Primera del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1212',
    nombre: 'Cámara Primera del Trabajo N° 2',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1213',
    nombre: 'Cámara Segunda del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1214',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N° 1',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1215',
    nombre: 'Juzgado, Civil, Comercial, Minería y Sucesiones N°3',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1216',
    nombre: 'Juzgado, Civil, Comercial, Minería y Sucesiones N°5',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1217',
    nombre: 'Juzgado, Civil, Comercial, Minería y Sucesiones N°9',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1218',
    nombre: 'Juzgado de Familia N°11',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1219',
    nombre: 'Juzgado de Familia N°16',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1220',
    nombre: 'Juzgado de Familia',
    provincia: 'Río Negro',
    ciudad: 'Luis Beltran',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1221',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°31',
    provincia: 'Río Negro',
    ciudad: 'Choele Choel',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1222',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°21',
    provincia: 'Río Negro',
    ciudad: 'Villa Regina',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1223',
    nombre: 'Juzgado de Familia',
    provincia: 'Río Negro',
    ciudad: 'Villa Regina',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1224',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Familia y de Minería',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1225',
    nombre: 'Cámara Primera del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1226',
    nombre: 'Cámara Segunda del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1227',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°1',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1228',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°3',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1229',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°5',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1230',
    nombre: 'Juzgado de Familia N°7',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1231',
    nombre: 'Juzgado de Familia N°9',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1232',
    nombre: 'Juzgado de Familia N°10',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1233',
    nombre: 'Juzgado de Familia, Civil, Comercial, Minería y Sucesiones N°11',
    provincia: 'Río Negro',
    ciudad: 'El Bolson',
    fuero: 'Familia, Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1234',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Familia y de Minería',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1235',
    nombre: 'Cámara del Trabajo',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1236',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°1',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1237',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°3',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1238',
    nombre: 'Juzgado Civil, Comercial, Minería y Sucesiones N°9',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1239',
    nombre: 'Juzgado de Familia N°5',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1240',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1241',
    nombre: 'Jueces y Juezas de Garantías PREGUNTAR',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1242',
    nombre: 'Juzgado de Ejecución Penal N° 8',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1243',
    nombre: 'Juez de Garantías',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1244',
    nombre: 'Jueces y Juezas de Garantías',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1245',
    nombre: 'Juzgado de Ejecución Penal N°10',
    provincia: 'Río Negro',
    ciudad: 'General Roca',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1246',
    nombre: 'Jueces de Garantías',
    provincia: 'Río Negro',
    ciudad: 'Villa Regina',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1247',
    nombre: 'Jueces de Garantías',
    provincia: 'Río Negro',
    ciudad: 'Choele Choel',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1248',
    nombre: 'Jueces y Juezas de Garantías',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1249',
    nombre: 'Juzgado de Ejecución Penal N°12',
    provincia: 'Río Negro',
    ciudad: 'San Carlos De Bariloche',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1250',
    nombre: 'VERRRR Jueces y Juezas de Garantías',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1251',
    nombre: 'Juzgado de Ejecución Penal N° 8',
    provincia: 'Río Negro',
    ciudad: 'Cipolletti',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1252',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Laboral y de Minería',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1253',
    nombre: 'Juez Civil, Comercial y de Minería N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1254',
    nombre: 'Juez Civil, Comercial y de Minería N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1255',
    nombre: 'Juez Civil, Comercial y de Minería N° 3',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1256',
    nombre: 'Juez Civil, Comercial y de Minería N° 4',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1257',
    nombre: 'Juez Civil, Comercial y de Minería N° 5',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1258',
    nombre: 'Juez Civil, Comercial y de Minería N° 6',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1259',
    nombre: 'Juez Laboral N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1260',
    nombre: 'Juez Laboral N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1261',
    nombre: 'Juez Laboral N° 3',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1262',
    nombre: 'Juez Laboral N° 4',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1263',
    nombre: 'Juez Laboral N° 5',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1264',
    nombre: 'Juez Laboral N° 6',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1265',
    nombre: 'Juez Procesal Administrativo N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1266',
    nombre: 'Juez Procesal Administrativo N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1267',
    nombre: 'Juzgado de Familia Niñez y Adolescencia N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1268',
    nombre: 'Juzgado de Familia Niñez y Adolescencia N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1269',
    nombre: 'Juzgado de Familia Niñez y Adolescencia N° 3',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1270',
    nombre: 'Juzgado de Familia Niñez y Adolescencia N° 4',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1271',
    nombre: 'Juzgado de Juicios Ejecutivos N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1272',
    nombre: 'Juzgado de Juicios Ejecutivos N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1273',
    nombre: 'Juzgado de Juicios Ejecutivos N° 3',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1274',
    nombre: 'Juzgado Civil, Comercial, Laboral, Minería y Familia',
    provincia: 'Neuquén',
    ciudad: 'Rincon De Los Sauces',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1275',
    nombre: 'Juez de Ejecución',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1276',
    nombre: 'Juez Penal del Niño y Adolescente N° 1',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1277',
    nombre: 'Juez Penal del Niño y Adolescente N° 2',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1278',
    nombre: 'Cámara Provincial de Apelaciones con Competencia Civil, Comercial, Laboral de Minería y Familia para el Interior',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1279',
    nombre: 'Juzgado Civil, Comercial, Especial de Concursos y Quiebras y Minería N° 1',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1280',
    nombre: 'Juzgado Civil, Comercial, Especial de Procesos Ejecutivos, Laboral y Minería N° 2',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1281',
    nombre: 'Juzgado de Familia, Niñez y Adolescencia',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1282',
    nombre: 'Oficina Judicial Penal PREGUNTAR',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1283',
    nombre: 'Oficina de Seguimiento y Ejecución Penal',
    provincia: 'Neuquén',
    ciudad: 'Cutral Co',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1284',
    nombre: 'Tribunal de Impugnación Penal Sala N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1285',
    nombre: 'Tribunal de Impugnación Penal Sala N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1286',
    nombre: 'Jueces de Ejecución Penal',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1287',
    nombre: 'Cámara de Apelaciones Sala N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1288',
    nombre: 'Cámara de Apelaciones Sala N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1289',
    nombre: 'Cámara de Apelaciones Sala N° 3',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1290',
    nombre: 'Juzgado Laboral N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1291',
    nombre: 'Juzgado Laboral N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1292',
    nombre: 'Juzgado Civil N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1293',
    nombre: 'Juzgado Civil N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1294',
    nombre: 'Juzgado Civil N° 3',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1295',
    nombre: 'Juzgado Civil N° 4',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1296',
    nombre: 'Juzgado Civil N° 5',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1297',
    nombre: 'Juzgados de Ejecución, Concursos y Quiebras N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1298',
    nombre: 'Juzgados de Ejecución, Concursos y Quiebras N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1299',
    nombre: 'Juzgados de la Familia, Niñas, Niños y Adolescentes N° 1',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1300',
    nombre: 'Juzgados de la Familia, Niñas, Niños y Adolescentes N° 2',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1301',
    nombre: 'Cámara de Apelaciones Civil, Comercial, Laboral de Minería y Familia para el Interior',
    provincia: 'Neuquén',
    ciudad: 'Chos Malal',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1302',
    nombre: 'Juzgado de Familia, Niñez y Adolescencia',
    provincia: 'Neuquén',
    ciudad: 'Chos Malal',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1303',
    nombre: 'Juzgado Civil, Comercial, Laboral, de Minería y Juicios Ejecutivos N° 1',
    provincia: 'Neuquén',
    ciudad: 'Chos Malal',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1304',
    nombre: 'Juez Procesal Administrativo (con comp. en II, III, IV y V CJ)',
    provincia: 'Neuquén',
    ciudad: 'Chos Malal',
    fuero: 'Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1305',
    nombre: 'Juez de Ejecución para el Interior - Penal',
    provincia: 'Neuquén',
    ciudad: 'Chos Malal',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1306',
    nombre: 'Cámara de Apelaciones Civil, Comercial, Laboral de Minería y Familia para el Interior',
    provincia: 'Neuquén',
    ciudad: 'San Martin De Los Andes',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1307',
    nombre: 'Juzgado Civil, Comercial, Laboral y de Minería N° 1',
    provincia: 'Neuquén',
    ciudad: 'Junin De Los Andes',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1308',
    nombre: 'Juzgado Civil, Comercial, Laboral y de Minería N° 2',
    provincia: 'Neuquén',
    ciudad: 'Junin De Los Andes',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1309',
    nombre: 'Juzgado de Familia, Niñez y Adolescencia',
    provincia: 'Neuquén',
    ciudad: 'Junin De Los Andes',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1310',
    nombre: 'Juzgado de Primera Instancia Civil, Comercial, Laboral, de Minería y Familia',
    provincia: 'Neuquén',
    ciudad: 'Villa La Angostura',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1311',
    nombre: 'Oficina Judicial Penal (subsede) PREGUNTAR',
    provincia: 'Neuquén',
    ciudad: 'San Martin De Los Andes',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1312',
    nombre: 'Oficina Judicial Penal',
    provincia: 'Neuquén',
    ciudad: 'Junin De Los Andes',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1313',
    nombre: 'Oficina Judicial Penal (subsede)',
    provincia: 'Neuquén',
    ciudad: 'Villa La Angostura',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1314',
    nombre: 'Cámara de Apelaciones Civil, Comercial, Laboral de Minería y Familia para el Interior',
    provincia: 'Neuquén',
    ciudad: 'Zapala',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1315',
    nombre: 'Juzgado Civil, Comercial, Laboral y de Minería con Comp. en Familia',
    provincia: 'Neuquén',
    ciudad: 'Zapala',
    fuero: 'Civil, Comercial, Laboral, Minería, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1316',
    nombre: 'Oficina Judicial Penal',
    provincia: 'Neuquén',
    ciudad: 'Zapala',
    fuero: 'Penal',
    instancia: 'Oficina Judicial',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1317',
    nombre: 'Jueces de Ejecución Penal',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1318',
    nombre: 'Cámara de Apelaciones Sala N° 1',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1319',
    nombre: 'Cámara de Apelaciones Sala N° 2',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1320',
    nombre: 'Juzgado Laboral N° 1',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1321',
    nombre: 'Juzgado Laboral N° 2',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1322',
    nombre: 'Juzgado Civil N° 1',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1323',
    nombre: 'Juzgado Civil N° 2',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1324',
    nombre: 'Juzgado Civil N° 3',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1325',
    nombre: 'Juzgado de la Familia, Niñas, Niños y Adolescentes N° 1',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1326',
    nombre: 'Juzgado de la Familia, Niñas, Niños y Adolescentes N° 2',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1327',
    nombre: 'Juzgado de Ejecución, Concursos y Quiebras',
    provincia: 'La Pampa',
    ciudad: 'General Pico',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1328',
    nombre: 'Juzgado Civil, Comercial, Laboral y de Minería',
    provincia: 'La Pampa',
    ciudad: 'General Acha',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1329',
    nombre: 'Juzgado Regional Letrado de 25 de Mayo',
    provincia: 'La Pampa',
    ciudad: 'General Acha',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1330',
    nombre: 'Juzgados de la Familia, Niñas, Niños y Adolescentes',
    provincia: 'La Pampa',
    ciudad: 'General Acha',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1331',
    nombre: 'Juzgado Regional Letrado',
    provincia: 'La Pampa',
    ciudad: 'Victorica',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1332',
    nombre: 'Cámara en lo Criminal',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1333',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1334',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1335',
    nombre: 'Juzgado de Instrucción N° 3',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1336',
    nombre: 'Juzgado de Primera Instancia del Menor N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1337',
    nombre: 'Juzgado de Primera Instancia del Menor N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1338',
    nombre: 'Juzgado de Instrucción y del Menor N°1',
    provincia: 'Santa Cruz',
    ciudad: 'Puerto Santa Cruz',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1339',
    nombre: 'Juzgado de Instrucción y del Menor',
    provincia: 'Santa Cruz',
    ciudad: 'Comandante Luis Piedrabuena',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1340',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería de Menores N°1',
    provincia: 'Santa Cruz',
    ciudad: 'Gobernador Gregores',
    fuero: 'Civil, Comercial, Laboral, Minería, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1341',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Laboral y de Minería',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1342',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1343',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1344',
    nombre: 'Juzgado de 1ª Instancia de la Familia N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1345',
    nombre: 'Juzgado de 1ª Instancia de la Familia N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1346',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería N°1',
    provincia: 'Santa Cruz',
    ciudad: 'Puerto Santa Cruz',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1347',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Comandante Luis Piedrabuena',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1348',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, Laboral y de Minería de Menores N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Gobernador Gregores',
    fuero: 'Civil, Comercial, Laboral, Minería, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1349',
    nombre: 'Cámara en lo Criminal',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1350',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1351',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1352',
    nombre: 'Juzgado del Menor',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1353',
    nombre: 'Juzgado de 1ª Instancia de Instrucción y del Menor',
    provincia: 'Santa Cruz',
    ciudad: 'Pico Truncado',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1354',
    nombre: 'Juzgado de 1ª Instancia de Instrucción N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Las Heras',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1355',
    nombre: 'Juzgado Provincial de Instrucción N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Perito Moreno',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1356',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Laboral y de Minería',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1357',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Familia y de Minería N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1358',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Familia y de Minería N° 2',
    provincia: 'Santa Cruz',
    ciudad: 'Caleta Olivia',
    fuero: 'Civil, Comercial, Familia, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1359',
    nombre: 'Juzgado de 1a Instancia en lo Civil Comercial, Laboral y de Minería N° 1',
    provincia: 'Santa Cruz',
    ciudad: 'Pico Truncado',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1360',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Laboral de Familia y de Minería N°1',
    provincia: 'Santa Cruz',
    ciudad: 'Las Heras',
    fuero: 'Civil, Comercial, Laboral, Familia, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1361',
    nombre: 'Tercer Juzgado en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1362',
    nombre: 'Décimo Segundo Juzgado en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1363',
    nombre: 'Tribunal de Gestión Judicial Asociada N°1',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1364',
    nombre: 'Tribunal de Gestión Judicial Asociada N° 2',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1365',
    nombre: 'Tribunal de Gestión Judicial Asociada N°3',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1366',
    nombre: 'Tribunal de Gestión Judicial Asociada N°4',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1367',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Guaymallen',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1368',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Lujan De Cuyo',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1369',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Las Heras',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1370',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Lavalle',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1371',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Maipu',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1372',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'San Carlos',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1373',
    nombre: 'Gestión Judicial Asociada Tributaria',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1374',
    nombre: 'Gestión Judicial Asociada de Familia',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Familia',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1375',
    nombre: 'Décimo Tercero Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1376',
    nombre: 'Tercer Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'San Carlos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1377',
    nombre: 'Quinto Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Maipu',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1379',
    nombre: 'Octavo Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Maipu',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1380',
    nombre: 'Décimo Segundo Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Las Heras',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1381',
    nombre: 'Cuarto Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Las Heras',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1382',
    nombre: 'Primer Juzgado en lo Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1383',
    nombre: 'Segundo Juzgado en lo Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1384',
    nombre: 'Tercer Juzgado en lo Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1385',
    nombre: 'Tribunal Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal, Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1386',
    nombre: 'Cámara de Apelaciones de Familia',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1387',
    nombre: 'Primera Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1388',
    nombre: 'Segunda Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1389',
    nombre: 'Tercera Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1390',
    nombre: 'Cuarta Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1391',
    nombre: 'Quinta Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1392',
    nombre: 'Sexta Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1393',
    nombre: 'Séptima Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1394',
    nombre: 'Tribunal Penal Colegiado N° 1',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1395',
    nombre: 'Tribunal Penal Colegiado N° 2',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1396',
    nombre: 'Juzgado Penal Colegiado N° 1',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1397',
    nombre: 'Juzgado Penal Colegiado N° 2',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1398',
    nombre: 'Primer Juzgado Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1399',
    nombre: 'Segundo Juzgado Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1400',
    nombre: 'Primera Cámara de Apelaciones en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1401',
    nombre: 'Segunda Cámara de Apelaciones en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1402',
    nombre: 'Sexto Juzgado en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'Malargüe',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1403',
    nombre: 'Juzgado Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'General Alvear',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1404',
    nombre: 'Juzgado de Paz Letrado y Tributario y de Faltas',
    provincia: 'Mendoza',
    ciudad: 'Malargüe',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1407',
    nombre: 'Tribunal Tributario',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1408',
    nombre: 'Juzgado de Paz Letrado, Tributario y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'General Alvear',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1409',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Bowen',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1410',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1411',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Villa Atuel',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1412',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Monte Coman',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1413',
    nombre: 'Primer Juzgado de Procesos Concursales',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1414',
    nombre: 'Primera Gestión Judicial Asociada Civil',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Civil',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1415',
    nombre: 'Primer Tribunal de Gestión Judicial Asociada de Paz',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Paz',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1416',
    nombre: 'Tribunal Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Penal, Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1417',
    nombre: 'Gestión Judicial Asociada de Familia',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Familia',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1418',
    nombre: 'Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'General Alvear',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1419',
    nombre: 'Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Malargüe',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1420',
    nombre: 'Juzgado Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1421',
    nombre: 'Juzgado Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'General Alvear',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1422',
    nombre: 'Primera Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1423',
    nombre: 'Segunda Cámara del Trabajo',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1424',
    nombre: 'Primer Juzgado Penal Colegiado',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1425',
    nombre: 'Segundo Juzgado Penal Colegiado',
    provincia: 'Mendoza',
    ciudad: 'General Alvear',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1426',
    nombre: 'Tercer Juzgado Penal Colegiado',
    provincia: 'Mendoza',
    ciudad: 'Malargüe',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1427',
    nombre: 'Tribunal Penal Colegiado',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1428',
    nombre: 'Juzgado Contravencional',
    provincia: 'Mendoza',
    ciudad: 'San Rafael',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1429',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Junin',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1430',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'La Paz',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1431',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'San Carlos',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1432',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'La Dormida',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1433',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Tupungato',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1434',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Las Catitas (Est. J. N. Lencinas)',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1435',
    nombre: 'Juzgado de Paz Letrado, Contravencional y Tributario',
    provincia: 'Mendoza',
    ciudad: 'Rivadavia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1436',
    nombre: 'Tercer Juzgado en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'Rivadavia',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1437',
    nombre: 'Cuarto Juzgado en lo Civil, Comercial y Minas',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1438',
    nombre: 'Tribunal Tributario',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1439',
    nombre: 'Tribunal de Gestión Judicial Civil',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Civil',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1442',
    nombre: 'Primer Juzgado Civil',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1447',
    nombre: 'Segundo Juzgado Civil',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1448',
    nombre: 'Tercer Juzgado de Familia La Paz',
    provincia: 'Mendoza',
    ciudad: 'La Paz',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1449',
    nombre: 'Primer Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1450',
    nombre: 'Segundo Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1452',
    nombre: 'Juzgado en lo Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1453',
    nombre: 'Tribunal de Gestión Judicial Laboral Primera Cámara',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1456',
    nombre: 'Primera Cámara del Crimen Gestión Judicial en lo Penal',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1457',
    nombre: 'Segunda Cámara del Crimen Gestión Judicial en lo Penal',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1458',
    nombre: 'Juzgado Penal Colegiado N° 1',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1459',
    nombre: 'Juzgado Contravencional',
    provincia: 'Mendoza',
    ciudad: 'Ciudad De San Martin',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1460',
    nombre: 'Juzgado de Paz Letrado, Contravencional y Tributario',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1461',
    nombre: 'Juzgado de Paz Letrado y Contravencional',
    provincia: 'Mendoza',
    ciudad: 'La Consulta',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1462',
    nombre: 'Juzgado de Paz Letrado, Contravencional y Tributario',
    provincia: 'Mendoza',
    ciudad: 'Tupungato',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1463',
    nombre: 'Gestión Judicial Asociada Civil',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Civil',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1464',
    nombre: 'Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Tupungato',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1465',
    nombre: 'Primer Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1466',
    nombre: 'Segundo Juzgado de Familia',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1467',
    nombre: 'Juzgado en lo Penal de Menores',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1469',
    nombre: 'Primera Cámara del Trabajo, de Paz y Tributario',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Laboral, Paz',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1470',
    nombre: 'Juzgado Penal Colegiado N°1',
    provincia: 'Mendoza',
    ciudad: 'Tunuyan',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1471',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, Minas y Laboral N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1472',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, Minas y Laboral N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1473',
    nombre: 'Cámara de Apelación en lo Penal, Correccional y Contravencional N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1474',
    nombre: 'Cámara de Apelación en lo Penal, Correccional y Contravencional N°2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1475',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1476',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1477',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 3',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1478',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 4',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1479',
    nombre: 'Juzgado en lo Laboral N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1480',
    nombre: 'Juzgado en lo Laboral N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1481',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1482',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1483',
    nombre: 'Juzgado de Niñez y Adolescencia',
    provincia: 'San Luis',
    ciudad: 'Juan Martín de Pueyrredón',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1484',
    nombre: 'Juzgado Penal N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1485',
    nombre: 'Juzgado Penal N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1486',
    nombre: 'Juzgado Penal N° 3',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1487',
    nombre: 'Juzgado de Instrucción en lo Correccional y Contravencional N° 1',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1488',
    nombre: 'Juzgado de Instrucción en lo Correccional y Contravencional N° 2',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1489',
    nombre: 'Juzgado de Primera Instancia en lo Contravencional',
    provincia: 'San Luis',
    ciudad: 'Juan Martín de Pueyrredón',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1490',
    nombre: 'Juzgado de Sentencia en lo Penal, Correccional y Contravencional',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1491',
    nombre: 'Juzgado de Primera Instancia de Ejecución Fiscal',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1492',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, Minas y Laboral N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Civil, Comercial, Minería, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1493',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, Minas y Laboral N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Civil, Comercial, Minería, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1494',
    nombre: 'Cámara de Apelación en lo Penal, Correccional y Contravencional N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1495',
    nombre: 'Cámara de Apelación en lo Penal, Correccional y Contravencional N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1496',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1497',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1498',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial y Minas N° 3',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1499',
    nombre: 'Juzgado en lo Laboral N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1500',
    nombre: 'Juzgado en lo Laboral N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1501',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1502',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1503',
    nombre: 'Juzgado Penal N° 1',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1504',
    nombre: 'Juzgado Penal N° 2',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1505',
    nombre: 'Juzgado Penal N° 3',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1506',
    nombre: 'Juzgado de Instrucción en lo Correccional N° 1 y Contravencional',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1507',
    nombre: 'Juzgado Contravencional',
    provincia: 'San Luis',
    ciudad: 'Villa Mercedes',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1508',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Minas, Laboral, Penal y Correccional y Contravencional',
    provincia: 'San Luis',
    ciudad: 'Concaran',
    fuero: 'Civil, Comercial, Minería, Laboral, Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1509',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial, Minas y laboral',
    provincia: 'San Luis',
    ciudad: 'Concaran',
    fuero: 'Civil, Comercial, Minería, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1510',
    nombre: 'Juzgado de instrucción en lo Penal, Correccional y Contravencional',
    provincia: 'San Luis',
    ciudad: 'Concaran',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1511',
    nombre: 'Juzgado de Sentencia en lo Penal, Correccional y Contravencional',
    provincia: 'San Luis',
    ciudad: 'Concaran',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1512',
    nombre: 'Juzgado de Familia, Niñez Y Adolescencia',
    provincia: 'San Luis',
    ciudad: 'Concaran',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1513',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial, Minas, Laboral y Menores',
    provincia: 'San Luis',
    ciudad: 'Santa Rosa Del Conlara',
    fuero: 'Civil, Comercial, Minería, Laboral, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1514',
    nombre: 'Juzgado de Instrucción en lo Penal, Correccional y Contravencional',
    provincia: 'San Luis',
    ciudad: 'Santa Rosa Del Conlara',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1515',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Minería/Sala Primera',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1516',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Minería/Sala Segunda',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1517',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Minería/Sala Tercera',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1518',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Minería/Sala Cuarta',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1519',
    nombre: 'Cámara de Apelaciones en lo Penal y Correccional/ Sala Primera',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1520',
    nombre: 'Cámara de Apelaciones en lo Penal y Correccional/ Sala Segunda',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1521',
    nombre: 'Cámara de Apelaciones en lo Penal y Correccional/ Sala Tercera',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1522',
    nombre: 'Cámara de Apelaciones del Trabajo/Sala Primera',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1523',
    nombre: 'Cámara de Apelaciones del Trabajo/Sala Segunda',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1524',
    nombre: 'Cámara de Paz Letrada',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1525',
    nombre: 'Cámara de Paz Letrada',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Paz',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1526',
    nombre: 'Juzgados en lo Civil, Comercial y Minería',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1527',
    nombre: 'Primer Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1528',
    nombre: 'Tercer Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1529',
    nombre: 'Cuarto Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1530',
    nombre: 'Quinto Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1531',
    nombre: 'Séptimo Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1532',
    nombre: 'Octavo Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1533',
    nombre: 'Noveno Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1534',
    nombre: 'Décimo Primer Juzgado Civil',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1535',
    nombre: 'Primer Juzgado de Familia',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1536',
    nombre: 'Segundo Juzgado de Familia',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1537',
    nombre: 'Tercer Juzgado de Familia',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1538',
    nombre: 'Primer Juzgado Comercial Especial',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1539',
    nombre: 'Juzgado Contencioso Administrativo',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1540',
    nombre: 'Juzgado Contencioso Administrativo',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1548',
    nombre: 'Primer Juzgado de La Niñez y Adolescencia',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1549',
    nombre: 'Segundo Juzgado de La Niñez y Adolescencia',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1550',
    nombre: 'Primer Juzgado Correccional',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1551',
    nombre: 'Segundo Juzgado Correccional',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1552',
    nombre: 'Tercer Juzgado Correccional',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1553',
    nombre: 'Cuarto Juzgado Correccional',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1554',
    nombre: 'Quinto Juzgado Correccional',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1555',
    nombre: 'Primer Juzgado de Instrucción',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1556',
    nombre: 'Segundo Juzgado de Instrucción',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1557',
    nombre: 'Tercer Juzgado de Instrucción',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1558',
    nombre: 'Cuarto Juzgado de Instrucción',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1559',
    nombre: 'Quinto Juzgado de Instrucción',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1560',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1561',
    nombre: 'Primer Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1562',
    nombre: 'Segundo Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1563',
    nombre: 'Tercer Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1564',
    nombre: 'Cuarto Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1565',
    nombre: 'Quinto Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1566',
    nombre: 'Sexto Juzgado Laboral',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1567',
    nombre: 'Primer Juzgado de Paz Letrado (Gestión Asociada)',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1568',
    nombre: 'Segundo Juzgado de Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1569',
    nombre: 'Tercer Juzgado de Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1570',
    nombre: 'Cuarto Juzgado de Paz Letrado (Gestión Asociada)',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1571',
    nombre: 'Quinto Juzgado de Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1572',
    nombre: 'Sexto Juzgado de Paz Letrado (Gestión Asociada)',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1573',
    nombre: 'Séptimo Juzgado de Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'San Juan',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1574',
    nombre: 'Juzgado de Paz Letrado',
    provincia: 'San Luis',
    ciudad: '25 de Mayo',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1575',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Santa Lucia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1576',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Rawson',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1577',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Chimbas',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1578',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Rivadavia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1579',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Pocito',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1580',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Sarmiento',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1581',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Caucete',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1582',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: '9 De Julio',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1583',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Angaco',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1584',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Albardón',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1585',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Ullúm',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1586',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Zonda',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1587',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Valle Fértil',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1588',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Calingasta',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1589',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Luis',
    ciudad: 'Iglesia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1590',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Juan',
    ciudad: 'Valle Fértil',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1591',
    nombre: 'Juzgado Único 1° instancia',
    provincia: 'San Juan',
    ciudad: 'San Jose De Jachal',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1592',
    nombre: 'Juzgado De Paz Letrado',
    provincia: 'San Juan',
    ciudad: 'San Jose De Jachal',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1593',
    nombre: 'Cámara Primera en lo Civil, Comercial y de Minas',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1594',
    nombre: 'Cámara Segunda en lo Civil, Comercial y de Minas',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1595',
    nombre: 'Cámara Tercera en lo Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1596',
    nombre: 'Cámara Cuarta en lo Civil, Comercial y de Minas',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1597',
    nombre: 'Cámara Primera en lo Civil, Comercial y de Minas N° 4',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Civil, Comercial, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1598',
    nombre: 'Juzgado del Trabajo y Conciliación N° 1',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1599',
    nombre: 'Juzgado del Trabajo y Conciliación N° 2',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1600',
    nombre: 'Juzgado del Trabajo y Conciliación N° 3',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1601',
    nombre: 'Juzgado de Paz Letrado N° 1',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1602',
    nombre: 'Juzgado de Paz Letrado N° 2',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1603',
    nombre: 'Juzgado de Paz Letrado N° 3',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1604',
    nombre: 'Juzgado de Paz Letrado N° 4',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1605',
    nombre: 'Juzgado de Menores',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1606',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional N° 1',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1607',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional N° 2',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1608',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional N° 3',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1609',
    nombre: 'Juzgado de Instrucción en Violencia de Género y Protección Integral de Menores N° 1',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Violencia de Género, Menores',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1610',
    nombre: 'Juzgado de Instrucción en Violencia de Género y Protección Integral de Menores N° 2',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Violencia de Género, Menores',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1611',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1612',
    nombre: 'Cámara Primera en lo Civil, Comercial, de Minas, Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Civil, Comercial, Minería, Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1613',
    nombre: 'Cámara Segunda en lo Civil, Comercial, de Minas, Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Civil, Comercial, Minería, Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1614',
    nombre: 'Juzgado del Trabajo y Conciliación',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1615',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional N° 1',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1616',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional N° 2',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1617',
    nombre: 'Juzgado de Paz Letrado',
    provincia: 'La Rioja',
    ciudad: 'Chilecito',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1618',
    nombre: 'Juzgado de Instrucción en lo Criminal y correccional',
    provincia: 'La Rioja',
    ciudad: 'Villa Union',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1619',
    nombre: 'Juzgado de Paz Letrado, de Trabajo y Conciliación',
    provincia: 'La Rioja',
    ciudad: 'Villa Union',
    fuero: 'Paz, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1620',
    nombre: 'Cámara en lo Civil, Comercial, de Minas, Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Chamical',
    fuero: 'Civil, Comercial, Minería, Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1621',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Chamical',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1622',
    nombre: 'Juzgado de Paz Letrado, del Trabajo y Conciliación',
    provincia: 'La Rioja',
    ciudad: 'Chamical',
    fuero: 'Paz, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1623',
    nombre: 'Cámara en lo Civil, Comercial, de Minas, Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Aimogasta',
    fuero: 'Civil, Comercial, Minería, Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1624',
    nombre: 'Juzgado de Instrucción en lo Criminal y Correccional',
    provincia: 'La Rioja',
    ciudad: 'Aimogasta',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1625',
    nombre: 'Juzgado de Paz Letrado, Trabajo y Conciliación',
    provincia: 'La Rioja',
    ciudad: 'Aimogasta',
    fuero: 'Paz, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1626',
    nombre: 'Juzgado de Instrucción en lo Criminal y correccional',
    provincia: 'La Rioja',
    ciudad: 'Olta',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1627',
    nombre: 'Juzgado de Paz Letrado, Trabajo y Conciliación',
    provincia: 'La Rioja',
    ciudad: 'Olta',
    fuero: 'Paz, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1628',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, del Trabajo y de Minas de 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1629',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, del Trabajo y de Minas de 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil, Comercial, Laboral, Minería',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1630',
    nombre: 'Cámara de Apelación en lo Civil, Comercial, Laboral, Minas, Menores y Familia de 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil, Comercial, Laboral, Minería, Menores, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1631',
    nombre: 'Cámara de Apelación en lo Penal',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1632',
    nombre: 'Cámara de Sentencia en lo Criminal de 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1633',
    nombre: 'Cámara de Sentencia en lo Criminal de 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1634',
    nombre: 'Cámara de Sentencia en lo Criminal de 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1635',
    nombre: 'Cámara de Apelaciones en lo Penal y de Exhortos',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1636',
    nombre: 'Juzgado de Primera Instancia en lo Civil 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1637',
    nombre: 'Juzgado de Primera Instancia en lo Civil 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1638',
    nombre: 'Juzgado de Primera Instancia en lo Civil 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1639',
    nombre: 'Juzgado de Primera Instancia en lo Civil 4ta Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1640',
    nombre: 'Juzgado de Primera Instancia en lo Civil 5ta Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1641',
    nombre: 'Juzgado de Primera Instancia en lo Civil 6ta Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1642',
    nombre: 'Juzgado de Primera Instancia en lo Comercial y de Ejecución de 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1643',
    nombre: 'Juzgado de Primera Instancia en lo Comercial y de Ejecución de 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1644',
    nombre: 'Juzgado de Primera Instancia en lo Comercial y de Ejecución de 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1645',
    nombre: 'Juzgado de Ejecución Fiscal',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Fiscal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1646',
    nombre: 'Juzgado de Primera Instancia del Trabajo 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1647',
    nombre: 'Juzgado de Primera Instancia del Trabajo 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1648',
    nombre: 'Juzgado de Primera Instancia del Trabajo 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1649',
    nombre: 'Juzgado de Primera Instancia del Trabajo 4ta Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1650',
    nombre: 'Juzgado de Responsabilidad Juvenil N° 1',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1651',
    nombre: 'Juzgado de Responsabilidad Juvenil N° 2',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1652',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1653',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1654',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1655',
    nombre: 'Juzgado de Ejecución Penal N° 1',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1656',
    nombre: 'Juzgado de Ejecución Penal N° 2',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1657',
    nombre: 'Juzgado de Control de Garantías N° 1',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1658',
    nombre: 'Juzgado de Control de Garantías N° 2',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1659',
    nombre: 'Juzgado de Control de Garantías N° 3',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1660',
    nombre: 'Juzgado de Control de Garantías N° 4',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1661',
    nombre: 'Juzgado Correccional de 1ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1662',
    nombre: 'Juzgado Correccional de 2da Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1663',
    nombre: 'Juzgado Correccional de 3ra Nominación',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1664',
    nombre: 'Juzgado de Primera Instancia en lo Civil , Comercial y Familia',
    provincia: 'Catamarca',
    ciudad: 'Belen',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1665',
    nombre: 'Juzgado de Control de Garantías Laboral y Menores',
    provincia: 'Catamarca',
    ciudad: 'Belen',
    fuero: 'Laboral, Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1666',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial Y Familia',
    provincia: 'Catamarca',
    ciudad: 'Andalgala',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1667',
    nombre: 'Juzgado de Control de Garantías Laboral y Menores',
    provincia: 'Catamarca',
    ciudad: 'Andalgala',
    fuero: 'Laboral, Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1668',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial y Familia',
    provincia: 'Catamarca',
    ciudad: 'Santa Maria',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1669',
    nombre: 'Juzgado de Control de Garantías Laboral y Menores',
    provincia: 'Catamarca',
    ciudad: 'Santa Maria',
    fuero: 'Laboral, Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1670',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial y Familia',
    provincia: 'Catamarca',
    ciudad: 'Recreo',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1671',
    nombre: 'Juzgado de Control de Garantías Laboral y Menores',
    provincia: 'Catamarca',
    ciudad: 'Recreo',
    fuero: 'Laboral, Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1672',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial y Familia',
    provincia: 'Catamarca',
    ciudad: 'Tinogasta',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1673',
    nombre: 'Juzgado de Control de Garantías Laboral y Menores',
    provincia: 'Catamarca',
    ciudad: 'Tinogasta',
    fuero: 'Laboral, Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1674',
    nombre: 'Juzgado del Trabajo VIII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1675',
    nombre: 'Cámara en lo Civil y Comercial Común I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1676',
    nombre: 'Cámara en lo Civil y Comercial Común II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1677',
    nombre: 'Cámara en lo Civil y Comercial Común III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1678',
    nombre: 'Juzgado en lo Civil y Comercial Común I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1679',
    nombre: 'Juzgado en lo Civil y Comercial Común II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1680',
    nombre: 'Juzgado en lo Civil y Comercial Común III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1681',
    nombre: 'Juzgado en lo Civil y Comercial Común IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1682',
    nombre: 'Juzgado en lo Civil y Comercial Común V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1683',
    nombre: 'Juzgado en lo Civil y Comercial Común VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1684',
    nombre: 'Juzgado en lo Civil y Comercial Común VII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1685',
    nombre: 'Juzgado en lo Civil y Comercial Común VIII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1686',
    nombre: 'Cámara Civil en Familia y Sucesiones I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1687',
    nombre: 'Cámara Civil en Familia y Sucesiones II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1688',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1689',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1690',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1691',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1692',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1693',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1694',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones VII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1695',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones VIII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1696',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones IX',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1697',
    nombre: 'Cámara del Trabajo I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1698',
    nombre: 'Cámara del Trabajo II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1699',
    nombre: 'Cámara del Trabajo III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1700',
    nombre: 'Cámara del Trabajo IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1701',
    nombre: 'Cámara del Trabajo V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1702',
    nombre: 'Cámara del Trabajo VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1703',
    nombre: 'Juzgado del Trabajo I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1704',
    nombre: 'Juzgado del Trabajo II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1705',
    nombre: 'Juzgado del Trabajo III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1706',
    nombre: 'Juzgado del Trabajo IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1707',
    nombre: 'Juzgado del Trabajo V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1708',
    nombre: 'Juzgado del Trabajo VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1709',
    nombre: 'Juzgado del Trabajo VII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1710',
    nombre: 'Cámara en lo Contencioso y Administrativo I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1711',
    nombre: 'Cámara en lo Contencioso y Administrativo II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1712',
    nombre: 'Cámara en lo Contencioso y Administrativo III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1713',
    nombre: 'Juzgado de Cobros y Apremios I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1714',
    nombre: 'Juzgado de Cobros y Apremios II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1715',
    nombre: 'Cámara en Documentos y Locaciones I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1716',
    nombre: 'Cámara en Documentos y Locaciones II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1717',
    nombre: 'Cámara en Documentos y Locaciones III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1718',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1719',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1720',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1721',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1722',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1723',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1724',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones VII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1725',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones VIII',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1726',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones IX',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1727',
    nombre: 'Cámara en lo Penal Presidencial',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1728',
    nombre: 'Cámara en lo Penal Sala I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1729',
    nombre: 'Cámara en lo Penal Sala II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1730',
    nombre: 'Cámara en lo Penal Sala III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1731',
    nombre: 'Cámara en lo Penal Sala IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1732',
    nombre: 'Cámara en lo Penal Sala V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1733',
    nombre: 'Cámara en lo Penal Sala VI',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1734',
    nombre: 'Cámara de Apelaciones en lo Penal de Instrucción I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1735',
    nombre: 'Cámara de Apelaciones en lo Penal de Instrucción II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1736',
    nombre: 'Juzgado de Instrucción I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1737',
    nombre: 'Juzgado de Instrucción II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1738',
    nombre: 'Juzgado de Instrucción III',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1739',
    nombre: 'Juzgado de Instrucción IV',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1740',
    nombre: 'Juzgado de Instrucción V',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1741',
    nombre: 'Juzgado Correccional en lo Penal I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1742',
    nombre: 'Juzgado Correccional en lo Penal II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1743',
    nombre: 'Juzgado de Menores I',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1744',
    nombre: 'Juzgado de Menores II',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1745',
    nombre: 'Juzgado de Ejecución en lo Penal',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1746',
    nombre: 'Cámara en lo Civil y Comercial Común',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1747',
    nombre: 'Juzgado en lo Civil y Comercial Común I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1748',
    nombre: 'Juzgado en lo Civil y Comercial Común II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1749',
    nombre: 'Juzgado en lo Civil y Comercial Común III',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1750',
    nombre: 'Cámara del Trabajo I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1751',
    nombre: 'Cámara del Trabajo II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1752',
    nombre: 'Juzgado del Trabajo I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1753',
    nombre: 'Juzgado del Trabajo II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1754',
    nombre: 'Juzgado del Trabajo III',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1755',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1756',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1757',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones III',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1758',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones IV',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1759',
    nombre: 'Cámara en lo Civil en Documentos y Locaciones y Familia y Sucesiones',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1760',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1761',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1762',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones III',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1763',
    nombre: 'Juzgado de Cobros y Apremios I',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1764',
    nombre: 'Juzgado de Cobros y Apremios II',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1765',
    nombre: 'Tribunal de Impugnación Penal',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1766',
    nombre: 'Tribunal de Impugnación Penal',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1767',
    nombre: 'Juzgado de Ejecución en lo Penal',
    provincia: 'Tucumán',
    ciudad: 'Concepcion',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1768',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1769',
    nombre: 'Juzgado de Menores',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1770',
    nombre: 'Juzgado en lo Civil y Comercial Común',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1771',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1772',
    nombre: 'Juzgado en lo Civil en Documentos y Locaciones',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1773',
    nombre: 'Juzgado de Instrucción',
    provincia: 'Tucumán',
    ciudad: 'Monteros',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1774',
    nombre: 'Juzgado en lo Civil en Familia y Sucesiones',
    provincia: 'Tucumán',
    ciudad: 'Banda Del Rio Sali',
    fuero: 'Civil, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1775',
    nombre: 'Juzgado Penal de Menores III',
    provincia: 'Tucumán',
    ciudad: 'Banda Del Rio Sali',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1776',
    nombre: 'Tribunal de Impugnación I',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1777',
    nombre: 'Tribunal de Impugnación II',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1778',
    nombre: 'Tribunal de Impugnación III',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1779',
    nombre: 'Tribunal de Impugnación IV',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1780',
    nombre: 'Tribunal de Impugnación V',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1781',
    nombre: 'Tribunal de Juicio / Sala I',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1782',
    nombre: 'Tribunal de Juicio /Sala II',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1783',
    nombre: 'Tribunal de Juicio /Sala III',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1784',
    nombre: 'Tribunal de Juicio /Sala IV',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1785',
    nombre: 'Tribunal de Juicio / Sala V',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1786',
    nombre: 'Tribunal de Juicio /Sala VI',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1787',
    nombre: 'Tribunal de Juicio /Sala VII',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1788',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1789',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1790',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1791',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1792',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1793',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1794',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1795',
    nombre: 'Juzgado de Garantías N° 8',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1796',
    nombre: 'Juzgado de Menores N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1797',
    nombre: 'Juzgado de Menores N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1798',
    nombre: 'Juzgado de Menores N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1799',
    nombre: 'Juzgado de Ejecución y Detención N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1800',
    nombre: 'Juzgado de Ejecución y Detención N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1801',
    nombre: 'Cámara Apelación Civil y Comercial /Sala I',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1802',
    nombre: 'Cámara Apelación Civil y Comercial /Sala II',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1803',
    nombre: 'Cámara Apelación Civil y Comercial /Sala III',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1804',
    nombre: 'Cámara Apelación Civil y Comercial /Sala IV',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1805',
    nombre: 'Cámara Apelación Civil y Comercial /Sala V',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1806',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1807',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1808',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1809',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1810',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1811',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1812',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1813',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1814',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1815',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1816',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1817',
    nombre: 'Juzgado de Personas y Familia N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1818',
    nombre: 'Juzgado de Personas y Familia N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1819',
    nombre: 'Juzgado de Personas y Familia N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1820',
    nombre: 'Juzgado de Personas y Familia N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1821',
    nombre: 'Juzgado de Personas y Familia N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1822',
    nombre: 'Juzgado de Personas y Familia N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1823',
    nombre: 'Juzgado de Procesos Ejecutivos N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1824',
    nombre: 'Juzgado de Procesos Ejecutivos N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1825',
    nombre: 'Juzgado de Procesos Ejecutivos N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1826',
    nombre: 'Juzgado de Procesos Ejecutivos N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1827',
    nombre: 'Juzgado de Concursos, Quiebras y Sociedades N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1828',
    nombre: 'Juzgado de Concursos, Quiebras y Sociedades N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1829',
    nombre: 'Juzgado de Minas y Registro',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Minería',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1830',
    nombre: 'Cámara Apelaciones del Trabajo / Sala I',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1831',
    nombre: 'Cámara Apelaciones del Trabajo / Sala I N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1832',
    nombre: 'Juzgado de Trabajo N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1833',
    nombre: 'Juzgado de Trabajo N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1834',
    nombre: 'Juzgado de Trabajo N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1835',
    nombre: 'Juzgado de Trabajo N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1836',
    nombre: 'Juzgado de Trabajo N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1837',
    nombre: 'Juzgado de Trabajo N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1838',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1839',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1840',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1841',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1842',
    nombre: 'Juzgado del Trabajo N° 5',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1843',
    nombre: 'Juzgado del Trabajo N° 6',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1844',
    nombre: 'Juzgado en lo Contencioso y Administrativo N° 1',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1845',
    nombre: 'Juzgado en lo Contencioso y Administrativo N° 2',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1846',
    nombre: 'Juzgado Civil, Comercial, Laboral, de Personas y Familia y de Garantías.',
    provincia: 'Salta',
    ciudad: 'Cafayate',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia, Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1847',
    nombre: 'Tribunal de Juicio / Sala II',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1848',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1849',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1850',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1851',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1852',
    nombre: 'Juzgado de Personas y Familia N° 1',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1853',
    nombre: 'Juzgado de Personas y Familia N° 2',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1854',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Salta',
    ciudad: 'Metan Viejo',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1855',
    nombre: 'Juzgado Civil, Comercial, Laboral y de Personas y Familia',
    provincia: 'Salta',
    ciudad: 'Joaquin V. Gonzalez',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1856',
    nombre: 'Juzgado de Garantías',
    provincia: 'Salta',
    ciudad: 'Joaquin V. Gonzalez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1857',
    nombre: 'Tribunal del Juicio / Sala I',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1858',
    nombre: 'Tribunal del Juicio / Sala II',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1859',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1860',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1861',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1862',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1863',
    nombre: 'Juzgado de Personas y Familia N° 1',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1864',
    nombre: 'Juzgado de Personas y Familia N° 2',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1865',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1866',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1867',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Salta',
    ciudad: 'Orán',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1868',
    nombre: 'Tribunal del Juicio / Sala I',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1869',
    nombre: 'Tribunal del Juicio / Sala II',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1870',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1871',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1872',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1873',
    nombre: 'Juzgado de Personas y Familia N° 1',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1874',
    nombre: 'Juzgado de Personas y Familia N° 2',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1875',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Salta',
    ciudad: 'Tartagal',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1876',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala I',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1877',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala II',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1878',
    nombre: 'Cámara Primera en Lo Criminal',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1880',
    nombre: 'Cámara Segunda en lo Criminal',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1881',
    nombre: 'Tribunal del Trabajo / Sala I',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1882',
    nombre: 'Tribunal del Trabajo / Sala II',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1883',
    nombre: 'Tribunal del Trabajo / Sala III',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1884',
    nombre: 'Tribunal de Familia',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1885',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 1',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1886',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 2',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1887',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 3',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1888',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 4',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1889',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 5',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1890',
    nombre: 'Juzgado de 1ª Instancia en lo Civil y Comercial N° 6',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1891',
    nombre: 'Juzgado de 1ª Instancia en lo Civil, Comercial, del Trabajo y de Menores N°7',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Civil, Comercial, Laboral, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1892',
    nombre: 'Juzgado de Instrucción y Correccional N° 1',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1893',
    nombre: 'Juzgado de Instrucción y Correccional N° 2',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1894',
    nombre: 'Juzgado de Instrucción y Correccional N° 3',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1895',
    nombre: 'Juzgado de Instrucción y Correccional N° 4',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1896',
    nombre: 'Juzgado de Instrucción y Correccional N° 5',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1897',
    nombre: 'Juzgado de Instrucción y Correccional N° 6',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1898',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1899',
    nombre: 'Juzgado de Instrucción y Correccional Contra el Narcocrimen',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1900',
    nombre: 'Juzgado de 1a Instancia de Menores',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1901',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial y del Trabajo',
    provincia: 'Formosa',
    ciudad: 'Clorinda',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1902',
    nombre: 'Juzgado de Instrucción y Correccional N° 1',
    provincia: 'Formosa',
    ciudad: 'Clorinda',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1903',
    nombre: 'Juzgado de Instrucción y Correccional N° 2',
    provincia: 'Formosa',
    ciudad: 'Clorinda',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1904',
    nombre: 'Juzgado de 1a Instancia de Menores',
    provincia: 'Formosa',
    ciudad: 'Clorinda',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1905',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, del Trabajo y de Menores',
    provincia: 'Formosa',
    ciudad: 'Las Lomitas',
    fuero: 'Civil, Comercial, Laboral, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1906',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Formosa',
    ciudad: 'Las Lomitas',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1907',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1908',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1909',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1910',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala 4',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1911',
    nombre: 'Cámara de Apelaciones en lo Criminal y Correccional',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1912',
    nombre: 'Cámara Primera en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1913',
    nombre: 'Cámara Segunda en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1914',
    nombre: 'Cámara Tercera en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1915',
    nombre: 'Cámara de Apelaciones del Trabajo / Sala 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1916',
    nombre: 'Cámara de Apelaciones del Trabajo / Sala 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1917',
    nombre: 'Cámara en lo Contencioso Administrativo / Sala 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1918',
    nombre: 'Cámara en lo Contencioso Administrativo / Sala 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1919',
    nombre: 'Juzgado Correccional N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1920',
    nombre: 'Juzgado Correccional N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1921',
    nombre: 'Juzgado Correccional N° 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1922',
    nombre: 'Juzgado Civil Y Comercial N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1923',
    nombre: 'Juzgado Civil Y Comercial N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1924',
    nombre: 'Juzgado Civil Y Comercial N° 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1925',
    nombre: 'Juzgado Civil Y Comercial N° 4',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1926',
    nombre: 'Juzgado Civil Y Comercial N° 5',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1927',
    nombre: 'Juzgado Civil Y Comercial N° 6',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1928',
    nombre: 'Juzgado Civil Y Comercial N° 7',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1929',
    nombre: 'Juzgado Civil Y Comercial N° 8',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1930',
    nombre: 'Juzgado Civil Y Comercial N° 9',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1931',
    nombre: 'Juzgado Civil Y Comercial N° 10',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1932',
    nombre: 'Juzgado Civil Y Comercial N° 11',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1933',
    nombre: 'Juzgado Civil Y Comercial N° 12',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1934',
    nombre: 'Juzgado Civil Y Comercial N° 13',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1935',
    nombre: 'Juzgado Civil Y Comercial N° 14',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1936',
    nombre: 'Juzgado Civil Y Comercial N° 15',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1937',
    nombre: 'Juzgado Civil Y Comercial N° 16',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1938',
    nombre: 'Juzgado Civil Y Comercial N° 17',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1939',
    nombre: 'Juzgado Civil Y Comercial N° 18',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1940',
    nombre: 'Juzgado Civil Y Comercial N° 19',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1941',
    nombre: 'Juzgado Civil Y Comercial N° 20',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1942',
    nombre: 'Juzgado Civil Y Comercial N° 21',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1943',
    nombre: 'Juzgado Civil Y Comercial N° 22',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1944',
    nombre: 'Juzgado Civil Y Comercial N° 23',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1945',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1946',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1947',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1948',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 4',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1949',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 5',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1950',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia N° 6',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1951',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1952',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1953',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1954',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1955',
    nombre: 'Juzgado De Garantías N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1956',
    nombre: 'Juzgado De Garantías N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1957',
    nombre: 'Juzgado De Garantías N° 3',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1958',
    nombre: 'Juzgado De Ejecución Penal N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1959',
    nombre: 'Juzgado De Ejecución Penal N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1960',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1961',
    nombre: 'Juzgado de Paz Letrado N° 1',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1962',
    nombre: 'Juzgado de Paz Letrado N° 2',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1963',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Laboral /Sala 1°',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1964',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Laboral /Sala 2°',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1965',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y Laboral /Sala 3°',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1966',
    nombre: 'Cámara Primera en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1967',
    nombre: 'Cámara Segunda en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1968',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1969',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1970',
    nombre: 'Juzgado de Procesos Ejecutivos, Concursos y Quiebras',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1971',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1972',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1973',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1974',
    nombre: 'Juzgado de Garantías',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1975',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1976',
    nombre: 'Juzgado Correccional N° 1',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1977',
    nombre: 'Juzgado Correccional N° 2',
    provincia: 'Chaco',
    ciudad: 'Presidencia Roque Saenz Peña',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1978',
    nombre: 'Cámara del Crimen',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1979',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y del Trabajo',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1980',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1981',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1984',
    nombre: 'Juzgados de Niñez, Adolescencia y Familia',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1985',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1986',
    nombre: 'Juzgado Correccional',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1987',
    nombre: 'Juzgado de Garantía',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1988',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1989',
    nombre: 'Juzgado de Paz Letrado',
    provincia: 'Chaco',
    ciudad: 'Villa Angela',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1990',
    nombre: 'Cámara en lo Criminal',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1991',
    nombre: 'Juzgado Civil, Comercial y Laboral N° 1',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1992',
    nombre: 'Juzgado Civil, Comercial y Laboral N° 2',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1993',
    nombre: 'Juzgado de Garantías',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1994',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1995',
    nombre: 'Juzgado Correccional',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1996',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1997',
    nombre: 'Juzgado de Paz Letrado',
    provincia: 'Chaco',
    ciudad: 'Charata',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1998',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Chaco',
    ciudad: 'General Jose De San Martin',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-1999',
    nombre: 'Juzgado de Garantías',
    provincia: 'Chaco',
    ciudad: 'General Jose De San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2000',
    nombre: 'Juzgado Correccional',
    provincia: 'Chaco',
    ciudad: 'General Jose De San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2001',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Chaco',
    ciudad: 'General Jose De San Martin',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2002',
    nombre: 'Juzgado de Niñez, Adolescencia y Familia',
    provincia: 'Chaco',
    ciudad: 'General Jose De San Martin',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2004',
    nombre: 'Cámara de Apelaciones',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2005',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2006',
    nombre: 'Juzgado Correccional',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2007',
    nombre: 'Juzgado de Garantías',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2008',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2009',
    nombre: 'Juzgados de Niñez, Adolescencia y Familia',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2010',
    nombre: 'Juzgado de Paz Letrado',
    provincia: 'Chaco',
    ciudad: 'Juan Jose Castelli',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2011',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, de Familia y Fiscal Tributaria / Sala I',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil, Comercial, Familia, Fiscal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2012',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, de Familia y Fiscal Tributaria / Sala II',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil, Comercial, Familia, Fiscal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2013',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, de Familia y Fiscal Tributaria / Sala III',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil, Comercial, Familia, Fiscal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2014',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, de Familia y Fiscal Tributaria / Sala IV',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil, Comercial, Familia, Fiscal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2015',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, de Familia y Fiscal Tributaria / Sala V',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil, Comercial, Familia, Fiscal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2016',
    nombre: 'Cámara de Apelaciones en lo Laboral',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2017',
    nombre: 'Juzgado de 1° Instancia en lo Civil y Comercial N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2018',
    nombre: 'Juzgado de 1° Instancia en lo Civil y Comercial N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2019',
    nombre: 'Juzgado de 1° Instancia en lo Civil y Comercial N° 3',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2020',
    nombre: 'Juzgado de 1° Instancia en lo Civil y Comercial N° 4',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2021',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 5',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2022',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 6',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2023',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 7',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2024',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 8',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2025',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2026',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2027',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2028',
    nombre: 'Cámara de Apelaciones en lo Penal y Menores',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Penal, Menores',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2029',
    nombre: 'Tribunal Penal N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2030',
    nombre: 'Tribunal Penal N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2031',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2032',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2033',
    nombre: 'Juzgado de Instrucción N° 3',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2034',
    nombre: 'Juzgado de Instrucción N° 6',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2035',
    nombre: 'Juzgado de Instrucción N° 7',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2036',
    nombre: 'Juzgado Correccional y de Menores N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Correccional, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2037',
    nombre: 'Juzgado Correccional y de Menores N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Correccional, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2038',
    nombre: 'Juzgado de Instrucción N° 4',
    provincia: 'Misiones',
    ciudad: 'Apostoles',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2039',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Laboral, de Familia y Violencia Familiar',
    provincia: 'Misiones',
    ciudad: 'Jardin America',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2040',
    nombre: 'Juzgado de Instrucción N° 5',
    provincia: 'Misiones',
    ciudad: 'Jardin America',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2041',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Laboral y de Familia',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2042',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2043',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 2',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2044',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 3',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2045',
    nombre: 'Juzgado de 1a Instancia en lo Laboral N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2046',
    nombre: 'Juzgado de 1a Instancia de Familia N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2047',
    nombre: 'Tribunal Penal N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2048',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2049',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2050',
    nombre: 'Juzgado en lo Correccional y de Menores N° 1',
    provincia: 'Misiones',
    ciudad: 'Obera',
    fuero: 'Correccional, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2051',
    nombre: 'Juzgado de Instrucción N°3',
    provincia: 'Misiones',
    ciudad: 'San Vicente',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2052',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Laboral y de Familia',
    provincia: 'Misiones',
    ciudad: 'San Vicente',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2053',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Laboral, de Familia y de Violencia Familiar',
    provincia: 'Misiones',
    ciudad: 'Aristobulo Del Valle',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2054',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial, Laboral y de Familia',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2055',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2056',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial N° 2',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2057',
    nombre: 'Juzgado de 1a Instancia en lo Laboral N° 1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2058',
    nombre: 'Juzgado de 1a Instancia en lo Laboral N° 2',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2059',
    nombre: 'Tribunal Penal N°1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2060',
    nombre: 'Juzgado de Familia N°1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2061',
    nombre: 'Juzgado de Instrucción N°1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2062',
    nombre: 'Juzgado de Instrucción N°2',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2063',
    nombre: 'Juzgado en lo Correccional y de Menores N° 1',
    provincia: 'Misiones',
    ciudad: 'Eldorado',
    fuero: 'Correccional, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2064',
    nombre: 'Juzgado de Primera Instancia en lo Civil, Comercial, Laboral, de Familia y Violencia Familiar N° 3',
    provincia: 'Misiones',
    ciudad: 'San Pedro',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2065',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial y Laboral',
    provincia: 'Misiones',
    ciudad: 'Puerto Rico',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2066',
    nombre: 'Juzgado de Familia y Violencia Familiar N° 2',
    provincia: 'Misiones',
    ciudad: 'Puerto Rico',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2067',
    nombre: 'Juzgado de Instrucción N° 3',
    provincia: 'Misiones',
    ciudad: 'Puerto Rico',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2068',
    nombre: 'Juzgado de 1a Instancia Civil, Comercial y Laboral',
    provincia: 'Misiones',
    ciudad: 'Puerto Iguazu',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2069',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Misiones',
    ciudad: 'Puerto Iguazu',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2070',
    nombre: 'Juzgado en lo Correccional y de Menores N° 1',
    provincia: 'Misiones',
    ciudad: 'Puerto Iguazu',
    fuero: 'Correccional, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2071',
    nombre: 'Juzgado de Familia y Violencia Familiar N° 1',
    provincia: 'Misiones',
    ciudad: 'Puerto Iguazu',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2072',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Misiones',
    ciudad: 'Leandro N. Alem',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2073',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Laboral y de Familia N° 2',
    provincia: 'Misiones',
    ciudad: 'Leandro N. Alem',
    fuero: 'Civil, Comercial, Laboral, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2074',
    nombre: 'Juzgado de Paz Contravencional',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2075',
    nombre: 'Juzgado de Paz Civil y Comercial N° 1',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial, Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2076',
    nombre: 'Juzgado de Paz Civil y Comercial N° 2',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'Civil y Comercial, Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2077',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala I',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2078',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala II',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2079',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala III',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2080',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala IV',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2081',
    nombre: 'Cámara de Apelaciones en lo Laboral',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2082',
    nombre: 'Cámara de Apelaciones en lo Criminal',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2083',
    nombre: 'Cámara de Apelaciones en lo Contencioso Administrativo y Electorallll',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2084',
    nombre: 'Tribunal Oral Penal N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2085',
    nombre: 'Tribunal Oral Penal N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2086',
    nombre: 'Juzgado de Ejecución Tributaria',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Fiscal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2087',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2088',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2093',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2094',
    nombre: 'Jugado Civil y Comercial N° 6',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2095',
    nombre: 'Jugado Civil y Comercial N° 7',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2096',
    nombre: 'Jugado Civil y Comercial N° 8',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2097',
    nombre: 'Jugado Civil y Comercial N° 9',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2098',
    nombre: 'Juzgado de familia N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2102',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2103',
    nombre: 'Juzgado laboral N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2104',
    nombre: 'Juzgado laboral N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2105',
    nombre: 'Juzgado laboral N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2106',
    nombre: 'Juzgado laboral N° 4',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2107',
    nombre: 'Juzgado de Menores N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2108',
    nombre: 'Juzgado de Menores N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2109',
    nombre: 'Juzgado de Menores N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2110',
    nombre: 'Juzgado de Ejecución de Condenas',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2111',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2112',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2113',
    nombre: 'Juzgado de Instrucción N° 3',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2114',
    nombre: 'Juzgado de Instrucción N° 4',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2115',
    nombre: 'Juzgado de Instrucción N° 5',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2116',
    nombre: 'Juzgado de Instrucción N° 6',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2117',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2118',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2119',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Bella Vista',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2120',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Bella Vista',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2121',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Saladas',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2122',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Saladas',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2123',
    nombre: 'Juzgado Civil, Comercial, Familia, Menores y de Paz',
    provincia: 'Corrientes',
    ciudad: 'Empedrado',
    fuero: 'Civil, Comercial, Familia, Menores, Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2124',
    nombre: 'Juzgado Civil, Comercial, Laboral, Familia y Menores',
    provincia: 'Corrientes',
    ciudad: 'Ituzaingo',
    fuero: 'Civil, Comercial, Laboral, Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2125',
    nombre: 'Cámara de Apelaciones en lo Civil, Comercial y laboral',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2126',
    nombre: 'Tribunal Oral Penal',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2127',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2128',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2129',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2130',
    nombre: 'Juzgado de Familia',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2131',
    nombre: 'Juzgado de Menores',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2132',
    nombre: 'Juzgado Laboral',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2133',
    nombre: 'Juzgado de Instrucción N° 1',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2134',
    nombre: 'Juzgado de Instrucción N° 2',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'General',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2135',
    nombre: 'Juzgado de Instrucción y Correccional N° 3',
    provincia: 'Corrientes',
    ciudad: 'Goya',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2136',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Corrientes',
    ciudad: 'Esquina',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2137',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Esquina',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2138',
    nombre: 'Juzgado Civil, Comercial, Familia, Menores y de Paz',
    provincia: 'Corrientes',
    ciudad: 'Itati',
    fuero: 'Civil, Comercial, Familia, Menores, Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2139',
    nombre: 'Cámara de Apelaciones Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Curuzú Cuatiá',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2140',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Curuzú Cuatiá',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2141',
    nombre: 'Juzgado Civil, Comercial y Contencioso Administrativo',
    provincia: 'Corrientes',
    ciudad: 'Curuzú Cuatiá',
    fuero: 'Civil, Comercial, Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2142',
    nombre: 'Juzgado de Familia y Menores',
    provincia: 'Corrientes',
    ciudad: 'Curuzú Cuatiá',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2143',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Curuzú Cuatiá',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2144',
    nombre: 'Cámara de Apelaciones en lo Criminal',
    provincia: 'Corrientes',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2145',
    nombre: 'Tribunal Oral Penal',
    provincia: 'Corrientes',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2146',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Mercedes',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2147',
    nombre: 'Juzgado de Menores y Familia',
    provincia: 'Corrientes',
    ciudad: 'Mercedes',
    fuero: 'Menores, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2148',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Mercedes',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2149',
    nombre: 'Tribunal Oral Penal',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2150',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2151',
    nombre: 'Juzgado Civil, Comercial Contencioso Administrativo',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Civil, Comercial, Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2152',
    nombre: 'Juzgado de Familia',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2153',
    nombre: 'Juzgado de Instrucción y Correccional N° 1',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2154',
    nombre: 'Juzgado de Instrucción y Correccional N° 2',
    provincia: 'Corrientes',
    ciudad: 'Paso de los Libres',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2155',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Monte Caseros',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2156',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Corrientes',
    ciudad: 'Monte Caseros',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2157',
    nombre: 'Juzgado Civil y Comercial, Familia y Menores',
    provincia: 'Corrientes',
    ciudad: 'Monte Caseros',
    fuero: 'Civil y Comercial, Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2158',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Monte Caseros',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2159',
    nombre: 'Cámara de Apelaciones Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Santo Tomé',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2160',
    nombre: 'Tribunal Oral Penal',
    provincia: 'Corrientes',
    ciudad: 'Santo Tomé',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2161',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Santo Tomé',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2162',
    nombre: 'Juzgado Civil, Comercial – Menores y Familia',
    provincia: 'Corrientes',
    ciudad: 'Santo Tomé',
    fuero: 'Civil, Comercial, Menores, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2163',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Santo Tomé',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2164',
    nombre: 'Juzgado Civil, Comercial y Laboral, Familia y Menores',
    provincia: 'Corrientes',
    ciudad: 'Gdor. Valentín Virasoro',
    fuero: 'Civil, Comercial, Laboral, Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2165',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Gdor. Valentín Virasoro',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2166',
    nombre: 'Juzgado Civil, Comercial y Laboral',
    provincia: 'Corrientes',
    ciudad: 'Ituzaingó',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2167',
    nombre: 'Juzgado de Instrucción y Correccional',
    provincia: 'Corrientes',
    ciudad: 'Ituzaingó',
    fuero: 'Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2168',
    nombre: 'Cámara de Casación Penal',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2169',
    nombre: 'Tribunal de Juicio y Apelaciones /Sala del Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2170',
    nombre: 'Tribunal de Juicio y Apelaciones / Sala Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2171',
    nombre: 'Tribunal de Juicio y Apelaciones / Sala Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2172',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2173',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2174',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2175',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2176',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2177',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2178',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2179',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2180',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2181',
    nombre: 'Juzgado Civil y Comercial N°6',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2182',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2183',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2184',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2185',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2186',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2187',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2188',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Crespo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2189',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'Crespo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2190',
    nombre: 'Juzgado de Familia y Penal de Niños, Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'Crespo',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2191',
    nombre: 'Juzgado de Garantías',
    provincia: 'Entre Ríos',
    ciudad: 'Diamante',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2192',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'Diamante',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2193',
    nombre: 'Juzgado de Familia y Menores',
    provincia: 'Entre Ríos',
    ciudad: 'Diamante',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2194',
    nombre: 'Tribunal de Juicio y Apelaciones',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2195',
    nombre: 'Juzgado de Garantía y Transición N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2196',
    nombre: 'Juzgado de Garantía y Transición N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2197',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2198',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2199',
    nombre: 'Juzgado del Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2200',
    nombre: 'Juzgado de Familia',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguay',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2201',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Victoria',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2202',
    nombre: 'Juzgados Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Victoria',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2203',
    nombre: 'Juzgados Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Victoria',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2204',
    nombre: 'Juzgado de Familia, Niños y Adolescentes y Penal de Menores',
    provincia: 'Entre Ríos',
    ciudad: 'Victoria',
    fuero: 'Familia, Menores, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2205',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'La Paz',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2206',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'La Paz',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2207',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'La Paz',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2208',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Rosario Del Tala',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2209',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Rosario Del Tala',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2210',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Rosario Del Tala',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2211',
    nombre: 'Juzgado de Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'Rosario Del Tala',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2212',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'Rosario Del Tala',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2213',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Villaguay',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2214',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'Villaguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2215',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'Villaguay',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2216',
    nombre: 'Juzgado de Garantías y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Nogoya',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2217',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Nogoya',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2218',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Nogoya',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2219',
    nombre: 'Juzgado de Familia y Penal de Menores de Niños y Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'Nogoya',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2220',
    nombre: 'Cámara de Apelaciones',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2221',
    nombre: 'Tribunal de Juicio y Apelaciones / Sala Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Civil y Comercial',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2222',
    nombre: 'Tribunal de Juicio y Apelaciones / Sala de Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2223',
    nombre: 'Cámara Contencioso Administrativo',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2224',
    nombre: 'Juzgado de Garantía y Transición N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2225',
    nombre: 'Juzgado de Garantía y Transición N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2226',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2227',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2228',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2229',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2230',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2231',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2232',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2233',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concepcion Del Uruguay',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2234',
    nombre: 'Juzgado de Garantías',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2235',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2236',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2237',
    nombre: 'Juzgado de Familia',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2238',
    nombre: 'Juzgado de Garantías',
    provincia: 'Entre Ríos',
    ciudad: 'Federacion',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2239',
    nombre: 'Juzgado Civil y Comercial',
    provincia: 'Entre Ríos',
    ciudad: 'Federacion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2240',
    nombre: 'Juzgado de Garantías y Transición – con Competencia Civil, Comercial y Laboral',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'Civil, Comercial, Laboral, General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2241',
    nombre: 'Juzgado de Familia y Menores',
    provincia: 'Entre Ríos',
    ciudad: 'Feliciano',
    fuero: 'Familia, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2242',
    nombre: 'Tribunal de Juicio y Apelaciones',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2243',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala I',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2244',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial / Sala II',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2245',
    nombre: 'Juzgado de Garantías y Transición N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2246',
    nombre: 'Juzgado de Garantías y Transición N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2247',
    nombre: 'Juzgado de Ejecución de Penas y Medidas de Seguridad',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2248',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2249',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2250',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2251',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2252',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2253',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2254',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2255',
    nombre: 'Juzgado de Familia y Penal de Niños y Adolescentes N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Gualeguaychu',
    fuero: 'Familia, Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2256',
    nombre: 'Juzgado de Garantía y Transición',
    provincia: 'Entre Ríos',
    ciudad: 'Federal',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2257',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Federal',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2258',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Federal',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2259',
    nombre: 'Juzgado de Familia, Niños y Adolescentes y Penal de Menores',
    provincia: 'Entre Ríos',
    ciudad: 'Federal',
    fuero: 'Familia, Menores, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2260',
    nombre: 'Juzgado Civil, Comercial y del Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'Chajari',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2261',
    nombre: 'Juzgado Civil, Comercial y del Trabajo',
    provincia: 'Entre Ríos',
    ciudad: 'San Salvador',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2262',
    nombre: 'Tribunal de Juicio y Apelaciones',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2263',
    nombre: 'Cámara de Casación Penal',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2264',
    nombre: 'Cámara Segunda Civil y Comercial / Sala I',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2265',
    nombre: 'Cámara Segunda Civil y Comercial / Sala II',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2266',
    nombre: 'Cámara Segunda Civil y Comercial / Sala III',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2267',
    nombre: 'Cámara Tercera Laboral / Sala I',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2268',
    nombre: 'Cámara Tercera Laboral / Sala II',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2269',
    nombre: 'Cámara en lo Contencioso Administrativo',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2270',
    nombre: 'Juzgado de Garantía N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2271',
    nombre: 'Juzgado de Garantía N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2272',
    nombre: 'Juzgado de Garantía N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2273',
    nombre: 'Juzgado de Garantía N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2274',
    nombre: 'Juzgado de Garantía N° 5',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2275',
    nombre: 'Juzgado de Garantía N° 6',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2276',
    nombre: 'Juzgado de Transición N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2277',
    nombre: 'Juzgado de Transición N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2278',
    nombre: 'Juzgado Civil y Comercial N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2279',
    nombre: 'Juzgado Civil y Comercial N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2280',
    nombre: 'Juzgado Civil y Comercial N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2281',
    nombre: 'Juzgado Civil y Comercial N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2282',
    nombre: 'Juzgado Civil y Comercial N° 5',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2283',
    nombre: 'Juzgado Civil y Comercial N° 6',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2284',
    nombre: 'Juzgado Civil y Comercial N° 7',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2285',
    nombre: 'Juzgado Civil y Comercial N° 8',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2286',
    nombre: 'Juzgado Civil y Comercial N° 9',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2287',
    nombre: 'Juzgado Civil y Comercial N° 10',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2288',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2289',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2290',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2291',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2292',
    nombre: 'Juzgado Penal de Niños y Adolescentes',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2293',
    nombre: 'Juzgado de Ejecución de Penas y Medidas de Seguridad',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2294',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2295',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2296',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2297',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Entre Ríos',
    ciudad: 'Concordia',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2298',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2299',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2300',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2301',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2302',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2303',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2304',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2305',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2306',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2307',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2308',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2309',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2310',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2311',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2312',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2313',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2315',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2321',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'General Alvear',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2322',
    nombre: 'Juzgado de Garantías N° 2 - Azul N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2323',
    nombre: 'Juzgado de Garantías N° 2 - Azul N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2324',
    nombre: 'Juzgado en lo Correccional',
    provincia: 'Buenos Aires',
    ciudad: 'Olavarria',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2325',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2326',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2327',
    nombre: 'Juzgado en lo Correccional',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2328',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2329',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2330',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2331',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2332',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2333',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2334',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2335',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2336',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1 N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2337',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1 N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2338',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2339',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2340',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2341',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2342',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2343',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2344',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2345',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2346',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2347',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2348',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2349',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2350',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2351',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2352',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2353',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2354',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2355',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2357',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2358',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2359',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2360',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2361',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2362',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2363',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2364',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2365',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2366',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2367',
    nombre: 'Juzgado de Garantías',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2368',
    nombre: 'Juzgado en lo Correccional',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2369',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2370',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2371',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2372',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2373',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2374',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2375',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2376',
    nombre: 'Tribunal en lo Criminal',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2378',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2379',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Abasto',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2380',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2381',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2382',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2383',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2384',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2385',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2386',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2387',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2388',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2389',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2390',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Chascomus',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2391',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2392',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2393',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2394',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2395',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2396',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2397',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2398',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar Del Tuyu',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2399',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Villa Gesell',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2400',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2401',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2402',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2403',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2404',
    nombre: 'Camara de Apelacion en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2405',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2406',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2407',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2408',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - General San Martín, La Matanza, Morón, San Isidro, Mercedes, Trenque Lauquen',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2409',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2410',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2411',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2412',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2413',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2414',
    nombre: 'Camara de Apelacion y Garantias en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2415',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2416',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2417',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2418',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2419',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2420',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2421',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2422',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2423',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2424',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2425',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2426',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2427',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2428',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2429',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2430',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2431',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2432',
    nombre: 'Juzgado de Familia N° 1 (Competencia San Miguel)',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2433',
    nombre: 'Juzgado de Familia N° 2 (Competencia San Miguel)',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2434',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2435',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2436',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2437',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2438',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2439',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Miguel',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2440',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2441',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2442',
    nombre: 'Juzgado de Ejecución N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2443',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2444',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2445',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2446',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2447',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2448',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2449',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2450',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2451',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2452',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2453',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2454',
    nombre: 'Juzgado en lo Correccional N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2455',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2456',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2457',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2458',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2459',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Miguel',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2460',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Miguel',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2461',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2462',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2463',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2464',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2465',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2466',
    nombre: 'Tribunal en lo Criminal N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2467',
    nombre: 'Tribunal en lo Criminal N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2468',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2469',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2470',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2471',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2472',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2473',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2474',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2475',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2476',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2477',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2478',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2479',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2480',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2481',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2482',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2483',
    nombre: 'Juzgado de Ejecución - Junín y Pergamino',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2484',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2485',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2486',
    nombre: 'Tribunal del Trabajo',
    provincia: 'Buenos Aires',
    ciudad: 'Chacabuco',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2487',
    nombre: 'Tribunal en lo Criminal',
    provincia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2488',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - La Matanza/ Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2489',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - La Matanza/ Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2490',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2491',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2492',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2493',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2494',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2495',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2496',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2497',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2498',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2499',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2500',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2501',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2502',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2503',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2504',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2505',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2506',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2507',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2508',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2509',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2510',
    nombre: 'Juzgado de Familia N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2511',
    nombre: 'Juzgado de Familia N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2512',
    nombre: 'Juzgado de Familia N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2513',
    nombre: 'Juzgado de Familia N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2514',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2515',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2516',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2517',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2518',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2519',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2520',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2521',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2522',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2523',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2524',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2525',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2526',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2527',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2528',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2529',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2530',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2531',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2532',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2533',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2534',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Justo',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2535',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 1 / Sala 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2536',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 1 / Sala 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2537',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 1 / Sala 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2538',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 2 /Sala 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2539',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 2 / Sala 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2540',
    nombre: 'Cámara de Apelación en lo Civil y Comercial N° 2 / Sala 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2541',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2543',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - La Plata, Quilmes, Lomas de Zamora N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2544',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2545',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2546',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2547',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2548',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2549',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2550',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2551',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2552',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2553',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2554',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2555',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2556',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2557',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2558',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2559',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2560',
    nombre: 'Juzgado en lo Civil y Comercial N° 13',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2561',
    nombre: 'Juzgado en lo Civil y Comercial N° 14',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2562',
    nombre: 'Juzgado en lo Civil y Comercial N° 15',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2563',
    nombre: 'Juzgado en lo Civil y Comercial N° 16',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2564',
    nombre: 'Juzgado en lo Civil y Comercial N° 17',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2565',
    nombre: 'Juzgado en lo Civil y Comercial N° 18',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2566',
    nombre: 'Juzgado en lo Civil y Comercial N° 19',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2567',
    nombre: 'Juzgado en lo Civil y Comercial N° 20',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2568',
    nombre: 'Juzgado en lo Civil y Comercial N° 21',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2569',
    nombre: 'Juzgado en lo Civil y Comercial N° 22',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2570',
    nombre: 'Juzgado en lo Civil y Comercial N° 23',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2571',
    nombre: 'Juzgado en lo Civil y Comercial N° 24',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2573',
    nombre: 'Juzgado en lo Civil y Comercial N° 26',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2574',
    nombre: 'Juzgado en lo Civil y Comercial N° 25',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2575',
    nombre: 'Juzgado en lo Civil y Comercial N° 27',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2576',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2577',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2578',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2579',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2587',
    nombre: 'Juzgado de Familia N° 8',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2588',
    nombre: 'Juzgado de Garantías N° 8',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2596',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Corrientes',
    ciudad: 'Saladillo',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2597',
    nombre: 'Juzgado de Garantías N° 8',
    provincia: 'Corrientes',
    ciudad: 'Cañuelas',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2598',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2599',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2600',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2601',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2602',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2603',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2604',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2605',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2606',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2607',
    nombre: 'Juzgado de Garantías del Joven N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2610',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2611',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2612',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2613',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2614',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2615',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2616',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2617',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2618',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2619',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2620',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2621',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2622',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2623',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2624',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2625',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2626',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2627',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2628',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2629',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2630',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2631',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2632',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2633',
    nombre: 'Juzgado en lo Civil y Comercial N° 13',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2634',
    nombre: 'Juzgado en lo Civil y Comercial N° 14',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2635',
    nombre: 'Juzgado en lo Civil y Comercial N° 15',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2636',
    nombre: 'Juzgado en lo Civil y Comercial N° 16',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2637',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Córdoba',
    ciudad: 'Lomas De Zamora',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2638',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2639',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2640',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2641',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2642',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2643',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2644',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2645',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2646',
    nombre: 'Juzgado de Familia N° 8',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2647',
    nombre: 'Juzgado de Familia N° 9',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2648',
    nombre: 'Juzgado de Familia N° 10',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2649',
    nombre: 'Juzgado de Familia N° 11',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2650',
    nombre: 'Juzgado de Familia N° 12',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2651',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2652',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Córdoba',
    ciudad: 'Lanus',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2653',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2654',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2655',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2656',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2657',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Córdoba',
    ciudad: 'Lanus',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2658',
    nombre: 'Juzgado de Garantías N° 8',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2659',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2660',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2661',
    nombre: 'Juzgado de Ejecución N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2662',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2663',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2664',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2665',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2666',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2667',
    nombre: 'Juzgado en lo Correccional N° 6',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2668',
    nombre: 'Juzgado en lo Correccional N° 7',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2669',
    nombre: 'Juzgado en lo Correccional N° 8',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2670',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2671',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2672',
    nombre: 'Juzgado de Garantías del Joven N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2673',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2674',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2675',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2676',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2677',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2678',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2679',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2680',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2681',
    nombre: 'Tribunal en lo Criminal N° 6',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2682',
    nombre: 'Tribunal en lo Criminal N° 7',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2683',
    nombre: 'Tribunal en lo Criminal N° 8',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2684',
    nombre: 'Tribunal en lo Criminal N° 9',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2685',
    nombre: 'Tribunal en lo Criminal N° 10',
    provincia: 'Córdoba',
    ciudad: 'Avellaneda',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2686',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2687',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2688',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2689',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - Mar del Plata, Dolores, Azul, Necochea, Bahía Blanca',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2690',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2691',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2692',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2693',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2694',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2695',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2696',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2697',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2698',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2699',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2700',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2701',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2702',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2703',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2704',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2705',
    nombre: 'Juzgado en lo Civil y Comercial N° 13',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2706',
    nombre: 'Juzgado en lo Civil y Comercial N° 14',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2707',
    nombre: 'Juzgado en lo Civil y Comercial N° 15',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2708',
    nombre: 'Juzgado en lo Civil y Comercial N° 16',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2709',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2710',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2711',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2712',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2713',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2714',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2715',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2716',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2717',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2718',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2719',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2720',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2721',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2722',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2723',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2724',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2725',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2726',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2727',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2728',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2729',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2730',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2731',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2732',
    nombre: 'Juzgado de Garantías del Joven N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2733',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2734',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2735',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2736',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2737',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2738',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2739',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2740',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2741',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2742',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2743',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2744',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2745',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2746',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2747',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2748',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2749',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2750',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2751',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2752',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2753',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2754',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2755',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2756',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2757',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2758',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2759',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2760',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2761',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2762',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2763',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2764',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2765',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2766',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2767',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2768',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2769',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2770',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2771',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2772',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2773',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2774',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2775',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2776',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2777',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2778',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2779',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2780',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2781',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2782',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2783',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2784',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2785',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2786',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2787',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2788',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moreno - Gral. Rodriguez',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2789',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2790',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1 N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2791',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1 N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2792',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2793',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2794',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2795',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2796',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2797',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2798',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2799',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2800',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2801',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2802',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2803',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2804',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2805',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2806',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2807',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2808',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2809',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2810',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2811',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Ituzaingo Centro',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2812',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Ituzaingo Centro',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2813',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2814',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2815',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2816',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2817',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2818',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2819',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2820',
    nombre: 'Juzgado de Familia N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2821',
    nombre: 'Juzgado de Familia N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2822',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2823',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2824',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2825',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2826',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2827',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2828',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2829',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2830',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2831',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2832',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2833',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2834',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2835',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2836',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2837',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2838',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2839',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2840',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2841',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2842',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2843',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2844',
    nombre: 'Tribunal en lo Criminal N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Morón',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2845',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2846',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2847',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2848',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2849',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2850',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2851',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2852',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2853',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2854',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2855',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2856',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2857',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2858',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2859',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2860',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2861',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2862',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2863',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2864',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2865',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2866',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2867',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2868',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2869',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2870',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2871',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2872',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2873',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2874',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2875',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2876',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2877',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2878',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2879',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2880',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2881',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2882',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2883',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2884',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2885',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2886',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2887',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2888',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2889',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2890',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2891',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2892',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2893',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2894',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2895',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2896',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2897',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2898',
    nombre: 'Juzgado de Garantías N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2899',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2900',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2901',
    nombre: 'Juzgado de Ejecución N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2902',
    nombre: 'Juzgado de Ejecución N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2903',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2904',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2905',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2906',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2907',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2908',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2909',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2910',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2911',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2912',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2913',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2914',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2915',
    nombre: 'Juzgado de Responsabilidad Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2916',
    nombre: 'Juzgado de Responsabilidad Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2917',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2918',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Berazategui',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2919',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2920',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2921',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2922',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2923',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2924',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2925',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2926',
    nombre: 'Cámara de Apelación en lo Civil y Comercial / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2927',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2928',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2929',
    nombre: 'Cámara de Apelación y Garantías en lo Penal / Sala 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2930',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2931',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2932',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2933',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2934',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2935',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2936',
    nombre: 'Juzgado en lo Civil y Comercial N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2937',
    nombre: 'Juzgado en lo Civil y Comercial N° 8',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2938',
    nombre: 'Juzgado en lo Civil y Comercial N° 9',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2939',
    nombre: 'Juzgado en lo Civil y Comercial N° 10',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2940',
    nombre: 'Juzgado en lo Civil y Comercial N° 11',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2941',
    nombre: 'Juzgado en lo Civil y Comercial N° 12',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2942',
    nombre: 'Juzgado en lo Civil y Comercial N° 13',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2943',
    nombre: 'Juzgado en lo Civil y Comercial N° 14',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2944',
    nombre: 'Juzgado en lo Civil y Comercial N° 15',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2945',
    nombre: 'Juzgado en lo Civil y Comercial N° 16',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2946',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2947',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2948',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2949',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2950',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2951',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2952',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2953',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2954',
    nombre: 'Juzgado de Familia N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2955',
    nombre: 'Juzgado de Familia N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2956',
    nombre: 'Juzgado de Familia N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2957',
    nombre: 'Juzgado de Familia N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Tigre',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2958',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2959',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2960',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Vicente Lopez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2961',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Vicente Lopez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2962',
    nombre: 'Juzgado de Garantías N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2963',
    nombre: 'Juzgado de Garantías N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2964',
    nombre: 'Juzgado de Ejecución en lo Penal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2965',
    nombre: 'Juzgado de Ejecución en lo Penal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2966',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2967',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2968',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2969',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2970',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2971',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2972',
    nombre: 'Juzgado en lo Correccional N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2973',
    nombre: 'Juzgado en lo Correccional N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2974',
    nombre: 'Juzgado en lo Correccional N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2975',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Vicente Lopez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2976',
    nombre: 'Juzgado de Garantías N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'Vicente Lopez',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2977',
    nombre: 'Juzgado de Garantías del joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2978',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2980',
    nombre: 'Juzgado de Garantías del joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Pilar',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2981',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2982',
    nombre: 'Juzgado de Garantías del Joven N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2983',
    nombre: 'Juzgado de Garantías del Joven N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2984',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2985',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2986',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2987',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2988',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2989',
    nombre: 'Tribunal en lo Criminal N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2990',
    nombre: 'Tribunal en lo Criminal N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2991',
    nombre: 'Tribunal en lo Criminal N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2992',
    nombre: 'Tribunal en lo Criminal N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2993',
    nombre: 'Tribunal en lo Criminal N° 7',
    provincia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2994',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2995',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - San Nicolás, Zárate Campana, Pergamino y Junín',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2996',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2997',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2998',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2999',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3000',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3001',
    nombre: 'Juzgado en lo Civil y Comercial N° 5',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3002',
    nombre: 'Juzgado en lo Civil y Comercial N° 6',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3003',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3004',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3005',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3006',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3007',
    nombre: 'Juzgado de Familia N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3008',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3009',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3010',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3011',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3012',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3013',
    nombre: 'Juzgado en lo Correccional N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3014',
    nombre: 'Juzgado de Ejecución - San Nicolás y Zárate Campana',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3015',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3016',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3017',
    nombre: 'Tribunal de Trabajo N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3018',
    nombre: 'Tribunal de Trabajo N° 3 - San Nicolás N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3019',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3020',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3021',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3022',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3023',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3024',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3025',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3026',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3027',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3028',
    nombre: 'Juzgado de Ejecución',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3029',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3030',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3031',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3032',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3033',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3034',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3035',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3036',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3037',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3038',
    nombre: 'Cámara de Apelación y Garantías en lo Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3039',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3040',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3041',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3042',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3043',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3044',
    nombre: 'Juzgado de Familia N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3045',
    nombre: 'Juzgado de Familia N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3046',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3047',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3048',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3051',
    nombre: 'Juzgado en lo Correccional N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3052',
    nombre: 'Juzgado en lo Correccional N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3053',
    nombre: 'Juzgado de Garantías N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3054',
    nombre: 'Juzgado de Garantías N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3055',
    nombre: 'Juzgado de Garantías N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3056',
    nombre: 'Juzgado de Garantías N° 4',
    provincia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3057',
    nombre: 'Juzgado de Garantías del Joven N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3058',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3059',
    nombre: 'Tribunal de Trabajo N° 3',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3060',
    nombre: 'Tribunal en lo Criminal N° 1',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3061',
    nombre: 'Tribunal en lo Criminal N° 2',
    provincia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3062',
    nombre: 'Cámara de Apelación de Circuito',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3063',
    nombre: 'Juzgado de 1ra Instancia de Ejecución Civil de Circuito',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3064',
    nombre: 'Juzgado de Primera Instancia de Circuito 1ra',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3065',
    nombre: 'Juzgado de Primera Instancia de Circuito 2da',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3066',
    nombre: 'Juzgado de Primera Instancia de Circuito 3ra',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3067',
    nombre: 'Juzgado de Primera Instancia de Circuito de Coronda',
    provincia: 'Santa Fe',
    ciudad: 'Coronda',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3068',
    nombre: 'Juzgado de Primera Instancia de Circuito de Galvez',
    provincia: 'Santa Fe',
    ciudad: 'Galvez',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3069',
    nombre: 'Juzgado de Primera Instancia de Circuito de Helvecia',
    provincia: 'Santa Fe',
    ciudad: 'Helvecia',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3070',
    nombre: 'Juzgado de Primera Instancia de Circuito de Laguna Paiva',
    provincia: 'Santa Fe',
    ciudad: 'Laguna Paiva',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3071',
    nombre: 'Juzgado de Primera Instancia de Circuito de San Carlos Centro',
    provincia: 'Santa Fe',
    ciudad: 'San Carlos Centro',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3072',
    nombre: 'Juzgado de Primera Instancia de Circuito de San Genaro',
    provincia: 'Santa Fe',
    ciudad: 'San Genaro',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3073',
    nombre: 'Juzgado de Primera Instancia de Circuito de Santo Tomé',
    provincia: 'Santa Fe',
    ciudad: 'Santo Tome',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3074',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil, Comercial y Laboral - San Jorge',
    provincia: 'Santa Fe',
    ciudad: 'San Jorge',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3075',
    nombre: 'Juzgado de Primera Instancia de Cicuito - El Trebol',
    provincia: 'Santa Fe',
    ciudad: 'El Trebol',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3076',
    nombre: 'Juzgado de Primera Instancia de Cicuito - Sastre',
    provincia: 'Santa Fe',
    ciudad: 'Sastre',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3077',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil, Comercial y Laboral - San Justo',
    provincia: 'Santa Fe',
    ciudad: 'San Justo',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3078',
    nombre: 'Juzgado de Primera Instancia de Circuito N°27 - San Justo',
    provincia: 'Santa Fe',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3079',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil, Comercial y Laboral - Esperanza',
    provincia: 'Santa Fe',
    ciudad: 'Esperanza',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3080',
    nombre: 'Juzgado de Primera Instancia de Circuito N°19 - Esperanza',
    provincia: 'Santa Fe',
    ciudad: 'Esperanza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3081',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil, Comercial y Laboral - San Javier',
    provincia: 'Santa Fe',
    ciudad: 'San Javier',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3082',
    nombre: 'Juzgado de Primera Instancia de Circuito N°26 - San Javier',
    provincia: 'Santa Fe',
    ciudad: 'San Javier',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3083',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3084',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3085',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3086',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3087',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3088',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 6',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3089',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 7',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3090',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 8',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3091',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 9',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3092',
    nombre: 'Juzgado de Primera Instancia de Distrito en lo Civil y Comercial Nominación N° 10',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3093',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3094',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3095',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N°5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3096',
    nombre: 'Cámara Contencioso Administrativa 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3097',
    nombre: 'Cámara Contencioso Administrativa 1ra Nominación N° 2',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3098',
    nombre: 'Cámara Contencioso Administrativa 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3100',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 1ra. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3101',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 2da. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3102',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 3ra. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3103',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 4ta. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3104',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 5ta. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3105',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 6ta. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3106',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 7ma. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3107',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 8va. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3108',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 9na. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3109',
    nombre: 'Cámara de Apelaciones en lo Civil y Comercial 10ma. Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3110',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 1',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3111',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 2',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3112',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N°3 - Juzgado de Concursos y Sociedades N°3',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3113',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 4',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3114',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 5',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3115',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 6',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3116',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 7 - Juzgado de Concursos y Sociedades N°4',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3117',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 8',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3118',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 9',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3119',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 10',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3120',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 11',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3121',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 12',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3122',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 13 - Juzgado de Concursos y Sociedades N°1',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3123',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 14',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3124',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 15',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3125',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 16',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3126',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 17',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3127',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 18',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3128',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 19',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3129',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 20',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3130',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N°21 - Ejecuciones Fiscales N°1',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3131',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 22',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3132',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 23',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3133',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 24',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3134',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 25 - Ejecuciones Fiscales N°2',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3135',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 26 - Juzgado de Concursos y Sociedades N°2',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3136',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 27',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3137',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 28',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3138',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 29 - Juzgado de Concursos y Sociedades N°5',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3139',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 30',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3140',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 31',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3141',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 32',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3142',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 33 - Juzgado de Concursos y Sociedades N°6',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3143',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 34',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3144',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 35',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3145',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 36',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3146',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 37',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3147',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 38',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3148',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 39 - Juzgado de Concursos y Sociedades N°7',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3149',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 40',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3150',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 41',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3151',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 42',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3152',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 43',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3153',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 44',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3154',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 45',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3155',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 46',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3156',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 47',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3157',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 48',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3158',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 49',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3159',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 50',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3160',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 51',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3161',
    nombre: 'Juzg. 1a Instancia en lo Civil y Comercial N° 52 - Juzgado de Concursos y Sociedades N°8',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3162',
    nombre: 'Juzg. 1a Instancia en lo Civil con Competencia en Ejecuciones Fiscales N° 3',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Civil, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3163',
    nombre: 'Cámara en lo Criminal de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3164',
    nombre: 'Cámara en lo Criminal 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3165',
    nombre: 'Cámara en lo Criminal 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3166',
    nombre: 'Cámara en lo Criminal 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3167',
    nombre: 'Cámara en lo Criminal 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3168',
    nombre: 'Cámara en lo Criminal 5ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3169',
    nombre: 'Cámara en lo Criminal 6ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3170',
    nombre: 'Cámara en lo Criminal 7ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3171',
    nombre: 'Cámara en lo Criminal 8va Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3172',
    nombre: 'Cámara en lo Criminal 9na Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3173',
    nombre: 'Cámara en lo Criminal 10ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3174',
    nombre: 'Cámara en lo Criminal 11ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3175',
    nombre: 'Cámara de Acusación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3176',
    nombre: 'Juzgado de Control en lo Penal Económico',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3177',
    nombre: 'Juzgado de Niñez, Adolescencia Violencia Familiar y de Género 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Menores, Violencia de Género',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3178',
    nombre: 'Juzgado de Niñez, Adolescencia Violencia Familiar y de Género 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Menores, Violencia de Género',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3179',
    nombre: 'Juzgado de Niñez, Adolescencia Violencia Familiar y de Género 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Menores, Violencia de Género',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3180',
    nombre: 'Juzgado de Niñez, Adolescencia Violencia Familiar y de Género 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Menores, Violencia de Género',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3181',
    nombre: 'Juzgado Penal Juvenil de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3182',
    nombre: 'Juzgado Penal Juvenil de 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3183',
    nombre: 'Juzgado Penal Juvenil de 6ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3184',
    nombre: 'Juzgado Penal Juvenil de 7ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3185',
    nombre: 'Juzgado Correccional 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3186',
    nombre: 'Juzgado Correccional 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3187',
    nombre: 'Juzgado Correccional 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3188',
    nombre: 'Juzgado de Ejecución Penal N° 1',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3189',
    nombre: 'Juzgado de Ejecución Penal N° 2',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3190',
    nombre: 'Juzgado de Ejecución Penal N° 3',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3191',
    nombre: 'Cámara del Trabajo Sala / 1',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3192',
    nombre: 'Cámara del Trabajo Sala / 2',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3193',
    nombre: 'Cámara del Trabajo Sala / 3',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3194',
    nombre: 'Cámara del Trabajo Sala / 4',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3195',
    nombre: 'Cámara del Trabajo Sala / 5',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3196',
    nombre: 'Cámara del Trabajo Sala / 6',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3197',
    nombre: 'Cámara del Trabajo Sala / 7',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3198',
    nombre: 'Cámara del Trabajo Sala / 8',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3199',
    nombre: 'Cámara del Trabajo Sala / 9',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3200',
    nombre: 'Cámara del Trabajo Sala / 10',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3201',
    nombre: 'Cámara del Trabajo Sala / 11',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3202',
    nombre: 'Juzgado de Conciliación de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3203',
    nombre: 'Juzgado de Conciliación de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3204',
    nombre: 'Juzgado de Conciliación de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3205',
    nombre: 'Juzgado de Conciliación de 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3206',
    nombre: 'Juzgado de Conciliación de 5ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3207',
    nombre: 'Juzgado de Conciliación de 6ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3208',
    nombre: 'Juzgado de Conciliación de 7ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3209',
    nombre: 'Juzgado de Conciliación de 8va Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3210',
    nombre: 'Juzgado de Conciliación de 9na Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3211',
    nombre: 'Juzgado de Conciliación de 10ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3212',
    nombre: 'Cámara de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3213',
    nombre: 'Cámara de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3214',
    nombre: 'Juzgado de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3215',
    nombre: 'Juzgado de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3216',
    nombre: 'Juzgado de Familia de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3217',
    nombre: 'Juzgado de Familia de 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3218',
    nombre: 'Juzgado de Familia de 1a Instancia de 5ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3219',
    nombre: 'Juzgado de Familia de 1a Instancia de 6ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3220',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Carlos Paz',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3221',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Carlos Paz',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3222',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Carlos Paz',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3223',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Alta Gracia',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3224',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia 2da Nominación con Compet. Conc. y Soc.',
    provincia: 'Córdoba',
    ciudad: 'Alta Gracia',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3225',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Alta Gracia',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3226',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia',
    provincia: 'Córdoba',
    ciudad: 'Río Segundo',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3227',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Río Segundo',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3228',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia',
    provincia: 'Córdoba',
    ciudad: 'Jesús María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3229',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Jesús María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3230',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Jesús María',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3231',
    nombre: 'Cámara de Apelación en lo Civil y Comercial y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3232',
    nombre: 'Cámara de Apelación en lo Civil y Comercial y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3233',
    nombre: 'Cámara del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3234',
    nombre: 'Cámara en lo Criminal y Correccional de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3235',
    nombre: 'Cámara en lo Criminal de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3236',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3237',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3238',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3239',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3240',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 5ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3241',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 6ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3242',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia y Concursos 7ma Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3243',
    nombre: 'Juzgado de Conciliación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3244',
    nombre: 'Juzgado de Conciliación de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3245',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar; y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3246',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Córdoba',
    ciudad: 'Río Cuarto',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3247',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial de Familia y Conciliación',
    provincia: 'Córdoba',
    ciudad: 'La Carlota',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3248',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'La Carlota',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3249',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial, de Conciliación y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Huinca Renanco',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3250',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Huinca Renanco',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3251',
    nombre: 'Cámara de Apelación en lo Civil y Comercial, del Trabajo y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Civil y Comercial, Laboral, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3252',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3253',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3254',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3255',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Civil, Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3256',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'Bell Ville',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3257',
    nombre: 'Cámara en lo Civil y Comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Marcos Juarez',
    fuero: 'Civil y Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3258',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Marcos Juarez',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3259',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Marcos Juarez',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3260',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Marcos Juarez',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3261',
    nombre: 'Juzgado en lo Civil y Comercial, Familia, Conciliación',
    provincia: 'Córdoba',
    ciudad: 'Corral de Bustos-Ifflinger',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3262',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Corral de Bustos-Ifflinger',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3263',
    nombre: 'Cámara de Apelación en lo Civil y Comercial y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3264',
    nombre: 'Cámara del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3265',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3266',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3267',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3268',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3269',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 4ta Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3270',
    nombre: 'Juzgado de Conciliación',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3271',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3272',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'Villa María',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3273',
    nombre: 'Juzgado en lo Civil y Comercial, de Conciliación, Familia, Control, Niñez y Juventud, Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Oliva',
    fuero: 'Civil, Comercial, Familia, Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3274',
    nombre: 'Cámara del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3275',
    nombre: 'Cámara de Apelación en lo Civil y Comercial y de Familia',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3276',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3277',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3278',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3279',
    nombre: 'Juzgado de 1a Instancia en lo Civil y Comercial y de Familia de 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3280',
    nombre: 'Juzgado de Conciliación',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3281',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3282',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Córdoba',
    ciudad: 'San Francisco',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3285',
    nombre: 'Juzgado en lo Civil y Comercial, de Conciliación, Familia, Control, Niñez y Juventud, Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Arroyito',
    fuero: 'Civil, Comercial, Familia, Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3286',
    nombre: 'Juzgado en lo Civil y Comercial, de Conciliación, Familia, Control, Niñez y Juventud, Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Morteros',
    fuero: 'Civil, Comercial, Familia, Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3287',
    nombre: 'Juzgado 1a Instancia Civil y Comercial, de Conciliación, Familia, Control, Niñez y Juventud, Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Las Varillas',
    fuero: 'Civil, Comercial, Familia, Menores, Penal',
    instancia: 'Primera Instancia, Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3288',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'Villa Dolores',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3290',
    nombre: 'Cámara de Apelación en lo Civil y Comercial, del Trabajo y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Villa Dolores',
    fuero: 'Civil y Comercial, Laboral, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3291',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa Dolores',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3292',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia de 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Villa Dolores',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3293',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'Villa Dolores',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3294',
    nombre: 'Juzgado en lo Civil y Comercial, de Conciliación, Familia, Control, Niñez y Juventud, Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Cura Brochero',
    fuero: 'Civil, Comercial, Familia, Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3295',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'Cruz del Eje',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3296',
    nombre: 'Cámara de Apelación en lo Civil y Comercial, del Trabajo y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Cruz del Eje',
    fuero: 'Civil y Comercial, Laboral, Familia',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3297',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Cruz del Eje',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3298',
    nombre: 'Juzgado de Ejecución Penal',
    provincia: 'Córdoba',
    ciudad: 'Cruz del Eje',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3299',
    nombre: 'Juzgado de Niñez, Juventud y Violencia Familiar y Penal Juvenil',
    provincia: 'Córdoba',
    ciudad: 'Cruz del Eje',
    fuero: 'Menores, Violencia de Género, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3300',
    nombre: 'Juzgado en lo Civil y Comercial, Conciliación y Familia 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Cosquín',
    fuero: 'Civil y Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3301',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Conciliación y Familia 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Cosquín',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3302',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Cosquín',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3303',
    nombre: 'Cámara en lo Criminal y Correccional, en lo Civil y comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Laboulaye',
    fuero: 'Penal, Correccional, Civil, Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3304',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Laboulaye',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3305',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Laboulaye',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3306',
    nombre: 'Cámara en lo Criminal y Correccional, en lo Civil y comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Dean Funes',
    fuero: 'Penal, Correccional, Civil, Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3307',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, de Conciliación y de Familia',
    provincia: 'Córdoba',
    ciudad: 'Dean Funes',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3308',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Dean Funes',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3309',
    nombre: 'Cámara en lo Civil y comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Civil y Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3312',
    nombre: 'Cámara en lo Civil y Comercial, de Familia y del Trabajo',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Civil y Comercial, Familia, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3313',
    nombre: 'Cámara en lo Criminal y Correccional',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Penal, Correccional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3314',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Conciliación y Familia 1ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3315',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Conciliación y Familia 2da Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3316',
    nombre: 'Juzgado de 1a Instancia en lo Civil, Comercial, Conciliación y Familia 3ra Nominación',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Civil, Comercial, Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3317',
    nombre: 'Juzgado de Control, Niñez, Juventud y Penal Juvenil y Faltas',
    provincia: 'Córdoba',
    ciudad: 'Río Tercero',
    fuero: 'Menores, Penal',
    instancia: 'Juzgado de Control',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3318',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3319',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3320',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3321',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3322',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3323',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 5ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3324',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 6ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3325',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 7ma Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3326',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 8va Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3327',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 9na Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3328',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 10ma Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3329',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial 11ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3330',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3331',
    nombre: 'Tribunal Colegiado Responsabilidad Extracontractual N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3332',
    nombre: 'Tribunal Colegiado de Familia N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3333',
    nombre: 'Tribunal Colegiado de Familia N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3334',
    nombre: 'Tribunal Colegiado de Familia N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3335',
    nombre: 'Cámara de Apelación en lo Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3336',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Laboral 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3337',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Laboral 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3338',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Laboral 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3339',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Laboral 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3340',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Laboral 5ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3341',
    nombre: 'Cámara de lo Contencioso Administrativo',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3343',
    nombre: 'Cámara de Apelación en lo Penal',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3344',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3346',
    nombre: 'Juzgado de 1a Instancia de Ejecución Civil de Circuito',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3347',
    nombre: 'Juzgado de 1a Instancia de Circuito 1ra',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3348',
    nombre: 'Juzgado de 1a Instancia de Circuito 2da',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3349',
    nombre: 'Juzgado de 1a Instancia de Circuito 3ra',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3350',
    nombre: 'Juzgado de 1a Instancia de Circuito N 17 - Coronda',
    provincia: 'Santa Fe',
    ciudad: 'Coronda',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3351',
    nombre: 'Juzgado de 1a Instancia de Circuito N 20 - Galvez',
    provincia: 'Santa Fe',
    ciudad: 'Galvez',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3352',
    nombre: 'Juzgado de 1a Instancia de Circuito N 21 - Helvecia',
    provincia: 'Santa Fe',
    ciudad: 'Helvecia',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3353',
    nombre: 'Juzgado de 1a Instancia de Circuito N 22 - Laguna Paiva',
    provincia: 'Santa Fe',
    ciudad: 'Laguna Paiva',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3354',
    nombre: 'Juzgado de 1a Instancia de Circuito N 24 - San Carlos Centro',
    provincia: 'Santa Fe',
    ciudad: 'San Carlos Centro',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3355',
    nombre: 'Juzgado de 1a Instancia de Circuito N 25 - San Genaro',
    provincia: 'Santa Fe',
    ciudad: 'San Genaro',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3356',
    nombre: 'Juzgado de 1a Instancia de Circuito N 28 - Santo Tomé',
    provincia: 'Santa Fe',
    ciudad: 'Santo Tome',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3357',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil, Comercial y Laboral - San Jorge',
    provincia: 'Santa Fe',
    ciudad: 'San Jorge',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3358',
    nombre: 'Juzgado de 1a Instancia de Circuito N 18 - El Trébol',
    provincia: 'Santa Fe',
    ciudad: 'El Trebol',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3359',
    nombre: 'Juzgado de 1a Instancia de Circuito N 30 - Sastre',
    provincia: 'Santa Fe',
    ciudad: 'Sastre',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3360',
    nombre: 'Juzgado de Distrito en lo Civil, Comercial y Laboral - San Justo',
    provincia: 'Santa Fe',
    ciudad: 'San Justo',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3361',
    nombre: 'Juzgado de Circuito N 27 - San Justo',
    provincia: 'Santa Fe',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3362',
    nombre: 'Juzgado de Circuito N 27 San Justo',
    provincia: 'Santa Fe',
    ciudad: 'San Justo',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3363',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil, Comercial y Laboral - Esperanza',
    provincia: 'Santa Fe',
    ciudad: 'Esperanza',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3364',
    nombre: 'Juzgado de Circuito N 19 - Esperanza',
    provincia: 'Santa Fe',
    ciudad: 'Esperanza',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3365',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil, Comercial y Laboral – San Javier',
    provincia: 'Santa Fe',
    ciudad: 'San Javier',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3366',
    nombre: 'Juzgado de Circuito N 26 - San Javier',
    provincia: 'Santa Fe',
    ciudad: 'San Javier',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3367',
    nombre: 'Cámara de Apelación en lo Civil y Comercial',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3368',
    nombre: 'Tribunal Colegiado de Responsabilidad Extracontractual 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3369',
    nombre: 'Tribunal Colegiado de Responsabilidad Extracontractual 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3370',
    nombre: 'Tribunal Colegiado de Responsabilidad Extracontractual 6ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3371',
    nombre: 'Tribunal Colegiado de Familia 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3372',
    nombre: 'Tribunal Colegiado de Familia 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3373',
    nombre: 'Tribunal Colegiado de Familia 5ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3374',
    nombre: 'Tribunal Colegiado de Familia 7ma Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Familia',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3375',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3376',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3377',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3378',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3379',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3380',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 6',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3381',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 7',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3382',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 8',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3383',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 9',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3384',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 10',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3385',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 11',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3386',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 12',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3387',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 13',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3388',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 14',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3389',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 15',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3390',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 16',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3391',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 17',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3392',
    nombre: 'Juzgado de 1a Instancia de Distrito en lo Civil y Comercial N° 18',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3393',
    nombre: 'Cámara de Apelación en lo Laboral - Sala I',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3394',
    nombre: 'Cámara de Apelación en lo Laboral - Sala II',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3395',
    nombre: 'Cámara de Apelación en lo Laboral - Sala III',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3396',
    nombre: 'Juzgado en lo Laboral N° 1',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3397',
    nombre: 'Juzgado en lo Laboral N° 2',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3398',
    nombre: 'Juzgado en lo Laboral N° 3',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3399',
    nombre: 'Juzgado en lo Laboral N° 4',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3400',
    nombre: 'Juzgado en lo Laboral N° 5',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3401',
    nombre: 'Juzgado en lo Laboral N° 6',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3402',
    nombre: 'Juzgado en lo Laboral N° 7',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3403',
    nombre: 'Juzgado en lo Laboral N° 8',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3404',
    nombre: 'Juzgado en lo Laboral N° 9',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3405',
    nombre: 'Juzgado en lo Laboral N° 10',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3406',
    nombre: 'Cámara de lo Contencioso Administrativo',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3407',
    nombre: 'Cámara de Apelación en lo Penal',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3408',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3409',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3410',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3411',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3412',
    nombre: 'Cámara de Apelación de Circuito',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3413',
    nombre: 'Juzgado de 1a Instancia de Ejecución Civil de Circuito 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3414',
    nombre: 'Juzgado de 1a Instancia de Ejecución Civil de Circuito 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'Civil',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3415',
    nombre: 'Juzgado de 1a Instancia de Circuito 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3416',
    nombre: 'Juzgado de 1a Instancia de Circuito 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3417',
    nombre: 'Juzgado de 1a Instancia de Circuito 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3418',
    nombre: 'Juzgado de 1a Instancia de Circuito 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3419',
    nombre: 'Juzgado de 1a Instancia de Circuito 5ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rosario',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3420',
    nombre: 'Juzgado de 1a Instancia de Circuito N 15 - Arroyo Seco',
    provincia: 'Santa Fe',
    ciudad: 'Arroyo Seco',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3421',
    nombre: 'Juzgado de 1a Instancia de Circuito N 33 - Villa Gobernador Galvez',
    provincia: 'Santa Fe',
    ciudad: 'Villa Gobernador Galvez',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3422',
    nombre: 'Juzgado de 1a Instancia de Distrito N 6 en lo Civil, Comercial y Laboral 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Cañada De Gomez',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3423',
    nombre: 'Juzgado de 1a Instancia de Distrito N 6 en lo Civil, Comercial y Laboral 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Cañada De Gomez',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3424',
    nombre: 'Juzgado De 1a Instancia de Distrito N 6 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Cañada De Gomez',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3425',
    nombre: 'Juzgado de 1a Instancia de Circuito N 6 - Cañada de Gómez',
    provincia: 'Santa Fe',
    ciudad: 'Cañada De Gomez',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3426',
    nombre: 'Juzgado de 1a Instancia de Circuito N 23 – las Rosas',
    provincia: 'Santa Fe',
    ciudad: 'Las Rosas',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3427',
    nombre: 'Juzgado de 1a Instancia de Distrito N 7 en lo Civil, Comercial y Laboral 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Casilda',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3428',
    nombre: 'Juzgado de 1a Instancia de Distrito N 7 en lo Civil, Comercial y Laboral 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Casilda',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3429',
    nombre: 'Juzgado de 1a Instancia de Distrito N 7 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Casilda',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3430',
    nombre: 'Juzgado de 1a Instancia de Distrito N 7 de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Casilda',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3431',
    nombre: 'Juzgado de 1a Instancia de Circuito N 7 - Casilda',
    provincia: 'Santa Fe',
    ciudad: 'Casilda',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3432',
    nombre: 'Juzgado de 1a Instancia de Distrito N 12 en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3433',
    nombre: 'Juzgado de 1a Instancia de Distrito N 12 en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3434',
    nombre: 'Juzgado de 1a Instancia de Distrito N 12 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3435',
    nombre: 'Juzgado de 1a Instancia de Distrito N 12 de Menores',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3436',
    nombre: 'Juzgado de 1a Instancia de Distrito N 12 en lo Laboral',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3437',
    nombre: 'Juzgado de 1a Instancia de Circuito N 12 – San Lorenzo',
    provincia: 'Santa Fe',
    ciudad: 'San Lorenzo',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3438',
    nombre: 'Juzgado de 1a Instancia de Distrito N 14 en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3439',
    nombre: 'Juzgado de 1a Instancia de Distrito N 14 en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3440',
    nombre: 'Juzgado de 1a Instancia de Distrito N 14 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3441',
    nombre: 'Juzgado 1a Instancia de Distrito N 14 en lo Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3442',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3443',
    nombre: 'Juzgado de 1a Instancia de Distrito N 14 de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3444',
    nombre: 'Juzgado de 1a Instancia de Circuito',
    provincia: 'Santa Fe',
    ciudad: 'Villa Constitucion',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3445',
    nombre: 'Cámara de Apelación en lo Civil Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3446',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3447',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3448',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3449',
    nombre: 'Juzgado de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3450',
    nombre: 'Juzgado de 1a Instancia de Circuito - Venado Tuerto',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3451',
    nombre: 'Cámara de Apelación en lo Penal',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3452',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Penal de Instrucción',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Penal',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3453',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Penal Correccional 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3454',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 en lo Penal Correccional 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3455',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3456',
    nombre: 'Juzgado de 1a Instancia de Distrito N 3 de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Venado Tuerto',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3457',
    nombre: 'Juzgado de 1a Instancia de Distrito N 8 en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Melincue (Est. San Urbano)',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3458',
    nombre: 'Juzgado Penal de 1 Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Melincue (Est. San Urbano)',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3459',
    nombre: 'Juzgado de 1a Instancia de Distrito N 8 en lo Penal de Sentencia',
    provincia: 'Santa Fe',
    ciudad: 'Melincue (Est. San Urbano)',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3460',
    nombre: 'Juzgado de 1a Instancia de Distrito N 8 en lo Penal de Instrucción',
    provincia: 'Santa Fe',
    ciudad: 'Melincue (Est. San Urbano)',
    fuero: 'Penal',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3461',
    nombre: 'Juzgado de 1a Instancia de Distrito N 8 en lo Penal Correccional',
    provincia: 'Santa Fe',
    ciudad: 'Melincue (Est. San Urbano)',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3462',
    nombre: 'Juzgado de 1a Instancia de Distrito N 16 en lo Civil, Comercial y Laboral - Ceres',
    provincia: 'Santa Fe',
    ciudad: 'Firmat',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3463',
    nombre: 'Juzgado de 1a Instancia de Distrito N 9 en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Rufino',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3464',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Rufino',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3465',
    nombre: 'Juzgado de 1a Instancia de Distrito N 9 en lo Penal de Instrucción y Correccional',
    provincia: 'Santa Fe',
    ciudad: 'Rufino',
    fuero: 'Penal, Correccional',
    instancia: 'Juzgado de Instrucción',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3466',
    nombre: 'Cámara de Apelación en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3467',
    nombre: 'Juzgado de Distrito N 4 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3468',
    nombre: 'Juzgado de 1a Instancia de Distrito N 4 en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3469',
    nombre: 'Juzgado de 1a Instancia de Distrito N 4 en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3470',
    nombre: 'Juzgado de 1a Instancia de Distrito N 4 en lo Civil y Comercial 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3471',
    nombre: 'Juzgado de 1a Instancia de Distrito N 4 en lo Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3472',
    nombre: 'Juzgado de 1a Instancia de Circuito N 4 - Reconquista',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3473',
    nombre: 'Juzgado de 1a Instancia de Circuito N 36 - Avellaneda',
    provincia: 'Santa Fe',
    ciudad: 'Avellaneda (Est. Ewald)',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3474',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3475',
    nombre: 'Juzgado de 1a Instancia de Distrito N 4 de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Reconquista',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3476',
    nombre: 'Juzgado de 1a Instancia de Distrito N 13 en lo Civil, Comercial y Laboral 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3477',
    nombre: 'Juzgado de 1a Instancia de Distrito N 13 en lo Civil, Comercial y Laboral 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3478',
    nombre: 'Juzgado de Distrito N 13 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3479',
    nombre: 'Juzgado de 1a Instancia de Circuito N 13 - Vera',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3480',
    nombre: 'Cámara de Apelación en lo Penal',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3481',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Vera (Est. Gobernador Vera)',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3482',
    nombre: 'Juzgado de Distrito N 17 en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Villa Ocampo',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3483',
    nombre: 'Juzgado de Circuito N 34 - Villa Ocampo',
    provincia: 'Santa Fe',
    ciudad: 'Villa Ocampo',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3484',
    nombre: 'Juzgado de 1a Instancia en lo Penal - Las Toscas',
    provincia: 'Santa Fe',
    ciudad: 'Las Toscas',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3485',
    nombre: 'Cámara de Apelación en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3486',
    nombre: 'Juzgado de Distrito N 5 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3487',
    nombre: 'Juzgado de 1a Instancia de Distrito N 5 en lo Civil y Comercial 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3488',
    nombre: 'Juzgado de 1a Instancia de Distrito N 5 en lo Civil y Comercial 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3489',
    nombre: 'Juzgado de 1a Instancia de Distrito N 5 en lo Civil y Comercial 3ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3490',
    nombre: 'Juzgado de 1a Instancia de Distrito N 5 en lo Civil y Comercial 4ta Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3491',
    nombre: 'Juzgado de 1a Instancia en lo Laboral 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3492',
    nombre: 'Juzgado de 1a Instancia en lo Laboral 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3493',
    nombre: 'Juzgado de 1a Instancia de Circuito N 5 - Rafaela',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3494',
    nombre: 'Juzgado de 1a Instancia de Circuito N 29 - San Vicente',
    provincia: 'Santa Fe',
    ciudad: 'San Vicente',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3495',
    nombre: 'Juzgado de 1a Instancia de Circuito N 31 - Sunchales',
    provincia: 'Santa Fe',
    ciudad: 'Sunchales',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3497',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3498',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 1ra Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3499',
    nombre: 'Juzgado de 1a Instancia de Distrito de Menores 2da Nominación',
    provincia: 'Santa Fe',
    ciudad: 'Rafaela',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3500',
    nombre: 'Juzgado de 1a Instancia de Distrito N 10 en lo Civil, Comercial y Laboral - San Cristóbal',
    provincia: 'Santa Fe',
    ciudad: 'San Cristobal',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3501',
    nombre: 'Juzgado de 1a Instancia de Distrito N 10 de Familia',
    provincia: 'Santa Fe',
    ciudad: 'San Cristobal',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3502',
    nombre: 'Juzgado de 1a Instancia de Distrito N 16 en lo Civil, Comercial y Laboral - Ceres',
    provincia: 'Santa Fe',
    ciudad: 'Ceres',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3503',
    nombre: 'Juzgado de 1a Instancia de Circuito N 10 - San Cristóbal',
    provincia: 'Santa Fe',
    ciudad: 'San Cristobal',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3504',
    nombre: 'Juzgado de 1a Instancia de Circuito N 16 - Ceres',
    provincia: 'Santa Fe',
    ciudad: 'Ceres',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3505',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'San Cristobal',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3506',
    nombre: 'Juzgado de 1a Instancia de Distrito N 15 en lo Civil, Comercial y Laboral',
    provincia: 'Santa Fe',
    ciudad: 'Tostado',
    fuero: 'Civil, Comercial, Laboral',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3507',
    nombre: 'Juzgado Penal de 1a Instancia',
    provincia: 'Santa Fe',
    ciudad: 'Tostado',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3508',
    nombre: 'Juzgado de Menores',
    provincia: 'Santa Fe',
    ciudad: 'Tostado',
    fuero: 'Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3509',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3524',
    nombre: 'Juzgado Comercial N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3541',
    nombre: 'Cámara Nacional de Apelaciones del Trabajo',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3542',
    nombre: 'Juzgado del Trabajo N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3543',
    nombre: 'Juzgado del Trabajo N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3544',
    nombre: 'Juzgado del Trabajo N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3545',
    nombre: 'Juzgado del Trabajo N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3546',
    nombre: 'Juzgado del Trabajo N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3547',
    nombre: 'Juzgado del Trabajo N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3548',
    nombre: 'Juzgado del Trabajo N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3549',
    nombre: 'Juzgado del Trabajo N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3550',
    nombre: 'Juzgado del Trabajo N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3551',
    nombre: 'Juzgado del Trabajo N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3552',
    nombre: 'Juzgado del Trabajo N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3553',
    nombre: 'Juzgado del Trabajo N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3554',
    nombre: 'Juzgado del Trabajo N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3555',
    nombre: 'Juzgado del Trabajo N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3556',
    nombre: 'Juzgado del Trabajo N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3557',
    nombre: 'Juzgado del Trabajo N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3558',
    nombre: 'Juzgado del Trabajo N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3559',
    nombre: 'Juzgado del Trabajo N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3560',
    nombre: 'Juzgado del Trabajo N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3561',
    nombre: 'Juzgado del Trabajo N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3562',
    nombre: 'Juzgado del Trabajo N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3563',
    nombre: 'Juzgado del Trabajo N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3564',
    nombre: 'Juzgado del Trabajo N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3565',
    nombre: 'Juzgado del Trabajo N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3566',
    nombre: 'Juzgado del Trabajo N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3567',
    nombre: 'Juzgado del Trabajo N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3568',
    nombre: 'Juzgado del Trabajo N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3569',
    nombre: 'Juzgado del Trabajo N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3570',
    nombre: 'Juzgado del Trabajo N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3571',
    nombre: 'Juzgado del Trabajo N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3572',
    nombre: 'Juzgado del Trabajo N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3573',
    nombre: 'Juzgado del Trabajo N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3574',
    nombre: 'Juzgado del Trabajo N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3575',
    nombre: 'Juzgado del Trabajo N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3576',
    nombre: 'Juzgado del Trabajo N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3577',
    nombre: 'Juzgado del Trabajo N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3579',
    nombre: 'Juzgado del Trabajo N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3580',
    nombre: 'Juzgado del Trabajo N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3581',
    nombre: 'Juzgado del Trabajo N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3582',
    nombre: 'Juzgado del Trabajo N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3583',
    nombre: 'Juzgado del Trabajo N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3584',
    nombre: 'Juzgado del Trabajo N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3585',
    nombre: 'Juzgado del Trabajo N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3586',
    nombre: 'Juzgado del Trabajo N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3587',
    nombre: 'Juzgado del Trabajo N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3588',
    nombre: 'Juzgado del Trabajo N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3589',
    nombre: 'Juzgado del Trabajo N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3590',
    nombre: 'Juzgado del Trabajo N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3591',
    nombre: 'Juzgado del Trabajo N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3592',
    nombre: 'Juzgado del Trabajo N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3593',
    nombre: 'Juzgado del Trabajo N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3594',
    nombre: 'Juzgado del Trabajo N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3595',
    nombre: 'Juzgado del Trabajo N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3596',
    nombre: 'Juzgado del Trabajo N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3597',
    nombre: 'Juzgado del Trabajo N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3598',
    nombre: 'Juzgado del Trabajo N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3599',
    nombre: 'Juzgado del Trabajo N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3600',
    nombre: 'Juzgado del Trabajo N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3601',
    nombre: 'Juzgado del Trabajo N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3602',
    nombre: 'Juzgado del Trabajo N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3603',
    nombre: 'Juzgado del Trabajo N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3604',
    nombre: 'Juzgado del Trabajo N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3605',
    nombre: 'Juzgado del Trabajo N° 64',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3606',
    nombre: 'Juzgado del Trabajo N° 65',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3607',
    nombre: 'Juzgado del Trabajo N° 66',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3608',
    nombre: 'Juzgado del Trabajo N° 67',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3609',
    nombre: 'Juzgado del Trabajo N° 68',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3610',
    nombre: 'Juzgado del Trabajo N° 69',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3611',
    nombre: 'Juzgado del Trabajo N° 70',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3612',
    nombre: 'Juzgado del Trabajo N° 71',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3613',
    nombre: 'Juzgado del Trabajo N° 72',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3614',
    nombre: 'Juzgado del Trabajo N° 73',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3615',
    nombre: 'Juzgado del Trabajo N° 74',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3616',
    nombre: 'Juzgado del Trabajo N° 75',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3617',
    nombre: 'Juzgado del Trabajo N° 76',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3619',
    nombre: 'Juzgado del Trabajo N° 78',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3620',
    nombre: 'Juzgado del Trabajo N° 79',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3621',
    nombre: 'Juzgado del Trabajo N° 80',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3622',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3733',
    nombre: 'Cámara Nacional de Casación en lo Criminal y Correccional',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3734',
    nombre: 'Cámara Nacional de Apelaciones en lo Criminal y Correccional',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3735',
    nombre: 'Juzgado Criminal y Correccional N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3736',
    nombre: 'Juzgado Criminal y Correccional N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3737',
    nombre: 'Juzgado Criminal y Correccional N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3738',
    nombre: 'Juzgado Criminal y Correccional N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3739',
    nombre: 'Juzgado Criminal y Correccional N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3740',
    nombre: 'Juzgado Criminal y Correccional N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3741',
    nombre: 'Juzgado Criminal y Correccional N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3742',
    nombre: 'Juzgado Criminal y Correccional N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3743',
    nombre: 'Juzgado Criminal y Correccional N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3744',
    nombre: 'Juzgado Criminal y Correccional N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3745',
    nombre: 'Juzgado Criminal y Correccional N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3746',
    nombre: 'Juzgado Criminal y Correccional N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3747',
    nombre: 'Juzgado Criminal y Correccional N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3748',
    nombre: 'Juzgado Criminal y Correccional N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3749',
    nombre: 'Juzgado Criminal y Correccional N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3750',
    nombre: 'Juzgado Criminal y Correccional N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3751',
    nombre: 'Juzgado Criminal y Correccional N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3752',
    nombre: 'Juzgado Criminal y Correccional N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3753',
    nombre: 'Juzgado Criminal y Correccional N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3754',
    nombre: 'Juzgado Criminal y Correccional N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3755',
    nombre: 'Juzgado Criminal y Correccional N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3756',
    nombre: 'Juzgado Criminal y Correccional N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3757',
    nombre: 'Juzgado Criminal y Correccional N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3758',
    nombre: 'Juzgado Criminal y Correccional N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3759',
    nombre: 'Juzgado Criminal y Correccional N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3760',
    nombre: 'Juzgado Criminal y Correccional N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3761',
    nombre: 'Juzgado Criminal y Correccional N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3762',
    nombre: 'Juzgado Criminal y Correccional N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3763',
    nombre: 'Juzgado Criminal y Correccional N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3764',
    nombre: 'Juzgado Criminal y Correccional N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3765',
    nombre: 'Juzgado Criminal y Correccional N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3766',
    nombre: 'Juzgado Criminal y Correccional N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3767',
    nombre: 'Juzgado Criminal y Correccional N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3768',
    nombre: 'Juzgado Criminal y Correccional N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3769',
    nombre: 'Juzgado Criminal y Correccional N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3770',
    nombre: 'Juzgado Criminal y Correccional N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3771',
    nombre: 'Juzgado Criminal y Correccional N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3772',
    nombre: 'Juzgado Criminal y Correccional N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3773',
    nombre: 'Juzgado Criminal y Correccional N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3774',
    nombre: 'Juzgado Criminal y Correccional N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3775',
    nombre: 'Juzgado Criminal y Correccional N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3776',
    nombre: 'Juzgado Criminal y Correccional N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3777',
    nombre: 'Juzgado Criminal y Correccional N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3778',
    nombre: 'Juzgado Criminal y Correccional N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3779',
    nombre: 'Juzgado Criminal y Correccional N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3780',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3781',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3782',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3783',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3784',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3785',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3786',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3787',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3788',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3789',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3790',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3791',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3792',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3793',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3794',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3795',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3796',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3797',
    nombre: 'Juzgados Nacionales en lo Criminal y Correccional N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3798',
    nombre: 'Juzgado Nacional de Rogatorias',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3799',
    nombre: 'Juzgado de Menores N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3803',
    nombre: 'Juzgado de Menores N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3806',
    nombre: 'Tribunal Oral de Menores N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3807',
    nombre: 'Tribunal Oral de Menores N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3808',
    nombre: 'Tribunal Oral de Menores N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Menores, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3839',
    nombre: 'Cámara Nacional en lo Penal Económico',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3840',
    nombre: 'Juzgado Penal Económico N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3841',
    nombre: 'Juzgado Penal Económico N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3842',
    nombre: 'Juzgado Penal Económico N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3843',
    nombre: 'Juzgado Penal Económico N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3844',
    nombre: 'Juzgado Penal Económico N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3845',
    nombre: 'Juzgado Penal Económico N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3846',
    nombre: 'Juzgado Penal Económico N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3847',
    nombre: 'Juzgado Penal Económico N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3848',
    nombre: 'Juzgado Penal Económico N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3849',
    nombre: 'Juzgado Penal Económico N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3850',
    nombre: 'Juzgado Penal Económico N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3851',
    nombre: 'Tribunal Oral en lo Penal Económico N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3852',
    nombre: 'Tribunal Oral en lo Penal Económico N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3853',
    nombre: 'Tribunal Oral en lo Penal Económico N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3854',
    nombre: 'Tribunal Oral en lo Penal Económico N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Penal, Nacional',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3855',
    nombre: 'Cámara Nacional de Apelaciones en lo Civil y Comercial Federal',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3867',
    nombre: 'Cámara Nacional de Apelaciones en lo Contencioso Administrativa Federal',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3868',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3869',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3870',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3871',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3872',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3873',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3874',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3875',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3876',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 9',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3877',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 10',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3878',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 11',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3879',
    nombre: 'Juzgado Contencioso Administrativo Federal N° 12',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3880',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3881',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3882',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3883',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3884',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3885',
    nombre: 'Juzgado Federal de Ejecuciones Fiscales y Tributario N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Federal, Fiscal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3886',
    nombre: 'Cámara Federal de Apelaciones en lo Criminal y Correccional Federal',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3887',
    nombre: 'Juzgado Criminal y Correccional Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3888',
    nombre: 'Juzgado Criminal y Correccional Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3889',
    nombre: 'Juzgado Criminal y Correccional Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3890',
    nombre: 'Juzgado Criminal y Correccional Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3891',
    nombre: 'Juzgado Criminal y Correccional Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3892',
    nombre: 'Juzgado Criminal y Correccional Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3893',
    nombre: 'Juzgado Criminal y Correccional Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3894',
    nombre: 'Juzgado Criminal y Correccional Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3895',
    nombre: 'Juzgado Criminal y Correccional Federal N° 9',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3896',
    nombre: 'Juzgado Criminal y Correccional Federal N° 10',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3897',
    nombre: 'Juzgado Criminal y Correccional Federal N° 11',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3898',
    nombre: 'Juzgado Criminal y Correccional Federal N° 12',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3899',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3900',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3901',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3902',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3903',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3904',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3905',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3906',
    nombre: 'Tribunal Oral en lo Criminal Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3907',
    nombre: 'Cámara Federal de Apelaciones de Bahía Blanca',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3908',
    nombre: 'Juzgado Federal de Bahía Blanca N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3909',
    nombre: 'Juzgado Federal de Bahía Blanca N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3910',
    nombre: 'Juzgado Federal de Santa Rosa',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3911',
    nombre: 'Tribunal Oral en lo Criminal Federal de Bahía Blanca',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3912',
    nombre: 'Tribunal Oral en lo Criminal Federal de La Pampa',
    provincia: 'Justicia Federal',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3913',
    nombre: 'Cámara Federal de Apelaciones de Comodoro Rivadavia',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3914',
    nombre: 'Juzgado Federal de Comodoro Rivadavia',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3915',
    nombre: 'Juzgado Federal de Rawson N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3916',
    nombre: 'Juzgado Federal de Rawson N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3917',
    nombre: 'Juzgado Federal de Rawson',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3919',
    nombre: 'Juzgado Federal de Rio Gallegos',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3920',
    nombre: 'Juzgado Federal de Primera Instancia de Ushuaia',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3921',
    nombre: 'Juzgado Federal de Rio Grande',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3922',
    nombre: 'Juzgado Federal de Caleta Olivia',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3923',
    nombre: 'Juzgado Federal de Esquel',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3924',
    nombre: 'Tribunal Oral en lo Criminal Federal de Comodoro Rivadavia',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3925',
    nombre: 'Tribunal Oral en lo Criminal Federal de Santa Cruz',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3926',
    nombre: 'Tribunal Oral en lo Criminal Federal de Tierra del Fuego, Antártida e Islas',
    provincia: 'Justicia Federal',
    ciudad: 'Comodoroa Rivadavia',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3927',
    nombre: 'Cámara Federal de Apelaciones de Córdoba',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3928',
    nombre: 'Juzgado Federal de Córdoba N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3929',
    nombre: 'Juzgado Federal de Córdoba N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3930',
    nombre: 'Juzgado Federal de Córdoba N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3931',
    nombre: 'Juzgado Federal de Bell Ville',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3932',
    nombre: 'Juzgado Federal de Río Cuarto',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3933',
    nombre: 'Juzgado Federal de Villa Maria',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3934',
    nombre: 'Juzgado Federal de La Rioja',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3935',
    nombre: 'Juzgado Federal de San Francisco',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3936',
    nombre: 'Tribunal Oral en lo Criminal Federal de Córdoba',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3937',
    nombre: 'Tribunal Oral en lo Criminal Federal de Córdoba N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3938',
    nombre: 'Tribunal Oral en lo Criminal Federal de La Rioja',
    provincia: 'Justicia Federal',
    ciudad: 'Córdoba',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3939',
    nombre: 'Cámara Federal de Apelaciones de Corrientes',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3940',
    nombre: 'Cámara Federal de Apelaciones de Corrientes',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3941',
    nombre: 'Juzgado Federal de Corrientes',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3942',
    nombre: 'Juzgado Federal de Corrientes N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3943',
    nombre: 'Juzgado Federal de Paso de los Libres',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3944',
    nombre: 'Juzgado Federal de Goya',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3945',
    nombre: 'Tribunal Oral en lo Criminal Federal de Corrientes',
    provincia: 'Justicia Federal',
    ciudad: 'Corrientes',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3946',
    nombre: 'Cámara Federal de Apelaciones de General Roca',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3947',
    nombre: 'Juzgado Federal de General Roca',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3948',
    nombre: 'Juzgado Federal de San Carlos de Bariloche',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3949',
    nombre: 'Juzgado Federal de Viedma',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3950',
    nombre: 'Juzgado Federal de Zapala',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3951',
    nombre: 'Juzgado Federal de Neuquén N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3952',
    nombre: 'Juzgado Federal de Neuquén N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3953',
    nombre: 'Tribunal Oral en lo Criminal Federal de General Roca',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3954',
    nombre: 'Tribunal Oral en lo Criminal Federal de Neuquén',
    provincia: 'Justicia Federal',
    ciudad: 'General Roca',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3956',
    nombre: 'Cámara Federal de Apelaciones de La Plata',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3957',
    nombre: 'Juzgado Federal de La Plata N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3958',
    nombre: 'Juzgado Civil, Comercial y Contencioso Administrativo Federal de La Plata N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3959',
    nombre: 'Juzgado en lo Criminal y Correccional Federal de La Plata N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Penal, Correccional, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3960',
    nombre: 'Juzgado Civil, Comercial y Contencioso Administrativo Federal de La Plata N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3961',
    nombre: 'Juzgado Federal Criminal y Correccional de Lomas de Zamora N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3962',
    nombre: 'Juzgado Federal Criminal y Correccional de Lomas de Zamora N°2',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3963',
    nombre: 'Juzgado Federal de Primera Instancia en lo Civil, Comercial y Contencioso Administrativo de Lomas de Zamora N°3',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3964',
    nombre: 'Juzgado Federal de Junín',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3965',
    nombre: 'Juzgado Federal de Quilmes',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3966',
    nombre: 'Tribunal Oral en lo Criminal Federal de La Plata N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3967',
    nombre: 'Tribunal Oral en lo Criminal Federal de La Plata N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'La Plata',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3968',
    nombre: 'Cámara Federal de Apelaciones de Mar del Plata',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3969',
    nombre: 'Juzgado Federal Penal de Mar del Plata N°2',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3970',
    nombre: 'Juzgado Federal de Mar del Plata N°2 - Penal',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal, Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3972',
    nombre: 'Juzgado Federal Civil, Comercial y Laboral de Mar del Plata N°2',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Civil, Comercial, Laboral, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3973',
    nombre: 'Juzgado Federal de Mar del Plata N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3974',
    nombre: 'Juzgado Federal de Mar del Plata N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3975',
    nombre: 'Juzgado Federal de Azul N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3976',
    nombre: 'Juzgado Federal de Azul N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3977',
    nombre: 'Juzgado Federal de Dolores',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3978',
    nombre: 'Juzgado Federal de Necochea',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3979',
    nombre: 'Tribunal Oral en lo Criminal Federal de Mar del Plata',
    provincia: 'Justicia Federal',
    ciudad: 'Mar del Plata',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3980',
    nombre: 'Cámara Federal de Apelaciones de Mendoza',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3981',
    nombre: 'Juzgado Federal de Mendoza N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3982',
    nombre: 'Juzgado Federal de Mendoza N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3983',
    nombre: 'Juzgado Federal de Mendoza N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3984',
    nombre: 'Juzgado Federal de San Rafael',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3985',
    nombre: 'Juzgado Federal de San Juan N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3986',
    nombre: 'Juzgado Federal de San Juan N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3987',
    nombre: 'Juzgado Federal de San Luis',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3990',
    nombre: 'Juzgado Federal de Villa Mercedes',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3991',
    nombre: 'Tribunal Oral en lo Criminal Federal de Mendoza N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-3992',
    nombre: 'Tribunal Oral en lo Criminal Federal de Mendoza N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4003',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Juan',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4004',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Luis',
    provincia: 'Justicia Federal',
    ciudad: 'Mendoza',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4005',
    nombre: 'Cámara Federal de Apelaciones de Paraná',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4006',
    nombre: 'Juzgado Federal de Paraná N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4007',
    nombre: 'Juzgado Federal de Concepción del Uruguay N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4008',
    nombre: 'Juzgado Federal de Concepción del Uruguay N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4009',
    nombre: 'Juzgado Federal de Victoria',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4010',
    nombre: 'Juzgado Federal de Gualeguaychú',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4011',
    nombre: 'Juzgado Federal de Paraná N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4012',
    nombre: 'Juzgado Federal de Paraná N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4013',
    nombre: 'Tribunal Oral en lo Criminal Federal de Concepción',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4014',
    nombre: 'Tribunal Oral en lo Criminal Federal de Paraná',
    provincia: 'Justicia Federal',
    ciudad: 'Paraná',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4017',
    nombre: 'Cámara Federal de Apelaciones de Rosario',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4018',
    nombre: 'Juzgado Federal de Rosario N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4019',
    nombre: 'Juzgado Federal de Rosario N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4020',
    nombre: 'Juzgado Federal de Rosario N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4021',
    nombre: 'Juzgado Federal de Rosario N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4022',
    nombre: 'Juzgado Federal de Santa Fe N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4023',
    nombre: 'Juzgado Federal de Santa Fe N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4024',
    nombre: 'Juzgado Federal de San Nicolás N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4025',
    nombre: 'Juzgado Federal de San Nicolás N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4026',
    nombre: 'Juzgado Federal de Rafaela',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4027',
    nombre: 'Juzgado Federal de Venado Tuerto',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4028',
    nombre: 'Tribunal Oral en lo Criminal Federal de Rosario N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4029',
    nombre: 'Tribunal Oral en lo Criminal Federal de Rosario N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4030',
    nombre: 'Tribunal Oral en lo Criminal Federal de Rosario N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4031',
    nombre: 'Tribunal Oral en lo Criminal Federal de Santa Fe',
    provincia: 'Justicia Federal',
    ciudad: 'Santa Fe',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4032',
    nombre: 'Cámara Federal de Apelaciones de Posadas',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4033',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de Posadas',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4034',
    nombre: 'Juzgado Federal en lo Civil, Comercial y Contencioso Administrativo de Posadas',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4035',
    nombre: 'Juzgado Federal de El Dorado',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4036',
    nombre: 'Juzgado Federal de Oberá',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4037',
    nombre: 'Tribunal Oral en lo Criminal Federal de Posadas',
    provincia: 'Justicia Federal',
    ciudad: 'Misiones',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4038',
    nombre: 'Cámara Federal de Apelaciones de Resistencia',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4039',
    nombre: 'Juzgado Federal de Resistencia N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4040',
    nombre: 'Juzgado Federal de Resistencia N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4041',
    nombre: 'Juzgado Federal de Formosa N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4042',
    nombre: 'Juzgado Federal de Formosa N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4043',
    nombre: 'Juzgado Federal de Reconquista',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4044',
    nombre: 'Juzgado Federal de Saenz Peña',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4045',
    nombre: 'Tribunal Oral en lo Criminal Federal de Resistencia',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4046',
    nombre: 'Tribunal Oral en lo Criminal Federal de Formosa',
    provincia: 'Justicia Federal',
    ciudad: 'Resistencia',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4047',
    nombre: 'Cámara Federal de Apelaciones de Salta',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4048',
    nombre: 'Juzgado Federal de Salta N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4049',
    nombre: 'Juzgado Federal de Salta N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4050',
    nombre: 'Juzgado Federal de Jujuy N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4051',
    nombre: 'Juzgado Federal de Jujuy N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4052',
    nombre: 'Juzgado Federal de San Ramón de la Nueva Orán',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4053',
    nombre: 'Juzgado Federal de Primera Instancia de Tartagal',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4054',
    nombre: 'Tribunal Oral en lo Criminal Federal de Salta N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4055',
    nombre: 'Tribunal Oral en lo Criminal Federal de Salta N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4056',
    nombre: 'Tribunal Oral en lo Criminal Federal de Jujuy',
    provincia: 'Justicia Federal',
    ciudad: 'Salta',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4057',
    nombre: 'Cámara Federal de Apelaciones de San Martín',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4058',
    nombre: 'Juzgado Federal en lo Civil, Comercial y Contencioso Administrativo de San Martín N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4059',
    nombre: 'Juzgado Federal en lo Civil, Comercial y Contencioso Administrativo de San Martín N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Civil, Comercial, Contencioso Administrativo, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4060',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de San Martín N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4061',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de San Martín N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4062',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de Tres de Febrero',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4063',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de San Isidro N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4064',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de San Isidro N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4065',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de Morón N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4066',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de Morón N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4067',
    nombre: 'Juzgado Federal en lo Criminal y Correccional de Morón N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal, Penal, Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4068',
    nombre: 'Juzgado Federal de Mercedes',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4069',
    nombre: 'Juzgado Federal de Campana',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4070',
    nombre: 'Juzgado Federal de Primera Instancia de Moreno',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4071',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Martín N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4072',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Martín N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4073',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Martín N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4074',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Martín N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4075',
    nombre: 'Tribunal Oral en lo Criminal Federal de San Martín N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'San Martín',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4076',
    nombre: 'Cámara Federal de Apelaciones de Tucumán',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4077',
    nombre: 'Juzgado Federal de Tucumán N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4078',
    nombre: 'Juzgado Federal de Tucumán N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4079',
    nombre: 'Juzgado Federal de Catamarca',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4080',
    nombre: 'Juzgado Federal de Santiago del Estero N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4081',
    nombre: 'Juzgado Federal de Santiago del Estero N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4082',
    nombre: 'Tribunal Oral en lo Criminal Federal de Tucumán',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4083',
    nombre: 'Tribunal Oral en lo Criminal Federal de Catamarca',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4084',
    nombre: 'Tribunal Oral en lo Criminal Federal de Santiago del Estero',
    provincia: 'Justicia Federal',
    ciudad: 'Tucumán',
    fuero: 'Penal, Federal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4085',
    nombre: 'Juzgado Comercial N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4086',
    nombre: 'Juzgado Comercial N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4087',
    nombre: 'Juzgado Comercial N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4088',
    nombre: 'Juzgado Comercial N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4089',
    nombre: 'Juzgado Comercial N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4090',
    nombre: 'Juzgado Comercial N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4091',
    nombre: 'Juzgado Comercial N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4092',
    nombre: 'Juzgado Comercial N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4093',
    nombre: 'Juzgado Comercial N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4094',
    nombre: 'Juzgado Comercial N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4095',
    nombre: 'Juzgado Comercial N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4096',
    nombre: 'Juzgado Comercial N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4097',
    nombre: 'Juzgado Comercial N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4098',
    nombre: 'Juzgado Comercial N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4099',
    nombre: 'Juzgado Comercial N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4100',
    nombre: 'Juzgado Comercial N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4101',
    nombre: 'Juzgado Comercial N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4102',
    nombre: 'Juzgado Comercial N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4103',
    nombre: 'Juzgado Comercial N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4104',
    nombre: 'Juzgado Comercial N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4105',
    nombre: 'Juzgado Comercial N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4106',
    nombre: 'Juzgado Comercial N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4107',
    nombre: 'Juzgado Comercial N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4108',
    nombre: 'Juzgado Comercial N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4109',
    nombre: 'Juzgado Comercial N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4110',
    nombre: 'Juzgado Comercial N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4111',
    nombre: 'Juzgado Comercial N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4112',
    nombre: 'Juzgado Comercial N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4113',
    nombre: 'Juzgado Comercial N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4115',
    nombre: 'Juzgado Comercial N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4145',
    nombre: 'Juzgado Comercial N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4147',
    nombre: 'Juzgado Civil y Comercial Federal N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4148',
    nombre: 'Juzgado Civil y Comercial Federal N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4149',
    nombre: 'Juzgado Civil y Comercial Federal N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4150',
    nombre: 'Juzgado Civil y Comercial Federal N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4151',
    nombre: 'Juzgado Civil y Comercial Federal N° 5',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4152',
    nombre: 'Juzgado Civil y Comercial Federal N° 6',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4153',
    nombre: 'Juzgado Civil y Comercial Federal N° 7',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4154',
    nombre: 'Juzgado Civil y Comercial Federal N° 8',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4155',
    nombre: 'Juzgado Civil y Comercial Federal N° 9',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4156',
    nombre: 'Juzgado Civil y Comercial Federal N° 10',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4157',
    nombre: 'Juzgado Civil y Comercial Federal N° 11',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'Civil y Comercial, Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4194',
    nombre: 'Juzgado del Trabajo N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4234',
    nombre: 'Juzgado del Trabajo N° 77',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Laboral, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4364',
    nombre: 'Juzgado Civil N° 1',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4365',
    nombre: 'Juzgado Civil N° 2',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4366',
    nombre: 'Juzgado Civil N° 3',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4367',
    nombre: 'Juzgado Civil N° 4',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4368',
    nombre: 'Juzgado Civil N° 5',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4369',
    nombre: 'Juzgado Civil N° 6',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4370',
    nombre: 'Juzgado Civil N° 7',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4371',
    nombre: 'Juzgado Civil N° 8',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4372',
    nombre: 'Juzgado Civil N° 9',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4373',
    nombre: 'Juzgado Civil N° 10',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4374',
    nombre: 'Juzgado Civil N° 11',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4375',
    nombre: 'Juzgado Civil N° 12',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4376',
    nombre: 'Juzgado Civil N° 13',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4377',
    nombre: 'Juzgado Civil N° 14',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4378',
    nombre: 'Juzgado Civil N° 15',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4379',
    nombre: 'Juzgado Civil N° 16',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4380',
    nombre: 'Juzgado Civil N° 17',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4381',
    nombre: 'Juzgado Civil N° 18',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4382',
    nombre: 'Juzgado Civil N° 19',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4383',
    nombre: 'Juzgado Civil N° 20',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4384',
    nombre: 'Juzgado Civil N° 21',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4385',
    nombre: 'Juzgado Civil N° 22',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4386',
    nombre: 'Juzgado Civil N° 23',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4387',
    nombre: 'Juzgado Civil N° 24',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4388',
    nombre: 'Juzgado Civil N° 25',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4389',
    nombre: 'Juzgado Civil N° 26',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4390',
    nombre: 'Juzgado Civil N° 27',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4391',
    nombre: 'Juzgado Civil N° 28',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4392',
    nombre: 'Juzgado Civil N° 29',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4393',
    nombre: 'Juzgado Civil N° 30',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4394',
    nombre: 'Juzgado Civil N° 31',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4395',
    nombre: 'Juzgado Civil N° 32',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4396',
    nombre: 'Juzgado Civil N° 33',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4397',
    nombre: 'Juzgado Civil N° 34',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4398',
    nombre: 'Juzgado Civil N° 35',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4399',
    nombre: 'Juzgado Civil N° 36',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4400',
    nombre: 'Juzgado Civil N° 37',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4401',
    nombre: 'Juzgado Civil N° 38',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4402',
    nombre: 'Juzgado Civil N° 39',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4403',
    nombre: 'Juzgado Civil N° 40',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4404',
    nombre: 'Juzgado Civil N° 41',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4405',
    nombre: 'Juzgado Civil N° 42',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4406',
    nombre: 'Juzgado Civil N° 43',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4407',
    nombre: 'Juzgado Civil N° 44',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4408',
    nombre: 'Juzgado Civil N° 45',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4409',
    nombre: 'Juzgado Civil N° 46',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4410',
    nombre: 'Juzgado Civil N° 47',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4411',
    nombre: 'Juzgado Civil N° 48',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4412',
    nombre: 'Juzgado Civil N° 49',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4413',
    nombre: 'Juzgado Civil N° 50',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4414',
    nombre: 'Juzgado Civil N° 51',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4415',
    nombre: 'Juzgado Civil N° 52',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4416',
    nombre: 'Juzgado Civil N° 53',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4417',
    nombre: 'Juzgado Civil N° 54',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4418',
    nombre: 'Juzgado Civil N° 55',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4419',
    nombre: 'Juzgado Civil N° 56',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4420',
    nombre: 'Juzgado Civil N° 57',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4421',
    nombre: 'Juzgado Civil N° 58',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4422',
    nombre: 'Juzgado Civil N° 59',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4423',
    nombre: 'Juzgado Civil N° 60',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4424',
    nombre: 'Juzgado Civil N° 61',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4425',
    nombre: 'Juzgado Civil N° 62',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4426',
    nombre: 'Juzgado Civil N° 63',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4427',
    nombre: 'Juzgado Civil N° 64',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4428',
    nombre: 'Juzgado Civil N° 65',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4429',
    nombre: 'Juzgado Civil N° 66',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4430',
    nombre: 'Juzgado Civil N° 67',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4431',
    nombre: 'Juzgado Civil N° 68',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4432',
    nombre: 'Juzgado Civil N° 69',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4433',
    nombre: 'Juzgado Civil N° 70',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4434',
    nombre: 'Juzgado Civil N° 71',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4435',
    nombre: 'Juzgado Civil N° 72',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4436',
    nombre: 'Juzgado Civil N° 73',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4437',
    nombre: 'Juzgado Civil N° 74',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4438',
    nombre: 'Juzgado Civil N° 75',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4439',
    nombre: 'Juzgado Civil N° 76',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4440',
    nombre: 'Juzgado Civil N° 77',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4441',
    nombre: 'Juzgado Civil N° 78',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4442',
    nombre: 'Juzgado Civil N° 79',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4443',
    nombre: 'Juzgado Civil N° 80',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4444',
    nombre: 'Juzgado Civil N° 81',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4445',
    nombre: 'Juzgado Civil N° 82',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4446',
    nombre: 'Juzgado Civil N° 83',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4447',
    nombre: 'Juzgado Civil N° 84',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4448',
    nombre: 'Juzgado Civil N° 85',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4449',
    nombre: 'Juzgado Civil N° 86',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4450',
    nombre: 'Juzgado Civil N° 87',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4451',
    nombre: 'Juzgado Civil N° 88',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4452',
    nombre: 'Juzgado Civil N° 89',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4453',
    nombre: 'Juzgado Civil N° 90',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4454',
    nombre: 'Juzgado Civil N° 91',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4455',
    nombre: 'Juzgado Civil N° 92',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4456',
    nombre: 'Juzgado Civil N° 93',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4457',
    nombre: 'Juzgado Civil N° 94',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4458',
    nombre: 'Juzgado Civil N° 95',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4459',
    nombre: 'Juzgado Civil N° 96',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4460',
    nombre: 'Juzgado Civil N° 97',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4461',
    nombre: 'Juzgado Civil N° 98',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4462',
    nombre: 'Juzgado Civil N° 99',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4463',
    nombre: 'Juzgado Civil N° 100',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4464',
    nombre: 'Juzgado Civil N° 101',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4465',
    nombre: 'Juzgado Civil N° 102',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4466',
    nombre: 'Juzgado Civil N° 103',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4467',
    nombre: 'Juzgado Civil N° 104',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4468',
    nombre: 'Juzgado Civil N° 105',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4469',
    nombre: 'Juzgado Civil N° 106',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4470',
    nombre: 'Juzgado Civil N° 107',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4471',
    nombre: 'Juzgado Civil N° 108',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4472',
    nombre: 'Juzgado Civil N° 109',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4473',
    nombre: 'Juzgado Civil N° 110',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Civil, Nacional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4488',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala D',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4490',
    nombre: 'Cámara Nacional de Apelaciones en lo Comercial - Sala F',
    provincia: 'Justicia Nacional',
    ciudad: 'CABA',
    fuero: 'Comercial, Nacional',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4491',
    nombre: 'Juzgado Federal de Rosario N° 1',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4492',
    nombre: 'Juzgado Federal de Rosario N° 2',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4493',
    nombre: 'Juzgado Federal de Rosario N° 3',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4494',
    nombre: 'Juzgado Federal de Rosario N° 4',
    provincia: 'Justicia Federal',
    ciudad: 'Rosario',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4495',
    nombre: 'Suprema Corte de Justicia de la Provincia de Buenos Aires',
    provincia: 'Corrientes',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4496',
    nombre: 'Tribunal Superior de Justicia de la Provincia de Córdoba',
    provincia: 'Córdoba',
    ciudad: 'Córdoba Capital',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4497',
    nombre: 'Corte Suprema de Justicia de la Provincia de Santa Fe',
    provincia: 'Santa Fe',
    ciudad: 'Santa Fe',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4498',
    nombre: 'Suprema Corte de Justicia de la Provincia de Mendoza',
    provincia: 'Mendoza',
    ciudad: 'Mendoza',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4499',
    nombre: 'Corte Suprema de Justicia de la Provincia de Tucumán',
    provincia: 'Tucumán',
    ciudad: 'San Miguel De Tucuman (Est. Tucuman)',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4500',
    nombre: 'Corte Suprema de Justicia de la Provincia de Entre Ríos',
    provincia: 'Entre Ríos',
    ciudad: 'Paraná',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4501',
    nombre: 'Corte de Justicia de la Provincia de Salta',
    provincia: 'Salta',
    ciudad: 'Salta',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4502',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Chaco',
    provincia: 'Chaco',
    ciudad: 'Resistencia',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4503',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Corrientes',
    provincia: 'Corrientes',
    ciudad: 'Corrientes',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4504',
    nombre: 'Tribunal Superior de Justicia de la Provincia de Neuquén',
    provincia: 'Neuquén',
    ciudad: 'Neuquén',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4505',
    nombre: 'Corte de Justicia de la Provincia de San Juan',
    provincia: 'San Juan',
    ciudad: 'San Juan',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4506',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Misiones',
    provincia: 'Misiones',
    ciudad: 'Posadas',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4507',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Jujuy',
    provincia: 'Jujuy',
    ciudad: 'San Salvador De Jujuy (Est. Jujuy)',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4508',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Río Negro',
    provincia: 'Río Negro',
    ciudad: 'Viedma',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4509',
    nombre: 'Superior Tribunal de la Provincia de Formosa',
    provincia: 'Formosa',
    ciudad: 'Formosa',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4510',
    nombre: 'Corte de Justicia de la Provincia de Catamarca',
    provincia: 'Catamarca',
    ciudad: 'San Fernando Del Valle De Catamarca',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4511',
    nombre: 'Superior Tribunal de Justicia de la Provincia de La Pampa',
    provincia: 'La Pampa',
    ciudad: 'Santa Rosa',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4512',
    nombre: 'Corte Suprema de Justicia de la Provincia de Chubut',
    provincia: 'Chubut',
    ciudad: 'Rawson',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4513',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Santiago del Estero',
    provincia: 'Santiago del Estero',
    ciudad: 'Santiago Del Estero',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4514',
    nombre: 'Superior Tribunal de Justicia de la Provincia de San Luis',
    provincia: 'San Luis',
    ciudad: 'San Luis',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4515',
    nombre: 'Superior Tribunal de Justicia de la Provincia de La Rioja',
    provincia: 'La Rioja',
    ciudad: 'La Rioja',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4516',
    nombre: 'Superior Tribunal de Justicia de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur',
    provincia: 'Tierra del Fuego',
    ciudad: 'Ushuaia',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4517',
    nombre: 'Tribunal Superior de Justicia de Santa Cruz',
    provincia: 'Santa Cruz',
    ciudad: 'Rio Gallegos',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-4518',
    nombre: 'Corte Suprema de Justicia de la Nacion',
    provincia: 'Justicia Federal',
    ciudad: 'CABA',
    fuero: 'General',
    instancia: 'Corte Suprema/Superior',
    direccion: '',
    telefono: ''
  }
];

export const mockRatings: Rating[] = [];
