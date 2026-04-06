import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import Experience from '../components/Experience.tsx';
import ExperienceGrid from '../components/ExperienceGrid.tsx';
import Culinary from '../components/Culinary.tsx';
import Accommodations from '../components/Accommodations.tsx';
import Gallery from '../components/Gallery.tsx';
import Inquiry from '../components/Inquiry.tsx';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <ExperienceGrid />
      <Culinary />
      <Accommodations />
      <Gallery />
      <Inquiry />
      <footer
        style={{
          padding: '40px',
          textAlign: 'center',
          background: 'var(--saddle-brown)',
          color: 'white',
          fontSize: '0.7rem',
          letterSpacing: '2px',
        }}
      >
        © 2025 BRIGGS BROTHERS RANCH. ALL RIGHTS RESERVED.
      </footer>
    </>
  );
};

export default Home;
