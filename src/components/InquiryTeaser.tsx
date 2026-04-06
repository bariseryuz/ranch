import { Link } from 'react-router-dom';
import './InquiryTeaser.css';

/** Homepage CTA toward the full inquiry + planner flows */
const InquiryTeaser = () => {
  return (
    <section id="inquiry" className="inquiry-teaser">
      <div className="inquiry-teaser__inner">
        <p className="eyebrow">Begin your journey</p>
        <h2 className="inquiry-teaser__title">Plan your private gathering</h2>
        <p className="inquiry-teaser__copy">
          Share your vision with our concierge team. We respond to qualified inquiries with a
          tailored proposal—capacity, spaces, accommodations, and culinary programming.
        </p>
        <div className="inquiry-teaser__actions">
          <Link to="/plan-your-event" className="btn-primary inquiry-teaser__btn">
            Plan your event
          </Link>
          <Link to="/event-planner" className="btn-secondary inquiry-teaser__btn">
            AI event planner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InquiryTeaser;
