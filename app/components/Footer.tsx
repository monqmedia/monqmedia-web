import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1015] text-[#9aa0aa] px-4 sm:px-8 lg:px-[72px] pt-10 pb-8">
      <div className="flex flex-wrap gap-5 items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image src="/monq-icon-white.png" alt="Monq Media" width={30} height={30} />
          <span className="text-[17px] font-extrabold text-white tracking-[0.04em] uppercase">
            monq media
          </span>
        </div>
        <span className="text-[13.5px]">
          © 2026 Monq Media Labs S.L. — Marketing para energías renovables
        </span>
      </div>
      <div className="border-t border-[#1e2028] pt-5 flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/politica-de-privacidad" className="text-[12.5px] hover:text-white transition-colors">
          Política de privacidad
        </Link>
        <Link href="/aviso-legal" className="text-[12.5px] hover:text-white transition-colors">
          Aviso legal
        </Link>
        <Link href="/cookies" className="text-[12.5px] hover:text-white transition-colors">
          Política de cookies
        </Link>
      </div>
    </footer>
  );
}
