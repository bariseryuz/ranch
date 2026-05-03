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
            <Link to="/plan-your-event?tab=ai">AI Event Planner</Link>
          </div>
          <div>
            <h4>Connect</h4>
            <Link to="/journal">Journal</Link>
            <Link to="/plan-your-event">Plan Your Event</Link>
            <a href="mailto:info@briggsbrothersranch.com">info@briggsbrothersranch.com</a>
            <a href="tel:+14236237543" className="site-footer__phone">
              423-623-7543
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=961+Browns+Chapel+Road%2C+Parrottsville%2C+TN+37843%2C+United+States"
              className="site-footer__address"
              target="_blank"
              rel="noopener noreferrer"
            >
              961 Browns Chapel Road
              <br />
              Parrottsville, TN 37843
              <br />
              United States
            </a>
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
