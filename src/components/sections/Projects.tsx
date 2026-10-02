'use client';

import { GlowCard } from '@/components/motion/GlowCard';
import { Reveal } from '@/components/motion/Reveal';
import { GitHubIcon } from '@/components/ui/BrandIcons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROJECT_COMPANIES, projects, type Project, type ProjectCompany } from '@/lib/data/projects';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

type CompanyFilter = 'All' | ProjectCompany;

const FILTERS: CompanyFilter[] = ['All', ...PROJECT_COMPANIES];

function FeaturedProject({ project, index, showCompany }: { project: Project; index: number; showCompany: boolean }) {
  return (
    <Reveal delay={index * 0.1} scale className="h-full">
      <GlowCard className="rounded-2xl h-full">
        <div className="card-highlight card-interactive rounded-2xl p-4 sm:p-6 border h-full flex flex-col">
          <div className="mb-2">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <h3 className="text-base sm:text-lg font-bold text-portfolio-text break-words min-w-0">
                {project.title}
              </h3>
              <span className="badge-period text-xs font-medium px-3 py-1 rounded-full shrink-0 self-start">
                {project.period}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 mt-1.5">
              <p className="text-xs font-medium text-portfolio-accent-soft min-w-0">{project.subtitle}</p>
              {showCompany && <span className="badge-company shrink-0 self-start">{project.company}</span>}
            </div>
            <p className="text-xs text-portfolio-subtle mt-1">{project.role}</p>
          </div>

          <p className="text-sm leading-relaxed text-portfolio-muted mt-3 mb-4">{project.description}</p>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold border min-h-11"
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="card rounded-xl px-3 py-3 border text-center">
                  <p className="text-lg sm:text-xl font-extrabold metric-value">{metric.value}</p>
                  <p className="text-xs text-portfolio-subtle mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="space-y-2 mb-4">
              {project.features.map((feature) => (
                <div key={feature.title} className="card rounded-xl px-3.5 py-3 border">
                  <p className="text-sm font-semibold text-portfolio-text mb-0.5">{feature.title}</p>
                  <p className="text-xs leading-relaxed text-portfolio-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs px-2.5 py-1 rounded-lg font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </Reveal>
  );
}

function StandardProject({ project, index, showCompany }: { project: Project; index: number; showCompany: boolean }) {
  return (
    <Reveal delay={Math.min(index, 8) * 0.08} scale className="h-full">
      <GlowCard className="rounded-2xl h-full">
        <div className="card card-interactive rounded-2xl p-4 sm:p-6 border h-full flex flex-col">
          <div className="mb-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2 mb-1">
              <h3 className="text-base font-bold text-portfolio-text break-words min-w-0">{project.title}</h3>
              <span className="text-xs shrink-0 text-portfolio-subtle">{project.period}</span>
            </div>
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 mb-1">
              <p className="text-xs font-medium text-portfolio-accent-soft min-w-0">{project.subtitle}</p>
              {showCompany && <span className="badge-company shrink-0 self-start">{project.company}</span>}
            </div>
            <p className="text-xs text-portfolio-subtle">{project.role}</p>
          </div>

          <p className="text-sm leading-relaxed flex-1 mb-4 text-portfolio-muted">{project.description}</p>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-1 px-3 py-2.5 rounded-lg text-xs font-medium border min-h-11"
                >
                  {link.label.includes('Code') ? (
                    <GitHubIcon size={12} aria-hidden="true" />
                  ) : (
                    <ExternalLink size={12} aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="tag text-xs px-2.5 py-1 rounded-lg font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<CompanyFilter>('All');

  const filtered = projects
    .filter((project) => filter === 'All' || project.company === filter)
    .sort((a, b) => b.order - a.order);

  // Featured layout + company badges only on All
  const showFeatured = filter === 'All';
  const showCompany = filter === 'All';
  const featured = showFeatured ? filtered.filter((project) => project.highlight) : [];
  const standard = showFeatured ? filtered.filter((project) => !project.highlight) : filtered;

  return (
    <section id="projects" className="section-anchor py-16 sm:py-20 lg:py-28 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Projects"
            title="Key Projects"
            subtitle="13 production projects across fintech, logistics, SaaS, and marketplaces — including platforms for Shell and DP World."
          />
        </Reveal>

        <div
          className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none"
          role="group"
          aria-label="Filter projects by company"
        >
          {FILTERS.map((company) => (
            <button
              key={company}
              type="button"
              onClick={() => setFilter(company)}
              aria-pressed={filter === company}
              className={`filter-chip shrink-0 ${filter === company ? 'filter-chip-active' : ''}`}
            >
              {company}
            </button>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-5">
          {featured.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              {featured.map((project, i) => (
                <FeaturedProject key={project.id} project={project} index={i} showCompany={showCompany} />
              ))}
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {standard.map((project, i) => (
              <StandardProject
                key={project.id}
                project={project}
                index={i + featured.length}
                showCompany={showCompany}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
