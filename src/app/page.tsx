import { BackToTop, Footer, HashNavigation, Navbar } from '@/components/layout';
import { About, Contact, Experience, Hero, Projects, ResumeCTA, TechStack } from '@/components/sections';

export default function Home() {
  return (
    <>
      <HashNavigation />
      <Navbar />
      <main id="main" tabIndex={-1} className="min-h-screen bg-portfolio-bg outline-none">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <ResumeCTA />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
