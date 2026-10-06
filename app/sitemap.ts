import type { MetadataRoute } from "next";

const BASE_URL = "https://www.monqmedia.com";

// Solo URLs canónicas que responden 200. /que-ofrecemos, /nosotros, /opiniones
// y /contacto redirigen a anclas de la home (ver next.config.mjs), así que no
// deben aparecer en el sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
