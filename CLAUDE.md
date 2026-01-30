# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint across the project
- `npm run deploy` — Build and deploy to GitHub Pages via `gh-pages -d dist`

## Architecture

Single-page personal contact card built with **Vite + React 19 + Tailwind CSS v4**.

All contact data (name, email, phone, LinkedIn, website URL) is defined in the `CONTACT` object at the top of `src/App.jsx`. This is the single source of truth — the vCard generator, QR code, and all UI elements read from it.

### Key modules

- **`src/App.jsx`** — The entire UI lives here as a single component. No routing. Responsive layout uses Tailwind's `md:` breakpoint (stacks vertically on mobile, side-by-side on desktop).
- **`src/utils/generateVCard.js`** — Generates a VCF 3.0 vCard from the CONTACT object and triggers a browser download. No external vCard library; it builds the string directly.
- **`qrcode.react`** (`QRCodeSVG`) — Renders a QR code pointing to the website URL.

### Static assets in `public/`

- `headshot.jpg` — Profile photo placeholder. Replace with actual photo (referenced via `import.meta.env.BASE_URL + 'headshot.jpg'`).
- `resume.pdf` — Resume placeholder. Replace with actual PDF.

## GitHub Pages Deployment

The `base` in `vite.config.js` is set to `/personal-website/` to match the GitHub Pages subpath. If the repo name changes, update this value. Asset references in components use `import.meta.env.BASE_URL` to stay in sync with this base path — use it for any new public assets.

To deploy:
1. Create the GitHub repo: `gh repo create personal-website --public --source=. --push`
2. Run `npm run deploy` (uses `gh-pages` package to push `dist/` to the `gh-pages` branch)
3. In GitHub repo settings, set Pages source to the `gh-pages` branch

## Tailwind CSS v4

This project uses Tailwind CSS v4 with the Vite plugin (`@tailwindcss/vite`). There is no `tailwind.config.js` — configuration is done via CSS directives in `src/index.css`. The only CSS file is `src/index.css` which contains `@import "tailwindcss"`.
