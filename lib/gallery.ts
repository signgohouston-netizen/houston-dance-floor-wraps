import fs from "node:fs";
import path from "node:path";

export interface GalleryCategory {
  key: string;
  label: string;
  images: string[]; // public paths e.g. /gallery/wedding/xxx.jpg
}

const CATEGORIES: { key: string; label: string; dir: string }[] = [
  { key: "wedding", label: "Weddings", dir: "wedding" },
  { key: "quinceanera", label: "Quinceañera", dir: "quinceanera" },
  { key: "birthday", label: "Birthday", dir: "birthday" },
  { key: "anniversary", label: "Anniversary", dir: "anniversary" },
];

const IMG_RE = /\.(jpe?g|png|webp|avif)$/i;

function naturalSort(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

export function getGallery(): GalleryCategory[] {
  const base = path.join(process.cwd(), "public", "gallery");
  return CATEGORIES.map((cat) => {
    const dir = path.join(base, cat.dir);
    let files: string[] = [];
    try {
      files = fs
        .readdirSync(dir)
        .filter((f) => IMG_RE.test(f))
        .sort(naturalSort)
        .map((f) => `/gallery/${cat.dir}/${f}`);
    } catch {
      files = [];
    }
    return { key: cat.key, label: cat.label, images: files };
  }).filter((c) => c.images.length > 0);
}

export function galleryCount(cats: GalleryCategory[]) {
  return cats.reduce((n, c) => n + c.images.length, 0);
}

export interface GalleryImage {
  src: string;
  key: string;
  label: string;
  num: string;
  alt: string;
}

// Singular label used in alt text (e.g. "Weddings" -> "wedding")
const SINGULAR: Record<string, string> = {
  wedding: "wedding",
  quinceanera: "quinceañera",
  birthday: "birthday",
  anniversary: "anniversary",
};

export function getAllGalleryImages(): GalleryImage[] {
  const cats = getGallery();
  const out: GalleryImage[] = [];
  for (const c of cats) {
    c.images.forEach((src) => {
      const num = src.match(/(\d+)\.\w+$/)?.[1] ?? "";
      const theme = SINGULAR[c.key] ?? c.key;
      out.push({
        src,
        key: c.key,
        label: c.label,
        num,
        alt: `Custom vinyl ${theme} dance floor wrap design${
          num ? ` #${parseInt(num, 10)}` : ""
        } by Houston Dance Floor Wraps`,
      });
    });
  }
  return out;
}
