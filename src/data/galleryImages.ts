const base = import.meta.env.BASE_URL;

function asset(relPath: string) {
  // Keeps slashes, encodes spaces and other URI-unsafe characters.
  return `${base}${encodeURI(relPath)}`;
}

/** Rotating category labels for captions / filters (aligned across home carousel + gallery page). */
export const GALLERY_CATEGORIES = [
  'Ranch lifestyle',
  'Weddings',
  'Corporate retreats',
  'Glamping',
  'Dining',
  'Nature',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

const BY_CATEGORY: Record<GalleryCategory, string[]> = {
  'Ranch lifestyle': [
    asset('RanchLifestyle/1.PNG'),
    asset('RanchLifestyle/2.png'),
    asset('RanchLifestyle/3.png'),
    asset('RanchLifestyle/4.jpg'),
  ],
  Weddings: [
    asset('Weddings/Event Setup 1.png'),
    asset('Weddings/Event Setup 2.png'),
    asset('Weddings/Interactive Experience Package.png'),
  ],
  'Corporate retreats': [
    asset('CorporateRetreats/1.PNG'),
    asset('CorporateRetreats/2.png'),
    asset('CorporateRetreats/3.PNG'),
    asset('CorporateRetreats/4.PNG'),
    asset('CorporateRetreats/5.PNG'),
  ],
  Glamping: [asset('Glamping/1.PNG')],
  Dining: [asset('Dining/1.png'), asset('Dining/2.png'), asset('Dining/3.PNG'), asset('Dining/4.PNG')],
  Nature: [asset('Nature/1.png'), asset('Nature/2.PNG'), asset('Nature/3.PNG'), asset('Nature/4.PNG')],
};

export const gallerySlides: { src: string; category: GalleryCategory }[] = GALLERY_CATEGORIES.flatMap(
  (category) => BY_CATEGORY[category].map((src) => ({ src, category }))
);
