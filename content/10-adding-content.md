---
title: Adding Content
section: Getting Started
order: 10
description: The one-file-per-page workflow, frontmatter fields, and ordering.
---

# Adding Content

Adding a page is the same every time: create a Markdown file in `content/`, give
it frontmatter, write the body. No routing, no config.

## Create a file

Name it with a numeric prefix so the folder stays ordered, e.g.
`20-installation.md`. The prefix is stripped from the URL — that file is served
at `/installation`.

## Add frontmatter

```markdown
---
title: Installation
section: Getting Started
order: 20
description: How to install and run the project.
---

# Installation

Write the page body here in Markdown.
```

| Field         | Required | Purpose                                            |
| ------------- | -------- | -------------------------------------------------- |
| `title`       | yes      | Sidebar label, page heading, browser tab.          |
| `section`     | no       | Sidebar group heading. Default `General`.          |
| `order`       | no       | Sort position, low to high. Default `999`.         |
| `description` | no       | SEO / link-preview summary.                        |

## Order and sections

Pages sort by `order`. Leave gaps (10, 20, 30…) so you can slot new pages in
later without renumbering. Pages sharing a `section` are grouped together in the
sidebar, in the order they first appear.

> **Tip:** the full reference lives in `content/README.md`, alongside your
> content files.

That's the whole workflow. Next, see the [Markdown Showcase](/markdown-showcase)
for everything the renderer supports.
