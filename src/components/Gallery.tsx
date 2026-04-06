import { Link } from 'react-router-dom';
import './Gallery.css';

const images = [
  "https://images.unsplash.com/photo-1533167649158-6d508895b980?q=80&w=800",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  "https://images.unsplash.com/photo-1524813092629-3dbfa7110c73?q=80&w=800"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-item">
            <img src={img} alt="Ranch Life" />
          </div>
        ))}
      </div>
      <div className="gallery-footer">
        <Link
          to="/gallery"
          className="btn-secondary"
          style={{ color: 'var(--saddle-brown)', borderColor: 'var(--saddle-brown)' }}
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};
export default Gallery;