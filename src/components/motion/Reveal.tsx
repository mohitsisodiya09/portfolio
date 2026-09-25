'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode;
  delay?: number;
  offsetX?: number;
  offsetY?: number;
  scale?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  offsetX = 0,
  offsetY = 24,
  scale = false,
  className,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offsetX,
        y: offsetY,
        ...(scale ? { scale: 0.97 } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
      style={{ willChange: 'transform, opacity', ...props.style }}
    >
      {children}
    </motion.div>
  );
}
