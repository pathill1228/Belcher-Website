import { ImpactStories } from "@/components/impact/ImpactStories";
import { InitiativeList } from "@/components/impact/InitiativeList";
import { StorySequence } from "@/components/impact/StorySequence";
import { ClosingStatement } from "@/components/ui/ClosingStatement";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { EditorialSplit } from "@/components/ui/EditorialSplit";
import { FeatureColumns } from "@/components/ui/FeatureColumns";
import { Lines } from "@/components/ui/Lines";
import { NumberedList } from "@/components/ui/NumberedList";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactPage as page, impactStories, initiatives } from "@/data/impact";
import { routes } from "@/data/links";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...page.meta, path: routes.impact });

export default function ImpactPage() {
  const { hero, story, areas, philosophy, future, closing } = page;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} text={hero.text} quoted />

      <EditorialSplit
        headingId="story-heading"
        label={story.label}
        heading={story.heading}
        aside={<StorySequence steps={story.sequence} />}
      >
        <Prose paragraphs={story.paragraphs} />
      </EditorialSplit>

      <Section labelledBy="areas-heading" tone="navy">
        <Container>
          <SectionHeading id="areas-heading" eyebrow={areas.label} tone="dark">
            {areas.heading}
          </SectionHeading>
          <FeatureColumns items={areas.items} tone="dark" className="mt-14" />
        </Container>
      </Section>

      <Section id={page.initiatives.id} labelledBy="initiatives-heading">
        <Container>
          <div className="grid gap-x-16 gap-y-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
            <SectionHeading id="initiatives-heading" eyebrow={page.initiatives.label}>
              <Lines lines={page.initiatives.heading} lineClassName="sm:block" />
            </SectionHeading>
            <p className="type-quote text-charcoal lg:pb-1">{page.initiatives.intro}</p>
          </div>
          <div className="mt-10">
            <InitiativeList initiatives={initiatives} />
          </div>
        </Container>
      </Section>

      <EditorialSplit
        headingId="philosophy-heading"
        label={philosophy.label}
        heading={philosophy.heading}
        tone="navy-deep"
      >
        <Prose paragraphs={philosophy.paragraphs} tone="dark" />
        <NumberedList items={philosophy.method} tone="dark" className="mt-8" />
      </EditorialSplit>

      <Section labelledBy="future-heading">
        <Container className="text-center">
          <p className="type-eyebrow text-gold-dark">{future.label}</p>
          <h2
            id="future-heading"
            className="mx-auto mt-4 max-w-3xl font-serif text-[clamp(1.75rem,1.3rem+1.8vw,2.75rem)] leading-[1.15] tracking-[0.015em] text-navy uppercase"
          >
            <Lines lines={future.heading} lineClassName="sm:block" />
          </h2>
          <span aria-hidden="true" className="mx-auto mt-7 block h-px w-10 bg-gold" />
          <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed">{future.body}</p>
          <ImpactStories stories={impactStories} />
        </Container>
      </Section>

      <ClosingStatement headingId="impact-closing-heading" heading={closing.heading} body={closing.body}>
        <Cta href={closing.primaryCta.href}>{closing.primaryCta.label}</Cta>
        <Cta href={closing.secondaryCta.href} variant="text">
          {closing.secondaryCta.label}
        </Cta>
      </ClosingStatement>
    </>
  );
}
