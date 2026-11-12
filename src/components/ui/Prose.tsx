import { cn } from "@/lib/cn";

type ProseProps = {
  paragraphs: readonly string[];
  /** The background the copy sits on. */
  tone?: "light" | "dark";
  className?: string;
};

/** Body copy for inner pages: comfortable measure and rhythm. */
export function Prose({ paragraphs, tone = "light", className }: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-[38rem] space-y-5 text-[1.0625rem] leading-relaxed",
        tone === "dark" ? "text-ivory/85" : "text-charcoal",
        className,
      )}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
