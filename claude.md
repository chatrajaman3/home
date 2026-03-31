# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project Overview

Your are a senior UI designer and frontend developer.
Build premium, dark-themed interfaces
Use subtle animations, proper spacing, and visual hierarchy.
No generic gradients.

Use skill frontend-design

# What This Is

Static HTML/CSS/JS personal portfolio website for Chathil Rajamanthree (ECE @ UBC). Deployed via GitHub Pages at `https://chatrajaman3.github.io/home`.

No build step, no package manager, no framework — edit files directly and open in a browser.

# Architecture

## Dual Theme Structure
- **Root (`/`)** — Dark theme (primary). `css/style.css` is the main stylesheet, compiled from `css/scss/style.scss`.
- **`/light/`** — Light theme variant. Mirrors the root structure with its own HTML, CSS, and JS copies.

## Key Files
- `index.html` — Main landing page (hero, about, skills, portfolio, contact sections)
- `portfolio-redesign.html` — Portfolio redesign page using `css/theme-silicon.css`
- `portfolio-single-*.html` — Individual project detail pages
- `textbooks.html` + `textbooks.json` — Dynamically loaded textbook listing (JS reads JSON)
- `blog-single.html` — Blog post template
- `php/` — Contact form backend (PHP mailer)

## CSS
- Source: `css/scss/style.scss` and `css/scss/components/`
- Compiled output: `css/style.css`
- Vendor CSS lives in `css/vendor/` — do not edit these
- `css/slider-styles.css` — standalone slider overrides
- `css/theme-silicon.css` — alternate theme for portfolio-redesign page

## JavaScript
- `js/main.js` — All custom JS: AOS animations, Isotope filtering, Owl Carousel, parallax (Jarallax), contact form, scroll effects
- `js/scripts.js` / `js/scripts-dist.js` — concatenated script bundles
- `js/textbooks-loader.js` — fetches and renders `textbooks.json`
- All vendor libs in `js/vendor/` — jQuery 3.3.1, Bootstrap, ScrollMagic, GSAP (TweenMax), AOS, Isotope, Fancybox, etc.

## SEO / Schema
`index.html` contains JSON-LD structured data (Person schema, BreadcrumbList) and a `robots.txt` + `sitemap.xml` at root. Update these when pages are added or URLs change.

# SCSS Compilation
The project uses Prepros (config at `light/prepros-6.config`) to compile SCSS → CSS. If Prepros is unavailable, use `sass` CLI:

```bash
sass css/scss/style.scss css/style.css
```

# Development
No local server required for most edits — open HTML files directly in a browser. For contact form testing, a PHP-capable local server is needed (e.g., XAMPP, `php -S localhost:8000`).
