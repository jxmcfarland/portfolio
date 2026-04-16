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
        subsections: [
            {
            heading: 'Organizational Shift',
            fullWidth: true,
            bullets: [
                'Transformed design from outsourced execution to a trusted in-house strategic partner',
                'Embedded UX into roadmap planning, research, and decision-making',
                'Made kickoff, discovery, and validation ceremonies standard for all projects',
            ],
            },
            {
            heading: 'Team and Process Maturity',
            bullets: [
                'Built and retained a UX team through direct hiring, acquisition integration, and internal mobility',
                'Launched Canto\'s first design system, adopted by both Design and Engineering',
                'Reduced merge request approval time by 75% through tighter collaboration and design definition',
            ],
            },
            {
            heading: 'Product and User Impact',
            bullets: [
                'Simplified the asset library\'s interface and information architecture to improve core workflows and overall usability',
                'Reduced poor UX feedback by 70% since the redesign began',
                'Simplified upload, metadata, search, and sharing based on ongoing feedback',
            ],
            },
        ],
        metrics: [
            { value: '70%', label: 'Reduction in negative UX feedback since redesign began', trend: 'down' },
            { value: '75%', label: 'Reduction in merge request approval time', trend: 'down' },
            { value: '40%', label: 'Increase in design system adoption by Engineering', trend: 'up' },
        ],
        },
      {
        title: "Reflections & What's Next",
        hasLayout: true,
        subsections: [
            {
            heading: 'What Was Achieved',
            fullWidth: true,
            bullets: [
                'Elevated design from a service function to a strategic pillar of product development',
                'Learned how to scale design influence through systems, partnerships, and thoughtful change management',
                'Reaffirmed that sustainable UX transformation depends on strong cross-functional collaboration and trust',
            ],
            },
            {
            heading: "What's Next",
            bullets: [
                'Continuing the full-platform redesign and expanding design system coverage',
                'Exploring AI-driven solutions to reduce friction in metadata organization and Portals (customized asset sharing sites) workflows',
                'Researching AI tooling to evolve design ops beyond traditional process improvements',
            ],
            whatsNext: [
                {
                    icon: 'metadata',
                    title: 'AI for Metadata Organization',
                    desc: 'Auto-tagging and smart categorization of assets',
                    timeline: 'Beta: Q4 2025',
                },
                {
                    icon: 'portals',
                    title: 'AI Portals Creation',
                    desc: 'Personalized content hubs powered by AI',
                    timeline: 'Beta: Q2 2026',
                },
                {
                    icon: 'ops',
                    title: 'Design Ops Enhancements',
                    desc: 'AI-assisted tooling, streamlined Figma library contributions, and smarter engineering task assignment for the design system',
                    timeline: 'Proposals Due: End of Q3 2025',
                },
                ],
            },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'building-cosmo-design-system',
    label: 'Case Study 02',
    title: 'Building Cosmo, Canto\'s Design System',
    summary: 'Built Canto\'s first design system from the ground up — establishing shared standards, improving delivery velocity, and scaling design quality across a growing SaaS platform.',
    tags: ['Design Systems', 'Design Leadership', 'Platform Redesign', 'Accessibility'],
    role: 'Senior Director, User Experience',
    company: 'Canto',
    year: '2023-2025',
    heroImage: '/images/cosmo-hero.png',
    cardImage: '/images/cosmo-hero.png',
    sections: [
        {
        title: 'Context & Challenge',
        subsections: [
            {
            heading: 'About Canto',
            content: 'Canto is a leading Digital Asset Management (DAM) platform. When I joined, the design organization was fully outsourced, resulting in inconsistent design quality, slower delivery cycles, and growing user dissatisfaction with the product experience.',
            },
            {
            heading: 'What I Inherited',
            bullets: [
                'Fragmented standards and crude sharing methods, with no processes to enforce reuse or quality',
                'Inconsistent components, color usage, and overall design quality',
                'Slow and error-prone design-to-development handoffs, merge requests often stalled due to rework',
                'UX strategy misaligned with user expectations — customers reported dissatisfaction with UI performance and usability',
                'An understaffed, outsourced design team bound to third-party processes',
            ],
            images: [
                { src: '/images/canto-gallery-v2.png', alt: 'Canto asset library — legacy gallery view before redesign' },
                { src: '/images/canto-settings.png', alt: 'Canto settings page — legacy UI before redesign' },
            ],
            },
            {
            heading: 'The Ask',
            content: 'There was no formal request to build a design system. I initiated this work to improve design consistency, velocity, and credibility of the UX team. The early success of the grassroots effort eventually secured leadership investment to establish Cosmo as a core part of Canto\'s platform strategy.',
            },
        ],
        },
        {
        title: 'Transformation',
        subsections: [
            {
            heading: 'Built an In-House UX Team',
            content: 'I began transforming the organization by hiring Canto’s first in-house designer. Together, we established the first iteration of a lightweight design system in Figma to bring structure and consistency to design work.',
            },
            {
            heading: 'Reclaimed Design Ownership',
            content: 'What started as a self-guided side project became the foundation for standardization. By introducing accessibility-compliant colors and a small but growing component library, we reduced inconsistencies and demonstrated the value of shared standards.',
            stackImages: true,
            images: [
                { src: '/images/cosmo-palette.png', alt: 'Cosmo design system — global color palette tokens' },
            ],
            },
            {
            heading: 'Established Trust Across the Delivery Organization',
            content: 'As the system matured, design-related merge request approval times dropped from days to hours. Demonstrated measurable improvement rebuilt trust with engineering and product stakeholders and created momentum for greater investment.',
            },
        ],
        },
        {
        title: 'DAM Redesign & Design System Growth',
        subsections: [
            {
            heading: 'Built Cosmo Alongside Platform Redesign',
            stackImages: true,
            content: 'When Canto\'s v2 platform redesign was initiated, I secured leadership buy-in to create a true design system in parallel. This became Cosmo, our second-generation design system.',
            content2: 'Canto introduced a scalable Figma framework with atomic libraries — atoms, molecules, organisms, pages and design tokens implemented as a centralized Figma variables file. We also defined a new Storybook repo to synchronize engineering components and phase out the legacy repo.',
            images: [
            { src: '/images/cosmo-button-docs.png', alt: 'Cosmo design system — button component documentation' },
            { src: '/images/cosmo-variables.png', alt: 'Cosmo design system — Figma variables and design tokens' },
            ],
            },
            {
            heading: 'Defined System Governance',
            content: 'I authored a UX Definition of Done, embedding accessibility, quality standards, and handoff requirements into the delivery culture for the first time. The team also defined a hybrid contribution model through research, collaboration, and prior design system experience — balancing centralized oversight with distributed participation across pods.',
            },
        ],
        },
        {
        title: 'Outcomes & Impact',
        hasLayout: true,
        subsections: [
            {
            heading: 'Organizational Shift',
            fullWidth: true,
            orgMetrics: [
                { value: '100%', label: 'UX team adopted and contributes to Cosmo', trend: 'up' },
                { value: '25%', label: 'Development pods actively contributing components', trend: 'up' },
            ],
            },
            {
            heading: 'Process Maturity',
            fullWidth: true,
            bullets: [
                'Merge request approval times reduced from days and hours to under 60 minutes',
                'Storybook fully integrated into the product culture for the first time',
                'Clearer prioritization and assignment processes established, though still evolving as the system scales',
                'Reduced design debt accelerated the pace of delivery',
            ],
            },
            {
            heading: 'UX Impact',
            fullWidth: true,
            bullets: [
                'Unified and modernized visual design language addressed user feedback that the interface looked dated and unappealing',
                'Systemized components improved product consistency and usability',
                'Users experienced a more coherent and accessible platform interface',
            ],
            imageQuote: {
                image: { src: '/images/canto-portals.png', alt: 'Canto redesigned Portals view' },
                quote: 'This is much slicker, a big improvement. Really like this. Very clean and simple and the left navigation is easy to understand at a glance. — Beta User, North America',
            },
            },
        ],
        },
        {
        title: "Reflections & What's Next",
        subsections: [
            {
            heading: 'What Was Achieved',
            fullWidth: true,
            bullets: [
                'Proving value through a grassroots effort was critical to securing investment',
                'Embedding accessibility into the Definition of Done created lasting cultural change',
                'A hybrid contribution model is key to scaling adoption without sacrificing quality',
            ],
            },
            {
            heading: "What's Next",
            fullWidth: true,
            showAITools: true,
            bullets: [
                'Expand development team participation beyond 25%',
                'Increase coverage of systemized components in Storybook',
                'Explore AI-driven contributions and automation to accelerate design system growth',
            ],
            },
        ],
        },
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
