'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
      aria-label="Back to top"
      className="fixed z-30 flex items-center gap-2 px-4 min-h-11 rounded-xl text-xs font-semibold text-portfolio-muted border social-icon shadow-lg backdrop-blur-sm bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))]"
      style={{ WebkitBackdropFilter: 'blur(8px)' }}
    >
      <ArrowUp size={14} aria-hidden="true" />
      Top
    </button>
  );
}
