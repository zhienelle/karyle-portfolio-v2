import { Link } from 'react-router-dom';
import { HeroSignature3D } from '../components/home/HeroSignature3D.jsx';
import { SelectedWork } from '../components/home/SelectedWork.jsx';
import { AboutTransition } from '../components/home/AboutTransition.jsx';
import { HomeContactCTA } from '../components/home/HomeContactCTA.jsx';

export function HomePage() {
  return (
    <>
      <section className="home-hero" data-navbar-theme="light" aria-labelledby="home-hero-title">
        <div className="container home-hero__container">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">
              <span>━━ Hi! I am Karyle!</span>
              <span className="wave-hand-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </span>
            </p>

            <h1 className="home-hero__title" id="home-hero-title">
              Crafting <span>code</span> ,
              <br />
              designing <span>experiences</span> ,
              <br />
              engineering <span>data</span> .
            </h1>

            <p className="home-hero__intro">
              I am a Computer Science graduate specializing in Data Science, with a strong interest in
              software development, data science, and product design.
            </p>

            <div className="home-hero__actions" aria-label="Hero actions">
              <Link className="hero-button hero-button--primary" to="/projects">
                <span>View my work</span>
                <span className="hero-button__arrow" aria-hidden="true">↘</span>
              </Link>

              <Link className="hero-button hero-button--secondary" to="/about">
                <span>About me</span>
                <span className="hero-button__arrow" aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="home-hero__visual">
            <HeroSignature3D />
          </div>

        </div>
      </section>

      <SelectedWork />
      <AboutTransition />
      <HomeContactCTA />
    </>
  );
}
