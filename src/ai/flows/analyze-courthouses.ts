'use server';
/**
 * @fileOverview Flujo de IA para analizar y sugerir correcciones en los datos de los juzgados.
 *
 * - analyzeCourthouses - Analiza una lista de juzgados en busca de inconsistencias.
 * - AnalyzeCourthousesInput - El tipo de entrada para la función.
 * - AnalyzeCourthousesOutput - El tipo de retorno para la función.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeCourthousesInputSchema = z.object({
  courthouses: z.array(z.any()).describe('Un array de objetos de juzgados para analizar.'),
  validProvinces: z.array(z.string()).describe('Una lista de nombres de provincias válidas para usar en las correcciones.'),
});
export type AnalyzeCourthousesInput = z.infer<typeof AnalyzeCourthousesInputSchema>;

const SuggestedCorrectionSchema = z.object({
  courthouseId: z.string().describe('El ID del juzgado con el problema.'),
  fieldName: z.string().describe('El campo que tiene el problema (ej. "nombre", "ciudad", "dependencia").'),
  currentValue: z.string().describe('El valor actual del campo.'),
  issueDescription: z.string().describe('Una descripción del problema encontrado.'),
  suggestedValue: z.string().describe('El valor corregido sugerido.'),
});

const AnalyzeCourthousesOutputSchema = z.object({
  corrections: z.array(SuggestedCorrectionSchema).describe('Un array de correcciones sugeridas.'),
});
export type AnalyzeCourthousesOutput = z.infer<typeof AnalyzeCourthousesOutputSchema>;

export async function analyzeCourthouses(
  input: AnalyzeCourthousesInput
): Promise<AnalyzeCourthousesOutput> {
  return analyzeCourthousesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeCourthousesPrompt',
  input: { schema: z.object({ courthouses: z.string(), validProvinces: z.array(z.string()) }) },
  output: { schema: AnalyzeCourthousesOutputSchema },
  prompt: `Eres un asistente experto en calidad de datos, especializado en normalizar información judicial de Argentina.
  Analiza la siguiente lista de juzgados (en formato JSON) y detecta inconsistencias, errores tipográficos y posibles duplicados.

  Para cada problema que encuentres, genera una sugerencia de corrección. Presta especial atención a:
  1.  **Errores tipográficos en los nombres:** Busca abreviaturas inconsistentes (N°, n°, Nro), errores comunes ("No" en lugar de "en lo").
  2.  **Formato de nombres:** Estandariza la capitalización y el formato. Por ejemplo, "Sala N° 1" debería ser consistente.
  3.  **Dependencia (Provincia) Faltante o Incorrecta:** Si el campo 'dependencia' está vacío, nulo, es igual a la ciudad, o es claramente incorrecto, tú DEBES deducir la provincia correcta basándote en el campo 'ciudad'. Eres un experto en geografía argentina y conoces la provincia de cada ciudad (por ejemplo, Tandil está en Buenos Aires, Salta (ciudad) está en Salta (provincia)). El valor que sugieras para 'dependencia' DEBE ser uno de la lista de provincias válidas proporcionada.
  4.  **Caracteres extraños:** Detecta y sugiere eliminar caracteres como tabulaciones (\\t) o saltos de línea al final de los nombres.

  Juzgados a analizar:
  {{{courthouses}}}

  Lista de provincias válidas para el campo 'dependencia':
  {{#each validProvinces}}
  - {{{this}}}
  {{/each}}

  Devuelve un objeto JSON con una única clave "corrections", que contenga un array de objetos de corrección. Cada objeto debe tener los campos: courthouseId, fieldName, currentValue, issueDescription, suggestedValue. Si no encuentras errores, el array debe estar vacío. Si un juzgado tiene el campo 'dependencia' vacío o nulo, GENERA una corrección para ese campo.`,
});

const analyzeCourthousesFlow = ai.defineFlow(
  {
    name: 'analyzeCourthousesFlow',
    inputSchema: AnalyzeCourthousesInputSchema,
    outputSchema: AnalyzeCourthousesOutputSchema,
  },
  async input => {
    const { output } = await prompt({
        courthouses: JSON.stringify(input.courthouses, null, 2),
        validProvinces: input.validProvinces,
    });
    return output!;
  }
);
