import { usePageMeta } from '../hooks/usePageMeta.ts';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import Hero from '../components/Hero.tsx';
import Experience from '../components/Experience.tsx';
import ExperienceGrid from '../components/ExperienceGrid.tsx';
import Culinary from '../components/Culinary.tsx';
import Accommodations from '../components/Accommodations.tsx';
import Gallery from '../components/Gallery.tsx';
import InquiryTeaser from '../components/InquiryTeaser.tsx';

const Home = () => {
  usePageMeta({
    title: 'Briggs Brothers Ranch — Luxury Private Retreat',
    description:
      'Exclusive destination for corporate retreats, luxury weddings, and private events. Privacy, elevated hospitality, and bespoke ranch experiences.',
    keywords:
      'luxury ranch retreat, corporate retreat ranch, luxury ranch wedding venue, executive retreat venue, private ranch events',
  });

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Experience />
        <ExperienceGrid />
        <Culinary />
        <Accommodations />
        <Gallery />
        <InquiryTeaser />
      </main>
      <Footer />
    </>
  );
};

export default Home;
