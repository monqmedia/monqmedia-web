import type { Metadata } from "next";
import Link from "next/link";
import RelatedPosts from "@/app/blog/RelatedPosts";
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
const TITLE = "Leads de aerotermia exclusivos para instaladores";
const DESCRIPTION =
  "Leads de aerotermia exclusivos para instaladores y empresas de climatización de toda España: clientes interesados de verdad, contactados al momento y visitas técnicas agendadas.";

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
    a: "Sí. La aerotermia es una de nuestras verticales principales, junto con las placas solares, el renting fotovoltaico y el ahorro en la factura de luz. Trabajamos con empresas de aerotermia y climatización de toda España.",
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
    q: "¿Cómo se cualifica un lead de aerotermia?",
    a: "Preguntando por el tipo de vivienda o negocio, el sistema de calefacción y agua caliente actual, la superficie aproximada y el plazo en que quiere hacer el cambio. Así la visita técnica se dedica a clientes con un proyecto real.",
  },
  {
    q: "¿Qué precio tiene un lead de aerotermia?",
    a: "Depende de la zona, la competencia y si es vivienda o negocio. Lo que importa es el coste por instalación cerrada; en el asesoramiento gratuito te damos una estimación para tu zona.",
  },
  {
    q: "¿Cómo evitáis que los leads se enfríen?",
    a: "Con un sistema de inteligencia artificial que contacta a cada lead al momento, también en fin de semana o fuera de horario.",
  },
  {
    q: "¿Cuándo hay más demanda de aerotermia?",
    a: "El interés suele crecer en otoño e invierno, cuando llegan las facturas de calefacción, y cuando una caldera se avería o se queda vieja. Conviene tener las campañas listas antes de esos picos para no perder clientes.",
  },
  {
    q: "¿Qué mensaje funciona para anunciar aerotermia?",
    a: "El ahorro frente a la caldera actual de gas o gasóleo, el confort de tener calefacción, refrigeración y agua caliente con un solo equipo, y la confianza en tu empresa con instalaciones reales de tu zona. Mejor evitar promesas de ahorro sin un estudio previo.",
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
      updated="2026-11-25"
      updatedLabel="25 de noviembre de 2026"
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

      <h2 className={h2}>Cómo cualificamos cada lead de aerotermia</h2>
      <Table
        head={["Pregunta", "Por qué importa"]}
        rows={[
          ["Tipo de vivienda o negocio", "Saber si el proyecto encaja con tu servicio"],
          ["Sistema actual de calefacción y agua caliente", "Detectar el ahorro y el tipo de instalación"],
          ["Superficie aproximada", "Preparar la visita y una primera idea del equipo"],
          ["Plazo para el cambio", "Priorizar a quien quiere instalar pronto"],
          ["¿Tiene o quiere placas solares?", "Abrir la puerta a una propuesta combinada"],
        ]}
      />

      <h2 className={h2}>Cómo conseguir clientes de aerotermia</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Anuncios en tu zona</strong> dirigidos a viviendas
          unifamiliares y negocios con calefacción de gas o gasóleo.
        </li>
        <li className={li}>
          <strong>Mensaje de ahorro y confort:</strong> calefacción,
          refrigeración y agua caliente con un solo equipo.
        </li>
        <li className={li}>
          <strong>Formulario que cualifica</strong> con las preguntas de la
          tabla anterior, para que el técnico visite proyectos reales.
        </li>
        <li className={li}>
          <strong>Contacto en minutos</strong> y visita técnica agendada antes
          de que el cliente pida otro presupuesto.
        </li>
        <li className={li}>
          <strong>Seguimiento del presupuesto</strong> hasta la firma. Ver{" "}
          <Link href="/blog/seguimiento-de-presupuestos-de-placas-solares" className={a}>
            cómo hacer seguimiento de presupuestos
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Aerotermia para viviendas y para empresas</h2>
      <Table
        head={["", "Viviendas", "Empresas"]}
        rows={[
          ["Motivo habitual", "Cambiar una caldera vieja y pagar menos", "Reducir el gasto en climatización"],
          ["Quién decide", "La familia", "Gerente o propietario"],
          ["Qué se agenda", "Visita técnica en casa", "Visita o estudio del edificio"],
        ]}
      />

      <h2 className={h2}>Aerotermia y placas solares: más valor por cliente</h2>
      <p className={p}>
        Muchas instaladoras ofrecen ambas cosas. Un cliente que pide
        aerotermia puede interesarse por el autoconsumo, y al revés. Por eso
        las campañas pueden plantear propuestas combinadas y aprovechar la
        base de clientes actual. Más en{" "}
        <Link href="/blog/vender-aerotermia-y-cargadores-a-clientes-de-placas-solares" className={a}>
          cómo vender aerotermia a tus clientes de placas solares
        </Link>
        .
      </p>

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

      <RelatedPosts
        title="Guías para instaladores de aerotermia"
        slugs={[
          "vender-aerotermia-y-cargadores-a-clientes-de-placas-solares",
          "como-generar-leads-para-instaladores",
          "como-cualificar-un-lead-de-placas-solares",
        ]}
      />
    </ContentPage>
  );
}
