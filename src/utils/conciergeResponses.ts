/** Rule-based concierge (swap for API / OpenAI when backend is ready). */
export function getConciergeReply(message: string): string {
  const q = message.toLowerCase().trim();
  const inquiryLink = 'Plan your event: /plan-your-event';

  if (/capacity|how many guests|accommodat|sleep|rooms?/i.test(q)) {
    return (
      'Briggs Brothers Ranch comfortably hosts intimate gatherings and large buyouts. ' +
      'Depending on configuration, we typically accommodate groups from 12 guests in our ranch homes ' +
      'up to 150+ for tented celebrations, with additional lodging arranged for weekend weddings. ' +
      'Tell me your guest count and I can suggest the right venue spaces.'
    );
  }
  if (/corporate|retreat|team|meeting|summit/i.test(q)) {
    return (
      'Corporate retreats include private meeting spaces, curated dining, and outdoor experiences ' +
      'designed for leadership alignment and team connection. Explore our Corporate Retreats page ' +
      'or use the Event Planner for a tailored package outline.'
    );
  }
  if (/wedding|ceremony|marry|bride/i.test(q)) {
    return (
      'We position the ranch as an exclusive destination wedding venue—scenic ceremony sites, ' +
      'luxury tented receptions, rehearsal dinners, and full weekend experiences. ' +
      'Our concierge can share availability and preferred vendor partners.'
    );
  }
  if (/cost|price|budget|how much/i.test(q)) {
    return (
      'Investment varies by season, guest count, and buyout scope. ' +
      `Share your event type and approximate guest count and our team will respond with a tailored range. ${inquiryLink}`
    );
  }
  if (/dining|chef|wine|culinary|food/i.test(q)) {
    return (
      'Dining is chef-driven with seasonal menus, live-fire cooking, and optional caviar, wine, and whiskey experiences. ' +
      'See The Culinary Experience for more detail.'
    );
  }
  if (/where|location|address|how to get/i.test(q)) {
    return (
      'Briggs Brothers Ranch is at 961 Browns Chapel Road, Parrottsville, TN 37843, United States. ' +
      'Detailed arrival directions are shared with confirmed guests. ' +
      `Submit an inquiry and our team can help coordinate travel. ${inquiryLink}`
    );
  }
  if (/hello|hi|hey|^$/.test(q) || q.length < 3) {
    return (
      'Welcome to Briggs Brothers Ranch. I can help with guest capacity, corporate retreats, weddings, ' +
      'culinary experiences, and planning your visit. What would you like to know?'
    );
  }

  return (
    'Thank you for your message. For detailed availability, our concierge reviews each inquiry personally. ' +
    `Use Plan Your Event to share dates and guest count, or ask about capacity, weddings, or corporate programs. ${inquiryLink}`
  );
}
