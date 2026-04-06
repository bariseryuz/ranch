import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import InquiryForm from '../components/InquiryForm.tsx';
import '../styles/editorial.css';
import './PlanYourEvent.css';

export default function PlanYourEvent() {
  usePageMeta({
    title: 'Plan Your Event',
    description:
      'Submit a qualified inquiry for corporate retreats, weddings, and private buyouts at Briggs Brothers Ranch.',
    keywords: 'luxury ranch inquiry, corporate retreat booking, ranch wedding inquiry',
  });

  return (
    <>
      <PageHero
        title="Plan Your Event"
        subtitle="Concierge response within 24–48 hours"
        image="https://images.unsplash.com/photo-1519167758481-83f29bb20432?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Elegant outdoor event"
      />
      <div className="plan-page">
        <div className="plan-page__intro">
          <h2>Begin your journey</h2>
          <p>
            High-value inquiries are routed for priority follow-up. Connect HubSpot or Go High
            Level by setting <code>VITE_INQUIRY_WEBHOOK</code> to your form endpoint—payload
            includes auto-tags (wedding / corporate / private) and qualification tier.
          </p>
        </div>
        <InquiryForm />
      </div>
    </>
  );
}
