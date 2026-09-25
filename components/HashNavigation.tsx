'use client';

import { scrollToSection, scrollToTop } from '@/lib/scroll';
import { useEffect } from 'react';

/**
 * Ensures all in-page #hash links (footer, etc.) and initial URL hashes
 * land with content under the nav — same as the navbar (skips section padding gap).
 */
export function HashNavigation() {
  useEffect(() => {
    const go = (id: string) => {
      if (id === 'home' || id === '') {
        scrollToTop();
      } else if (document.getElementById(id)) {
        scrollToSection(id);
      }
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const id = decodeURIComponent(href.slice(1));
      if (id !== 'home' && !document.getElementById(id)) return;

      event.preventDefault();
      go(id);
    };

    document.addEventListener('click', onClick);

    const hash = window.location.hash.slice(1);
    if (hash) {
      // After layout — corrects native scroll-margin landing on refresh
      window.setTimeout(() => go(decodeURIComponent(hash)), 0);
    }

    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
