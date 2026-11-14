import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import LittleHotelierWidget from '../components/LittleHotelierWidget.tsx';
import '../styles/editorial.css';
import './LodgePage.css';

const base = import.meta.env.BASE_URL;

const slides = [
  {
    src: `${base}Lodge/lodge-porch.jpg`,
    alt: 'Lodge porch with rocking chairs at Briggs Brothers Ranch',
  },
  {
    src: `${base}Lodge/lodge-exterior.jpg`,
    alt: 'Lodge exterior from the path at golden hour at Briggs Brothers Ranch',
  },
];

export default function LodgePage() {
  usePageMeta({
    title: 'The Lodge',
    description:
      'Book a lodge stay at Briggs Brothers Ranch — rooms on the estate with restaurant and bar nearby.',
    keywords: 'ranch lodge booking, briggs brothers ranch lodge, book ranch room',
  });

  return (
    <>
      <PhotoHeroSlider
        title="The Lodge"
        subtitle="Ranch lodging · Book a room"
        ariaLabel="Lodge photos"
        slides={slides}
      />
      <article className="page-section">
        <h2>A lodge stay on the estate</h2>
        <p>
          The lodge is the ranch house stay — rooms and shared gathering space for guests who want
          to wake up on the property, walk to the restaurant and bar, and settle into the quieter
          rhythm of the land.
        </p>
        <p>
          Inside, a rock fireplace anchors the common room: seating for conversation, a place to
          come in from the porch, and the informal living room of the lodge. Guests gather there
          between meals and evenings out, not in a separate event hall.
        </p>
        <p>
          It suits couples, small groups, and hosts who need a home base for a weekend, a retreat,
          or a celebration. Choose dates below to book your room directly.
        </p>
        <div className="cta-row">
          <a href="#book-room" className="primary">
            Book Room Now
          </a>
          <Link to="/barn" className="secondary">
            The Barn
          </Link>
          <Link to="/rv-park" className="secondary">
            RV Park
          </Link>
        </div>
      </article>

      <section id="book-room" className="lodge-book" aria-labelledby="lodge-book-title">
        <div className="lodge-book__inner">
          <p className="lodge-book__eyebrow">Reserve your stay</p>
          <h2 id="lodge-book-title" className="lodge-book__title">
            Book Room Now
          </h2>
          <p className="lodge-book__lede">
            Select your dates, room, and guests. Booking is confirmed on the ranch — no third-party
            listing required.
          </p>
          <div className="lodge-book__frame">
            <LittleHotelierWidget />
          </div>
        </div>
      </section>
    </>
  );
}
