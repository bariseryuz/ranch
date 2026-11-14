import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import OpenConciergeButton from '../components/OpenConciergeButton.tsx';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import LittleHotelierWidget from '../components/LittleHotelierWidget.tsx';
import '../styles/editorial.css';
import './LodgePage.css';

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
      'The barn at Briggs Brothers Ranch — stalls, horses, and lodging booked through the ranch booking engine.',
    keywords: 'ranch barn, horse boarding, briggs brothers ranch stalls, ranch lodging',
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
          Stay on the estate while you are here. Lodge rooms and ranch stays book through the same
          Little Hotelier engine as the lodge — use Book Room Now below.
        </p>
        <p>
          The ranch also hosts horse events here. Clinics, gatherings, and celebrations that want
          horses and land in the same picture belong in this building as much as they belong on
          the grounds around it.
        </p>
        <div className="cta-row">
          <a href="#book-room" className="primary">
            Book Room Now
          </a>
          <Link to="/lodge" className="secondary">
            The Lodge
          </Link>
          <Link to="/events" className="secondary">
            Event calendar
          </Link>
          <OpenConciergeButton className="secondary">
            Concierge inquiry
          </OpenConciergeButton>
        </div>
      </article>

      <section id="book-room" className="lodge-book" aria-labelledby="barn-book-title">
        <div className="lodge-book__inner">
          <p className="lodge-book__eyebrow">Reserve your stay</p>
          <h2 id="barn-book-title" className="lodge-book__title">
            Book Room Now
          </h2>
          <p className="lodge-book__lede">
            Select your dates, room, and guests through the ranch booking engine — the same
            Little Hotelier widget used on the lodge.
          </p>
          <div className="lodge-book__frame">
            <LittleHotelierWidget />
          </div>
        </div>
      </section>
    </>
  );
}
