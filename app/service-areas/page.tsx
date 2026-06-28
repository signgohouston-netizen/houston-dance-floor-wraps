import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  primaryArea,
  texasMetros,
  nationwideStates,
} from "@/lib/serviceAreas";
import { CtaBand, SectionHeading } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Service Areas — Dance Floor Wraps in Texas & Nationwide",
  description:
    "Houston Dance Floor Wraps serves Houston, Austin, San Antonio, Dallas, Fort Worth and ships custom dance floor wraps nationwide to Florida, Georgia, California, Colorado and more.",
  alternates: { canonical: "/service-areas" },
};

function AreaCard({
  slug,
  name,
  blurb,
  badge,
}: {
  slug: string;
  name: string;
  blurb: string;
  badge?: string;
}) {
  return (
    <Link href={`/service-areas/${slug}`} className="card group flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-charcoal group-hover:text-gold-600">
          {name}
        </h3>
        {badge && (
          <span className="rounded-full bg-pink-500/15 px-2.5 py-1 text-xs font-semibold text-gold-700">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm text-chrome">{blurb}</p>
      <span className="mt-4 text-sm font-semibold text-pink-400">
        View {name} →
      </span>
    </Link>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Service Areas", url: `${site.url}/service-areas` },
        ])}
      />
      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">Service Areas</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Where We <span className="gradient-text">Wrap Floors</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          Based in {site.baseLocation} with local installation across Texas — and
          custom install-ready kits shipped to events nationwide.
        </p>
      </section>

      <section className="container-px section pt-0">
        <SectionHeading
          eyebrow="Texas"
          title="Local Design & Installation"
          subtitle="In-person consultations and professional installation across the Lone Star State."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AreaCard
            slug={primaryArea.slug}
            name={primaryArea.name}
            blurb={primaryArea.blurb}
            badge="Home Base"
          />
          {texasMetros.map((a) => (
            <AreaCard key={a.slug} slug={a.slug} name={a.name} blurb={a.blurb} />
          ))}
        </div>
      </section>

      <section className="container-px section pt-0">
        <SectionHeading
          eyebrow="Nationwide"
          title="Shipped Install-Ready Kits"
          subtitle="Designed and printed in Houston, delivered to your door anywhere in the country."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nationwideStates.map((a) => (
            <AreaCard key={a.slug} slug={a.slug} name={a.name} blurb={a.blurb} />
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't see your area?"
        subtitle="We ship everywhere in the U.S. Reach out and we'll take care of you wherever you're celebrating."
      />
    </>
  );
}
