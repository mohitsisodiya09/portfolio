type LogoProps = {
  className?: string;
};

export function Logo({ className = 'text-xl sm:text-[1.65rem]' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-black tracking-[-0.045em] leading-none ${className}`}
      aria-label="Mohit."
    >
      <span className="text-portfolio-text">Mohit</span>
      <span className="text-portfolio-accent">.</span>
    </span>
  );
}
