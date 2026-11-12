import {
  BriefcaseBusiness,
  Building2,
  ChartColumn,
  Compass,
  Flame,
  GraduationCap,
  Hammer,
  HandHeart,
  HandHelping,
  Heart,
  Lightbulb,
  Milestone,
  Scale,
  Sprout,
  Store,
  Sunrise,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * The site's icon vocabulary. Content files reference icons by these names,
 * so swapping a glyph (or moving to custom artwork) happens here only.
 * Brand guardrails: no crosses, Bibles, doves, globes, dollar signs, crowns or lions.
 */
const icons = {
  education: GraduationCap,
  economics: ChartColumn,
  entrepreneurship: BriefcaseBusiness,
  engage: Users,
  enlighten: Lightbulb,
  empower: TrendingUp,
  build: Building2,
  worship: Heart,
  grow: Sprout,
  serve: HandHelping,
  ministry: Flame,
  marketplace: Store,
  morementum: Sunrise,
  impact: HandHeart,
  global: Compass,
  direction: Milestone,
  craft: Hammer,
  stewardship: Scale,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

/** Decorative line icon. Always paired with visible text, so hidden from assistive tech. */
export function Icon({ name, className }: IconProps) {
  const Glyph = icons[name];
  return <Glyph aria-hidden="true" strokeWidth={1.25} className={cn("size-10", className)} />;
}
