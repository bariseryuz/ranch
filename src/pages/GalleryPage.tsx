import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
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

const items: { src: string; cat: Exclude<Cat, 'All'> }[] = [
  {
    src: 'https://images.unsplash.com/photo-1533167649158-6d508895b980?q=80&w=1200',
    cat: 'Ranch lifestyle',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    cat: 'Weddings',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200',
    cat: 'Corporate retreats',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200',
    cat: 'Dining',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200',
    cat: 'Nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200',
    cat: 'Ranch lifestyle',
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200',
    cat: 'Weddings',
  },
  {
    src: 'https://images.unsplash.com/photo-1524813092629-3dbfa7110c73?q=80&w=1200',
    cat: 'Nature',
  },
];

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
