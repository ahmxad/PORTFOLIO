import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MouseGlow from './MouseGlow';
import './Layout.css';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <MouseGlow />
      <Navbar />
      <main className="layout__main" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
