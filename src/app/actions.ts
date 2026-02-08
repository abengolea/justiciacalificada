"use server";

import { summarizeCourtInsights } from "@/ai/flows/summarize-court-insights";
import { analyzeCourthouses } from "@/ai/flows/analyze-courthouses";
import { analyzeSentences } from "@/ai/flows/analyze-sentence-flow";
import type { Courthouse } from "@/lib/types";
import { provincias } from "@/lib/data";


export async function getAiSummary(courtId: string, comments: string[]) {
  try {
    const result = await summarizeCourtInsights({ courtId, comments });
    return { summary: result.summary };
  } catch (error) {
    console.error("Error generating AI summary:", error);
    return { summary: null };
  }
}

export async function getAiAnalysis(courthouses: Courthouse[]) {
  try {
    const result = await analyzeCourthouses({ courthouses, validProvinces: provincias });
    return { corrections: result.corrections ?? [] };
  } catch (error) {
    console.error("Error generating AI analysis:", error);
    return { corrections: [] };
  }
}

export async function getAiSentenceAnalysis(challengedSentencePdf: string, rulingSentencePdf: string) {
    try {
        const result = await analyzeSentences({ challengedSentencePdf, rulingSentencePdf });
        return { analysis: result, error: null };
    } catch (error) {
        console.error("Error generating AI sentence analysis:", error);
        return { analysis: null, error: "La IA no pudo procesar los documentos. Verifique que los archivos sean PDFs legibles y vuelva a intentarlo." };
    }
}

    