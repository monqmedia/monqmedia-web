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
import RelatedPosts from "@/app/blog/RelatedPosts";

const URL = `${SITE}/leads-autoconsumo-empresas`;
const TITLE = "Leads de autoconsumo fotovoltaico para empresas e industria";
const DESCRIPTION =
  "Captamos empresas, naves e industrias interesadas en autoconsumo solar o instalaciones fotovoltaicas y llenamos la agenda de estudios y visitas técnicas de tu instaladora. Clientes cualificados y exclusivos en toda España.";

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
    q: "¿Qué es un lead de autoconsumo para empresas?",
    a: "Es una empresa, comercio, nave o industria interesada en instalar placas solares para reducir su factura eléctrica, que ha pedido información y está dispuesta a recibir un estudio o una visita técnica.",
  },
  {
    q: "¿En qué se diferencia de un lead residencial?",
    a: "El proyecto suele ser más grande, la decisión la toma a menudo más de una persona y el ciclo de venta es más largo. Por eso es clave filtrar bien y contactar rápido, para que tu equipo dedique su tiempo a empresas con intención real.",
  },
  {
    q: "¿Tenéis experiencia con instaladoras que trabajan con empresas?",
    a: "Sí. Por ejemplo, Efistar realiza entre 10 y 15 estudios extra para empresas cada mes en Andalucía trabajando con Monq Media.",
  },
  {
    q: "¿Puedo combinar leads de empresas y residenciales?",
    a: "Sí. Las campañas son personalizadas para cada instaladora, así que se adaptan a tu mezcla de clientes, tu zona y tu capacidad de visitas.",
  },
  {
    q: "¿Ofrecéis garantía?",
    a: "Sí, ofrecemos garantía de resultados por contrato. En el asesoramiento gratuito te explicamos cómo funciona en tu caso.",
  },
  {
    q: "¿Qué empresas se interesan más por el autoconsumo fotovoltaico?",
    a: "Las que consumen mucha electricidad de día y tienen cubierta o terreno disponible: naves industriales y logísticas, comercios, explotaciones agrícolas, hoteles, talleres o almacenes frigoríficos, entre otras.",
  },
  {
    q: "¿Cómo cualificáis un lead de autoconsumo industrial?",
    a: "Preguntando por la actividad, la factura o el consumo eléctrico, la cubierta disponible, si la nave es propia y quién decide. Así tu equipo solo prepara estudios para empresas que pueden invertir o contratar renting.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de autoconsumo solar para empresas",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Instaladoras de autoconsumo solar para empresas",
    },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de autoconsumo para empresas", URL),
];

export default function LeadsAutoconsumoEmpresasPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de autoconsumo para empresas"
      eyebrow="Autoconsumo industrial y comercial"
      title={TITLE}
      updated="2026-11-26"
      updatedLabel="26 de noviembre de 2026"
      summary={
        <>
          Monq Media capta empresas, comercios, naves e industrias interesadas
          en autoconsumo solar y <strong>llena la agenda de estudios y visitas
          técnicas</strong> de tu instaladora con leads cualificados y
          exclusivos, en toda España. Ejemplo: Efistar realiza entre 10 y 15
          estudios extra para empresas cada mes en Andalucía.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más estudios para empresas cada mes?"
    >
      <h2 className={h2}>Por qué el autoconsumo para empresas es diferente</h2>
      <p className={p}>
        Una empresa no decide como un particular. El proyecto es mayor, suele
        intervenir más de una persona y se compara con calma. Eso tiene dos
        consecuencias para tu equipo comercial:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Cada lead vale más,</strong> así que perder uno por llamar
          tarde sale caro.
        </li>
        <li className={li}>
          <strong>El filtro importa más:</strong> un estudio técnico para una
          empresa que no va a invertir consume horas de tu equipo.
        </li>
      </ul>

      <h2 className={h2}>Residencial frente a empresa</h2>
      <Table
        head={["", "Residencial", "Empresa"]}
        rows={[
          ["Tamaño del proyecto", "Vivienda", "Comercio, nave o industria"],
          ["Quién decide", "Una familia", "A menudo varias personas"],
          ["Primer paso", "Visita y presupuesto", "Estudio energético"],
          ["Ciclo de venta", "Más corto", "Más largo"],
        ]}
      />

      <h2 className={h2}>Cómo cualificamos cada empresa</h2>
      <Table
        head={["Pregunta", "Por qué importa"]}
        rows={[
          ["Actividad y horario", "El consumo diurno es el que más aprovecha el autoconsumo"],
          ["Factura o consumo eléctrico", "Dimensionar la instalación y el ahorro"],
          ["Cubierta o terreno disponible", "Confirmar que el proyecto es viable"],
          ["Nave propia o alquilada", "Saber quién debe autorizar la instalación"],
          ["Quién decide y cómo quiere pagar", "Compra, financiación o renting"],
        ]}
      />

      <h2 className={h2}>Sectores con más interés en el autoconsumo</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Industria y naves logísticas:</strong> grandes cubiertas y
          consumo en horario laboral.
        </li>
        <li className={li}>
          <strong>Comercio y supermercados:</strong> iluminación y frío
          durante todo el día.
        </li>
        <li className={li}>
          <strong>Agricultura y ganadería:</strong> bombeo, riego y
          refrigeración.
        </li>
        <li className={li}>
          <strong>Hoteles y residencias:</strong> climatización y agua
          caliente todo el año.
        </li>
      </ul>

      <h2 className={h2}>Cómo llenamos tu agenda de estudios para empresas</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas personalizadas</strong> con tu marca, dirigidas a
          empresas de tu zona.
        </li>
        <li className={li}>
          <strong>Filtrado:</strong> solo pasan empresas con interés real en
          invertir en autoconsumo.
        </li>
        <li className={li}>
          <strong>Contacto inmediato:</strong> nuestro{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA
          </Link>{" "}
          contacta a cada lead al momento para que no se enfríe.
        </li>
        <li className={li}>
          <strong>Agenda llena:</strong> tus técnicos reciben estudios y
          visitas con empresas que quieren instalar.
        </li>
      </ol>
      <p className={p}>
        ¿Ofreces la instalación sin inversión inicial? Mira nuestros{" "}
        <Link href="/leads-renting-fotovoltaico" className={a}>
          leads de renting fotovoltaico para empresas
        </Link>
        .
      </p>

      <h2 className={h2}>Resultados</h2>
      <p className={p}>
        De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al
        mes en los primeros 60 días, con garantía de resultados por contrato.
        En el segmento de empresas, Efistar suma entre 10 y 15 estudios extra
        al mes en Andalucía. Mira cómo lo han conseguido otras instaladoras en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        , o descubre nuestro servicio general de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads para placas solares
        </Link>
        .
      </p>
      <RelatedPosts
        title="Guías para instaladores"
        slugs={["como-vender-autoconsumo-a-empresas", "como-vender-renting-fotovoltaico-a-empresas", "coste-de-captar-un-cliente-de-autoconsumo"]}
      />
    </ContentPage>
  );
}
