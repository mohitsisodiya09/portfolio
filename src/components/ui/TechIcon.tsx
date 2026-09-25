import { getTechIcon } from '@/lib/tech-icons';
import { Code2 } from 'lucide-react';

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 14, className = '' }: TechIconProps) {
  const icon = getTechIcon(name);

  if (icon) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`shrink-0 ${className}`}
        fill={`#${icon.hex}`}
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    );
  }

  return <Code2 size={size} className={`shrink-0 text-portfolio-accent-soft ${className}`} aria-hidden="true" />;
}
