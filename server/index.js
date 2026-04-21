/**
 * Production: static SPA + POST /api/concierge (Gemini).
 * Local + Vite: set CONCIERGE_API_ONLY=true to serve only /api (see package.json dev:api).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

dotenv.config({ path: path.join(root, '.env') });
dotenv.config({ path: path.join(root, '.env.local'), override: true });

const PORT = Number(process.env.PORT, 10) || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim();
const GEMINI_MODEL = process.env.GEMINI_MODEL?.trim() || 'gemini-2.0-flash';
const apiOnly = process.env.CONCIERGE_API_ONLY === 'true' || process.env.CONCIERGE_API_ONLY === '1';

const SYSTEM_INSTRUCTION =
  'You are the AI concierge for Briggs Brothers Ranch, a luxury private ranch destination for ' +
  'corporate retreats, weddings, and culinary experiences. Be warm, concise, and helpful. ' +
  'If asked for pricing or contracts, encourage them to use the site inquiry form. ' +
  'Never invent specific prices or legal commitments. ' +
  'Reply in plain text only (no markdown headings unless minimal).';

const app = express();
app.use(express.json({ limit: '512kb' }));

/** Dev: browser may call API on another port without Vite proxy */
app.use((req, res, next) => {
  const o = req.headers.origin;
  if (
    o &&
    (/^https?:\/\/localhost(:\d+)?$/i.test(o) ||
      /^https?:\/\/127\.0\.0\.1(:\d+)?$/i.test(o))
  ) {
    res.setHeader('Access-Control-Allow-Origin', o);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.post('/api/concierge', async (req, res) => {
  if (!GEMINI_API_KEY) {
    return res.json({
      reply:
        'The concierge service is not configured yet. Please email concierge@briggsbros.com.',
    });
  }

  const body = req.body;
  const latest =
    typeof body?.message === 'string' ? body.message.trim() : '';
  const messages = Array.isArray(body?.messages) ? body.messages : [];

  if (!latest && messages.length === 0) {
    return res.status(400).json({ error: 'Missing message or messages' });
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const ordered =
      messages.length > 0
        ? messages
        : [{ role: 'user', text: latest || 'Hello' }];

    const lines = ordered
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant'))
      .map((m) => {
        const label = m.role === 'user' ? 'Guest' : 'Concierge';
        const t =
          typeof m.text === 'string'
            ? m.text
            : typeof m.content === 'string'
              ? m.content
              : '';
        return `${label}: ${t}`;
      })
      .join('\n');

    if (!lines.trim()) {
      return res.status(400).json({ error: 'Empty message' });
    }

    const prompt =
      'Conversation so far:\n' +
      lines +
      '\n\nRespond as the Concierge to the Guest’s latest message above.';

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    if (!reply?.trim()) {
      return res.status(502).json({ error: 'Empty model response' });
    }

    return res.json({ reply: reply.trim() });
  } catch (e) {
    console.error('[concierge]', e);
    return res.status(500).json({
      error: 'Concierge request failed',
      reply:
        'Sorry — something went wrong. Please try again or email concierge@briggsbros.com.',
    });
  }
});

const distReady = fs.existsSync(path.join(dist, 'index.html'));

if (!apiOnly && distReady) {
  app.use(express.static(dist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(dist, 'index.html'));
  });
} else if (!apiOnly && !distReady) {
  console.warn(
    '[server] No dist/ build found; only /api/concierge is available. Run `npm run build` or use CONCIERGE_API_ONLY.',
  );
}

app.listen(PORT, () => {
  console.log(`[server] listening on ${PORT}${apiOnly ? ' (API only)' : ''}`);
});
