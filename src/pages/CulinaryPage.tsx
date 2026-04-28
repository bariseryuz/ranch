import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import Culinary from '../components/Culinary.tsx';
import '../styles/editorial.css';

export default function CulinaryPage() {
  usePageMeta({
    title: 'The Culinary Experience',
    description:
      'Chef-driven dining, live-fire cooking, farm-to-table dinners, and curated wine at Briggs Brothers Ranch.',
    keywords: 'luxury ranch dining, chef table, wine pairing ranch',
  });

  return (
    <>
      <PageHero
        title="The Culinary Experience"
        subtitle="Memoirs · Live fire · Seasonal craft"
        image="/Dining/dinningcurrent.png"
        imageAlt="Dining at Briggs Brothers Ranch"
      />
      <article className="page-section">
        <p>
          Dining at Briggs Brothers Ranch is an experience in itself—chef-driven menus, seasonal
          ingredients, live-fire cooking, and curated wine pairings. Optional experiences include
          caviar tastings, whiskey flights, and chef’s table intimacy.
        </p>
        <div className="cta-row">
          <Link to="/plan-your-event" className="primary">
            Plan a culinary weekend
          </Link>
        </div>
      </article>
      <Culinary />
    </>
  );
}
