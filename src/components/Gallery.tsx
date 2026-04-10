import { Link } from 'react-router-dom';
import { gallerySlides } from '../data/galleryImages.ts';
import GalleryCarousel from './GalleryCarousel';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-section__header">
        <span className="gallery-section__eyebrow">Gallery</span>
        <h2 className="gallery-section__title">Scenes from the ranch</h2>
        <p className="gallery-section__lede">
          A living album — pause on hover, use arrows, or explore the full collection.
        </p>
      </div>

      <GalleryCarousel slides={gallerySlides} />

      <div className="gallery-footer">
        <Link to="/gallery" className="gallery-footer__btn">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
};
export default Gallery;
