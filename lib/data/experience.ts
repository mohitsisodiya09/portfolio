export type Experience = {
  id: string;
  role: string;
  company: string;
  url?: string;
  location: string;
  period: string;
  type: string;
  summary?: string;
  tags: string[];
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    id: 'thinkwik-2025',
    role: 'Senior Software Engineer · Technical Lead',
    company: 'Thinkwik Technology Pvt Ltd',
    url: 'https://www.thinkwik.com/',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    summary:
      'Leading cross-functional delivery across five production platforms while owning architecture, CI/CD, and GenAI R&D initiatives.',
    tags: ['Node.js', 'NestJS', 'AWS', 'Redis', 'GitHub Actions', 'Microservices'],
    bullets: [
      'Led cross-functional teams of up to 8 (Frontend, Backend, DevOps, QA) across concurrent product lines.',
      'Architected microservice and monolithic backends for 5 production platforms (Loot, Elixia, ITADly, Franchise Listings, GenAI tooling) on AWS — 99%+ uptime.',
      'Drove 60%+ reduction in API response latency through Redis caching, query optimization, and connection pooling.',
      'Built and owned CI/CD pipelines (GitHub Actions, GitLab CI), cutting deployment time by 40–50%.',
      'Conducted GenAI R&D: OCR-based document intelligence pipelines and LLM-powered AI chatbot interfaces.',
    ],
  },
  {
    id: 'viitorcloud-2022',
    role: 'Senior Software Engineer',
    company: 'ViitorCloud Technologies Pvt Ltd',
    url: 'https://viitorcloud.com/',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jan 2022 – Oct 2024',
    type: 'Promoted from Software Engineer · Led teams of up to 10',
    summary:
      'Designed scalable NestJS backends across automotive, port authority, and digital heritage verticals with auth, payments, and IoT pipelines.',
    tags: ['NestJS', 'Node.js', 'MQTT', 'Stripe', 'Razorpay', 'OAuth2', 'MongoDB'],
    bullets: [
      'Designed scalable NestJS/Node.js backends across automotive, port authority, and digital heritage verticals.',
      'Implemented JWT, OAuth2/SSO, and RBAC auth systems with rate limiting and audit logging for compliance workloads.',
      'Integrated Stripe and Razorpay payment gateways with idempotent transaction handling and reconciliation logic.',
      'Built real-time IoT telemetry pipeline using MQTT for JNPT port authority — live vehicle tracking in a 3D digital twin.',
      'Led sprint ceremonies, weekly code reviews, and client relationship management across all project phases.',
    ],
  },
  {
    id: 'simplyfi-2020',
    role: 'Innovation Engineer (Software Engineer)',
    company: 'SimplyFI Softech India Pvt Ltd',
    url: 'https://www.simplyfi.tech/',
    location: 'Bangalore, Karnataka, India',
    period: 'Jun 2020 – Jan 2022',
    type: 'Full-time · Fintech & EdTech platforms',
    summary:
      'Architected backend systems for three live fintech and EdTech products from schema design through production delivery.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    bullets: [
      'Architected backend systems for Tulipfin (working capital & supply chain finance) and Tulipfee (school fee financing with EMI management).',
      'Built Gurubantu, a consultant marketplace platform with booking workflows, API architecture, and data models end-to-end.',
      'Designed database schemas and provided technical leadership to team members across three live products.',
    ],
  },
  {
    id: 'simplyfi-intern-2020',
    role: 'Software Developer Intern',
    company: 'SimplyFI Softech India Pvt Ltd',
    url: 'https://www.simplyfi.tech/',
    location: 'Bangalore, Karnataka, India',
    period: 'Jan 2020 – May 2020',
    type: 'Internship',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL'],
    bullets: [
      'Developed and tested application features using Node.js, Express.js, MongoDB, PostgreSQL, and MySQL.',
      'Wrote technical documentation and contributed to debugging and deployment workflows.',
    ],
  },
  {
    id: 'freelance-2018',
    role: 'Freelance Backend Developer',
    company: 'Independent',
    location: 'Remote, India',
    period: 'Aug 2018 – Jan 2020',
    type: 'Freelance',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    bullets: [
      'Delivered outsourced Node.js backend projects for clients — built production APIs and database models across multiple engagements.',
    ],
  },
];
