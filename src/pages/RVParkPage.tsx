import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import OpenConciergeButton from '../components/OpenConciergeButton.tsx';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import '../styles/editorial.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}RVPark/sunset.jpg`,
    alt: 'RV park at dusk on Briggs Brothers Ranch',
  },
  {
    src: `${base}RVPark/barn.jpg`,
    alt: 'Horse and trailer by the barn at the ranch RV park',
  },
  {
    src: `${base}RVPark/sabre.jpg`,
    alt: 'Fifth-wheel RV parked in the ranch field',
  },
  {
    src: `${base}RVPark/vista.jpg`,
    alt: 'Motorhome site at the ranch RV park',
  },
  {
    src: `${base}RVPark/hookup.jpg`,
    alt: 'Water and electric hookup at the ranch RV park',
  },
];

export default function RVParkPage() {
  usePageMeta({
    title: 'RV Park',
    description:
      'RV park stays at Briggs Brothers Ranch in Parrottsville, Tennessee — a place to park, rest, and enjoy the ranch.',
    keywords: 'ranch RV park, Parrottsville RV stay, briggs brothers ranch camping',
  });

  return (
    <>
      <PhotoHeroSlider
        title="RV Park"
        subtitle="Park · Rest · Ranch air"
        ariaLabel="RV park photos"
        slides={slides}
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
          <OpenConciergeButton className="primary">
            Concierge inquiry
          </OpenConciergeButton>
          <Link to="/lodge" className="secondary">
            The Lodge
          </Link>
        </div>
      </article>
    </>
  );
}
