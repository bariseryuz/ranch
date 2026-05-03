import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function TheRanch() {
  usePageMeta({
    title: 'The Ranch',
    description:
      'Briggs Brothers Ranch — a private luxury estate for executive retreats, destination weddings, and bespoke celebrations.',
    keywords:
      'luxury ranch retreat, private ranch events, executive retreat venue, luxury ranch wedding venue',
  });

  return (
    <>
      <PageHero
        title="The Ranch"
        subtitle="Privacy · Exclusivity · Nature"
        image={`${import.meta.env.BASE_URL}Weddings/Interactive%20Experience%20Package.png`}
        imageAlt="Interactive Experience Package"
      />
      <article className="page-section">
        <h2>A refined escape into nature</h2>
        <p>
          Briggs Brothers Ranch is a private estate designed for those seeking a refined escape
          into nature. Whether hosting an executive retreat, luxury wedding, or private celebration,
          the ranch offers a setting where hospitality, adventure, and elevated dining come
          together.
        </p>
        <p>Guests experience:</p>
        <ul className="feature-list">
          <li>Private ranch buyouts</li>
          <li>Chef-driven dining experiences</li>
          <li>Outdoor adventures</li>
          <li>Fireside gatherings</li>
          <li>Luxury accommodations</li>
        </ul>
        <div className="cta-row">
          <Link to="/experiences" className="primary">
            View experiences
          </Link>
          <Link to="/plan-your-event" className="secondary">
            Plan your event
          </Link>
        </div>
      </article>
    </>
  );
}
