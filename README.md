# UNPLUG LABS® — Unified Website

**STOP OPTIMIZING. START LIVING.**

UNPLUG LABS is an offline-first, anti-hustle digital brand creating thoughtful tools and experiences that help people reclaim attention and reconnect with real life.

This repository is the canonical source for the unified UNPLUG LABS website.

## Product architecture

- **UNPLUG LABS** — parent brand and editorial home.
- **Reality Kit** — practical offline-first activities and experiences.
- **Dopamine Menu** — a menu of offline activities.
- **Drops** — collections, digital objects, and interactive experiences.
- **Field Manuscript** — the brand's deeper thinking and ideas.
- **OFFLINE_OS** — a distinct Android launcher/product identity, related to but not merged into the parent brand's identity.

## SEO, GEO and AEO principles

- Useful, human-first content; no keyword stuffing or mass-generated doorway pages.
- A single verified canonical host, consistent metadata and structured data.
- Accurate JSON-LD that matches visible, verified content.
- Crawlable HTML, descriptive internal links, and a valid XML sitemap.
- Clear separation of search discovery, AI crawler policies, and model-training crawler policies.
- No promises of rankings, indexing, rich results, AI Overviews or AI citations.
- Every migration URL is mapped to a genuinely equivalent destination; no indiscriminate redirects.

## Deployment

Intended primary host (must be verified against the actual Vercel project before production changes):

https://unplugworld.vercel.app/

This repository is designed for Vercel static deployment. Use the root directory as the project root. Read `SEO_GEO_CHECKLIST.md` and `MIGRATION_PLAN.md` before changing production domains or redirects.

## Quality checks

Run:

```sh
npm run validate
```

SEO validation is a baseline check, not a substitute for real mobile/browser, accessibility, Search Console, or live deployment testing.
