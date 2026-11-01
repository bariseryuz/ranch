import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function RVParkPage() {
  usePageMeta({
    title: 'RV Park',
    description:
      'RV park stays at Briggs Brothers Ranch in Parrottsville, Tennessee — a place to park, rest, and enjoy the ranch.',
    keywords: 'ranch RV park, Parrottsville RV stay, briggs brothers ranch camping',
  });

  return (
    <>
      <PageHero
        title="RV Park"
        subtitle="Park · Rest · Ranch air"
        image={`${import.meta.env.BASE_URL}Nature/accommodations-ranch.jpg`}
        imageAlt="Open ranch landscape for RV stays"
      />
      <article className="page-section">
        <h2>Stay with your RV on the ranch</h2>
        <p>
          The RV park is for guests traveling with their own rig who still want the ranch nearby —
          space to park, easy access to the restaurant and bar on open nights, and the same
          western setting as our lodge stays.
        </p>
        <p>
          Ask about availability and site details when you book, or send a concierge inquiry if you
          are pairing an RV stay with an event.
        </p>
        <div className="cta-row">
          <Link to="/book-room-now" className="primary">
            Book Room Now
          </Link>
          <Link to="/plan-your-event" className="secondary">
            Concierge inquiry
          </Link>
        </div>
      </article>
    </>
  );
}
