# GenQuantaa Website

> The official marketing website for GenQuantaa — AI Operating System for Life Sciences & Enterprise Organizations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your actual keys in .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📋 Project Overview

**Type**: Company Marketing Website  
**Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS 4  
**Deployment**: Vercel  

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── services/                 # Services pages
│   │   ├── page.tsx              # Services overview
│   │   ├── life-sciences/        # Life Sciences AI
│   │   ├── agentic-ai/          # Agentic AI Systems
│   │   ├── enterprise-ai/        # Enterprise AI Engineering
│   │   └── academy/             # GenQuantaa Academy
│   ├── case-studies/page.tsx     # Case Studies
│   ├── blog/                     # Blog
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Blog post detail
│   ├── careers/page.tsx          # Careers page
│   ├── contact/page.tsx          # Contact page
│   ├── api/                      # API Routes
│   │   ├── contact/route.ts      # Contact form handler
│   │   └── newsletter/route.ts   # Newsletter subscription
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # robots.txt
│   └── not-found.tsx             # 404 page
├── components/
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Homepage sections
│   └── contact/                  # Contact form
└── lib/
    ├── constants.ts              # Site constants, navigation
    └── utils.ts                  # Utility functions
```

## 🎨 Design System

**Theme**: Dark — deep navy background (#030712) with electric cyan (#06b6d4) and violet (#818cf8) accents.

**Key CSS utilities** (defined in `globals.css`):
- `.gradient-text` — Cyan → violet gradient text
- `.glass` — Glassmorphism card style
- `.glass-hover` — Hover state for glass cards
- `.btn-primary` / `.btn-outline` — Button variants
- `.badge` — Small label badges
- `.form-input` — Styled form inputs
- `.grid-bg` / `.dot-grid` — Background patterns

## 🔗 External Integrations

| Service | Purpose | Config Key |
|---|---|---|
| Resend | Contact form email delivery | `RESEND_API_KEY` |
| HubSpot | CRM lead capture | `HUBSPOT_ACCESS_TOKEN` |
| Mailchimp | Newsletter subscription | `MAILCHIMP_API_KEY` |

All integrations degrade gracefully if keys are not configured — the app works without them, with warnings in the server console.

## 🛡️ Security

- Security headers configured in `next.config.ts`
- Server-side validation on all API routes (Zod schemas)
- Rate limiting on contact form (5 requests / 15 min per IP)
- No secrets committed — use `.env.local` (gitignored)
- CSP headers configured

## 📦 Production Build

```bash
npm run build
npm run start
```

## 🧪 Testing

```bash
# Install Playwright
npx playwright install

# Run e2e tests
npx playwright test

# Run with UI
npx playwright test --ui
```

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables from `.env.example` in Vercel dashboard
4. Deploy

## 📝 Environment Variables

See `.env.example` for all required variables. Never commit `.env.local`.

## 📊 Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services, stats, case studies, testimonials, blog preview |
| `/about` | Company story, mission, values, leadership team |
| `/services` | All four service areas overview |
| `/services/life-sciences` | Life Sciences AI deep-dive |
| `/services/agentic-ai` | Agentic AI Systems deep-dive |
| `/services/enterprise-ai` | Enterprise AI Engineering |
| `/services/academy` | GenQuantaa Academy |
| `/case-studies` | Detailed client case studies with metrics |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post detail with full content |
| `/careers` | 6 open roles with apply flow |
| `/contact` | Contact form → Resend email + HubSpot CRM |

---

Built with ❤️ by GenQuantaa Engineering · Bangalore · Dubai · Singapore
