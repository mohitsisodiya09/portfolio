import { Reveal } from '@/components/motion/Reveal';
import { StaggeredTags } from '@/components/motion/StaggeredTags';
import { SectionHeader } from '@/components/ui/SectionHeader';

const groups = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { label: 'Frameworks & Libraries', items: ['Node.js', 'Express.js', 'NestJS'] },
  { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { label: 'Cloud Platforms', items: ['AWS', 'GCP', 'Azure'] },
  { label: 'DevOps & CI/CD', items: ['Docker', 'GitHub Actions', 'GitLab'] },
  { label: 'Testing', items: ['Jest', 'Mocha', 'Chai'] },
  { label: 'Tools & Platforms', items: ['Git', 'Visual Studio Code', 'Cursor', 'Claude', 'Antigravity', 'Postman'] },
];

export default function TechStack() {
  return (
    <section id="skills" className="section-anchor py-16 sm:py-20 lg:py-28 px-4 sm:px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            label="Skills"
            title="Technical Expertise"
            subtitle="The tools I reach for when architecting backends, scaling services, and keeping production systems healthy."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {groups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 0.06}
              className={`h-full ${i === groups.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="card card-interactive rounded-2xl p-4 sm:p-5 border h-full">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-portfolio-accent-soft">
                  {group.label}
                </p>
                <StaggeredTags items={group.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
