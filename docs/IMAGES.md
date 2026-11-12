# Photography guide

No photography has been supplied yet. Every image slot on the homepage currently
renders a neutral CSS placeholder (a navy panel with a thin gold frame and a
small caption). Nothing on the site references a file that does not exist.

## How to add a photograph

1. Export the photo as a high-quality **JPG** (or WebP/AVIF) at the size listed below.
2. Save it at the exact path in the table, inside `/public`.
3. Open `src/data/images.ts`, find the matching entry and:
   - set `ready: true`
   - write a real `alt` description (or leave `""` if the image is purely decorative)
   - adjust `position` (a Tailwind `object-*` class) if the crop needs a different focal point
4. Run `npm run dev` and check the crop at mobile, tablet and desktop widths.

`next/image` then handles responsive sizes, WebP/AVIF conversion and lazy loading
automatically. Only the hero is preloaded.

If you prefer a different filename or format, change `src` in `src/data/images.ts` to match.

## Required images

| # | File (inside `/public`) | Subject | Orientation / min. size | Where it appears |
|---|---|---|---|---|
| 1 | `images/hero/cedric-hero.jpg` | Cedric in elevated business attire, seated or standing in a dark office / architectural setting. Confident eye contact. Leader and statesman, not pulpit. | Landscape 3:2, 2400×1600. Keep Cedric in the **right two-thirds** with calm, dark negative space on the left; leave headroom above the forehead. | Hero. Fills the right ~56% of the hero on desktop (left edge fades into navy). On mobile it is cropped to 4:5 beneath the copy, so the face must sit in the upper-middle of the frame. |
| 2 | `images/method/engage.jpg` | Cedric in conversation — greeting, listening, relationship. | Landscape 3:2, 1600×1067 | Background of the **Engage** panel (darkened behind text). |
| 3 | `images/method/enlighten.jpg` | Cedric teaching or presenting ideas. | Landscape 3:2, 1600×1067 | Background of the **Enlighten** panel. |
| 4 | `images/method/empower.jpg` | Cedric consulting / working with leaders at a table. | Landscape 3:2, 1600×1067 | Background of the **Empower** panel. |
| 5 | `images/story/liberia-childhood.jpg` | Archival or personal childhood photo (Cedric, family, or era-appropriate personal image). | Portrait 3:4, 900×1200 | Story collage, top-left (tall). |
| 6 | `images/story/liberia-journey.jpg` | Liberia — a road, landscape, or return-visit moment. | Square-ish 1:1, 900×900 | Story collage, bottom-left. Desktop/tablet only. |
| 7 | `images/story/liberia-education.jpg` | A school, campus or place of learning connected to the story. | Landscape 4:3, 1200×900 | Story collage, top-right. |
| 8 | `images/story/liberia-community.jpg` | Students / community in Liberia today — joyful, dignified. | Landscape 16:10, 1600×1000 | Story collage, middle-right. **Lead image on mobile** (full width). |
| 9 | `images/story/cedric-impact.jpg` | Present-day Cedric with students or community members. | Landscape 4:3, 1200×900 | Story collage, bottom-right. |
| 10 | `images/connect/speaking.jpg` | Cedric speaking at an event (stage / lectern, audience context). | Landscape 3:2, 1400×933. Subject on the **left half**. | "Bring Cedric to your next gathering" card. |
| 11 | `images/connect/resources.jpg` | Cedric reading or writing; books, notes, study. | Landscape 3:2, 1400×933. Subject on the **left half**. | "Resources to think, grow, build" card. |
| 12 | `images/connect/movement.jpg` | Wide, hopeful landscape or gathering — horizon, sunrise, community. | Landscape 3:2, 1400×933 | "Stay connected" card. |
| 13 | `images/social/og-card.jpg` | Branded share card: portrait, name, "Marketplace Minister". | 1200×630 exactly | Link previews. After adding, set `ogImage: "/images/social/og-card.jpg"` in `src/config/site.ts`. |

## Art direction (from the brand guide)

- Authentic photography only — no stock people, no AI-generated likenesses.
- Liberia imagery must be human, dignified and story-rich. Never exploitative poverty imagery.
- Wealth is never shown as luxury or status.
- Text sits over the method panels and the right side of the connect cards; the
  components apply a dark overlay there, so those areas of the photo should be calm.
