import { Link } from 'react-router-dom';
import { galleryPImages } from '../data/galleryImages.ts';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-grid">
        {galleryPImages.map((img, i) => (
          <div key={img} className="gallery-item">
            <img src={img} alt={`Gallery ${i + 1}`} />
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