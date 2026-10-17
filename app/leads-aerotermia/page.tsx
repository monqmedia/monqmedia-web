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

const URL = `${SITE}/leads-aerotermia`;
const TITLE = "Leads cualificados para empresas de aerotermia";
const DESCRIPTION =
  "Captamos clientes interesados en aerotermia y llenamos la agenda de visitas técnicas de tu empresa con leads cualificados y exclusivos, en toda España.";

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
    q: "¿Trabajáis con empresas de aerotermia?",
    a: "Sí. Aunque nuestra especialidad principal es el autoconsumo solar, también captamos clientes para empresas de aerotermia y de cargadores de coche eléctrico en toda España.",
  },
  {
    q: "¿Los leads son exclusivos?",
    a: "Sí. Cada lead es solo para tu empresa; no se reparte entre varias instaladoras.",
  },
  {
    q: "¿Puedo combinar leads de aerotermia y de placas solares?",
    a: "Sí. Las campañas son personalizadas, así que se adaptan a los servicios que ofreces y a la capacidad de tu equipo.",
  },
  {
    q: "¿Cómo evitáis que los leads se enfríen?",
    a: "Con un sistema de inteligencia artificial que contacta a cada lead al momento, también en fin de semana o fuera de horario.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de aerotermia",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de aerotermia", URL),
];

export default function LeadsAerotermiaPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de aerotermia"
      eyebrow="Aerotermia"
      title={TITLE}
      updated="2026-10-16"
      updatedLabel="16 de octubre de 2026"
      summary={
        <>
          Monq Media capta clientes interesados en aerotermia y{" "}
          <strong>llena la agenda de visitas técnicas</strong> de tu empresa
          con leads cualificados y exclusivos, contactados al momento por un
          sistema de inteligencia artificial.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más visitas de aerotermia cada mes?"
    >
      <h2 className={h2}>El reto de vender aerotermia</h2>
      <p className={p}>
        La aerotermia es una decisión importante para una vivienda o un
        negocio: el cliente compara, pregunta y necesita una visita técnica
        para entender qué le conviene. Por eso no basta con conseguir
        contactos: hay que llegar rápido, filtrar bien y llevar al cliente a
        la visita.
      </p>

      <h2 className={h2}>Qué hacemos</h2>
      <Table
        head={["Paso", "Qué consigues"]}
        rows={[
          ["Campañas con tu marca", "Clientes que te conocen desde el primer anuncio"],
          ["Filtrado", "Solo pasan clientes con interés real"],
          ["Contacto inmediato con IA", "Ningún lead se enfría, ni en fin de semana"],
          ["Agenda llena", "Visitas técnicas con clientes que quieren instalar"],
        ]}
      />

      <h2 className={h2}>Para quién es</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Empresas de aerotermia</strong> que quieren un flujo de
          clientes estable.
        </li>
        <li className={li}>
          <strong>Instaladoras de placas solares</strong> que también ofrecen
          aerotermia y quieren vender ambos servicios.
        </li>
      </ul>
      <p className={p}>
        Si tu negocio principal es el autoconsumo, empieza por nuestros{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>
        . También captamos clientes para{" "}
        <Link href="/leads-cargadores-coche-electrico" className={a}>
          cargadores de coche eléctrico
        </Link>
        . Y si quieres ver cómo funciona el contacto inmediato, mira nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>
        .
      </p>
    </ContentPage>
  );
}
