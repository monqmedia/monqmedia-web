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

const URL = `${SITE}/leads-ahorro-factura-luz`;
const TITLE = "Leads de ahorro en factura de luz y tarifas";
const DESCRIPTION =
  "Captamos particulares y empresas que quieren bajar su factura de luz para comercializadoras, comparadores y asesorías energéticas: leads cualificados con factura, contactados al momento.";

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
    q: "¿Para qué empresas son estos leads?",
    a: "Para comercializadoras de luz y gas, comparadores de tarifas, asesorías y consultorías energéticas e instaladoras que ofrecen estudio de factura junto con placas solares.",
  },
  {
    q: "¿Cómo se cualifica un lead de ahorro en la factura de luz?",
    a: "Pidiendo el tipo de suministro (vivienda o empresa), la factura o el gasto mensual aproximado, la potencia contratada y la comercializadora actual. Un lead que comparte su factura tiene mucha más intención.",
  },
  {
    q: "¿Particulares o empresas?",
    a: "Ambos. Las campañas se segmentan según tu servicio: hogares que quieren pagar menos o empresas con consumo alto que buscan una asesoría energética.",
  },
  {
    q: "¿Se puede combinar con placas solares?",
    a: "Sí. El estudio de la factura es una puerta de entrada natural al autoconsumo: el cliente que optimiza su tarifa suele interesarse después por producir su propia energía.",
  },
  {
    q: "¿Cómo evitáis que los leads se enfríen?",
    a: "Con un sistema de inteligencia artificial que contacta a cada lead al momento, también fuera de horario, le pide la factura y agenda la llamada con tu asesor.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de ahorro en la factura de luz y asesoría energética",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de ahorro en la factura de luz", URL),
];

export default function LeadsAhorroFacturaLuzPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de ahorro en la factura de luz"
      eyebrow="Tarifas y asesoría energética"
      title={TITLE}
      updated="2026-11-20"
      updatedLabel="20 de noviembre de 2026"
      summary={
        <>
          Monq Media capta{" "}
          <strong>
            particulares y empresas que quieren mejorar su tarifa de luz o
            comparar ofertas de energía
          </strong>{" "}
          para comercializadoras, comparadores y asesorías energéticas. Leads
          exclusivos, cualificados con su factura y contactados al momento para
          que tu asesor solo hable con quien quiere cambiar.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más clientes que quieren bajar su factura?"
    >
      <h2 className={h2}>El reto de captar clientes para ahorro energético</h2>
      <p className={p}>
        Mucha gente quiere pagar menos luz, pero pocos dan el paso de cambiar
        de tarifa. Los formularios genéricos traen curiosos y números que no
        contestan. Lo que funciona es filtrar desde el principio, pedir la
        factura y contactar al momento, cuando el cliente aún tiene la factura
        delante.
      </p>

      <h2 className={h2}>Cómo cualificamos cada lead</h2>
      <Table
        head={["Pregunta", "Por qué importa"]}
        rows={[
          ["Vivienda o empresa", "Adaptar la oferta y el asesor"],
          ["Gasto mensual o factura", "Estimar el ahorro y priorizar"],
          ["Potencia contratada y comercializadora actual", "Preparar la comparativa"],
          ["¿Tiene o le interesan placas solares?", "Abrir una venta de autoconsumo"],
        ]}
      />

      <h2 className={h2}>Qué hacemos</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas con tu marca</strong> para hogares o empresas, según
          tu servicio.
        </li>
        <li className={li}>
          <strong>Formularios que piden la factura</strong> para filtrar a
          quien de verdad quiere ahorrar.
        </li>
        <li className={li}>
          <strong>Contacto inmediato con IA</strong> por llamada y WhatsApp.
          Ver el{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA de contacto de leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Llamadas o estudios agendados</strong> con tus asesores.
        </li>
      </ul>

      <h2 className={h2}>Del ahorro en la tarifa al autoconsumo</h2>
      <p className={p}>
        Para muchas empresas energéticas, el estudio de la factura es el
        primer paso de una relación más larga: optimizar la tarifa hoy y
        proponer placas solares, baterías o aerotermia después. Mira nuestros
        servicios de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>
        ,{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          autoconsumo para empresas
        </Link>{" "}
        y{" "}
        <Link href="/leads-aerotermia" className={a}>
          aerotermia
        </Link>
        .
      </p>

      <RelatedPosts
        title="Guías para empresas de energía"
        slugs={[
          "como-captar-clientes-comercializadora-de-luz",
          "como-cualificar-un-lead-de-placas-solares",
          "por-que-se-enfrian-los-leads-de-placas-solares",
        ]}
      />
    </ContentPage>
  );
}
