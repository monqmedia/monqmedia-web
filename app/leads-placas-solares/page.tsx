import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const URL = "https://www.monqmedia.com/leads-placas-solares";
const TITLE = "Leads para instaladores de placas solares en España";
const DESCRIPTION =
  "Cómo conseguir leads exclusivos y filtrados para tu empresa de placas solares y autoconsumo: qué son, en qué se diferencian de los leads compartidos y cómo funciona el sistema de Monq Media.";
const UPDATED = "2026-10-07";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Monq Media`,
    description: DESCRIPTION,
    url: URL,
    siteName: "Monq Media",
    locale: "es_ES",
    type: "article",
  },
};

const faqs = [
  {
    q: "¿Qué es un lead de placas solares?",
    a: "Es una persona o empresa que ha mostrado interés real en instalar placas solares y ha dejado sus datos para que un instalador la contacte, normalmente para pedir un estudio o presupuesto.",
  },
  {
    q: "¿Qué diferencia hay entre un lead exclusivo y uno compartido?",
    a: "Un lead exclusivo solo lo recibe tu empresa. Un lead compartido se vende a varios instaladores a la vez, así que compites en precio desde la primera llamada y la tasa de cierre baja.",
  },
  {
    q: "¿Para qué tipo de empresas trabaja Monq Media?",
    a: "Para empresas de energías renovables en España: instaladores de placas solares y autoconsumo, cargadores de coche eléctrico y aerotermia.",
  },
  {
    q: "¿Cómo se filtran los leads?",
    a: "El sistema está diseñado para descartar a los curiosos y entregar solo solicitudes con intención real de agendar una visita técnica e instalar, para que tu equipo no pierda tiempo en llamadas que no llevan a nada.",
  },
  {
    q: "¿Cuánto cuesta empezar?",
    a: "El primer paso es un asesoramiento gratuito y sin compromiso: analizamos tu empresa y te decimos si podemos ayudarte a crecer. Si no lo vemos claro, también te lo decimos.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads para placas solares",
    url: URL,
    provider: {
      "@type": "Organization",
      name: "Monq Media",
      url: "https://www.monqmedia.com",
    },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.monqmedia.com",
      },
      { "@type": "ListItem", position: 2, name: TITLE, item: URL },
    ],
  },
];

const h2 =
  "text-[24px] sm:text-[30px] font-extrabold tracking-tight text-[#14161b] mt-12 mb-4";
const p = "text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46] mb-4";
const li = "text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46]";

export default function LeadsPlacasSolaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white min-h-screen">
        <article className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <nav className="text-[13px] text-[#9aa0aa] mb-6" aria-label="Migas de pan">
            <Link href="/" className="hover:text-[#EB0A5C]">
              Inicio
            </Link>{" "}
            / Leads para placas solares
          </nav>
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">
            Captación de clientes
          </p>
          <h1 className="text-[32px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-[#14161b] mb-4">
            {TITLE}
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-8 border-b border-[#f0f0f2]">
            Actualizado el{" "}
            <time dateTime={UPDATED}>7 de octubre de 2026</time> · Monq Media
          </p>

          <div className="rounded-2xl bg-[#fdf2f6] border border-[#f4d4e1] px-6 py-5 mb-8">
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#14161b]">
              <strong>En resumen:</strong> un lead de placas solares es un
              cliente potencial que ha pedido información para instalar
              autoconsumo. Monq Media genera para instaladores de toda España{" "}
              <strong>leads exclusivos y filtrados</strong>, con un sistema de
              captación propio, medible y predecible, para no depender del boca
              a boca, de plataformas de leads compartidos ni de la venta a
              puerta fría.
            </p>
          </div>

          <h2 className={h2}>El problema de captar clientes de autoconsumo</h2>
          <p className={p}>
            Muchas empresas de placas solares llenan su agenda con tres fuentes:
            el boca a boca, las plataformas que venden el mismo contacto a varios
            instaladores y los comerciales a puerta fría. Las tres tienen el
            mismo problema: no son predecibles y hacen perder mucho tiempo en
            llamadas que no acaban en instalación.
          </p>

          <h2 className={h2}>Leads exclusivos frente a leads compartidos</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#ececf0]">
                  <th className="py-3 pr-4 font-bold text-[#14161b]"></th>
                  <th className="py-3 pr-4 font-bold text-[#14161b]">Exclusivo</th>
                  <th className="py-3 font-bold text-[#14161b]">Compartido</th>
                </tr>
              </thead>
              <tbody className="text-[#3a3d46]">
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Quién lo recibe</td>
                  <td className="py-3 pr-4">Solo tu empresa</td>
                  <td className="py-3">Varios instaladores a la vez</td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Competencia</td>
                  <td className="py-3 pr-4">Hablas tú primero</td>
                  <td className="py-3">Guerra de precios desde la primera llamada</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Canal</td>
                  <td className="py-3 pr-4">Propio y medible</td>
                  <td className="py-3">Dependes de la plataforma</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={h2}>Cómo funciona el sistema de Monq Media</h2>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li className={li}>
              <strong>Filtrado:</strong> recibes leads de calidad, ya filtrados,
              y ahorras llamadas innecesarias.
            </li>
            <li className={li}>
              <strong>Medible:</strong> sabemos en todo momento qué funciona y qué
              se puede mejorar.
            </li>
            <li className={li}>
              <strong>Predecible:</strong> un proceso que atrae clientes de forma
              recurrente, sin depender del boca a boca ni de tocar puertas.
            </li>
            <li className={li}>
              <strong>Orientado a resultados:</strong> cada pieza del sistema
              tiene su función y siempre apunta a ser rentable.
            </li>
          </ul>

          <h2 className={h2}>Para quién es</h2>
          <p className={p}>
            Para empresas de energías renovables en España que quieren aumentar
            el número de instalaciones y proyectos al mes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className={li}>Instaladores de placas solares y autoconsumo</li>
            <li className={li}>Instaladores de cargadores de coche eléctrico</li>
            <li className={li}>Empresas de aerotermia</li>
          </ul>

          <h2 className={h2}>Resultados</h2>
          <p className={p}>
            Monq Media genera más de 2.000 clientes potenciales al mes y más de
            9 M€ de facturación para sus clientes. En el caso de{" "}
            <strong>Vira Energy</strong>, empresa de autoconsumo con sedes en
            Cataluña, Comunidad Valenciana y Madrid, el sistema logró x3,2
            instalaciones cerradas, más de 400 leads cualificados al mes, un
            41&nbsp;% menos de coste por cliente y un retorno de x11 por cada euro
            invertido.
          </p>

          <h2 className={h2}>Preguntas frecuentes</h2>
          <div className="space-y-6 mb-12">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[18px] font-bold text-[#14161b] mb-2">{f.q}</h3>
                <p className={p}>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] bg-[#0f1015] text-white px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-[22px] sm:text-[26px] font-extrabold mb-3">
              ¿Quieres más instalaciones al mes?
            </p>
            <p className="text-[#c9ccd3] mb-6">
              Asesoramiento gratuito y 100% sin compromiso.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center px-[22px] py-[12px] rounded-full bg-[#EB0A5C] text-white text-[15px] font-bold hover:bg-[#c40a4d] transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
