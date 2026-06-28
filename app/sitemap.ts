import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAreaSlugs } from "@/lib/serviceAreas";
import { getPostSlugs } from "@/lib/blog";
import { getAllGalleryImages } from "@/lib/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const galleryImages = getAllGalleryImages().map(
    (img) => `${site.url}${img.src}`
  );

  const staticPages = [
    "",
    "/services",
    "/pricing",
    "/service-areas",
    "/blog",
    "/about",
    "/contact",
    "/faq",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  // Gallery gets its own entry carrying every image (image sitemap)
  const galleryPage = {
    url: `${site.url}/gallery`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: galleryImages,
  };

  const areaPages = getAreaSlugs().map((slug) => ({
    url: `${site.url}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = getPostSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, galleryPage, ...areaPages, ...blogPages];
}
