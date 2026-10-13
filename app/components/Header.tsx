"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const IA_FLAG = "monq-from-ia";

// Visitantes que llegan desde ia.monqmedia.com (?from=ia): botón de vuelta a
// la web de IA en el header y, en móvil, "Contáctanos" flotante abajo.
function useFromIa() {
  const [fromIa, setFromIa] = useState(false);
  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get("from") === "ia") {
        sessionStorage.setItem(IA_FLAG, "1");
      }
      setFromIa(sessionStorage.getItem(IA_FLAG) === "1");
    } catch {
      setFromIa(new URLSearchParams(window.location.search).get("from") === "ia");
    }
  }, []);
  return fromIa;
}

// Visible tras pasar el hero y oculto mientras se ve #contacto o el footer.
function useFloatingCtaVisible(enabled: boolean) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const hero = document.querySelector("[data-hero]");
    const blockers = [document.querySelector("#contacto"), document.querySelector("footer")].filter(
      (el): el is Element => !!el
    );
    const onScreen = new Set<Element>();
    let pastHero = !hero;
    const update = () => {
      if (!hero) pastHero = window.scrollY > window.innerHeight * 0.6;
      setVisible(pastHero && onScreen.size === 0);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === hero) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        else if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      });
      update();
    });
    if (hero) io.observe(hero);
    blockers.forEach((el) => io.observe(el));
    if (!hero) window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, [enabled]);
  return visible;
}

export default function Header() {
  const fromIa = useFromIa();
  const ctaVisible = useFloatingCtaVisible(fromIa);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.82] backdrop-blur-md border-b border-[#f0f0f2]">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-8 lg:px-[72px] py-[14px] sm:py-[18px]">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Image src="/monq-icon-black.png" alt="Monq Media" width={34} height={34} className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px]" />
            <span className="text-[15px] sm:text-[18px] font-extrabold tracking-[0.04em] uppercase">
              monq media
            </span>
          </Link>

          <div className="flex items-center gap-3 min-w-0">
            {fromIa && (
              <a
                href="https://ia.monqmedia.com"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-[10px] rounded-full text-[#0E1116] text-[10.5px] sm:text-[12.5px] leading-[1.15] text-center font-extrabold tracking-[0.02em] border-2 border-transparent shadow-[0_8px_22px_-12px_rgba(42,100,230,.6)] hover:-translate-y-0.5 transition-transform"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff,#fff),linear-gradient(120deg,#4C8DFF,#2A64E6,#15399E)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box,border-box",
                }}
              >
                SISTEMA COMERCIAL CON IA
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A64E6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 w-3 h-3 sm:w-[14px] sm:h-[14px]">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
            <a
              href="/#contacto"
              className={`${fromIa ? "hidden sm:inline-flex" : "inline-flex"} items-center gap-2 px-[22px] py-[11px] rounded-full bg-[#EB0A5C] text-white text-[14.5px] font-bold hover:bg-[#c40a4d] transition-colors`}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </header>

      {fromIa && (
        <a
          href="/#contacto"
          aria-hidden={!ctaVisible}
          tabIndex={ctaVisible ? 0 : -1}
          className={`sm:hidden fixed left-1/2 z-50 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EB0A5C] text-white text-[15px] font-bold whitespace-nowrap shadow-[0_14px_32px_-10px_rgba(235,10,92,.7)] transition-[opacity,transform,visibility] duration-300 ${
            ctaVisible ? "visible opacity-100 -translate-x-1/2 translate-y-0" : "invisible opacity-0 -translate-x-1/2 translate-y-3 pointer-events-none"
          }`}
          style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
        >
          Contáctanos
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </>
  );
}
