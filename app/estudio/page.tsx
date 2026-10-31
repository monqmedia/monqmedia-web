import type { Metadata } from "next";
import Image from "next/image";
import { Lora } from "next/font/google";
import FormSection from "./FormSection";
import CaseVideo from "./CaseVideo";

// Cursiva suave y legible para citas y acentos
const serif = Lora({ subsets: ["latin"], style: ["italic"], weight: ["400"], display: "swap" });

export const metadata: Metadata = {
  title: "Estudio gratuito para tu instaladora",
  description:
    "Recibe un estudio gratuito de captación de clientes para tu empresa de placas solares y energías renovables. Elige día y hora en un minuto.",
  alternates: { canonical: "/estudio" },
  robots: { index: false, follow: true },
};

const FEATURES = [
  {
    title: "Leads filtrados de calidad",
    text: "Recibes clientes con intención real de instalar, que te envían la factura de la luz y agendan una visita técnica.",
    icon: <path d="M4 5h16l-6 7.5V18l-4 2v-7.5z" />,
  },
  {
    title: "Resultados medibles",
    text: "Sabes en todo momento cuánto inviertes, cuántos clientes entran y cuánto facturas.",
    icon: <path d="M4 19h16M7 15l3-4 3 2 4-6" />,
  },
  {
    title: "Crecimiento predecible",
    text: "Sin depender del boca a boca ni de la puerta fría: un flujo constante de clientes cada mes.",
    icon: <path d="M4 17l6-6 4 4 6-7M14 8h6v6" />,
  },
];

type Case = { company: string; person: string; src: string; cover: string; stat: string; statRest: string; quote: string };

const CASES: Case[] = [
  {
    company: "Vira Energy",
    person: "Toni, de Vira Energy",
    src: "/videos/vira.mp4",
    cover: "/vira-video-v5.webp",
    stat: "40%",
    statRest: "de sus instalaciones vienen de Monq Media",
    quote: "Han sabido entender nuestro negocio y adaptar la estrategia de captación a nuestras necesidades. Nos ha permitido seguir creciendo y mejorar año tras año los resultados.",
  },
  {
    company: "Vadesol Insular",
    person: "Sergio, CEO de Vadesolinsular.es",
    src: "/videos/vadesol.mp4",
    cover: "/cover-natural-vadesol.webp",
    stat: "+60%",
    statRest: "en instalaciones",
    quote:
      "Antes tenía mucha incertidumbre porque me llegaban pocos clientes. Ahora sé que todos los meses voy a tener bastantes clientes potenciales y he crecido en las instalaciones un 60%.",
  },
  {
    company: "Solar Clic",
    person: "Antonio, CEO de Solarclic.es",
    src: "/videos/solarclic.mp4",
    cover: "/cover-natural-solarclic.webp",
    stat: "10-12",
    statRest: "instalaciones al mes",
    quote:
      "Hemos pasado de 6-8 instalaciones mensuales a una media de 10-12 de manera constante. Recomendamos sus servicios.",
  },
  {
    company: "Subvenziona",
    person: "Noel, CEO de Subvenziona.es",
    src: "/videos/subvenziona.mp4",
    cover: "/cover-natural-subvenziona.webp",
    stat: "Más leads",
    statRest: "gastando mucho menos",
    quote:
      "Antes hacíamos nuestras propias campañas y no teníamos los resultados esperados. Ahora gastamos muchísimo menos y obtenemos muchos más leads, que luego convertimos en clientes finales.",
  },
];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#formulario"
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#437EEF] px-8 py-4 text-[16px] font-bold text-white shadow-[0_14px_32px_-12px_rgba(67,126,239,.75)] hover:bg-[#2F66D6] transition-colors ${className}`}
    >
      Recibe tu estudio gratuito
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13" /><path d="M12 5l7 7-7 7" /></svg>
    </a>
  );
}

