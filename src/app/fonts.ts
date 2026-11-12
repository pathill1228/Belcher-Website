import { DM_Sans, Playfair_Display } from "next/font/google";

/**
 * Editorial serif — hero H1, section headings, quotations, vision statements.
 * Variable font, so no per-weight downloads.
 */
export const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/** Modern sans — navigation, labels, body copy, buttons. */
export const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
