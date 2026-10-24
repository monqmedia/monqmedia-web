"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Registra en Vercel Analytics los clics de contacto (teléfono, email,
// WhatsApp) y los CTA hacia #contacto, con la página de origen. Así se puede
// medir qué páginas traen contactos sin tocar cada enlace.
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
      track(type === "cta" ? "CTA contacto" : "Contacto", {
        tipo: type,
        pagina: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
