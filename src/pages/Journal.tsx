import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import { journalPosts } from '../content/journalPosts.ts';
import './Journal.css';

export default function Journal() {
  usePageMeta({
    title: 'Journal',
    description:
      'Stories on corporate retreats, luxury ranch weddings, and executive leadership gatherings.',
    keywords: 'corporate retreat ideas, luxury ranch weddings, leadership retreats',
  });

  return (
    <>
      <PageHero
        title="Journal"
        subtitle="Editorial · Strategy · Celebration"
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Journal"
      />
      <div className="journal-list">
        {journalPosts.map((post) => (
          <article key={post.slug} className="journal-card">
            <p className="journal-card__meta">
              {post.category} · {post.readTime}
            </p>
            <h2>
              <Link to={`/journal/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="journal-card__excerpt">{post.excerpt}</p>
            <Link to={`/journal/${post.slug}`} className="journal-card__link">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
