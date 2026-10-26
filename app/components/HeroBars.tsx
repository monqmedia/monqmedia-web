"use client";

import { useEffect, useRef, useState } from "react";

type Bar = {
  left: string;
  top: string;
  width: string;
  height: string;
  fade: string;
  bg: string;
  shadow?: string;
  growDelay: string;
  growDur: string;
  textDelay: string;
  value: string;
  label: string;
  valueColor: string;
  labelColor: string;
};

// Orden de pintado igual que en el diseño: la barra baja (+2.000) queda delante.
const BARS: Bar[] = [
  {
    left: "6%", top: "24%", width: "42%", height: "62%", fade: "55%",
    bg: "linear-gradient(180deg,#FBC6D6 0%,#FCD3DF 100%)",
    growDelay: ".1s", growDur: ".55s", textDelay: ".75s",
    value: "+1M€", label: "Invertidos en publicidad", valueColor: "#C2185B", labelColor: "#8A3D5C",
  },
  {
    left: "53%", top: "7%", width: "42%", height: "76%", fade: "58%",
    bg: "linear-gradient(170deg,#EC0A5E 0%,#C80B4E 100%)",
    growDelay: ".2s", growDur: ".6s", textDelay: ".85s",
    value: "+9M€", label: "Facturación generada para clientes", valueColor: "#fff", labelColor: "#FFE4EE",
  },
  {
    left: "27%", top: "50%", width: "44%", height: "50%", fade: "50%",
    bg: "linear-gradient(180deg,#FFE9F0 0%,#FDEFF3 100%)", shadow: "0 -10px 40px rgba(232,9,90,0.12)",
    growDelay: "0s", growDur: ".55s", textDelay: ".65s",
    value: "+2.000", label: "Clientes potenciales generados al mes", valueColor: "#E8095A", labelColor: "#8A3D5C",
  },
];

// Barras del hero: crecen una sola vez al entrar en pantalla (sin reinicio al hacer clic).
export default function HeroBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      const t = setTimeout(() => setPlay(true), 100);
      return () => clearTimeout(t);
    }
    let t: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          t = setTimeout(() => setPlay(true), 80);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[560px] mx-auto mt-2 lg:mt-0"
      style={{ aspectRatio: "1 / 1.12", containerType: "inline-size" }}
    >
      {BARS.map((b) => {
        const mask = `linear-gradient(to bottom,#000 ${b.fade},transparent 100%)`;
        return (
          <div key={b.value}>
            <div
              className="absolute"
              style={{
                left: b.left, top: b.top, width: b.width, height: b.height,
                transformOrigin: "bottom",
                transform: `scaleY(${play ? 1 : 0})`,
                transition: `transform ${b.growDur} cubic-bezier(.2,.9,.25,1) ${b.growDelay}`,
                WebkitMaskImage: mask,
                maskImage: mask,
              }}
            >
              <div className="w-full h-full" style={{ background: b.bg, boxShadow: b.shadow }} />
            </div>
            <div
              className="absolute flex flex-col items-center text-center"
              style={{
                left: b.left, top: b.top, width: b.width,
                paddingTop: "7cqw", gap: "1.4cqw",
                opacity: play ? 1 : 0,
                transform: `translateY(${play ? "0px" : "14px"})`,
                transition: `opacity .5s ease ${b.textDelay}, transform .5s ease ${b.textDelay}`,
              }}
            >
              <div
                className="font-extrabold"
                style={{ fontSize: "9.6cqw", lineHeight: 1, letterSpacing: "-0.02em", color: b.valueColor }}
              >
                {b.value}
              </div>
              <div
                className="font-medium"
                style={{ fontSize: "max(13px,3.5cqw)", lineHeight: 1.3, color: b.labelColor, maxWidth: "80%", textWrap: "balance" }}
              >
                {b.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
