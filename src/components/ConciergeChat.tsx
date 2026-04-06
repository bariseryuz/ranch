import { useState, useRef, useEffect } from 'react';
import { getConciergeReply } from '../utils/conciergeResponses.ts';
import './ConciergeChat.css';

type Msg = { role: 'user' | 'assistant'; text: string };

export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
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

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: 'user', text: t }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', text: getConciergeReply(t) }]);
    }, 400);
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
            <small>Rule-based · connect API later</small>
          </div>
          <div className="concierge__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`concierge__bubble concierge__bubble--${msg.role}`}>
                {msg.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="concierge__input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), send())}
              placeholder="Ask about the ranch…"
              aria-label="Message"
            />
            <button type="button" onClick={send}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
