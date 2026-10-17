export function getEnv(name, { required = false, defaultValue } = {}) {
  const raw = process.env[name];
  const value = typeof raw === 'string' ? raw.trim() : undefined;
  if (value) return value;
  if (defaultValue !== undefined) return defaultValue;
  if (required) throw new Error(`Missing required env var: ${name}`);
  return undefined;
}

export const RAG = {
  openaiApiKey: () => getEnv('OPENAI_API_KEY', { required: true }),
  chatModel: () => getEnv('OPENAI_MODEL', { defaultValue: 'gpt-4o-mini' }),
  embeddingModel: () =>
    getEnv('OPENAI_EMBEDDING_MODEL', { defaultValue: 'text-embedding-3-small' }),
  /** Must match Pinecone index dimension (e.g. briggs index = 1024 from Gemini era). */
  embeddingDimensions: () => {
    const raw = getEnv('OPENAI_EMBEDDING_DIMENSIONS', { defaultValue: '1024' });
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? n : 1024;
  },
  pineconeApiKey: () => getEnv('PINECONE_API_KEY', { required: true }),
  pineconeIndex: () => getEnv('PINECONE_INDEX', { required: true })?.toLowerCase(),
  pineconeNamespace: () => {
    const raw = getEnv('PINECONE_NAMESPACE', { defaultValue: 'default' });
    // Pinecone rejects the literal "__default__" on older API versions — use "default" instead.
    if (raw === '__default__') return 'default';
    return raw;
  },
  /** Comma-separated namespaces to query together (e.g. `default,menu`). If unset, only `pineconeNamespace()` is used. */
  retrievalNamespaces: () => {
    const raw = getEnv('RAG_RETRIEVAL_NAMESPACES', { defaultValue: '' });
    if (!raw) return null;
    const parts = raw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    return parts.length ? parts : null;
  },
  knowledgePath: () => getEnv('RAG_KNOWLEDGE_PATH', { defaultValue: 'server/rag/knowledge' }),
  chunkSize: 1000,
  chunkOverlap: 200,
};
