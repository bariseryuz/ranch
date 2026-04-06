import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function LuxuryWeddings() {
  usePageMeta({
    title: 'Luxury Ranch Weddings',
    description:
      'Destination wedding venue with scenic ceremonies, luxury tented receptions, and weekend experiences.',
    keywords: 'luxury ranch wedding venue, western luxury wedding, private ranch wedding',
  });

  return (
    <>
      <PageHero
        title="Luxury Ranch Weddings"
        subtitle="Weekend experiences · Western elegance"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Wedding celebration"
      />
      <div className="page-columns">
        <div>
          <h3>Ceremony & reception</h3>
          <ul>
            <li>Scenic ceremony locations</li>
            <li>Luxury tented receptions</li>
            <li>Rehearsal dinners under the stars</li>
            <li>Weekend wedding experiences</li>
          </ul>
        </div>
        <div>
          <h3>Guest experience</h3>
          <ul>
            <li>Bridal suite & guest lodging</li>
            <li>Welcome receptions</li>
            <li>Farewell brunches</li>
            <li>Vendor partner referrals</li>
          </ul>
        </div>
      </div>
      <article className="page-section">
        <h2>An exclusive destination—not a template</h2>
        <p>
          We choreograph multi-day celebrations: welcome dinners, ceremony at golden hour, and
          receptions where live-fire cuisine meets curated wine. Every wedding is produced as a
          private estate buyout.
        </p>
        <div className="cta-row">
          <Link to="/gallery" className="secondary">
            View gallery
          </Link>
          <Link to="/plan-your-event" className="primary">
            Begin planning
          </Link>
        </div>
      </article>
    </>
  );
}
