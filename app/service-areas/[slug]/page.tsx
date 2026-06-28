import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAreaBySlug,
  getAreaSlugs,
  serviceAreas,
} from "@/lib/serviceAreas";
import { site } from "@/lib/site";
import LeadForm from "@/components/LeadForm";
import { ProcessSteps, Testimonials } from "@/components/Sections";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  const title = `${area.headline}`;
  return {
    title,
    description: `${area.blurb} Free quotes & custom designs from Houston Dance Floor Wraps. Call ${site.phone}.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: { title, description: area.blurb },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const isLocal = area.type !== "state";
  const related = serviceAreas
    .filter((a) => a.slug !== area.slug && a.type === area.type)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={serviceSchema(area.name)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Service Areas", url: `${site.url}/service-areas` },
          { name: area.name, url: `${site.url}/service-areas/${area.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
        <div className="container-px relative grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <nav className="mb-5 text-sm text-chrome-dark">
              <Link href="/service-areas" className="hover:text-pink-400">
                Service Areas
              </Link>{" "}
              / <span className="text-chrome">{area.name}</span>
            </nav>
            <div className="eyebrow mb-4">
              {isLocal ? "📍 Local Install" : "🚚 Shipped Nationwide"}
            </div>
            <h1 className="font-display text-4xl font-black leading-tight text-charcoal sm:text-5xl">
              {area.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-chrome">{area.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing" className="btn-primary">
                Get Instant Pricing
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                📞 {site.phone}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal/10 bg-ink-900/70 p-6 shadow-card backdrop-blur sm:p-8">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Free Quote for {area.name}
            </h2>
            <p className="mt-1 text-sm text-chrome">
              Tell us about your event — we&apos;ll respond fast.
            </p>
            <div className="mt-6">
              <LeadForm
                compact
                source={`area-${area.slug}`}
                defaultArea={area.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="container-px section">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="card">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Custom Dance Floor Wraps in {area.name}
            </h2>
            <p className="mt-4 text-chrome">
              Whether it&apos;s a wedding monogram, a quinceañera centerpiece, or a
              full corporate brand activation, Houston Dance Floor Wraps delivers
              show-stopping custom vinyl dance floor wraps{" "}
              {isLocal ? `throughout ${area.name}` : `to ${area.name}`}. Every
              floor is printed to your exact dimensions and finished with a
              durable, slip-resistant laminate.
            </p>
            <h3 className="mt-6 font-display text-lg font-bold text-charcoal">
              Popular events we wrap
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {area.popularEvents.map((e) => (
                <li key={e} className="flex items-center gap-2 text-sm text-chrome">
                  <span className="text-pink-400">✓</span> {e}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-lg font-bold text-charcoal">
              Venues we serve
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {area.venues.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm text-chrome">
                  <span className="text-pink-400">✓</span> {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {area.nearby.length > 0 && (
              <div className="card">
                <h3 className="font-display text-lg font-bold text-charcoal">
                  Also serving near {area.city}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.nearby.map((n) => (
                    <span
                      key={n}
                      className="rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-chrome"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="card">
              <h3 className="font-display text-lg font-bold text-charcoal">
                Why {area.name} chooses us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-chrome">
                <li className="flex gap-3">
                  <span className="text-pink-400">★</span> 100% custom designs
                  matched to your theme or brand
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400">★</span> Slip-resistant,
                  high-traffic commercial materials
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400">★</span>{" "}
                  {isLocal
                    ? "Professional on-site installation & removal"
                    : "Install-ready kits with simple instructions"}
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400">★</span> Free proofs &amp; fast,
                  friendly service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ink-950/40">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow mb-4">How It Works</div>
            <h2 className="font-display text-3xl font-black text-charcoal">
              Your {area.name} Floor in 4 Easy Steps
            </h2>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-px">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="eyebrow mb-4">Reviews</div>
            <h2 className="font-display text-3xl font-black text-charcoal">
              What Clients Say
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Related areas */}
      {related.length > 0 && (
        <section className="container-px section pt-0">
          <h2 className="mb-6 font-display text-xl font-bold text-charcoal">
            Other {isLocal ? "Texas" : "Nationwide"} Service Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="rounded-full border border-charcoal/15 px-4 py-2 text-sm text-chrome hover:border-pink-500/50 hover:text-charcoal"
              >
                {a.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm text-gold-700"
            >
              View all →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
