import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { journalPosts } from '../content/journalPosts.ts';
import './JournalPost.css';

export default function JournalPost() {
  const { slug } = useParams();
  const post = journalPosts.find((p) => p.slug === slug);

  usePageMeta({
    title: post?.title ?? 'Journal',
    description: post?.excerpt ?? 'Editorial stories from Briggs Brothers Ranch.',
    keywords: 'luxury ranch, corporate retreat, wedding',
  });

  if (!post) {
    return (
      <div className="journal-article">
        <p>Article not found.</p>
        <Link to="/journal">Back to Journal</Link>
      </div>
    );
  }

  return (
    <article className="journal-article">
      <Link to="/journal" className="journal-article__back">
        ← Journal
      </Link>
      <p className="journal-article__meta">
        {post.category} · {post.date} · {post.readTime}
      </p>
      <h1>{post.title}</h1>
      <div className="journal-article__body">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
