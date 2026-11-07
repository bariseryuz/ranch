import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

const events1311Logo = `${import.meta.env.BASE_URL}1311/1311.png`;

export default function EventsPage() {
  usePageMeta({
    title: 'Event Calendar',
    description:
      'Tailor-made events at Briggs Brothers Ranch with 1311 Events — weddings, retreats, and horse events at the barn.',
    keywords: 'ranch events, 1311 events, horse events barn, briggs brothers ranch venue',
  });

  return (
    <>
      <PageHero
        title="Events"
        subtitle="Tailor-made · 1311 Events · The barn"
        image={`${import.meta.env.BASE_URL}Weddings/Event%20Setup%201.png`}
        imageAlt="Event setup at Briggs Brothers Ranch"
      />
      <article className="page-section">
        <h2>Make the ranch yours</h2>
        <p>
          Briggs Brothers Ranch is built for gatherings of almost any kind — weddings, corporate
          retreats, private celebrations, and weekend buyouts. Guests work with our sister company{' '}
          <a href="https://1311events.com/" target="_blank" rel="noopener noreferrer">
            1311 Events
          </a>{' '}
          to tailor-make the event they want: layout, rentals, food and drink, staffing, and the
          details that make the day feel considered rather than generic.
        </p>
        <p>
          Tell us the occasion, guest count, and dates. 1311 shapes production around the land —
          ceremony spots, tented receptions, dinners, and full-service setups — so the ranch stays
          the setting and the event is built to your brief.
        </p>
      </article>
      <div className="page-columns">
        <div>
          <h3>Horse events & the barn</h3>
          <p>
            The facility is a strong home for horse events. We have a barn on the property, and the
            ranch setting suits clinics, gatherings, and celebrations that want horses and land in
            the same picture — not a hotel ballroom.
          </p>
        </div>
        <div>
          <h3>With 1311 Events</h3>
          <p>
            <img
              src={events1311Logo}
              alt="1311 Events"
              width={72}
              height={72}
              style={{ display: 'block', marginBottom: '1rem' }}
            />
            From tents and tables to chefs and bar service, 1311 Events builds the production so
            you can host the ranch event you actually have in mind.
          </p>
        </div>
      </div>
      <article className="page-section">
        <div className="cta-row">
          <Link to="/plan-your-event" className="primary">
            Start an inquiry
          </Link>
          <a
            href="https://1311events.com/"
            className="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit 1311 Events
          </a>
        </div>
      </article>
    </>
  );
}
