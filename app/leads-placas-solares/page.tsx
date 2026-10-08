import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const URL = "https://www.monqmedia.com/leads-placas-solares";
const TITLE = "Leads cualificados para instaladores de placas solares";
const DESCRIPTION =
  "Leads cualificados y exclusivos para empresas de placas solares en toda España: llenamos la agenda de visitas de tus técnicos, con IA que contacta cada lead al instante y garantía de resultados por contrato.";
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
    q: "¿Qué es un lead cualificado de placas solares?",
    a: "Es una persona o empresa con interés real en instalar placas solares, que ya ha sido filtrada y está dispuesta a recibir una visita técnica. No es un contacto suelto: es una oportunidad lista para tu equipo.",
  },
  {
    q: "¿Qué diferencia hay entre un lead exclusivo y uno compartido?",
    a: "Un lead exclusivo solo lo recibe tu empresa. Un lead compartido lo venden las plataformas a varias instaladoras a la vez, que compiten por el mismo cliente y acaban bajando precios.",
  },
  {
    q: "¿Cuántas instalaciones extra puedo esperar?",
    a: "De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días trabajando con nosotros. Además, ofrecemos garantía de resultados por contrato.",
  },
  {
    q: "¿Qué pasa si mi equipo no llega a llamar a tiempo a los leads?",
    a: "Implementamos un sistema de inteligencia artificial que contacta automáticamente a cada lead al momento, también en fin de semana o fuera de horario, para que no se enfríe y tu comercial reciba la visita casi hecha.",
  },
  {
    q: "Ya he probado otras agencias y no funcionó. ¿Qué cambia?",
    a: "Nos especializamos solo en energías renovables y medimos el éxito en visitas e instalaciones, no en clics o contactos. Cada campaña es personalizada para tu empresa, respeta tu marca y está pensada a largo plazo.",
  },
  {
    q: "¿Trabajáis en toda España?",
    a: "Sí. Trabajamos con empresas instaladoras de placas solares y autoconsumo en toda España, y también con empresas de aerotermia y cargadores de coche eléctrico.",
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
              <strong>En resumen:</strong> Monq Media es una agencia
              especializada en captación de clientes para empresas de placas
              solares en toda España. No vendemos contactos sueltos:{" "}
              <strong>
                generamos leads cualificados y exclusivos y llenamos la agenda de
                visitas de tus técnicos
              </strong>
              . De media, nuestros clientes añaden entre 7 y 10 instalaciones
              extra al mes en los primeros 60 días, con garantía de resultados
              por contrato.
            </p>
          </div>

          <h2 className={h2}>Por qué a muchos instaladores no les salen las cuentas</h2>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li className={li}>
              <strong>Leads compartidos:</strong> las plataformas venden el mismo
              lead a varias instaladoras, que compiten por el mismo cliente.
            </li>
            <li className={li}>
              <strong>Agencias que no funcionan:</strong> muchas empresas ya han
              probado agencias de marketing digital sin resultados, por falta de
              calidad o de volumen de leads.
            </li>
            <li className={li}>
              <strong>Leads que se enfrían:</strong> el comercial llega tarde, el
              lead entra en fin de semana o fuera de horario, o se acumulan y el
              equipo no da abasto.
            </li>
          </ul>

          <h2 className={h2}>Leads cualificados, no contactos sueltos</h2>
          <p className={p}>
            El objetivo no es que recibas más formularios, sino que tu equipo
            tenga la agenda llena de visitas técnicas con clientes que quieren
            instalar. Por eso filtramos a los curiosos y solo te llegan
            solicitudes con intención real.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#ececf0]">
                  <th className="py-3 pr-4 font-bold text-[#14161b]"></th>
                  <th className="py-3 pr-4 font-bold text-[#14161b]">Monq Media</th>
                  <th className="py-3 font-bold text-[#14161b]">Plataforma de leads</th>
                </tr>
              </thead>
              <tbody className="text-[#3a3d46]">
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Exclusividad</td>
                  <td className="py-3 pr-4">Solo para tu empresa</td>
                  <td className="py-3">Varias instaladoras a la vez</td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Qué recibes</td>
                  <td className="py-3 pr-4">Leads cualificados y visitas</td>
                  <td className="py-3">Contactos sin filtrar</td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Primer contacto</td>
                  <td className="py-3 pr-4">Inmediato, con IA</td>
                  <td className="py-3">Cuando tu equipo pueda</td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Tu marca</td>
                  <td className="py-3 pr-4">Campañas con tu marca</td>
                  <td className="py-3">La marca de la plataforma</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Garantía</td>
                  <td className="py-3 pr-4">Resultados por contrato</td>
                  <td className="py-3">Pagas por contacto</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={h2}>IA que contacta tus leads al instante</h2>
          <p className={p}>
            Un lead de placas solares pierde valor cada hora que pasa sin
            respuesta. Implementamos un sistema de inteligencia artificial que
            contacta automáticamente a cada lead en cuanto entra, también en fin
            de semana o fuera de horario, para que no se enfríe. Tu comercial
            recibe el trabajo hecho: un cliente interesado y una visita lista
            para agendar.{" "}
            <Link href="/sistema-ia-contacto-leads" className="text-[#EB0A5C] font-semibold hover:underline">
              Cómo funciona el sistema de IA
            </Link>
            .
          </p>

          <h2 className={h2}>Cómo trabajamos</h2>
          <ol className="list-decimal pl-6 space-y-3 mb-4">
            <li className={li}>
              <strong>Análisis de tu empresa:</strong> asesoramiento gratuito y
              sin compromiso para ver si podemos ayudarte.
            </li>
            <li className={li}>
              <strong>Campañas personalizadas:</strong> diseñadas para tu zona y
              tu negocio, respetando siempre tu marca.
            </li>
            <li className={li}>
              <strong>Filtrado y contacto inmediato:</strong> solo pasan los
              leads con intención real, y la IA los contacta al momento.
            </li>
            <li className={li}>
              <strong>Agenda llena:</strong> tus técnicos reciben visitas con
              clientes que quieren instalar.
            </li>
            <li className={li}>
              <strong>Medición y largo plazo:</strong> sabemos qué funciona y
              optimizamos para cumplir tus objetivos mes a mes.
            </li>
          </ol>

          <h2 className={h2}>Casos de éxito en el sector solar</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-[#ececf0]">
                  <th className="py-3 pr-4 font-bold text-[#14161b]">Empresa</th>
                  <th className="py-3 font-bold text-[#14161b]">Resultado con Monq Media</th>
                </tr>
              </thead>
              <tbody className="text-[#3a3d46]">
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Vira Energy</td>
                  <td className="py-3">
                    x3,2 instalaciones cerradas, +400 leads cualificados al mes,
                    -41&nbsp;% coste por cliente y x11 de retorno
                  </td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Eco Max Energía</td>
                  <td className="py-3">
                    +30.000&nbsp;€ de beneficio mensual extra; somos su canal nº1
                    de ventas
                  </td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Pulso Solar</td>
                  <td className="py-3">+20&nbsp;% de aumento en ventas</td>
                </tr>
                <tr className="border-b border-[#f0f0f2]">
                  <td className="py-3 pr-4 font-semibold">Efistar</td>
                  <td className="py-3">
                    10-15 estudios extra para empresas cada mes en Andalucía
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Vadesol y Solarclic</td>
                  <td className="py-3">
                    Más instalaciones y un flujo mensual estable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={p}>
            En conjunto, generamos más de 2.000 clientes potenciales al mes y más
            de 9 M€ de facturación para nuestros clientes.{" "}
            <Link href="/casos-de-exito" className="text-[#EB0A5C] font-semibold hover:underline">
              Ver todos los casos de éxito
            </Link>
            .
          </p>

          <h2 className={h2}>Para quién es</h2>
          <p className={p}>
            Para empresas instaladoras de placas solares y autoconsumo de toda
            España que quieren más instalaciones al mes y un flujo de clientes
            estable. También trabajamos con empresas de aerotermia y de
            cargadores de coche eléctrico.
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
              ¿Quieres la agenda de tus técnicos llena de visitas?
            </p>
            <p className="text-[#c9ccd3] mb-6">
              Asesoramiento gratuito y 100% sin compromiso. Garantía de resultados por contrato.
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
