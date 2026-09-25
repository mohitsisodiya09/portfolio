import { Aurora } from '@/components/motion/Aurora';
import { FadeIn } from '@/components/motion/FadeIn';
import { RotatingText } from '@/components/motion/RotatingText';
import { ScrollIndicator } from '@/components/motion/ScrollIndicator';
import { SectionLink } from '@/components/ui/SectionLink';
import { SocialLinks } from '@/components/ui/SocialLinks';

export default function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative min-h-screen min-h-dvh flex flex-col px-4 sm:px-6 overflow-hidden hero-bg bg-portfolio-bg"
    >
      <Aurora />
      <div className="absolute inset-0 pointer-events-none hero-grid" aria-hidden="true" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center pt-20 sm:pt-28 md:pt-32">
        <FadeIn delay={0.05}>
          <p className="text-sm font-medium tracking-wide mb-2 sm:mb-3 text-portfolio-muted">Hey, I&apos;m</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-none text-portfolio-text">
            Mohit Sisodiya
          </h1>
        </FadeIn>

        <FadeIn delay={0.18}>
          <RotatingText className="text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4 tracking-wide text-portfolio-accent-soft" />
        </FadeIn>

        <FadeIn delay={0.26}>
          <p className="text-sm sm:text-base md:text-lg font-normal mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed text-portfolio-muted px-1">
            Building scalable platforms through architecture, leadership, and code — turning complex backend challenges
            into reliable systems that teams can ship on.
          </p>
        </FadeIn>

        <FadeIn delay={0.34} className="mb-6 sm:mb-8 inline-flex items-center gap-2">
          <span className="badge-open px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span
              className="inline-block w-2 h-2 rounded-full mr-2 bg-portfolio-accent align-middle animate-pulse"
              aria-hidden="true"
            />
            Open to Opportunities
          </span>
        </FadeIn>

        <FadeIn delay={0.42} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center mb-8 sm:mb-10 w-full max-w-sm sm:max-w-none">
          <SectionLink
            href="#projects"
            className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold w-full sm:w-auto text-center min-h-11 inline-flex items-center justify-center"
          >
            View Projects
          </SectionLink>
          <SectionLink
            href="#contact"
            className="btn-secondary px-8 py-3.5 rounded-xl text-sm font-semibold w-full sm:w-auto text-center min-h-11 inline-flex items-center justify-center"
          >
            Let&apos;s Connect
          </SectionLink>
        </FadeIn>

        <FadeIn delay={0.5}>
          <SocialLinks className="justify-center" />
        </FadeIn>
      </div>

      <div className="relative z-10 shrink-0 pb-8 sm:pb-10 pt-4 sm:pt-6 flex justify-center max-sm:hidden">
        <ScrollIndicator />
      </div>
    </section>
  );
}
