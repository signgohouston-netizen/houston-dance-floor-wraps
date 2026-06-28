import Link from "next/link";
import Image from "next/image";
import { site, NAV_LINKS } from "@/lib/site";
import { texasMetros, nationwideStates, primaryArea } from "@/lib/serviceAreas";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-charcoal-900 text-cream/80">
      {/* gold hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />
      <div className="container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex" aria-label={site.name}>
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={260}
                height={244}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Custom vinyl dance floor wraps for weddings, parties &amp; corporate
              events. Based in {site.baseLocation} — shipping nationwide.
            </p>
            <a href={site.phoneHref} className="btn-primary mt-5 text-sm">
              📞 {site.phone}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/70 hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-cream/70 hover:text-gold-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Texas Service Areas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href={`/service-areas/${primaryArea.slug}`}
                  className="text-cream/70 hover:text-gold-400"
                >
                  {primaryArea.name}
                </Link>
              </li>
              {texasMetros.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="text-cream/70 hover:text-gold-400"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Nationwide
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {nationwideStates.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="text-cream/70 hover:text-gold-400"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-sm text-cream/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Based in {site.baseLocation} · {site.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
