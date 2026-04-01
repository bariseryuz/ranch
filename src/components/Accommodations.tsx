import './Accommodations.css';

const Accommodations = () => {
  return (
    <section id="stay" className="stay-section">
      <div className="container">
        <div className="stay-header">
          <span className="gold-label">Accommodations</span>
          <h2 className="stay-title">Privacy & Comfort</h2>
        </div>
        <div className="stay-grid">
          <div className="stay-item large">
            <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000" alt="Ranch Home" />
            <div className="stay-info"><h3>Luxury Ranch Homes</h3></div>
          </div>
          <div className="stay-item">
            <img src="https://images.unsplash.com/photo-1449156733076-eb158af622e5?q=80&w=1000" alt="Guest Cabins" />
            <div className="stay-info"><h3>Guest Cabins</h3></div>
          </div>
          <div className="stay-item">
            <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000" alt="Glamping" />
            <div className="stay-info"><h3>Glamping & Suites</h3></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Accommodations;