import type { MetadataRoute } from "next";
import { site, categories } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/glossary",
    "/guides",
    "/guides/maximalist-lighting-styles",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${base}/best/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages];
}
