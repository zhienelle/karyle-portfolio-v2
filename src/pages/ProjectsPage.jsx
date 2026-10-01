import { Link } from 'react-router-dom';

const projects = [
  {
    slug: 'rosepine',
    number: '01',
    name: 'Rosepine Hotel',
    // year: '2025',
    disciplines: ['Frontend Development', 'UI/UX'],
    description:
      'A polished hotel-booking experience combining guest-facing discovery with a clear reservation flow and thoughtful visual hierarchy.',
    image: '/assets/projects/rosepine1.png',
  },
  {
    slug: 'ust-technovation-society',
    number: '02',
    name: 'UST Technovation Society',
    disciplines: ['UI/UX', 'Organization'],
    description:
      'High-fidelity interface work for the organization’s official website, focused on accessibility, hierarchy, and a cohesive visual system.',
    image: '/assets/projects/techsoc1.png',
  },
  {
    slug: 'smarts',
    number: '03',
    name: 'SMARTS',
    disciplines: ['Software Development', 'Capstone'],
    description:
      'A software platform designed to support and automate subcontracting workflows across the project lifecycle.',
    image: '/assets/projects/smarts1.png',
  },
  // {
  //   slug: 'dreamsnap',
  //   number: '03',
  //   name: 'DreamSnap',
  //   disciplines: ['Hackathon', 'Product Design'],
  //   description:
  //     'A collaborative product concept developed under hackathon constraints, balancing speed, clarity, and interface usability.',
  //   image: '/assets/projects/dreamsnap.png',
  // },
  {
    slug: 'panic-attack-detection',
    number: '04',
    name: 'Panic Attack Detection',
    disciplines: ['Machine Learning', 'Research'],
    description:
      'A data-science research project exploring standalone and hybrid model performance for panic-disorder prediction and severity classification.',
    image: '/assets/projects/thesis1.png',
    researchTags: ['ANN', 'Random Forest', 'Hybrid Model', 'SHAP', 'LIME'],
  },
  {
    slug: 'foto-clique',
    number: '05',
    name: 'Foto Clique Rental Photobooth Studios',
    disciplines: ['Brand Design', 'Visual Design'],
    description:
      'Refined Foto Clique’s brand identity and created cohesive marketing and operational assets in Canva, including business cards, social media content, and branded photo-frame overlays.',
    image: '/assets/projects/clique1.png',
  },
  // {
  //   slug: 'mechabots-japan-truck-tradings',
  //   number: '06',
  //   name: 'Mechabots Japan Truck Tradings',
  //   disciplines: ['Frontend Development', 'Inventory UX'],
  //   description:
  //     'Co-developed a responsive inventory catalog with multi-attribute filtering and a custom admin dashboard, reducing manual update dependency and improving data accuracy for stakeholders.',
  //   image: '/assets/projects/mechabots.png',
  //   researchTags: ['Responsive UI', 'Inventory Catalog', 'Filtering', 'Admin Dashboard'],
  // },
];

function ProjectMedia({ project }) {
  return (
    <div className="projects-index__media">
      <div className="projects-index__media-fallback" aria-hidden="true">
        <span>{project.number}</span>
        <strong>{project.name}</strong>
      </div>

      <img
        src={project.image}
        alt=""
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="projects-index__meta">
      <span className="projects-index__number">{project.number}</span>

      <div className="projects-index__disciplines">
        {project.disciplines.map((discipline) => (
          <span key={discipline}>{discipline}</span>
        ))}
      </div>

      {project.year && <span className="projects-index__year">{project.year}</span>}
    </div>
  );
}

export function ProjectsPage() {
  return (
    <>
      <section
        className="projects-index-hero"
        data-navbar-theme="light"
        aria-labelledby="projects-index-title"
      >
        <div className="container projects-index-hero__container">
          <div>
            <p className="projects-index__kicker">Projects / Selected Archive</p>
            <h1 id="projects-index-title">
              Work across <span>software</span>, <span>data</span>, and <span>design</span>.
            </h1>
          </div>

          <div className="projects-index-hero__aside">
            <p>
              A curated collection of projects that show how I approach product thinking, technical
              implementation, interface design, and machine-learning research.
            </p>
            <span>06 / Projects</span>
          </div>
        </div>
      </section>

      <section className="projects-index" data-navbar-theme="dark">
        <div className="container projects-index__container">
          <div className="projects-index__grid">
            {projects.map((project) => (
              <article className="projects-index__card" key={project.slug}>
                <Link className="projects-index__link" to={`/projects/${project.slug}`}>
                  <ProjectMedia project={project} />

                  <div className="projects-index__copy">
                    <ProjectMeta project={project} />

                    <div className="projects-index__title-row">
                      <h2>{project.name}</h2>
                      <span className="projects-index__arrow" aria-hidden="true">↗</span>
                    </div>

                    <p>{project.description}</p>

                    {project.researchTags && (
                      <div
                        className="projects-index__research-tags"
                        aria-label="Research methods and tools"
                      >
                        {project.researchTags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}

                    <span className="projects-index__view">
                      {project.researchTags ? 'View research' : 'View project'} ↗
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
