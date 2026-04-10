import { useCallback, useEffect, useRef, useState } from 'react';
import './GalleryCarousel.css';

export type GallerySlide = { src: string; category: string };

type Props = {
  slides: GallerySlide[];
  /** Taller frame + thumbnails — full `/gallery` page */
  variant?: 'default' | 'immersive';
  /** Horizontal filmstrip (immersive only recommended) */
  showThumbnails?: boolean;
  autoMs?: number;
};

const DEFAULT_AUTO_MS = 6500;

export default function GalleryCarousel({
  slides,
  variant = 'default',
  showThumbnails = false,
  autoMs = DEFAULT_AUTO_MS,
}: Props) {
  const len = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (len === 0) return;
      setIndex((i) => (i + dir + len) % len);
    },
    [len]
  );

  useEffect(() => {
    const root = thumbsRef.current;
    if (!root || !showThumbnails) return;
    const active = root.querySelector(`[data-thumb-index="${index}"]`);
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    active?.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      inline: 'center',
      block: 'nearest',
    });
  }, [index, showThumbnails]);

  useEffect(() => {
    if (paused || len < 2) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    const id = window.setInterval(() => go(1), autoMs);
    return () => window.clearInterval(id);
  }, [paused, go, len, autoMs]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const scheduleResumeAutoplay = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, 2800);
  }, []);

  const handlePointerInteract = useCallback(() => {
    setPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const handlePointerRelease = useCallback(() => {
    scheduleResumeAutoplay();
  }, [scheduleResumeAutoplay]);

  if (len === 0) {
    return (
      <p className="gallery-carousel__empty" role="status">
        No images match this filter.
      </p>
    );
  }

  const current = slides[index];
  const immersive = variant === 'immersive';

  return (
    <div
      className={`gallery-carousel ${immersive ? 'gallery-carousel--immersive' : ''}`}
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        if (e.pointerType === 'touch' || e.pointerType === 'pen') handlePointerInteract();
      }}
      onPointerUp={(e) => {
        if (e.pointerType === 'touch' || e.pointerType === 'pen') handlePointerRelease();
      }}
      onPointerCancel={(e) => {
        if (e.pointerType === 'touch' || e.pointerType === 'pen') handlePointerRelease();
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          go(-1);
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <p className="gallery-carousel__sr-hint">
        Swipe left or right on the photo to browse. Use arrow keys when this carousel is focused.
      </p>
      <p className="gallery-carousel__mobile-hint" aria-hidden="true">
        Swipe the photo to browse
      </p>
      <div className="gallery-carousel__meta" aria-live="polite">
        <span className="gallery-carousel__counter">
          {index + 1}
          <span className="gallery-carousel__counter-sep">/</span>
          {len}
        </span>
        <span className="gallery-carousel__category">{current.category}</span>
      </div>

      <div
        className="gallery-carousel__frame"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null || len < 2) return;
          const endX = e.changedTouches[0].clientX;
          const dx = endX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(dx) < 56) return;
          if (dx < 0) go(1);
          else go(-1);
        }}
      >
        <button
          type="button"
          className="gallery-carousel__nav gallery-carousel__nav--prev"
          aria-label="Previous photo"
          onClick={() => go(-1)}
          disabled={len < 2}
        >
          ‹
        </button>
        <figure className="gallery-carousel__slide" aria-live="polite">
          <div key={index} className="gallery-carousel__img-wrap">
            <img src={current.src} alt="" className="gallery-carousel__img" />
          </div>
          <figcaption key={`cap-${index}`} className="gallery-carousel__caption">
            {current.category}
          </figcaption>
        </figure>
        <button
          type="button"
          className="gallery-carousel__nav gallery-carousel__nav--next"
          aria-label="Next photo"
          onClick={() => go(1)}
          disabled={len < 2}
        >
          ›
        </button>
      </div>

      {showThumbnails && len > 1 && (
        <div
          ref={thumbsRef}
          className="gallery-carousel__thumbs"
          role="tablist"
          aria-label="Jump to photo"
        >
          {slides.map((s, i) => (
            <button
              key={`${s.src}-${i}`}
              type="button"
              role="tab"
              data-thumb-index={i}
              aria-selected={i === index}
              aria-label={`Photo ${i + 1}: ${s.category}`}
              className={`gallery-carousel__thumb ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <img src={s.src} alt="" />
            </button>
          ))}
        </div>
      )}

      {len > 1 && (
        <div className="gallery-carousel__dots" role="tablist" aria-label="Gallery slides">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Photo ${i + 1} of ${len}`}
              className={`gallery-carousel__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
