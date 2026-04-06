import { useEffect } from 'react';

type Meta = {
  title: string;
  description?: string;
  keywords?: string;
};

export function usePageMeta({ title, description, keywords }: Meta) {
  useEffect(() => {
    document.title = title.includes('Briggs Brothers') ? title : `${title} | Briggs Brothers Ranch`;

    const ensureMeta = (name: string, attr: 'name' | 'property') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    if (description) {
      ensureMeta('description', 'name').setAttribute('content', description);
      ensureMeta('og:description', 'property').setAttribute('content', description);
    }
    if (keywords) {
      ensureMeta('keywords', 'name').setAttribute('content', keywords);
    }
    ensureMeta('og:title', 'property').setAttribute(
      'content',
      document.title
    );
  }, [title, description, keywords]);
}
