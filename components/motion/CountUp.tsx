'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function parseStatValue(value: string): { end: number; suffix: string; decimals: number } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { end: 0, suffix: value, decimals: 0 };

  const numeric = match[1];
  const decimals = numeric.includes('.') ? numeric.split('.')[1].length : 0;

  return {
    end: Number.parseFloat(numeric),
    suffix: match[2],
    decimals,
  };
}

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function CountUp({ value, className = '', duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const { end, suffix, decimals } = parseStatValue(value);
  const [display, setDisplay] = useState(() => (prefersReducedMotion ? value : `0${suffix}`));

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        const formatted = decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest));
        setDisplay(`${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, end, suffix, decimals, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
