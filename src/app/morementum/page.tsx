import { PrayerCallDetails } from "@/components/morementum/PrayerCallDetails";
import { ClosingStatement } from "@/components/ui/ClosingStatement";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { EditorialSplit } from "@/components/ui/EditorialSplit";
import { FeatureColumns } from "@/components/ui/FeatureColumns";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/data/links";
import { morementumPage as page, prayerCall } from "@/data/morementum";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...page.meta, path: routes.morementum });

export default function MorementumPage() {
  const { hero, about, philosophy, prayer, audience, closing } = page;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} quote={hero.quote} align="center" />

      <EditorialSplit headingId="about-heading" label={about.label} heading={about.heading}>
        <Prose paragraphs={about.paragraphs} />
        <p className="mt-8 max-w-[38rem] border-t border-gold/35 pt-5 text-sm leading-relaxed text-gray">
          {about.note}
        </p>
      </EditorialSplit>

      <Section labelledBy="philosophy-heading" tone="navy">
        <Container>
          <SectionHeading
            id="philosophy-heading"
            eyebrow={philosophy.label}
            intro={philosophy.intro}
            tone="dark"
          >
            {philosophy.heading}
          </SectionHeading>
          <FeatureColumns items={philosophy.items} tone="dark" className="mt-14" />
        </Container>
      </Section>

      <EditorialSplit id={prayer.id} headingId="prayer-heading" label={prayer.label} heading={prayer.heading}>
        <Prose paragraphs={prayer.paragraphs} />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {prayer.intentions.map((intention) => (
            <li key={intention} className="flex gap-3 text-[0.9375rem] leading-snug">
              <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-gold" />
              {intention}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <PrayerCallDetails
            call={prayerCall}
            pendingStatus={prayer.pendingStatus}
            pendingNote={prayer.pendingNote}
          />
        </div>
      </EditorialSplit>

      <EditorialSplit headingId="audience-heading" label={audience.label} heading={audience.heading} tone="navy-deep">
        <p className="type-quote text-ivory/90">{audience.intro}</p>
        <dl className="mt-8 border-t border-ivory/15">
          {audience.groups.map((group) => (
            <div
              key={group.title}
              className="grid gap-x-8 gap-y-1 border-b border-ivory/15 py-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]"
            >
              <dt className="font-serif text-lg tracking-[0.03em] uppercase">{group.title}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-ivory/80">{group.body}</dd>
            </div>
          ))}
        </dl>
      </EditorialSplit>

      <ClosingStatement
        headingId="morementum-closing-heading"
        label={closing.label}
        heading={closing.heading}
        body={closing.body}
      >
        <Cta href={closing.primaryCta.href}>{closing.primaryCta.label}</Cta>
        <Cta href={closing.secondaryCta.href} variant="text">
          {closing.secondaryCta.label}
        </Cta>
      </ClosingStatement>
    </>
  );
}
