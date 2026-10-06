import type { MetadataRoute } from "next";

const DISALLOW = [
  "/aviso-legal",
  "/cookies",
  "/accesibilidad",
  "/politica-de-privacidad",
];

// Rastreadores de buscadores con IA (ChatGPT, Claude, Perplexity, Gemini,
// Apple). Se permiten explícitamente para que puedan citar la web.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_BOTS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: "https://www.monqmedia.com/sitemap.xml",
  };
}
