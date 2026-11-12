import { Container } from "./Container";

type JumpNavProps = {
  links: readonly { label: string; href: string }[];
};

/** "On this page" anchor links, sitting directly beneath an inner-page hero. */
export function JumpNav({ links }: JumpNavProps) {
  return (
    <nav aria-label="On this page" className="border-t border-gold/30 bg-navy-deep text-ivory">
      <Container className="flex flex-wrap items-center gap-x-8">
        <p className="type-label hidden py-3 text-gold-light sm:block">On this page</p>
        <ul className="flex flex-wrap gap-x-6 sm:gap-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="type-label flex min-h-12 items-center text-ivory/85 transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
