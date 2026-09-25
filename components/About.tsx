import { CountUp } from '@/components/motion/CountUp';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EMAIL, LINKEDIN_URL } from '@/lib/constants';

const stats = [
  { value: '6.5+', label: 'Years Experience' },
  { value: '10+', label: 'Engineers Led' },
  { value: '8+', label: 'Domains' },
  { value: '15+', label: 'Projects Delivered' },
];

export default function About() {
  return (
    <section id="about" className="section-anchor py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-portfolio-bg">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            label="About"
            title="Who I Am"
            subtitle="Get to know the engineer behind the architecture — backend specialist, technical lead, and platform builder."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal offsetX={-24} offsetY={0} delay={0.1} className="space-y-5">
            <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
              I&apos;m a Senior Software Engineer and Technical Lead with 6.5+ years of experience architecting and
              delivering scalable backend systems. I specialize in Node.js, Express.js, NestJS, and microservices design
              across AWS, GCP, and Azure.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
              I&apos;ve led cross-functional teams of up to 10 engineers and shipped production platforms across
              fintech, logistics, franchise, ITAD, maritime, digital culture, and GenAI — owning everything from
              architecture decisions to client communication and sprint planning.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
              I&apos;m passionate about building systems that are fast, reliable, and maintainable — and about growing
              the engineers around me. Currently open to Senior Backend, Lead, and Technical Lead roles — India, Remote,
              and Global.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-11 px-3 text-sm font-medium underline underline-offset-4 transition-colors text-portfolio-accent-soft hover:text-portfolio-text"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center min-h-11 px-3 text-sm font-medium underline underline-offset-4 transition-colors text-portfolio-accent-soft hover:text-portfolio-text"
              >
                Email me ↗
              </a>
            </div>
          </Reveal>

          <Reveal offsetX={24} offsetY={0} delay={0.2} className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card card-interactive rounded-2xl p-4 sm:p-6 border h-full flex flex-col justify-center"
              >
                <CountUp value={stat.value} className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2 metric-value block" />
                <p className="text-xs sm:text-sm font-medium text-portfolio-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
