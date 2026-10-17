import { OpenAIEmbeddings } from '@langchain/openai';

import { RAG } from './config.js';

export function createEmbeddings() {
  return new OpenAIEmbeddings({
    apiKey: RAG.openaiApiKey(),
    model: RAG.embeddingModel(),
  });
}
