# Docs Starter — content-site template

A minimal, content-driven **documentation / course** site. Every page is a
single Markdown file in `content/`; the site builds the landing page, the
sidebar, the "On this page" rail, and previous/next paging automatically. It
ships with a light/dark theme driven by one accent colour, and a PWA app icon
generated from a [Lucide](https://lucide.dev) glyph.

Use it as a reusable starting point: **copy the folder, write your Markdown,
pick a theme colour and an icon, ship.**

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React with UI components built from scratch — no third-party component libraries
- Tailwind CSS with themed tokens in `app/globals.css`
- [motion](https://motion.dev) for animation (via `LazyMotion` in `components/motion-provider.tsx`)
- Hosted on [Vercel](https://vercel.com)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it your own

1. **Content** — replace the example files in `content/` with your own Markdown.
   Format and conventions: [`content/README.md`](content/README.md).
2. **Theme & icon** — pick an accent colour and a Lucide icon, then follow
   [`docs/theming.md`](docs/theming.md). Re-theming is ten values in
   `app/globals.css` plus a regenerated icon.
3. **Name** — set `SITE_*` in `app/layout.tsx`, the fields in
   `app/manifest.webmanifest`, the wordmark text, and the landing copy at the
   top of `app/page.tsx` (the hero, chapter grid, stats, and marquee fill
   themselves in from `content/`).
4. **Wire up the course family** — the `OTHER_COURSES` list in `app/page.tsx`
   links every course built from this template, and your new copy inherits the
   full list. When the new course ships, add it to **this template's** list
   *and* to the list on **every existing course site** (sibling folders in
   `ReactProjects/`), so all courses link to everything but themselves.
   Details in [`AGENTS.md`](AGENTS.md) step 5.

Working with an AI agent (Claude)? Just say *"build a site about X from this
template, blue theme, rocket icon"* — the rules in [`AGENTS.md`](AGENTS.md) tell
it to ask for the theme + icon, write the content, re-skin everything, and
cross-link the new course into every existing course site.

## Project structure

- `app/` — routes (landing page + chapter pages), layout, global styles
  (`globals.css`), favicon + icon, manifest
- `components/` — UI components (sidebar, mobile nav, pager, theme toggle, …)
- `content/` — your pages as Markdown, one file per page
- `docs/theming.md` — the re-skinning guide (colours + icons)
- `lib/` — utilities (`content.ts` page loader, `cn()` class merging, `Slot`)
- `public/icons/` — PWA icons referenced by `app/manifest.webmanifest`
- `AGENTS.md` — instructions for AI agents working in this repo
