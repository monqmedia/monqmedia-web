"use client";

import { useState } from "react";
import Image from "next/image";

interface FeaturedVideoProps {
  videoId: string;
  cover: string;
  title: string;
}

// Vídeo destacado (caso de éxito): miniatura con botón rosa como las VideoCard;
// el reproductor de YouTube solo se carga al pulsar.
export default function FeaturedVideo({ videoId, cover, title }: FeaturedVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative">
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-7% -6% -9% -6%",
          borderRadius: "40px",
          background: "radial-gradient(ellipse at 50% 60%, rgba(235,10,92,.24), rgba(235,10,92,.08) 45%, transparent 72%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="relative w-full aspect-video rounded-[22px] overflow-hidden bg-[#1b0712] border border-[#e8e8ec]"
        style={{ boxShadow: "0 28px 60px -26px rgba(235,10,92,.38), 0 18px 44px -24px rgba(20,22,27,.35)" }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir vídeo: ${title}`}
            className="group absolute inset-0 w-full h-full border-0 cursor-pointer p-0"
          >
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent 55%, rgba(27,7,18,.45) 100%)" }}
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-full bg-[#EB0A5C] shadow-[0_12px_32px_-6px_rgba(235,10,92,.85)] transition-transform duration-200 group-hover:scale-110">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-[3px]">
                <path d="M8 5 L19 12 L8 19 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
