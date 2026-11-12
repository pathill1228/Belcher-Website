# Cedric Belcher — Marketplace Minister

The personal-brand website for Cedric N. Belcher, Sr. This first version is the
homepage, built to match the approved design in `references/Image Page.pdf`
and structured so the remaining pages (About, Ministry, Marketplace, Impact,
Resources, Speaking, Contact) can be added on top of the same design system.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, Server Components by default)
- TypeScript
- Tailwind CSS v4 (design tokens defined in CSS)
- `next/font` — Playfair Display (serif) and DM Sans (sans), self-hosted at build time
- `lucide-react` for line icons (the only runtime dependency beyond Next/React)
- ESLint (`eslint-config-next`)

No database, CMS, authentication, analytics or form backend is installed.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
npm run lint       # ESLint
npm run build      # production build (also type-checks)
npm run start      # serve the production build locally
```

## Project structure

```
references/              Source documents (design PDF, build spec, brand guide). Do not edit.
docs/IMAGES.md           Photography guide: every image slot, filename and crop.
public/images/           Where production photography goes (currently empty).
src/
  app/
    layout.tsx           Root layout: fonts, <Header>, <main>, <Footer>, default metadata
    page.tsx             Homepage: composes the section components
    globals.css          Design tokens, typography roles, spacing utilities
    fonts.ts             Font configuration (next/font)
    icon.svg             Favicon (interim "CB" mark)
  config/
    site.ts              Name, SEO title/description, tagline, site URL, share image
  data/
    links.ts             Every link destination + homepage anchor ids
    navigation.ts        Header nav, primary CTA, footer links, social profiles
    homepage.ts          All homepage copy, as typed objects
    images.ts            Image manifest (path, alt text, crop, ready flag)
  components/
    layout/              Header, Footer, Wordmark, SocialIcon
    home/                One component per homepage section
    ui/                  Reusable primitives (see below)
    seo/JsonLd.tsx       Structured-data script tag
  lib/
    seo.ts               pageMetadata() + Person / WebSite JSON-LD builders
    navigation.ts        Active-link and external-link helpers
    cn.ts                Class-name joiner
```

### Where things live

| I want to change… | Edit |
|---|---|
| Homepage wording | `src/data/homepage.ts` |
| Navigation items, footer links, social URLs | `src/data/navigation.ts` |
| Where a button or nav item goes | `src/data/links.ts` |
| Colours, type scale, section spacing | `src/app/globals.css` |
| Fonts | `src/app/fonts.ts` |
| Image paths, alt text, crops | `src/data/images.ts` |
| SEO title, description, domain, share image | `src/config/site.ts` |
| Icons | `src/components/ui/Icon.tsx` |

## Design system

**Colours** (`globals.css`, available as Tailwind utilities such as `bg-navy`, `text-gold-dark`):

| Token | Value | Use |
|---|---|---|
| `navy` | `#13233A` | Primary dark surface |
| `ivory` | `#F7F2E8` | Light surface, text on navy |
| `gold` | `#A7834D` | Rules, icons, accents |
| `charcoal` | `#2B2B2B` | Body text on ivory |
| `gray` | `#666666` | Secondary text |
| `navy-deep`, `navy-soft` | derived | Header/footer, placeholders |
| `gold-light` | derived | Gold **text on navy** (passes AA) |
| `gold-dark` | derived | Gold **text on ivory** (passes AA) |

Brand gold `#A7834D` fails contrast as small text on ivory, so use `gold-dark`
there and keep plain `gold` for rules and icons.

**Typography roles**: `type-display` (hero H1), `type-heading` (section headings),
`type-title` (panel headings), `type-eyebrow`, `type-label` (buttons/nav), `type-quote`.
All are fluid (`clamp()`).

**Spacing**: `section-y` (56px → 104px) and `section-y-compact`; content width is
capped by `<Container>` at 1312px.

**Primitives** (`src/components/ui`):

- `Container` — max-width + gutters
- `Section` — background tone + vertical rhythm
- `SectionHeading` — eyebrow, serif heading, italic intro
- `PageHero` — navy title band with the page `<h1>`, for interior pages
- `Cta` — outlined button or underlined text link
- `Icon` — named line icons
- `Media` — image or placeholder (see Images)
- `Lines` — deliberate line breaks that still read as one sentence
- `Reveal` — scroll-in fade (disabled under `prefers-reduced-motion`)

## Links and "Soon" labels

Only the homepage exists, so nothing links to a page that has not been built.

