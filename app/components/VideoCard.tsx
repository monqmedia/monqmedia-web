"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoCardProps {
  company: string;
  headline: string;
  quote: string;
  person: string;
  initials: string;
  cover: string;
  videoId: string;
}

export default function VideoCard({
  company,
  headline,
  quote,
  person,
  initials,
  cover,
  videoId,
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex flex-col bg-[#1c1e26] border border-[#2a2d37] rounded-[22px] overflow-hidden">
      <div className="relative w-full aspect-[16/10]">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={company}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full border-0 cursor-pointer p-0 text-left overflow-hidden bg-[#1b0712]"
          >
            <Image
              src={cover}
              alt={company}
              fill
              className="object-cover object-[center_28%]"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            {/* gradient overlays */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(96deg, #1b0712 0%, rgba(27,7,18,.94) 32%, rgba(27,7,18,.55) 52%, rgba(27,7,18,.12) 74%, transparent 100%)",
              }}
            />
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(27,7,18,.5) 0%, transparent 26%, transparent 70%, rgba(27,7,18,.85) 100%)",
              }}
            />
            {/* Monq badge */}
            <span className="absolute top-[15px] left-[17px] flex items-center gap-2 text-[11.5px] font-bold text-white/90 whitespace-nowrap">
              <span className="grid place-items-center w-6 h-6 rounded-full bg-white/20">
                <Image src="/monq-icon-white.png" alt="" width={13} height={13} />
              </span>
              Monq Media
            </span>
            {/* Headline */}
            <span className="absolute left-5 right-[40%] top-[50px] bottom-[18px] flex flex-col justify-center">
              <span className="font-serif text-5xl leading-[0.6] text-[#ff8fbb] h-[26px] block">
                &ldquo;
              </span>
              <span className="text-lg font-extrabold leading-[1.16] tracking-tight text-white">
                {headline}
              </span>
              <span className="mt-3 w-[34px] h-[3px] rounded-sm bg-[#EB0A5C]" />
            </span>
            {/* Play button */}
            <span className="absolute top-1/2 left-[76%] -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[58px] h-[58px] rounded-full bg-[#EB0A5C] shadow-[0_12px_32px_-6px_rgba(235,10,92,.85)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5 L19 12 L8 19 Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[14.5px] leading-relaxed text-[#cfd2da] italic mb-5">{quote}</p>
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#2a2d37]">
          <span className="flex-none grid place-items-center w-[38px] h-[38px] rounded-full bg-[rgba(235,10,92,.18)] text-[14px] font-extrabold text-[#ff9ec4]">
            {initials}
          </span>
          <div className="text-[13.5px] font-bold text-white leading-snug">{person}</div>
        </div>
      </div>
    </div>
  );
}
