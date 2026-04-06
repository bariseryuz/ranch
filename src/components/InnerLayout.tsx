import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

export default function InnerLayout() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
