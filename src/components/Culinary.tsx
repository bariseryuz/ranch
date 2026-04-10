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
            <p className="culinary-sister-note">
              Culinary Experience provided by our sister company &ldquo;1311Events&rdquo;
            </p>
          </div>

          {/* Right: Large Vertical Image */}
          <div className="culinary-image">
            <img
              src="/table.png"
              alt="Dining at Briggs Brothers Ranch"
            />
            <div className="image-caption">Live-Fire Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culinary;