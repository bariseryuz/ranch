import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function PrivateEvents() {
  usePageMeta({
    title: 'Private Event Buyouts',
    description:
      'Milestone celebrations, family reunions, influencer retreats, and luxury brand activations.',
    keywords: 'private ranch events, luxury brand activation, private ranch buyout',
  });

  return (
    <>
      <PageHero
        title="Private Event Buyouts"
        subtitle="Full estate · Total privacy"
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Outdoor celebration"
      />
      <article className="page-section">
        <h2>Celebrations that stay in the family</h2>
        <p>
          From milestone birthdays to multi-generational reunions, the ranch becomes yours alone.
          We host influencer retreats and luxury brand activations with broadcast-worthy settings
          and discreet staff.
        </p>
        <ul className="feature-list">
          <li>Milestone celebrations</li>
          <li>Family reunions</li>
          <li>Influencer & creator retreats</li>
          <li>Luxury brand activations</li>
        </ul>
        <div className="cta-row">
          <Link to="/culinary" className="secondary">
            Culinary experience
          </Link>
          <Link to="/plan-your-event" className="primary">
            Inquire for buyout
          </Link>
        </div>
      </article>
    </>
  );
}
