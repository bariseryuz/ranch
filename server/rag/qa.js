import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

import { RAG } from './config.js';
import { createEmbeddings } from './embeddings.js';
import { getVectorStore } from './vectorstore.js';

const SYSTEM_INSTRUCTION =
  'You are the AI concierge for Briggs Brothers Ranch, a luxury private ranch destination for ' +
  'corporate retreats, weddings, and culinary experiences. Be warm, concise, and helpful. ' +
  'If asked for pricing or contracts, encourage them to use the site inquiry form. ' +
  'Never invent specific prices or legal commitments. ' +
  'Use the provided context when it is relevant. If the context does not contain the answer, say so. ' +
  'Reply in plain text only (no markdown headings unless minimal).';

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
  topK = 6,
} = {}) {
  const latest = typeof message === 'string' ? message.trim() : '';
  const history = formatHistory(messages);

  if (!latest && !history) {
    throw new Error('Missing message or messages');
  }

  const embeddings = createEmbeddings();
  const store = await getVectorStore({ embeddings, namespace });
  const retriever = store.asRetriever(topK);

  const question = latest || history.split('\n').slice(-1)[0] || 'Hello';
  const docs = await retriever.getRelevantDocuments(question);
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

