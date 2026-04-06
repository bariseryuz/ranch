import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <div className="video-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1531315630201-bb15b9944a36?auto=format&fit=crop&q=80&w=2000"
          alt="Ranch at golden hour — cinematic landscape"
          className="hero-video-placeholder"
        />
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