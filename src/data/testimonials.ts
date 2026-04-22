export type Testimonial = {
  quote: string;
  name: string;
  context?: string;
};

// Replace these with your real comments when ready.
export const testimonials: Testimonial[] = [
  {
    quote:
      '“This is a placeholder testimonial. Send me your real comments and I’ll swap them in.”',
    name: 'Guest Name',
    context: 'Event type · Year',
  },
  {
    quote:
      '“Second placeholder comment. The slider is built to feel native to the site design.”',
    name: 'Guest Name',
    context: 'Corporate retreat · Location',
  },
  {
    quote:
      '“Third placeholder comment. You can add as many as you want in src/data/testimonials.ts.”',
    name: 'Guest Name',
    context: 'Wedding weekend · Season',
  },
];

