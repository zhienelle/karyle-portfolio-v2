import { useState } from 'react';

const specialties = [
  {
    number: '01',
    title: 'Software Development',
    description:
      'Building practical digital products with attention to structure, maintainability, interface quality, and the details that make software easier to use.',
    proof: 'Frontend · Web Development · Enterprise Integration',
  },
  {
    number: '02',
    title: 'Data Science & Analytics',
    description:
      'Working with data from exploration and visualization through predictive modeling and interpretation.',
    proof: 'Data Analysis · Data Visualization · Predictive Modeling · Explainable AI',
  },
  {
    number: '03',
    title: 'Product & Interface Design',
    description:
      'Translating requirements into clear, thoughtful interfaces where visual decisions support usability instead of competing with it.',
    proof: 'UI/UX · Prototyping · Brand Design',
  },
];

const technologyGroups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    label: 'Web Technologies',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub'],
  },
  {
    label: 'Data Science & ML',
    items: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow'],
  },
  {
    label: 'Data Analytics',
    items: ['Tableau', 'Power BI'],
  },
  {
    label: 'Design',
    items: ['Figma', 'Canva'],
  },
];

const experiences = [
  {
    id: 'sap-btp-intern',
    year: '2026',
    title: 'SAP BTP Intern',
    organization: 'Accenture',
    duration: 'January – May 2026',
    type: 'Professional',
    summary:
      'Enterprise integration training and hands-on SAP BTP work focused on integration flows, mapping, transformation, deployment, and monitoring.',
    bullets: [
      'Executed hands-on SAP Process Integration and SAP BTP Integration Suite exercises, designing, deploying, and monitoring iFlows while applying message mapping and transformation techniques for system-to-system communication.',
      'Applied SAP Business Suite and BTP concepts to simulated business scenarios and collaborative technical exercises, strengthening problem-solving and enterprise application integration skills.',
      'Earned the SAP Certified – Implementation Consultant – End-to-End Business Processes for SAP Business Suite certification.',
    ],
    technologies: ['SAP BTP', 'Integration Suite', 'iFlows', 'Message Mapping'],
  },
  {
    id: 'freelance-designer',
    year: '2025',
    title: 'Freelance Graphic & UI/UX Designer',
    organization: 'Independent',
    duration: '2025 – Present',
    type: 'Freelance',
    summary:
      'Brand, interface, and marketing design work for small businesses and client-facing digital products.',
    bullets: [
      'Rosepine Hotel: designed high-fidelity UI/UX mockups for the hotel website redesign and internal admin dashboard, covering guest-facing layouts and interfaces for bookings, room status, housekeeping, and hotel operations.',
      'Foto Clique: refined the brand logo and produced marketing and operational assets including business cards, social content, and branded photo-frame overlays.',
      'Coezy Klaws: developed the brand identity from the ground up, including logo, business cards, service pricelist, instructional guides, Instagram highlights, and promotional assets.',
    ],
    technologies: ['Figma', 'Canva', 'UI/UX', 'Brand Design'],
  },
  {
    id: 'technovation-visual-design',
    year: '2025',
    title: 'Visual Design Staff',
    organization: 'UST Technovation Society',
    duration: '2025 – 2026',
    type: 'Organization',
    summary:
      'UI/UX contribution to the organization’s official website and visual design system.',
    bullets: [
      'Designed high-fidelity, accessible UI/UX interfaces for the official society website, focusing on intuitive navigation, clear information hierarchy, and a cohesive visual experience.',
      'Collaborated with the Visual Design Division to develop and refine website layouts and visual components aligned with the organization’s branding and responsive design principles.',
    ],
    technologies: ['Figma', 'UI/UX', 'Responsive Design'],
  },
  {
    id: 'css-community-development',
    year: '2023',
    title: 'Community Development Staff',
    organization: 'UST Computer Science Society',
    duration: '2023 – 2026',
    type: 'Organization',
    summary:
      'Student-organization work spanning advocacy, event design, and community-development initiatives.',
    bullets: [
      'Save Sierra Madre 2025: translated, localized, and structured web content for an advocacy website focused on environmental awareness and community outreach.',
      'Vuja De Tech Talk 2023: served on the stage design team, creating spatial layouts, visual stage elements, and backdrop assets.',
      'Collaborated with cross-functional project teams across multiple academic years to help plan and deliver student-led outreach and organization-wide events.',
    ],
    technologies: ['Content Design', 'Visual Design', 'Collaboration'],
  },
];

