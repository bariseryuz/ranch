import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Accommodations.css';

const base = import.meta.env.BASE_URL;

const stays = [
  {
    title: 'The Lodge',
    to: '/lodge',
    image: `${base}Lodge/lodge-porch.jpg`,
    alt: 'Lodge porch with rocking chairs at Briggs Brothers Ranch',
  },
  {
    title: 'The Barn',
    to: '/barn',
    image: `${base}Barn/horse.jpg`,
    alt: 'A horse looking through a stall opening at the ranch barn',
  },
  {
    title: 'RV Park',
    to: '/rv-park',
    image: `${base}RVPark/sunset.jpg`,
    alt: 'RV park at dusk on Briggs Brothers Ranch',
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
        <h2 className="stay-section__title">Lodge, Barn & RV</h2>
        <p className="stay-section__lede">
          Three ways to stay on the ranch — swipe or use the arrows, then book through Little
          Hotelier.
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
              <Link to={stay.to} className="stay-card">
                <img src={stay.image} alt={stay.alt} loading="lazy" decoding="async" />
                <div className="stay-card__info">
                  <h3>{stay.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="stay-section__footer">
        <Link to="/lodge#book-room" className="stay-section__cta">
          Book Room Now
        </Link>
      </div>
    </section>
  );
};

export default Accommodations;
