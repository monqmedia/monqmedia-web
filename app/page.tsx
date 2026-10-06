import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import VideoCard from "@/app/components/VideoCard";
import StatsSection from "@/app/components/StatsSection";

export const metadata: Metadata = {
  title: {
    absolute: "Monq Media | Leads exclusivos para instaladores de paneles solares",
  },
  description:
    "Leads exclusivos y filtrados para instaladores de placas solares, autoconsumo, aerotermia y cargadores de coche eléctrico en toda España. Asesoramiento gratuito.",
  openGraph: {
    title: "Monq Media | Leads exclusivos para instaladores de paneles solares",
    description:
      "Leads exclusivos y filtrados para instaladores de placas solares, autoconsumo, aerotermia y cargadores de coche eléctrico en toda España. Asesoramiento gratuito.",
    url: "https://www.monqmedia.com",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com",
  },
};

const logos = [
  { name: "Nerosolar",             src: "/logos/nerosolar.png", maxH: "38px" },
  { name: "Vira Energy",           src: "/logos/vira.png",      maxH: "52px" },
  { name: "ESR Energy Solutions",  src: "/logos/esr.png",       maxH: "74px" },
  { name: "Elektrosol",            src: "/logos/elektrosol.png",maxH: "32px" },
  { name: "Subvenziona",           src: "/logos/subvenziona.png",maxH:"32px" },
  { name: "Solurgy Renovables",    src: "/logos/solurgy.png",   maxH: "44px" },
  { name: "Arelis Energía Solar",  src: "/logos/arelis.png",    maxH: "46px" },
  { name: "MasRed Ingeniería",     src: "/logos/masred.png",    maxH: "50px" },
  { name: "Eres Energía",          src: "/logos/eres.png",      maxH: "52px" },
  { name: "Pulso Solar",           src: "/logos/pulso.png",     maxH: "32px" },
  { name: "Solvi Green Freedom",   src: "/logos/solvi.png",     maxH: "46px" },
  { name: "Alfasol",               src: "/logos/alfasol.png",   maxH: "30px" },
  { name: "Nibbio",                src: "/logos/nibbio.png",    maxH: "56px" },
  { name: "Bayo Solar",            src: "/logos/bayo.png",      maxH: "66px" },
  { name: "Sureste Refrigeración", src: "/logos/sureste.png",   maxH: "74px" },
  { name: "Efistar",               src: "/logos/efistar.png",   maxH: "40px" },
  { name: "iSolar",                src: "/logos/isolar.png",    maxH: "50px" },
  { name: "Turelectric",           src: "/logos/turelectric.png", maxH: "36px" },
];

