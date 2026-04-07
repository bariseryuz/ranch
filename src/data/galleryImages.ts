const base = import.meta.env.BASE_URL;

/**
 * Gallery (9 slots). Files live in `public/` next to `vite.svg`.
 *
 * Current: `p1.jpg` … `p6.jpg` — add `p7.jpg`, `p8.jpg`, `p9.jpg` when ready, then
 * replace `fallbackTail` with `[7,8,9].map((n) => `${base}p${n}.jpg`)`.
 */
const pSeries = [1, 2, 3, 4, 5, 6].map((n) => `${base}p${n}.jpg`);

const fallbackTail = [
  `${base}ran.png`,
  `${base}Cabin.png`,
  `${base}Guest.jpeg`,
];

export const galleryPImages = [...pSeries, ...fallbackTail];
