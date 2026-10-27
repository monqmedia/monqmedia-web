"use client";

import { useState } from "react";
import Image from "next/image";
import BrandVideo from "@/app/components/BrandVideo";

interface FeaturedVideoProps {
  videoId: string;
  cover: string;
  title: string;
  /** Vídeo propio (MP4). Si existe, se usa el reproductor de la web en lugar de YouTube. */
  videoSrc?: string;
  /** Pie del vídeo (texto discreto debajo). */
  caption?: string;
  /** Titular sobre la miniatura (arriba a la izquierda), con el estilo de los testimonios. */
  headline?: React.ReactNode;
}

// Vídeo destacado (caso de éxito): miniatura con botón rosa como las VideoCard;
// el reproductor de YouTube solo se carga al pulsar.
export default function FeaturedVideo({ videoId, cover, title, videoSrc, caption, headline }: FeaturedVideoProps) {
  const [playing, setPlaying] = useState(false);

  const coverEl = (
    <>
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent 60%, rgba(27,7,18,.28) 100%)" }}
            />
            {headline && (
              // Mismo estilo que los titulares de las VideoCard (comillas, peso, barra rosa), en negro y arriba a la izquierda
              <span className="absolute left-4 top-4 sm:left-8 sm:top-7 w-[39%] flex flex-col text-left">
                <span className="font-serif text-4xl sm:text-6xl leading-[0.6] text-[#EB0A5C] h-[20px] sm:h-[32px] block">
                  &ldquo;
                </span>
                <span className="text-[15px] sm:text-[23px] lg:text-[21px] xl:text-[24px] font-extrabold leading-[1.16] tracking-tight text-[#14161b]">
                  {headline}
                </span>
                <span className="mt-2 sm:mt-3 w-[34px] h-[3px] rounded-sm bg-[#EB0A5C]" />
              </span>
            )}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-full bg-[#EB0A5C] shadow-[0_12px_32px_-6px_rgba(235,10,92,.85)] transition-transform duration-200 group-hover:scale-110">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-[3px]">
                <path d="M8 5 L19 12 L8 19 Z" />
              </svg>
            </span>
    </>
  );

  return (
    <div className="relative">
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-7% -6% -9% -6%",
          borderRadius: "40px",
          background: "radial-gradient(ellipse at 50% 60%, rgba(20,22,27,.22), rgba(20,22,27,.07) 45%, transparent 72%)",
          filter: "blur(30px)",
        }}
      />
      <div
        className="relative w-full aspect-video rounded-[22px] overflow-hidden bg-[#1b0712] border border-[#e8e8ec]"
        style={{ boxShadow: "0 28px 60px -26px rgba(20,22,27,.42), 0 12px 30px -18px rgba(20,22,27,.25)" }}
      >
        {videoSrc ? (
          <BrandVideo src={videoSrc} title={title}>
            {coverEl}
          </BrandVideo>
        ) : playing ? (
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
            {coverEl}
          </button>
        )}
      </div>
      {caption && (
        <p className="relative mt-4 text-center text-[13.5px] sm:text-[14px] leading-snug italic text-[#8a8f99]">
          {caption}
        </p>
      )}
    </div>
  );
}
