import './Culinary.css';

const Culinary = () => {
  return (
    <section id="culinary" className="culinary-section">
      <div className="culinary-container">
        
        {/* Top Section: High-End Text */}
        <div className="culinary-header">
          <span className="gold-label">The Culinary Experience</span>
          <h2 className="culinary-title">A Symphony of Fire & Season</h2>
          <p className="culinary-intro">
            Dining at Briggs Brothers Ranch is an experience in itself. 
            Guests enjoy chef-driven menus highlighting seasonal ingredients, 
            live-fire cooking, and curated wine pairings.
          </p>
        </div>

        <div className="culinary-content">
          {/* Left: The "Menu" style list */}
          <div className="culinary-menu">
            <div className="menu-item">
              <h3>Farm-to-Table Dinners</h3>
              <p>Ingredients harvested from local estates, prepared over open flame.</p>
            </div>
            <div className="menu-item">
              <h3>Caviar Tastings</h3>
              <p>A refined selection of the world's finest, paired with artisanal spirits.</p>
            </div>
            <div className="menu-item">
              <h3>Wine & Whiskey Tastings</h3>
              <p>Curated collections from private cellars and local distilleries.</p>
            </div>
            <div className="menu-item">
              <h3>Chef’s Table Experiences</h3>
              <p>An intimate front-row seat to the artistry of the kitchen.</p>
            </div>
          </div>

          {/* Right: Large Vertical Image */}
          <div className="culinary-image">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
              alt="Live fire cooking at the ranch" 
            />
            <div className="image-caption">Live-Fire Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culinary;