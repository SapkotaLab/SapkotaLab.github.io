# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static lab website for SapkotaLab at St. Jude Children's Research Hospital, built with Astro 6. Deployed to GitHub Pages at `sapkotalab.github.io` via GitHub Actions on push to `main`.

## Commands

```bash
npm run dev       # Start local dev server with hot reload
npm run build     # Build static site to /dist
npm run preview   # Serve production build locally
```

No test runner or linter is configured.

## Architecture

### Routing
File-based routing from `src/pages/`. Each page imports content from collections and renders via `BaseLayout.astro`.

### Content Collections
Defined in `src/content/content.config.mjs` with Zod schemas. Two formats:
- **Markdown** (`people/`, `research/`) — front matter fields + rendered body
- **YAML** (`publications/selected.yml`, `news.yml`) — structured data arrays

To add content: add/edit files in `src/content/`, matching the schema in `content.config.mjs`. Access in pages via `getCollection('name')` or `getEntry('name', 'slug')`.

### Styling
All styles live in `src/layouts/BaseLayout.astro` as a single `<style>` block with CSS custom properties. No Tailwind, no external CSS framework. Key variables: `--bg`, `--surface`, `--accent` (`#0f766e` teal), `--text`, `--radius`. Breakpoints at 840px and 640px.

### Components
- `src/layouts/BaseLayout.astro` — master template: nav, footer, global CSS (~535 lines)
- `src/components/ResearchGraphic.astro` — inline SVG decoration for hero section

Pages render content directly with inline styles/classes; component extraction is minimal by design.
