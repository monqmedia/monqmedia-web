"use client";

import { useEffect } from "react";
import { pageview, track } from "@vercel/analytics";

// Registra en Vercel Analytics los clics de contacto (teléfono, email,
// WhatsApp) y los CTA hacia #contacto, con la página de origen. Así se puede
// medir qué páginas traen contactos sin tocar cada enlace. Los eventos
// personalizados requieren plan Pro, así que además se envía una página
// virtual /_contacto/<tipo><página> que sí aparece en el plan gratuito.
export default function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      const type = href.startsWith("tel:")
        ? "telefono"
        : href.startsWith("mailto:")
          ? "email"
          : /wa\.me|whatsapp/i.test(href)
            ? "whatsapp"
            : href.endsWith("#contacto")
              ? "cta"
              : null;
      if (!type) return;
      const pagina = window.location.pathname;
      track(type === "cta" ? "CTA contacto" : "Contacto", { tipo: type, pagina });
      const virtual = `/_contacto/${type}${pagina === "/" ? "" : pagina}`;
      pageview({ route: virtual, path: virtual });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
