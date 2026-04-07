import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { tailoredPackages } from '../data/tailoredPackages.ts';
import './TailoredGatheringsPage.css';

function publicAsset(path: string) {
  const parts = path.split('/').map((p) => encodeURIComponent(p));
  return `${import.meta.env.BASE_URL}${parts.join('/')}`;
}

export default function TailoredGatheringsPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  usePageMeta({
    title: 'Tailored Gatherings',
    description:
      'Curated packages — wellness, escape, interactive experiences, and bespoke ranch buyouts at Briggs Brothers Ranch.',
    keywords:
      'luxury ranch packages, corporate retreat package, ranch wellness retreat',
  });

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>('.tgp-carousel__slide');
    const step = (slide?.offsetWidth ?? 360) + 28;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="tgp-page">
      <div className="tgp-page__content">
        <header className="tgp-page__header">
          <h1 className="tgp-page__title">Tailored Gatherings</h1>
          <p className="tgp-page__subtitle">
            Unforgettable moments set against the western frontier.
          </p>
        </header>

        <div className="tgp-carousel">
          <button
            type="button"
            className="tgp-carousel__nav tgp-carousel__nav--prev"
            aria-label="Previous packages"
            onClick={() => scroll(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="tgp-carousel__nav tgp-carousel__nav--next"
            aria-label="Next packages"
            onClick={() => scroll(1)}
          >
            ›
          </button>

          <div
            ref={trackRef}
            className="tgp-carousel__track"
            role="region"
            aria-label="Tailored gathering packages"
            tabIndex={0}
          >
            {tailoredPackages.map((pkg) => (
              <article key={pkg.id} className="tgp-carousel__slide">
                <div className="tgp-card">
                  <div className="tgp-card__image-wrap">
                    <img
                      src={publicAsset(pkg.image)}
                      alt=""
                      className="tgp-card__image"
                      loading="lazy"
                    />
                  </div>
                  <div className="tgp-card__label">
                    <h2 className="tgp-card__title">{pkg.title}</h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="tgp-page__cta">
          <Link to="/plan-your-event" className="tgp-page__cta-btn">
            Plan your event
          </Link>
        </div>
      </div>
    </div>
  );
}
