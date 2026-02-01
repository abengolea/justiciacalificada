import type { Courthouse } from './types';

// Este archivo ya no se utiliza. La carga de datos se realiza a través de la importación de CSV
// en la página de administración de juzgados.
export const juzgadosDePrueba: Omit<Courthouse, 'id'>[] = [];
