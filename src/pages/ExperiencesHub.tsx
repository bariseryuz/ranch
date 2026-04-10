import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import Culinary from '../components/Culinary.tsx';
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
      <div className="page-section page-section--wide page-section--experiences-intro">
        <p>
          The ranch sells a lifestyle—privacy, cinematic landscapes, and hospitality that feels
          bespoke. Choose a path below; each experience is designed as a full-property immersion.
        </p>
      </div>
      <Culinary />
      <div className="experiences-hub-cards">
        {cards.map((c) => (
          <Link key={c.to} to={c.to} className="experiences-hub-cards__link">
            <img className="experiences-hub-cards__img" src={c.image} alt="" />
            <div className="experiences-hub-cards__body">
              <h3 className="experiences-hub-cards__title">{c.title}</h3>
              <p className="experiences-hub-cards__copy">{c.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
