const DEFAULT_SITE_URL = 'http://localhost:3000';

/**
 * Resolve the canonical site URL for metadata / OG tags.
 * Empty env values are ignored (Vercel often sets NEXT_PUBLIC_SITE_URL="").
 * On Vercel, falls back to https://$VERCEL_URL when no explicit URL is set.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeUrl(explicit);
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return normalizeUrl(vercel.startsWith('http') ? vercel : `https://${vercel}`);
  }

  return DEFAULT_SITE_URL;
}

function normalizeUrl(value: string): string {
  try {
    const url = new URL(value);
    // Drop trailing slash so metadataBase joins cleanly
    return url.origin + url.pathname.replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}
