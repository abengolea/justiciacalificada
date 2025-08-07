'use server';

/**
 * @fileOverview A flow that summarizes lawyer comments for a given court.
 *
 * - summarizeCourtInsights - A function that summarizes lawyer comments for a given court.
 * - SummarizeCourtInsightsInput - The input type for the summarizeCourtInsights function.
 * - SummarizeCourtInsightsOutput - The return type for the summarizeCourtInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourtInsightsInputSchema = z.object({
  courtId: z.string().describe('The ID of the court to summarize comments for.'),
  comments: z
    .string()
    .array()
    .describe('An array of comments to summarize for the court.'),
});
export type SummarizeCourtInsightsInput = z.infer<typeof SummarizeCourtInsightsInputSchema>;

const SummarizeCourtInsightsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key insights and sentiment trends.'),
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
  prompt: `You are an AI assistant helping lawyers quickly understand the general consensus about a court.

  Summarize the key insights and sentiment trends from the following lawyer comments for court ID {{{courtId}}}. Return the result in the summary field.

  Comments:
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
