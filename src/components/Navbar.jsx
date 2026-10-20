
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinks = [
    { label: 'Menu', href: '#full-menu' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Visit Us', href: '#VisitUs' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#" className="logo" onClick={closeMenu}>
         KABABS
  <span>AT LONSDALE</span>
        </a>

        {/* Desktop navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#VisitUs" className="navbar-cta">
          Find a shop
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Mobile dropdown */}
        <div
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#VisitUs"
            className="mobile-nav-cta"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
          >
            Find a shop
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
