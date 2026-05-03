export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: 'why-wedding-at-a-ranch',
    title: 'Why You Should Have Your Wedding at a Ranch',
    date: '2026-05-01',
    category: 'Weddings',
    readTime: '6 min',
    excerpt:
      'Privacy, golden-hour light, and room for everyone you love—why couples trade ballrooms for pastures.',
    body: [
      'A ballroom compresses your weekend into a single evening; a ranch unfolds it. Guests arrive, breathe slower, and celebrate across days—not hours—with rehearsal gatherings, morning walks, and farewell brunches that feel like family, not choreography.',
      'The setting does quiet work for you: wide skies for ceremonies, natural acoustics for vows, and landscapes that need little decoration. Photography reads cinematic without forcing poses; children roam safely; elders recall county fairs and front porches instead of parking garages.',
      'Buyouts mean the estate is yours alone—no competing events, no rushed turnovers. Catering follows the rhythm of fire and season; lodging keeps your circle close instead of scattered across hotel blocks.',
      'If your priority is presence over production—shared meals, starlit dancing, and the feeling that this chapter opened somewhere unforgettable—a ranch wedding rewards that intention every hour you are there.',
    ],
  },
  {
    slug: 'corporate-retreat-ideas-2026',
    title: 'Best Corporate Retreat Ideas for Executive Teams',
    date: '2026-02-12',
    category: 'Corporate',
    readTime: '6 min',
    excerpt:
      'From leadership intensives to creative summits—how private ranch settings unlock focus and connection.',
    body: [
      'The most effective retreats balance structured strategy time with unstructured moments that rebuild trust. A private ranch removes urban distraction while signaling investment in your people.',
      'Consider pairing morning leadership sessions with afternoon outdoor experiences—riding, shooting clays, or guided hikes—followed by fireside dining with chef-led menus.',
      'At Briggs Brothers Ranch, spaces are configured for executive privacy: breakout lodges, tented dining, and full-property buyouts when confidentiality matters.',
    ],
  },
  {
    slug: 'why-companies-host-retreats',
    title: 'Why Leading Companies Still Invest in Offsite Retreats',
    date: '2026-01-28',
    category: 'Corporate',
    readTime: '5 min',
    excerpt:
      'Retention, alignment, and culture are not Zoom problems—they are environment problems.',
    body: [
      'Research consistently shows that in-person connection accelerates decision velocity. Retreats are not perks; they are operating infrastructure for high-trust teams.',
      'Luxury is not excess—it is the removal of friction so your team can focus on the work only they can do.',
    ],
  },
  {
    slug: 'luxury-ranch-weddings',
    title: 'Luxury Ranch Weddings: Intimate, Cinematic, Unmistakably Yours',
    date: '2025-12-03',
    category: 'Weddings',
    readTime: '7 min',
    excerpt:
      'What couples gain when they trade ballroom templates for golden-hour horizons.',
    body: [
      'A ranch wedding is a weekend, not a six-hour party. Rehearsal dinners under string lights, morning hikes, and farewell brunches extend the emotional arc of the celebration.',
      'We design ceremonies around natural sightlines—meadows, ridges, and water—then layer tented receptions with live-fire cuisine and curated wine.',
    ],
  },
  {
    slug: 'executive-leadership-retreats',
    title: 'Executive Leadership Retreats That Actually Change Behavior',
    date: '2025-11-18',
    category: 'Leadership',
    readTime: '6 min',
    excerpt:
      'Agendas that protect deep work—and hospitality that earns attention.',
    body: [
      'Leadership retreats fail when schedules are too dense. We recommend half-day strategy blocks, protected reflection time, and shared meals without laptops.',
      'The ranch setting reinforces candor: smaller circles, longer tables, and evenings that reward presence.',
    ],
  },
];
