"use server";

import { summarizeCourtInsights } from "@/ai/flows/summarize-court-insights";

export async function getAiSummary(courtId: string, comments: string[]) {
  try {
    const result = await summarizeCourtInsights({ courtId, comments });
    return { summary: result.summary };
  } catch (error) {
    console.error("Error generating AI summary:", error);
    return { summary: null };
  }
}
