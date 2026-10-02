export type ProjectCompany = 'Thinkwik' | 'ViitorCloud' | 'SimplyFI';

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  company: ProjectCompany;
  /** Higher = newer. Sort descending for display. */
  order: number;
  highlight?: boolean;
  metrics?: { label: string; value: string }[];
  features?: ProjectFeature[];
  links?: ProjectLink[];
};

export const PROJECT_COMPANIES: ProjectCompany[] = ['Thinkwik', 'ViitorCloud', 'SimplyFI'];

export const projects: Project[] = [
  {
    id: 'franchise-listings',
    title: 'Franchise Listings',
    subtitle: 'Franchise Marketplace · Enterprise SaaS',
    period: 'Apr 2026 – Sept 2026',
    role: 'Technical Lead · Project Manager · Team of 8',
    description:
      'FranchiseListings.com is an enterprise SaaS platform connecting franchisors, franchise buyers, and franchise professionals — discovery, directories, lead management, communications, and identity verification in one ecosystem. Led end-to-end delivery spanning architecture, sprints, stakeholders, and scalable API design.',
    tags: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'MongoDB', 'AWS', 'Stripe', 'Twilio', 'Veriff'],
    company: 'Thinkwik',
    order: 13,
    highlight: true,
    metrics: [
      { label: 'Team Size', value: '8 Members' },
      { label: 'Role', value: 'Tech Lead + PM' },
    ],
    features: [
      {
        title: 'Lead Management',
        description: 'End-to-end lead capture, routing, and conversion tracking for franchisors.',
      },
      {
        title: 'Identity Verification',
        description: 'Veriff integration for secure buyer and seller onboarding workflows.',
      },
      {
        title: 'Communications Hub',
        description: 'Twilio-powered SMS and voice for real-time lead engagement.',
      },
    ],
  },
  {
    id: 'elixia',
    title: 'Elixia',
    subtitle: 'Oil & Gas · Logistics & Supply Chain · Shell Petroleum',
    period: 'Dec 2025 – Mar 2026',
    role: 'Senior Software Engineer · Backend Lead · Team of 3',
    description:
      'Logistics and operations platform for Shell streamlining petroleum transportation — automated order generation, shipment scheduling, inventory validation, and sales analytics across administrators, transporters, consignors, and consignees. Led backend design, sprints, and demos for Shell’s international teams.',
    tags: ['Node.js', 'NestJS', 'MySQL', 'MongoDB', 'Microservices'],
    company: 'Thinkwik',
    order: 12,
    metrics: [
      { label: 'Team Size', value: '3 Members' },
      { label: 'Role', value: 'Backend Lead' },
    ],
  },
  {
    id: 'itadly',
    title: 'ITADly',
    subtitle: 'Enterprise SaaS · IT Asset Disposition',
    period: 'Jun 2025 – Nov 2025',
    role: 'Technical Lead · Project Manager · Team of 8',
    description:
      'Enterprise SaaS for secure IT asset lifecycle management — inventory, data sanitisation, hardware disposition, compliance reporting, document management, and end-to-end traceability. Owned solution architecture, tech selection, delivery, and scalable cloud/backend design.',
    tags: ['Python', 'FastAPI', 'React.js', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'AWS', 'Pandas'],
    company: 'Thinkwik',
    order: 11,
    highlight: true,
    metrics: [
      { label: 'Team Size', value: '8 Members' },
      { label: 'Role', value: 'Tech Lead + PM' },
    ],
    features: [
      {
        title: 'Asset Lifecycle',
        description: 'Inventory through disposition with full chain-of-custody and compliance reporting.',
      },
      {
        title: 'Data Sanitisation',
        description: 'Secure wipe and verification workflows for enterprise IT asset retirement.',
      },
      {
        title: 'Cloud Architecture',
        description: 'Python/FastAPI backend with React frontend on AWS for scalable SaaS delivery.',
      },
    ],
  },
  {
    id: 'loot',
    title: 'Loot',
    subtitle: 'FinTech · Digital Lending',
    period: 'Feb 2025 – May 2025',
    role: 'Senior Backend Developer',
    description:
      'Working-capital and revolving credit platform for small businesses — origination, underwriting, repayment, and secure financial operations. Led Early Payoff, payment workflows, audit logging, and APIs with underwriting and ops teams.',
    tags: ['Node.js', 'Express.js', 'React.js', 'Next.js', 'MongoDB', 'PostgreSQL', 'AWS', 'SendGrid'],
    company: 'Thinkwik',
    order: 10,
    metrics: [
      { label: 'API Load', value: '5M / mo' },
      { label: 'Role', value: 'Sr Backend' },
    ],
  },
  {
    id: 'fixigo',
    title: 'FixiGo',
    subtitle: 'Automotive · On-Demand Services',
    period: 'Jun 2024 – Oct 2024',
    role: 'Senior Software Engineer · Backend Lead · Team of 3',
    description:
      'On-demand vehicle maintenance, repair, and cleaning platform connecting owners with certified technicians. Led backend architecture, API design, code reviews, and client discussions for reliable service workflows.',
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'AWS', 'Twilio', 'Microservices'],
    company: 'ViitorCloud',
    order: 9,
  },
  {
    id: 'dshm',
    title: 'Digital Sikh History Museum (SHM)',
    subtitle: 'Art & Culture · Digital Museum',
    period: 'Nov 2023 – May 2024',
    role: 'Technical Lead · Backend · Team of 6',
    description:
      'Digital museum platform for Sikh history, artefacts, and interactive exhibitions with a full CMS for administrators. Led API development, system design, code reviews, and cloud performance optimisation.',
    tags: ['Node.js', 'NestJS', 'Angular', 'Ionic', 'MongoDB', 'AWS', 'Stripe', 'ImageKit'],
    company: 'ViitorCloud',
    order: 8,
  },
  {
    id: 'jnpt-digital-twin',
    title: 'JNPT Digital Twin',
    subtitle: 'Maritime · Logistics · Digital Twin',
    period: 'Aug 2023 – Oct 2023',
    role: 'Technical Lead · Senior Software Engineer',
    description:
      'Proof-of-concept digital twin for Jawaharlal Nehru Port Authority — real-time Internal Transfer Vehicle tracking with 3D visualisation. Led backend architecture and MQTT telemetry from field devices into the Unity model.',
    tags: ['Node.js', 'Express.js', 'Unity 3D', 'MongoDB', 'MQTT', 'PowerShell'],
    company: 'ViitorCloud',
    order: 7,
  },
  {
    id: 'calenso',
    title: 'Calenso',
    subtitle: 'SaaS · Scheduling & Collaboration',
    period: 'Nov 2022 – July 2023',
    role: 'Senior Software Engineer · Backend Lead · Team of 5',
    description:
      'Enterprise appointment scheduling with reminders, video consults, and GDPR-compliant calendar sync. Built custom auth/RBAC (replacing Auth0), migrated messaging to BullMQ/Redis, and integrated Azure AD + LDAP SSO.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'BullMQ', 'Redis', 'Azure AD', 'LDAP'],
    company: 'ViitorCloud',
    order: 6,
  },
  {
    id: 'cargoes-flow',
    title: 'Cargoes Flow',
    subtitle: 'Logistics & Supply Chain · DP World',
    period: 'Apr 2022 – Oct 2022',
    role: 'Backend Developer · Team of 20',
    description:
      'Global logistics visibility platform for DP World — multimodal shipment tracking, documentation, exception management, and performance analytics. Built scalable REST APIs and resolved production issues across enterprise workflows.',
    tags: ['Node.js', 'Express.js', 'Angular', 'PostgreSQL', 'Azure DevOps', 'Microservices'],
    company: 'ViitorCloud',
    order: 5,
  },
  {
    id: 'dp-world-connect',
    title: 'DP World Connect',
    subtitle: 'Enterprise SaaS · Employee Networking',
    period: 'Feb 2022 – Mar 2022',
    role: 'Backend Developer',
    description:
      'Employee networking and digital identity platform for DP World — digital business cards, profiles, and contact exchange with Microsoft Dynamics CRM. Built REST APIs and collaborated with web and mobile teams on secure enterprise features.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'AWS', 'Dynamics CRM', 'Stripe'],
    company: 'ViitorCloud',
    order: 4,
  },
  {
    id: 'gurubantu',
    title: 'Gurubantu',
    subtitle: 'Professional Services · Consulting Marketplace',
    period: 'Jun 2021 – Jan 2022',
    role: 'Backend Developer',
    description:
      'Online consulting marketplace connecting clients with domain experts for hourly and project work. Designed REST APIs and workflows for consultant onboarding, bookings, and project collaboration.',
    tags: ['Node.js', 'Express.js', 'Angular', 'MongoDB', 'AWS'],
    company: 'SimplyFI',
    order: 3,
  },
  {
    id: 'tulipfin',
    title: 'Tulipfin',
    subtitle: 'FinTech · Supply Chain Finance',
    period: 'Jan 2021 – May 2021',
    role: 'Backend Developer',
    description:
      'Supply chain finance platform helping anchors, suppliers, and institutions optimise working capital through invoice financing. Built backend services and REST APIs for secure, scalable financial workflows.',
    tags: ['Node.js', 'Express.js', 'Angular', 'MongoDB', 'AWS'],
    company: 'SimplyFI',
    order: 2,
  },
  {
    id: 'tulipfee',
    title: 'Tulipfee',
    subtitle: 'FinTech · Education Finance',
    period: 'June 2020 – Dec 2020',
    role: 'Backend Developer',
    description:
      'Education financing platform enabling school fee payments via flexible EMIs — applications, approvals, repayments, and payment processing. Built REST APIs for loan management, onboarding, and repayments.',
    tags: ['Node.js', 'Express.js', 'Angular', 'PostgreSQL', 'AWS'],
    company: 'SimplyFI',
    order: 1,
  },
];
