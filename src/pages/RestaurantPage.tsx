import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import '../styles/editorial.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}Dining/beer-porch.jpg`,
    alt: 'A drink on the lodge porch overlooking the ranch',
  },
  {
    src: `${base}Dining/bar-top.jpg`,
    alt: 'The restaurant bar at Briggs Brothers Ranch',
  },
  {
    src: `${base}Dining/bottle-lights.jpg`,
    alt: 'Bottle chandelier and bar shelves at the ranch restaurant',
  },
  {
    src: `${base}Dining/dinningcurrent.png`,
    alt: 'Dining at Briggs Brothers Ranch',
  },
];

export default function RestaurantPage() {
  usePageMeta({
    title: 'Restaurant & Bar',
    description:
      'Restaurant and bar at Briggs Brothers Ranch — open Thursday, Friday, and Saturday.',
    keywords: 'ranch restaurant, ranch bar, briggs brothers ranch dining',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Restaurant & Bar"
        subtitle="On the property · Open three nights"
        ariaLabel="Restaurant and bar photos"
        slides={slides}
      />
      <div className="hours-strip">
        <p className="hours-banner" role="status">
          <span className="hours-banner__label">Open</span>
          Thursday · Friday · Saturday
        </p>
      </div>
      <article className="page-section">
        <h2>A ranch restaurant and bar</h2>
        <p>
          Guests and visitors can dine and have a drink on the property. The restaurant and bar are
          open <strong>Thursday, Friday, and Saturday</strong> — a simple weekly rhythm so you know
          when to plan a meal, a night at the bar, or dinner after a day on the ranch.
        </p>
        <p>
          Staying in the lodge or the RV park makes it easy to walk over on those nights. For
          private dinners, event catering, or a larger gathering, our team and 1311 Events can
          help shape something beyond regular service.
        </p>
        <div className="cta-row">
          <Link to="/events" className="primary">
            Plan an event
          </Link>
        </div>
      </article>
    </>
  );
}
