export type PlannerInput = {
  eventType: 'corporate' | 'wedding' | 'private';
  guestCount: number;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  durationNights: number;
};

export type PlannerResult = {
  packageName: string;
  summary: string;
  experiences: string[];
  estimatedRange: string;
  notes: string;
};

export function generateEventPlan(input: PlannerInput): PlannerResult {
  const { eventType, guestCount, season, durationNights } = input;

  const base =
    eventType === 'wedding'
      ? {
          packageName: 'Weekend Wedding Experience',
          experiences: [
            'Welcome reception & rehearsal dinner',
            'Ceremony site + luxury tented reception',
            'Sunday farewell brunch',
            'Bridal suite + guest lodging coordination',
          ],
        }
      : eventType === 'corporate'
        ? {
            packageName: 'Executive Retreat Buyout',
            experiences: [
              'Private meeting lodge + breakout spaces',
              'Chef-driven group dining + fireside evening',
              'Curated outdoor adventure block',
              'Optional leadership facilitator referrals',
            ],
          }
        : {
            packageName: 'Private Estate Celebration',
            experiences: [
              'Full-property privacy',
              'Custom menu + wine pairings',
              'Live-fire dinner & lawn games',
              'Milestone styling & photography referrals',
            ],
          };

  let estimatedRange = '$85k – $150k+';
  if (guestCount < 40) estimatedRange = '$45k – $95k';
  if (guestCount > 120) estimatedRange = '$150k – $350k+';
  if (durationNights >= 3) estimatedRange += ' (multi-night)';

  const seasonNote =
    season === 'summer' || season === 'fall'
      ? 'Peak season demand—early holds recommended.'
      : 'Shoulder season may offer extended programming flexibility.';

  return {
    packageName: base.packageName,
    summary: `A bespoke ${eventType} program for approximately ${guestCount} guests over ${durationNights} night(s), optimized for ${season} at Briggs Brothers Ranch.`,
    experiences: base.experiences,
    estimatedRange,
    notes: `Indicative range only; final proposal follows site walkthrough. ${seasonNote}`,
  };
}
