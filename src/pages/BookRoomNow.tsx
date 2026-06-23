import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import LittleHotelierWidget from '../components/LittleHotelierWidget.tsx';
import '../styles/editorial.css';
import './BookRoomNow.css';

const heroOverlay = `${import.meta.env.BASE_URL}Weddings/${encodeURIComponent('Interactive Experience Package.png')}`;

export default function BookRoomNow() {
  usePageMeta({
    title: 'Book Room Now',
    description:
      'Book your stay directly at Briggs Brothers Ranch — luxury ranch homes, guest cabins, glamping and private suites.',
    keywords: 'luxury ranch booking, ranch stay, book ranch room, briggs brothers ranch',
  });

  return (
    <>
      <PageHero
        title="Book Room Now"
        subtitle="Secure direct booking"
        image="https://images.unsplash.com/photo-1519167758481-83f29bb20432?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Briggs Brothers Ranch luxury lodging"
        overlayImage={heroOverlay}
      />
      <div className="book-room-page">
        <LittleHotelierWidget />
      </div>
    </>
  );
}
