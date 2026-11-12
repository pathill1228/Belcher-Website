import { Cta } from "@/components/ui/Cta";
import { Media } from "@/components/ui/Media";
import type { Initiative } from "@/data/impact";

type InitiativeListProps = {
  initiatives: readonly Initiative[];
};

/** Documented initiatives, each as a wide editorial row. */
export function InitiativeList({ initiatives }: InitiativeListProps) {
  return (
    <ul className="divide-y divide-gold/35 border-y border-gold/35">
      {initiatives.map((initiative) => (
        <li
          key={initiative.title}
          className="grid gap-x-12 gap-y-6 py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center"
        >
          {initiative.image && (
            <Media
              image={initiative.image}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-16/10"
            />
          )}
          <div>
            <p className="type-eyebrow text-gold-dark">
              {initiative.category}
              {initiative.location && ` · ${initiative.location}`}
            </p>
            <h3 className="mt-2 font-serif text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)] leading-tight tracking-[0.02em] text-navy uppercase">
              {initiative.title}
            </h3>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed">{initiative.description}</p>
            {initiative.url && (
              <Cta href={initiative.url} tone="light" className="mt-7">
                {initiative.urlLabel ?? `Visit ${initiative.title}`}
              </Cta>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
