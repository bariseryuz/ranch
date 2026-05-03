import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

/** Inner routes where the header mark is shown at 2× the default solid-bar size */
const LARGE_LOGO_PATHS = new Set([
  '/experiences',
  '/the-ranch',
  '/legacy',
  '/culinary',
  '/tailored-gatherings',
  '/gallery',
  '/accommodations',
  '/plan-your-event',
]);

function isLargeLogoRoute(pathname: string) {
  if (LARGE_LOGO_PATHS.has(pathname)) return true;
  if (pathname === '/journal' || pathname.startsWith('/journal/')) return true;
  return false;
}

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';
  const largeLogo = !isHome && isLargeLogoRoute(pathname);

  const close = () => setOpen(false);

  return (
    <header
      className={`main-header ${isHome ? 'main-header--overlay' : 'main-header--solid'} ${largeLogo ? 'main-header--large-logo' : ''}`}
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
        <Link to="/" onClick={close}>
          Home
        </Link>
        <div className="nav-dropdown">
          <Link
            to="/experiences"
            className="nav-dropdown__trigger"
            aria-haspopup="menu"
            onClick={close}
          >
            Experiences
          </Link>
          <div className="nav-dropdown__panel" role="menu">
            <Link to="/the-ranch" className="nav-dropdown__item" role="menuitem" onClick={close}>
              The Ranch
            </Link>
            <Link to="/legacy" className="nav-dropdown__item" role="menuitem" onClick={close}>
              Legacy
            </Link>
            <Link to="/culinary" className="nav-dropdown__item" role="menuitem" onClick={close}>
              Culinary
            </Link>
            <Link
              to="/tailored-gatherings"
              className="nav-dropdown__item"
              role="menuitem"
              onClick={close}
            >
              Gatherings
            </Link>
          </div>
        </div>
        <Link to="/gallery" onClick={close}>
          Gallery
        </Link>
        <Link to="/journal" onClick={close}>
          Journal
        </Link>
      </div>

      <Link to="/" className="logo logo--mark" onClick={close}>
        <img
          src={logoUrl}
          alt="Briggs Brothers Ranch"
          className="logo__img"
          width={1800}
          height={432}
          decoding="async"
        />
      </Link>

      <div className="nav-right nav-desktop">
        <Link to="/accommodations" onClick={close}>
          Stay
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
          <Link to="/experiences" onClick={close}>
            Experiences
          </Link>
          <Link to="/the-ranch" className="main-header__mobile-nav--nested" onClick={close}>
            The Ranch
          </Link>
          <Link to="/legacy" className="main-header__mobile-nav--nested" onClick={close}>
            Legacy
          </Link>
          <Link to="/culinary" className="main-header__mobile-nav--nested" onClick={close}>
            Culinary
          </Link>
          <Link to="/tailored-gatherings" className="main-header__mobile-nav--nested" onClick={close}>
            Gatherings
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
          <Link to="/accommodations" onClick={close}>
            Accommodations
          </Link>
          <Link to="/gallery" onClick={close}>
            Gallery
          </Link>
          <Link to="/journal" onClick={close}>
            Journal
          </Link>
          <Link to="/plan-your-event?tab=ai" onClick={close}>
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
