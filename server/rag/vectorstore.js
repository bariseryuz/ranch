import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';

import { RAG } from './config.js';

export function createPineconeClient() {
  return new Pinecone({ apiKey: RAG.pineconeApiKey() });
}

export async function getPineconeIndex() {
  const pc = createPineconeClient();
  return pc.index(RAG.pineconeIndex());
}

export async function getVectorStore({ embeddings, namespace } = {}) {
  const pineconeIndex = await getPineconeIndex();
  return PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: namespace ?? RAG.pineconeNamespace(),
  });
}

