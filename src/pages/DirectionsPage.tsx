import { useEffect, useState } from 'react';
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
    alt: 'Ranch entrance and Briggs Brothers Ranch signage along the gravel drive',
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

const ROUTES = [
  {
    id: 'knoxville',
    title: 'From Knoxville, TN',
    via: 'Via I-40 East and Newport',
    body: 'Take I-40 East toward Asheville. Take Exit 435 toward Newport and follow US-321 North. Turn right onto Salem Road. Turn right onto Clinton Road, then right onto Long Creek Road. Turn left onto Browns Chapel Road and continue toward the ranch at 961 Browns Chapel Road.',
  },
  {
    id: 'asheville',
    title: 'From Asheville, NC',
    via: 'Via US-25/70 and TN-340',
    body: 'Travel toward Newport, Tennessee, using US-25/70. Turn onto TN-340 North. Turn right onto Long Creek Road. Turn right onto Browns Chapel Road. Continue to Briggs Brothers Ranch.',
  },
  {
    id: 'johnson-city',
    title: 'From Johnson City, TN',
    via: 'Via Greeneville',
    body: 'Take US-11E toward Greeneville, Tennessee. From Greeneville, follow US-321 South toward Parrottsville. Turn left onto Salem Road. Turn right onto Clinton Road, then right onto Long Creek Road. Turn left onto Browns Chapel Road and continue to the ranch.',
  },
  {
    id: 'greeneville',
    title: 'From Greeneville, TN',
    via: 'Via US-321 South',
    body: 'Take US-321 South toward Parrottsville. Turn left onto Salem Road. Turn right onto Clinton Road. Turn right onto Long Creek Road. Turn left onto Browns Chapel Road and continue to the ranch.',
  },
  {
    id: 'newport',
    title: 'From Newport, TN',
    via: 'Via US-321 North',
    body: 'Take US-321 North toward Parrottsville. Turn right onto Salem Road. Turn right onto Clinton Road. Turn right onto Long Creek Road. Turn left onto Browns Chapel Road and continue to the ranch.',
  },
] as const;

export default function DirectionsPage() {
  const { hash } = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const id = hash.replace('#', '');
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  usePageMeta({
    title: 'Getting Here',
    description:
      'Driving directions to Briggs Brothers Ranch at 961 Browns Chapel Road, Parrottsville, Tennessee. Save or print these directions before traveling — cell service may be limited near the ranch.',
    keywords: 'briggs brothers ranch directions, Parrottsville ranch, Browns Chapel Road',
  });

  return (
    <>
      <PhotoHeroSlider
        title="Getting to Briggs Brothers Ranch"
        subtitle="Getting Here"
        ariaLabel="Ranch arrival photos"
        slides={slides}
      />
      <div className="hours-strip">
        <p className="hours-banner hours-banner--notice" role="status">
          <span className="hours-banner__label">Important</span>
          Cell service may be limited as you approach the ranch. Please save or print these
          directions before traveling.
        </p>
      </div>
      <article id="getting-here" className="page-section">
        <p className="directions-print-title">Getting to Briggs Brothers Ranch</p>
        <h2>Address</h2>
        <p>
          {RANCH_ADDRESS_LINES[0]}
          <br />
          {RANCH_ADDRESS_LINES[1]}
          <br />
          {RANCH_ADDRESS_LINES[2]}
        </p>
        <p className="directions-print-notice">
          Cell service may be limited as you approach the ranch. Please save or print these
          directions before traveling.
        </p>

        <h2 id="written-directions">Written directions</h2>
        <div className="directions-accordion">
          {ROUTES.map((route) => {
            const isOpen = openId === route.id;
            const panelId = `${route.id}-panel`;
            const buttonId = `${route.id}-button`;
            return (
              <div key={route.id} className="directions-accordion__item">
                <h3 className="directions-accordion__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className={`directions-accordion__trigger ${isOpen ? 'is-open' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : route.id)}
                  >
                    <span className="directions-accordion__copy">
                      <span className="directions-accordion__title">{route.title}</span>
                      <span className="directions-accordion__via">{route.via}</span>
                    </span>
                    <span className="directions-accordion__chevron" aria-hidden />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="directions-accordion__panel"
                >
                  <p>{route.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div id="print" className="cta-row no-print">
          <a
            href={RANCH_MAPS_URL}
            className="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
          <button type="button" className="secondary" onClick={() => window.print()}>
            Print Directions
          </button>
        </div>
      </article>
      <article id="map" className="page-section page-section--wide no-print">
        <h2>Map</h2>
        <p>
          Use Google Maps for turn-by-turn GPS guidance to 961 Browns Chapel Road, Parrottsville, TN
          37843. The last miles are rural roads; follow the pin rather than a generic town center.
        </p>
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
