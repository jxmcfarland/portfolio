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
    slug: 'portals-redesign',
    title: 'Canto: Portals Redesign',
    role: 'Design Leader & Hands-on Contributor',
    company: 'Canto',
    year: '2024',
    cardImage: '/images/canto-gallery-cropped.png',
    description: 'Led the UX evolution of Canto\'s Portals product through research, product strategy, and interaction design.',
    tags: ['UX Design', 'Product Strategy', 'Interaction Design'],
    sections: [
        {
        content: 'As a design leader and hands-on contributor, I helped drive Canto\'s UX evolution by leading the redesign of Portals, bringing together research, product strategy, and interaction design to deliver a more flexible and accessible customer experience.',
        },
        {
        title: 'Background',
        content: 'Canto\'s core value lies in helping customers store, organize, and share their digital assets, and Portals is the primary way they deliver curated collections to their end users. When I joined the company, Portals generally "worked," but long-standing UX issues and permissioning gaps were creating increasing frustration.',
        content2: 'Although customers could often work around limitations, the experience felt inconsistent, inflexible, and out of step with modern expectations. As negative sentiment grew, and some customers began citing lack of investment in Portals as a reason for churn, leadership aligned on the need for a comprehensive redesign.',
        },
        {
        title: 'Requirements',
        content: 'Partnering closely with Product Management, my team synthesized insights from user outreach, feature requests, and customer support patterns to define the requirements for a successful transformation of Portals.',
        content2: 'To move quickly and align cross-functionally, I co-facilitated a design sprint with the dedicated pod. Over the course of the week, we clarified problem areas, shaped solution concepts, and prioritized the improvements that would make the biggest impact. Our work surfaced several core themes:',
        numbered: [
            'Portal creation was complex and difficult to adapt to different use cases.',
            'Custom branding produced inconsistent results and created ongoing accessibility risks.',
            'Permissioning and sharing were too limited to support enterprise workflows.',
        ],
        },
        {
        title: 'Designs',
        content: 'We evolved the initial sprint wireframes into higher-fidelity concepts and validated them with multiple customers. The direction that resonated most strongly was then refined into a complete end-to-end flow, which we presented to stakeholders before moving into formal usability testing and iteration.',
        content2: 'Below are examples of key moments in the redesigned experience.',
        images: [
            { src: '/images/portals-select-assets.png', alt: 'Selecting assets from the main library to create a portal', caption: '1. Selecting assets from the main library to create a portal.' },
            { src: '/images/portals-setup.png', alt: 'Simpler portal setup and permission model with AI', caption: '2. A simpler, more intuitive portal setup and permission model, with AI helping identify assets that match the portal\'s goals.' },
            { src: '/images/portals-template.png', alt: 'AI assisted portal templating and branding', caption: '3. AI assisted portal templating and branding.' },
            { src: '/images/portals-published.png', alt: 'The newly created portal ready for publishing', caption: '4. The newly created portal, ready for publishing.' },
        ],
        },
    ],
    },
  {
    id: 2,
    slug: 'living-profile',
    title: 'Liaison International: Living Profile',
    role: 'Design Leader & Hands-on Contributor',
    company: 'Liaison International',
    year: '2021',
    cardImage: '/images/living-profile-card.png',
    description: 'Designed the Living Profile concept — a student-friendly experience capturing lifelong learning history for a new market expansion.',
    tags: ['UX Design', 'Concept Design', 'User Research'],
    sections: [
        {
        content: 'As a design leader and hands-on contributor, I helped shape Liaison\'s expansion into a new market by designing the Living Profile concept, an experience that captured a person\'s lifelong learning history through a modern, student-friendly UX.',
        },
        {
        title: 'Background',
        content: 'Liaison is a market leader in connecting students with higher-education institutions, streamlining the application process by allowing applicants to complete a core online application and adapt it for various graduate programs. During my time there, the company expanded its offerings through acquisitions, including platforms for medical students to log clinical hours and for art students to present digital portfolios.',
        content2: 'As part of this broader growth strategy, leadership wanted to explore a new product concept that would capture a person\'s lifelong academic and experiential learning. Their vision resembled a LinkedIn-style profile, but centered on educational achievements, internships, and developmental milestones.',
        },
        {
        title: 'Requirements',
        content: 'This initiative focused on early market-fit research. I partnered closely with the CEO and VP of Product to define a feature set and design a clear "happy path" for concept testing. The core requirements were:',
        numbered: [
            'Simplicity and familiarity by leveraging proven patterns from Liaison\'s Central Application System (CAS).',
            'A more vibrant and welcoming aesthetic than the neutral CAS interface to better connect with students.',
            'Expanded integrations and automation so that updates to a person\'s learning journey could be captured with minimal effort.',
        ],
        },
        {
        title: 'Designs',
        content: 'The initial design explorations blended familiar CAS functionality with interaction patterns inspired by best-in-class web applications. These early concepts were reviewed with internal stakeholders to identify what resonated and where to refine.',
        content2: 'After several iterations, I created a full end-to-end flow for user testing with both institutional clients and students. Below are two representative screens from the final exploration.',
        images: [
            { src: '/images/living-profile.png', alt: 'Living Profile main landing page', caption: '1. The main landing page, a central hub where users maintain their academic history and receive personalized recommendations (such as events, internships, and opportunities) generated dynamically based on their interests.' },
            { src: '/images/living-profile-template.png', alt: 'Living Profile resume builder', caption: '2. The resume builder, a tool that automatically generates a resume from the user\'s profile, which can then be edited and customized. A set of templates provides polished starting points for personalization.' },
        ],
        },
    ],
  },
  {
    id: 3,
    slug: 'letters-by-liaison',
    title: 'Liaison International: Letters by Liaison',
    role: 'Design Leader & Hands-on Contributor',
    company: 'Liaison International',
    year: '2021',
    cardImage: '/images/letters-committee-letter.png',
    description: 'Led the redesign of Liaison\'s recommendations experience, modernizing a critical workflow into a more efficient, accessible, and faculty-friendly solution.',
    tags: ['UX Design', 'Interaction Design', 'Accessibility'],
    sections: [
        {
        content: 'As a design leader and hands-on contributor, I led the redesign of Liaison\'s recommendations experience, modernizing a critical but cumbersome workflow into a more efficient, accessible, and faculty friendly solution rebranded as Letters by Liaison.',
        },
        {
        title: 'Background',
        content: 'Collecting letters of recommendation, approvals for clinical observation hours, and internship validations is a critical part of graduate program applications, particularly in medical and healthcare fields. When I joined Liaison, this functionality existed, but it was rigid and overly manual, placing unnecessary effort on both students and faculty for what should have been a largely automated process.',
        content2: 'Faculty members were often managing dozens of requests at a time with limited visibility or control, while students had little insight into the status of their submissions. This portion of the application experience became a consistent source of frustration for both groups, signaling a clear opportunity for redesign.',
        },
        {
        title: 'Requirements',
        content: 'This initiative was a full redesign of Liaison\'s recommendations feature and marked its reintroduction as Letters by Liaison. Partnering closely with Product Management and informed by interviews with dozens of students and faculty, we defined requirements that addressed the needs of a diverse and high volume user base.',
        content2: 'In addition to supporting existing functionality, the redesign focused on:',
        numbered: [
            'Clear access and request management for faculty, enabling them to efficiently review and complete submissions.',
            'Committee-based workflows, allowing multiple faculty members to contribute to a single recommendation in a structured, sequential manner.',
            'Consistent rating scales and interaction patterns, reducing ambiguity and cognitive load.',
            'Stronger integration with the student application, ensuring recommendation progress felt connected rather than siloed.',
        ],
        },
        {
        title: 'Designs',
        content: 'Letters by Liaison was the first initiative to fully leverage Liaison\'s updated design system. The visual language leaned toward a polished, professional aesthetic, appropriate for academic and administrative contexts, while prioritizing clarity, accessibility, and ease of completion.',
        content2: 'Below are examples of key form experiences faculty encounter as part of their program director responsibilities.',
        images: [
            { src: '/images/letters-committee-letter.png', alt: 'Committee level recommendation form', caption: '1. Committee level recommendation, providing faculty members the ability to invite additional contributors to participate in a recommendation. Requests are routed sequentially, with clear visibility into ownership and the ability for contributors to opt out when needed.' },
            { src: '/images/letters-evaluation-form.png', alt: 'Standard recommendation form', caption: '2. Standard recommendation form, an updated rating component improved accessibility compliance and introduced a clearly defined, consistent rating scale, creating a more predictable and equitable experience for faculty.' },
            { src: '/images/letters-observation-hours.png', alt: 'Observation hours approval form', caption: '3. Observation hours approval form, the information architecture was significantly refined. A two-column layout separates context from action, while a structured table presents observation hour details in a clear, scannable format.' },
        ],
        },
    ],
  },
  {
    id: 4,
    slug: 'virgin-pulse-step-challenges',
    title: 'Virgin Pulse: Joining Step Challenges',
    role: 'Design Leader & Hands-on Contributor',
    company: 'Virgin Pulse',
    year: '2019',
    cardImage: '/images/virgin-pulse-step-challenge.png',
    description: 'Reimagined how users join step challenges, transforming a rigid desktop-bound flow into a mobile-first, engaging, and inclusive experience.',
    tags: ['Mobile UX', 'Gamification', 'Interaction Design'],
    sections: [
        {
        content: 'As a design leader and hands-on contributor, I helped lead Virgin Pulse\'s platform redesign by reimagining how users join step challenges, transforming a rigid, desktop bound flow into a mobile first, engaging, and inclusive experience.',
        },
        {
        title: 'Background',
        content: 'Virgin Pulse is a corporate wellness and engagement platform designed to help organizations improve employee health through incentives, social motivation, and behavioral science. I joined the company at a pivotal moment, just as leadership was preparing for a major redesign and platform re-architecture.',
        content2: 'While the initial plan was to outsource the redesign, I worked with leadership to bring the effort in-house, reducing long-term cost, retaining intellectual property, and enabling the team to build a scalable foundation for future growth. One of the platform\'s most popular features was the team-based step challenge: a time-bound competition where teams accumulate daily steps toward a shared destination. In the legacy experience, these challenges lacked excitement, were optimized primarily for desktop use, and made team formation difficult, often leaving motivated users unable to participate.',
        },
        {
        title: 'Requirements',
        content: 'Virgin Pulse had one of the most engaged user communities I\'ve worked with, generating a steady stream of thoughtful feedback and feature ideas. Partnering closely with the lead Product Manager, we focused on making the redesigned experience as approachable, motivating, and habit forming as possible.',
        content2: 'Several core requirements emerged:',
        numbered: [
            'A mobile first experience, meeting users where the majority of engagement already occurred.',
            'Increased delight and motivation, using gamification to sustain participation throughout the challenge.',
            'Reduced friction for joining or forming teams, ensuring motivated users could participate quickly and easily.',
            'Support for Tiny Habits principles, reinforcing small, repeatable actions that encourage long-term behavior change.',
        ],
        },
        {
        title: 'Designs',
        content: 'Usage data showed that the majority of engagement occurred on mobile devices, which led us to redesign the Virgin Pulse platform as native iOS and Android applications. This shift required careful prioritization, limited screen real estate forced us to focus relentlessly on clarity, efficiency, and user motivation.',
        content2: 'For step challenges, this meant guiding users seamlessly toward finding or creating a team, while keeping the experience lightweight and engaging. We mapped and validated clear "happy path" workflows with users to ensure the most common scenarios felt effortless. Below are key moments from the redesigned joining experience, including team discovery, search, team detail views, and the join interaction, each designed to reduce friction while maintaining a sense of momentum and excitement.',
        images: [
            { src: '/images/virgin-pulse-join-workflows.jpg', alt: 'Happy path workflows for joining step challenge teams', caption: '1. Validated happy path workflows for joining or creating step challenge teams, designed to remove friction and help motivated users participate quickly.' },
            { src: '/images/virgin-pulse-step-challenge.png', alt: 'Primary challenge hub', caption: '2. The primary challenge hub, where all key areas are tappable, allowing users to explore team details and actions without navigating away.' },
            { src: '/images/virgin-pulse-find-team.png', alt: 'Find a team screen', caption: '3. Find a team screen, a lightweight discovery experience that helps users quickly browse available teams and identify the best fit.' },
            { src: '/images/virgin-pulse-search-team.png', alt: 'Search for a team interaction', caption: '4. Search for a team interaction, targeted search interactions designed to surface relevant teams quickly while minimizing effort and cognitive load.' },
            { src: '/images/virgin-pulse-team-landing.png', alt: 'Team landing screen', caption: '5. Team landing screen, a focused team view that provides clear context and a strong call to action to join.' },
            { src: '/images/virgin-pulse-join-team.png', alt: 'Join team modal interaction', caption: '6. Join team modal interaction, a simple confirmation step that makes joining a team quick and effortless.' },
        ],
        },
    ],
    },
]
