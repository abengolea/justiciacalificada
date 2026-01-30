'use server';

/**
 * @fileOverview Un flujo que resume los comentarios de los abogados para un juzgado determinado.
 *
 * - summarizeCourtInsights - Una función que resume los comentarios de los abogados para un juzgado determinado.
 * - SummarizeCourtInsightsInput - El tipo de entrada para la función summarizeCourtInsights.
 * - SummarizeCourtInsightsOutput - El tipo de retorno para la función summarizeCourtInsights.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourtInsightsInputSchema = z.object({
  courtId: z.string().describe('El ID del juzgado para el cual resumir los comentarios.'),
  comments: z
    .string()
    .array()
    .describe('Un array de comentarios para resumir para el juzgado.'),
});
export type SummarizeCourtInsightsInput = z.infer<typeof SummarizeCourtInsightsInputSchema>;

const SummarizeCourtInsightsOutputSchema = z.object({
  summary: z.string().describe('Un resumen de las ideas clave y las tendencias de sentimiento.'),
});
export type SummarizeCourtInsightsOutput = z.infer<typeof SummarizeCourtInsightsOutputSchema>;

export async function summarizeCourtInsights(
  input: SummarizeCourtInsightsInput
): Promise<SummarizeCourtInsightsOutput> {
  return summarizeCourtInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCourtInsightsPrompt',
  input: {schema: SummarizeCourtInsightsInputSchema},
  output: {schema: SummarizeCourtInsightsOutputSchema},
  prompt: `Eres un asistente de IA que ayuda a los abogados a comprender rápidamente el consenso general sobre un juzgado.

  Resume las ideas clave y las tendencias de sentimiento de los siguientes comentarios de abogados para el juzgado con ID {{{courtId}}}. Devuelve el resultado en el campo de resumen.

  Comentarios:
  {{#each comments}}
  - {{{this}}}
  {{/each}}`,
});

const summarizeCourtInsightsFlow = ai.defineFlow(
  {
    name: 'summarizeCourtInsightsFlow',
    inputSchema: SummarizeCourtInsightsInputSchema,
    outputSchema: SummarizeCourtInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
