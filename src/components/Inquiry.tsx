import './Inquiry.css'; // Note: You can name the css Inquiry.css

const Inquiry = () => {
  return (
    <section id="inquiry" className="inquiry-section">
      <div className="inquiry-container">
        <div className="inquiry-brand">
          <h2 className="stay-title">Begin Your Journey</h2>
          <p>We invite you to experience the frontier in its most refined form. Please provide your details, and our concierge will reach out to curate your experience.</p>
          <div className="contact-details">
            <p>Direct: (555) RANCH-LIFE</p>
            <p>Email: concierge@briggsbros.com</p>
          </div>
        </div>

        <form className="inquiry-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Event Type</option>
              <option value="wedding">Luxury Wedding</option>
              <option value="corporate">Corporate Retreat</option>
              <option value="private">Private Celebration</option>
            </select>
            <select required>
              <option value="">Budget Range</option>
              <option value="10-25k">$10k - $25k</option>
              <option value="25-50k">$25k - $50k</option>
              <option value="50k+">$50k+</option>
            </select>
          </div>
          <textarea placeholder="Tell us more about your vision" rows={5}></textarea>
          <button type="submit" className="btn-primary">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
};
export default Inquiry;