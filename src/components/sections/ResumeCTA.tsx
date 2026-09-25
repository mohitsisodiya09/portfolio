import { Reveal } from '@/components/motion/Reveal';
import { RESUME_URL } from '@/lib/constants';
import { FileDown } from 'lucide-react';

export function ResumeCTA() {
  return (
    <section className="section-anchor py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="min-w-0 max-w-xl">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-portfolio-accent-soft">Resume</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-portfolio-text">Want to Know More?</h2>
              <p className="text-sm sm:text-base text-portfolio-muted">
                Download my resume for a detailed look at my experience, skills, and the platforms I&apos;ve shipped.
              </p>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 min-h-11 w-full sm:w-auto shrink-0"
            >
              <FileDown size={16} aria-hidden="true" />
              View Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
