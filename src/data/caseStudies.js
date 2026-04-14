export const caseStudies = [
  {
    id: 1,
    slug: 'rebuilding-canto-design',
    label: 'Case Study 01',
    title: 'Rebuilding Canto Design from the Ground Up',
    summary: 'Transformed an outsourced design function into a trusted in-house UX team — rebuilding the core platform, launching a design system, and repositioning design as a strategic partner.',
    tags: ['Design Leadership', 'Design Systems', 'Platform Redesign', 'Accessibility'],
    role: 'Senior Director, User Experience',
    company: 'Canto',
    year: '2022-2024',
    heroImage: '/images/canto-hero.png',
    cardImage: '/images/canto-hero.png',
    sections: [
      {
        title: 'Context & Challenge',
        subsections: [
          {
            heading: 'About Canto',
            content: 'Canto is an enterprise SaaS platform for digital asset management (DAM), helping global teams organize, manage, and share digital content at scale.',
          },
          {
            heading: 'What I Inherited',
            bullets: [
              'Design was fully outsourced, with no internal UX team or design leadership',
              'Product decisions were externally owned and heavily influenced by legacy on-premises functionality',
              'The team was locked into outdated UX patterns to maintain feature parity, limiting innovation and scalability',
              'Cross-functional trust in design had eroded due to misalignment, lack of accountability, and design debt',
              'The experience, often described as dated and confusing, highlighted the need for a comprehensive redesign',
            ],
            quotes: [
              'Clunky interface, ugly and cumbersome UI. People in the office who don\'t use it regularly always have a hard time navigating it.',
              'Difficult to use/navigate based on setup. Not intuitive enough.',
            ],
          },
          {
            heading: 'The Ask',
            bullets: [
              'Reclaim design ownership and intellectual property from the third-party vendor',
              'Build and scale an in-house UX team from scratch',
              'Establish best practices around research, design systems, and accessibility',
              'Lead the end-to-end redesign of the core platform to modernize the user experience',
              'Rebuild cross-functional partnerships and reestablish design as a strategic partner',
            ],
          },
        ],
      },
      {
        title: 'Org & Process Evolution',
        subsections: [
            {
            heading: 'Built an In-House UX Team',
            showOrgChart: true,
            bullets: [
                'Formed a multidisciplinary, global team of 5 product designers and 1 UX researcher',
                'Scaled the team through direct hires, acquisitions, and internal transitions',
                'Established rituals for alignment, sharing research insights, and acting on user feedback',
                'Defined clear roles and collaboration models across Product and Engineering',
            ],
            },
            {
            heading: 'Reclaimed Design Ownership',
            bullets: [
                'Migrated design assets and systems from third-party vendor to internal control',
                'Introduced a structured UX process — from discovery to delivery',
                'Embedded accessibility (WCAG 2.1 AA) and inclusive design into team standards',
            ],
            },
            {
            heading: 'Rebuilt Trust Across the Delivery Organization',
            bullets: [
                'Partnered with Product and Engineering leadership to align on vision and roadmap',
                'Positioned UX as a strategic partner through proactive communication and visibility',
                'Initiated regular alignment meetings, research readouts, and usability loops',
            ],
            },
        ],
        },
      {
        title: 'UX Redesign & System Growth',
        subsections: [
           {
            heading: 'Redesigned the Core Platform',
            bullets: [
                'Led the successful redesign of Canto\'s asset library, the core of the DAM experience',
                'Established the company\'s first design system to enable consistency and scalability',
                'Modernized the UI and workflows, with ongoing improvements to upload, metadata, search, and sharing based on user feedback',
            ],
            images: [
                { src: '/images/cosmo-ds.png', alt: 'Cosmo design system — button component in light and dark mode' },
                { src: '/images/canto-gallery.png', alt: 'Canto redesigned asset library gallery view' },
            ],
            },
            {
            heading: 'Elevated UX Maturity',
            bullets: [
                'Positioned design as a critical driver of product direction',
                'Embedded UX in product planning, roadmap prioritization, and OKR alignment',
            ],
            },
        ],
        },
      {
        title: 'Outcomes & Impact',
        content: 'Design shifted from outsourced execution to a trusted strategic partner embedded in roadmap planning, OKR alignment, and discovery ceremonies. The team was built and retained through direct hiring, acquisition integration, and internal mobility. Kickoff, discovery, and validation ceremonies became standard for all projects.',
        metrics: [
          { value: '70%', label: 'Reduction in poor UX feedback since redesign began' },
          { value: '75%', label: 'Reduction in merge request approval time' },
          { value: '40%', label: 'Reduction in design cycle time' },
        ],
      },
      {
        title: 'Reflections & What\'s Next',
        content: 'Elevated design from a service function to a strategic pillar of product development. Learned how to scale design influence through systems, partnerships, and thoughtful change management. Reaffirmed that sustainable UX transformation depends on strong cross-functional collaboration and trust. Next: continuing the full-platform redesign, expanding design system coverage, and exploring AI-driven solutions to reduce friction in metadata organization and Portals workflows.',
      },
    ],
  },
  {
    id: 2,
    slug: 'case-study-02',
    label: 'Case Study 02',
    title: 'Project Title Here',
    summary: 'A brief one or two sentence summary shown on the card.',
    tags: ['Enterprise UX', 'Design Ops', 'Team Leadership'],
    role: 'Your Role',
    company: 'Company Name',
    year: '2023',
    sections: [
      { title: 'The Problem', content: 'Describe the problem you were hired to solve.' },
      { title: 'The Approach', content: 'Describe your process, methods, and key decisions.' },
      { title: 'The Outcome', content: 'Describe the results, metrics, or impact.' },
    ],
  },
]

export const workExamples = [
  {
    id: 1,
    title: 'Work Example Title',
    role: 'Your Role',
    description: 'A brief description of this piece of work.',
    tags: ['Tag 1', 'Tag 2'],
  },
  {
    id: 2,
    title: 'Work Example Title',
    role: 'Your Role',
    description: 'A brief description of this piece of work.',
    tags: ['Tag 1', 'Tag 2'],
  },
  {
    id: 3,
    title: 'Work Example Title',
    role: 'Your Role',
    description: 'A brief description of this piece of work.',
    tags: ['Tag 1', 'Tag 2'],
  },
  {
    id: 4,
    title: 'Work Example Title',
    role: 'Your Role',
    description: 'A brief description of this piece of work.',
    tags: ['Tag 1', 'Tag 2'],
  },
]
