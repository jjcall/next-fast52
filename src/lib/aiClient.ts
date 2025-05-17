import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';
// Replace with actual SDK or fetch logic for Perplexity if needed

// Environment variable checks
const openaiApiKey = process.env.OPENAI_API_KEY!;
const anthropicApiKey = process.env.ANTHROPIC_API_KEY!;

//const perplexityApiKey = process.env.PERPLEXITY_API_KEY!;

/**
 * OpenAI Client
 */
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

/**
 * Anthropic Client
 */
const anthropic = new Anthropic({
  apiKey: anthropicApiKey,
});

/**
 * Unified AI Client Export
 */
export const aiClient = {
  openai,
  anthropic,
};
