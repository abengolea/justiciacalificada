'use server';
/**
 * @fileOverview Flujo de IA para analizar sentencias en PDF.
 *
 * - analyzeSentences - Extrae detalles del caso y resume el motivo de la arbitrariedad.
 * - AnalyzeSentencesInput - El tipo de entrada para la función.
 * - AnalyzeSentencesOutput - El tipo de retorno para la función.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeSentencesInputSchema = z.object({
  challengedSentencePdf: z.string().describe("El PDF de la sentencia impugnada, como un data URI que debe incluir un tipo MIME y usar codificación Base64. Formato esperado: 'data:<mimetype>;base64,<encoded_data>'."),
  rulingSentencePdf: z.string().describe("El PDF de la sentencia revocatoria, como un data URI que debe incluir un tipo MIME y usar codificación Base64. Formato esperado: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type AnalyzeSentencesInput = z.infer<typeof AnalyzeSentencesInputSchema>;

const AnalyzeSentencesOutputSchema = z.object({
  caseName: z.string().describe('La carátula del caso (ej. "PEREZ, JUAN c/ GONZALEZ, PEDRO s/ DAÑOS").'),
  caseNumber: z.string().describe('El número de expediente del caso.'),
  caseYear: z.coerce.number().describe('El año en que se inició el caso.'),
  summary: z.string().describe('Un resumen conciso de los motivos por los cuales la sentencia original fue declarada arbitraria por el tribunal superior.'),
});
export type AnalyzeSentencesOutput = z.infer<typeof AnalyzeSentencesOutputSchema>;

export async function analyzeSentences(
  input: AnalyzeSentencesInput
): Promise<AnalyzeSentencesOutput> {
  return analyzeSentencesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSentencesPrompt',
  input: { schema: AnalyzeSentencesInputSchema },
  output: { schema: AnalyzeSentencesOutputSchema },
  prompt: `Eres un asistente legal experto en derecho argentino. Se te proporcionarán dos documentos en formato PDF:
1. Una sentencia de un tribunal inferior que fue impugnada.
2. Una sentencia de un tribunal superior que revoca la primera por considerarla "arbitraria".

Tu tarea es analizar ambos documentos y extraer la siguiente información con precisión:
1.  **caseName**: La carátula completa del caso (ej: "PEREZ, JUAN c/ GONZALEZ, PEDRO s/ DAÑOS Y PERJUICIOS").
2.  **caseNumber**: El número de expediente (ej: "12345/2022").
3.  **caseYear**: El año de inicio del expediente.
4.  **summary**: Un resumen claro y conciso (no más de 3 párrafos) explicando los fundamentos principales por los que el tribunal superior consideró que la sentencia original era arbitraria. Céntrate en los vicios del fallo revocado (ej: omisión de prueba decisiva, fundamentación aparente, apartamiento de la normativa aplicable, etc.).

Documento de Sentencia Impugnada:
{{media url=challengedSentencePdf}}

Documento de Sentencia Revocatoria:
{{media url=rulingSentencePdf}}

Analiza los documentos cuidadosamente y devuelve la información en el formato JSON especificado.`,
});


const analyzeSentencesFlow = ai.defineFlow(
  {
    name: 'analyzeSentencesFlow',
    inputSchema: AnalyzeSentencesInputSchema,
    outputSchema: AnalyzeSentencesOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);

    