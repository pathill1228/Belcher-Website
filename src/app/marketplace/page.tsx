import { ClosingStatement } from "@/components/ui/ClosingStatement";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { EditorialSplit } from "@/components/ui/EditorialSplit";
import { FeatureColumns } from "@/components/ui/FeatureColumns";
import { HairlineList } from "@/components/ui/HairlineList";
import { ImageSplit } from "@/components/ui/ImageSplit";
import { JumpNav } from "@/components/ui/JumpNav";
import { Lines } from "@/components/ui/Lines";
import { NumberedList } from "@/components/ui/NumberedList";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { PullQuote } from "@/components/ui/PullQuote";
import { RhythmRow } from "@/components/ui/RhythmRow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { vision } from "@/data/homepage";
import { routes } from "@/data/links";
import { marketplacePage as page } from "@/data/marketplace";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...page.meta, path: routes.marketplace });

export default function MarketplacePage() {
  const { hero, calling, ministry, marketplace, spheres, method, closing } = page;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} text={hero.text} quoted />
      <JumpNav links={page.jumpLinks} />

      <EditorialSplit headingId="calling-heading" label={calling.label} heading={calling.heading}>
        <Prose paragraphs={calling.paragraphs} />
        <PullQuote className="mt-10">{calling.quote}</PullQuote>
      </EditorialSplit>

      <ImageSplit
        id={ministry.id}
        headingId="ministry-heading"
        label={ministry.label}
        heading={ministry.heading}
        image={ministry.image}
        tone="navy"
      >
        <Prose paragraphs={ministry.paragraphs} tone="dark" />
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {ministry.focus.map((item) => (
            <div key={item.title} className="border-t border-ivory/15 pt-4">
              <dt className="type-label text-gold-light">{item.title}</dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ivory/80">{item.body}</dd>
            </div>
          ))}
        </dl>
      </ImageSplit>

      <ImageSplit
        id={marketplace.id}
        headingId="marketplace-heading"
        label={marketplace.label}
        heading={marketplace.heading}
        image={marketplace.image}
        imageSide="right"
      >
        <Prose paragraphs={marketplace.paragraphs} />
        <PullQuote className="mt-10">{marketplace.quote}</PullQuote>
        <HairlineList items={marketplace.focus} label="Marketplace focus" className="mt-10" />
      </ImageSplit>

      {/* Connects the marketplace to the brand vision. */}
      <section aria-label="The vision" className="bg-ivory pb-[clamp(3.5rem,2.4rem+5vw,6.5rem)]">
        <Container>
          <div className="border border-gold/50 px-6 py-10 text-center sm:px-12">
            <p className="type-eyebrow text-gold-dark">The Vision</p>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-snug tracking-[0.015em] text-navy uppercase">
              {marketplace.vision.statement}
            </p>
            <p className="mt-4 font-semibold text-gold-dark">
              <Lines lines={marketplace.vision.clarifier} lineClassName="sm:block" />
            </p>
          </div>
        </Container>
      </section>

      <Section id="spheres" labelledBy="spheres-heading" tone="navy">
        <Container>
          <SectionHeading
            id="spheres-heading"
            eyebrow={spheres.label}
            intro={spheres.intro}
            tone="dark"
            className="max-w-3xl"
          >
            {spheres.heading}
          </SectionHeading>
          <FeatureColumns items={spheres.items} tone="dark" className="mt-14" />
        </Container>
      </Section>

      <EditorialSplit id="method" headingId="method-heading" label={method.label} heading={method.heading}>
        <p className="type-quote text-charcoal">{method.intro}</p>
        <NumberedList items={method.items} className="mt-8" />
        <PullQuote className="mt-10">{method.closing}</PullQuote>
      </EditorialSplit>

      <ClosingStatement
        headingId="marketplace-closing-heading"
        heading={closing.heading}
        body={closing.body}
        feature={<RhythmRow items={vision.pairings} className="mx-auto" />}
      >
        <Cta href={closing.primaryCta.href}>{closing.primaryCta.label}</Cta>
        <Cta href={closing.secondaryCta.href} variant="text">
          {closing.secondaryCta.label}
        </Cta>
      </ClosingStatement>
    </>
  );
}
