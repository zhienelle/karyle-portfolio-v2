import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/zhienelle' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karyle-zhienelle-baylon-42231b382/' },
  { label: 'Instagram', href: 'https://www.instagram.com/karylezhnll' },
  { label: 'Facebook', href: 'https://www.facebook.com/karylebaylon' },
  { label: 'Email', href: 'mailto:karylebaylon@gmail.com' },
];

export function HomeContactCTA() {
  return (
    <section
      className="home-contact"
      data-navbar-theme="dark"
      aria-labelledby="home-contact-title"
    >
      <div className="container home-contact__container">
        <div className="home-contact__topline">
          <p className="home-contact__eyebrow">04 / Contact</p>
          <p className="home-contact__availability">Open to opportunities & collaborations</p>
        </div>

        <div className="home-contact__main">
          <div>
            <h2 id="home-contact-title">
              Have a role, project, or idea in mind?
              <span> Let’s talk.</span>
            </h2>
          </div>

          <Link className="home-contact__cta" to="/contact">
            <span>Start a conversation</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <footer className="home-footer">
          <div className="home-footer__brand">
            <span>Karyle Zhienelle Baylon</span>
            <span>Software Developer · Data Science Graduate</span>
          </div>

          <div className="home-footer__links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <p className="home-footer__meta">© 2026</p>
        </footer>
      </div>
    </section>
  );
}
