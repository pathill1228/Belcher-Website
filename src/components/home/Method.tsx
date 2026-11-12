import { method } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";

const HEADING_ID = "method-heading";

/** Engage. Enlighten. Empower. — the signature three-panel band. */
export function Method() {
  return (
    <section
      id={sectionIds.method}
      aria-labelledby={HEADING_ID}
      className="bg-navy-deep text-ivory"
    >
      <h2 id={HEADING_ID} className="sr-only">
        {method.heading}
      </h2>
      <ol className="grid lg:grid-cols-3">
        {method.steps.map((step, index) => (
          <li
            key={step.title}
            className="relative isolate border-ivory/20 not-first:border-t lg:not-first:border-t-0 lg:not-first:border-l"
          >
            <Media
              image={step.image}
              sizes="(min-width: 1024px) 34vw, 100vw"
              fill
              caption="bottom-right"
              className="-z-10"
            />
            {/* Keeps copy legible once photography sits behind it. */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-deep/70" />

            <Reveal
              delay={index * 120}
              className="mx-auto max-w-md px-6 pt-14 pb-20 sm:px-8 lg:max-w-none lg:px-10 lg:pt-16 xl:px-14"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-light font-serif text-xl text-gold-light"
                >
                  {step.number}
                </span>
                <h3 className="font-serif text-[clamp(1.75rem,1.4rem+1.2vw,2.375rem)] leading-none tracking-[0.03em] uppercase">
                  {step.title}
                </h3>
              </div>
              <div className="mt-6 flex gap-5">
                <Icon name={step.icon} className="mt-0.5 size-9 shrink-0 text-gold-light" />
                <div className="max-w-[19rem]">
                  <p className="font-semibold leading-snug">{step.lead}</p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/85">{step.body}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
