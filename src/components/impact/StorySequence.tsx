type StorySequenceProps = {
  steps: readonly string[];
};

/** The documented life sequence as a vertical gold-marked timeline. */
export function StorySequence({ steps }: StorySequenceProps) {
  return (
    <ol className="relative ml-1 border-l border-gold/50">
      {steps.map((step, index) => {
        const last = index === steps.length - 1;
        return (
          <li key={step} className="relative pb-4 pl-7 last:pb-0">
            <span
              aria-hidden="true"
              className={
                last
                  ? "absolute top-2 -left-[5px] size-2.5 rotate-45 bg-gold"
                  : "absolute top-2.5 -left-[3.5px] size-1.5 rounded-full bg-gold"
              }
            />
            <span
              className={
                last
                  ? "font-serif text-xl tracking-[0.03em] text-navy uppercase"
                  : "text-lg text-charcoal"
              }
            >
              {step}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
