"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Homepage hero is a dark photo — use light header text until scrolled.
  const overDark = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-charcoal/10 bg-ink-950/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={246}
            height={240}
            className="h-16 w-auto object-contain drop-shadow-[0_4px_10px_rgba(28,26,23,0.14)] sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-gold-400"
                    : overDark
                      ? "text-white/85 hover:text-white"
                      : "text-chrome-light hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`btn text-sm ${
              overDark
                ? "text-white hover:text-gold-400"
                : "text-charcoal hover:text-gold-600"
            }`}
          >
            📞 {site.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>

        <button
          className={`lg:hidden ${overDark ? "text-white" : "text-charcoal"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <nav className="container-px flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-chrome-light hover:bg-white hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="btn-secondary mt-2">
              📞 Call {site.phone}
            </a>
            <Link href="/contact" className="btn-primary mt-2">
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
