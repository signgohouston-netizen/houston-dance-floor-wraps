import type { Metadata } from "next";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/Sections";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dance Floor Wrap FAQ — Your Questions Answered",
  description:
    "Answers to common questions about custom vinyl dance floor wraps: pricing, installation, safety, surfaces, shipping, and turnaround. Houston Dance Floor Wraps.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "FAQ", url: `${site.url}/faq` },
        ])}
      />
      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">FAQ</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          Everything you need to know about custom vinyl dance floor wraps. Still
          have a question? Call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-pink-400">
            {site.phone}
          </a>
          .
        </p>
      </section>

      <section className="container-px section pt-0">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-charcoal/10 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-charcoal">
                <span className="flex items-center justify-between gap-3">
                  {f.q}
                  <span className="text-2xl text-pink-400 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-chrome">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
