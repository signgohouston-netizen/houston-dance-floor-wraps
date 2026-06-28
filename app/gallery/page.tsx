import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import GalleryGrid from "@/components/GalleryGrid";
import { getGallery, galleryCount } from "@/lib/gallery";
import { site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Dance Floor Wrap Gallery — Wedding, Quinceañera & Party Designs",
  description:
    "Browse hundreds of custom vinyl dance floor wrap designs — wedding monograms, quinceañera, birthday, and anniversary floors by Houston Dance Floor Wraps. Get inspired, then get a free quote.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const categories = getGallery();
  const total = galleryCount(categories);

  // ImageGallery structured data — represent the collection with a hero
  // image per category to keep the page lean (full set is in the sitemap).
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Houston Dance Floor Wraps — Design Gallery",
    description:
      "Custom vinyl dance floor wrap designs for weddings, quinceañeras, birthdays, and anniversaries.",
    url: `${site.url}/gallery`,
    numberOfItems: total,
    associatedMedia: categories.map((c) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}${c.images[0]}`,
      name: `${c.label} dance floor wrap`,
      creditText: site.name,
    })),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Gallery", url: `${site.url}/gallery` },
        ])}
      />
      <JsonLd data={gallerySchema} />
      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">Gallery</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Design Ideas &amp; <span className="gradient-text">Inspiration</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          {total > 0
            ? `Browse ${total}+ custom dance floor wrap designs across weddings, quinceañeras, birthdays, and anniversaries. Every floor is 100% custom — bring us your idea and we'll make it real.`
            : "A few of the styles we create. Every floor is 100% custom — bring us your idea and we'll make it real."}
        </p>
      </section>

      <section className="container-px section pt-0">
        {categories.length > 0 ? (
          <GalleryGrid categories={categories} />
        ) : (
          <p className="text-center text-chrome">Gallery coming soon.</p>
        )}

        <div className="mt-12 rounded-2xl border border-charcoal/10 bg-white p-6 text-center text-sm text-chrome shadow-[0_10px_30px_-20px_rgba(28,26,23,0.3)]">
          ✨ Love a style you see? We&apos;ll customize any design with your names,
          colors, monogram, or logo — just ask.
        </div>
      </section>

      <CtaBand
        title="See something you love?"
        subtitle="Tell us your vision and we'll design a custom proof — free, with no obligation."
      />
    </>
  );
}
