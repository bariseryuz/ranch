import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Accommodations.css';

const base = import.meta.env.BASE_URL;

const stays = [
  {
    title: 'Luxury Ranch Homes',
    image: `${base}RanchLifestyle/3.png`,
    alt: 'Luxury ranch home on the estate',
  },
  {
    title: 'Guest Cabins',
    image: `${base}Cabin.png`,
    alt: 'Guest cabin porch overlooking the ranch',
  },
  {
    title: 'Glamping & Suites',
    image: `${base}Glamping.jpeg`,
    alt: 'Glamping tent and private suites',
  },
] as const;

const Accommodations = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.stay-carousel__slide');
    const step = (card?.offsetWidth ?? 400) + 24;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="stay" className="stay-section">
      <div className="stay-section__header">
        <span className="stay-section__eyebrow">Accommodations</span>
        <h2 className="stay-section__title">Privacy & Comfort</h2>
        <p className="stay-section__lede">
          Luxury ranch homes, guest cabins, and glamping — swipe or use the arrows to explore each
          stay.
        </p>
      </div>

      <div className="stay-carousel">
        <button
          type="button"
          className="stay-carousel__nav stay-carousel__nav--prev"
          aria-label="Previous accommodation"
          onClick={() => scroll(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="stay-carousel__nav stay-carousel__nav--next"
          aria-label="Next accommodation"
          onClick={() => scroll(1)}
        >
          ›
        </button>

        <div
          ref={trackRef}
          className="stay-carousel__track"
          tabIndex={0}
          role="region"
          aria-label="Accommodations — scroll or use arrows"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              scroll(-1);
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              scroll(1);
            }
          }}
        >
          {stays.map((stay) => (
            <div key={stay.title} className="stay-carousel__slide">
              <article className="stay-card">
                <img src={stay.image} alt={stay.alt} loading="lazy" decoding="async" />
                <div className="stay-card__info">
                  <h3>{stay.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="stay-section__footer">
        <Link to="/accommodations" className="stay-section__cta">
          Explore accommodations
        </Link>
      </div>
    </section>
  );
};

export default Accommodations;
