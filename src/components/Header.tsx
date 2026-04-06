import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';

  const close = () => setOpen(false);

  return (
    <header
      className={`main-header ${isHome ? 'main-header--overlay' : 'main-header--solid'}`}
    >
      <button
        type="button"
        className="main-header__toggle"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-left nav-desktop">
        <Link to="/the-ranch" onClick={close}>
          The Ranch
        </Link>
        <Link to="/experiences" onClick={close}>
          Experiences
        </Link>
        <Link to="/culinary" onClick={close}>
          Culinary
        </Link>
      </div>

      <Link to="/" className="logo" onClick={close}>
        BRIGGS BROTHERS <span className="logo-sub">RANCH</span>
      </Link>

      <div className="nav-right nav-desktop">
        <Link to="/accommodations" onClick={close}>
          Stay
        </Link>
        <Link to="/gallery" onClick={close}>
          Gallery
        </Link>
        <Link to="/journal" onClick={close}>
          Journal
        </Link>
        <Link to="/plan-your-event" className="cta-link" onClick={close}>
          Plan Your Event
        </Link>
      </div>

      <div className={`main-header__drawer ${open ? 'is-open' : ''}`}>
        <nav className="main-header__mobile-nav" aria-label="Mobile">
          <Link to="/" onClick={close}>
            Home
          </Link>
          <Link to="/the-ranch" onClick={close}>
            The Ranch
          </Link>
          <Link to="/experiences" onClick={close}>
            Experiences
          </Link>
          <Link to="/corporate-retreats" onClick={close}>
            Corporate Retreats
          </Link>
          <Link to="/luxury-weddings" onClick={close}>
            Luxury Weddings
          </Link>
          <Link to="/private-events" onClick={close}>
            Private Events
          </Link>
          <Link to="/culinary" onClick={close}>
            Culinary
          </Link>
          <Link to="/accommodations" onClick={close}>
            Accommodations
          </Link>
          <Link to="/gallery" onClick={close}>
            Gallery
          </Link>
          <Link to="/journal" onClick={close}>
            Journal
          </Link>
          <Link to="/event-planner" onClick={close}>
            AI Event Planner
          </Link>
          <Link to="/plan-your-event" className="cta-link" onClick={close}>
            Plan Your Event
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
