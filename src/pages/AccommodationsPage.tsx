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
  {
    src: `${base}Barn/aisle.jpg`,
    alt: 'The barn aisle with wooden stalls at Briggs Brothers Ranch',
  },
  {
    src: `${base}RVPark/sunset.jpg`,
    alt: 'RV park at dusk on Briggs Brothers Ranch',
  },
];

export default function AccommodationsPage() {
  usePageMeta({
    title: 'Accommodations',
    description:
      'Lodge rooms, the barn, and RV park stays at Briggs Brothers Ranch — book through Little Hotelier.',
    keywords: 'ranch lodge, ranch barn stay, Parrottsville RV park, briggs brothers ranch lodging',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Accommodations"
        subtitle="Lodge · Barn · RV Park"
        ariaLabel="Accommodations photos"
        slides={slides}
      />
      <article className="page-section">
        <h2>Stay on the estate</h2>
        <p>
          Choose the lodge for rooms and the common room, the barn when horses are part of the
          stay, or the RV park if you are traveling with a rig. Lodge, barn, and RV stays book
          through the same ranch booking engine.
        </p>
        <div className="cta-row">
          <Link to="/lodge#book-room" className="primary">
            Book Room Now
          </Link>
          <Link to="/barn" className="secondary">
            The Barn
          </Link>
        </div>
      </article>
      <Accommodations />
    </>
  );
}
