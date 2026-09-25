import { GitHubIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL, WHATSAPP_URL } from '@/lib/constants';
import { Mail } from 'lucide-react';

type SocialLinksProps = {
  size?: 'sm' | 'md';
  className?: string;
  showWhatsApp?: boolean;
};

type SocialLink = {
  label: string;
  href: string;
  external: boolean;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const allLinks: SocialLink[] = [
  { label: 'GitHub', href: GITHUB_URL, external: true, Icon: GitHubIcon },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true, Icon: LinkedInIcon },
  { label: 'Twitter', href: TWITTER_URL, external: true, Icon: TwitterIcon },
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true, Icon: WhatsAppIcon },
  { label: 'Email', href: `mailto:${EMAIL}`, external: false, Icon: Mail },
];

export function SocialLinks({ size = 'md', className = '', showWhatsApp = true }: SocialLinksProps) {
  const dim = size === 'sm' ? 16 : 18;
  const pad = 'p-3 min-h-11 min-w-11';

  const links = showWhatsApp ? allLinks : allLinks.filter((link) => link.label !== 'WhatsApp');

  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
      {links.map(({ label, href, external, Icon }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          aria-label={label}
          className={`social-icon inline-flex items-center justify-center rounded-xl ${pad}`}
        >
          <Icon size={dim} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
