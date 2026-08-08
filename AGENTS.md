<!-- BEGIN:template-rules -->
# This is a reusable content-site template

This repo is a **starter template** for content-driven documentation / course
sites (see `README.md`). One Markdown file per page in `content/`, one accent
colour ramp, and an app icon generated from a Lucide glyph. It ships with
placeholder branding ("Docs Starter"), example content, and an orange theme.

## Starting a new site from this template

When the user asks to build a **new site from this template** — e.g. "make a
course about X from the template", "spin up a new docs site using this", "use the
template for Y" — follow this order:

1. **ASK FIRST, before writing any code**, unless the user has already told you.
   Ask two things:
   - **Theme** — what colour / hue / vibe? (e.g. "blue", "warm orange",
     "terminal green", or a mood you translate to a hue.)
   - **Icon** — which **Lucide** glyph for the app icon + wordmark? (Point them
     to lucide.dev; suggest a couple that fit the topic if they're unsure.)
2. **Write the content.** Replace the example files in `content/` with the real
   pages. Format and conventions: `content/README.md`.
3. **Apply the theme + generate the icon.** Follow **`docs/theming.md`**
   end-to-end (colour ramp, browser/manifest colours, icon SVG + PNGs, wordmark).
4. **Name the site** — `SITE_*` in `app/layout.tsx`, the manifest fields, and the
   wordmark text (see `docs/theming.md` §6).

## Theming quick rules

- **One ramp, ten stops.** All colours come from the ten ramp values at the top
  of `app/globals.css` (+ the two `themeColor` literals in `app/layout.tsx`
  and the two colours in `app/manifest.webmanifest`). Re-theming = swap those
  ten values, running lightness from ~96% at `-50` down to ~4% at `-950`.
- **The ramp may be named after its colour.** It's `accent-*` in this template,
  but a site can call it `blue-*`, `spruce-*`, whatever reads naturally. If
  you rename it, update every `var(--color-…)` reference in the `--sem-*`
  blocks (light theme, dark theme, scrollbar) to match. Components never
  touch the ramp directly — they use semantic utilities (`bg-fill`,
  `text-ink`, `text-brand`, …) resolved through `--sem-*` runtime variables,
  which is what lets `.dark` swap the whole palette at once.
- **Keep `globals.css` comment-light.** Theming documentation lives here and
  in `docs/theming.md` — not as comment essays inside the CSS.
- **Check primary-button contrast after re-theming.** The default Button
  variant is `bg-brand text-brand-ink`, and `brand-ink` is *dark* in light
  mode — that only works on bright brand colours (luminous orange, gold,
  light green). If the ramp's `-500` stop is dark (rough guide: HSL lightness
  under ~55%, e.g. a deep blue), switch the default variant's text to
  `text-ink-flip` in `components/button.tsx` so the label reads light-on-dark.
  Eyeball the primary button in **both** themes either way.
- Icons are generated from a Lucide glyph (dark screen + accent glyph — no
  halo/outline layer, it double-strokes on complex shapes), rendered to PNGs
  incl. a maskable variant with ImageMagick. Full recipe: `docs/theming.md`.
- The wordmark icon (`app/(course)/layout.tsx`, `components/mobile-nav.tsx`) must
  be the **same** Lucide glyph as the app icon.
<!-- END:template-rules -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# No third-party UI component libraries

All UI components are built from scratch using React and Tailwind.

**Never install or import from:**

- `@radix-ui/*` (Radix UI primitives)
- `shadcn/ui` (component registry)
- `class-variance-authority` / `cva`
- `@headlessui/*`, `@ark-ui/*`, or any other component primitive library

- Use `lib/utils.ts` `cn()` for class merging and variant maps (plain objects)
- Use `lib/slot.tsx` for the `asChild` render pattern

**`motion/react` is allowed, with constraints:**

- Use the `m` component (not `motion`) — it requires `LazyMotion` to be in scope, cutting the bundle from ~34kb to ~4.6kb initial
- `LazyMotion` with `domAnimation` is mounted once globally in `app/layout.tsx` via `components/motion-provider.tsx` — do not add it anywhere else
<!-- END:component-rules -->

<!-- BEGIN:Proxy/Middleware -->
## Middlware & Proxy
- There is no middleware file in next16
- Do not use Middleware
- The correct file is Proxy.ts, it has replaced Middleware entierly
<!-- END:Proxy/Middleware -->

<!-- BEGIN:Style rules -->
## Styles
- Always use globals.css file for themed tokens
- Always use globals.css rounded scale (rounded-3, rounded-4), do not use tailwind default rounded scale (rounded-xl, rounded-md)
- When you need an icon, reach for lucide icons
<!-- END:Style rules -->

<!-- BEGIN:hosting-rules -->
# This site is hosted on Vercel
This project is hosted on Vercel. When talking about hosting, refer to Vercel.
<!-- END:hosting-rules -->