const credentialTabs = ['Education', 'Awards', 'Certifications'];

const education = {
  institution: 'University of Santo Tomas',
  location: 'Manila, Philippines',
  degree: 'Bachelor of Science in Computer Science, Specializing in Data Science',
  duration: '2022 – 2026',
  achievements: [
    'Cum Laude',
    'Dean’s Lister (2022 – 2026)',
    'Department of Science and Technology (DOST) Scholar',
    'Top 9, CS Research Colloquium 2026, Data Science Track (2026)',
  ],
};

const awards = [
  {
    title: 'Bachelor of Science in Computer Science – Cum Laude',
    provider: 'University of Santo Tomas',
    date: 'June 2026',
    logo: '/assets/credentials/ust.png',
    mark: 'UST',
  },
  // {
  //   title: '2026 Academic Innovation Challenge – Participation Award',
  //   provider: 'KPMG Philippines',
  //   date: 'May 2026',
  //   logo: '/assets/credentials/kpmg.png',
  //   mark: 'KPMG',
  // },
  {
    title: 'SAP Business Technology Platform (BTP) Training Completion',
    provider: 'Accenture Philippines',
    date: 'May 2026',
    logo: '/assets/credentials/acn.png',
    mark: 'ACN',
  },
  {
    title: 'CS Research Colloquium 2026, Data Science Track (DS18) – Top 9',
    provider: 'University of Santo Tomas, College of Information and Computing Sciences (CICS)',
    date: 'May 2026',
    logo: '/assets/credentials/cics.png',
    mark: 'UST',
  },
  {
    title: 'AI in Fintech Hackathon – Top 10 Finalist',
    provider: 'Home Credit x KadaKareer',
    date: 'December 2025',
    logo: '/assets/credentials/home-credit.png',
    mark: 'HC',
  },
];

const certifications = [
  {
    title: 'SAP Certified – Implementation Consultant – End-to-End Business Processes for SAP Business Suite',
    provider: 'SAP',
    date: 'March 2026',
    logo: '/assets/credentials/sap.png',
    mark: 'SAP',
    href: 'https://www.credly.com/badges/964f7cf5-933e-47c7-a088-1f6d063bdd9c',
  },
  {
    title: 'IBM SkillsBuild Data Fundamentals',
    provider: 'IBM SkillsBuild',
    date: 'January 2026',
    logo: '/assets/credentials/ibm.png',
    mark: 'IBM',
    href: 'https://www.credly.com/badges/42a68b15-44f8-483c-8d0b-8f1f662d6b14',
  },
  {
    title: 'Data Analysis with Python',
    provider: 'freeCodeCamp',
    date: 'December 2025',
    logo: '/assets/credentials/fcc.png',
    mark: 'fCC',
    href: 'https://www.freecodecamp.org/certification/karylebaylon/data-analysis-with-python-v7',
  },
  {
    title: 'Information Technology Passport (IP) Certification',
    provider: 'PhilNITS',
    date: 'October 2025',
    logo: '/assets/credentials/philnits.jpg',
    mark: 'IP',
    href: 'https://www.itpec.org/statsandresults/all-passers-information/Philippines/2025A_IP.pdf',
  },
  {
    title: 'Legacy Responsive Web Design V8 Certification',
    provider: 'freeCodeCamp',
    date: 'August 2023',
    logo: '/assets/credentials/fcc.png',
    mark: 'fCC',
    href: 'https://www.freecodecamp.org/certification/karylebaylon/responsive-web-design',
  },
];

