import { Link, useParams } from 'react-router-dom';
import { projectCaseStudies } from '../data/projectCaseStudies.js';
import { ErrorPage } from '../components/ErrorPage.jsx';


export function ProjectCaseStudyPage() {
  const { slug } = useParams();
  const project = projectCaseStudies[slug];

  if (!project) {
    return (
      <ErrorPage
        eyebrow="404 / PROJECT"
        title="Case study not found."
        description="The project you’re looking for isn’t available in this archive."
        linkTo="/projects"
        linkLabel="Back to projects"
      />
    );
  }

  const previewImages = project.previewImages?.length
    ? project.previewImages
    : [project.heroImage];

  return (
    <div className="case-study-page" data-navbar-theme="light">
      <div className="container case-study-page__container">
        <div className="case-study__top-nav">
          <Link className="case-study__back-link" to="/projects">
            ← Back to projects
          </Link>
        </div>

        <section className="case-study-hero" aria-labelledby="case-study-title">
          <div className="case-study-hero__heading">
            <p className="case-study__eyebrow">
              {project.eyebrow || project.disciplines?.join(' · ')}
            </p>
            <h1 id="case-study-title">{project.title}</h1>
          </div>

          <div className="case-study__hero-media-wrapper">
            <div className="case-study__media">
              <img
                src={project.heroImage}
                alt={project.title}
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="case-study__lead-row">
            <p className="case-study__lead-summary">{project.summary}</p>
            <div className="case-study__lead-action">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study__github-link"
                >
                  <span>GitHub repository</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="case-study__github-link case-study__github-link--disabled">
                  <span>GitHub unavailable</span>
                </span>
              )}
            </div>
          </div>

          <dl className="case-study-hero__meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{project.disciplines?.join(' · ')}</dd>
            </div>
            <div>
              <dt>Tech Stack / Tools</dt>
              <dd>{project.tools?.join(' · ')}</dd>
            </div>
          </dl>
        </section>

        <section className="case-study-simple-body">
          {project.challenge && (
            <div className="case-study-simple-block">
              <h2>The Problem</h2>
              <ul className="case-study-simple-list">
                <li>
                  <strong>{project.challenge.title}:</strong> {project.challenge.text}
                </li>
              </ul>
            </div>
          )}

          {project.contributions && (
            <div className="case-study-simple-block">
              <h2>Key Contributions</h2>
              <ul className="case-study-simple-list">
                {project.contributions.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.showcase && (
            <div className="case-study-simple-block">
              <h2>Features</h2>
              <ul className="case-study-simple-list">
                {project.showcase.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="case-study-simple-block">
            <h2>Preview</h2>
            <div className="case-study-preview-column">
              {previewImages && previewImages.length > 0 ? (
                previewImages.map((src, idx) => (
                  <div key={idx} className="case-study-preview-card">
                    <img src={src} alt={`${project.title} preview ${idx + 1}`} loading="lazy" />
                  </div>
                ))
              ) : (
                <p className="case-study-preview-empty">Preview screenshots are currently unavailable.</p>
              )}
            </div>
          </div>
        </section>

        <button
          type="button"
          className="case-study__back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </div>
  );
}