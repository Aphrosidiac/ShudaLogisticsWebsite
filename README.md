# Shuda Logistics — 速达货运有限公司

Landing page website for **Shuda Logistics**, a Malaysian freight company running daily routes between Johor, Malacca, and Kuala Lumpur.

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll reveals, spring animations, route path drawing
- **GSAP** — installed, available for timeline sequences

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Page assembly
│   └── globals.css       # Global styles + keyframe animations
└── components/
    ├── Navbar.tsx         # Sticky frosted-glass nav with scroll morph
    ├── Hero.tsx           # Truck drive-in, speed lines, rotating headline
    ├── StatsBar.tsx       # Odometer counters (scroll-triggered)
    ├── Services.tsx       # 4 service cards with 3D magnetic tilt
    ├── Routes.tsx         # Animated SVG route map (Johor → Malacca → KL)
    ├── WhyUs.tsx          # 6 trust pillars on dark background
    ├── About.tsx          # Company info + floating logo
    ├── Testimonials.tsx   # 3 customer reviews
    ├── Contact.tsx        # WhatsApp enquiry form
    └── Footer.tsx         # CTA banner + truck easter egg
public/
└── Logo/
    ├── Shuda Logistics Original.png
    ├── Shuda Logistics Transparent.png
    ├── Shuda Logistics White Logo Transparent.png
    └── Shuda Logistics Black and White.png
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Business Details

| Field | Value |
|---|---|
| Company | 速达货运有限公司 (Shuda Logistics) |
| License | 1489547.W |
| WhatsApp | +60 12-723 9510 |
| Hours | Always Open · 24/7 |
| Address | No. 16, Jalan Mutiara Perdana 1, Taman Mutiara Perdana, 83000 Batu Pahat, Johor |
| Routes | Johor · Malacca · Kuala Lumpur |

---

## Deployment

```bash
npm run build   # production build
```

Deploy to Vercel by connecting the repo — zero config needed with Next.js.
