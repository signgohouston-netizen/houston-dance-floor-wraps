import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs, sortedPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/Sections";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ])}
      />

      <article className="container-px py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-6 text-sm text-chrome-dark">
            <Link href="/blog" className="hover:text-pink-400">
              Blog
            </Link>{" "}
            / <span className="text-chrome">{post.category}</span>
          </nav>

          <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            {post.category}
          </div>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight text-charcoal sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-chrome-dark">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readMinutes} min read</span>
          </div>

          <div className="prose-area mt-10">
            {post.body.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, k) => (
                      <li key={k}>
                        <span className="text-pink-400">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-6 text-center">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Ready to design your floor?
            </h2>
            <p className="mt-2 text-chrome">
              Get an instant estimate or a free custom quote today.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/pricing" className="btn-primary">
                Try the Calculator
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                📞 {site.phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="container-px section pt-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-display text-xl font-bold text-charcoal">
            Keep Reading
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card group">
                <div className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-base font-bold text-charcoal group-hover:text-gold-600">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
