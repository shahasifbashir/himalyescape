# Himalayan Escapes — Kashmir & Ladakh Tour & Travel Website

A blazing-fast, fully SEO-optimized, **config-driven** travel website built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Ships
**zero JavaScript by default**, so pages load instantly.

## ✨ Highlights

- ⚡ **Fast** — static HTML, inlined critical CSS, lazy-loaded images, near-zero JS.
- 🔍 **SEO-ready** — per-page meta tags, Open Graph + Twitter cards, JSON-LD
  structured data (`TravelAgency`, `TouristTrip`), auto-generated `sitemap.xml`
  and `robots.txt`, canonical URLs.
- 🧩 **Highly configurable** — all business details live in ONE file.
- 💬 Floating WhatsApp button + social links (Instagram, Facebook, YouTube…).
- 🖼️ Free open-source imagery (Unsplash) — swap URLs anytime.
- 📱 Fully responsive & accessible (skip links, ARIA labels, keyboard nav).

## 🚀 Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start local dev server at localhost:4321 |
| `npm run build`   | Build production site to `./dist/`       |
| `npm run preview` | Preview the production build locally     |

## 🛠️ How to customise (no coding needed)

Everything is edited through plain text files. The most important ones:

### 1. Business details — `src/config/site.ts`
Your **single source of truth**. Change name, tagline, email, phone, WhatsApp
number, address, social links, navigation, SEO defaults and brand colours here.
Every page updates automatically.

```ts
name: "Himalayan Escapes",
contact: {
  email: "hello@himalayanescapes.example",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",   // digits only, with country code
},
socials: [
  { label: "Instagram", href: "https://instagram.com/yourhandle", icon: "instagram" },
  // add/remove freely
],
theme: { primary: "#0f766e", accent: "#f59e0b" },  // brand colours
```

### 2. Tour packages — `src/data/packages.ts`
Add/edit/remove tour packages. Set `featured: true` to show one on the homepage.

### 3. Destinations — `src/data/destinations.ts`
Content for the Kashmir & Ladakh pages (intro, best time, top attractions).

### 4. Testimonials — `src/data/testimonials.ts`
Customer reviews shown on the homepage.

## ✅ Before going live (checklist)

1. Set your real domain in `src/config/site.ts` → `url`.
2. Update `public/robots.txt` sitemap URL to match your domain.
3. Add a social share image at `public/og-default.jpg` (1200×630px recommended).
4. Connect the contact form (`src/pages/contact.astro`) to a backend such as
   [Web3Forms](https://web3forms.com), [Formspree](https://formspree.io) or
   Netlify Forms — just change the form `action`.
5. (Optional) Replace Unsplash image URLs with your own photos. For maximum
   performance, drop files in `public/` and reference them as `/my-photo.jpg`,
   or use Astro's `<Image />` component with local `src/assets` images.

## 🌐 Deploy

The site is fully static — host it free on **Netlify, Vercel, Cloudflare Pages
or GitHub Pages**. Just point the platform at this repo; build command
`npm run build`, output directory `dist`.

## 📁 Project structure

```
src/
├── config/site.ts        ← ALL business variables (edit this first)
├── data/                 ← packages, destinations, testimonials
├── components/           ← Header, Footer, SEO, cards, icons, WhatsApp button
├── layouts/BaseLayout    ← shared page shell (SEO + theme injection)
├── pages/                ← index, packages, about, contact, destinations/[slug]
└── styles/global.css     ← Tailwind + brand tokens
public/                   ← robots.txt, favicon, static images
```
