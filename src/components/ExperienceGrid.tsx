import { Link } from 'react-router-dom';
import './ExperienceGrid.css';

const experiences = [
  {
    title: "Corporate Retreats",
    to: "/corporate-retreats",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000",
    features: ["Leadership retreats", "Team building", "Executive summits", "Company celebrations"],
    extra: "Private meeting spaces • Curated dining • Outdoor experiences"
  },
  {
    title: "Luxury Weddings",
    to: "/luxury-weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    features: ["Scenic ceremony locations", "Luxury tented receptions", "Rehearsal dinners", "Weekend experiences"],
    extra: "Exclusive destination • western luxury setting"
  },
  {
    title: "Private Events",
    to: "/private-events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    features: ["Milestone celebrations", "Family reunions", "Influencer retreats", "Brand activations"],
    extra: "Chef-driven menus • Private ranch buyouts"
  }
];

const ExperienceGrid = () => {
  return (
    <section id="services" className="grid-section">
      <div className="grid-header">
        <h2 className="grid-main-title">Tailored Gatherings</h2>
        <p className="grid-subtitle">Unforgettable moments set against the western frontier.</p>
      </div>

      <div className="experience-container">
        {experiences.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay">
                 <Link to={item.to} className="card-btn">Explore Details</Link>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <ul className="card-features">
                {item.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <p className="card-extra">{item.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceGrid;