# Dr. Dan's "No BS" Whey Protein

Premium brand website for a founder-led clean-label protein company. Built as a conversion-focused landing page with scroll-driven animations, AI-generated product photography, and a waitlist capture system.

**Live:** [dr-dans-protein.vercel.app](https://dr-dans-protein.vercel.app)

## About the Brand

Dr. Dan holds a PhD in Biology, served 10 years as a firefighter, and is a cancer survivor. His protein line is built on transparency and science — no proprietary blends, no filler ingredients, no marketing gimmicks.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Accordion, Card, Badge, Dialog, Sheet)
- **Animation:** Framer Motion 12 (scroll-triggered reveals, text animations, parallax)
- **Images:** Next/Image with AI-generated product photography (MeiGen)

## Sections

| Section | Purpose |
|---------|---------|
| Hero | Founder story headline + animated product showcase + trust marquee |
| Stats | Key figures — purity %, protein per serving, ingredients |
| Pillars | Three brand values: Science, Purity, Transparency |
| Purity | Deep-dive on clean-label commitment |
| Product | Product cards with size and flavour details |
| Audience | Who it's for — athletes, survivors, health-conscious consumers |
| FAQ | Accordion-based common questions |
| Waitlist | Email capture for launch notification |

## Architecture

```
src/
  app/
    layout.tsx          # Root layout, fonts, metadata
    page.tsx            # Section composition
  components/
    navbar.tsx          # Responsive nav with mobile sheet
    marquee.tsx         # Infinite scroll trust banner
    motion-wrapper.tsx  # Reusable scroll-triggered animation wrapper
    text-reveal.tsx     # Character-by-character text animation
    sections/           # All page sections
    ui/                 # shadcn/ui primitives
  lib/
    utils.ts            # cn() helper
```

## Getting Started

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export — deployable to Vercel, Netlify, or any static host.
