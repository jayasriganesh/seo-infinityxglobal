# SEO Reference

## Purpose

This file documents the current SEO direction and implementation state of the InfinityX website repo so future updates can build on a clear baseline.

## Source of Truth

- The repo at `infinitx-app` is the source of truth for SEO and content decisions.
- Current SEO work assumes the intended production domain is `https://www.infinityxglobal.com/`.
- Important caveat: during analysis, the live `infinityxglobal.com` presence did not appear to match this repo's education / interactive display business. SEO work in this repo is therefore based on the local site, not the currently reachable live site experience.

## Current SEO Positioning

The site is currently optimized around:

- Interactive flat panels
- Smart classroom solutions
- Digital boards for schools
- Campus networking solutions
- Surveillance and CCTV integration
- Enterprise IT integration
- Education and institutional technology deployments in India

## Primary Audience

- Schools and educational institutions
- Colleges, campuses, and training environments
- Enterprises with meeting room / collaboration needs
- Government and institutional buyers
- Buyers evaluating bundled display + infrastructure deployments

## Core Pages and Intent

- `/`
  Focus: brand overview, solution categories, trust signals, FAQ intent coverage
- `/products`
  Focus: interactive displays, smart boards, series comparison, use-case mapping
- `/services`
  Focus: smart classroom setup, networking, surveillance, infrastructure integration
- `/resources`
  Focus: informational search traffic, buying guides, planning checklists, support-oriented content
- `/smart-classroom-solutions-india`
  Focus: India-specific commercial search intent for smart classroom and integration queries
- `/about`
  Focus: company credibility, experience, integration background
- `/clients`
  Focus: trust, scale, social proof
- `/contact`
  Focus: conversion, inquiry capture, local business signals
- `/support`
  Focus: warranty, service requests, technical support, post-sales trust

## Technical SEO Implemented

- Shared SEO system in `src/hooks/useSEO.jsx`
- Dynamic page titles
- Dynamic meta descriptions
- Dynamic keywords tags
- Canonical URLs
- Open Graph tags
- Twitter card tags
- Robots meta tag
- JSON-LD structured data support
- `robots.txt`
- `sitemap.xml`
- Root-domain-ready Vite base configuration via `VITE_BASE_PATH`
- `VITE_SITE_URL` support for canonical generation
- SPA direct-route fallback support via `public/404.html`

## Structured Data Implemented

- Organization schema on the homepage
- WebSite schema on the homepage
- FAQPage schema on the homepage
- ItemList schema on the products page
- LocalBusiness schema on the contact page
- BreadcrumbList schema on the contact page

## Major Content Improvements Already Added

- Homepage solution-intent section
- Homepage stats / trust section
- Homepage FAQ section
- Resource hub page for informational traffic
- India-focused landing page for location-specific search intent
- Stronger homepage metadata
- Stronger services page H1 and intro copy
- Improved support page trust signals and metadata
- Product page use-case section for search intent expansion
- Broader internal linking via footer visibility across all pages

## Competitor-Informed Direction

Competitor review was based mainly on:

- MAXHUB
- BenQ India

Patterns taken from competitors without copying text:

- Solution-led information architecture
- Stronger product/use-case framing
- More visible support and trust content
- Better FAQ and mid-funnel informational coverage
- Demo / consultation oriented CTAs

## Current Keyword Direction

Examples of the keyword themes this setup is targeting:

- interactive flat panel India
- smart classroom solutions India
- digital boards for schools
- interactive smart boards for classrooms
- campus networking solutions
- CCTV surveillance integration
- enterprise IT integration
- smart classroom setup
- interactive display solutions

## Known Limitations

- This is still a client-rendered React SPA, so SEO is improved but not as strong as full SSR / prerendered output would be.
- Ranking outcomes will depend on production deployment matching the intended domain.
- If the live production site is still different from this repo, search performance for this implementation will not improve until deployment is aligned.
- There is now a resource hub and an India-focused landing page, but there is still no full blog / article program yet.
- There is no Search Console / analytics / backlink data in this repo, so this work is based on on-page SEO and information architecture only.

## Recommended Next SEO Steps

- Confirm the real production domain and deploy this repo there
- Verify that `/products`, `/services`, `/support`, and other routes resolve correctly in production
- Add Search Console and Bing Webmaster verification
- Add conversion-focused landing pages for high-intent terms
- Add resource content such as product guides, smart classroom checklists, comparison pages, and FAQ articles
- Add stronger image alt-text review across all media-heavy pages
- Consider prerendering or SSR for stronger crawlability
- Add real downloadable assets or support resources if they exist

## Validation Status

Last local validation completed successfully with:

- `npm run lint`
- `npm run build`

## Files Most Relevant to SEO

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/404.html`
- `vite.config.js`
- `.env.example`
- `src/hooks/useSEO.jsx`
- `src/App.jsx`
- `src/ProductsPage.jsx`
- `src/ServicesPage.jsx`
- `src/ResourcesPage.jsx`
- `src/IndiaSolutionsPage.jsx`
- `src/ContactPage.jsx`
- `src/SupportPage.jsx`
- `src/AboutPage.jsx`
- `src/ClientsPage.jsx`
