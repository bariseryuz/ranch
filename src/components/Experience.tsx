import './Experience.css';

const experienceVideo = `${import.meta.env.BASE_URL}RanchLifestyle/horses.MOV`;

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-grid">
          
          {/* Left Side: Editorial Text */}
          <div className="experience-text">
            <span className="section-label">The Ranch Experience</span>
            <h2 className="experience-title">A Refined Escape into Nature</h2>
            <p className="experience-description">
              Briggs Brothers Ranch is a private estate designed for those seeking a 
              refined escape. Whether hosting an executive retreat, luxury wedding, 
              or private celebration, the ranch offers a setting where hospitality, 
              adventure, and elevated dining come together.
            </p>
            
            <ul className="experience-list">
              <li><span>—</span> Private ranch buyouts</li>
              <li><span>—</span> Chef-driven dining experiences</li>
              <li><span>—</span> Outdoor adventures</li>
              <li><span>—</span> Fireside gatherings</li>
              <li><span>—</span> Luxury accommodations</li>
            </ul>
          </div>

          {/* Right Side: video + flat offset wine panel behind (layered frame) */}
          <div className="experience-image-container">
            <div className="experience-media-stack">
              <div className="experience-frame-accent" aria-hidden="true" />
              <div className="experience-image-inner">
                <video
                  className="experience-video"
                  src={experienceVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Horses and ranch landscape at Briggs Brothers Ranch"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;