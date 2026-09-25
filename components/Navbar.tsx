'use client';

import { Logo } from '@/components/ui/Logo';
import { useActiveSection } from '@/hooks/useActiveSection';
import { NAV_LINKS, RESUME_URL } from '@/lib/constants';
import { useCallback, useEffect, useId, useState } from 'react';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', '')).filter((id) => id !== 'home');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeSection, navigateToSection, navigateToTop } = useActiveSection(SECTION_IDS);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Overflow-only lock — keeps window.scrollY intact so nav starts from the current section
  useEffect(() => {
    if (!menuOpen) return;

    const { body, documentElement } = document;
    const previous = {
      bodyOverflow: body.style.overflow,
      htmlOverflow: documentElement.style.overflow,
      bodyTouch: body.style.touchAction,
      bodyOverscroll: body.style.overscrollBehavior,
    };

    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    body.style.overscrollBehavior = 'none';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      body.style.overflow = previous.bodyOverflow;
      documentElement.style.overflow = previous.htmlOverflow;
      body.style.touchAction = previous.bodyTouch;
      body.style.overscrollBehavior = previous.bodyOverscroll;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const handleSectionClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      closeMenu();
      // Navigate from the current scroll position (no unlock jump-to-top)
      if (id === 'home') {
        navigateToTop();
      } else {
        navigateToSection(id);
      }
    },
    [closeMenu, navigateToSection, navigateToTop]
  );

  const handleHomeClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      closeMenu();
      navigateToTop();
    },
    [closeMenu, navigateToTop]
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top)]"
      style={{
        backgroundColor: scrolled || menuOpen ? 'var(--portfolio-nav-bg)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid var(--portfolio-accent-08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={handleHomeClick}
          aria-label="Mohit Sisodiya — back to top"
          className="min-h-11 inline-flex items-center"
        >
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleSectionClick(event, id)}
                className={`nav-link text-sm font-medium min-h-11 inline-flex items-center transition-colors duration-200 ${
                  isActive ? 'nav-link-active' : ''
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 min-h-11 inline-flex items-center"
          >
            Resume ↗
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 min-h-11 min-w-11 rounded-lg"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
        >
          <span
            className={`block w-5 h-0.5 bg-portfolio-muted transition-transform duration-200 origin-center ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-portfolio-muted transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-portfolio-muted transition-transform duration-200 origin-center ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-x-0 bottom-0 top-[calc(4rem+env(safe-area-inset-top))] bg-black/50 z-[55]"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <nav
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="lg:hidden relative z-[60] px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-1 border-b border-[var(--portfolio-accent-08)] max-h-[70vh] max-h-[min(70dvh,calc(100dvh-4rem-env(safe-area-inset-top)))] overflow-y-auto"
            style={{ backgroundColor: 'var(--portfolio-nav-mobile-bg)' }}
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleSectionClick(event, id)}
                  className={`nav-link nav-link-mobile text-base font-medium min-h-11 inline-flex items-center px-1 ${
                    isActive ? 'nav-link-active-mobile' : ''
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm font-medium px-4 py-3 rounded-lg text-center mt-2 min-h-11 inline-flex items-center justify-center"
              onClick={closeMenu}
            >
              View Resume ↗
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
