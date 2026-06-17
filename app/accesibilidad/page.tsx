import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Accesibilidad",
  robots: { index: false, follow: false },
};

export default function Accesibilidad() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">Legal</p>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold tracking-tight text-[#14161b] mb-2">
            Declaración de Accesibilidad
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-10 border-b border-[#f0f0f2]">
            www.monqmedia.com
          </p>

          <div className="space-y-4 text-[15.5px] leading-relaxed text-[#52575f]">
            <p>Monq Media se ha comprometido a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público (en adelante, Real Decreto 1112/2018). La presente declaración de accesibilidad se aplica a www.monqmedia.com.</p>
            <p>Este sitio web aspira a alcanzar el nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 y cumplir con la norma UNE-EN 301 549:2022. Trabajamos de forma continua para mejorar la experiencia de todos los usuarios, incluyendo aquellas personas con discapacidad, y revisamos periódicamente nuestras páginas para detectar y corregir posibles barreras de accesibilidad.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
