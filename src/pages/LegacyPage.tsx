import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

const heroImage = `${import.meta.env.BASE_URL}ran.png`;

export default function LegacyPage() {
  usePageMeta({
    title: 'Legacy',
    description:
      'The story and heritage behind Briggs Brothers Ranch — stewardship, tradition, and a lasting commitment to the land.',
    keywords: 'ranch heritage, western legacy, private estate history',
  });

  return (
    <>
      <PageHero
        title="Legacy"
        subtitle="Heritage · Stewardship · Timeless hospitality"
        image={heroImage}
        imageAlt="Ranch landscape at golden hour"
      />
      <article className="page-section">
        <h2>Rooted in the land</h2>
        <p>
          Briggs Brothers Ranch carries forward a tradition of hospitality shaped by the land
          itself—open skies, quiet mornings, and gatherings that feel both intimate and grand.
          Our legacy is measured not in years alone, but in the care we extend to guests, to the
          estate, and to the generations who will walk these paths after us.
        </p>
        <p>
          We honor the past while building something lasting: a private retreat where
          excellence is the standard, and where every event becomes part of the ranch&apos;s
          story.
        </p>
        <div className="cta-row">
          <Link to="/the-ranch" className="secondary">
            The Ranch
          </Link>
          <Link to="/plan-your-event" className="primary">
            Plan your event
          </Link>
        </div>
      </article>
    </>
  );
}
