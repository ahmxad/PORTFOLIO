import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Security', to: '/security' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Home">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Ahmad</span>
          <span className="navbar__logo-bracket"> /&gt;</span>
        </Link>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
