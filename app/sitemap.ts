import type { MetadataRoute } from "next";
import { articles } from "../content/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arquentra.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    { path: "/blog", priority: 0.7 },
    ...articles.map(({ slug }) => ({ path: `/blog/${slug}`, priority: 0.6 })),
  ];
  return paths.map(({ path, priority }) => ({ url: new URL(path, siteUrl).toString(), changeFrequency: "monthly", priority }));
}
