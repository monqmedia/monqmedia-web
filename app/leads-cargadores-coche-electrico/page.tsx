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
const TITLE = "Leads de cargadores de coche eléctrico para instaladores";
const DESCRIPTION =
  "Leads exclusivos de clientes que quieren instalar un cargador de coche eléctrico o punto de recarga en casa o en su empresa. Contacto inmediato y visitas agendadas en toda España.";

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
    q: "¿Cómo se cualifica un lead de cargador de coche eléctrico?",
    a: "Preguntando si ya tiene coche eléctrico o fecha de entrega, si es vivienda unifamiliar, garaje comunitario o empresa, la distancia al cuadro eléctrico y si tiene o quiere placas solares. Así cada visita técnica es para un cliente con un proyecto real.",
  },
  {
    q: "¿Qué tipo de clientes piden un punto de recarga?",
    a: "Particulares que acaban de comprar un coche eléctrico, comunidades de vecinos con garaje y empresas que quieren cargadores para su flota, sus empleados o sus clientes.",
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
      updated="2026-11-18"
      updatedLabel="18 de noviembre de 2026"
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

      <h2 className={h2}>Cómo cualificamos cada lead de cargador</h2>
      <Table
        head={["Pregunta", "Por qué importa"]}
        rows={[
          ["¿Tiene ya coche eléctrico o fecha de entrega?", "Indica la urgencia real"],
          ["Vivienda, garaje comunitario o empresa", "Cambia el tipo de instalación y los permisos"],
          ["Distancia aproximada al cuadro eléctrico", "Prepara la visita técnica y el presupuesto"],
          ["¿Tiene o quiere placas solares?", "Abre una propuesta combinada con autoconsumo"],
        ]}
      />

      <h2 className={h2}>Particulares, comunidades y empresas</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Particulares:</strong> el cliente más habitual, justo
          después de comprar el coche.
        </li>
        <li className={li}>
          <strong>Comunidades de vecinos:</strong> garajes comunitarios con
          varias plazas interesadas.
        </li>
        <li className={li}>
          <strong>Empresas:</strong> recarga para flota, empleados o clientes,
          a menudo junto con{" "}
          <Link href="/leads-autoconsumo-empresas" className={a}>
            autoconsumo para empresas
          </Link>
          .
        </li>
      </ul>
      <p className={p}>
        Y si ya tienes clientes con placas solares, mira{" "}
        <Link href="/blog/vender-aerotermia-y-cargadores-a-clientes-de-placas-solares" className={a}>
          cómo venderles un cargador
        </Link>
        .
      </p>

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
