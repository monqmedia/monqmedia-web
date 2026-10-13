"use client";

import { useFromIa } from "@/app/components/useFromIa";

// CTA flotante en móvil para visitas desde ia.monqmedia.com. Es sticky dentro
// de un contenedor que va del final del hero al inicio de #contacto, así que
// aparece y desaparece solo con CSS: nada cambia en el DOM durante el scroll
// (en iOS, ocultar un elemento fijo en pleno scroll puede bloquearlo).
export default function FloatingCta() {
  const fromIa = useFromIa();
  if (!fromIa) return null;

  return (
    <div
      className="sm:hidden sticky z-40 h-0 pointer-events-none"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
    >
      <a
        href="#contacto"
        className="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EB0A5C] text-white text-[15px] font-bold whitespace-nowrap shadow-[0_14px_32px_-10px_rgba(235,10,92,.7)]"
      >
        Contáctanos
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h13" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
