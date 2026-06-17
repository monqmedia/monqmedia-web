import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/[0.82] backdrop-blur-md border-b border-[#f0f0f2]">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-[72px] py-[18px]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/monq-icon-black.png" alt="Monq Media" width={34} height={34} />
          <span className="text-[18px] font-extrabold tracking-[0.04em] uppercase">
            monq media
          </span>
        </Link>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-[22px] py-[11px] rounded-full bg-[#EB0A5C] text-white text-[14.5px] font-bold hover:bg-[#c40a4d] transition-colors"
        >
          Contáctanos
        </a>
      </div>
    </header>
  );
}
