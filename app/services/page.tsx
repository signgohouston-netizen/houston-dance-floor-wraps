import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  SectionHeading,
  CtaBand,
  ProcessSteps,
  FeatureGrid,
} from "@/components/Sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Custom Vinyl Dance Floor Wraps — Services",
  description:
    "Explore our vinyl dance floor wrap services: wedding monograms, full-coverage custom artwork, corporate logo floors, and nationwide install-ready kits. Free quotes from Houston Dance Floor Wraps.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "Wedding Dance Floor Wraps",
    text: "Elegant monograms, names, dates, florals, and full-coverage designs that make your first dance unforgettable and every photo magazine-worthy.",
    points: ["Custom monograms & crests", "Floral & marble finishes", "Color-matched to your palette"],
  },
  {
    title: "Corporate & Brand Floors",
    text: "Logo floors and branded activations engineered to drive engagement and social shares at launches, galas, trade shows, and conferences.",
    points: ["Exact brand color matching", "Large-format coverage", "High-traffic durability"],
  },
  {
    title: "Quinceañera & Sweet 16",
    text: "Themed, larger-than-life floor designs that make the guest of honor shine and turn the dance floor into the centerpiece of the celebration.",
    points: ["Themed custom artwork", "Names & dates", "Bold, vibrant prints"],
  },
  {
    title: "Party & Event Wraps",
    text: "Birthdays, anniversaries, holiday parties, and galas — any event, any size, fully personalized to your vision and venue.",
    points: ["Any size or shape", "Fast turnaround", "Indoor & covered outdoor"],
  },
  {
    title: "Full-Coverage Custom Artwork",
    text: "Edge-to-edge photo prints, patterns, and immersive designs that transform the entire floor into a work of art.",
    points: ["Photo-quality printing", "Seamless large prints", "Premium laminate finish"],
  },
  {
    title: "Nationwide Install-Ready Kits",
    text: "Outside Texas? We design and print to your exact dimensions and ship a complete DIY kit with step-by-step instructions.",
    points: ["Ships anywhere in the US", "Simple application", "Phone support included"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />

      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">Our Services</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Custom <span className="gradient-text">Vinyl Dance Floor Wraps</span>{" "}
          for Every Occasion
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          We do one thing and we do it exceptionally well: transform ordinary
          floors into custom, photo-ready showpieces. Here&apos;s how we can help.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/pricing" className="btn-primary">
            Get Instant Pricing
          </Link>
          <a href={site.phoneHref} className="btn-secondary">
            📞 {site.phone}
          </a>
        </div>
      </section>

      <section className="container-px section pt-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card flex flex-col">
              <h2 className="font-display text-xl font-bold text-charcoal">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-chrome">{s.text}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-chrome-light">
                    <span className="text-pink-400">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-ink-950/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Difference"
            title="Built to Look Incredible & Last All Night"
          />
          <div className="mt-12">
            <FeatureGrid />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="Our Process" title="Simple, Stress-Free, Custom" />
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
