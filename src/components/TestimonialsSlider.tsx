import { useEffect, useMemo, useRef, useState } from 'react';
import type { Testimonial } from '../data/testimonials.ts';
import './TestimonialsSlider.css';

type Props = {
  items: Testimonial[];
  autoMs?: number;
};

export default function TestimonialsSlider({ items, autoMs = 6500 }: Props) {
  const safeItems = useMemo(() => items.filter((x) => x?.quote && x?.name), [items]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const count = safeItems.length;

  const go = (next: number) => {
    if (count === 0) return;
    const wrapped = ((next % count) + count) % count;
    setIndex(wrapped);
  };

  useEffect(() => {
    if (timer.current) window.clearInterval(timer.current);
    if (paused || count <= 1) return;
    timer.current = window.setInterval(() => go(index + 1), autoMs);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count, index, autoMs]);

  if (count === 0) return null;

  const current = safeItems[index];

  return (
    <section
      className="testimonials"
      aria-label="Guest comments"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <header className="testimonials__header">
        <span className="testimonials__eyebrow">Words from our guests</span>
        <h2 className="testimonials__title">A stay that lingers</h2>
        <p className="testimonials__lede">
          A few notes from the people who’ve experienced the ranch first-hand.
        </p>
      </header>

      <div className="testimonials__stage" role="region" aria-roledescription="carousel">
        <button
          type="button"
          className="testimonials__nav testimonials__nav--prev"
          aria-label="Previous comment"
          onClick={() => go(index - 1)}
          disabled={count <= 1}
        >
          ‹
        </button>

        <article className="testimonials__card">
          <p className="testimonials__quote">{current.quote}</p>
          <footer className="testimonials__byline">
            <span className="testimonials__name">{current.name}</span>
            {current.context ? (
              <span className="testimonials__context">{current.context}</span>
            ) : null}
          </footer>
        </article>

        <button
          type="button"
          className="testimonials__nav testimonials__nav--next"
          aria-label="Next comment"
          onClick={() => go(index + 1)}
          disabled={count <= 1}
        >
          ›
        </button>
      </div>

      {count > 1 ? (
        <div className="testimonials__dots" role="tablist" aria-label="Select comment">
          {safeItems.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`testimonials__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
            >
              <span className="testimonials__dot-inner" />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

