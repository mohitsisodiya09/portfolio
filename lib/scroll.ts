/** Fallback if computed scroll-padding can't be read. Keep near nav height + small gap. */
export const NAV_SCROLL_OFFSET = 72;

export function getScrollOffset(): number {
  if (typeof window === 'undefined') return NAV_SCROLL_OFFSET;

  const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : NAV_SCROLL_OFFSET;
}

export function getSectionTop(element: HTMLElement): number {
  return element.getBoundingClientRect().top + window.scrollY;
}

/** Scroll Y so section content (after padding) sits just below the fixed nav — not a large empty gap. */
export function getSectionScrollTarget(element: HTMLElement): number {
  const navOffset = getScrollOffset();
  const paddingTop = Number.parseFloat(getComputedStyle(element).paddingTop) || 0;
  return Math.max(0, getSectionTop(element) + paddingTop - navOffset);
}

export function scrollToSection(id: string): void {
  if (id === 'home') {
    scrollToTop();
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = getSectionScrollTarget(element);

  window.dispatchEvent(new CustomEvent('sectionnavigate', { detail: { id } }));
  history.replaceState(null, '', `#${id}`);
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
}

export function scrollToTop(): void {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.dispatchEvent(new CustomEvent('sectionnavigate', { detail: { id: 'home' } }));
  history.replaceState(null, '', '#home');
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

export function resolveActiveSection(sectionIds: string[], offset = getScrollOffset()): string {
  if (window.scrollY < Math.max(24, offset * 0.35)) {
    return 'home';
  }

  let current = 'home';
  const scrollPos = window.scrollY + offset + 4;

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;

    // Treat section as active once its content area (past top padding) reaches the marker
    const paddingTop = Number.parseFloat(getComputedStyle(element).paddingTop) || 0;
    const contentTop = getSectionTop(element) + paddingTop;

    if (contentTop <= scrollPos) {
      current = id;
    }
  }

  return current;
}
