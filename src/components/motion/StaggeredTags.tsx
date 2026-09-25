'use client';

import { TechIcon } from '@/components/ui/TechIcon';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type StaggeredTagsProps = {
  items: string[];
  className?: string;
  staggerMs?: number;
};

export function StaggeredTags({ items, className = '', staggerMs = 50 }: StaggeredTagsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`flex flex-wrap gap-2 content-start ${className}`}>
        {items.map((item) => (
          <span key={item} className="tag text-xs px-3 py-1.5 rounded-lg font-medium inline-flex items-center gap-1.5">
            <TechIcon name={item} size={13} />
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={`flex flex-wrap gap-2 content-start ${className}`}>
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{
            duration: 0.35,
            delay: index * (staggerMs / 1000),
            ease: [0.22, 1, 0.36, 1],
          }}
          className="tag text-xs px-3 py-1.5 rounded-lg font-medium inline-flex items-center gap-1.5"
        >
          <TechIcon name={item} size={13} />
          {item}
        </motion.span>
      ))}
    </div>
  );
}
