import './PageHero.css';

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  video?: string;
  mediaFit?: 'cover' | 'contain';
  variant?: 'default' | 'full' | 'sidecar';
  /** Optional texture/image layered on top of hero media (under headline). Encoded URL from `public/`. */
  overlayImage?: string;
};

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  video,
  mediaFit = 'cover',
  variant = 'default',
  overlayImage,
}: Props) {
  const rootClass = `page-hero ${variant === 'full' ? 'page-hero--full' : ''} ${
    variant === 'sidecar' ? 'page-hero--sidecar' : ''
  }`;

  const media = (
    <div className={`page-hero__media page-hero__media--${mediaFit}`}>
      <div className="page-hero__asset">
        {video ? (
          <video
            className="page-hero__video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src={image} alt={imageAlt ?? ''} className="page-hero__img" />
        )}
        <div
          className={`page-hero__overlay ${overlayImage ? 'page-hero__overlay--custom' : ''}`}
          style={
            overlayImage
              ? {
                  /* Top: warm “sun” glow · Middle: golden-hour wash · Bottom: texture */
                  backgroundImage: [
                    'radial-gradient(ellipse 115% 85% at 70% 5%, rgba(255, 232, 195, 0.55) 0%, rgba(255, 200, 120, 0.28) 32%, transparent 58%)',
                    'radial-gradient(ellipse 60% 45% at 18% 22%, rgba(255, 215, 150, 0.2) 0%, transparent 52%)',
                    'linear-gradient(to top, rgba(35, 20, 10, 0.88) 0%, rgba(75, 42, 24, 0.42) 38%, rgba(180, 120, 60, 0.22) 62%, rgba(255, 215, 155, 0.18) 100%)',
                    `url(${overlayImage})`,
                  ].join(', '),
                  backgroundSize: 'cover, cover, cover, cover',
                  backgroundPosition: 'center',
                }
              : undefined
          }
        />
      </div>
    </div>
  );

  const text = (
    <div className="page-hero__text">
      {subtitle && <p className="page-hero__eyebrow">{subtitle}</p>}
      <h1 className="page-hero__title">{title}</h1>
    </div>
  );

  if (variant === 'sidecar') {
    return (
      <section className={rootClass}>
        {text}
        {media}
      </section>
    );
  }

  return (
    <section className={rootClass}>
      {media}
      {text}
    </section>
  );
}
