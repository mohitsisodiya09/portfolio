import { GITHUB_URL, LINKEDIN_URL, SITE_URL, TWITTER_URL } from '@/lib/constants';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Mohit Sisodiya · Backend Engineer',
  description:
    'Senior Software Engineer & Technical Lead with 6+ years building scalable Node.js backends across fintech, logistics, SaaS, and marketplace domains.',
  keywords: [
    'Mohit Sisodiya',
    'Senior Software Engineer',
    'Node.js',
    'NestJS',
    'Backend Engineer',
    'Technical Lead',
    'AWS',
  ],
  authors: [{ name: 'Mohit Sisodiya' }],
  openGraph: {
    title: 'Mohit Sisodiya · Backend Engineer',
    description: 'Building scalable platforms through architecture, leadership, and code.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Mohit.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohit Sisodiya · Backend Engineer',
    description: 'Building scalable platforms through architecture, leadership, and code.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohit Sisodiya',
  jobTitle: 'Senior Software Engineer',
  url: SITE_URL,
  email: 'mohitsisodiya76@gmail.com',
  sameAs: [LINKEDIN_URL, GITHUB_URL, TWITTER_URL],
  knowsAbout: ['Node.js', 'NestJS', 'Microservices', 'AWS', 'Backend Architecture'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-portfolio-accent focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
