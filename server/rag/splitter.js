import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

import { RAG } from './config.js';

export function createTextSplitter() {
  return new RecursiveCharacterTextSplitter({
    chunkSize: RAG.chunkSize,
    chunkOverlap: RAG.chunkOverlap,
  });
}

