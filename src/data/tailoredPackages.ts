/**
 * Tailored Gatherings — package slider (6 cards).
 * Put files in `public/` (or `public/photos/`) and set `image` to that path string.
 * Example: `image: 'photos/wellness-hero.jpg'`
 */
export type TailoredPackage = {
  id: string;
  title: string;
  /** File in `public/` e.g. `wellness.jpg` or `photos/yoga.png` */
  image: string;
};

export const tailoredPackages: TailoredPackage[] = [
  {
    id: 'wellness',
    title: 'Wellness Retreat Package',
    image: 'Guest.jpeg',
  },
  {
    id: 'escape',
    title: 'Escape Package',
    image: 'Glamping.jpeg',
  },
  {
    id: 'interactive',
    title: 'Interactive Experience Package',
    image: 'Cabin.png',
  },
  {
    id: 'executive',
    title: 'Executive Summit Package',
    image: 'CorporateRetreats/3.PNG',
  },
  {
    id: 'wedding',
    title: 'Destination Wedding Weekend',
    image: 'Glamping.jpeg',
  },
  {
    id: 'buyout',
    title: 'Private Ranch Buyout',
    image: 'Nature/3.PNG',
  },
];
