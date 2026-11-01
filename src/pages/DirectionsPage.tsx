import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import '../styles/editorial.css';

export default function DirectionsPage() {
  usePageMeta({
    title: 'Directions',
    description: 'Directions to Briggs Brothers Ranch — coming soon.',
    keywords: 'briggs brothers ranch directions, Parrottsville ranch',
  });

  return (
    <>
      <PageHero
        title="Directions"
        subtitle="How to find the ranch"
        image={`${import.meta.env.BASE_URL}Nature/Need%20to%20add%20it%20.jpg`}
        imageAlt="Ranch landscape"
      />
      <article className="page-section page-section--empty">
        {/* Directions content will be added after the rest of the site work is complete. */}
      </article>
    </>
  );
}
