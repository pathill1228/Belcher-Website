import { ClosingStatement } from "@/components/ui/ClosingStatement";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { EditorialSplit } from "@/components/ui/EditorialSplit";
import { FeatureColumns } from "@/components/ui/FeatureColumns";
import { HairlineList } from "@/components/ui/HairlineList";
import { ImageSplit } from "@/components/ui/ImageSplit";
import { PageHero } from "@/components/ui/PageHero";
import { Prose } from "@/components/ui/Prose";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { globalDevelopmentPage as page } from "@/data/global-development";
import { routes } from "@/data/links";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ ...page.meta, path: routes.globalDevelopment });

export default function GlobalDevelopmentPage() {
  const { hero, vision, liberia, focus, clothespins, closing } = page;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} />

      <EditorialSplit headingId="vision-heading" label={vision.label} heading={vision.heading}>
        <Prose paragraphs={vision.paragraphs} />
        <HairlineList items={vision.principles} label="Guiding principles" className="mt-10" />
      </EditorialSplit>

      <ImageSplit
        headingId="liberia-heading"
        label={liberia.label}
        heading={liberia.heading}
        image={liberia.image}
        tone="navy"
      >
        <Prose paragraphs={liberia.paragraphs} tone="dark" />
      </ImageSplit>

      <Section labelledBy="focus-heading">
        <Container>
          <SectionHeading id="focus-heading" eyebrow={focus.label}>
            {focus.heading}
          </SectionHeading>
          <FeatureColumns items={focus.items} className="mt-14" />
        </Container>
      </Section>

      <ImageSplit
        id={clothespins.id}
        headingId="clothespins-heading"
        label={clothespins.label}
        heading={clothespins.heading}
        image={clothespins.image}
        imageSide="right"
        tone="navy-deep"
      >
        <Prose paragraphs={clothespins.paragraphs} tone="dark" />
        <Cta href={clothespins.cta.href} className="mt-8">
          {clothespins.cta.label}
        </Cta>
      </ImageSplit>

      <ClosingStatement headingId="global-closing-heading" heading={closing.heading} body={closing.body}>
        <Cta href={closing.primaryCta.href}>{closing.primaryCta.label}</Cta>
        <Cta href={closing.secondaryCta.href} variant="text">
          {closing.secondaryCta.label}
        </Cta>
      </ClosingStatement>
    </>
  );
}
