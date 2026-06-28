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

const iconCls = "h-6 w-6";
const HERO_FEATURES = [
  {
    title: "Custom Designs",
    text: "Any theme, logo or monogram",
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
  },
  {
    title: "High Quality Printing",
    text: "Vibrant, durable & long-lasting",
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Professional Installation",
    text: "Flawless setup for any venue",
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1 2.6-2.6Z" />
      </svg>
    ),
  },
  {
    title: "On Time, Every Time",
    text: "Reliable service for your big day",
    icon: (
      <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />

      {/* HERO */}
      <section className="relative -mt-24 min-h-[92vh] overflow-hidden">
        {/* Background photo */}
        <Image
          src="/hero.jpg"
          alt="Custom white and gold monogram vinyl dance floor wrap installed in an elegant Houston wedding banquet hall"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark scrim — keeps the headline readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/92 via-charcoal-900/65 to-charcoal-900/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-transparent to-charcoal-900/40" />

        {/* Content */}
        <div className="container-px relative flex min-h-[88vh] flex-col justify-center pb-36 pt-28 sm:pb-40">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-400 sm:text-sm">
              <span className="h-px w-10 bg-gold-500" />
              Custom Vinyl Dance Floor Wraps
            </div>
            <h1 className="font-display font-black uppercase leading-[0.92] text-white">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Your Event.
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                Your Design.
              </span>
              <span className="mt-2 block font-script text-5xl font-normal normal-case text-gold-400 sm:text-6xl lg:text-7xl">
                Your Floor.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
              We design, print and install custom dance floor wraps that bring
              your vision to life and make your celebration unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary text-base">
                Get a Free Quote →
              </Link>
              <Link
                href="/gallery"
                className="btn border border-white/40 text-white hover:border-gold-400 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Feature bar */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-charcoal-900/70 backdrop-blur">
          <div className="container-px grid grid-cols-2 gap-x-6 gap-y-5 py-5 lg:grid-cols-4">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <span className="shrink-0 text-gold-400">{f.icon}</span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-wide text-gold-400">
                    {f.title}
                  </span>
                  <span className="block text-xs text-white/75">{f.text}</span>
                </span>
              </div>
            ))}
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
