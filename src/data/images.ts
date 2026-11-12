/**
 * Image manifest — the single source of truth for every photograph.
 *
 * No photography has been supplied yet, so every entry has `ready: false`
 * and the Media component renders a neutral placeholder in its place.
 *
 * To connect a real photograph:
 *   1. Save the file at the `src` path below, inside /public.
 *   2. Set `ready: true` and write a real `alt` description.
 *   3. Adjust `position` if the subject needs a different focal point.
 *
 * See docs/IMAGES.md for subject, orientation and size guidance.
 */

export type ImageAsset = {
  /** Path relative to /public where the production file belongs. */
  src: string;
  /** Flip to true once the file exists at `src`. */
  ready: boolean;
  /** Alt text. Use "" for purely decorative imagery. */
  alt: string;
  /** Short caption shown on the placeholder until the photo is supplied. */
  placeholder: string;
  /** Tailwind object-position utility controlling the crop focal point. */
  position?: string;
};

export const images = {
  hero: {
    src: "/images/hero/cedric-hero.jpg",
    ready: false,
    alt: "Cedric N. Belcher, Sr. seated in an executive office",
    placeholder: "Hero portrait",
    // Keeps forehead and chin in frame when the container gets narrow.
    position: "object-[60%_20%]",
  },

  method: {
    engage: {
      src: "/images/method/engage.jpg",
      ready: false,
      alt: "",
      placeholder: "Engage",
      position: "object-center",
    },
    enlighten: {
      src: "/images/method/enlighten.jpg",
      ready: false,
      alt: "",
      placeholder: "Enlighten",
      position: "object-center",
    },
    empower: {
      src: "/images/method/empower.jpg",
      ready: false,
      alt: "",
      placeholder: "Empower",
      position: "object-center",
    },
  },

  story: {
    childhood: {
      src: "/images/story/liberia-childhood.jpg",
      ready: false,
      alt: "",
      placeholder: "Childhood",
      position: "object-top",
    },
    journey: {
      src: "/images/story/liberia-journey.jpg",
      ready: false,
      alt: "",
      placeholder: "Liberia",
      position: "object-center",
    },
    education: {
      src: "/images/story/liberia-education.jpg",
      ready: false,
      alt: "",
      placeholder: "Education",
      position: "object-center",
    },
    community: {
      src: "/images/story/liberia-community.jpg",
      ready: false,
      alt: "",
      placeholder: "Students & community",
      position: "object-center",
    },
    impact: {
      src: "/images/story/cedric-impact.jpg",
      ready: false,
      alt: "",
      placeholder: "Impact today",
      position: "object-center",
    },
  },

  connect: {
    speaking: {
      src: "/images/connect/speaking.jpg",
      ready: false,
      alt: "",
      placeholder: "Speaking",
      position: "object-left",
    },
    resources: {
      src: "/images/connect/resources.jpg",
      ready: false,
      alt: "",
      placeholder: "Resources",
      position: "object-left",
    },
    movement: {
      src: "/images/connect/movement.jpg",
      ready: false,
      alt: "",
      placeholder: "Movement",
      position: "object-left",
    },
  },
} satisfies Record<string, ImageAsset | Record<string, ImageAsset>>;
