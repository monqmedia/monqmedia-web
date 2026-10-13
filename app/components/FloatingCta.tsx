"use client";

import { useEffect, useState } from "react";
import { useDebugFlag, useFromIa } from "@/app/components/useFromIa";

// CTA flotante en móvil para visitas desde ia.monqmedia.com: visible desde el
// inicio y oculto mientras se ve #contacto o el footer (igual que en ia.monqmedia.com).
export default function FloatingCta() {
  const fromIaRaw = useFromIa();
  const noFloat = useDebugFlag("nf");
  const fromIa = fromIaRaw && !noFloat;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!fromIa) return;
    const targets = [document.querySelector("#contacto"), document.querySelector("footer")].filter(
      (el): el is Element => !!el
    );
    const onScreen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
      setHidden(onScreen.size > 0);
    });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [fromIa]);

  if (!fromIa) return null;

  return (
    <a
      href="#contacto"
      className={`sm:hidden fixed left-1/2 z-50 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EB0A5C] text-white text-[15px] font-bold whitespace-nowrap shadow-[0_14px_32px_-10px_rgba(235,10,92,.7)] transition-[transform,opacity] duration-300 ${
        hidden ? "opacity-0 pointer-events-none -translate-x-1/2 translate-y-[160%]" : "opacity-100 -translate-x-1/2 translate-y-0"
      }`}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
    >
      Contáctanos
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h13" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}
