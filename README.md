# Mohit Sisodiya — Portfolio

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

If you see Turbopack/HMR chunk errors after a crash, reset the dev cache:

```bash
npm run dev:clean
```

Then close any old browser tabs and open a fresh one at [http://localhost:3000](http://localhost:3000).

For faster reloads (Turbopack), use `npm run dev:turbo` instead.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Environment Variables

Copy `.env.example` to `.env.local` and set your production URL before deploying:

```bash
cp .env.example .env.local
```

| Variable                        | Description                                              |
| ------------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Canonical site URL for Open Graph and metadata           |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID only (e.g. `xlgklynq`), not a full URL |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Framer Motion (with `prefers-reduced-motion` support)
- **Icons:** Lucide React, simple-icons
- **Font:** Inter via `next/font`
- **Contact:** Formspree

## Project Structure

```
app/           # App Router (layout, page, icons, OG, errors)
components/    # Sections, motion, and UI
hooks/         # Client hooks (active section)
lib/           # Constants, scroll helpers, project/experience data
```

## Deploy

Deploy to [Vercel](https://vercel.com) or any platform that supports Next.js. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORMSPREE_FORM_ID` in the host environment.
