import { useEffect, useState } from 'react';
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

const EXPERIENCE_LINKS = [
  { to: '/the-ranch', label: 'The Ranch' },
  { to: '/legacy', label: 'Legacy' },
  { to: '/culinary', label: 'Culinary' },
  { to: '/tailored-gatherings', label: 'Gatherings' },
] as const;

function isLargeLogoRoute(pathname: string) {
  if (LARGE_LOGO_PATHS.has(pathname)) return true;
  if (pathname === '/journal' || pathname.startsWith('/journal/')) return true;
  return false;
}

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const isHome = pathname === '/';
  const largeLogo = !isHome && isLargeLogoRoute(pathname);

  const close = () => {
    setOpen(false);
    setExperiencesOpen(false);
  };

  useEffect(() => {
    close();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`main-header ${isHome ? 'main-header--overlay' : 'main-header--solid'} ${largeLogo ? 'main-header--large-logo' : ''} ${open ? 'main-header--menu-open' : ''}`}
    >
      <button
        type="button"
        className={`main-header__toggle ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
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
            {EXPERIENCE_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="nav-dropdown__item" role="menuitem" onClick={close}>
                {label}
              </Link>
            ))}
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
        <Link to="/plan-your-event" onClick={close}>
          Concierge Inquiry
        </Link>
        <Link to="/book-room-now" className="cta-link" onClick={close}>
          Book Room Now
        </Link>
      </div>

      <button
        type="button"
        className={`main-header__backdrop ${open ? 'is-visible' : ''}`}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu"
        onClick={close}
      />

      <div
        id="site-menu"
        className={`main-header__drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="main-header__drawer-head">
          <Link to="/" className="main-header__drawer-logo" onClick={close}>
            <img src={logoUrl} alt="" className="main-header__drawer-logo-img" decoding="async" />
          </Link>
          <button
            type="button"
            className="main-header__close"
            aria-label="Close menu"
            onClick={close}
          >
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>

        <nav className="main-header__mobile-nav" aria-label="Site">
          <Link to="/" className="main-header__mobile-link" onClick={close}>
            Home
          </Link>

          <div className="main-header__nav-group">
            <button
              type="button"
              className={`main-header__mobile-link main-header__nav-toggle ${experiencesOpen ? 'is-open' : ''}`}
              aria-expanded={experiencesOpen}
              onClick={() => setExperiencesOpen((o) => !o)}
            >
              <span>Experiences</span>
              <span className="main-header__nav-chevron" aria-hidden />
            </button>
            <div className={`main-header__subnav ${experiencesOpen ? 'is-open' : ''}`}>
              <div className="main-header__subnav-inner">
                <Link to="/experiences" className="main-header__subnav-link" onClick={close}>
                  All Experiences
                </Link>
                {EXPERIENCE_LINKS.map(({ to, label }) => (
                  <Link key={to} to={to} className="main-header__subnav-link" onClick={close}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="main-header__nav-divider" aria-hidden />

          <Link to="/corporate-retreats" className="main-header__mobile-link" onClick={close}>
            Corporate Retreats
          </Link>
          <Link to="/luxury-weddings" className="main-header__mobile-link" onClick={close}>
            Luxury Weddings
          </Link>
          <Link to="/private-events" className="main-header__mobile-link" onClick={close}>
            Private Events
          </Link>
          <Link to="/accommodations" className="main-header__mobile-link" onClick={close}>
            Accommodations
          </Link>

          <div className="main-header__nav-divider" aria-hidden />

          <Link to="/gallery" className="main-header__mobile-link" onClick={close}>
            Gallery
          </Link>
          <Link to="/journal" className="main-header__mobile-link" onClick={close}>
            Journal
          </Link>
          <Link to="/plan-your-event" className="main-header__mobile-link" onClick={close}>
            Concierge Inquiry
          </Link>

          <Link to="/book-room-now" className="main-header__mobile-cta" onClick={close}>
            Book Room Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
