import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './ExperienceGrid.css';

const experiences = [
  {
    title: 'Corporate Retreats',
    to: '/corporate-retreats',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Leadership retreats',
      'Team building',
      'Executive summits',
      'Company celebrations',
    ],
    extra: 'Private meeting spaces • Curated dining • Outdoor experiences',
  },
  {
    title: 'Luxury Weddings',
    to: '/luxury-weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Scenic ceremony locations',
      'Luxury tented receptions',
      'Rehearsal dinners',
      'Weekend experiences',
    ],
    extra: 'Exclusive destination • Western luxury setting',
  },
  {
    title: 'Private Events',
    to: '/private-events',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Milestone celebrations',
      'Family reunions',
      'Influencer retreats',
      'Brand activations',
    ],
    extra: 'Chef-driven menus • Private ranch buyouts',
  },
  {
    title: 'The Ranch',
    to: '/the-ranch',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Private estate buyouts',
      'Golden-hour landscapes',
      'Fireside gatherings',
      'Outdoor adventure',
    ],
    extra: 'Privacy • Exclusivity • Refined western calm',
  },
  {
    title: 'Culinary',
    to: '/culinary',
    image:
      '/table.png',
    features: [
      'Chef-driven seasonal menus',
      'Live-fire cooking',
      'Wine & whiskey tastings',
      "Chef's table experiences",
    ],
    extra: 'Farm-to-table • Caviar • Curated pairings',
  },
  {
    title: 'Accommodations',
    to: '/accommodations',
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1000',
    features: [
      'Luxury ranch homes',
      'Guest cabins',
      'Glamping & suites',
      'Weekend wedding lodging',
    ],
    extra: 'Comfort • Discretion • Ranch-house hospitality',
  },
];

const ExperienceGrid = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.experience-carousel__slide');
    const step = (card?.offsetWidth ?? 400) + 30;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="services" className="grid-section">
      <div className="grid-header">
        <h2 className="grid-main-title">Tailored Gatherings</h2>
        <p className="grid-subtitle">
          Unforgettable moments set against the western frontier.
        </p>
      </div>

      <div className="experience-carousel">
        <button
          type="button"
          className="experience-carousel__nav experience-carousel__nav--prev"
          aria-label="Previous experiences"
          onClick={() => scroll(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="experience-carousel__nav experience-carousel__nav--next"
          aria-label="Next experiences"
          onClick={() => scroll(1)}
        >
          ›
        </button>

        <div
          ref={trackRef}
          className="experience-carousel__track"
          tabIndex={0}
          role="region"
          aria-label="Tailored gatherings — scroll or use arrows"
        >
          {experiences.map((item, index) => (
            <div key={item.to + index} className="experience-carousel__slide">
              <div className="experience-card">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                  <div className="card-overlay">
                    <Link to={item.to} className="card-btn">
                      Explore Details
                    </Link>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <ul className="card-features">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <p className="card-extra">{item.extra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
