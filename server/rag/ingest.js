import crypto from 'node:crypto';
import path from 'node:path';

import { PineconeStore } from '@langchain/pinecone';

import { RAG } from './config.js';
import { loadDocumentsFromPath } from './loaders.js';
import { createTextSplitter } from './splitter.js';
import { createEmbeddings } from './embeddings.js';
import { getPineconeIndex } from './vectorstore.js';

function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}

function stableIdForChunk(doc) {
  const source = doc?.metadata?.source ? String(doc.metadata.source) : 'unknown';
  const page = doc?.metadata?.loc?.pageNumber ?? doc?.metadata?.pageNumber ?? '';
  const content = typeof doc?.pageContent === 'string' ? doc.pageContent : '';
  const h = crypto.createHash('sha256').update(`${source}|${page}|${content}`).digest('hex');
  return `${path.basename(source)}-${page}-${h.slice(0, 24)}`;
}

async function main() {
  const input = getArg('path') ?? getArg('input') ?? RAG.knowledgePath();
  const namespace = getArg('namespace') ?? RAG.pineconeNamespace();

  const embeddings = createEmbeddings();
  const splitter = createTextSplitter();
  const pineconeIndex = await getPineconeIndex();

  const docs = await loadDocumentsFromPath(input);
  if (docs.length === 0) {
    throw new Error(
      `No supported documents found at: ${path.resolve(input)} (supported: .pdf, .txt, .md)`,
    );
  }

  const chunks = await splitter.splitDocuments(docs);

  const store = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace,
  });

  const ids = chunks.map(stableIdForChunk);
  await store.addDocuments(chunks, { ids });

  console.log(
    `[ingest] Upserted ${chunks.length} chunks into index="${RAG.pineconeIndex()}" namespace="${namespace}"`,
  );
}

main().catch((e) => {
  console.error('[ingest] failed', e);
  process.exitCode = 1;
});

