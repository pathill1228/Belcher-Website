import { cn } from "@/lib/cn";

type LinesProps = {
  lines: readonly string[];
  /** Class applied to each line; defaults to forcing a break after every line. */
  lineClassName?: string;
};

/**
 * Renders deliberate editorial line breaks. Each line is a block-level span
 * followed by a space, so the text still reads as one sentence to screen
 * readers and search engines.
 */
export function Lines({ lines, lineClassName = "block" }: LinesProps) {
  return lines.map((line) => (
    <span key={line} className={cn(lineClassName)}>
      {line}{" "}
    </span>
  ));
}
