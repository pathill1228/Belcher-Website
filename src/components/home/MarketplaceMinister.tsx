import { definition } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { Lines } from "@/components/ui/Lines";

const HEADING_ID = "definition-heading";

export function MarketplaceMinister() {
  return (
    <Section id={sectionIds.marketplace} labelledBy={HEADING_ID} spacing="compact">
      <Container className="grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,2.4fr)] xl:items-center xl:gap-x-0">
        <h2 id={HEADING_ID} className="xl:self-start xl:pr-8">
          <span className="type-eyebrow mb-2 block text-gold-dark">{definition.label} </span>
          <span className="type-heading block text-navy xl:text-[2.125rem]">
            <Lines lines={definition.headline} />
          </span>
        </h2>

        <div className="xl:self-stretch xl:border-l xl:border-gold/35 xl:px-8">
          <div className="space-y-4 text-[0.9375rem] leading-relaxed">
            {definition.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Cta href={definition.cta.href} variant="text" tone="light" className="mt-3">
            {definition.cta.label}
          </Cta>
        </div>

        <div className="border-t border-gold/35 pt-8 md:col-span-2 xl:col-span-1 xl:border-t-0 xl:flex xl:flex-col xl:justify-center xl:self-stretch xl:border-l xl:pt-0 xl:pl-8">
          <ul className="grid gap-y-6 sm:grid-cols-3 sm:divide-x sm:divide-gold/35">
            {definition.spheres.map((sphere) => (
              <li
                key={sphere.name}
                className="flex items-center gap-5 sm:flex-col sm:gap-3 sm:px-2 sm:text-center"
              >
                <Icon name={sphere.icon} className="size-11 shrink-0 text-gold" />
                <div>
                  <h3 className="text-sm font-bold tracking-[0.05em] text-navy uppercase">
                    {sphere.name}
                  </h3>
                  <p className="mt-1 text-[0.9375rem] leading-snug sm:mx-auto sm:max-w-[9rem]">
                    {sphere.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[0.9375rem] leading-relaxed sm:mx-auto sm:max-w-xl sm:text-center">
            {definition.closing}
          </p>
        </div>
      </Container>
    </Section>
  );
}
