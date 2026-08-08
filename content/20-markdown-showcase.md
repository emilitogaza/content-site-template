---
title: Markdown Showcase
section: Examples
order: 20
description: A reference page exercising every Markdown feature the site renders.
---

# Markdown Showcase

This page exists to show how the theme renders each element. Use it as a visual
reference while you tune colours — then delete it.

## Headings and text

The heading above is an `h1`. This paragraph shows **bold text**, _italic text_,
`inline code`, and a [link to Lucide](https://lucide.dev). Text wraps and sets at
a comfortable measure for reading.

### A third-level heading

Only `##` and `###` headings appear in the "On this page" rail — notice this one
showed up there.

## Lists

An unordered list:

- First item
- Second item, with a nested list:
  - Nested one
  - Nested two
- Third item

An ordered list:

1. Generate a key
2. Copy the public half
3. Log in

## Code

Inline `code` sits in a subtle chip. Fenced blocks get an accent-tinted border:

```bash
# Install and run
pnpm install
pnpm dev
```

```ts
// A typed example
export function greet(name: string): string {
  return `Hello, ${name}`;
}
```

## Table

| Feature        | Supported | Notes                          |
| -------------- | --------- | ------------------------------ |
| Headings       | ✅        | `#` through `######`           |
| Tables         | ✅        | GitHub-flavoured               |
| Code blocks    | ✅        | Any language label             |
| Blockquotes    | ✅        | See below                      |

## Blockquote

> Blockquotes are good for asides, callouts, and the one rule you want a reader
> to remember. They pick up the raised surface colour from the theme.

---

That horizontal rule above (`---`) is a section break. That's the full set of
elements — continue to [Another Example](/second-example).
