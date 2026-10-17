import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
  SITE,
  Table,
  a,
  breadcrumbJsonLd,
  faqJsonLd,
  h2,
  li,
  p,
  type Faq,
} from "@/app/components/ContentPage";

const URL = `${SITE}/leads-cargadores-coche-electrico`;
const TITLE = "Leads para instaladores de cargadores de coche eléctrico";
const DESCRIPTION =
  "Captamos clientes interesados en instalar un cargador de coche eléctrico (punto de recarga) y llenamos la agenda de visitas de tu empresa con leads cualificados y exclusivos en toda España.";

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

const faqs: Faq[] = [
  {
    q: "¿Captáis clientes para instalar puntos de recarga?",
    a: "Sí. Además de placas solares y autoconsumo, captamos clientes para empresas que instalan cargadores de coche eléctrico o puntos de recarga en viviendas y negocios.",
  },
  {
    q: "¿Se puede combinar con placas solares?",
    a: "Sí. Muchas instaladoras ofrecen ambos servicios, y un cliente con paneles solares es un buen candidato para un cargador. Las campañas se adaptan a lo que ofreces.",
  },
  {
    q: "¿Los leads son exclusivos?",
    a: "Sí. Cada lead es solo para tu empresa; no se reparte entre varias instaladoras.",
  },
  {
    q: "¿Cómo evitáis que se enfríen?",
    a: "Con un sistema de inteligencia artificial que contacta a cada lead al momento, también en fin de semana o fuera de horario.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de cargadores de coche eléctrico",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de cargadores de coche eléctrico", URL),
];

export default function LeadsCargadoresPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de cargadores de coche eléctrico"
      eyebrow="Movilidad eléctrica"
      title={TITLE}
      updated="2026-10-17"
      updatedLabel="17 de octubre de 2026"
      summary={
        <>
          Monq Media capta clientes que quieren instalar un cargador de coche
          eléctrico o punto de recarga y <strong>llena la agenda de
          visitas</strong> de tu empresa con leads cualificados y exclusivos,
          contactados al momento por un sistema de inteligencia artificial.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más instalaciones de cargadores cada mes?"
    >
      <h2 className={h2}>Una oportunidad que encaja con el autoconsumo</h2>
      <p className={p}>
        Quien compra un coche eléctrico necesita un punto de recarga en casa o
        en su negocio. Para una instaladora de placas solares o de energía
        renovable, es un servicio que complementa el autoconsumo y abre una
        nueva línea de clientes.
      </p>

      <h2 className={h2}>Qué hacemos</h2>
      <Table
        head={["Paso", "Qué consigues"]}
        rows={[
          ["Campañas con tu marca", "Clientes de tu zona que te conocen"],
          ["Filtrado", "Solo pasan clientes con intención real de instalar"],
          ["Contacto inmediato con IA", "Ningún lead se enfría"],
          ["Agenda llena", "Visitas con clientes listos para instalar"],
        ]}
      />

      <h2 className={h2}>Para quién es</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Instaladores de cargadores y puntos de recarga.</strong>
        </li>
        <li className={li}>
          <strong>Instaladoras de placas solares</strong> que quieren vender
          también cargadores a sus clientes.
        </li>
      </ul>
      <p className={p}>
        Si tu negocio principal es la fotovoltaica, empieza por nuestros{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>
        . También trabajamos con empresas de{" "}
        <Link href="/leads-aerotermia" className={a}>
          aerotermia
        </Link>
        .
      </p>
    </ContentPage>
  );
}
