import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const projects = {
  rosepine: {
    index: '01',
    name: 'Rosepine Hotel',
    year: '2025',
    disciplines: ['Frontend Development', 'UI/UX'],
    description: 'A refined hotel-booking experience focused on clear discovery, polished presentation, and an intuitive reservation flow.',
    image: '/assets/projects/rosepine.png',
    href: '/projects/rosepine',
  },
  smarts: {
    index: '02',
    name: 'SMARTS',
    disciplines: ['Software Development', 'Capstone'],
    description: 'A subcontracting management platform that centralizes project and inventory tracking with streamlined workflows and role-based access.',
    image: '/assets/projects/smarts1.png',
    href: '/projects/smarts',
  },
  thesis: {
    index: '03',
    name: 'Panic Attack Detection',
    disciplines: ['Machine Learning', 'Research'],
    description: 'Research comparing standalone and hybrid models for panic attack prediction and severity classification, supported by explainable AI.',
    image: '/assets/projects/thesis1.png',
    href: '/projects/panic-attack-detection',
    researchTags: ['ANN', 'Random Forest', 'Hybrid Model', 'SHAP', 'LIME'],
  },
};

function ProjectVisual({ project, className = '' }) {
  return (
    <div className={`selected-work__visual ${className}`.trim()}>
      <div className="selected-work__visual-fallback" aria-hidden="true">
        <span>{project.index}</span>
        <strong>{project.name}</strong>
      </div>
      <img
        src={project.image}
        alt=""
        loading="lazy"
        onError={(event) => { event.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
}

function Meta({ project }) {
  return (
    <div className="selected-work__meta">
      <span className="selected-work__index">{project.index}</span>
      <div className="selected-work__disciplines" aria-label="Disciplines">
        {project.disciplines.map((discipline) => <span key={discipline}>{discipline}</span>)}
      </div>
      {project.year && <span className="selected-work__year">{project.year}</span>}
    </div>
  );
}

function ProjectLink({ project, className = '', children }) {
  return <Link className={`selected-work__project-link ${className}`.trim()} to={project.href}>{children}</Link>;
}

export function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return undefined;
    const revealItems = section.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="selected-work" data-navbar-theme="dark" aria-labelledby="selected-work-title" ref={sectionRef}>
      <div className="container selected-work__container">
        <header className="selected-work__header" data-reveal>
          <div>
            <p className="selected-work__eyebrow">02 / Selected Work</p>
            <h2 id="selected-work-title">A few projects I’m proud to have shaped.</h2>
          </div>
          <p className="selected-work__intro">Selected work across product interfaces, software development, and machine learning—each approached with equal attention to how it works and how it feels to use.</p>
        </header>

        <div className="selected-work__grid">
          {[projects.rosepine, projects.smarts, projects.thesis].map((project) => (
            <article className="selected-work__card" data-reveal key={project.name}>
              <ProjectLink project={project}>
                <ProjectVisual project={project} className="selected-work__visual--grid" />
                <div className="selected-work__card-copy">
                  <Meta project={project} />
                  <div className="selected-work__title-row">
                    <h3>{project.name}</h3>
                    <span className="selected-work__arrow" aria-hidden="true">↗</span>
                  </div>
                  <p>{project.description}</p>
                </div>
              </ProjectLink>
            </article>
          ))}
        </div>

        <div className="selected-work__footer" data-reveal>
          <p>More work, experiments, and full case studies live in the project archive.</p>
          <Link className="selected-work__all-link" to="/projects"><span>View all projects</span><span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