const testimonials = [
  {
    company: "Subvenziona",
    headline: "Más leads, gastando mucho menos",
    quote: (
      <>
        &ldquo;El cambio ha sido brutal. Antes hacíamos nuestras propias campañas y no teníamos los resultados esperados. Ahora <strong>gastamos muchísimo menos y obtenemos muchos más leads</strong>, que luego convertimos en clientes finales.&rdquo;
      </>
    ),
    person: "Noel — CEO de Subvenziona.es",
    initials: "N",
    cover: "/duo-subvenziona.png",
    videoId: "Z71qxbKYOPc",
  },
  {
    company: "Solar Clic",
    headline: "10-12 instalaciones mensuales de forma estable",
    quote: (
      <>
        &ldquo;Desde que colaboramos con Monq Media, gracias a sus campañas de leads en redes sociales, hemos pasado <strong>de 6-8 instalaciones mensuales a una media de 10-12 de manera constante</strong>. Recomendamos sus servicios.&rdquo;
      </>
    ),
    person: "Antonio — CEO de Solarclic.es",
    initials: "A",
    cover: "/duo-solarclic.png",
    videoId: "1wIVs2OCoBc",
  },
  {
    company: "Vadesol Insular",
    headline: "De la incertidumbre a proyectos constantes",
    quote: (
      <>
        &ldquo;Antes tenía mucha incertidumbre porque me llegaban pocos clientes, desde que trabajo con ellos me va muy bien, sé que todos los meses voy a tener bastantes clientes potenciales y <strong>he crecido en las instalaciones un 60%.</strong>&rdquo;
      </>
    ),
    person: "CEO de Vadesol Insular",
    initials: "CD",
    cover: "/duo-vadesol.png",
    videoId: "LEpVk_4VwG8",
  },
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EB0A5C"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 L9 17 L4 12" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12 H19 M13 6 L19 12 L13 18" />
    </svg>
  );
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generación de leads para empresas de energías renovables",
  serviceType: "Generación de leads",
  provider: {
    "@type": "Organization",
    name: "Monq Media",
    url: "https://www.monqmedia.com",
  },
  areaServed: { "@type": "Country", name: "España" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Instaladores y empresas de energías renovables",
  },
  description:
    "Sistema de captación recurrente de clientes interesados para empresas de placas solares, autoconsumo, cargadores de coche eléctrico y aerotermia, con leads filtrados y resultados medibles.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Monq Media",
  legalName: "Monq Media Labs S.L.",
  url: "https://www.monqmedia.com",
  logo: "https://www.monqmedia.com/monq-icon-black.png",
  email: "info@monqmedia.com",
  telephone: "+34613062192",
  areaServed: { "@type": "Country", name: "España" },
  description:
    "Agencia especializada en generación de leads exclusivos para instaladores de paneles solares y empresas de energías renovables en España.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <main>
        {/* ============ HERO ============ */}
        <section className="relative px-4 sm:px-8 lg:px-[72px] pt-5 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 overflow-hidden">
          {/* bg glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-120px",
              right: "-80px",
              width: "520px",
              height: "520px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(235,10,92,.10), rgba(235,10,92,0) 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-[72px] items-center max-w-[1280px] mx-auto">
            {/* Left: text */}
            <div>
              <h1 className="text-[32px] sm:text-[50px] lg:text-[66px] leading-[1.04] tracking-[-0.03em] font-normal text-[#14161b] mb-6">
                Consígue una{" "}
                <strong className="font-extrabold">
                  entrada recurrente de clientes interesados
                </strong>{" "}
                <span className="text-[#EB0A5C] font-extrabold">
                  (de&nbsp;verdad)
                </span>{" "}
                para tu negocio de{" "}
                <strong className="font-extrabold">energías renovables</strong>
              </h1>
              <p className="text-base sm:text-[19px] leading-relaxed text-[#52575f] max-w-[560px] mb-8">
                Aumenta las ventas de tu servicio —placas solares, autoconsumo,
                cargadores de coche eléctrico, aerotermia— sin depender del boca
                a boca, plataformas que no funcionan ni comerciales a puerta fría.
              </p>
              {/* Botón móvil — entre subtítulo y bullet points */}
              <a
                href="#contacto"
                className="inline-flex sm:hidden items-center gap-2 px-8 py-4 rounded-full bg-[#EB0A5C] text-white text-base font-bold hover:bg-[#c40a4d] transition-colors shadow-[0_12px_30px_-8px_rgba(235,10,92,.5)] mb-8"
              >
                Solicita asesoramiento gratuito
                <ArrowRight />
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-9">
                {[
                  "Leads filtrados de calidad",
                  "Resultados medibles",
                  "Crecimiento predecible",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3 max-w-none sm:max-w-[190px]">
                    <span className="flex-none grid place-items-center w-[26px] h-[26px] rounded-full bg-[#FFEAF2]">
                      <CheckIcon />
                    </span>
                    <span className="text-[14.5px] font-semibold leading-snug text-[#2b2f37]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              {/* Botón desktop — debajo de bullet points */}
              <a
                href="#contacto"
                className="hidden sm:inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#EB0A5C] text-white text-base font-bold hover:bg-[#c40a4d] transition-colors shadow-[0_12px_30px_-8px_rgba(235,10,92,.5)]"
              >
                Contáctanos
                <ArrowRight />
              </a>
            </div>

            {/* Right: stat bars */}
            <div className="relative flex items-end justify-center gap-3 sm:gap-4 h-[220px] sm:h-[320px] lg:h-[480px] mt-4 lg:mt-0">
              {/* glow */}
              <div
                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: "115%",
                  height: "75%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse at center, rgba(235,10,92,.18), rgba(235,10,92,0) 70%)",
                  filter: "blur(28px)",
                }}
              />
              {/* Bar 1 */}
              <div className="relative flex-1 max-w-[170px] h-[62%] rounded-3xl bg-[rgba(235,10,92,.10)] px-4 py-5 sm:px-5 flex flex-col justify-end backdrop-blur-sm">
                <div className="text-[#EB0A5C] text-2xl sm:text-[32px] lg:text-[40px] font-extrabold leading-none tracking-tight">
                  +2.000
                </div>
                <div className="text-[11px] sm:text-[13.5px] font-semibold text-[#8a5066] mt-2 leading-snug">
                  Clientes potenciales generados al mes
                </div>
              </div>
              {/* Bar 2 — main */}
              <div
                className="relative flex-1 max-w-[185px] h-full rounded-3xl text-white px-4 py-5 sm:px-6 flex flex-col justify-end"
                style={{
                  background: "linear-gradient(165deg,#EB0A5C,#c40a4d)",
                  boxShadow: "0 26px 54px -20px rgba(235,10,92,.55)",
                }}
              >
                <div className="text-3xl sm:text-[38px] lg:text-[46px] font-extrabold leading-none tracking-tight">
                  +9M€
                </div>
                <div className="text-[11px] sm:text-[13.5px] font-semibold text-[#ffd5e5] mt-2 leading-snug">
                  Facturación generada para clientes
                </div>
              </div>
              {/* Bar 3 */}
              <div className="relative flex-1 max-w-[170px] h-[80%] rounded-3xl bg-[rgba(235,10,92,.20)] px-4 py-5 sm:px-5 flex flex-col justify-end backdrop-blur-sm">
                <div className="text-[#c40a4d] text-2xl sm:text-[32px] lg:text-[40px] font-extrabold leading-none tracking-tight">
                  +1M€
                </div>
                <div className="text-[11px] sm:text-[13.5px] font-semibold text-[#8a5066] mt-2 leading-snug">
                  Invertidos en publicidad
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOGOS MARQUEE ============ */}
        <section className="pt-10 pb-4 border-t border-b border-[#f0f0f2] bg-[#fbfbfc]">
          <p className="text-center text-[13px] font-bold tracking-[0.14em] uppercase text-[#9aa0aa] mb-8">
            Confían en nosotros
          </p>
          <div className="relative w-full overflow-hidden marquee-mask">
            <div className="flex w-max gap-[14px] sm:gap-[22px] items-center animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="flex-none grid place-items-center w-[138px] h-[72px] sm:w-[178px] sm:h-[92px] rounded-[13px] sm:rounded-[16px] bg-white border border-[#ececf0] shadow-[0_6px_18px_-12px_rgba(20,22,27,.3)] px-[14px] sm:px-[22px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: logo.maxH,
                      objectFit: "contain",
                      display: "block",
                      borderRadius: "9px",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ VALUE PILLARS ============ */}
        <section id="que-ofrecemos" className="px-4 sm:px-8 lg:px-[72px] pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-14">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center max-w-[760px] mx-auto mb-16">
              <div className="text-[15px] font-bold tracking-[0.16em] uppercase text-[#EB0A5C] mb-5">
                Un sistema que realmente funciona
              </div>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] font-normal">
                Acelera el crecimiento de tu{" "}
                <strong className="font-extrabold">
                  negocio de energías renovables
                </strong>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 lg:gap-x-[90px]">
              {/* Pillar 1 */}
              <div className="flex gap-5 items-start">
                <span className="flex-none grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-[#FFEAF2]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="2" stroke="#EB0A5C" />
                    <rect x="14" y="3" width="7" height="7" rx="2" stroke="#14161b" />
                    <rect x="3" y="14" width="7" height="7" rx="2" stroke="#14161b" />
                    <rect x="14" y="14" width="7" height="7" rx="2" stroke="#EB0A5C" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[21px] font-extrabold tracking-[-0.02em] mt-1 mb-2">
                    Resultados
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[#52575f]">
                    Implementamos un sistema ya probado en el que cada pieza tiene su función, y siempre apunta a ser rentable.
                  </p>
                </div>
              </div>
              {/* Pillar 2 */}
              <div className="flex gap-5 items-start">
                <span className="flex-none grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-[#FFEAF2]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19 L4 5 M4 19 L20 19" stroke="#14161b" />
                    <path d="M7 15 L11 10 L14 13 L19 7" stroke="#EB0A5C" />
                    <path d="M19 7 L19 11 M19 7 L15 7" stroke="#EB0A5C" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[21px] font-extrabold tracking-[-0.02em] mt-1 mb-2">
                    Medible
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[#52575f]">
                    Las cifras no mienten: sabemos en todo momento qué funciona y qué se puede mejorar, para tomar decisiones acertadas.
                  </p>
                </div>
              </div>
              {/* Pillar 3 */}
              <div className="flex gap-5 items-start">
                <span className="flex-none grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-[#FFEAF2]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#EB0A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5 H21 L14 13 V20 L10 18 V13 Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[21px] font-extrabold tracking-[-0.02em] mt-1 mb-2">
                    Filtrado
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[#52575f]">
                    Ahorráis llamadas innecesarias —y por tanto tiempo— porque recibís leads de calidad, ya filtrados.
                  </p>
                </div>
              </div>
              {/* Pillar 4 */}
              <div className="flex gap-5 items-start">
                <span className="flex-none grid place-items-center w-[54px] h-[54px] rounded-[15px] bg-[#FFEAF2]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8 H15 M15 8 L11 4 M15 8 L11 12" stroke="#14161b" />
                    <path d="M19 16 H9 M9 16 L13 12 M9 16 L13 20" stroke="#EB0A5C" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[21px] font-extrabold tracking-[-0.02em] mt-1 mb-2">
                    Predecible
                  </h3>
                  <p className="text-[15.5px] leading-relaxed text-[#52575f]">
                    No dependemos del boca a boca, llamadas en frío ni tocar puertas. Creamos un proceso que atrae clientes de forma recurrente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TESTIMONIOS (DARK) ============ */}
        <section
          id="opiniones"
          className="relative overflow-hidden px-4 sm:px-8 lg:px-[72px] pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-14 text-white"
          style={{ background: "linear-gradient(180deg,#101116,#15171e)" }}
        >
          {/* glows */}
          <div
            className="absolute top-[8%] left-[-160px] w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(235,10,92,.22), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[-140px] w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(235,10,92,.14), transparent 70%)",
              filter: "blur(20px)",
            }}
          />

          <div className="relative max-w-[1180px] mx-auto">
            <div className="max-w-[680px] mb-12 sm:mb-14">
              <div className="text-[15px] font-bold tracking-[0.16em] uppercase text-[#EB0A5C] mb-5">
                Casos de éxito
              </div>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] font-normal text-white">
                Qué dicen{" "}
                <strong className="font-extrabold">nuestros clientes</strong>
              </h2>
            </div>

            {/* Video cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <VideoCard key={t.company} {...t} />
              ))}
            </div>

            {/* Pulso Solar featured testimonial */}
            <div className="relative mt-10 max-w-[1040px] mx-auto rounded-3xl overflow-hidden bg-[#1c1e26] border border-[#2a2d37] grid grid-cols-1 md:grid-cols-[278px_1fr]">
              {/* Pink stat panel */}
              <div
                className="relative overflow-hidden flex flex-col justify-center gap-6 p-8 md:px-[34px] md:py-[40px]"
                style={{ background: "linear-gradient(160deg,#EB0A5C,#c40a4d)" }}
              >
                <Image
                  src="/pulso-logo.png"
                  alt="Pulso Solar"
                  width={140}
                  height={105}
                  style={{ filter: "drop-shadow(0 12px 26px rgba(0,0,0,.4))" }}
                />
                <div>
                  <div className="text-[42px] sm:text-[54px] font-extrabold tracking-[-0.04em] leading-[0.9] text-white">
                    +18%
                  </div>
                  <div className="text-[14px] font-semibold text-[#ffe1ec] mt-3 leading-snug">
                    de aumento en sus ventas desde que trabajan con nosotros
                  </div>
                </div>
              </div>
              {/* Quote */}
              <div className="relative p-8 md:p-[46px] flex flex-col justify-center">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 24 24"
                  fill="rgba(235,10,92,.22)"
                  className="absolute top-7 right-8"
                >
                  <path d="M10 8c-3 0-5 2-5 5s2 4 4 4 3-1 3-3-1-3-3-3c0-1 1-2 2-2zm9 0c-3 0-5 2-5 5s2 4 4 4 3-1 3-3-1-3-3-3c0-1 1-2 2-2z" />
                </svg>
                <p className="relative text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#e7e9ef] italic mb-6 max-w-[640px]">
                  Desde que trabajamos con Monq Media{" "}
                  <strong className="text-white not-italic font-bold">
                    {" "}hemos aumentado nuestras ventas en un 18%
                  </strong>
                  , lo que refleja la efectividad de su estrategia y su enfoque
                  orientado a resultados. Destacamos su trato cercano, resolutivo y
                  proactivo: su implicación marca realmente la diferencia. Sin duda,
                  un equipo altamente recomendable para cualquier empresa que quiera
                  dar un paso adelante en su crecimiento.
                </p>
                <div className="flex items-center gap-3">
                  <span className="flex-none grid place-items-center w-[44px] h-[44px] rounded-full bg-[#EB0A5C] text-[16px] font-extrabold text-white">
                    DB
                  </span>
                  <div>
                    <div className="text-[14.5px] font-bold text-white">
                      Daniel Ballester
                    </div>
                    <div className="text-[13px] text-[#9aa0aa]">
                      CEO de Hegosun.com y Pulsosolar.es
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CASO DE ÉXITO — VIRA ENERGY ============ */}
        <section className="px-4 sm:px-8 lg:px-[72px] pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-14 bg-white">
          <div className="max-w-[1180px] mx-auto">
            {/* eyebrow */}
            <div className="flex items-center gap-6 mb-10 sm:mb-16">
              <span
                className="flex-1 h-px"
                style={{ background: "linear-gradient(90deg,transparent,#f1c9d8)" }}
              />
              <span className="flex-none text-[15px] font-bold tracking-[0.18em] uppercase text-[#EB0A5C] text-center">
                Nuestro último caso de éxito
              </span>
              <span
                className="flex-1 h-px"
                style={{ background: "linear-gradient(90deg,#f1c9d8,transparent)" }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Browser mockup */}
              <div className="relative pt-3 pb-8">
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "-6% -4% 0 4%",
                    borderRadius: "24px",
                    background:
                      "radial-gradient(ellipse at center, rgba(235,10,92,.14), transparent 70%)",
                    filter: "blur(22px)",
                  }}
                />
                <div
                  className="relative rounded-[14px] overflow-hidden bg-white border border-[#e8e8ec]"
                  style={{ boxShadow: "0 34px 74px -28px rgba(20,22,27,.45)" }}
                >
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 px-4 py-[11px] bg-[#f4f4f6] border-b border-[#e8e8ec]">
                    <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f57]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#febc2e]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#28c840]" />
                    <span className="ml-3 flex-1 max-w-[260px] h-5 rounded-[6px] bg-[#e6e6ea] flex items-center px-3 text-[11px] font-semibold text-[#9aa0aa]">
                      viraenergy.es
                    </span>
                  </div>
                  {/* Screenshot */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src="/vira-desktop.png"
                      alt="Web de Vira Energy"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Phone overlay */}
                <div
                  className="absolute left-[-6px] bottom-[-6px] w-[23%] min-w-[104px] rounded-[20px] bg-[#14161b] p-[5px] border border-[#2a2d37]"
                  style={{ boxShadow: "0 26px 52px -20px rgba(20,22,27,.55)" }}
                >
                  <div className="rounded-[15px] overflow-hidden bg-black">
                    <div className="relative aspect-[9/18]">
                      <Image
                        src="/vira-mobile.png"
                        alt="Web de Vira Energy en móvil"
                        fill
                        className="object-cover object-top"
                        sizes="25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.02] tracking-[-0.03em] font-extrabold text-[#EB0A5C] mb-6">
                  Vira Energy
                </h2>
                <p className="text-[16.5px] leading-relaxed text-[#2b2f37] mb-5">
                  <strong className="font-bold">Vira Energy</strong> es una empresa
                  de autoconsumo solar y eficiencia energética para viviendas y
                  empresas, con sedes en Cataluña, Comunidad Valenciana y Madrid.
                </p>
                <p className="text-[16.5px] leading-relaxed text-[#52575f] mb-5">
                  Querían llenar la agenda de su equipo con solicitudes de estudio
                  energético gratuito, sin depender de plataformas de leads
                  compartidos ni de la captación a puerta fría. Necesitaban un canal
                  propio, predecible y rentable.
                </p>
                <p className="text-[16.5px] leading-relaxed text-[#52575f]">
                  El reto consistió en{" "}
                  <strong className="font-bold text-[#2b2f37]">
                    construir un sistema de captación recurrente de clientes
                    interesados de verdad
                  </strong>
                  , filtrando a los curiosos y entregando solo solicitudes con
                  intención real de agendar una visita técnica e instalar, para que su equipo dejara de perder
                  tiempo en llamadas que no llevaban a ningún sitio.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 lg:mt-[72px]">
              <h3 className="text-center text-xl sm:text-2xl lg:text-[28px] font-extrabold tracking-[-0.02em] text-[#14161b] mb-8">
                En Monq Media logramos y sostenemos para{" "}
                <span className="text-[#EB0A5C]">Vira Energy</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                <div className="rounded-[22px] bg-[#EB0A5C] text-white px-6 py-8 sm:px-[26px] sm:py-[30px] min-h-[140px] sm:min-h-[172px] flex flex-col">
                  <div className="text-3xl sm:text-[38px] font-extrabold tracking-[-0.03em] leading-none">
                    x3,2
                  </div>
                  <div className="text-[13px] sm:text-[14.5px] font-semibold text-[#ffd5e5] mt-auto leading-snug">
                    más instalaciones cerradas
                  </div>
                </div>
                <div
                  className="rounded-[22px] text-white px-6 py-8 sm:px-[26px] sm:py-[30px] min-h-[140px] sm:min-h-[172px] flex flex-col"
                  style={{ background: "rgba(235,10,92,.55)" }}
                >
                  <div className="text-3xl sm:text-[38px] font-extrabold tracking-[-0.03em] leading-none">
                    +400
                  </div>
                  <div className="text-[13px] sm:text-[14.5px] font-semibold text-[#fff0f5] mt-auto leading-snug">
                    leads cualificados al mes
                  </div>
                </div>
                <div
                  className="rounded-[22px] px-6 py-8 sm:px-[26px] sm:py-[30px] min-h-[140px] sm:min-h-[172px] flex flex-col text-[#14161b]"
                  style={{ background: "rgba(235,10,92,.28)" }}
                >
                  <div className="text-3xl sm:text-[38px] font-extrabold tracking-[-0.03em] leading-none text-[#c40a4d]">
                    ‑41%
                  </div>
                  <div className="text-[13px] sm:text-[14.5px] font-semibold text-[#7a3a52] mt-auto leading-snug">
                    coste por cliente captado
                  </div>
                </div>
                <div
                  className="rounded-[22px] px-6 py-8 sm:px-[26px] sm:py-[30px] min-h-[140px] sm:min-h-[172px] flex flex-col text-[#14161b]"
                  style={{ background: "rgba(235,10,92,.12)" }}
                >
                  <div className="text-3xl sm:text-[38px] font-extrabold tracking-[-0.03em] leading-none text-[#c40a4d]">
                    x11
                  </div>
                  <div className="text-[13px] sm:text-[14.5px] font-semibold text-[#8a5066] mt-auto leading-snug">
                    retorno por cada € invertido
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DIFERENCIADORES ============ */}
        <section id="nosotros" className="px-4 sm:px-8 lg:px-[72px] pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-[72px] bg-[#fbfbfc] border-t border-[#f0f0f2]">
          <div className="max-w-[1180px] mx-auto">
            <div className="max-w-[720px] mb-12 sm:mb-14">
              <div className="text-[13px] font-bold tracking-[0.16em] uppercase text-[#EB0A5C] mb-5">
                Qué nos hace diferentes
              </div>
              <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-[1.08] tracking-[-0.03em] font-normal">
                No generamos leads sin más{" "}
                <strong className="font-extrabold">— generamos clientes</strong>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 — pink */}
              <div
                className="relative overflow-hidden text-white rounded-3xl px-8 py-[38px]"
                style={{
                  background: "linear-gradient(160deg,#EB0A5C,#c40a4d)",
                  boxShadow: "0 26px 54px -22px rgba(235,10,92,.5)",
                }}
              >
                <span className="absolute top-[-22px] right-[6px] text-[150px] font-extrabold leading-none tracking-[-0.04em] pointer-events-none select-none" style={{ color: "rgba(255,255,255,0.13)" }}>
                  01
                </span>
                <span className="relative grid place-items-center w-[58px] h-[58px] rounded-2xl mb-20 sm:mb-[84px]" style={{ background: "rgba(255,255,255,0.18)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
                  </svg>
                </span>
                <h3 className="relative text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3">
                  Conocemos el sector
                </h3>
                <p className="relative text-[15px] leading-relaxed text-[#ffe1ec]">
                  Especializados en energías renovables, te ayudamos a aumentar el número de instalaciones y proyectos mensuales que realiza tu empresa.
                </p>
              </div>
              {/* Card 2 */}
              <div className="relative overflow-hidden bg-white border border-[#ededf0] rounded-3xl px-8 py-[38px] hover:shadow-[0_26px_50px_-26px_rgba(20,22,27,.25)] hover:border-[#f6cad9] transition-all duration-[350ms]">
                <span className="absolute top-[-22px] right-[6px] text-[150px] font-extrabold leading-none tracking-[-0.04em] text-[#fbeaf1] pointer-events-none select-none">
                  02
                </span>
                <span className="relative grid place-items-center w-[58px] h-[58px] rounded-2xl bg-[#FFEAF2] mb-20 sm:mb-[84px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EB0A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 3 7v6c0 5 3.5 8 9 9 5.5-1 9-4 9-9V7z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <h3 className="relative text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3 text-[#14161b]">
                  No somos una agencia normal
                </h3>
                <p className="relative text-[15px] leading-relaxed text-[#52575f]">
                  Lo que nos diferencia es que nos enfocamos en tus resultados reales, y nos comprometemos con ellos de principio a fin.
                </p>
              </div>
              {/* Card 3 */}
              <div className="relative overflow-hidden bg-white border border-[#ededf0] rounded-3xl px-8 py-[38px] hover:shadow-[0_26px_50px_-26px_rgba(20,22,27,.25)] hover:border-[#f6cad9] transition-all duration-[350ms]">
                <span className="absolute top-[-22px] right-[6px] text-[150px] font-extrabold leading-none tracking-[-0.04em] text-[#fbeaf1] pointer-events-none select-none">
                  03
                </span>
                <span className="relative grid place-items-center w-[58px] h-[58px] rounded-2xl bg-[#FFEAF2] mb-20 sm:mb-[84px]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EB0A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 20h18" />
                    <path d="M7 20v-7M12 20V5M17 20v-10" />
                    <path d="M12 5 18 3" />
                  </svg>
                </span>
                <h3 className="relative text-[22px] font-extrabold tracking-[-0.02em] leading-[1.15] mb-3 text-[#14161b]">
                  Superamos a tu competencia
                </h3>
                <p className="relative text-[15px] leading-relaxed text-[#52575f]">
                  Destacamos tu negocio sobre el de tu competencia, lo que maximiza tu alcance y te hace cerrar más proyectos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />

        {/* ============ PRE-CONTACT CTA ============ */}
        <section className="px-4 sm:px-8 lg:px-[72px] pt-8 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-28 bg-white">
          <div
            className="relative overflow-hidden max-w-[1180px] mx-auto rounded-[30px] text-white px-8 py-10 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center"
            style={{ background: "linear-gradient(150deg,#1a1c24,#0f1015)" }}
          >
            {/* Pulse rings */}
            <div className="absolute top-[-80px] right-[-60px] w-[360px] h-[360px] rounded-full border border-[rgba(235,10,92,.3)] animate-pulse-ring pointer-events-none" />
            <div className="absolute top-[-30px] right-[-10px] w-[240px] h-[240px] rounded-full border border-[rgba(235,10,92,.25)] pointer-events-none" />

            {/* SVG Chart */}
            <div className="relative grid place-items-center min-h-[180px] sm:min-h-[230px]">
              <div
                className="absolute rounded-full"
                style={{
                  width: "250px",
                  height: "250px",
                  background: "radial-gradient(circle,rgba(235,10,92,.32),transparent 70%)",
                }}
              />
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                className="relative z-10 overflow-visible w-[180px] h-[180px] sm:w-[240px] sm:h-[240px]"
              >
                <defs>
                  <linearGradient id="monqArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EB0A5C" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#EB0A5C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="120" cy="120" r="112" fill="none" stroke="rgba(235,10,92,.5)" strokeWidth="1.5" />
                <circle cx="120" cy="120" r="92" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="1" />
                <circle cx="120" cy="120" r="100" fill="#15171e" />
                <path d="M52 158 L84 138 L112 146 L140 110 L172 84 L188 84 L188 168 L52 168 Z" fill="url(#monqArea)" />
                <path d="M52 158 L84 138 L112 146 L140 110 L172 84" fill="none" stroke="#EB0A5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="52" cy="158" r="5" fill="#fff" />
                <circle cx="112" cy="146" r="5" fill="#fff" />
                <circle cx="140" cy="110" r="5" fill="#fff" />
                <circle cx="172" cy="84" r="6.5" fill="#EB0A5C" stroke="#fff" strokeWidth="2.5" />
                <path d="M165 78 L172 70 L179 78" fill="none" stroke="#EB0A5C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M172 70 L172 92" stroke="#EB0A5C" strokeWidth="4" strokeLinecap="round" />
                <g stroke="#ff9ec4" strokeWidth="3" strokeLinecap="round">
                  <path d="M198 52 L206 44" />
                  <path d="M208 64 L218 60" />
                  <path d="M196 40 L199 30" />
                </g>
              </svg>
            </div>

            {/* Text */}
            <div className="relative">
              <div className="text-[15px] font-bold tracking-[0.16em] uppercase text-[#ff9ec4] mb-5">
                Tu negocio en manos de expertos
              </div>
              <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.12] tracking-[-0.02em] font-normal text-white mb-5">
                Cuéntanos tu proyecto y{" "}
                <strong className="font-extrabold">
                  evaluamos juntos si podemos ayudarte
                </strong>
              </h2>
              <p className="text-base leading-relaxed text-[#c6c9d2] max-w-[560px] mb-8">
                Analizamos a fondo tu empresa para diseñar una estrategia
                personalizada que te ayude a captar más clientes y aumentar tu
                facturación, rentabilizando tu inversión al máximo.{" "}
                <strong className="text-white font-bold">100% sin compromiso.</strong>
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#EB0A5C] text-white text-base font-bold hover:bg-[#c40a4d] transition-colors"
              >
                Contáctanos
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ============ CONTACTO ============ */}
        <section
          id="contacto"
          className="bg-[#EB0A5C] text-white px-4 sm:px-8 lg:px-[72px] py-16 sm:py-20 lg:py-28"
        >
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-[72px] items-center">
            <div>
              <h2 className="text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.06] tracking-[-0.03em] font-extrabold text-white mb-6">
                Ponte en contacto para evaluar si podemos ayudarte
              </h2>
              <p className="text-[17px] leading-relaxed text-[#ffd9e6] max-w-[520px]">
                Sin compromiso. Si vemos que podemos hacer crecer tu negocio, te lo
                decimos. Y si no, también.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+34613062192"
                className="flex items-center gap-4 rounded-[18px] px-6 py-5 text-white border border-white/25 bg-white/[0.12] hover:bg-white/20 transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.94.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.87.33 1.81.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <span className="block text-[12px] font-semibold text-[#ffd9e6]">
                    Teléfono
                  </span>
                  <span className="text-[18px] font-bold">613 062 192</span>
                </span>
              </a>
              <a
                href="mailto:info@monqmedia.com"
                className="flex items-center gap-4 rounded-[18px] px-6 py-5 text-white border border-white/25 bg-white/[0.12] hover:bg-white/20 transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                <span>
                  <span className="block text-[12px] font-semibold text-[#ffd9e6]">
                    Email
                  </span>
                  <span className="text-[18px] font-bold">info@monqmedia.com</span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
