import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="nav-left">
        <a href="#experience">Experience</a>
        <a href="#culinary">Culinary</a>
      </div>
      
      <div className="logo">
        BRIGGS BROTHERS <span className="logo-sub">RANCH</span>
      </div>

      <div className="nav-right">
        <a href="#gallery">Gallery</a>
        <a href="#inquiry" className="cta-link">Plan Your Event</a>
      </div>
    </header>
  );
};

export default Header;