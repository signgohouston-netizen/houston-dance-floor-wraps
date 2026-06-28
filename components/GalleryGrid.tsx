"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import type { GalleryCategory } from "@/lib/gallery";

interface Props {
  categories: GalleryCategory[];
}

interface Item {
  src: string;
  category: string;
  label: string;
  alt: string;
}

const BATCH = 24;

const SINGULAR: Record<string, string> = {
  wedding: "wedding",
  quinceanera: "quinceañera",
  birthday: "birthday",
  anniversary: "anniversary",
};

function altFor(src: string, key: string) {
  const num = src.match(/(\d+)\.\w+$/)?.[1];
  const theme = SINGULAR[key] ?? key;
  return `Custom vinyl ${theme} dance floor wrap design${
    num ? ` #${parseInt(num, 10)}` : ""
  } by Houston Dance Floor Wraps`;
}

export default function GalleryGrid({ categories }: Props) {
  const [active, setActive] = useState<string>("all");
  const [visible, setVisible] = useState(BATCH);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const allItems = useMemo<Item[]>(() => {
    const items: Item[] = [];
    categories.forEach((c) =>
      c.images.forEach((src) =>
        items.push({
          src,
          category: c.key,
          label: c.label,
          alt: altFor(src, c.key),
        })
      )
    );
    return items;
  }, [categories]);

  const filtered = useMemo(
    () =>
      active === "all"
        ? allItems
        : allItems.filter((i) => i.category === active),
    [allItems, active]
  );

  const shown = filtered.slice(0, visible);

  const tabs = [
    { key: "all", label: "All", count: allItems.length },
    ...categories.map((c) => ({
      key: c.key,
      label: c.label,
      count: c.images.length,
    })),
  ];

  function selectTab(key: string) {
    setActive(key);
    setVisible(BATCH);
  }

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? i : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, next, prev]);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => selectTab(t.key)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === t.key
                ? "border-gold-500 bg-gold-500/15 text-gold-700"
                : "border-charcoal/15 text-chrome hover:border-gold-500/50 hover:text-charcoal"
            }`}
          >
            {t.label}{" "}
            <span className="text-xs text-chrome-dark">({t.count})</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {shown.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightbox(i)}
            className="group relative overflow-hidden rounded-xl border border-charcoal/10 bg-white shadow-[0_8px_24px_-18px_rgba(28,26,23,0.35)] transition hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-card"
            aria-label={`View ${item.label} dance floor wrap`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-charcoal-900/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Load more */}
      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisible((v) => v + BATCH)}
            className="btn-secondary"
          >
            Load More ({filtered.length - visible} remaining)
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-900/90 p-4 backdrop-blur"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous"
          >
            ‹
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-xl border border-white/15 object-contain shadow-2xl"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 sm:right-6"
            aria-label="Next"
          >
            ›
          </button>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
            {filtered[lightbox].label} · {lightbox + 1} / {filtered.length}
          </span>
        </div>
      )}
    </>
  );
}
