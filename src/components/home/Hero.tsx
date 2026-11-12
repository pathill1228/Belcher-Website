import { siteConfig } from "@/config/site";
import { hero } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { Media } from "@/components/ui/Media";
import { Lines } from "@/components/ui/Lines";

export function Hero() {
  return (
    <section
      id={sectionIds.top}
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-navy text-ivory"
    >
      <Container className="relative z-10 lg:flex lg:min-h-[clamp(34rem,41vw,43rem)] lg:items-center">
        <div className="py-14 sm:py-16 lg:w-1/2 lg:py-20">
          <p className="type-eyebrow text-base text-gold-light sm:text-lg">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="type-display mt-3">
            <Lines lines={hero.headline} />
          </h1>

          <p className="mt-6 text-xl leading-snug sm:text-2xl">
            {siteConfig.tagline.map((line) => (
              <span key={line.emphasis} className="block">
                <strong className="font-semibold text-gold-light">{line.emphasis}</strong>{" "}
                {line.rest}{" "}
              </span>
            ))}
          </p>

          <span aria-hidden="true" className="mt-7 block h-px w-10 bg-gold-light" />

          <blockquote className="type-quote mt-6 text-ivory/95">
            <p>
              {hero.signature.map((line, index) => (
                <span key={line} className="sm:block">
                  {index === 0 && "“"}
                  {line}
                  {index === hero.signature.length - 1 ? "”" : " "}
                </span>
              ))}
            </p>
          </blockquote>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2">
            <Cta href={hero.primaryCta.href}>{hero.primaryCta.label}</Cta>
            <Cta href={hero.secondaryCta.href} variant="text">
              {hero.secondaryCta.label}
            </Cta>
          </div>
        </div>
      </Container>

      {/* Portrait: stacked beneath the copy on small screens, bleeding right on desktop. */}
      <div className="relative aspect-4/5 max-h-[36rem] w-full sm:aspect-16/10 lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:max-h-none lg:w-[56%]">
        <Media image={hero.image} sizes="(min-width: 1024px) 56vw, 100vw" fill priority />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-navy to-transparent lg:block"
        />
      </div>
    </section>
  );
}
