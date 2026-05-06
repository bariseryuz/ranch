import { useState, useRef, useEffect, type ReactNode } from 'react';
import { fetchConciergeReply } from '../utils/conciergeApi.ts';
import { getConciergeReply } from '../utils/conciergeResponses.ts';
import './ConciergeChat.css';

type Msg = { role: 'user' | 'assistant'; text: string };

const conciergeApiUrl = import.meta.env.VITE_CONCIERGE_API_URL?.trim();

/** Renders `[label](url)` as a real link; everything else stays plain text. */
function textWithMarkdownLinks(text: string): ReactNode {
  const re = /\[([^\]]+)]\(([^)\s]+)\)/g;
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const href = m[2];
    out.push(
      <a
        key={k++}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="concierge__link"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : text;
}

export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      text:
        'Welcome to Briggs Brothers Ranch. Ask about guest capacity, corporate retreats, weddings, or culinary experiences.',
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    const t = input.trim();
    if (!t || loading) return;

    const userMsg: Msg = { role: 'user', text: t };
    const threadAfterUser = [...messages, userMsg];

    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);

    const fallbackError =
      'Sorry — we could not reach the concierge service. Please try again or email concierge@briggsbros.com.';

    try {
      let reply: string;
      if (conciergeApiUrl) {
        reply = await fetchConciergeReply(conciergeApiUrl, threadAfterUser);
      } else {
        await new Promise((r) => setTimeout(r, 350));
        reply = getConciergeReply(t);
      }
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', text: fallbackError }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="concierge">
      <button
        type="button"
        className="concierge__fab"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Close' : 'Concierge'}
      </button>
      {open && (
        <div className="concierge__panel" role="dialog" aria-label="AI concierge chat">
          <div className="concierge__head">
            <span>AI Concierge</span>
          </div>
          <div className="concierge__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`concierge__bubble concierge__bubble--${msg.role}`}>
                {textWithMarkdownLinks(msg.text)}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="concierge__input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && !loading && (e.preventDefault(), void send())
              }
              placeholder="Ask about the ranch…"
              aria-label="Message"
            />
            <button type="button" onClick={() => void send()} disabled={loading}>
              {loading ? '…' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
