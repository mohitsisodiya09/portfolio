import { CountUp } from '@/components/motion/CountUp';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '8', label: 'Engineers Led' },
  { value: '8+', label: 'Domains' },
  { value: '13', label: 'Projects Delivered' },
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
              I&apos;m a Senior Software Engineer and Technical Lead with 6+ years of experience building and scaling
              production systems across fintech, logistics, SaaS, and marketplace domains. I specialize in Node.js,
              Express.js, and NestJS — backend architecture, microservices, API design, auth/RBAC, payments, and
              real-time systems.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
              I&apos;ve delivered 13 projects — including solutions for Shell and DP World — and led cross-functional
              teams of up to 8. I&apos;ve improved API latency by up to 60% and cut CI/CD times by approximately 60–70%,
              with experience in LLM-powered document processing, mentoring, and engineering standardisation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
              I&apos;m passionate about building systems that are fast, reliable, and maintainable — and about growing
              the engineers around me. Currently open to Senior Backend, Lead, and Technical Lead roles — India, Remote,
              and Global.
            </p>
          </Reveal>

          <Reveal offsetX={24} offsetY={0} delay={0.2} className="grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card card-interactive rounded-2xl p-4 sm:p-6 border h-full flex flex-col justify-center"
              >
                <CountUp
                  value={stat.value}
                  className="text-3xl sm:text-4xl font-extrabold mb-1 sm:mb-2 metric-value block"
                />
                <p className="text-xs sm:text-sm font-medium text-portfolio-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
