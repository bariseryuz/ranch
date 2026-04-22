import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import { RAG } from './config.js';

export function createTextSplitter() {
  return new RecursiveCharacterTextSplitter({
    chunkSize: RAG.chunkSize,
    chunkOverlap: RAG.chunkOverlap,
  });
}

