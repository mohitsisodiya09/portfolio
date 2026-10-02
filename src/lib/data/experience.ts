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
    period: 'Jan 2025 – Sept 2026',
    type: 'Full-time',
    summary:
      'Progressed from individual contributor on Loot to leading cross-functional teams of up to 8 across four production platforms.',
    tags: ['Node.js', 'NestJS', 'AWS', 'MongoDB', 'PostgreSQL', 'Microservices', 'GitHub Actions'],
    bullets: [
      'Progressed from an individual contributor on Loot to leading cross-functional teams of up to 8, owning system architecture, technology selection, sprint planning, technical roadmaps, and client communication.',
      'Architected and developed backend systems for four products using Node.js, NestJS, MongoDB, PostgreSQL, MySQL, and AWS — choosing monolithic or microservices architecture per product and implementing RBAC, audit logging, and idempotent payment workflows.',
      'Refactored and optimised backend services across multiple products, reducing API latency by up to 60%.',
      'Optimised GitHub Actions CI/CD pipelines across React.js, Next.js, and Express.js projects, reducing build and deployment times by approximately 60–70%.',
      'Mentored juniors and interns through code reviews, onboarding, technical guidance, and knowledge sharing.',
    ],
  },
  {
    id: 'viitorcloud-2022',
    role: 'Senior Software Engineer',
    company: 'ViitorCloud Technologies Pvt Ltd',
    url: 'https://viitorcloud.com/',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jan 2022 – Oct 2024',
    type: 'Joined as Software Engineer · Promoted within 14 months · Led backend teams of 3–6',
    summary:
      'Promoted to Senior within 14 months — from a 20-member DP World team to leading backend teams of 3–6 across automotive, port, heritage, and scheduling platforms.',
    tags: ['NestJS', 'Node.js', 'MQTT', 'Stripe', 'Azure AD', 'MongoDB', 'PostgreSQL'],
    bullets: [
      'Promoted to Senior Software Engineer within 14 months, progressing from backend development in a 20-member enterprise team on Cargoes Flow (DP World) to leading backend teams of 3–6 engineers.',
      'Led backend API design, workflow architecture, implementation, and code reviews across several projects, collaborating with frontend, mobile, and client teams.',
      'Built monolithic and microservices backends with enterprise integrations including Azure AD and LDAP SSO, JWT/OAuth2, RBAC, Stripe, Twilio, MQTT telemetry, and Microsoft Dynamics CRM.',
      'Developed reusable Express.js and NestJS boilerplates to standardise project setup and speed up backend development across the team.',
      'Mentored juniors and interns through onboarding, code reviews, and day-to-day technical guidance.',
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
      'Built backends for three products — two fintech platforms and a consulting marketplace — on Node.js/Express with MongoDB and PostgreSQL on AWS.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    bullets: [
      'Built backends for three products: two fintech platforms (loan management, EMI repayments, supply-chain financing) and a consulting marketplace, using Node.js/Express with MongoDB and PostgreSQL on AWS.',
      'Delivered Tulipfee (Jun – Dec 2020), Tulipfin (Jan – May 2021), and Gurubantu (Jun 2021 – Jan 2022).',
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
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
    bullets: [
      'Built backend APIs and database models for client projects using Node.js, Express.js, MongoDB, and PostgreSQL.',
    ],
  },
];
