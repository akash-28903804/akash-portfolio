import './Hero.css';
import { socialProfiles } from '../siteConfig.js';

function SocialIcon({ icon }) {
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.16 1.7 1.16 1 1.7 2.62 1.2 3.26.92.1-.73.39-1.2.71-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.6 5.24-5.09 5.51.4.35.76 1.02.76 2.06v3.11c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.33h2.97v9.57ZM6.45 8.02a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.47 10.88h-2.97v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.66V9.33h2.85v1.31h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.55v5.25Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__name">Akash</span>
          </h1>
          <p className="hero__role">Aspiring Software Developer</p>
          <p className="hero__specialties">
            Java Programmer <span aria-hidden="true">|</span> React Developer
            {' '}
            <span aria-hidden="true">|</span> Frontend Developer
          </p>
          <p className="hero__introduction">
            I'm passionate about programming, problem-solving, and building
            modern web applications. Currently learning Java, JavaScript, C,
            and React while developing practical projects to improve my
            technical skills.
          </p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#projects">
              View My Projects
            </a>
            <a className="hero__button hero__button--secondary" href="#contact">
              Contact Me
            </a>
          </div>

          {socialProfiles.length > 0 && (
            <ul className="hero__socials" aria-label="Social profiles">
              {socialProfiles.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label} profile`}
                  >
                    <SocialIcon icon={icon} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="hero__visual"
          role="img"
          aria-label="Developer-themed illustration of a code editor"
        >
          <div className="hero__orb hero__orb--purple" aria-hidden="true" />
          <div className="hero__orb hero__orb--blue" aria-hidden="true" />
          <div className="hero__code-card" aria-hidden="true">
            <div className="hero__window-bar">
              <span />
              <span />
              <span />
              <span className="hero__file-name">developer.js</span>
            </div>
            <div className="hero__code">
              <p>
                <span className="hero__code-purple">const</span>{' '}
                <span className="hero__code-blue">developer</span> = {'{'}
              </p>
              <p className="hero__code-indent">
                <span className="hero__code-muted">name</span>:{' '}
                <span className="hero__code-green">'Akash'</span>,
              </p>
              <p className="hero__code-indent">
                <span className="hero__code-muted">role</span>:{' '}
                <span className="hero__code-green">'Developer'</span>,
              </p>
              <p className="hero__code-indent">
                <span className="hero__code-muted">stack</span>: [
              </p>
              <p className="hero__code-indent hero__code-indent--double">
                <span className="hero__code-green">'Java'</span>,{' '}
                <span className="hero__code-green">'React'</span>
              </p>
              <p className="hero__code-indent">],</p>
              <p>
                {'}'}
                <span className="hero__code-purple">;</span>
              </p>
              <p className="hero__code-spacer" />
              <p>
                <span className="hero__code-purple">while</span> (learning) {'{'}
              </p>
              <p className="hero__code-indent">
                <span className="hero__code-blue">build</span>();
              </p>
              <p>{'}'}</p>
            </div>
          </div>
          <div className="hero__floating-badge" aria-hidden="true">
            <span className="hero__badge-icon">&lt;/&gt;</span>
            <span>Build. Learn. Repeat.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
