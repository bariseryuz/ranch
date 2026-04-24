export function getEnv(name, { required = false, defaultValue } = {}) {
  const raw = process.env[name];
  const value = typeof raw === 'string' ? raw.trim() : undefined;
  if (value) return value;
  if (defaultValue !== undefined) return defaultValue;
  if (required) throw new Error(`Missing required env var: ${name}`);
  return undefined;
}

export const RAG = {
  geminiApiKey: () => getEnv('GEMINI_API_KEY', { required: true }),
  chatModel: () => getEnv('GEMINI_MODEL', { defaultValue: 'gemini-2.0-flash' }),
  embeddingModel: () =>
    getEnv('GEMINI_EMBEDDING_MODEL', { defaultValue: 'gemini-embedding-001' }),
  pineconeApiKey: () => getEnv('PINECONE_API_KEY', { required: true }),
  pineconeIndex: () => getEnv('PINECONE_INDEX', { required: true })?.toLowerCase(),
  pineconeNamespace: () => getEnv('PINECONE_NAMESPACE', { defaultValue: 'default' }),
  knowledgePath: () => getEnv('RAG_KNOWLEDGE_PATH', { defaultValue: 'server/rag/knowledge' }),
  chunkSize: 1000,
  chunkOverlap: 200,
};

