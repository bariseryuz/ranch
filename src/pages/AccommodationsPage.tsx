import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import Accommodations from '../components/Accommodations.tsx';
import '../styles/editorial.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}Lodge/lodge-exterior.jpg`,
    alt: 'Lodge exterior from the path at golden hour at Briggs Brothers Ranch',
  },
  {
    src: `${base}Lodge/lodge-porch.jpg`,
    alt: 'Lodge porch with rocking chairs at Briggs Brothers Ranch',
  },
];

export default function AccommodationsPage() {
  usePageMeta({
    title: 'Accommodations',
    description:
      'Luxury ranch homes, guest cabins, glamping, and private suites—privacy and comfort at Briggs Brothers Ranch.',
    keywords: 'luxury ranch lodging, ranch guest cabins, glamping wedding',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Accommodations"
        subtitle="Privacy · Comfort · Western calm"
        ariaLabel="Accommodations photos"
        slides={slides}
      />
      <article className="page-section">
        <h2>Stay on the estate</h2>
        <p>
          Lodging is designed for buyouts: luxury ranch homes for leadership teams, guest cabins
          for family groups, glamping for adventurous guests, and private suites for hosts who
          demand quiet.
        </p>
        <div className="cta-row">
          <Link to="/plan-your-event" className="primary">
            Check availability
          </Link>
        </div>
      </article>
      <Accommodations />
    </>
  );
}
