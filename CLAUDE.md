# Kiyomi — Artist Website

## Project Overview
Personal website for Kiyomi Hawley — singer, songwriter, artist, and memoirist (book forthcoming).
Built to be modern, atmospheric, and professional. Comparable aesthetic to Sharon Van Etten, Phoebe Bridgers, Maggie Rogers.

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (pending)
- **Domain**: kiyomimusic.com (DNS via Dreamhost)

## Current Scope — v1 Single Page
This is a single-page site to start. No routing yet. One page, sections stacked vertically:

1. **Hero** — full-screen atmospheric image, her name, tagline
2. **Music** — featured track or Spotify embed
3. **Instagram** — feed strip or social links
4. **Footer** — social links, contact

Do not add pages or nav links unless explicitly asked.

## Design Principles
- Large, cinematic photography
- Minimal text, generous whitespace
- Subtle motion (Framer Motion entrance animations)
- Mobile-first, fully responsive
- Dark or muted color palette — let photography lead

## Personas to Support
- **Now**: Artist / singer-songwriter
- **Later**: Author (memoir, publication date TBD) — book section will be added as a new page/section when ready

## Project Structure
- `app/page.tsx` — single page, all sections composed here
- `app/layout.tsx` — root layout, fonts, metadata
- `app/globals.css` — Tailwind directives only
- `components/sections/` — Hero, Music, Social, Footer
- `components/ui/` — reusable primitives (Button, etc.)
- `public/` — images and static assets

## Dev Environment
- Host: Ubuntu desktop (jade), VS Code over SSH
- Node: 20.x via nvm
- Git: push to main triggers Vercel deploy (once connected)
- Local dev: `npm run dev` → http://localhost:3000

## Key Constraints
- No CMS yet — content is hardcoded for now
- No database, no backend
- Keep dependencies minimal
- Do not run `npm audit fix --force`
