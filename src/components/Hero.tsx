import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <div className="video-container">
         {/* For now, we use a placeholder image. Replace 'src' with your video file later */}
        <div className="video-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1531315630201-bb15b9944a36?auto=format&fit=crop&q=80&w=2000" 
          alt="Ranch at golden hour" 
          className="hero-video-placeholder"
        />
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">Where Luxury Meets the Western Frontier</p>
        <h1 className="hero-title">An Unforgettable Gathering</h1>
        <div className="hero-buttons">
          <button className="btn-primary">Plan Your Event</button>
          <button className="btn-secondary">Explore the Ranch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;