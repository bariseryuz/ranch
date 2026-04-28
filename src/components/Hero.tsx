import { Link } from 'react-router-dom';
import './Hero.css';

const heroImageUrl = `${import.meta.env.BASE_URL}Nature/Hero%20pic%20ready%20to%20deploy.png`;

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img
          className="hero-bg-image"
          src={heroImageUrl}
          alt=""
          fetchPriority="high"
        />
        <div className="video-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Where Luxury Meets the Western Frontier</h1>
        <p className="hero-subtitle">
          A private ranch experience designed for unforgettable gatherings, retreats, and
          celebrations.
        </p>
        <div className="hero-buttons">
          <Link to="/plan-your-event" className="btn-primary">
            Plan Your Event
          </Link>
          <Link to="/the-ranch" className="btn-secondary">
            Explore the Ranch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;