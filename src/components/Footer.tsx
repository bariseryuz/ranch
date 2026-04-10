import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo">BRIGGS BROTHERS</span>
          <span className="site-footer__logo-sub">RANCH</span>
          <p className="site-footer__tagline">
            A private luxury retreat for corporate retreats, weddings, and bespoke
            celebrations.
          </p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <div>
            <h4>Discover</h4>
            <Link to="/the-ranch">The Ranch</Link>
            <Link to="/legacy">Legacy</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/tailored-gatherings">Tailored Gatherings</Link>
            <Link to="/culinary">Culinary</Link>
            <Link to="/accommodations">Accommodations</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <h4>Gatherings</h4>
            <Link to="/corporate-retreats">Corporate Retreats</Link>
            <Link to="/luxury-weddings">Luxury Weddings</Link>
            <Link to="/private-events">Private Events</Link>
            <Link to="/event-planner">AI Event Planner</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link to="/journal">Journal</Link>
            <Link to="/plan-your-event">Plan Your Event</Link>
            <a href="mailto:concierge@briggsbros.com">concierge@briggsbros.com</a>
            <span className="site-footer__phone">(555) RANCH-LIFE</span>
          </div>
        </nav>
      </div>
      <div className="site-footer__legal">
        <span>© {new Date().getFullYear()} Briggs Brothers Ranch. All rights reserved.</span>
        <span className="site-footer__privacy">Privacy · Exclusivity by design</span>
      </div>
    </footer>
  );
};

export default Footer;
