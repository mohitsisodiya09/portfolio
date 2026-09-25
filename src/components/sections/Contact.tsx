import { Reveal } from '@/components/motion/Reveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, WHATSAPP_URL } from '@/lib/constants';
import { Briefcase, Clock, FileDown, Mail, MapPin, MessageSquare } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohitsisodiya09',
    href: LINKEDIN_URL,
    external: true,
  },
  { icon: MapPin, label: 'Location', value: 'Indore, India · Open to Remote & Global', href: null },
];

const highlights = [
  { icon: Clock, label: 'Response time', value: 'Within 1 business day' },
  { icon: Briefcase, label: 'Open to', value: 'Senior Backend · Lead · Architect roles' },
  { icon: MessageSquare, label: 'Best for', value: 'Hiring, consulting, architecture reviews' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-anchor py-16 sm:py-20 lg:py-28 px-4 sm:px-6 section-glow bg-portfolio-bg">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Contact"
            title="Let's Connect"
            subtitle="Have a role, project, or architecture challenge in mind? Tell me what's slowing you down — I usually respond within one business day."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          <Reveal offsetX={-20} offsetY={0} delay={0.1} className="flex flex-col h-full">
            <div className="flex-1 flex flex-col gap-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon size={18} className="icon-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-portfolio-subtle">{item.label}</p>
                      <p className="text-sm text-portfolio-tag break-words">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="card card-interactive flex items-start gap-3 rounded-xl p-4 border min-h-14"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="card flex items-start gap-3 rounded-xl p-4 border">
                    {content}
                  </div>
                );
              })}

              <div className="card rounded-xl p-4 border space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-portfolio-accent-soft">
                  Quick details
                </p>
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <Icon size={16} className="icon-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="text-xs text-portfolio-subtle">{item.label}</p>
                        <p className="text-sm text-portfolio-tag">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-interactive flex items-center gap-2 rounded-xl p-4 border text-sm text-portfolio-muted hover:text-portfolio-text min-h-11"
                >
                  <GitHubIcon size={16} className="icon-accent" aria-hidden="true" />
                  GitHub Profile
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-interactive flex items-center gap-2 rounded-xl p-4 border text-sm text-portfolio-muted hover:text-portfolio-text min-h-11"
                >
                  <FileDown size={16} className="icon-accent" aria-hidden="true" />
                  View Resume
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 shrink-0">
              <a
                href={`mailto:${EMAIL}`}
                className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold min-h-11"
              >
                <Mail size={16} aria-hidden="true" />
                Email Me
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold min-h-11"
              >
                <WhatsAppIcon size={16} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal offsetX={20} offsetY={0} delay={0.2} className="flex flex-col h-full">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
