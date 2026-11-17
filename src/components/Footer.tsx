import { Link } from 'react-router-dom';
import OpenConciergeButton from './OpenConciergeButton.tsx';
import { RANCH_ADDRESS_LINES, RANCH_MAPS_URL } from '../data/location.ts';
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
            <Link to="/barn">Barn</Link>
            <Link to="/the-ranch">The Ranch</Link>
            <Link to="/legacy">Legacy</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/tailored-gatherings">Tailored Gatherings</Link>
            <Link to="/culinary">Culinary</Link>
            <Link to="/accommodations">Accommodations</Link>
            <Link to="/lodge">Lodge</Link>
            <Link to="/rv-park">RV Park</Link>
            <Link to="/restaurant">Restaurant & Bar</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <h4>Gatherings</h4>
            <Link to="/corporate-retreats">Corporate Retreats</Link>
            <Link to="/luxury-weddings">Luxury Weddings</Link>
            <Link to="/private-events">Private Events</Link>
            <Link to="/events">Event Calendar</Link>
            <OpenConciergeButton className="concierge-inquiry-btn">
              Concierge Inquiry
            </OpenConciergeButton>
          </div>
          <div>
            <h4>Connect</h4>
            <Link to="/journal">Journal</Link>
            <Link to="/directions">Getting Here</Link>
            <Link to="/directions#map">Map</Link>
            <Link to="/directions#print">Print</Link>
            <Link to="/lodge#book-room">Book Room Now</Link>
            <a href="mailto:info@briggsbrothersranch.com">info@briggsbrothersranch.com</a>
            <a href="tel:+14236237543" className="site-footer__phone">
              423-623-7543
            </a>
            <a
              href={RANCH_MAPS_URL}
              className="site-footer__address"
              target="_blank"
              rel="noopener noreferrer"
            >
              {RANCH_ADDRESS_LINES[0]}
              <br />
              {RANCH_ADDRESS_LINES[1]}
              <br />
              {RANCH_ADDRESS_LINES[2]}
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
