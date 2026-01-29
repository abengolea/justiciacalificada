import type { Courthouse, Rating, User, Dependencia } from "./types";

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

export const mockCourthouses: Courthouse[] = [
  {
    id: 'juzgado-0',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-2',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-151',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-152',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-153',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-154',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-155',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-156',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-157',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-158',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-159',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-160',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-161',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-162',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-163',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-164',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-165',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-166',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-167',
    nombre: 'Juzgado Civil y Comercial N° 13',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-168',
    nombre: 'Juzgado Civil y Comercial N° 14',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-169',
    nombre: 'Juzgado Civil y Comercial N° 15',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-170',
    nombre: 'Juzgado Civil y Comercial N° 16',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-171',
    nombre: 'Juzgado Civil y Comercial N° 17',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-172',
    nombre: 'Juzgado Civil y Comercial N° 18',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-173',
    nombre: 'Juzgado Civil y Comercial N° 19',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-174',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-175',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-176',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-177',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-178',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-179',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-180',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-181',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-182',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-183',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-184',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-185',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-186',
    nombre: 'Juzgado Civil y Comercial N° 13',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-187',
    nombre: 'Juzgado Civil y Comercial N° 14',
    dependencia: 'Buenos Aires',
    ciudad: 'Lomas De Zamora',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-188',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-189',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-190',
    nombre: 'Juzgado Civil y Comercial N° 1 - Olavarría',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-191',
    nombre: 'Juzgado Civil y Comercial N° 2 - Olavarría',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-192',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-193',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-194',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-195',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-196',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-197',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-198',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-199',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-200',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-201',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-202',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-203',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-204',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-205',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-206',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-207',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-208',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-209',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-210',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-211',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-212',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-213',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-214',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-215',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'La Matanza',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-216',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-217',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-218',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-219',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-220',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-221',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-222',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-223',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-224',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-225',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-226',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-227',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-228',
    nombre: 'Juzgado Civil y Comercial N° 13',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-229',
    nombre: 'Juzgado Civil y Comercial N° 14',
    dependencia: 'Buenos Aires',
    ciudad: 'Mar del Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-230',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-231',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-232',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-233',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-234',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-235',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-236',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-237',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-238',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-239',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'Mercedes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-240',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-241',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-242',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-243',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-244',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-245',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-246',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-247',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-248',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-249',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-250',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-251',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'Moron',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-252',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-253',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Necochea',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-254',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-255',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-256',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Pergamino',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-257',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-258',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-259',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-260',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-261',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-262',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-263',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-264',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-265',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-266',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'Quilmes',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-267',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-268',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-269',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-270',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-271',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-272',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-273',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-274',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-275',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-276',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-277',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-278',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-279',
    nombre: 'Juzgado Civil y Comercial N° 13',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-280',
    nombre: 'Juzgado Civil y Comercial N° 14',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-281',
    nombre: 'Juzgado Civil y Comercial N° 15',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-282',
    nombre: 'Juzgado Civil y Comercial N° 16',
    dependencia: 'Buenos Aires',
    ciudad: 'San Isidro',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-283',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-284',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-285',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-286',
    nombre: 'Juzgado Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-287',
    nombre: 'Juzgado Civil y Comercial N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-288',
    nombre: 'Juzgado Civil y Comercial N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-289',
    nombre: 'Juzgado Civil y Comercial N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-290',
    nombre: 'Juzgado Civil y Comercial N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-291',
    nombre: 'Juzgado Civil y Comercial N° 9',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-292',
    nombre: 'Juzgado Civil y Comercial N° 10',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-293',
    nombre: 'Juzgado Civil y Comercial N° 11',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-294',
    nombre: 'Juzgado Civil y Comercial N° 12',
    dependencia: 'Buenos Aires',
    ciudad: 'San Martin',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-295',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-296',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Trenque Lauquen',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-301',
    nombre: 'Juzgado de Familia N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-302',
    nombre: 'Juzgado de Familia N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-303',
    nombre: 'Juzgado de Familia N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-304',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-305',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Tres Arroyos',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-306',
    nombre: 'Juzgado Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-307',
    nombre: 'Juzgado Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-308',
    nombre: 'Juzgado Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-309',
    nombre: 'Juzgado de Familia N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-310',
    nombre: 'Juzgado de Familia N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Tandil',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-311',
    nombre: 'UFI N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-312',
    nombre: 'UFI N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-313',
    nombre: 'UFI N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-314',
    nombre: 'UFI N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'San Nicolas De Los Arroyos',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-315',
    nombre: 'Camara de Apelaciones Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-316',
    nombre: 'Camara de Apelaciones Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-317',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-318',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-319',
    nombre: 'Juzgado de Familia N° 1 - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-320',
    nombre: 'Juzgado de Ejecución N°1 - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-321',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-322',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-323',
    nombre: 'Juzgado de Garantías N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-324',
    nombre: 'Juzgado en lo Correccional N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-325',
    nombre: 'Juzgado en lo Correccional N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-327',
    nombre: 'Juzgado de Garantias del Joven N° 1 - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-328',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1 - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-329',
    nombre: 'Tribunal de Trabajo - Azul',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-330',
    nombre: 'Tribunal en lo Criminal N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-331',
    nombre: 'Tribunal en lo Criminal N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-333',
    nombre: 'Juzgado de Paz - Benito Juarez',
    dependencia: 'Buenos Aires',
    ciudad: 'Benito Juarez (Est. Juarez)',
    fuero: 'Paz',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-334',
    nombre: 'Cámara de Apelaciones Civil y Comercial n°1 - Bahia Blanca',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-335',
    nombre: 'Cámara de Apelaciones Civil y Comercial n°2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-336',
    nombre: 'Cámara de Apelación y Garantías en lo penal n°1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-337',
    nombre: 'Cámara de Apelación y Garantías en lo Penal n°2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-338',
    nombre: 'Fiscalia General - Bahía Blanca',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-339',
    nombre: 'Defensoría General - Bahía Blanca',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Desconocida',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-340',
    nombre: 'Tribunal en lo Criminal N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-341',
    nombre: 'Tribunal en lo Criminal N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-342',
    nombre: 'Tribunal en lo Criminal N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-343',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-344',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-345',
    nombre: 'Juzgado de Garantías N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-346',
    nombre: 'Juzgado de Ejecución - Bahia Blanca',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-347',
    nombre: 'Juzgado en lo Correcional N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-348',
    nombre: 'Juzgado en lo Correcional N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-349',
    nombre: 'Juzgado en lo Correcional N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-350',
    nombre: 'Juzgado en lo Correcional N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-351',
    nombre: 'Juzgado de Transición N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-352',
    nombre: 'Juzgado de Transición N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-353',
    nombre: 'Tribunal de Menores N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-354',
    nombre: 'Tribunal de Menores N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Bahia Blanca',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-355',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-356',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-357',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-358',
    nombre: 'Juzgado de Familia N°1 - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-359',
    nombre: 'Juzgado de Garantías del Joven N° 1 - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-360',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-361',
    nombre: 'Tribunal en lo Criminal N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-362',
    nombre: 'Tribunal en lo Criminal N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-363',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-364',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-365',
    nombre: 'Juzgado de Garantías N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-366',
    nombre: 'Juzgado de Ejecución - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-367',
    nombre: 'Juzgado en lo Correcional N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-368',
    nombre: 'Juzgado en lo Correcional N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-369',
    nombre: 'Juzgado en lo Correcional N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-370',
    nombre: 'Juzgado en lo Correcional N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-371',
    nombre: 'Fiscalia General - Dolores',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-372',
    nombre: 'Fiscalia General',
    dependencia: 'Buenos Aires',
    ciudad: 'Azul',
    fuero: 'Fiscalía',
    instancia: 'Fiscalía',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-373',
    nombre: 'Cámara de Apelación en lo Civil y Comercial - Junín',
    dependencia: 'Buenos Aires',
    ciudad: 'Dolores',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-374',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Junin',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-377',
    nombre: 'Tribunal en lo Criminal N° 1 - Junin',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-378',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-379',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-382',
    nombre: 'Juzgado de Ejecución - Junin',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-383',
    nombre: 'Juzgado en lo Correcional N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-384',
    nombre: 'Juzgado en lo Correcional N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-385',
    nombre: 'Juzgado en lo Correcional N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-386',
    nombre: 'Juzgado de Transición N° 1 - Junin',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'General',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-387',
    nombre: 'Tribunal de Menores N° 1 - Junin',
    dependencia: 'Buenos Aires',
    ciudad: 'Junin',
    fuero: 'Menores',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-388',
    nombre: 'Camara de Apelacion Civil y Comercial - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-389',
    nombre: 'Cámara de Apelación y Garantías en lo Penal - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-390',
    nombre: 'Juzgado en lo Civil y Comercial N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-391',
    nombre: 'Juzgado en lo Civil y Comercial N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-392',
    nombre: 'Juzgado en lo Civil y Comercial N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-393',
    nombre: 'Juzgado en lo Civil y Comercial N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-394',
    nombre: 'Juzgado de Familia N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-395',
    nombre: 'Juzgado de Familia N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-396',
    nombre: 'Juzgado de Ejecucion Penal - Zárate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Penal',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-397',
    nombre: 'Juzgado de Garantias N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-398',
    nombre: 'Juzgado de Garantias N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-399',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1 - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-400',
    nombre: 'Juzgado en lo Correccional N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-401',
    nombre: 'Juzgado en lo Correccional N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Correccional',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-402',
    nombre: 'Juzgado de Garantias N° 3 - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-403',
    nombre: 'Juzgado de Garantias N° 4 - Zárate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Escobar',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-404',
    nombre: 'Juzgado de Garantías del Joven N° 1 - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Campana',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-405',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1 - Zarate Campana',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-406',
    nombre: 'Tribunal de Trabajo N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-407',
    nombre: 'Tribunal de Trabajo N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-408',
    nombre: 'Tribunal de Trabajo N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Laboral',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-409',
    nombre: 'Tribunal en lo Criminal N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-410',
    nombre: 'Tribunal en lo Criminal N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'Zarate Campana',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-411',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 1 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-412',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 2 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-413',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 1 Sala 3 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-414',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 1 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-415',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 2 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-416',
    nombre: 'Camara de Apelacion en lo Civil y Comercial N° 2 Sala 3 - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-417',
    nombre: 'Cámara de Apelación en lo Contencioso Administrativo - La Plata, Quilmes, Lomas de Zamora',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-418',
    nombre: 'Camara de Apelacion y Garantias en lo Penal - La Plata',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-419',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-420',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-421',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-422',
    nombre: 'Camara de Apelacion y Garantias en lo Penal Sala N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-423',
    nombre: 'Juzgado Civil y Comercial N° 20',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-424',
    nombre: 'Juzgado Civil y Comercial N° 21',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-425',
    nombre: 'Juzgado Civil y Comercial N° 22',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-426',
    nombre: 'Juzgado Civil y Comercial N° 23',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-427',
    nombre: 'Juzgado Civil y Comercial N° 24',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-428',
    nombre: 'Juzgado Civil y Comercial N° 25',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-429',
    nombre: 'Juzgado Civil y Comercial N° 26',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-430',
    nombre: 'Juzgado Civil y Comercial N° 27',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Civil y Comercial',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-431',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-432',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-433',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-434',
    nombre: 'Juzgado en lo Contencioso Administrativo N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-435',
    nombre: 'Juzgado de Familia N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-436',
    nombre: 'Juzgado de Familia N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-437',
    nombre: 'Juzgado de Familia N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-438',
    nombre: 'Juzgado de Familia N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-439',
    nombre: 'Juzgado de Familia N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-440',
    nombre: 'Juzgado de Familia N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-441',
    nombre: 'Juzgado de Familia N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-442',
    nombre: 'Juzgado de Familia N° 8',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Familia',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-443',
    nombre: 'Juzgado de Ejecucion N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-444',
    nombre: 'Juzgado de Ejecucion N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Ejecución',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-445',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-446',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-447',
    nombre: 'Juzgado de Garantías N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-448',
    nombre: 'Juzgado de Garantías N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-449',
    nombre: 'Juzgado de Garantías N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-450',
    nombre: 'Juzgado de Garantías N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-451',
    nombre: 'Juzgado de Garantías N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-452',
    nombre: 'Juzgado de Garantías N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-453',
    nombre: 'Juzgado de Garantías N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-454',
    nombre: 'Juzgado de Garantías N° 4',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-455',
    nombre: 'Juzgado de Garantías N° 5',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-456',
    nombre: 'Juzgado de Garantías N° 6',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-457',
    nombre: 'Juzgado de Garantías N° 7',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'General',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-458',
    nombre: 'Juzgado de Garantias del Joven N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-459',
    nombre: 'Juzgado de Garantias del Joven N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-460',
    nombre: 'Juzgado de Garantias del Joven N° 3',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Menores',
    instancia: 'Juzgado de Garantías',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-461',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 1',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-462',
    nombre: 'Juzgado de Responsabilidad Penal Juvenil N° 2',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal, Menores',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-463',
    nombre: 'Tribunal en lo Criminal',
    dependencia: 'Buenos Aires',
    ciudad: 'La Plata',
    fuero: 'Penal',
    instancia: 'Tribunal',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-488',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 1',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-489',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 2',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-490',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 3',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-491',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 4',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-492',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 5',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-493',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 6',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-494',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 7',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-495',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 8',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-496',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 9',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-497',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 10',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-498',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 11',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-499',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 12',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-500',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 13',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-501',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 14',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-502',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 15',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-503',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 16',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-504',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 17',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-505',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 18',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-506',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 19',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-507',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 20',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-508',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 21',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-509',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 22',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-510',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 23',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-511',
    nombre: 'Juzgado Contencioso Administrativo y Tributario N° 24',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-512',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 1',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-513',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 2',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-514',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 3',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-515',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 4',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-516',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 5',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-517',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 6',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-518',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 7',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-519',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 8',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-520',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 9',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-521',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 10',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-522',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 11',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-523',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 12',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-524',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 13',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-525',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 14',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-526',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 15',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-527',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 16',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-528',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 17',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-529',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 18',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-530',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 19',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-531',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 20',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-532',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 21',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-533',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 22',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-534',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 23',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-535',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 24',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-536',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 25',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-537',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 26',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-538',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 27',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-539',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 28',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-540',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 29',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-541',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 30',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-542',
    nombre: 'Juzgado Penal, Contravencional y de Faltas N° 31',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-543',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 1',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-544',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 2',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-545',
    nombre: 'Cámara de Apelaciones Contencioso Administrativo y Tributario Sala N° 3',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Contencioso Administrativo',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-546',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 1',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-547',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 2',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-548',
    nombre: 'Cámara de Apelaciones Penal, Contravencional y de Faltas Sala N° 3',
    dependencia: 'Ciudad Autónoma de Buenos Aires',
    ciudad: 'Ciudad Autónoma de Buenos Aires',
    fuero: 'Penal',
    instancia: 'Cámara',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-603',
    nombre: 'Juzgado Federal N° 1 - San Nicolas',
    dependencia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  },
  {
    id: 'juzgado-604',
    nombre: 'Juzgado Federal N° 2 - San Nicolas',
    dependencia: 'Justicia Federal',
    ciudad: 'San Nicolas de los Arroyos',
    fuero: 'Federal',
    instancia: 'Primera Instancia',
    direccion: '',
    telefono: ''
  }
];

export const mockRatings: Rating[] = [];
