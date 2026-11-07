import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import OpenConciergeButton from '../components/OpenConciergeButton.tsx';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import '../styles/editorial.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}Barn/horse.jpg`,
    alt: 'A black horse looking through a stall opening at Briggs Brothers Ranch',
  },
  {
    src: `${base}Barn/stall-14.jpg`,
    alt: 'Horse looking over stall door 14 in the ranch barn',
  },
  {
    src: `${base}Barn/aisle.jpg`,
    alt: 'The barn aisle with wooden stalls, fans, and daylight at the far end',
  },
  {
    src: `${base}Barn/stall-12.jpg`,
    alt: 'Empty stall 12 with shavings in the ranch barn',
  },
];

export default function BarnPage() {
  usePageMeta({
    title: 'The Barn',
    description:
      'The barn at Briggs Brothers Ranch — stalls, horses, and a working facility for horse events with 1311 Events.',
    keywords: 'ranch barn, horse events, briggs brothers ranch stalls, 1311 events barn',
  });

  return (
    <>
      <PhotoHeroSlider
        title="The Barn"
        subtitle="Horses · Stalls · Working ranch"
        ariaLabel="Barn photos"
        slides={slides}
      />
      <article className="page-section">
        <h2>A working barn on the ranch</h2>
        <p>
          The barn is part of daily life at Briggs Brothers Ranch — timber stalls, a dirt aisle,
          and horses looking over the doors. It is a working facility, not a set piece: numbered
          stalls, shavings underfoot, and the quiet of a barn that is actually used.
        </p>
        <p>
          The ranch hosts horse events here. Clinics, gatherings, and celebrations that want
          horses and land in the same picture belong in this building as much as they belong on
          the grounds around it.
        </p>
        <p>
          For events that need production — layout, rentals, food and drink, staffing —{' '}
          <a href="https://1311events.com/" target="_blank" rel="noopener noreferrer">
            1311 Events
          </a>{' '}
          works the barn the way they work the rest of the property: tailored to the occasion,
          without turning the stall aisle into a ballroom.
        </p>
        <div className="cta-row">
          <Link to="/events" className="primary">
            Event calendar
          </Link>
          <OpenConciergeButton className="secondary">
            Concierge inquiry
          </OpenConciergeButton>
        </div>
      </article>
    </>
  );
}
