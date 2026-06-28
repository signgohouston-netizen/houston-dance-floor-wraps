import { site } from "./site";
import { serviceAreas } from "./serviceAreas";
import { faqs } from "./faq";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  image: `${site.url}/logo.png`,
  logo: `${site.url}/logo.png`,
  url: site.url,
  telephone: `+1${site.phone.replace(/\D/g, "")}`,
  email: site.email,
  description: site.description,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: serviceAreas.map((a) => ({
    "@type": a.type === "state" ? "State" : "City",
    name: a.city || a.name,
  })),
  openingHours: "Mo-Sa 08:00-20:00",
  sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function serviceSchema(areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Vinyl Dance Floor Wraps",
    provider: { "@id": `${site.url}/#business` },
    areaServed: areaName || "United States",
    description: site.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: site.pricing.minimum,
    },
  };
}
