'use client';

import { Reveal } from '@/components/motion/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiences } from '@/lib/data/experience';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-anchor py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Experience"
            title="Professional Journey"
            subtitle="6+ years building scalable backends, leading teams of up to 8, and shipping 13 production projects."
          />
        </Reveal>

        <div ref={containerRef} className="relative">
          <div
            className="absolute left-4 top-2 bottom-2 w-px hidden sm:block bg-[var(--portfolio-accent-15)]"
            aria-hidden="true"
          />

          {!prefersReducedMotion && (
            <motion.div
              className="absolute left-4 top-2 w-px hidden sm:block bg-portfolio-accent origin-top"
              style={{ height: progressHeight, willChange: 'height' }}
              aria-hidden="true"
            />
          )}

          {prefersReducedMotion && (
            <div
              className="absolute left-4 top-2 bottom-2 w-px hidden sm:block bg-portfolio-accent/40"
              aria-hidden="true"
            />
          )}

          <div className="space-y-6 sm:space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} offsetX={-20} offsetY={0} delay={i * 0.08} className="sm:pl-12 relative">
                <div
                  className="absolute left-2.5 top-2 w-3 h-3 rounded-full border-2 hidden sm:block bg-portfolio-bg border-portfolio-accent z-10"
                  aria-hidden="true"
                />

                <div className="card card-interactive rounded-2xl p-4 sm:p-6 border">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-portfolio-text break-words">{exp.role}</h3>
                    <span className="badge-period text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm mb-1 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-2 min-h-11 rounded-lg border border-[var(--portfolio-accent-15)] bg-[var(--portfolio-accent-06)] text-portfolio-accent-soft hover:text-portfolio-text hover:border-[var(--portfolio-accent-25)] hover:bg-[var(--portfolio-accent-10)] transition-colors"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        {exp.company}
                        <ExternalLink size={12} className="shrink-0 opacity-80" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-portfolio-accent-soft">{exp.company}</span>
                    )}
                    <span className="text-portfolio-subtle">· {exp.location}</span>
                  </p>
                  <p className="text-xs mb-3 text-portfolio-subtle">{exp.type}</p>
                  {exp.summary && <p className="text-sm leading-relaxed mb-4 text-portfolio-muted">{exp.summary}</p>}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm flex gap-2 text-portfolio-tag">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-portfolio-accent" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-accent text-xs px-2.5 py-1 rounded-lg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
