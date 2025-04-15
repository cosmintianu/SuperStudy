// This is an autogenerated file from Firebase Studio.
'use server';
/**
 * @fileOverview Summarizes the input text provided by the user.
 *
 * - summarizeInputText - A function that handles the summarization process.
 * - SummarizeInputTextOutput - The output type for the summarizeInputText function.
 * - SummarizeInputTextInput - The input type for the summarizeInputText function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SummarizeInputTextOutputSchema = z.object({
  summary: z.string().describe('The summary of the input text.'),
});

export type SummarizeInputTextOutput = z.infer<typeof SummarizeInputTextOutputSchema>;

const SummarizeInputTextInputSchema = z.object({
  text: z.string().describe('The text to summarize.'),
});

export type SummarizeInputTextInput = z.infer<typeof SummarizeInputTextInputSchema>;

export async function summarizeInputText(input: SummarizeInputTextInput): Promise<SummarizeInputTextOutput> {
  return summarizeInputTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeInputTextPrompt',
  input: {
    schema: z.object({
      text: z.string().describe('The text to summarize.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('The summary of the input text.'),
    }),
  },
  prompt: `Summarize the following text: {{{text}}}`,
});

const summarizeInputTextFlow = ai.defineFlow<
  typeof SummarizeInputTextInputSchema,
  typeof SummarizeInputTextOutputSchema
>(
  {
    name: 'summarizeInputTextFlow',
    inputSchema: SummarizeInputTextInputSchema,
    outputSchema: SummarizeInputTextOutputSchema,
  },
  async input => {\n    const {output} = await prompt(input);
    return output!;
  }
);
