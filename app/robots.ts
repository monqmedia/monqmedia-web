import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/aviso-legal",
        "/cookies",
        "/accesibilidad",
        "/politica-de-privacidad",
      ],
    },
    sitemap: "https://www.monqmedia.com/sitemap.xml",
  };
}
