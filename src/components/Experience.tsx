import './Experience.css';

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

          {/* Right Side: Image with Sage Green Accent */}
          <div className="experience-image-container">
            <div className="sage-accent-box"></div>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Ranch Table" 
              className="experience-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;