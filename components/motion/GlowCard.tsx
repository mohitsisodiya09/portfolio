'use client';

import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    setGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setGlow((current) => ({ ...current, visible: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-[inherit]"
          style={{
            opacity: glow.visible ? 1 : 0,
            background: `radial-gradient(380px circle at ${glow.x}px ${glow.y}px, rgba(139, 92, 246, 0.14), transparent 45%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
