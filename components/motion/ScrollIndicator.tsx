'use client';

import { scrollToSection } from '@/lib/scroll';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection('about');
  };

  const className =
    'flex flex-col items-center justify-center gap-1.5 min-h-11 min-w-11 px-3 text-portfolio-subtle hover:text-portfolio-muted transition-colors';

  if (prefersReducedMotion) {
    return (
      <a href="#about" onClick={handleClick} className={className} aria-label="Scroll to about section">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    );
  }

  return (
    <motion.a
      href="#about"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className={className}
      aria-label="Scroll to about section"
    >
      <span className="text-xs tracking-widest uppercase">scroll</span>
      <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
    </motion.a>
  );
}
