import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

const cards = [
  {
    to: '/corporate-retreats',
    title: 'Corporate Retreats',
    copy: 'Leadership programs, team building, executive summits, and company celebrations.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
  },
  {
    to: '/luxury-weddings',
    title: 'Luxury Weddings',
    copy: 'Exclusive destination weddings—ceremony sites, tented receptions, rehearsal dinners.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
  },
  {
    to: '/private-events',
    title: 'Private Events',
    copy: 'Milestones, reunions, influencer retreats, and luxury brand activations.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function ExperiencesHub() {
  usePageMeta({
    title: 'Experiences',
    description:
      'Corporate retreats, luxury ranch weddings, and private buyouts at Briggs Brothers Ranch.',
    keywords: 'corporate retreat ranch, luxury ranch wedding venue, private ranch buyout',
  });

  return (
    <>
      <PageHero
        title="Experiences"
        subtitle="Tailored gatherings"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Ranch landscape"
      />
      <div className="page-section page-section--wide">
        <p>
          The ranch sells a lifestyle—privacy, cinematic landscapes, and hospitality that feels
          bespoke. Choose a path below; each experience is designed as a full-property immersion.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto 4rem',
          padding: '0 1.5rem',
        }}
      >
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(93,58,26,0.12)',
              overflow: 'hidden',
            }}
          >
            <img src={c.image} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem' }}>{c.title}</h3>
              <p style={{ margin: 0, fontWeight: 300, lineHeight: 1.6, fontSize: '0.95rem' }}>
                {c.copy}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
