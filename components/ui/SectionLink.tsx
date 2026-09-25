'use client';

import { scrollToSection } from '@/lib/scroll';
import type { ReactNode } from 'react';

type SectionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function SectionLink({ href, children, className }: SectionLinkProps) {
  const id = href.replace('#', '');

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
