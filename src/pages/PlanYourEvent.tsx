import { usePageMeta } from '../hooks/usePageMeta.ts';
import PageHero from '../components/PageHero.tsx';
import InquiryForm from '../components/InquiryForm.tsx';
import '../styles/editorial.css';
import './PlanYourEvent.css';

const planHeroOverlay = `${import.meta.env.BASE_URL}Weddings/${encodeURIComponent('Interactive Experience Package.png')}`;
const events1311Logo = `${import.meta.env.BASE_URL}1311/1311.png`;

export default function PlanYourEvent() {
  usePageMeta({
    title: 'Concierge Inquiry',
    description:
      'Submit a concierge inquiry for corporate retreats, weddings, and private buyouts at Briggs Brothers Ranch.',
    keywords: 'luxury ranch inquiry, corporate retreat booking, ranch wedding inquiry',
  });

  return (
    <>
      <PageHero
        title="Concierge Inquiry"
        subtitle="Concierge response within 24–48 hours"
        image="https://images.unsplash.com/photo-1519167758481-83f29bb20432?auto=format&fit=crop&q=80&w=2000"
        imageAlt="Elegant outdoor event"
        overlayImage={planHeroOverlay}
      />
      <div className="plan-page">
        <div className="plan-page__intro">
          <h2>Begin your journey</h2>
          <p>
            Thank you for considering Briggs Brothers Ranch. After you submit this form, someone
            from our sales team will reach out very shortly—usually within one business day—to
            welcome you, hear more about your event, and guide you through availability and next
            steps. We&apos;re here to answer questions and help shape your retreat, wedding, or
            celebration with care.
          </p>
        </div>
        <aside className="plan-page__partner" aria-label="Event production partner">
          <div className="plan-page__partner-inner">
            <a
              href="https://1311events.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-page__partner-logo-link"
              aria-label="1311 Events — open website"
            >
              <img
                src={events1311Logo}
                alt=""
                className="plan-page__partner-logo"
                width={72}
                height={72}
              />
            </a>
            <p>
              We work in close partnership with{' '}
              <a
                href="https://1311events.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="plan-page__partner-link"
              >
                1311 Events
              </a>
              , trusted specialists in event production and guest experience. Together, our
              teams ensure every aspect of your event is flawlessly coordinated with the same
              standard of service, discretion, and elevated hospitality the ranch is known for.
            </p>
          </div>
        </aside>
        <InquiryForm />
      </div>
    </>
  );
}
