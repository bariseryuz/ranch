/** POST body sent to the concierge backend. */
export type ConciergeRequestPayload = {
  /** Latest user turn */
  message: string;
  /** Full thread for models that need context */
  messages: { role: 'user' | 'assistant'; text: string }[];
};

function extractReply(data: unknown): string | null {
  if (typeof data === 'string') return data;
  if (typeof data !== 'object' || data === null) return null;
  const o = data as Record<string, unknown>;
  const nested = o.data;
  const candidates: unknown[] = [
    o.reply,
    o.message,
    o.text,
    o.response,
    o.content,
    typeof nested === 'object' && nested !== null
      ? (nested as Record<string, unknown>).reply ??
        (nested as Record<string, unknown>).message ??
        (nested as Record<string, unknown>).text
      : undefined,
  ];
  for (const c of candidates) {
    if (typeof c === 'string' && c.trim()) return c;
  }
  return null;
}

/**
 * POST JSON to your API. Accepts common reply shapes: `{ reply }`, `{ message }`, `{ text }`, `{ data: { reply } }`.
 */
export async function fetchConciergeReply(
  apiUrl: string,
  messages: { role: 'user' | 'assistant'; text: string }[],
): Promise<string> {
  const userTurns = messages.filter((m) => m.role === 'user');
  const latest = userTurns[userTurns.length - 1]?.text ?? '';
  const payload: ConciergeRequestPayload = {
    message: latest,
    messages: messages.map((m) => ({ role: m.role, text: m.text })),
  };

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`Concierge HTTP ${res.status}`);

  const data: unknown = await res.json();
  const reply = extractReply(data);
  if (reply) return reply;
  throw new Error('Concierge response did not include a text reply');
}
