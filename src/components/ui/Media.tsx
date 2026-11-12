import Image from "next/image";
import { Image as ImageGlyph } from "lucide-react";
import type { ImageAsset } from "@/data/images";
import { cn } from "@/lib/cn";

const captionPositions = {
  center: "items-center justify-center text-center",
  "bottom-left": "items-end justify-start",
  "bottom-right": "items-end justify-end",
} as const;

type MediaProps = {
  image: ImageAsset;
  /** Responsive `sizes` hint for next/image — describe the rendered width. */
  sizes: string;
  /** Fill the nearest positioned ancestor instead of sizing via className. */
  fill?: boolean;
  /** Set on the LCP image only (the hero). Everything else lazy-loads. */
  priority?: boolean;
  /** Where the placeholder caption sits, or "none" to hide it. */
  caption?: keyof typeof captionPositions | "none";
  className?: string;
};

/**
 * The site's single image treatment.
 *
 * Renders an optimized next/image once the asset is marked `ready` in
 * src/data/images.ts; until then it renders a neutral CSS placeholder with
 * the same box, so layouts never shift and no broken image is ever requested.
 */
export function Media({
  image,
  sizes,
  fill = false,
  priority = false,
  caption = "center",
  className,
}: MediaProps) {
  return (
    <div
      className={cn(
        "@container overflow-hidden bg-navy-soft",
        fill ? "absolute inset-0" : "relative",
        className,
      )}
    >
      {image.ready ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={priority}
          className={cn("object-cover", image.position)}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-navy-soft via-navy to-navy-deep"
        >
          <div className="absolute inset-2 border border-gold/25 @min-[12rem]:inset-4" />
          {caption !== "none" && (
            <div className={cn("absolute inset-0 flex p-5 @min-[12rem]:p-8", captionPositions[caption])}>
              <div className="flex flex-col items-center gap-2 text-ivory/55">
                <ImageGlyph strokeWidth={1} className="size-5 text-gold-light/70" />
                <span className="hidden text-[0.625rem] font-medium tracking-label uppercase @min-[9rem]:block">
                  {image.placeholder}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
