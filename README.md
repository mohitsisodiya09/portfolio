# Mohit Sisodiya — Portfolio

Senior Software Engineer & Technical Lead portfolio — backend architecture, team leadership, and production platforms across fintech, logistics, and GenAI.

**Live site:** [https://mohitsisodiya.vercel.app](https://mohitsisodiya.vercel.app)

Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

Requires **Node.js 24+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you see Turbopack/HMR chunk errors after a crash:

```bash
npm run dev:clean
```

Then close old browser tabs and open a fresh one. For faster reloads, use `npm run dev:turbo`.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Environment Variables

```bash
cp .env.example .env.local
```

| Variable                        | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Canonical site URL (OG tags / metadata)        |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID only (not the full URL)      |

On Vercel, `NEXT_PUBLIC_SITE_URL` can be left empty at first — the app falls back to `VERCEL_URL`. For production, set it to `https://mohitsisodiya.vercel.app`.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Framer Motion (`prefers-reduced-motion` supported)
- **Icons:** Lucide React, simple-icons
- **Font:** Inter via `next/font`
- **Contact:** Formspree

## Project Structure

```text
public/
  logo.svg                    # Brand mark
  Mohit_Sisodiya_Resume.pdf   # Downloadable resume
  robots.txt                  # Crawler rules
src/
  app/                  # App Router (routes, layout, metadata, icons)
  components/
    layout/             # Navbar, footer, hash nav, back-to-top
    sections/           # Page sections (hero → contact)
    motion/             # Animation primitives
    ui/                 # Shared UI
  hooks/
  lib/
    data/               # Experience & projects content
    *.ts                # Constants, scroll, Formspree, icon maps
```

## Deploy

Live on [Vercel](https://vercel.com): [https://mohitsisodiya.vercel.app](https://mohitsisodiya.vercel.app)

Set these in the Vercel project environment (type **Config**, not Secret):

- `NEXT_PUBLIC_SITE_URL` = `https://mohitsisodiya.vercel.app`
- `NEXT_PUBLIC_FORMSPREE_FORM_ID` = your Formspree form ID
