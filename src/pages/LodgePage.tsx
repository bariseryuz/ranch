import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function LodgePage() {
  usePageMeta({
    title: 'The Lodge',
    description:
      'Lodge lodging at Briggs Brothers Ranch — a comfortable ranch stay for weekends, retreats, and private gatherings.',
    keywords: 'ranch lodge, briggs brothers ranch lodge, ranch lodging tennessee',
  });

  return (
    <>
      <PageHero
        title="The Lodge"
        subtitle="Ranch lodging · Quiet nights"
        image={`${import.meta.env.BASE_URL}RanchLifestyle/3.png`}
        imageAlt="Lodge lodging at Briggs Brothers Ranch"
      />
      <article className="page-section">
        <h2>A lodge stay on the estate</h2>
        <p>
          The lodge is the ranch house stay — rooms and shared gathering space for guests who want
          to wake up on the property, walk to the restaurant and bar, and settle into the quieter
          rhythm of the land.
        </p>
        <p>
          It suits couples, small groups, and hosts who need a home base for a weekend, a retreat,
          or a celebration. For a full look at lodging options, visit Accommodations. To reserve a
          room, use Book Room Now.
        </p>
        <div className="cta-row">
          <Link to="/book-room-now" className="primary">
            Book Room Now
          </Link>
          <Link to="/accommodations" className="secondary">
            All accommodations
          </Link>
        </div>
      </article>
    </>
  );
}
