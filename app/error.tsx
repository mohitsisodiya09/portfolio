'use client';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      <h2 className="text-2xl font-bold mb-2 text-portfolio-text">Something went wrong</h2>
      <p className="text-portfolio-muted mb-6 max-w-md">
        {error.message || 'An unexpected error occurred while loading this page.'}
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold min-h-11"
      >
        Try again
      </button>
    </div>
  );
}
