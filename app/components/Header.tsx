"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Qué ofrecemos", href: "/que-ofrecemos" },
  { label: "Opiniones", href: "/opiniones" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/[0.82] backdrop-blur-md border-b border-[#f0f0f2]">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[72px] py-[18px]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/monq-icon-black.png" alt="Monq Media" width={34} height={34} />
          <span className="text-[18px] font-extrabold tracking-[0.04em] uppercase">
            monq media
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14.5px] font-semibold text-[#52575f] hover:text-[#14161b] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-full bg-[#EB0A5C] text-white text-[14.5px] font-bold hover:bg-[#c40a4d] transition-colors"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[6px]"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`w-6 h-0.5 bg-[#14161b] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#14161b] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#14161b] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#f0f0f2] bg-white px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-semibold text-[#14161b] py-3 border-b border-[#f0f0f2] last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contacto"
            className="mt-3 flex justify-center items-center px-6 py-3 rounded-full bg-[#EB0A5C] text-white text-[14.5px] font-bold"
            onClick={() => setOpen(false)}
          >
            Contáctanos
          </a>
        </div>
      )}
    </header>
  );
}
