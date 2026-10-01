import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const primaryLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/zhienelle' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karyle-zhienelle-baylon-42231b382/',
  },
];

const resumeHref = '/assets/Karyle_Baylon_Resume.pdf';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarTone, setNavbarTone] = useState('dark');
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const menuId = useId();
  const location = useLocation();
  const linksRef = useRef(null);

  const moveIndicator = useCallback((element) => {
    const container = linksRef.current;
    if (!container || !element) return;

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    setIndicatorStyle({
      width: elementRect.width,
      height: elementRect.height,
      transform: `translate3d(${elementRect.left - containerRect.left}px, ${elementRect.top - containerRect.top}px, 0)`,
      opacity: 1,
    });
  }, []);

  const moveIndicatorToActive = useCallback(() => {
    const activeLink = linksRef.current?.querySelector('[aria-current="page"]');
    if (activeLink) moveIndicator(activeLink);
  }, [moveIndicator]);

  useLayoutEffect(() => {
    moveIndicatorToActive();
  }, [location.pathname, moveIndicatorToActive]);

  useEffect(() => {
    const handleResize = () => moveIndicatorToActive();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [moveIndicatorToActive]);

  useEffect(() => {
    const updateNavbarTone = () => {
      const sampleY = 56;
      const themedSections = [...document.querySelectorAll('[data-navbar-theme]')];
      const visibleSection = themedSections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });

      const surfaceTheme = visibleSection?.dataset.navbarTheme ?? 'light';

      // Navbar should contrast with the visible section surface.
      setNavbarTone(surfaceTheme === 'dark' ? 'light' : 'dark');
    };

    let frameId;
    const requestToneUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateNavbarTone);
    };

    updateNavbarTone();
    window.addEventListener('scroll', requestToneUpdate, { passive: true });
    window.addEventListener('resize', requestToneUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestToneUpdate);
      window.removeEventListener('resize', requestToneUpdate);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header navbar-${navbarTone}`}>
      <div className="desktop-nav-cluster">
        <Link className="brand-mark" to="/" aria-label="Karyle Baylon — Home">
          <img src="/assets/icon.png" alt="Karyle Baylon" className="brand-mark__img" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div
            className="desktop-nav__links"
            ref={linksRef}
            onMouseLeave={moveIndicatorToActive}
          >
            <span
              className="desktop-nav__indicator"
              style={indicatorStyle}
              aria-hidden="true"
            />

            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                className="desktop-nav__link"
                end={link.end}
                to={link.to}
                onMouseEnter={(event) => moveIndicator(event.currentTarget)}
                onFocus={(event) => moveIndicator(event.currentTarget)}
                onBlur={moveIndicatorToActive}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

        </nav>

        <a
          className="resume-link"
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
        >
          <span>Resume</span>
          <span className="resume-link__arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <Link className="brand-mark" to="/" aria-label="Karyle Baylon — Home">
          <img src="/assets/icon.png" alt="Karyle Baylon" className="brand-mark__img" />
        </Link>

        <div className="mobile-nav__actions">
          <a
            className="mobile-resume-link"
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
          <button
            className="mobile-nav__menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="mobile-nav__menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu${isMenuOpen ? ' is-open' : ''}`}
        id={menuId}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            <p className="mobile-menu__eyebrow">Navigation</p>
          </div>

          <div className="mobile-menu__primary">
            {primaryLinks.map((link, index) => (
              <NavLink
                key={link.to}
                className={({ isActive }) => `mobile-menu__link${isActive ? ' is-active' : ''}`}
                end={link.end}
                to={link.to}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span className="mobile-menu__number">0{index + 1}</span>
                <span>{link.label}</span>
                <span className="mobile-menu__arrow" aria-hidden="true">↗</span>
              </NavLink>
            ))}
          </div>

          <div className="mobile-menu__utility">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
