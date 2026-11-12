import { connect } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { Lines } from "@/components/ui/Lines";

const HEADING_ID = "connect-heading";

/** Speaking / Resources / Connection — the three closing conversion cards. */
export function Connect() {
  return (
    <Section id={sectionIds.connect} labelledBy={HEADING_ID} spacing="none" className="pb-10 lg:pb-12">
      <Container>
        <h2 id={HEADING_ID} className="sr-only">
          {connect.heading}
        </h2>
        <ul className="grid gap-0.5 xl:grid-cols-3">
          {connect.cards.map((card) => (
            <li
              key={card.id}
              id={card.id}
              className="group relative isolate flex flex-col overflow-hidden bg-navy-deep text-ivory sm:min-h-64 sm:flex-row"
            >
              {/* Image: a strip above the copy on mobile, the full card background from sm up. */}
              <div className="relative -z-10 h-36 overflow-hidden sm:absolute sm:inset-0 sm:h-auto">
                <Media
                  image={card.image}
                  sizes="(min-width: 1280px) 33vw, 100vw"
                  fill
                  caption="bottom-left"
                  className="transition-transform duration-500 ease-brand group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                {/* Darkens the text side so copy stays legible over photography. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 hidden bg-linear-to-r from-navy-deep/10 via-navy-deep/85 via-45% to-navy-deep transition-colors duration-500 group-hover:from-navy-deep/30 sm:block"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:ml-auto sm:w-1/2 sm:pr-5 sm:pl-0 xl:w-[72%] xl:pr-4">
                <h3 className="font-serif text-xl leading-tight tracking-[0.03em] uppercase xl:text-lg">
                  <Lines lines={card.headline} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/85">{card.body}</p>
                <div className="mt-4">
                  <Cta href={card.cta.href} className="px-4">
                    {card.cta.label}
                  </Cta>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
