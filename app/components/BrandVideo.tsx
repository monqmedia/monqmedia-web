"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface BrandVideoProps {
  src: string;
  title: string;
  /** Portada (miniatura, titulares, botón de play) que se muestra antes de reproducir. */
  children: React.ReactNode;
  /** Color de los controles (por defecto, el rosa de la web). */
  accent?: string;
}

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

// Reproductor propio (sin YouTube): arranca con un solo toque, se reproduce
// dentro de la página en móvil y usa controles con la estética de la web.
export default function BrandVideo({ src, title, children, accent = "#EB0A5C" }: BrandVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const pokeControls = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 2500);
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  // play() se llama directamente en el gesto del usuario: así iOS lo permite a la primera.
  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => {});
    pokeControls();
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
    pokeControls();
  };

  const seek = (e: React.PointerEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * duration;
    pokeControls();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    pokeControls();
  };

  const fullscreen = () => {
    const v = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    const w = wrapRef.current;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else if (w?.requestFullscreen) w.requestFullscreen().catch(() => {});
    else v?.webkitEnterFullscreen?.(); // iPhone
  };

  const progress = duration ? (time / duration) * 100 : 0;
  const controlsVisible = showControls || !playing;

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 bg-black"
      onPointerMove={started ? pokeControls : undefined}
    >
      <video
        ref={videoRef}
        src={src}
        title={title}
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-contain bg-black"
        onClick={started ? toggle : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false);
          setShowControls(true);
        }}
        onEnded={() => setShowControls(true)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
      />

      {!started && (
        <button
          onClick={start}
          aria-label={`Reproducir vídeo: ${title}`}
          className="group absolute inset-0 w-full h-full border-0 cursor-pointer p-0 text-left"
        >
          {children}
        </button>
      )}

      {started && (
        <div
          className={`absolute inset-x-0 bottom-0 px-3 sm:px-4 pb-3 pt-10 transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ background: "linear-gradient(180deg, transparent, rgba(10,4,8,.78))" }}
        >
          <div
            className="relative h-[14px] flex items-center cursor-pointer touch-none"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              seek(e);
            }}
            onPointerMove={(e) => e.buttons && seek(e)}
            role="slider"
            aria-label="Progreso del vídeo"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration)}
            aria-valuenow={Math.round(time)}
          >
            <div className="w-full h-[4px] rounded-full bg-white/25 overflow-hidden">
              <div className="h-full" style={{ width: `${progress}%`, background: accent }} />
            </div>
            <div
              className="absolute w-[12px] h-[12px] -ml-[6px] rounded-full bg-white"
              style={{ left: `${progress}%`, boxShadow: `0 0 0 3px ${accent}99` }}
            />
          </div>
          <div className="mt-2 flex items-center gap-3 text-white">
            <button onClick={toggle} aria-label={playing ? "Pausar" : "Reproducir"} className="grid place-items-center w-8 h-8 rounded-full" style={{ background: accent }}>
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-[2px]"><path d="M8 5 L19 12 L8 19 Z" /></svg>
              )}
            </button>
            <span className="text-[12px] font-semibold tabular-nums text-white/85">
              {fmt(time)} / {fmt(duration)}
            </span>
            <span className="flex-1" />
            <button onClick={toggleMute} aria-label={muted ? "Activar sonido" : "Silenciar"} className="grid place-items-center w-8 h-8">
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="m23 9-6 6M17 9l6 6" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" /></svg>
              )}
            </button>
            <button onClick={fullscreen} aria-label="Pantalla completa" className="grid place-items-center w-8 h-8">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
