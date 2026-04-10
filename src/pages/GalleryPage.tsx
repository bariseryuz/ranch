import { useMemo, useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import GalleryCarousel from '../components/GalleryCarousel.tsx';
import { gallerySlides, GALLERY_CATEGORIES } from '../data/galleryImages.ts';
import '../styles/editorial.css';
import './GalleryPage.css';

const categories = ['All', ...GALLERY_CATEGORIES] as const;

type Cat = (typeof categories)[number];

const heroImage = `${import.meta.env.BASE_URL}ran.png`;

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>('All');

  usePageMeta({
    title: 'Gallery',
    description: 'Cinematic imagery of ranch life, weddings, retreats, dining, and nature.',
    keywords: 'luxury ranch photography, ranch wedding gallery',
  });

  const visible = useMemo(
    () =>
      filter === 'All' ? gallerySlides : gallerySlides.filter((i) => i.category === filter),
    [filter]
  );

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Cinematic · Emotional · Private"
        image={heroImage}
        imageAlt="Ranch at golden hour"
      />
      <div className="gallery-page">
        <header className="gallery-page__header">
          <span className="gallery-page__eyebrow">The collection</span>
          <h2 className="gallery-page__title">Every frame tells a story</h2>
          <p className="gallery-page__lede">
            Browse the full visual archive — filter by occasion, glide through the filmstrip, or
            let the album play. Pause anytime by resting the cursor on the stage.
          </p>
        </header>

        <div className="gallery-page__filters-bar">
          <span className="gallery-page__filters-hint" id="gallery-filter-hint">
            Refine
          </span>
          <div
            className="gallery-page__filters"
            role="tablist"
            aria-labelledby="gallery-filter-hint"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                className={`gallery-page__filter ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <GalleryCarousel
          key={filter}
          slides={visible}
          variant="immersive"
          showThumbnails
          autoMs={7000}
        />
      </div>
    </>
  );
}
