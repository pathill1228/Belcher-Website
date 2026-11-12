import { story } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Cta } from "@/components/ui/Cta";
import { Media } from "@/components/ui/Media";
import { Lines } from "@/components/ui/Lines";

const HEADING_ID = "story-heading";

/*
 * Collage layout
 * – md and up: three columns (photo strip · copy · photo strip), as in the reference.
 * – mobile: copy first, then one lead image and three supporting images. The
 *   column wrappers dissolve (`contents`) so the photos join a simple 3-up grid.
 */
const COLUMN = "contents md:grid md:gap-0.5";
const SUPPORTING = "relative order-2 aspect-square md:order-none md:aspect-auto";
const SIZES_SUPPORTING = "(min-width: 768px) 20vw, 33vw";

export function Story() {
  const { images } = story;

  return (
    <section
      id={sectionIds.story}
      aria-labelledby={HEADING_ID}
      className="grid grid-cols-3 gap-0.5 bg-navy-deep text-ivory md:grid-cols-[minmax(0,0.7fr)_minmax(0,2.2fr)_minmax(0,1.1fr)]"
    >
      <div className={`${COLUMN} md:grid-rows-[3fr_2fr]`}>
        <Media image={images.childhood} sizes={SIZES_SUPPORTING} className={SUPPORTING} />
        <Media
          image={images.journey}
          sizes={SIZES_SUPPORTING}
          className="relative hidden md:block"
        />
      </div>

      <div className="order-first col-span-3 px-6 py-14 sm:px-8 md:order-none md:col-span-1 md:px-9 md:py-14 lg:px-12 xl:px-8">
        <h2 id={HEADING_ID} className="type-eyebrow text-gold-light">
          {story.label}
        </h2>
        <ol className="mt-4 flex max-w-[19rem] flex-wrap gap-x-1.5 text-lg leading-snug">
          {story.sequence.map((moment) => (
            <li key={moment}>{moment}</li>
          ))}
        </ol>

        <span aria-hidden="true" className="mt-6 block h-px w-10 bg-gold-light" />

        <p className="type-title mt-6 xl:text-2xl">
          <Lines lines={story.statement} />
        </p>
        <p className="mt-3 text-base leading-snug font-bold tracking-[0.06em] text-gold-light uppercase">
          <Lines lines={story.response} />
        </p>

        <Cta href={story.cta.href} className="mt-8">
          {story.cta.label}
        </Cta>
      </div>

      <div className={`${COLUMN} md:grid-rows-3`}>
        <Media image={images.education} sizes={SIZES_SUPPORTING} className={SUPPORTING} />
        <Media
          image={images.community}
          sizes="(min-width: 768px) 20vw, 100vw"
          className="relative order-1 col-span-3 aspect-16/10 md:order-none md:col-span-1 md:aspect-auto"
        />
        <Media image={images.impact} sizes={SIZES_SUPPORTING} className={SUPPORTING} />
      </div>
    </section>
  );
}
