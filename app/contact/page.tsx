import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Dance Floor Wrap Quote",
  description:
    "Contact Houston Dance Floor Wraps for a free custom vinyl dance floor wrap quote. Based in Houston, TX. Call 832-450-9200 or request a quote online — nationwide shipping available.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ estimate?: string }>;
}) {
  const { estimate } = await searchParams;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Contact", url: `${site.url}/contact` },
        ])}
      />
      <section className="container-px py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="eyebrow mb-5">Get In Touch</div>
            <h1 className="font-display text-4xl font-black text-charcoal sm:text-5xl">
              Get Your <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-chrome">
              Tell us about your event and floor, and we&apos;ll send a custom quote
              fast — usually the same day. No pressure, no obligation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 transition hover:border-pink-500/40"
              >
                <span className="text-2xl">📞</span>
                <span>
                  <span className="block text-sm text-chrome">Call or text</span>
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {site.phone}
                  </span>
                </span>
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 transition hover:border-pink-500/40"
              >
                <span className="text-2xl">✉️</span>
                <span>
                  <span className="block text-sm text-chrome">Email us</span>
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {site.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-5">
                <span className="text-2xl">📍</span>
                <span>
                  <span className="block text-sm text-chrome">Based in</span>
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {site.baseLocation}
                  </span>
                  <span className="block text-sm text-chrome">
                    Serving Texas &amp; shipping nationwide
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white p-5">
                <span className="text-2xl">🕒</span>
                <span>
                  <span className="block text-sm text-chrome">Hours</span>
                  <span className="block font-display text-lg font-bold text-charcoal">
                    {site.hours}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal/10 bg-ink-900/60 p-6 shadow-card backdrop-blur sm:p-8">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Request a Free Quote
            </h2>
            <p className="mt-1 text-sm text-chrome">
              Fill this out and we&apos;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <LeadForm source="contact-page" estimate={estimate} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
