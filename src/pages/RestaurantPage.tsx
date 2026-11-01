import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function RestaurantPage() {
  usePageMeta({
    title: 'Restaurant & Bar',
    description:
      'Restaurant and bar at Briggs Brothers Ranch — open Thursday, Friday, and Saturday.',
    keywords: 'ranch restaurant, ranch bar, briggs brothers ranch dining',
  });

  return (
    <>
      <PageHero
        title="Restaurant & Bar"
        subtitle="On the property · Open three nights"
        image={`${import.meta.env.BASE_URL}Dining/dinningcurrent.png`}
        imageAlt="Dining at Briggs Brothers Ranch"
      />
      <article className="page-section">
        <p className="hours-banner" role="status">
          <span className="hours-banner__label">Open</span>
          Thursday · Friday · Saturday
        </p>
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
          <Link to="/book-room-now" className="primary">
            Book a stay
          </Link>
          <Link to="/events" className="secondary">
            Plan an event
          </Link>
        </div>
      </article>
    </>
  );
}
