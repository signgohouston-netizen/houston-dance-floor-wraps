"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const DESIGN_OPTIONS = [
  { id: "monogram", label: "Monogram / Logo", mult: 1, note: "Initials, names, or a single logo" },
  { id: "partial", label: "Partial Design", mult: 1.25, note: "Monogram + border or accents" },
  { id: "full", label: "Full Coverage", mult: 1.6, note: "Edge-to-edge custom artwork or photo" },
];

const PRESETS = [
  { label: "12 × 12", w: 12, l: 12 },
  { label: "16 × 16", w: 16, l: 16 },
  { label: "20 × 20", w: 20, l: 20 },
  { label: "24 × 24", w: 24, l: 24 },
];

export default function PricingCalculator() {
  const [width, setWidth] = useState(16);
  const [length, setLength] = useState(16);
  const [design, setDesign] = useState(DESIGN_OPTIONS[0]);
  const [install, setInstall] = useState(true);
  const [rush, setRush] = useState(false);

  const { sqft, low, high } = useMemo(() => {
    const area = Math.max(0, width) * Math.max(0, length);
    const base = area * site.pricing.pricePerSqFt * design.mult;
    const installCost = install ? area * site.pricing.installPerSqFt : 0;
    const rushCost = rush ? site.pricing.rushFee : 0;
    let total = base + installCost + rushCost;
    total = Math.max(total, site.pricing.minimum);
    // Present a range (±10%) to set expectations
    const lowV = Math.round((total * 0.92) / 5) * 5;
    const highV = Math.round((total * 1.12) / 5) * 5;
    return { sqft: area, low: lowV, high: highV };
  }, [width, length, design, install, rush]);

  const estimateText = `${sqft} sq ft · ${design.label} · ${
    install ? "Pro install" : "Shipped kit"
  }${rush ? " · Rush" : ""} → $${low.toLocaleString()}–$${high.toLocaleString()}`;

  const fmt = (n: number) => `$${n.toLocaleString()}`;

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3 card">
        {/* Floor size */}
        <h3 className="font-display text-lg font-bold text-charcoal">
          1. Floor Size
        </h3>
        <p className="mt-1 text-sm text-chrome">Enter your dance floor dimensions in feet.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              onClick={() => {
                setWidth(p.w);
                setLength(p.l);
              }}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                width === p.w && length === p.l
                  ? "border-pink-500 bg-pink-500/20 text-gold-700"
                  : "border-charcoal/15 text-chrome hover:border-pink-500/50"
              }`}
            >
              {p.label} ft
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <label className="label">Width (ft)</label>
            <input
              type="number"
              min={4}
              max={60}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="field"
            />
          </div>
          <div>
            <label className="label">Length (ft)</label>
            <input
              type="number"
              min={4}
              max={60}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="field"
            />
          </div>
        </div>

        {/* Design */}
        <h3 className="mt-8 font-display text-lg font-bold text-charcoal">
          2. Design Type
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {DESIGN_OPTIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDesign(d)}
              className={`rounded-xl border p-3 text-left transition ${
                design.id === d.id
                  ? "border-pink-500 bg-pink-500/10"
                  : "border-charcoal/15 hover:border-pink-500/50"
              }`}
            >
              <div className="text-sm font-semibold text-charcoal">{d.label}</div>
              <div className="mt-1 text-xs text-chrome">{d.note}</div>
            </button>
          ))}
        </div>

        {/* Options */}
        <h3 className="mt-8 font-display text-lg font-bold text-charcoal">
          3. Options
        </h3>
        <div className="mt-3 space-y-3">
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-charcoal/15 p-4 hover:border-pink-500/50">
            <span>
              <span className="block text-sm font-semibold text-charcoal">
                Professional Installation
              </span>
              <span className="block text-xs text-chrome">
                Our crew installs &amp; removes (Texas + select markets)
              </span>
            </span>
            <input
              type="checkbox"
              checked={install}
              onChange={(e) => setInstall(e.target.checked)}
              className="h-5 w-5 accent-pink-500"
            />
          </label>
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-charcoal/15 p-4 hover:border-pink-500/50">
            <span>
              <span className="block text-sm font-semibold text-charcoal">
                Rush Turnaround
              </span>
              <span className="block text-xs text-chrome">
                Need it in under 2 weeks
              </span>
            </span>
            <input
              type="checkbox"
              checked={rush}
              onChange={(e) => setRush(e.target.checked)}
              className="h-5 w-5 accent-pink-500"
            />
          </label>
        </div>
      </div>

      {/* Estimate panel */}
      <div className="lg:col-span-2">
        <div className="sticky top-24 rounded-2xl border border-pink-500/30 bg-gradient-to-b from-pink-500/10 to-transparent p-6">
          <div className="eyebrow">Your Estimate</div>
          <div className="mt-4 text-center">
            <div className="font-display text-4xl font-black text-charcoal">
              {fmt(low)}
              <span className="text-chrome-dark"> – </span>
              {fmt(high)}
            </div>
            <p className="mt-1 text-sm text-chrome">Estimated project total</p>
          </div>

          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-chrome">Floor area</dt>
              <dd className="font-medium text-charcoal">{sqft} sq ft</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-chrome">Design</dt>
              <dd className="font-medium text-charcoal">{design.label}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-chrome">Installation</dt>
              <dd className="font-medium text-charcoal">
                {install ? "Pro install" : "Shipped kit"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-chrome">Rush</dt>
              <dd className="font-medium text-charcoal">{rush ? "Yes" : "No"}</dd>
            </div>
          </dl>

          <Link
            href={{ pathname: "/contact", query: { estimate: estimateText } }}
            className="btn-primary mt-6 w-full"
          >
            Lock In This Quote →
          </Link>
          <a href={site.phoneHref} className="btn-secondary mt-3 w-full">
            📞 Call {site.phone}
          </a>

          <p className="mt-4 text-center text-xs text-chrome-dark">
            Estimates are a guide only. Final pricing depends on artwork,
            surface &amp; location. Get an exact quote free.
          </p>
        </div>
      </div>
    </div>
  );
}
