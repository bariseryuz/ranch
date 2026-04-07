import './Accommodations.css';

const base = import.meta.env.BASE_URL;

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
            <img src={`${base}ran.png`} alt="Luxury ranch home" />
            <div className="stay-info"><h3>Luxury Ranch Homes</h3></div>
          </div>
          <div className="stay-item">
            <img src={`${base}Cabin.png`} alt="Guest cabins" />
            <div className="stay-info"><h3>Guest Cabins</h3></div>
          </div>
          <div className="stay-item">
            <img src={`${base}Glamping.jpeg`} alt="Glamping and suites" />
            <div className="stay-info"><h3>Glamping & Suites</h3></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Accommodations;