/**
 * Production: static SPA + POST /api/concierge (Gemini).
 * Local + Vite: set CONCIERGE_API_ONLY=true to serve only /api (see package.json dev:api).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import express from 'express';

import { answerConcierge } from './rag/qa.js';
import { sendInquiryEmail } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

dotenv.config({ path: path.join(root, '.env') });
dotenv.config({ path: path.join(root, '.env.local'), override: true });

const PORT = Number(process.env.PORT, 10) || 3000;
const apiOnly = process.env.CONCIERGE_API_ONLY === 'true' || process.env.CONCIERGE_API_ONLY === '1';

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
  const body = req.body;
  const latest =
    typeof body?.message === 'string' ? body.message.trim() : '';
  const messages = Array.isArray(body?.messages) ? body.messages : [];
  const namespace =
    typeof body?.namespace === 'string' ? body.namespace.trim() : undefined;
  const namespaces = Array.isArray(body?.namespaces)
    ? body.namespaces
        .filter((n) => typeof n === 'string')
        .map((n) => n.trim())
        .filter(Boolean)
    : undefined;

  if (!latest && messages.length === 0) {
    return res.status(400).json({ error: 'Missing message or messages' });
  }

  try {
    const reply = await answerConcierge({
      message: latest,
      messages,
      namespace,
      namespaces,
    });

    return res.json({ reply });
  } catch (e) {
    console.error('[concierge]', e);
    return res.status(500).json({
      error: 'Concierge request failed',
      reply:
        'Sorry — something went wrong. Please try again or email concierge@briggsbros.com.',
    });
  }
});

app.post('/api/inquiry', async (req, res) => {
  const payload = req.body;
  if (!payload || typeof payload.name !== 'string' || !payload.name.trim()) {
    return res.status(400).json({ error: 'Missing required inquiry fields' });
  }
  try {
    await sendInquiryEmail(payload);
    return res.json({ ok: true });
  } catch (e) {
    console.error('[inquiry]', e);
    return res.status(500).json({ error: 'Failed to send inquiry email' });
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
