export type LeadTier = 'high' | 'medium' | 'standard';

export type LeadTag = 'wedding' | 'corporate' | 'private';

export type Qualification = {
  tag: LeadTag;
  tier: LeadTier;
  action: 'schedule_call' | 'priority_email' | 'nurture';
  notes: string;
};

const budgetRank: Record<string, number> = {
  'under-25': 1,
  '25-50': 2,
  '50-100': 3,
  '100-250': 4,
  '250+': 5,
};

export function qualifyLead(input: {
  eventType: string;
  budget: string;
  guestCount: number;
}): Qualification {
  const tag = (['wedding', 'corporate', 'private'].includes(input.eventType)
    ? input.eventType
    : 'private') as LeadTag;

  const br = budgetRank[input.budget] ?? 1;
  const guests = input.guestCount;

  let tier: LeadTier = 'standard';
  if (br >= 4 || (br >= 3 && guests >= 80)) tier = 'high';
  else if (br >= 3 || guests >= 50) tier = 'medium';

  let action: Qualification['action'] = 'nurture';
  if (tier === 'high') action = 'schedule_call';
  else if (tier === 'medium') action = 'priority_email';

  const notes =
    tier === 'high'
      ? 'High-value inquiry: route to sales for expedited follow-up and optional calendar link.'
      : tier === 'medium'
        ? 'Qualified lead: personalized concierge response within 24 hours.'
        : 'Standard nurture sequence with journal content and seasonal offers.';

  return { tag, tier, action, notes };
}
