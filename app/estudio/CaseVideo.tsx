"use client";

import Image from "next/image";
import BrandVideo from "@/app/components/BrandVideo";

// Vídeo de testimonio: portada + botón rosa; se reproduce con el reproductor propio.
export default function CaseVideo({ src, cover, title }: { src: string; cover: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-[18px] overflow-hidden bg-[#1b0712]">
      <BrandVideo src={src} title={title} accent="#437EEF">
        <Image src={cover} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 640px" />
        <span className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(27,7,18,.35) 100%)" }} />
        <span className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] rounded-full bg-[#437EEF] shadow-[0_12px_32px_-6px_rgba(67,126,239,.85)] transition-transform duration-200 group-hover:scale-110">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-[3px]"><path d="M8 5 L19 12 L8 19 Z" /></svg>
        </span>
      </BrandVideo>
    </div>
  );
}
