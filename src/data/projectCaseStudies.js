export const projectCaseStudies = {
  rosepine: {
    slug: 'rosepine',
    title: 'Rosepine Hotel',
    eyebrow: 'UI/UX Case Study',
    year: '2025',
    role: 'UI/UX Designer',
    disciplines: ['Website Redesign', 'Admin Dashboard', 'UI/UX'],
    tools: ['Figma'],
    heroImage: '/assets/projects/rosepine.png',
    summary:
      'A website and administrative dashboard concept for Rosepine Hotel, designed to strengthen the guest-facing experience while making internal hotel workflows clearer and easier to manage.',
    github: null,
    challenge: {
      title: 'One system, two very different users',
      text:
        'The project needed to support guests exploring the hotel as well as staff handling day-to-day operations, requiring a balance between a polished public experience and a practical internal dashboard.',
    },
    contributions: [
      {
        title: 'Guest-facing website',
        text:
          'Designed high-fidelity website interfaces focused on clear hotel information, intuitive navigation, and booking-oriented user journeys.',
      },
      {
        title: 'Administrative dashboard',
        text:
          'Created interfaces for bookings, room status, housekeeping, cleaning schedules, and related hotel operations.',
      },
      {
        title: 'Workflow translation',
        text:
          'Translated operational requirements into structured interface layouts intended to make recurring hotel-management tasks easier to understand.',
      },
      {
        title: 'Visual consistency',
        text:
          'Developed a cohesive visual language across guest-facing and administrative touchpoints.',
      },
    ],
    showcase: [
      {
        title: 'Guest experience',
        text:
          'A refined public-facing hotel experience centered on clear content hierarchy and booking-related interactions.',
        image: '/assets/projects/rosepine.png',
      },
      {
        title: 'Hotel operations',
        text:
          'An internal dashboard concept for managing bookings, rooms, cleaning, and housekeeping workflows.',
      },
    ],
    previewImages: [
      '/assets/projects/rosepine2.png',
    ],
  },

  smarts: {
    slug: 'smarts',
    title: 'SMARTS',
    eyebrow: 'Business Analysis · Frontend Development · Capstone',
    year: 'September 2024 - April 2025',
    role: 'Business Analyst & Front-end Developer',
    disciplines: [
      'Business Analysis',
      'Front-end Development',
      'Software Development'
    ],
    tools: [
      'Java',
      'Spring Boot',
      'SQL',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    heroImage: '/assets/projects/smarts.png',
    summary:
      'A capstone software platform designed to support and automate subcontracting workflows, project tracking, and inventory management, with role-based access for administrators, executive staff, and general contractors.',
    github: 'https://github.com/zhienelle/SMARTS',

    challenge: {
      title: 'Manual tracking of inventory and projects made subcontracting workflows fragmented and difficult to manage',
      text:
        'SMARTS was designed to replace manual tracking of inventory and project information with a more structured digital workflow while supporting different access levels for administrators, executive staff, and general contractors based on their responsibilities within the subcontracting process.',
    },

    contributions: [
      {
        title: 'Client and team communication',
        text:
          'Bridged communication between the client and development team by clarifying requirements and relaying stakeholder feedback.',
      },
      {
        title: 'Requirements analysis',
        text:
          'Analyzed stakeholder needs and translated them into functional and technical specifications for implementation.',
      },
      {
        title: 'Process and workflow documentation',
        text:
          'Created process flow diagrams that documented expected system behavior and supported testing and test-data preparation.',
      },
      {
        title: 'Frontend development',
        text:
          'Developed front-end interfaces based on documented business requirements and approved system workflows.',
      },
      {
        title: 'Frontend validation and testing',
        text:
          'Tested front-end interfaces against documented requirements before deployment.',
      },
    ],

    showcase: [
      {
        title: 'Centralized subcontracting workflow',
        text:
          'The platform brings related subcontracting activities into a more consistent software workflow.',
      },
      {
        title: 'Structured project information',
        text:
          'The system organizes information around the project lifecycle so users can work from a shared source of project data.',
      },
      {
        title: 'Inventory tracking',
        text:
          'The platform supports more structured inventory monitoring, reducing reliance on manual tracking and disconnected records.',
      },
      {
        title: 'Role-based access control (RBAC)',
        text:
          'Administrators, executive staff, and general contractors have different levels of access, allowing each user type to interact only with the information and functions relevant to their responsibilities.',
      },
    ],

    previewImages: [
      '/assets/projects/smarts2.png',
    ],
  },

  // dreamsnap: {
  //   slug: 'dreamsnap',
  //   title: 'DreamSnap',
  //   eyebrow: 'Hackathon · Product Design',
  //   year: '2025',
  //   role: 'Product / UI Contributor',
  //   disciplines: ['Hackathon', 'Product Design', 'UI/UX'],
  //   tools: ['Figma'],
  //   heroImage: '/assets/projects/dreamsnap.png',
  //   summary:
  //     'A collaborative hackathon project developed under time constraints, with an emphasis on turning a product idea into a clear and usable interface experience.',
  //   github: null,
  //   challenge: {
  //     title: 'Move from idea to usable product direction quickly',
  //     text:
  //       'The project required the team to make product and interface decisions within a compressed hackathon timeline while keeping the experience understandable and visually coherent.',
  //   },
  //   contributions: [
  //     {
  //       title: 'Rapid product thinking',
  //       text:
  //         'Helped shape the product experience by turning requirements and ideas into a clearer user-facing flow.',
  //     },
  //     {
  //       title: 'Interface design',
  //       text:
  //         'Contributed UI/UX decisions and high-fidelity interface work within the limited hackathon schedule.',
  //     },
  //     {
  //       title: 'Collaborative iteration',
  //       text:
  //         'Worked with teammates to refine the concept quickly as the project evolved during the event.',
  //     },
  //   ],
  //   showcase: [
  //     {
  //       title: 'Product concept',
  //       text:
  //         'The interface translates the hackathon concept into a more concrete product experience that users can understand at a glance.',
  //       image: '/assets/projects/dreamsnap.png',
  //     },
  //   ],
  //   previewImages: ['/assets/projects/dreamsnap.png'],
  // },

  // 'mechabots-japan-truck-tradings': {
  //   slug: 'mechabots-japan-truck-tradings',
  //   title: 'Mechabots Japan Truck Tradings',
  //   eyebrow: 'Frontend Development · Inventory Experience',
  //   year: '2026',
  //   role: 'Frontend Developer',
  //   disciplines: ['Frontend Development', 'Responsive Web Design', 'Inventory UX'],
  //   tools: [
  //     'Frontend Development',
  //     'Responsive UI',
  //     'Multi-Attribute Filtering',
  //     'Admin Dashboard',
  //   ],
  //   heroImage: '/assets/projects/mechabots.png',
  //   summary:
  //     'A responsive inventory catalog and admin experience for a Japan-surplus trucks and heavy-equipment trading business, designed to make inventory easier to browse for customers and easier to maintain for stakeholders.',
  //   liveUrl: 'https://mechabots.truckstrading.workers.dev/',
  //   challenge: {
  //     title: 'Improve inventory discovery and reduce manual update dependency',
  //     text:
  //       'The business needed a clearer way for customers to browse trucks, heavy equipment, and related inventory while giving stakeholders a more direct and reliable way to maintain inventory information.',
  //   },
  //   contributions: [
  //     {
  //       title: 'Responsive front-end development',
  //       text:
  //         'Co-developed the customer-facing inventory experience and translated business requirements into a responsive interface across desktop and smaller screens.',
  //     },
  //     {
  //       title: 'Multi-attribute filtering',
  //       text:
  //         'Helped build filtering and search interactions that allow users to narrow inventory by multiple attributes such as category, maker, model, brand, and descriptive information.',
  //     },
  //     {
  //       title: 'Custom admin dashboard',
  //       text:
  //         'Co-developed an administrative interface for maintaining inventory data, reducing manual update dependency and helping improve data accuracy for stakeholders.',
  //     },
  //   ],
  //   showcase: [
  //     {
  //       title: 'Inventory catalog',
  //       text:
  //         'Organized trucks, heavy equipment, parts, and related machinery into a structured and browsable catalog.',
  //     },
  //     {
  //       title: 'Search and filtering',
  //       text:
  //         'Multi-attribute filtering helps users narrow inventory instead of manually scanning the full catalog.',
  //     },
  //     {
  //       title: 'Inventory administration',
  //       text:
  //         'A custom admin dashboard supports more direct inventory maintenance and a more reliable information flow for stakeholders.',
  //     },
  //   ],
  //   previewImages: [
  //     '/assets/projects/mechabots2.png',
  //   ],
  // },

  'panic-attack-detection': {
    slug: 'panic-attack-detection',
    title: 'Panic Attack Detection',
    eyebrow: 'Machine Learning · Research',
    year: '2026',
    role: 'Data Science Researcher',
    disciplines: ['Machine Learning', 'Research', 'Explainable AI'],
    tools: [
      'Python',
      'pandas',
      'NumPy',
      'scikit-learn',
      'TensorFlow',
      'SHAP',
      'LIME',
    ],
    heroImage: '/assets/projects/thesis.png',
    summary:
      'A data-science thesis comparing standalone and hybrid machine-learning approaches for panic-disorder prediction and severity classification, with explainability methods used to support model interpretation.',
    github: 'https://github.com/zhienelle/Panic-Attack-Detection-and-Severity-Classification-Using-a-Hybrid-ANN-RF-Model-with-XAI',
    challenge: {
      title: 'Compare predictive approaches without treating model performance as a black box',
      text:
        'The research explored standalone and hybrid modeling approaches while also considering how model behavior could be interpreted through explainable-AI techniques.',
    },
    contributions: [
      {
        title: 'Data preparation and modeling',
        text:
          'Worked with the research dataset and implemented machine-learning workflows for prediction and severity-classification tasks.',
      },
      {
        title: 'Standalone and hybrid comparison',
        text:
          'Compared different modeling approaches, including standalone and hybrid configurations, as part of the research methodology.',
      },
      {
        title: 'Explainable AI',
        text:
          'Used SHAP and LIME to examine model behavior and support interpretation beyond prediction outputs alone.',
      },
    ],
    showcase: [
      {
        title: 'Model comparison',
        text:
          'The study compares standalone and hybrid approaches as part of the thesis methodology. Verified performance values should be shown only when sourced directly from the thesis.',
        image: '/assets/projects/thesis.png',
      },
      {
        title: 'Explainability',
        text:
          'SHAP and LIME were used to support interpretation of the machine-learning models and their prediction behavior.',
      },
    ],
    previewImages: [
      '/assets/projects/thesis2.jpg',
    ],
  },

  'ust-technovation-society': {
    slug: 'ust-technovation-society',
    title: 'UST Technovation Society',
    eyebrow: 'UI/UX · Organization Website',
    year: '2025–2026',
    role: 'Visual Design Department Staff',
    disciplines: ['UI/UX', 'Web Design', 'Organization'],
    tools: ['Figma'],
    heroImage: '/assets/projects/techsoc.png',
    summary:
      'High-fidelity UI/UX work for the official UST Technovation Society website, focused on intuitive navigation, information hierarchy, accessibility, and alignment with the organization’s visual identity.',
    github: null,
    challenge: {
      title: 'Turn organization content into a cohesive and accessible website experience',
      text:
        'The website needed to communicate society information clearly while maintaining a visual system consistent with the organization’s branding and responsive-design goals.',
    },
    contributions: [
      {
        title: 'High-fidelity UI/UX',
        text:
          'Designed website interfaces with emphasis on intuitive navigation, clear information hierarchy, and cohesive visual presentation.',
      },
      {
        title: 'Visual system alignment',
        text:
          'Worked with the Visual Design Division to refine layouts and components in line with the society’s branding.',
      },
      {
        title: 'Responsive design thinking',
        text:
          'Considered how page structures and visual components should adapt across screen sizes as part of the design process.',
      },
      {
        title: 'Collaborative design',
        text:
          'Contributed as part of the organization’s Visual Design Department and coordinated design decisions with the wider team.',
      },
    ],
    showcase: [
      {
        title: 'Organization website',
        text:
          'The interface organizes society content into a clearer visual hierarchy while maintaining a cohesive organization identity.',
        image: '/assets/projects/techsoc.png',
      },
    ],
    previewImages: ['/assets/projects/techsoc2.png'],
  },

  'foto-clique': {
    slug: 'foto-clique',
    title: 'Foto Clique Rental Photobooth Studios',
    eyebrow: 'Brand Design · Marketing Collateral',
    year: '2025',
    role: 'Freelance Graphic Designer',
    disciplines: ['Brand Design', 'Visual Design', 'Marketing Collateral'],
    tools: [
      'Canva',
    ],
    heroImage: '/assets/projects/clique.png',
    summary:
      'A freelance visual-design project focused on strengthening Foto Clique’s brand consistency across customer-facing, promotional, and operational materials for its photobooth rental services.',
    challenge: {
      title: 'Create a more cohesive visual identity across customer touchpoints',
      text:
        'Foto Clique needed a more consistent visual presence across promotional materials, customer-facing assets, and branded photobooth outputs.',
    },
    contributions: [
      {
        title: 'Logo refinement',
        text:
          'Refined the existing Foto Clique logo to strengthen its visual presentation and improve consistency across different applications.',
      },
      {
        title: 'Marketing collateral',
        text:
          'Designed business cards and social media content aligned with the brand’s visual direction using Canva.',
      },
      {
        title: 'Branded photo-frame overlays',
        text:
          'Created custom branded photo-frame overlays for use in photobooth outputs, extending the brand experience into the final customer product.',
      },
    ],
    showcase: [
      {
        title: 'Business cards',
        text:
          'Created branded contact and promotional collateral for client-facing use.',
      },
      {
        title: 'Social media content',
        text:
          'Designed promotional social media assets to support the studio’s marketing and visual consistency.',
      },
      {
        title: 'Photo-frame overlays',
        text:
          'Created custom branded frame layouts used in the photobooth experience and final customer outputs.',
      },
    ],
    previewImages: [
      '/assets/projects/clique2.png',
    ],
  },
};

export const projectIndexFallback = {};
