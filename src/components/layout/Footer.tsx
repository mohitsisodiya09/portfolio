import { CurrentYear } from '@/components/layout/CurrentYear';
import { Logo } from '@/components/ui/Logo';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { EMAIL, FOOTER_LINKS } from '@/lib/constants';

const FOOTER_HIGHLIGHTS = ['6.5+ yrs', 'Node.js', 'Led teams of 10+'];

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 border-t border-[var(--portfolio-accent-08)] bg-portfolio-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-10">
          <div>
            <a href="#home" className="inline-block mb-3" aria-label="Back to top">
              <Logo className="text-lg" />
            </a>
            <p className="text-sm leading-relaxed text-portfolio-muted mb-3">
              Senior Backend Engineer & Technical Lead building scalable platforms through architecture, leadership, and
              code.
            </p>
            <p className="text-xs text-portfolio-subtle mb-3">Indore, India · Open to Remote & Global</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {FOOTER_HIGHLIGHTS.map((item) => (
                <span key={item} className="tag text-xs px-2.5 py-1 rounded-lg font-medium">
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center min-h-11 text-sm font-medium text-portfolio-accent-soft hover:text-portfolio-text transition-colors"
            >
              Get in touch →
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-portfolio-accent-soft">
              Quick Links
            </p>
            <ul className="space-y-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...('external' in link && link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center min-h-11 text-sm text-portfolio-muted hover:text-portfolio-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-portfolio-accent-soft">
              Get in Touch
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-portfolio-muted hover:text-portfolio-accent-soft transition-colors inline-flex items-center min-h-11 mb-3 break-all"
            >
              {EMAIL}
            </a>
            <SocialLinks size="sm" />
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--portfolio-accent-08)] text-center">
          <p className="text-sm text-portfolio-subtle">
            © <CurrentYear /> Mohit Sisodiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
