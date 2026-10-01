import { Link } from 'react-router-dom';

export function AboutTransition() {
  return (
    <section
      className="home-about"
      data-navbar-theme="light"
      aria-labelledby="home-about-title"
    >
      <div className="container home-about__container">
        <div className="home-about__label">
          <span>03</span>
          <span>About</span>
        </div>

        <div className="home-about__content">
          <p className="home-about__eyebrow">Beyond the project screens</p>

          <div className="home-about__headline-row">
            <h2 id="home-about-title">
              I like working where <span>technology</span>, <span>data</span>, and thoughtful
              interfaces meet.
            </h2>

            <Link className="home-about__link" to="/about">
              <span>More about me</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="home-about__facts" aria-label="Quick facts">
            <div>
              <span className="home-about__fact-label">Background</span>
              <p>BS Computer Science · Data Science specialization</p>
            </div>
            <div>
              <span className="home-about__fact-label">Focus</span>
              <p>Software development · Frontend · Data & ML</p>
            </div>
            <div>
              <span className="home-about__fact-label">Based in</span>
              <p>Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
