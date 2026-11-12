import { expressions } from "@/data/homepage";
import { sectionIds } from "@/data/links";
import { Container } from "@/components/ui/Container";
import { Cta } from "@/components/ui/Cta";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HEADING_ID = "expressions-heading";

/** One Calling. Different Places. — five equal-weight expressions of one identity. */
export function Expressions() {
  return (
    <Section id={sectionIds.expressions} labelledBy={HEADING_ID}>
      <Container>
        <SectionHeading id={HEADING_ID} intro={expressions.intro} align="center">
          {expressions.headline}
        </SectionHeading>

        <ul className="mt-12 flex flex-wrap justify-center gap-y-12 lg:mt-14">
          {expressions.items.map((item) => (
            <li
              key={item.name}
              id={item.id}
              className="flex basis-full flex-col items-center border-gold/35 px-6 text-center sm:basis-1/2 md:basis-1/3 xl:basis-1/5 xl:px-5 xl:not-first:border-l"
            >
              <Icon name={item.icon} className="text-gold" />
              <h3 className="mt-4 font-serif text-lg tracking-[0.06em] text-navy uppercase">
                {item.name}
              </h3>
              <p className="mt-2 max-w-[17rem] text-[0.9375rem] leading-relaxed">
                {item.description}
                {item.motto && <strong className="block font-bold">{item.motto}</strong>}
              </p>
              <Cta href={item.cta.href} variant="text" tone="light" className="mt-auto justify-center pt-2">
                {item.cta.label}
              </Cta>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
