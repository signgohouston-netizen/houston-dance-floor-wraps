import Link from "next/link";
import type { Metadata } from "next";
import { sortedPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Blog — Dance Floor Wrap Ideas, Tips & Guides",
  description:
    "Design ideas, pricing guides, and expert tips for custom vinyl dance floor wraps. From wedding monograms to corporate brand floors — the Houston Dance Floor Wraps blog.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <section className="container-px py-16 text-center sm:py-20">
        <div className="eyebrow mb-5">Blog</div>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-black text-charcoal sm:text-5xl">
          Ideas, Tips &amp; <span className="gradient-text">Inspiration</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-chrome">
          Everything you need to plan the perfect custom dance floor — design
          ideas, pricing breakdowns, and expert advice.
        </p>
      </section>

      <section className="container-px">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block overflow-hidden rounded-3xl border border-charcoal/10 bg-gradient-to-br from-pink-500/10 via-ink-900 to-sunset-500/10 p-8 transition hover:border-pink-500/40 sm:p-12"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            Featured · {featured.category}
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-black text-charcoal group-hover:text-gold-600 sm:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 max-w-2xl text-chrome">{featured.excerpt}</p>
          <div className="mt-5 flex items-center gap-3 text-sm text-chrome-dark">
            <span>{formatDate(featured.date)}</span>
            <span>·</span>
            <span>{featured.readMinutes} min read</span>
          </div>
        </Link>
      </section>

      <section className="container-px section">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group flex flex-col"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                {post.category}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-charcoal group-hover:text-gold-600">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-chrome">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-chrome-dark">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
