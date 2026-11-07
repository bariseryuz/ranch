import { useEffect, useState } from 'react';
import './PageHero.css';
import './PhotoHeroSlider.css';

export type PhotoSlide = { src: string; alt: string };

type Props = {
  title: string;
  subtitle?: string;
  slides: PhotoSlide[];
  ariaLabel?: string;
};

export default function PhotoHeroSlider({ title, subtitle, slides, ariaLabel }: Props) {
  const [index, setIndex] = useState(0);
  const len = slides.length;

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + len) % len);

  useEffect(() => {
    if (len < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, 6500);
    return () => window.clearInterval(id);
  }, [len]);

  const current = slides[index];

  return (
    <section className="page-hero photo-hero" aria-roledescription="carousel">
      <div className="page-hero__media">
        <div className="page-hero__asset">
          {slides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={i === index ? slide.alt : ''}
              className={`page-hero__img photo-hero__img ${i === index ? 'is-active' : ''}`}
              fetchPriority={i === 0 ? 'high' : 'low'}
              decoding="async"
            />
          ))}
          <div className="page-hero__overlay" />
        </div>
      </div>
      <div className="page-hero__text">
        {subtitle ? <p className="page-hero__eyebrow">{subtitle}</p> : null}
        <h1 className="page-hero__title">{title}</h1>
      </div>
      {len > 1 ? (
        <div className="photo-hero__controls">
          <button
            type="button"
            className="photo-hero__nav"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <div className="photo-hero__dots" role="tablist" aria-label={ariaLabel ?? 'Photos'}>
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={slide.alt || `Photo ${i + 1}`}
                className={`photo-hero__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="photo-hero__nav"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            ›
          </button>
        </div>
      ) : null}
      {current ? <span className="photo-hero__sr">{current.alt}</span> : null}
    </section>
  );
}
