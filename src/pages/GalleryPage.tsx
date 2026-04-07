import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import { galleryPImages } from '../data/galleryImages.ts';
import './GalleryPage.css';

const categories = [
  'All',
  'Ranch lifestyle',
  'Weddings',
  'Corporate retreats',
  'Dining',
  'Nature',
] as const;

type Cat = (typeof categories)[number];

const CAT_ROTATION: Exclude<Cat, 'All'>[] = [
  'Ranch lifestyle',
  'Weddings',
  'Corporate retreats',
  'Dining',
  'Nature',
];

const items: { src: string; cat: Exclude<Cat, 'All'> }[] = galleryPImages.map(
  (src, i) => ({
    src,
    cat: CAT_ROTATION[i % CAT_ROTATION.length],
  })
);

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>('All');

  usePageMeta({
    title: 'Gallery',
    description: 'Cinematic imagery of ranch life, weddings, retreats, dining, and nature.',
    keywords: 'luxury ranch photography, ranch wedding gallery',
  });

  const visible =
    filter === 'All' ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Cinematic · Emotional · Private"
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Ranch at golden hour"
      />
      <div className="gallery-page">
        <div className="gallery-page__filters">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={filter === c ? 'is-active' : ''}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="gallery-page__grid">
          {visible.map((it, i) => (
            <figure key={i} className="gallery-page__item">
              <img src={it.src} alt="" loading="lazy" />
              <figcaption>{it.cat}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
