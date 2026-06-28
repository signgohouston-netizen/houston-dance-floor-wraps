import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading, StatsBar } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Houston Dance Floor Wraps",
  description:
    "Learn about Houston Dance Floor Wraps — a Houston, TX based studio creating custom vinyl dance floor wraps for weddings, parties, and corporate events nationwide.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    t: "Specialists, Not Generalists",
    d: "We focus exclusively on vinyl dance floor wraps. That focus means better designs, better quality, and better results.",
  },
  {
    t: "Obsessed With Quality",
    d: "Commercial-grade materials, precise color matching, and a slip-resistant finish on every single floor.",
  },
  {
    t: "Customer-First",
    d: "Free proofs, fast communication, and a stress-free process from your first call to your last dance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "About", url: `${site.url}/about` },
        ])}
      />
      <section className="container-px py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">About Us</div>
            <h1 className="font-display text-4xl font-black text-charcoal sm:text-5xl">
              Houston&apos;s Dance Floor{" "}
              <span className="gradient-text">Wrap Specialists</span>
            </h1>
            <p className="mt-6 text-lg text-chrome">
              Houston Dance Floor Wraps was built on a simple idea: the dance
              floor is where the best moments of any celebration happen — so it
              deserves to be just as special as everything else.
            </p>
            <p className="mt-4 text-chrome">
              Based in {site.baseLocation}, we design, print, and install custom
              vinyl dance floor wraps for weddings, quinceañeras, corporate
              events, and parties of every size. From a single elegant monogram
              to a full edge-to-edge brand activation, we bring your vision to
              life with premium materials and meticulous attention to detail.
            </p>
            <p className="mt-4 text-chrome">
              While we&apos;re proud to call Houston home and offer local
              installation across Texas, we ship custom install-ready kits
              nationwide — so no matter where you&apos;re celebrating, we can make
              your floor unforgettable.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
            <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-gold-500/30 bg-gradient-to-br from-cream-100 to-cream p-10 shadow-card">
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={420}
                height={420}
                className="h-auto w-full max-w-sm object-contain drop-shadow-[0_10px_28px_rgba(28,26,23,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px pb-8">
        <StatsBar />
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.t} className="card">
                <h3 className="font-display text-lg font-bold text-charcoal">{v.t}</h3>
                <p className="mt-2 text-sm text-chrome">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
