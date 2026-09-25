import { getFormspreeConfig } from '@/lib/formspree';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const RESUME_URL = 'https://drive.google.com/file/d/1ngFP4d4zAfD8wn5e7v3vW2q4smCfNt_Z/view?usp=sharing';

export const EMAIL = 'mohitsisodiya76@gmail.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mohitsisodiya09';
export const GITHUB_URL = 'https://github.com/mohitsisodiya09';
export const TWITTER_URL = 'https://twitter.com/mohitsisodiya09';
export const WHATSAPP_URL = 'https://wa.me/919479444215';

const formspreeConfig = getFormspreeConfig(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);

export const FORMSPREE_FORM_ID = formspreeConfig.formId;
export const FORMSPREE_ENDPOINT = formspreeConfig.endpoint;
export const FORMSPREE_CONFIG_ERROR = formspreeConfig.configError;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: RESUME_URL, external: true },
] as const;
