import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  SectionHeading,
  CtaBand,
  FeatureGrid,
  ProcessSteps,
  Testimonials,
  StatsBar,
} from "@/components/Sections";
import LeadForm from "@/components/LeadForm";
import { texasMetros, nationwideStates, primaryArea } from "@/lib/serviceAreas";
import { sortedPosts } from "@/lib/blog";
import { faqs } from "@/lib/faq";
import { JsonLd, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: `Custom Vinyl Dance Floor Wraps in Houston, TX & Nationwide`,
  description:
    "Houston Dance Floor Wraps creates stunning custom vinyl dance floor wraps for weddings, parties & corporate events. Free instant pricing. Based in Houston, shipping nationwide. Call 832-450-9200.",
  alternates: { canonical: "/" },
};

const USE_CASES = [
  { title: "Weddings", emoji: "💍", text: "Monograms, names & dates that wow every guest." },
  { title: "Corporate", emoji: "🏢", text: "Branded floors & logo activations that get shared." },
  { title: "Quinceañeras", emoji: "👑", text: "Show-stopping themed floors for the big celebration." },
  { title: "Parties", emoji: "🎉", text: "Birthdays, anniversaries & galas, fully personalized." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="container-px relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <div className="eyebrow mb-5">
              ⭐ Houston&apos;s #1 Dance Floor Wrap Studio
            </div>
            <h1 className="font-display text-4xl font-black leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
              Turn Any Floor Into an{" "}
              <span className="gradient-text">Unforgettable</span> Dance Floor
            </h1>
            <p className="mt-6 max-w-xl text-lg text-chrome">
              Custom vinyl dance floor wraps for weddings, parties &amp; corporate
              events. Designed and printed to your exact floor — slip-resistant,
              photo-ready, and 100% you. Based in {site.baseLocation}, shipping
              nationwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="btn-primary text-base">
                Get Instant Pricing →
              </Link>
              <Link href="/gallery" className="btn-secondary text-base">
                View Our Work
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-chrome">
              <span className="flex items-center gap-2">✓ Free custom proofs</span>
              <span className="flex items-center gap-2">✓ Slip-resistant finish</span>
              <span className="flex items-center gap-2">✓ Nationwide shipping</span>
            </div>
          </div>

          {/* Hero quote card */}
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
            <div className="relative rounded-3xl border border-charcoal/10 bg-ink-900/70 p-6 shadow-card backdrop-blur sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt={site.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
                <div>
                  <div className="font-display font-bold text-charcoal">
                    Get Your Free Quote
                  </div>
                  <div className="text-xs text-chrome">
                    Fast response · No obligation
                  </div>
                </div>
              </div>
              <LeadForm compact source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-px pb-4">
        <StatsBar />
      </section>

      {/* USE CASES */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Perfect For Any Event"
            title={<>One Floor, Endless Possibilities</>}
            subtitle="From intimate weddings to large brand activations, we wrap floors of every size and style."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u) => (
              <div key={u.title} className="card text-center">
                <div className="text-4xl">{u.emoji}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-charcoal">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm text-chrome">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-ink-950/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Premium Wraps, Done Right"
            subtitle="We obsess over the details so your floor looks flawless from setup to last dance."
          />
          <div className="mt-12">
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="How It Works"
            title="From Idea to Dance Floor in 4 Steps"
            subtitle="A simple, stress-free process with a dedicated designer at every stage."
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Start My Design
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-ink-950/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="Loved By Couples & Brands"
            title="Don't Just Take Our Word For It"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Where We Work"
            title="Serving Houston & Shipping Nationwide"
            subtitle="Local installation across Texas and custom install-ready kits shipped to your state."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Texas (Local Install)
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/service-areas/${primaryArea.slug}`}
                  className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1.5 text-sm text-gold-700 hover:bg-pink-500/20"
                >
                  {primaryArea.name}
                </Link>
                {texasMetros.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-chrome hover:border-pink-500/50 hover:text-charcoal"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Nationwide (Shipped Kits)
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {nationwideStates.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-chrome hover:border-pink-500/50 hover:text-charcoal"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/service-areas" className="btn-secondary">
              See All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section bg-ink-950/40">
        <div className="container-px">
          <SectionHeading
            eyebrow="From the Blog"
            title="Ideas, Tips & Inspiration"
            subtitle="Design ideas, pricing guides, and everything you need to plan your perfect floor."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sortedPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
                <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                  {post.category}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-charcoal group-hover:text-gold-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-chrome">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-pink-400">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Questions?"
              title="Frequently Asked Questions"
              center={false}
            />
            <p className="mt-4 text-chrome">
              Can&apos;t find your answer? Call us at{" "}
              <a href={site.phoneHref} className="font-semibold text-pink-400">
                {site.phone}
              </a>{" "}
              — we&apos;re happy to help.
            </p>
            <Link href="/faq" className="btn-secondary mt-6">
              View All FAQs
            </Link>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 5).map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-charcoal/10 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-charcoal">
                  <span className="flex items-center justify-between gap-3">
                    {f.q}
                    <span className="text-pink-400 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-chrome">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
