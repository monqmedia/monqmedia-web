"use client";

import Script from "next/script";
import { useEffect } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

type Fbq = ((...args: unknown[]) => void) & { callMethod?: unknown };
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** Evento del píxel con el mismo ID que se manda por la API de conversiones (deduplicación). */
export function trackPixel(event: "Lead" | "Schedule", eventId: string, data: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", event, data, { eventID: eventId });
}

/** Guarda el fbclid del anuncio para atribuir la conversión aunque el píxel no haya cargado. */
export function getFbclid(): { fbclid?: string; fbclidTs?: number } {
  try {
    const raw = sessionStorage.getItem("monq-fbclid");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function MetaPixel() {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("fbclid");
    if (id) {
      try {
        sessionStorage.setItem("monq-fbclid", JSON.stringify({ fbclid: id, fbclidTs: Date.now() }));
      } catch {}
    }
  }, []);

  if (!PIXEL_ID) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
}