- Header navigation points at homepage anchors (`/#story`, `/#speaking`, …).
- Calls to action whose destination does not exist yet (Read the Manifesto,
  Read My Story, Learn More, Privacy Policy, …) are set to `null` in
  `src/data/links.ts`. The `Cta` component renders these as plain,
  non-clickable labels marked **Soon**.

When a page ships, change one line in `src/data/links.ts`, for example:

```ts
about: "/about",        // was anchor(sectionIds.story)
story: "/about",        // was null
```

Every button and nav item using that destination becomes a live link, and the
header's gold active-page indicator starts working for the new route.

## Images

All photography is still outstanding. See **[docs/IMAGES.md](docs/IMAGES.md)**
for each slot's subject, size and crop. To connect a photo: drop the file into
`public/images/…` at the listed path and set `ready: true` on its entry in
`src/data/images.ts`.

### Asset checklist

Nothing below has been supplied yet.

- [ ] Hero portrait — `public/images/hero/cedric-hero.jpg`
- [ ] Engage image — `public/images/method/engage.jpg`
- [ ] Enlighten image — `public/images/method/enlighten.jpg`
- [ ] Empower image — `public/images/method/empower.jpg`
- [ ] Liberia archival/personal — `public/images/story/liberia-childhood.jpg`
- [ ] Liberia archival/personal — `public/images/story/liberia-journey.jpg`
- [ ] Liberia education — `public/images/story/liberia-education.jpg`
- [ ] Current Liberia impact — `public/images/story/liberia-community.jpg`
- [ ] Current Liberia impact — `public/images/story/cedric-impact.jpg`
- [ ] Speaking image — `public/images/connect/speaking.jpg`
- [ ] Resources image — `public/images/connect/resources.jpg`
- [ ] Connection/movement image — `public/images/connect/movement.jpg`
- [ ] Social share card (1200×630) — `public/images/social/og-card.jpg`, then set `ogImage` in `src/config/site.ts`
- [ ] Final logo / CB monogram (the header wordmark, footer "CB" and `src/app/icon.svg` are typeset interim versions)
- [ ] Social URLs — fill in `url` values in `src/data/navigation.ts`
- [ ] Final production domain — set `NEXT_PUBLIC_SITE_URL`
- [ ] Morementum URL, contact/booking destination, privacy policy and terms text

## Adding a page

Example: `/about`.

1. Create `src/app/about/page.tsx`. The root layout supplies the header and footer.

   ```tsx
   import { Container } from "@/components/ui/Container";
   import { PageHero } from "@/components/ui/PageHero";
   import { Section } from "@/components/ui/Section";
   import { pageMetadata } from "@/lib/seo";

   export const metadata = pageMetadata({
     title: "About",
     description: "The story of Cedric N. Belcher, Sr.",
     path: "/about",
   });

   export default function AboutPage() {
     return (
       <>
         <PageHero eyebrow="About" title="From Survival to Significance" />
         <Section>
           <Container>{/* page content */}</Container>
         </Section>
       </>
     );
   }
   ```

2. Put the page's copy in `src/data/about.ts` and any section components in
   `src/components/about/`.
3. Point the relevant entries in `src/data/links.ts` at `/about`.
4. Add any new photographs to `src/data/images.ts`.

Keep one `<h1>` per page (`PageHero` renders it) and use `SectionHeading` for `<h2>`s.

## SEO

- Default metadata is set in `src/app/layout.tsx`; each page calls `pageMetadata()`.
- The homepage emits `Person` and `WebSite` JSON-LD (`src/lib/seo.ts`).
- Canonical URLs, Open Graph URLs and structured-data URLs are only emitted
  once `NEXT_PUBLIC_SITE_URL` is set. No placeholder domain is used.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Before launch | Production origin, e.g. `https://www.yourdomain.com` (no trailing slash). |

See `.env.example`. Future features (contact form, newsletter, analytics, CMS)
will add their own variables when they are built.

## Deployment

The project is a standard Next.js app with no host-specific configuration.

**GitHub**

```bash
git init
git add .
git commit -m "Initial homepage"
git remote add origin <your-repository-url>
git push -u origin main
```

**Vercel**

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Keep the detected defaults (framework: Next.js, build command: `next build`).
3. Add `NEXT_PUBLIC_SITE_URL` under **Settings → Environment Variables** when the domain is known.
4. Deploy.

**Netlify**

1. In Netlify, choose **Add new site → Import an existing project** and pick the repository.
2. Netlify detects Next.js and applies its Next.js runtime automatically. Build command: `npm run build`; leave the publish directory at the detected default.
3. Add `NEXT_PUBLIC_SITE_URL` under **Site configuration → Environment variables**.
4. Deploy.
# Belcher-Website
