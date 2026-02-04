"use server";

import { summarizeCourtInsights } from "@/ai/flows/summarize-court-insights";
import { analyzeCourthouses } from "@/ai/flows/analyze-courthouses";
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
