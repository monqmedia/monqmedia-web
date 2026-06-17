"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    setValue(0);
    const start = performance.now();
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return value;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const revenue = useCountUp(9, 1500, started);
  const ads = useCountUp(1, 1000, started);
  const leads = useCountUp(2000, 1500, started);

  return (
    <section
      ref={ref}
      className="bg-white"
      style={{ padding: "clamp(48px,5.5vw,72px) clamp(20px,5vw,72px) clamp(28px,3vw,40px)" }}
    >
      <div style={{ maxWidth: "740px", margin: "0 auto" }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#EB0A5C", marginBottom: "16px" }}>
            Resultados comprobables
          </div>
          <h2 style={{ fontSize: "clamp(28px,3.4vw,46px)", lineHeight: 1.06, letterSpacing: "-0.035em", fontWeight: 400, margin: "0 auto 16px", maxWidth: "680px", color: "#14161b" }}>
            <strong style={{ fontWeight: 800 }}>Nuestros números</strong> hablan por si solos
          </h2>
          <p style={{ fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.55, color: "#52575f", maxWidth: "600px", margin: "0 auto" }}>
            No generamos leads sin más.{" "}
            <strong style={{ color: "#14161b", fontWeight: 700 }}>Generamos ventas.</strong>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-[0.74fr_1.26fr]" style={{ gap: "14px", alignItems: "stretch" }}>

          {/* Left — square +9M€ (móvil: estética suave) */}
          <div
            className="sm:hidden"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "22px",
              aspectRatio: "1 / 1",
              background: "linear-gradient(100deg, #f7c4d9 0%, #fce0eb 38%, #fdf2f7 68%, #ffffff 100%)",
              padding: "clamp(20px,1.8vw,28px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "clamp(30px,3.2vw,44px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.84, color: "#EB0A5C" }}>
              +{revenue}M€
            </div>
            <div style={{ fontSize: "clamp(13px,1vw,15px)", fontWeight: 600, color: "#3a2731", marginTop: "10px", lineHeight: 1.35, maxWidth: "180px" }}>
              Facturación generada para nuestros clientes
            </div>
          </div>

          {/* Left — square +9M€ (desktop: gradiente) */}
          <div
            className="hidden sm:flex"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "22px",
              aspectRatio: "1 / 1",
              background: "linear-gradient(160deg,#f0246e 0%, #EB0A5C 46%, #7c0533 100%)",
              color: "#fff",
              padding: "clamp(20px,1.8vw,28px)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 22px 44px -26px rgba(235,10,92,.5)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-40px",
                width: "170px",
                height: "170px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,.18), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ fontSize: "clamp(30px,3.2vw,44px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.84, position: "relative" }}>
              +{revenue}M€
            </div>
            <div style={{ fontSize: "clamp(13px,1vw,15px)", fontWeight: 600, color: "#ffd9e6", marginTop: "10px", lineHeight: 1.35, maxWidth: "180px", position: "relative" }}>
              Facturación generada para nuestros clientes
            </div>
          </div>

          {/* Right — two stacked blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

            {/* Block 1 — +1M€ */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                flex: 1,
                borderRadius: "22px",
                background: "linear-gradient(100deg, #f7c4d9 0%, #fce0eb 38%, #fdf2f7 68%, #ffffff 100%)",
                padding: "clamp(18px,1.6vw,24px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "clamp(26px,2.8vw,38px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.86, color: "#EB0A5C" }}>
                +{ads}M€
              </div>
              <div style={{ fontSize: "clamp(13px,1vw,15px)", fontWeight: 600, color: "#3a2731", marginTop: "8px", lineHeight: 1.4 }}>
                Invertidos en publicidad
              </div>
            </div>

            {/* Block 2 — +2.000 */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                flex: 1,
                borderRadius: "22px",
                background: "linear-gradient(100deg, #f7c4d9 0%, #fce0eb 38%, #fdf2f7 68%, #ffffff 100%)",
                padding: "clamp(18px,1.6vw,24px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "clamp(26px,2.8vw,38px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 0.86, color: "#EB0A5C" }}>
                +{leads.toLocaleString("es-ES")}
              </div>
              <div style={{ fontSize: "clamp(13px,1vw,15px)", fontWeight: 600, color: "#3a2731", marginTop: "8px", lineHeight: 1.4, maxWidth: "340px" }}>
                Clientes potenciales generados al mes
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
