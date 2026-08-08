---
title: Welcome
section: Getting Started
order: 5
description: What this starter is, and how to turn it into your own content site.
---

# Welcome to Docs Starter

This is a **content-driven site template** — a documentation / course site where
every page is a single Markdown file. It ships with a light and dark theme, a
responsive sidebar, an automatic "On this page" table of contents, previous/next
paging, and a PWA manifest with app icons. You bring the content.

This page is example content. Replace it — and everything else in `content/` —
with your own.

## How it works

The whole site is driven by the files in the **`content/`** folder:

- Each `.md` file becomes one page.
- **Frontmatter** at the top of each file sets its title, section, order, and
  description.
- The **sidebar on the left** groups pages by `section`; the **"On this page"**
  rail on the right lists the `##`/`###` headings within a page.
- **Previous / Next** at the bottom walks through pages in `order`.

You don't touch any routing or configuration to add, remove, or reorder pages.

## Make it yours

1. **Write your content.** Delete these example files and add your own Markdown
   to `content/`. See [Adding Content](/adding-content) for the format.
2. **Pick a theme.** All colours come from one accent ramp in
   `app/globals.css`. Change ten values and the whole site re-themes.
3. **Pick an icon.** Generate an app icon from any [Lucide](https://lucide.dev)
   glyph.

Steps 2 and 3 are documented for the AI agent in **`docs/theming.md`** — if
you're working with Claude, just say what colour and which icon you want.

## A note on this demo

Everything you see is standard Markdown rendered through the site's prose
styles. Flip between light and dark with the toggle in the top corner to see the
theme react. When you're ready, start with
[Adding Content](/adding-content).
