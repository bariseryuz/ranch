/** Dispatched on `window` so Header/Footer/CTAs can open the global AI chat. */
export const OPEN_CONCIERGE_CHAT_EVENT = 'open-concierge-chat';

export function openConciergeChat() {
  window.dispatchEvent(new CustomEvent(OPEN_CONCIERGE_CHAT_EVENT));
}
