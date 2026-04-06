import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function CorporateRetreats() {
  usePageMeta({
    title: 'Corporate Retreats',
    description:
      'Executive retreats, leadership summits, and team experiences at a private luxury ranch.',
    keywords: 'corporate retreat ranch, executive retreat venue, leadership retreat',
  });

  return (
    <>
      <PageHero
        title="Corporate Retreats"
        subtitle="Alignment · Focus · Discretion"
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Corporate team at the ranch"
      />
      <div className="page-columns">
        <div>
          <h3>Programs</h3>
          <ul>
            <li>Leadership retreats</li>
            <li>Team building</li>
            <li>Executive summits</li>
            <li>Company celebrations</li>
          </ul>
        </div>
        <div>
          <h3>Features</h3>
          <ul>
            <li>Private meeting spaces</li>
            <li>Curated dining</li>
            <li>Outdoor experiences</li>
            <li>Optional facilitator referrals</li>
          </ul>
        </div>
      </div>
      <article className="page-section">
        <h2>Designed for high-trust teams</h2>
        <p>
          Remove urban noise. The ranch gives your leadership space to think—and your teams room to
          reconnect. Agendas pair strategy blocks with outdoor adventure and chef-driven group
          dining.
        </p>
        <div className="cta-row">
          <Link to="/event-planner" className="primary">
            AI event planner
          </Link>
          <Link to="/plan-your-event" className="secondary">
            Request proposal
          </Link>
        </div>
      </article>
    </>
  );
}
