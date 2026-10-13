"use client";

import Image from "next/image";
import Link from "next/link";
import { useFromIa } from "@/app/components/useFromIa";
import { crossSiteClick } from "@/app/components/crossSite";

export default function Header() {
  const fromIa = useFromIa();

  return (
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
              href="https://ia.monqmedia.com/?from=web"
              onClick={crossSiteClick}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-[10px] rounded-full text-[#2A64E6] text-[10.5px] sm:text-[12.5px] leading-[1.15] text-center font-extrabold tracking-[0.03em] border-2 border-transparent shadow-[0_8px_24px_-10px_rgba(42,100,230,.65)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(42,100,230,.8)] transition-[transform,box-shadow] duration-200"
              style={{
                backgroundImage:
                  "linear-gradient(#fff,#fff),linear-gradient(120deg,#4C8DFF,#2A64E6,#15399E)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box,border-box",
              }}
            >
              SISTEMA COMERCIAL CON IA
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 w-3 h-3 sm:w-[14px] sm:h-[14px]">
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
  );
}
