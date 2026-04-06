import './PageHero.css';

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
};

export default function PageHero({ title, subtitle, image, imageAlt }: Props) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={image} alt={imageAlt ?? ''} className="page-hero__img" />
        <div className="page-hero__overlay" />
      </div>
      <div className="page-hero__text">
        {subtitle && <p className="page-hero__eyebrow">{subtitle}</p>}
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  );
}
