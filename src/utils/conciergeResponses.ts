/** Rule-based concierge fallback (used when no VITE_CONCIERGE_API_URL is set). */
export function getConciergeReply(message: string): string {
  const q = message.toLowerCase().trim();

  const bookLink = '[Book Room Now](/book-room-now)';
  const inquiryLink = '[Concierge Inquiry](/plan-your-event)';

  // Room / stay booking intent
  if (
    /\b(book|reserve|reservation|check.?in|check.?out|availab|night|stay|dates?|room|cabin|suite|lodge|accommodat|sleep|bed)\b/i.test(
      q,
    )
  ) {
    return (
      'You can check real-time availability and book your stay directly through our booking engine. ' +
      `Head to the ${bookLink} page — select your dates, room type, and number of guests to complete your reservation.`
    );
  }

  // Event / corporate / wedding intent
  if (/\b(event|wedding|ceremony|bride|groom|corporate|retreat|team|meeting|summit|conference|buyout|celebrate|anniversary|party)\b/i.test(q)) {
    return (
      'For events, weddings, and corporate retreats our team creates fully bespoke experiences. ' +
      `Please visit our ${inquiryLink} page — share your event type, guest count, and preferred dates and our concierge will respond promptly.`
    );
  }

  // Pricing
  if (/\b(cost|price|pricing|budget|how much|rate|fee|quote)\b/i.test(q)) {
    return (
      'Room rates can be viewed and reserved directly on the ' +
      `${bookLink} page. For event packages, buyouts, and bespoke pricing please reach us through the ${inquiryLink} page.`
    );
  }

  // Capacity / group size
  if (/\b(capacity|how many|guests?|group|people|persons?|attendees?)\b/i.test(q)) {
    return (
      'Briggs Brothers Ranch accommodates intimate stays in our ranch homes (12+ guests) ' +
      'up to 150+ for tented celebrations. ' +
      `To book a room visit ${bookLink}. For larger group buyouts or events, submit a request via ${inquiryLink}.`
    );
  }

  // Dining / culinary
  if (/\b(dining|chef|wine|culinary|food|meal|menu|cook|whiskey|caviar|tasting)\b/i.test(q)) {
    return (
      'Dining at the ranch is chef-driven — seasonal menus, live-fire cooking, and optional caviar, wine, and whiskey experiences. ' +
      `Culinary add-ons can be arranged as part of your stay or event. Book your stay via ${bookLink} or plan a bespoke experience through ${inquiryLink}.`
    );
  }

  // Location / directions
  if (/\b(where|location|address|directions?|how to get|drive|fly|airport)\b/i.test(q)) {
    return (
      'Briggs Brothers Ranch is located at 961 Browns Chapel Road, Parrottsville, TN 37843, United States. ' +
      `Detailed arrival directions are shared with confirmed guests. Book your room at ${bookLink} or reach us via ${inquiryLink} for travel coordination.`
    );
  }

  // Greeting
  if (/^(hello|hi|hey|howdy|good\s*(morning|evening|afternoon))\b/i.test(q) || q.length < 3) {
    return (
      `Welcome to Briggs Brothers Ranch. I can help you find the right option — ` +
      `${bookLink} to reserve a room or ${inquiryLink} for events, weddings, and corporate retreats. What can I help you with?`
    );
  }

  // Default
  return (
    `To reserve a room or check availability visit ${bookLink}. ` +
    `For events, weddings, or custom experiences please reach us through ${inquiryLink} and our team will respond quickly.`
  );
}
