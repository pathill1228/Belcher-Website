import { Connect } from "@/components/home/Connect";
import { Expressions } from "@/components/home/Expressions";
import { Hero } from "@/components/home/Hero";
import { MarketplaceMinister } from "@/components/home/MarketplaceMinister";
import { Method } from "@/components/home/Method";
import { Story } from "@/components/home/Story";
import { Vision } from "@/components/home/Vision";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />

      <Hero />
      <MarketplaceMinister />
      <Method />
      {/* Story and Vision share one row on wide screens, as in the approved design. */}
      <div className="grid gap-0.5 bg-navy-deep xl:grid-cols-[52fr_48fr]">
        <Story />
        <Vision />
      </div>
      <Expressions />
      <Connect />
    </>
  );
}
