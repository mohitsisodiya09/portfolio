import About from '@/components/About';
import { BackToTop } from '@/components/BackToTop';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import { HashNavigation } from '@/components/HashNavigation';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { ResumeCTA } from '@/components/ResumeCTA';
import TechStack from '@/components/TechStack';

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
