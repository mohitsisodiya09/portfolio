'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TITLES = ['Senior Software Engineer', 'Technical Lead', 'Backend Architect', 'Node.js Specialist'];

type RotatingTextProps = {
  intervalMs?: number;
  className?: string;
};

export function RotatingText({ intervalMs = 3000, className = '' }: RotatingTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <p className={className} aria-live="polite">
        {TITLES[0]}
      </p>
    );
  }

  return <RotatingTextAnimated intervalMs={intervalMs} className={className} />;
}

function RotatingTextAnimated({ intervalMs, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % TITLES.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs]);

  const longestTitle = TITLES.reduce((longest, title) => (title.length > longest.length ? title : longest), '');

  return (
    <span className={`relative inline-flex justify-center min-h-[1.75rem] w-full ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={TITLES[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-center px-2 whitespace-normal sm:whitespace-nowrap"
        >
          {TITLES[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-normal sm:whitespace-nowrap text-center px-2" aria-hidden="true">
        {longestTitle}
      </span>
    </span>
  );
}
