import Link from "next/link";
import { site } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="font-display text-3xl font-black leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-chrome">{subtitle}</p>}
    </div>
  );
}

export function CtaBand({
  title = "Ready to make your floor unforgettable?",
  subtitle = "Get a free, no-obligation quote today. Custom designs, fast turnaround, nationwide shipping.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/15 via-ink-900 to-sunset-500/10 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-black text-charcoal sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-chrome">{subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base">
                Get a Free Quote
              </Link>
              <Link href="/pricing" className="btn-secondary text-base">
                Try the Price Calculator
              </Link>
              <a href={site.phoneHref} className="btn-ghost text-base">
                📞 {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: "🎨",
    title: "Fully Custom Designs",
    text: "Any color, monogram, logo, or full-coverage artwork — matched to your exact theme or brand.",
  },
  {
    icon: "🛡️",
    title: "Slip-Resistant & Safe",
    text: "Commercial-grade textured laminate rated for high-traffic dancing in heels or bare feet.",
  },
  {
    icon: "📐",
    title: "Made to Measure",
    text: "Printed to your floor's exact dimensions for a seamless, professional edge-to-edge finish.",
  },
  {
    icon: "🚚",
    title: "Nationwide Shipping",
    text: "Based in Houston, we ship install-ready kits across the country with simple instructions.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    text: "Quick proofs and rush options available so you're covered even for last-minute events.",
  },
  {
    icon: "✨",
    title: "Venue-Friendly",
    text: "Clean removal with no residue or damage — loved by wedding venues and hotels.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURES.map((f) => (
        <div key={f.title} className="card">
          <div className="text-3xl">{f.icon}</div>
          <h3 className="mt-4 font-display text-lg font-bold text-charcoal">
            {f.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-chrome">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Share Your Vision",
    text: "Tell us your floor size, venue, and design ideas. Get a free quote in minutes.",
  },
  {
    n: "02",
    title: "Approve Your Proof",
    text: "We create a custom digital proof and refine it until it's exactly right.",
  },
  {
    n: "03",
    title: "We Print & Produce",
    text: "Your wrap is printed on premium, slip-resistant vinyl and sealed for durability.",
  },
  {
    n: "04",
    title: "Install & Celebrate",
    text: "We install on-site (or ship a ready-to-apply kit). Then you dance the night away.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s) => (
        <div key={s.n} className="relative card">
          <div className="font-display text-4xl font-black gradient-text">
            {s.n}
          </div>
          <h3 className="mt-3 font-display text-lg font-bold text-charcoal">
            {s.title}
          </h3>
          <p className="mt-2 text-sm text-chrome">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    name: "Brittany & Marcus",
    role: "Wedding · Houston, TX",
    text: "Our monogram floor was the talk of the wedding. Every single guest took a photo on it. Flawless install and stunning quality.",
  },
  {
    name: "Priya S.",
    role: "Event Planner · Dallas, TX",
    text: "I've worked with a lot of vendors and these guys are top-tier. Fast proofs, perfect color match, and the floor held up all night.",
  },
  {
    name: "TechNova Events",
    role: "Brand Activation · Austin, TX",
    text: "Our logo floor drove a ton of social posts at our product launch. Professional, on-time, and exactly on brand.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="card">
          <div className="text-pink-400">★★★★★</div>
          <blockquote className="mt-3 text-chrome-light">
            &ldquo;{t.text}&rdquo;
          </blockquote>
          <figcaption className="mt-4">
            <div className="font-semibold text-charcoal">{t.name}</div>
            <div className="text-sm text-chrome-dark">{t.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const STATS = [
  { value: "500+", label: "Floors Wrapped" },
  { value: "18+", label: "States Served" },
  { value: "5★", label: "Average Rating" },
  { value: "100%", label: "Custom Designs" },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-charcoal/10 bg-white p-6 text-center"
        >
          <div className="font-display text-3xl font-black gradient-text sm:text-4xl">
            {s.value}
          </div>
          <div className="mt-1 text-sm text-chrome">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
