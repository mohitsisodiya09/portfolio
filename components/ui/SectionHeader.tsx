type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? 'max-w-2xl text-center mx-auto' : 'w-full'}`}>
      <p className="text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3 text-portfolio-accent-soft">{label}</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-portfolio-text">{title}</h2>
      {subtitle && (
        <p className={`text-sm sm:text-base leading-relaxed text-portfolio-muted ${isCenter ? '' : 'max-w-3xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
