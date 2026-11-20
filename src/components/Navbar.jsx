import { useState } from 'react';
import './Navbar.css';

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#home" onClick={closeMenu}>
          AKASH
        </a>

        <button
          className={`navbar__toggle${isMenuOpen ? ' navbar__toggle--open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className={`navbar__navigation${isMenuOpen ? ' navbar__navigation--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {navigationLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
