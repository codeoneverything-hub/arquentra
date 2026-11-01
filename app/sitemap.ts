import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL("/", siteUrl).toString(), changeFrequency: "monthly", priority: 1 }];
}
