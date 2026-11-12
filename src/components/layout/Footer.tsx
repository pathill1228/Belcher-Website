import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerLinks, socialLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  const tagline = siteConfig.tagline.map((line) => `${line.emphasis} ${line.rest}`);

  return (
    <footer className="bg-navy-deep text-ivory">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:gap-12 lg:py-10">
        <div className="flex items-center gap-5">
          <span
            aria-hidden="true"
            className="font-serif text-5xl leading-none tracking-[-0.08em] text-gold-light"
          >
            CB
          </span>
          <p className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.04em] uppercase">
              {siteConfig.fullName}
            </span>
            <span className="mt-2 text-[0.625rem] font-medium tracking-wordmark text-gold-light uppercase">
              {siteConfig.role}
            </span>
          </p>
        </div>

        <p className="font-serif text-base leading-relaxed text-ivory/90 italic lg:justify-self-center">
          {tagline.map((line, index) => (
            <span key={line} className="block">
              {index === 0 && "“"}
              {line}
              {index === tagline.length - 1 ? "”" : " "}
            </span>
          ))}
        </p>

        <div>
          <p className="type-label text-gold-light">Follow</p>
          <ul className="mt-2 flex items-center gap-1" aria-label="Social profiles">
            {socialLinks.map((social) => (
              <li key={social.platform}>
                {social.url ? (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="-ml-2.5 flex size-11 items-center justify-center text-gold-light transition-colors hover:text-ivory"
                  >
                    <SocialIcon platform={social.platform} className="size-5" />
                  </a>
                ) : (
                  // No URL supplied yet: show the mark without a dead link.
                  <span className="-ml-2.5 flex size-11 items-center justify-center text-ivory/45">
                    <SocialIcon platform={social.platform} className="size-5" />
                    <span className="sr-only">{social.label} (coming soon)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-ivory/80 lg:border-l lg:border-ivory/20 lg:pl-10">
          <p>
            © {year} {siteConfig.fullName}
          </p>
          <p>All Rights Reserved.</p>
          <ul className="mt-2 flex flex-wrap gap-x-5">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center text-ivory underline decoration-ivory/40 underline-offset-4 transition-colors hover:decoration-gold-light"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="flex min-h-11 items-center text-ivory/60">
                    {link.label}
                    <span className="sr-only"> (coming soon)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
