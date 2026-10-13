import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const BASE_URL = "https://www.monqmedia.com";

// Solo URLs canónicas que responden 200. /que-ofrecemos, /nosotros, /opiniones
// y /contacto redirigen a anclas de la home (ver next.config.mjs), así que no
// deben aparecer en el sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const blog: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/leads-placas-solares`,
      lastModified: new Date("2026-10-07"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sistema-ia-contacto-leads`,
      lastModified: new Date("2026-10-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/casos-de-exito`,
      lastModified: new Date("2026-10-08"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/leads-autoconsumo-empresas`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/leads-baterias-solares`,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(posts[0].date),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blog,
  ];
}