function ExperienceRoadmap() {
  const [expandedId, setExpandedId] = useState('sap-btp-intern');

  const toggleExperience = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      className="about-experience"
      data-navbar-theme="dark"
      aria-labelledby="about-experience-title"
    >
      <div className="container about-experience__container">
        <header className="about-experience__header">
          <div>
            <p className="about-kicker about-kicker--dark">04 / Experience</p>
            <h2 id="about-experience-title">A roadmap of where I’ve learned by doing.</h2>
          </div>
          <p>
            Professional, freelance, and organization work that shaped how I approach software,
            design, collaboration, and technical problem-solving.
          </p>
        </header>

        <div className="experience-roadmap">
          {experiences.map((experience) => {
            const isExpanded = expandedId === experience.id;
            const panelId = `${experience.id}-details`;

            return (
              <article
                className={`experience-roadmap__item${isExpanded ? ' is-expanded' : ''}`}
                key={experience.id}
              >
                <div className="experience-roadmap__year" aria-hidden="true">
                  {experience.year}
                </div>

                <div className="experience-roadmap__rail" aria-hidden="true">
                  <span className="experience-roadmap__node" />
                </div>

                <div className="experience-roadmap__content">
                  <button
                    type="button"
                    className="experience-roadmap__trigger"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggleExperience(experience.id)}
                  >
                    <div className="experience-roadmap__heading">
                      <span className="experience-roadmap__type">{experience.type}</span>
                      <h3>{experience.title}</h3>
                      <p>{experience.organization} · {experience.duration}</p>
                    </div>

                    <span className="experience-roadmap__toggle" aria-hidden="true">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  <p className="experience-roadmap__summary">{experience.summary}</p>

                  <div
                    className="experience-roadmap__details"
                    id={panelId}
                    hidden={!isExpanded}
                  >
                    <ul>
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="experience-roadmap__tech" aria-label="Relevant skills and technologies">
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CredentialVisual({ item }) {
  return (
    <div className="credential-row__visual" aria-hidden="true">
      <span className="credential-row__visual-fallback">{item.mark}</span>
      {item.logo && (
        <img
          src={item.logo}
          alt=""
          loading="lazy"
          onError={(event) => { event.currentTarget.style.display = 'none'; }}
        />
      )}
    </div>
  );
}

function Credentials() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <section
      className="about-credentials"
      data-navbar-theme="light"
      aria-labelledby="about-credentials-title"
    >
      <div className="container about-credentials__container">
        <header className="about-credentials__header">
          <div>
            <p className="about-kicker">05 / Credentials</p>
            <h2 id="about-credentials-title">Education, recognition, and continued learning.</h2>
          </div>

          <p>
            Academic foundations and verified milestones that support the work shown throughout the
            portfolio.
          </p>
        </header>

        <div className="credentials-tabs" role="tablist" aria-label="Credential categories">
          {credentialTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`credentials-tabs__button${activeTab === tab ? ' is-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Education' && (
          <div className="credentials-education" role="tabpanel">
            <div className="credentials-education__index">01</div>
            <div className="credentials-education__main">
              <div className="credentials-education__topline">
                <div>
                  <h3>{education.institution}</h3>
                  <p>{education.location}</p>
                </div>
                <span>{education.duration}</span>
              </div>

              <p className="credentials-education__degree">{education.degree}</p>

              <ul className="credentials-education__achievements">
                {education.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'Awards' && (
          <div className="credentials-list" role="tabpanel">
            {awards.map((award, index) => (
              <div className="credential-row" key={award.title}>
                <span className="credential-row__number">{String(index + 1).padStart(2, '0')}</span>
                <CredentialVisual item={award} />
                <div className="credential-row__content">
                  <h3>{award.title}</h3>
                  <p>{award.provider}</p>
                </div>
                <span className="credential-row__date">{award.date}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Certifications' && (
          <div className="credentials-list" role="tabpanel">
            {certifications.map((certification, index) => (
              <a
                className="credential-row credential-row--link"
                key={certification.title}
                href={certification.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="credential-row__number">{String(index + 1).padStart(2, '0')}</span>
                <CredentialVisual item={certification} />
                <div className="credential-row__content">
                  <h3>{certification.title}</h3>
                  <p>{certification.provider}</p>
                </div>
                <span className="credential-row__date">{certification.date}</span>
                <span className="credential-row__arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function AboutPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <>
      <section
        className="about-profile"
        data-navbar-theme="light"
        aria-labelledby="about-profile-title"
      >
        <div className="container about-profile__container">
          <div className="about-profile__intro">
            <p className="about-kicker">01 / About</p>

            <h1 id="about-profile-title">
              I’m Karyle — a software developer with a background in <span>data science</span> and
              a strong eye for <span>design</span>.
            </h1>

            <p className="about-profile__lede">
              I enjoy working where technology, data, and thoughtful interfaces meet. My work spans
              software development, data and machine learning, and product design—but the goal stays
              the same: build things that are useful, clear, and intentional.
            </p>
          </div>

          <aside className="about-profile__portrait" aria-label="Karyle Baylon">
            <div
              className={`about-card ${isFlipped ? 'is-flipped' : ''}`}
              onClick={handleCardClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick()}
              aria-label="Click or hover to toggle between graduation and memoji photo"
            >
              <div className="about-card__inner">
                <div className="about-card__face about-card__face--front">
                  <img src="/assets/grad-photo.jpg" alt="Karyle Baylon - Graduation" />
                </div>

                <div className="about-card__face about-card__face--back">
                  <img src="/assets/memoji.jpg" alt="Karyle Baylon - Memoji" />
                </div>
              </div>
            </div>
            <p>
              Software Developer · Data Science Graduate
              <span className="about-card__hint">✦ Tap to flip</span>
            </p>
          </aside>

          <dl className="about-profile__facts">
            <div>
              <dt>Based in</dt>
              <dd>Philippines</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>BS Computer Science · Data Science specialization</dd>
            </div>
            <div>
              <dt>University</dt>
              <dd>University of Santo Tomas</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Software Development · Frontend · Data & ML</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        className="about-specialties"
        data-navbar-theme="dark"
        aria-labelledby="about-specialties-title"
      >
        <div className="container about-specialties__container">
          <header className="about-section-heading">
            <p className="about-kicker about-kicker--dark">02 / Specialties</p>
            <h2 id="about-specialties-title">My Areas of Expertise</h2>
            <p>
              I approach software, data, and design as connected parts of the same product problem
              rather than separate professional identities.
            </p>
          </header>

          <div className="about-specialties__list">
            {specialties.map((specialty) => (
              <article className="about-specialty" key={specialty.number}>
                <span className="about-specialty__number">{specialty.number}</span>
                <div>
                  <h3>{specialty.title}</h3>
                  <p>{specialty.description}</p>
                </div>
                <p className="about-specialty__proof">{specialty.proof}</p>
                <span className="about-specialty__mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="about-technologies"
        data-navbar-theme="light"
        aria-labelledby="about-technologies-title"
      >
        <div className="container about-technologies__container">
          <header className="about-technologies__header">
            <div>
              <p className="about-kicker">03 / Tools I work with</p>
              <h2 id="about-technologies-title">Technologies, grouped by how I use them.</h2>
            </div>

            <p>
              A working toolkit rather than a logo wall—focused on technologies I can connect to
              actual projects, coursework, research, or professional experience.
            </p>
          </header>

          <div className="about-technologies__groups">
            {technologyGroups.map((group, index) => (
              <article className="about-tech-group" key={group.label}>
                <span className="about-tech-group__number">0{index + 1}</span>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperienceRoadmap />
      <Credentials />
    </>
  );
}
