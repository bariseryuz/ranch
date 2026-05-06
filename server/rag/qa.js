import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

import { RAG } from './config.js';
import { createEmbeddings } from './embeddings.js';
import { getVectorStore } from './vectorstore.js';

const SYSTEM_INSTRUCTION =
  'You are the AI concierge for Briggs Brothers Ranch, a luxury private ranch destination for ' +
  'corporate retreats, weddings, and culinary experiences. Be warm, concise, and helpful. ' +
  'If asked for pricing, contracts, availability, or booking, direct them to the inquiry form and include a plain-text link: "/plan-your-event". ' +
  'After giving a general answer, if they want help choosing options, you may also include: "/plan-your-event?tab=ai". ' +
  'Never invent specific prices or legal commitments. ' +
  'Use the provided context when it is relevant. If the context does not contain the answer, say so. ' +
  'Reply in plain text only (no markdown headings unless minimal).';

function dedupeDocs(docs, max) {
  const seen = new Set();
  const out = [];
  for (const d of docs) {
    const src = d.metadata?.source ? String(d.metadata.source) : '';
    const text = typeof d.pageContent === 'string' ? d.pageContent : '';
    const key = `${src}:${text.slice(0, 240)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(d);
    if (out.length >= max) break;
  }
  return out;
}

async function retrieveMerged({ embeddings, question, namespaces, topK }) {
  if (namespaces.length === 1) {
    const store = await getVectorStore({ embeddings, namespace: namespaces[0] });
    return store.asRetriever(topK).invoke(question);
  }

  const perNs = Math.max(2, Math.ceil(topK / namespaces.length));
  const batches = await Promise.all(
    namespaces.map(async (ns) => {
      const store = await getVectorStore({ embeddings, namespace: ns });
      return store.asRetriever(perNs).invoke(question);
    }),
  );
  return dedupeDocs(batches.flat(), topK);
}

function createChatModel() {
  return new ChatGoogleGenerativeAI({
    apiKey: RAG.geminiApiKey(),
    model: RAG.chatModel(),
    temperature: 0.3,
  });
}

function formatHistory(messages) {
  if (!Array.isArray(messages) || messages.length === 0) return '';
  const lines = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant'))
    .map((m) => {
      const label = m.role === 'user' ? 'Guest' : 'Concierge';
      const t =
        typeof m.text === 'string'
          ? m.text
          : typeof m.content === 'string'
            ? m.content
            : '';
      return `${label}: ${String(t ?? '').trim()}`;
    })
    .filter((l) => l.endsWith(':') === false)
    .join('\n');

  return lines.trim();
}

export async function answerConcierge({
  message,
  messages,
  namespace,
  namespaces,
  topK = 6,
} = {}) {
  const latest = typeof message === 'string' ? message.trim() : '';
  const history = formatHistory(messages);

  if (!latest && !history) {
    throw new Error('Missing message or messages');
  }

  const embeddings = createEmbeddings();
  const nsList =
    Array.isArray(namespaces) && namespaces.length > 0
      ? namespaces
      : namespace
        ? [namespace]
        : RAG.retrievalNamespaces() ?? [RAG.pineconeNamespace()];

  const question = latest || history.split('\n').slice(-1)[0] || 'Hello';
  const docs = await retrieveMerged({
    embeddings,
    question,
    namespaces: nsList,
    topK,
  });
  const context = docs
    .map((d, i) => {
      const src = d.metadata?.source ? ` (${d.metadata.source})` : '';
      return `[${i + 1}]${src}\n${d.pageContent}`;
    })
    .join('\n\n');

  const prompt =
    `${SYSTEM_INSTRUCTION}\n\n` +
    (history ? `Conversation so far:\n${history}\n\n` : '') +
    `Context:\n${context || '(no relevant context found)'}\n\n` +
    `Guest: ${latest || 'Hello'}\n` +
    `Concierge:`;

  const model = createChatModel();
  const result = await model.invoke(prompt);
  const reply = typeof result?.content === 'string' ? result.content : String(result?.content ?? '');

  if (!reply.trim()) throw new Error('Empty model response');
  return reply.trim();
}

