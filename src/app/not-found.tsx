import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen min-h-dvh bg-portfolio-bg flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-portfolio-accent-soft">404</p>
      <h1 className="text-3xl font-bold mb-3 text-portfolio-text">Page not found</h1>
      <p className="text-portfolio-muted mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold">
        Back to home
      </Link>
    </main>
  );
}
