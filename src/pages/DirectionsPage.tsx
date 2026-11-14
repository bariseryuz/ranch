import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PhotoHeroSlider from '../components/PhotoHeroSlider.tsx';
import {
  RANCH_ADDRESS_LINES,
  RANCH_MAPS_EMBED_URL,
  RANCH_MAPS_URL,
} from '../data/location.ts';
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
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.replace('#', '');
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  usePageMeta({
    title: 'Directions',
    description:
      'Directions to Briggs Brothers Ranch at 961 Browns Chapel Road, Parrottsville, Tennessee.',
    keywords: 'briggs brothers ranch directions, Parrottsville ranch, Browns Chapel Road',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Directions"
        subtitle="How to find the ranch"
        ariaLabel="Ranch arrival photos"
        slides={slides}
      />
      <article id="address" className="page-section">
        <h2>Address</h2>
        <p>
          {RANCH_ADDRESS_LINES[0]}
          <br />
          {RANCH_ADDRESS_LINES[1]}
          <br />
          {RANCH_ADDRESS_LINES[2]}
        </p>
        <p>
          Use the map for turn-by-turn driving directions. The last miles are rural roads; follow
          the pin rather than a generic town center.
        </p>
        <div className="cta-row">
          <a
            href={RANCH_MAPS_URL}
            className="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </article>
      <article id="map" className="page-section page-section--wide">
        <h2>Map</h2>
        <div className="directions-map">
          <iframe
            title="Map of Briggs Brothers Ranch"
            src={RANCH_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </article>
    </>
  );
}
