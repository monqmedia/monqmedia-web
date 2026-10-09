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

const URL = `${SITE}/leads-baterias-solares`;
const TITLE = "Leads para instaladores de baterías solares";
const DESCRIPTION =
  "Leads cualificados de clientes interesados en baterías solares, tanto para instalaciones nuevas como para quien ya tiene placas. Llenamos la agenda de visitas de tus técnicos en toda España.";

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
    q: "¿Qué es un lead de baterías solares?",
    a: "Es un cliente interesado en añadir almacenamiento a su instalación solar, o en instalar placas con batería desde el principio, que ha pedido información y está dispuesto a recibir una visita técnica.",
  },
  {
    q: "¿Captáis clientes que ya tienen placas solares?",
    a: "Sí. Quien ya tiene placas y quiere aprovechar mejor su energía es un perfil muy interesante para una instaladora: ya conoce el autoconsumo y la conversación parte de un punto más avanzado.",
  },
  {
    q: "¿Los leads son exclusivos?",
    a: "Sí. Cada lead es solo para tu empresa, no se reparte entre varias instaladoras como en las plataformas de leads compartidos.",
  },
  {
    q: "¿Cómo evitáis que los leads se enfríen?",
    a: "Con un sistema de inteligencia artificial que contacta a cada lead en cuanto entra, también en fin de semana o fuera de horario, para que tu comercial reciba la visita casi hecha.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de baterías solares",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de baterías solares", URL),
];

export default function LeadsBateriasSolaresPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de baterías solares"
      eyebrow="Almacenamiento solar"
      title={TITLE}
      updated="2026-10-09"
      updatedLabel="9 de octubre de 2026"
      summary={
        <>
          Monq Media capta clientes interesados en baterías solares, tanto para
          instalaciones nuevas como para quien ya tiene placas, y{" "}
          <strong>llena la agenda de visitas de tus técnicos</strong> con leads
          cualificados y exclusivos en toda España.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres vender más baterías este mes?"
    >
      <h2 className={h2}>Dos perfiles de cliente, dos oportunidades</h2>
      <Table
        head={["", "Instalación nueva", "Ya tiene placas"]}
        rows={[
          ["Qué busca", "Placas con batería desde el inicio", "Añadir almacenamiento"],
          ["Punto de partida", "Empieza en el autoconsumo", "Ya conoce el autoconsumo"],
          ["Qué necesita tu equipo", "Visita y estudio completo", "Visita para ampliar la instalación"],
        ]}
      />

      <h2 className={h2}>Por qué captar leads de baterías</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Más valor por instalación:</strong> la batería aumenta el
          importe de cada proyecto.
        </li>
        <li className={li}>
          <strong>Nueva demanda sobre clientes existentes:</strong> quien ya
          tiene placas puede volver a comprar.
        </li>
        <li className={li}>
          <strong>Diferenciación:</strong> ofrecer almacenamiento te distingue
          de instaladoras que solo venden placas.
        </li>
      </ul>

      <h2 className={h2}>Cómo trabajamos</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas personalizadas</strong> con tu marca y dirigidas a
          cada perfil.
        </li>
        <li className={li}>
          <strong>Filtrado</strong> para que solo pasen clientes con intención
          real de instalar.
        </li>
        <li className={li}>
          <strong>Contacto inmediato</strong> con nuestro{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA
          </Link>
          , a cualquier hora.
        </li>
        <li className={li}>
          <strong>Agenda llena</strong> de visitas técnicas para tu equipo.
        </li>
      </ol>
      <p className={p}>
        De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al
        mes en los primeros 60 días, con garantía de resultados por contrato.
        Más información sobre nuestros{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>{" "}
        y nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
    </ContentPage>
  );
}
