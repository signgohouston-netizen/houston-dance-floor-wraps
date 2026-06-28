import type { Metadata } from "next";
import PricingCalculator from "@/components/PricingCalculator";
import { CtaBand, SectionHeading } from "@/components/Sections";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dance Floor Wrap Pricing Calculator — Instant Estimate",
  description:
    "Get an instant price estimate for your custom vinyl dance floor wrap. Enter your floor size and design to see pricing in seconds. Free, no-obligation quotes from Houston Dance Floor Wraps.",
  alternates: { canonical: "/pricing" },
};

const priceFaqs = faqs.filter((f) =>
  ["cost", "advance", "ship"].some((k) => f.q.toLowerCase().includes(k))
);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Pricing Calculator", url: `${site.url}/pricing` },
        ])}
      />
      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">Instant Pricing</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Dance Floor Wrap{" "}
          <span className="gradient-text">Pricing Calculator</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          Get a ballpark estimate in seconds. Adjust your floor size, design, and
          options — then lock in an exact quote, free.
        </p>
      </section>

      <section className="container-px pb-8">
        <PricingCalculator />
      </section>

      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="What's Included"
            title="Transparent, All-In Pricing"
            subtitle="No surprises. Your quote includes design, premium materials, and a slip-resistant finish."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                t: "Custom Design & Proofs",
                d: "Professional design and unlimited proof revisions until it's perfect.",
              },
              {
                t: "Premium Materials",
                d: "Commercial-grade printed vinyl with a textured, slip-resistant laminate.",
              },
              {
                t: "Install or Ship",
                d: "Pro installation in Texas & select markets, or an install-ready kit shipped to you.",
              },
            ].map((x) => (
              <div key={x.t} className="card">
                <h3 className="font-display text-lg font-bold text-charcoal">{x.t}</h3>
                <p className="mt-2 text-sm text-chrome">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-950/40">
        <div className="container-px max-w-3xl">
          <SectionHeading eyebrow="Pricing FAQ" title="Common Pricing Questions" />
          <div className="mt-10 space-y-3">
            {priceFaqs.map((f) => (
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

      <CtaBand
        title="Want an exact quote?"
        subtitle="Send your floor details and we'll get back to you fast with precise pricing — free."
      />
    </>
  );
}
