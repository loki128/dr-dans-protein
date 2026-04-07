<div align="center">

# Dr. Dan's "No BS" Whey Protein

**Premium brand website for a founder-led clean-label protein company.**

Conversion-focused landing page with scroll-driven animations, AI-generated product photography, and waitlist capture. Designed and shipped in one week.

### [dr-dans-protein.vercel.app](https://dr-dans-protein.vercel.app)

[![Next.js](https://img.shields.io/badge/Next.js_16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Vercel](https://img.shields.io/badge/Live_on_Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://dr-dans-protein.vercel.app)

</div>

---

## About the Brand

Dr. Dan holds a PhD in Biology, served 10 years as a firefighter, and is a cancer survivor. His protein line is built on transparency and science — no proprietary blends, no filler ingredients, no marketing gimmicks.

---

## Sections

| Section | Purpose |
|---------|---------|
| **Hero** | Founder story headline + animated product showcase + infinite trust marquee |
| **Stats** | Key figures — purity %, protein per serving, ingredient count |
| **Pillars** | Three brand values: Science, Purity, Transparency |
| **Purity** | Deep-dive on clean-label commitment |
| **Product** | Product cards with size and flavour details |
| **Audience** | Who it's for — athletes, survivors, health-conscious consumers |
| **FAQ** | Accordion-based common questions |
| **Waitlist** | Email capture for launch notification |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Accordion, Card, Badge, Dialog, Sheet) |
| Animation | Framer Motion 12 (scroll-triggered reveals, text animations, parallax) |
| Images | Next/Image with AI-generated product photography (MeiGen) |
| Deployment | Vercel |

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   └── page.tsx            # Section composition
├── components/
│   ├── navbar.tsx          # Responsive nav with mobile sheet
│   ├── marquee.tsx         # Infinite scroll trust banner
│   ├── motion-wrapper.tsx  # Reusable scroll-triggered animation wrapper
│   ├── text-reveal.tsx     # Character-by-character text animation
│   ├── sections/           # All page sections
│   └── ui/                 # shadcn/ui primitives
└── lib/
    └── utils.ts            # cn() helper
```

---

## Performance

| Metric | Score |
|--------|-------|
| Lighthouse Performance | 98 |
| First Contentful Paint | <1s |
| Bundle Size | <200KB |
| Components | 15+ |

---

## Running Locally

```bash
git clone https://github.com/loki128/dr-dans-protein.git
cd dr-dans-protein
npm install
npm run dev
```

Static export — deployable to Vercel, Netlify, or any static host.

---

## Built By

**[Karim Lukita](https://lukita-portfolio.com)** — One-person product studio. I build full products solo — SaaS platforms, brand sites, AI tools, trading bots, games. Design to deployment, shipped fast.

[![Portfolio](https://img.shields.io/badge/lukita--portfolio.com-D4AF37?style=flat-square)](https://lukita-portfolio.com) [![GitHub](https://img.shields.io/badge/GitHub-loki128-181717?style=flat-square&logo=github)](https://github.com/loki128) [![LinkedIn](https://img.shields.io/badge/LinkedIn-Karim_Lukita-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/karim-lukita-0282263a9)

---

## License

MIT © 2026
