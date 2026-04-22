import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';

import { RAG } from './config.js';

export function createEmbeddings() {
  return new GoogleGenerativeAIEmbeddings({
    apiKey: RAG.geminiApiKey(),
    modelName: RAG.embeddingModel(),
  });
}

