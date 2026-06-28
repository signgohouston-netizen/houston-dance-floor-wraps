# Houston Dance Floor Wraps

A modern, SEO-optimized, lead-generating website for **Houston Dance Floor Wraps** — custom vinyl dance floor wraps for weddings, parties & corporate events. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

🌐 Production domain: `houstondancefloorwraps.com`
📞 Phone: 832-450-9200 · 📍 Based in Houston, TX (nationwide shipping)

---

## ✨ Features

- **Fast, modern UI** — dark theme matching the brand (pink/sunset/chrome), responsive, animated.
- **Lead generation** — quote forms on the home, contact, and every service-area page, posting to `/api/lead` (honeypot spam protection included).
- **Pricing calculator** — interactive instant-estimate tool that pre-fills the contact form.
- **Service-area pages** — a unique, SEO-rich page for every market:
  - Texas (local install): Houston, Austin, San Antonio, Dallas, Fort Worth
  - Nationwide (shipped kits): Oklahoma, Utah, Louisiana, Florida, Georgia, Colorado, Missouri, Ohio, California, Illinois, Arizona, Kansas, Tennessee
- **Blog** — index + individual article pages, ready for new posts.
- **SEO built-in** — per-page metadata, Open Graph, `sitemap.xml`, `robots.txt`, web manifest, and JSON-LD structured data (LocalBusiness, Service, FAQ, Breadcrumb, BlogPosting).

---

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## 📥 Receiving leads

Out of the box, every form submission is validated and logged to the server console, so nothing is lost. To send leads to your inbox or CRM, copy `.env.example` to `.env.local` and set **one** option:

**Email (Resend):**
```
RESEND_API_KEY=re_xxx
LEAD_TO_EMAIL=htxdancefloorwraps@gmail.com
```

**Webhook (Zapier / Make / CRM):**
```
LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxx/yyyy
```

Logic lives in [`app/api/lead/route.ts`](app/api/lead/route.ts).

---

## ✏️ Editing content

| What | Where |
| --- | --- |
| Phone, email, hours, pricing rates | `lib/site.ts` |
| Service areas (add/edit cities & states) | `lib/serviceAreas.ts` |
| Blog posts | `lib/blog.ts` |
| FAQs | `lib/faq.ts` |
| Colors & theme | `tailwind.config.ts` + `app/globals.css` |
| Logo | `public/logo.png` |

The site URL used for canonical links, sitemap, and structured data is set in `lib/site.ts` (`url`). Update it if your domain changes.

### Adding a new service area
Add an object to `serviceAreas` in `lib/serviceAreas.ts`. Its page, sitemap entry, and footer link are generated automatically.

### Adding a blog post
Add an object to `blogPosts` in `lib/blog.ts`. The post page and listing are generated automatically.

---

## 🌍 Deploying

This deploys cleanly to **Vercel** (recommended), Netlify, or any Node host.

1. Push the repo to GitHub.
2. Import it on [vercel.com](https://vercel.com).
3. Add your env vars (optional, for leads).
4. Point `houstondancefloorwraps.com` at the deployment.

After going live, submit `https://houstondancefloorwraps.com/sitemap.xml` in **Google Search Console**.

---

## 📁 Project structure

```
app/
  layout.tsx            # Root layout, SEO defaults, header/footer, JSON-LD
  page.tsx              # Homepage
  services/             # Services page
  gallery/              # Gallery / design ideas
  pricing/              # Pricing calculator page
  contact/              # Contact + quote form
  about/                # About page
  faq/                  # FAQ page
  service-areas/        # Index + [slug] dynamic area pages
  blog/                 # Index + [slug] dynamic post pages
  api/lead/route.ts     # Lead capture endpoint
  sitemap.ts robots.ts manifest.ts not-found.tsx
components/             # Header, Footer, LeadForm, PricingCalculator, Sections
lib/                    # site, serviceAreas, blog, faq, jsonld
public/logo.png         # Brand logo
```
