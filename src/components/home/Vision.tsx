import { vision } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Cta } from "@/components/ui/Cta";
import { RhythmRow } from "@/components/ui/RhythmRow";
import { Lines } from "@/components/ui/Lines";

const HEADING_ID = "vision-heading";

/**
 * The Vision — typography carries the section. The headline scales with the
 * section's own width (container units), so it holds its line breaks whether
 * the band is full-width or sharing a row with the story.
 */
export function Vision() {
  return (
    <section
      id={sectionIds.vision}
      aria-labelledby={HEADING_ID}
      className="section-y @container flex items-center bg-navy px-6 text-ivory sm:justify-center sm:px-8 sm:text-center"
    >
      <div className="flex flex-col items-start sm:items-center">
        <p className="type-eyebrow text-gold-light">{vision.label}</p>
        <h2
          id={HEADING_ID}
          className="mt-4 font-serif text-[clamp(1.875rem,4.6cqi,3.5rem)] leading-[1.14] tracking-[0.015em] uppercase"
        >
          <Lines lines={vision.headline} lineClassName="sm:block" />
        </h2>

        <div aria-hidden="true" className="mt-7 flex w-full max-w-md items-center gap-4">
          <span className="h-px w-10 bg-gold sm:w-auto sm:flex-1" />
          <span className="size-1.5 rotate-45 bg-gold-light" />
          <span className="hidden h-px flex-1 bg-gold sm:block" />
        </div>

        <p className="mt-6 text-lg leading-snug font-semibold text-gold-light">
          <Lines lines={vision.clarifier} />
        </p>

        <RhythmRow items={vision.pairings} className="mt-10" />

        <Cta href={vision.cta.href} className="mt-10">
          {vision.cta.label}
        </Cta>
      </div>
    </section>
  );
}