export default function EstudioPage() {
  return (
    <div className="bg-white">
      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden px-4 sm:px-8 pt-8 sm:pt-10 pb-10 sm:pb-14">
          <div
            className="absolute pointer-events-none"
            style={{ top: "-160px", left: "50%", transform: "translateX(-50%)", width: "820px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,126,239,.09), transparent 70%)" }}
          />
          <div className="relative max-w-[760px] mx-auto text-center">
            <div className="flex justify-center items-center gap-2.5">
              <Image src="/monq-icon-black.png" alt="" width={30} height={30} />
              <span className="text-[17px] font-extrabold tracking-[0.04em] uppercase">monq media</span>
            </div>

            <div className="mt-8 inline-block max-w-full rounded-2xl sm:rounded-full border border-[#C9DAFC] bg-[#F2F6FF] px-3.5 sm:px-4 py-1.5 sm:py-2">
              <span className="text-[10.5px] sm:text-[12px] leading-[1.55] font-bold tracking-[0.02em] sm:tracking-[0.06em] uppercase text-[#2F66D6]">
                {/* punto en línea con el texto: queda junto a la primera palabra y centrado en la línea */}
                <span className="relative inline-flex w-2 h-2 mr-2 align-middle -translate-y-px">
                  <span className="absolute inset-0 rounded-full bg-[#437EEF] animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-[#437EEF] animate-pulse" />
                </span>
                Para instaladores de paneles solares, cargadores de coches eléctricos y aerotermia
              </span>
            </div>

            <h1 className="mt-5 text-[32px] sm:text-[46px] lg:text-[54px] leading-[1.04] tracking-[-0.035em] font-extrabold text-[#14161b] text-balance">
              Te conseguimos <span className="text-[#437EEF]">clientes interesados de verdad</span> en instalar placas solares, cada mes.
            </h1>

            <CtaButton className="mt-8 w-full sm:w-auto" />

            <div className="mt-4 flex items-center justify-center gap-2 text-[14px] text-[#52575f]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#437EEF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6 4 4 6-7M14 8h6v6" /></svg>
              <span><strong className="text-[#14161b]">+9M€</strong> facturados para nuestros clientes</span>
            </div>
          </div>

          {/* Ventajas */}
          <div className="relative max-w-[920px] mx-auto mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 rounded-[22px] border border-[#ececf0] bg-white shadow-[0_20px_50px_-36px_rgba(20,22,27,.35)] divide-y md:divide-y-0 md:divide-x divide-[#f0f0f3]">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 sm:p-6">
                <span className="flex-none grid place-items-center w-10 h-10 rounded-full bg-[#E8F0FE]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#437EEF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <div>
                  <h3 className="text-[15.5px] font-extrabold text-[#14161b] leading-snug">{f.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#6b7079]">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FORMULARIO + CASO DE ÉXITO ===== */}
        <section id="formulario" className="scroll-mt-6 px-4 sm:px-8 py-10 sm:py-14">
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">
            <FormSection />

            <aside className="lg:pt-2">
              <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#8a8f99] mb-3 text-center lg:text-left">Caso de éxito</div>
              <div className="relative overflow-hidden rounded-[22px] bg-[#14161b] p-6 sm:p-7 text-white">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(67,126,239,.35), transparent 70%)" }} />
                <div className="relative">
                  <div className="text-[44px] font-extrabold tracking-[-0.04em] leading-none text-[#437EEF]">+28%</div>
                  <div className="mt-1 text-[13px] font-semibold text-[#CFE0FF]">de aumento en sus ventas</div>
                  <p className={`${serif.className} italic mt-5 text-[15.5px] leading-relaxed text-[#e7e9ef]`}>
                    &ldquo;Desde que trabajamos con Monq Media hemos aumentado nuestras ventas en un 28%. Destacamos su trato cercano, resolutivo y proactivo: su implicación marca realmente la diferencia.&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex-none grid place-items-center w-10 h-10 rounded-full bg-[#437EEF] text-[14px] font-extrabold">DB</span>
                    <div>
                      <div className="text-[13.5px] font-extrabold tracking-[0.04em] uppercase">Daniel Ballester</div>
                      <div className="text-[12.5px] text-[#9aa0aa]">CEO de Hegosun.com y Pulsosolar.es</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ===== TESTIMONIOS EN VÍDEO ===== */}
        <section className="px-4 sm:px-8 py-12 sm:py-16 bg-[#fbfbfc] border-t border-[#f0f0f2]">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#8a8f99]">Testimonios reales</div>
            <h2 className="mt-3 text-[30px] sm:text-[40px] leading-[1.08] tracking-[-0.03em] font-extrabold text-[#14161b]">
              Resultados reales. <span className={`${serif.className} italic font-normal text-[#52575f]`}>No promesas vacías.</span>
            </h2>
            <p className="mt-2 text-[14px] text-[#8a8f99]">Pulsa cualquier vídeo para verlo completo</p>
          </div>

          <div className="max-w-[720px] mx-auto mt-10 flex flex-col gap-12 sm:gap-14">
            {CASES.map((c) => (
              <div key={c.company} className="flex flex-col items-center">
                <article className="w-full rounded-[26px] border border-[#ececf0] bg-white p-4 sm:p-7 shadow-[0_24px_60px_-40px_rgba(20,22,27,.4)]">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-[15px] sm:text-[16px] font-extrabold tracking-[0.12em] uppercase text-[#14161b]">{c.company}</h3>
                    <div className="text-[13px] text-[#8a8f99] mt-0.5">{c.person}</div>
                  </div>
                  <CaseVideo src={c.src} cover={c.cover} title={`${c.company}: testimonio`} />
                  <div className="mt-6 text-center px-1 sm:px-6">
                    <div className="text-[23px] sm:text-[30px] leading-[1.1] tracking-[-0.03em] font-extrabold uppercase text-[#14161b]">
                      <span className="text-[#437EEF]">{c.stat}</span> {c.statRest}
                    </div>
                    <p className={`${serif.className} italic mt-3 text-[15.5px] sm:text-[16.5px] leading-relaxed text-[#52575f]`}>&ldquo;{c.quote}&rdquo;</p>
                  </div>
                </article>
                <CtaButton className="mt-7 w-full sm:w-auto" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#0f1015] px-4 py-8 text-center text-[13px] text-[#9aa0aa]">
        © {new Date().getFullYear()} Monq Media. Todos los derechos reservados.
      </footer>
    </div>
  );
}
