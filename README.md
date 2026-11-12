# Cedric Belcher — Marketplace Minister

The personal-brand website for Cedric N. Belcher, Sr. The homepage matches the
approved design in `references/Image Page.pdf`; four inner pages extend it using
the same design system. About, Resources, Speaking and Contact are still to come.

## Pages

| Route | Page | Relationship to the homepage |
|---|---|---|
| `/` | Homepage | — |
| `/marketplace` | Ministry & Marketplace (one page, two sections: `#ministry`, `#marketplace`) | Expands the "What is a Marketplace Minister?" definition, the three spheres and the method. Target of the Ministry and Marketplace cards. |
| `/morementum` | Morementum — Worship Before Work | Expands the Morementum card. Includes the planned daily prayer call. |
| `/impact` | Impact & Opportunity | Expands "From Survival to Significance" and the Impact card, including Clothespins, Inc. |
| `/global-development` | Global Development | Expands the Global Development card: the Liberia and Africa vision, with a link to Clothespins. |

There is deliberately no `/ministry` route: Ministry lives on `/marketplace#ministry`.

**Heroes.** The homepage keeps its split portrait hero. Every inner page uses
the shared centered `PageHero` (navy, gold eyebrow, serif headline, gold
divider, italic supporting line), so a change of section is obvious at a glance.

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
    marketplace/         /marketplace     (page.tsx composes shared components)
    morementum/          /morementum
    impact/              /impact
    global-development/  /global-development
    globals.css          Design tokens, typography roles, spacing utilities
    fonts.ts             Font configuration (next/font)
    icon.svg             Favicon (interim "CB" mark)
  config/
    site.ts              Name, SEO title/description, tagline, site URL, share image
    external.ts          Verified off-site URLs (Clothespins)
  data/
    links.ts             Routes, every link destination, section anchor ids
    navigation.ts        Header/mobile nav, primary CTA, footer links, socials
    homepage.ts          All homepage copy, as typed objects
    marketplace.ts       /marketplace copy
    morementum.ts        /morementum copy + prayer call configuration
    impact.ts            /impact copy, initiatives, impact stories
    global-development.ts  /global-development copy
    images.ts            Image manifest (path, alt text, crop, ready flag)
  components/
    layout/              Header, Footer, Wordmark, SocialIcon
    home/                One component per homepage section
    morementum/          PrayerCallDetails
    impact/              InitiativeList, ImpactStories, StorySequence
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
| Inner-page wording, headings, CTAs | `src/data/marketplace.ts`, `morementum.ts`, `impact.ts`, `global-development.ts` |
| Prayer call details | `prayerCall` in `src/data/morementum.ts` |
| Impact initiatives and stories | `initiatives` / `impactStories` in `src/data/impact.ts` |
| Clothespins link | `src/config/external.ts` |
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
- `PageHero` — the centered inner-page hero with the page `<h1>` (eyebrow, title lines, supporting text — `quoted` for Cedric's own words — optional emphasis line and CTAs)
- `Cta` — outlined button or underlined text link
- `Icon` — named line icons
- `Media` — image or placeholder (see Images)
- `Lines` — deliberate line breaks that still read as one sentence
- `Reveal` — scroll-in fade (disabled under `prefers-reduced-motion`)
- `EditorialSplit` — label + serif heading left, content right, gold hairline between
- `ImageSplit` — photograph beside a labelled block of copy; alternate sides down a page
- `FeatureColumns` — three (or six) icon-led columns with hairline dividers
- `NumberedList` — 01 / 02 / 03 editorial rows (used for Engage · Enlighten · Empower)
- `HairlineList` — short uppercase terms in two ruled columns
- `Prose`, `PullQuote` — inner-page body copy and set-off quotations
- `JumpNav` — "On this page" anchor links under a hero
- `RhythmRow` — Pray and build · Worship and work · Give and grow · Serve and lead
- `ClosingStatement` — the navy closing band that ends each inner page

## Navigation, links and "Soon" labels

Nothing links to a page that has not been built.

- **Header** (`primaryNav` in `src/data/navigation.ts`, used by both the
  desktop bar and the mobile menu): HOME `/` · ABOUT `/#story` ·
  MINISTRY & MARKETPLACE `/marketplace` · MOREMENTUM `/morementum` ·
  IMPACT `/impact` · GLOBAL DEVELOPMENT `/global-development`, plus the
  INVITE CEDRIC button (`/#speaking`), which serves as the contact action.
  ABOUT points at a homepage section until that page exists. Contact remains
  a link in the footer (`/#contact`).
- **Desktop vs. menu**: the full bar shows from 1280px wide; narrower screens
  use the ☰ menu, which lists the same six items with Invite Cedric at the top.
- **Active page**: worked out from the URL by `findActiveHref()` in
  `src/lib/navigation.ts`, never hard-coded per page. The current item gets
  gold text, a solid 2px gold underline and `aria-current="page"`; in the
  mobile menu, gold text and a gold dash. Hover is deliberately different
  (brighter text, thin ivory underline). Homepage anchors such as `/#contact`
  never count as active, so when About later points at a real route
  it highlights automatically.
- The homepage "One Calling. Different Places." cards also link to the four
  inner pages, and each inner page ends with links onward.
- Calls to action whose destination does not exist yet (Read the Manifesto,
  Read My Story, Explore the Vision, the speaking / resources / connect
  buttons, Privacy Policy, Terms of Use) are set to `null` in
  `src/data/links.ts`. The `Cta` component renders these as plain,
  non-clickable labels marked **Soon**.
- External web links open in a new tab; `tel:` and `mailto:` links are plain anchors.

When a page ships, change one line in `src/data/links.ts`, for example:

```ts
about: "/about",        // was anchor(sectionIds.story)
story: "/about",        // was null
```

Every button and nav item using that destination becomes a live link, and the
header's gold active-page indicator starts working for the new route.

### Prayer call (Morementum)

No phone number, meeting link, schedule or time zone has been confirmed, so
`/morementum` shows **"Prayer call details coming soon."** When details are
final, fill in `prayerCall` in `src/data/morementum.ts`:

```ts
export const prayerCall: PrayerCallConfig = {
  title: "Morementum Daily Prayer Call",
  description: "…",
  phoneNumber: "+1 (555) 010-0000", // shows a "Call in" button (tel: link)
  accessCode: "123456",             // optional
  meetingUrl: "https://…",          // shows a "Join online" button
  schedule: "Weekdays at 6:00 AM",
  timezone: "Central Time (CT)",
};
```

Join buttons only appear for the fields that are filled in.

### Impact initiatives and stories

`src/data/impact.ts` holds two typed lists:

- `initiatives` — currently only **Clothespins, Inc.**, the one initiative
  documented in the references. Fields: `title`, `description`, `category`,
  and optional `image`, `location`, `url`, `urlLabel`.
- `impactStories` — empty. Add verified stories with `title`, `summary`,
  `category` and optional `image`, `location`, `url`, `publishedDate`,
  `verifiedOutcome`. The grid only appears on `/impact` once the list has
  entries. Don't add estimated or unverified outcomes.

### Clothespins link

`externalLinks.clothespins` in `src/config/external.ts`
(`https://www.clothespins.org/`). It was supplied by the client; on 2026-11-12
`clothespins.org` redirected there and served the Clothespins site. Confirm with
Cedric's team before launch. Both `/impact` and `/global-development` use it.

## Deferred features

Intentionally **not** built yet: the Invite Cedric speaking inquiry form, a
Resources library or downloads, Stay Connected / newsletter / email
subscription, a blog, Morementum's independent website, donations, and pages
for About, Speaking, Resources, Contact, Privacy Policy and Terms of Use. The
homepage's existing CTAs for these keep their current behaviour (homepage
anchors or "Soon" labels).

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
- [ ] Preaching / teaching — `public/images/marketplace/ministry-teaching.jpg`
- [ ] Boardroom / mentoring — `public/images/marketplace/marketplace-mentoring.jpg`
- [ ] Clothespins logo or approved imagery — `public/images/impact/clothespins.jpg`
- [ ] Resources image — `public/images/connect/resources.jpg`
- [ ] Connection/movement image — `public/images/connect/movement.jpg`
- [ ] Social share card (1200×630) — `public/images/social/og-card.jpg`, then set `ogImage` in `src/config/site.ts`
- [ ] Final logo / CB monogram (the header wordmark, footer "CB" and `src/app/icon.svg` are typeset interim versions)
- [ ] Social URLs — fill in `url` values in `src/data/navigation.ts`
- [ ] Final production domain — set `NEXT_PUBLIC_SITE_URL`
- [ ] Morementum logo/visual asset (the page is typographic until one exists) and future website URL
- [ ] Morementum prayer call details (phone/link, schedule, time zone)
- [ ] Confirmation of the Clothespins URL
- [ ] Contact/booking destination, privacy policy and terms text

## Adding a page

Example: `/about`.

The four inner pages (`src/app/marketplace/page.tsx` etc.) are working
examples of this pattern.

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
         <PageHero eyebrow="About" title={["From Survival", "to Significance"]} />
         <Section>
           <Container>{/* page content */}</Container>
         </Section>
       </>
     );
   }
   ```

2. Put the page's copy in `src/data/about.ts` and any section components in
   `src/components/about/`.
3. Add the route to `routes` in `src/data/links.ts` and point the relevant
   entries (e.g. `about`, `story`) at it.
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
