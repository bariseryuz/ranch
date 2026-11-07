import { usePageMeta } from '../hooks/usePageMeta.ts';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import '../styles/editorial.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}Directions/arrival.jpg`,
    alt: 'Gravel drive, ranch sign, and red barns under a cloudy mountain sky',
  },
  {
    src: `${base}Directions/barns.jpg`,
    alt: 'Red barn, shed, and green wagon on a sunny ranch road',
  },
  {
    src: `${base}Directions/fence.jpg`,
    alt: 'Split-rail fence along the gravel road with red barns and mountains',
  },
];

export default function DirectionsPage() {
  usePageMeta({
    title: 'Directions',
    description: 'Directions to Briggs Brothers Ranch — coming soon.',
    keywords: 'briggs brothers ranch directions, Parrottsville ranch',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Directions"
        subtitle="How to find the ranch"
        ariaLabel="Ranch arrival photos"
        slides={slides}
      />
      <article className="page-section page-section--empty">
        {/* Directions content will be added after the rest of the site work is complete. */}
      </article>
    </>
  );
}
