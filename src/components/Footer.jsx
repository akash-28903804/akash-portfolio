import './Footer.css';
import { siteContact, socialProfiles } from '../siteConfig.js';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="#home">
              AKASH
            </a>
            <p>
              Aspiring software developer learning Java, JavaScript, C, and
              modern web development.
            </p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <h2>Explore</h2>
            <ul>
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__connect">
            <h2>Connect</h2>
            <ul>
              {socialProfiles.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteContact.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} Akash. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
