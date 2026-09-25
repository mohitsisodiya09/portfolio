'use client';

import { getScrollOffset, resolveActiveSection, scrollToSection, scrollToTop } from '@/lib/scroll';
import { useCallback, useEffect, useRef, useState } from 'react';

/** Ignore scroll-spy updates while a programmatic nav animation is in flight */
const NAV_LOCK_MS = 1000;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('home');
  const ignoreScrollUntil = useRef(0);
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  }, [sectionIds]);

  const updateActiveSection = useCallback(() => {
    if (Date.now() < ignoreScrollUntil.current) return;
    setActiveSection(resolveActiveSection(sectionIdsRef.current, getScrollOffset()));
  }, []);

  const lockAndSet = useCallback((id: string) => {
    ignoreScrollUntil.current = Date.now() + NAV_LOCK_MS;
    setActiveSection(id);
  }, []);

  const navigateToSection = useCallback(
    (id: string) => {
      lockAndSet(id === 'home' ? 'home' : id);
      scrollToSection(id);
      // Re-enable spy after the smooth scroll should have settled
      window.setTimeout(updateActiveSection, NAV_LOCK_MS + 50);
    },
    [lockAndSet, updateActiveSection]
  );

  const navigateToTop = useCallback(() => {
    lockAndSet('home');
    scrollToTop();
    window.setTimeout(updateActiveSection, NAV_LOCK_MS + 50);
  }, [lockAndSet, updateActiveSection]);

  useEffect(() => {
    const sync = () => updateActiveSection();

    const onNavigate = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail.id;
      lockAndSet(id);
    };

    requestAnimationFrame(sync);

    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    window.addEventListener('hashchange', sync);
    window.addEventListener('sectionnavigate', onNavigate);

    if ('onscrollend' in window) {
      window.addEventListener('scrollend', sync);
    }

    return () => {
      window.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('sectionnavigate', onNavigate);
      window.removeEventListener('scrollend', sync);
    };
  }, [updateActiveSection, lockAndSet]);

  return { activeSection, navigateToSection, navigateToTop };
}
