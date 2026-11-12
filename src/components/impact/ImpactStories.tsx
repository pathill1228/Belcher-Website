import { Cta } from "@/components/ui/Cta";
import { Media } from "@/components/ui/Media";
import type { ImpactStory } from "@/data/impact";

type ImpactStoriesProps = {
  stories: readonly ImpactStory[];
};

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

/**
 * Verified impact stories. Renders nothing while the list is empty, so the
 * page never shows placeholder cards or invented outcomes.
 */
export function ImpactStories({ stories }: ImpactStoriesProps) {
  if (stories.length === 0) return null;

  return (
    <ul className="mt-14 grid gap-x-10 gap-y-12 text-left md:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <li key={story.title}>
          <article>
            {story.image && (
              <Media image={story.image} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="aspect-4/3" />
            )}
            <p className="type-eyebrow mt-5 text-gold-dark">
              {[story.category, story.location].filter(Boolean).join(" · ")}
            </p>
            <h3 className="mt-2 font-serif text-xl tracking-[0.03em] text-navy uppercase">{story.title}</h3>
            {story.publishedDate && (
              <p className="mt-1 text-sm text-gray">
                <time dateTime={story.publishedDate}>{dateFormat.format(new Date(story.publishedDate))}</time>
              </p>
            )}
            <p className="mt-3 leading-relaxed">{story.summary}</p>
            {story.verifiedOutcome && (
              <p className="mt-3 border-l border-gold pl-4 font-semibold text-navy">{story.verifiedOutcome}</p>
            )}
            {story.url && (
              <Cta href={story.url} variant="text" tone="light" className="mt-2">
                Read more
              </Cta>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
