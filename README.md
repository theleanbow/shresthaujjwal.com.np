# shresthaujjwal.com.np

Personal portfolio website for Ujjwal Shrestha — Full Stack Developer based in Lalitpur, Nepal.

Built with [Astro](https://astro.build) using the portfolio template.

## Stack

- [Astro](https://astro.build) — static site framework
- TypeScript
- CSS (custom properties, no framework)
- Content Collections for work/project entries

## Commands

Run from the root of the project:

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start local dev server at `localhost:4321`  |
| `pnpm build`   | Build production site to `./dist/`          |
| `pnpm preview` | Preview production build locally            |

## Structure

```
src/
├── components/     # Reusable Astro components
├── content/work/   # Project/work entries (Markdown)
├── layouts/        # Base page layout
├── pages/          # index, about, work, 404
└── styles/         # Global CSS
public/
└── assets/         # Images and backgrounds
```

## Adding Work Entries

Create a `.md` file in `src/content/work/` with this frontmatter:

```md
---
title: Project Title
publishDate: 2025-01-01 00:00:00
img: /assets/stock-1.jpg
img_alt: Description of the image
description: Short project description shown in cards.
tags:
  - React.js
  - ASP.NET
---
```

## Live Site

[shresthaujjwal.com.np](https://shresthaujjwal.com.np)
