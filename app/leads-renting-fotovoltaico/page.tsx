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

const URL = `${SITE}/leads-renting-fotovoltaico`;
const TITLE = "Leads de renting fotovoltaico para empresas";
const DESCRIPTION =
  "Captamos empresas interesadas en instalar placas solares en renting, sin inversión inicial: leads B2B cualificados por consumo, cubierta y decisor, y reuniones agendadas para tu equipo comercial.";

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
    q: "¿Qué es un lead de renting fotovoltaico?",
    a: "Una empresa que se interesa por instalar placas solares sin hacer la inversión inicial, pagando una cuota periódica. Un lead cualificado además tiene un consumo eléctrico relevante, una cubierta o terreno viable y una persona con capacidad de decisión.",
  },
  {
    q: "¿Qué empresas se interesan por el renting de placas solares?",
    a: "Sobre todo naves industriales, comercios, explotaciones agrícolas, hoteles y empresas con consumo diurno alto que quieren ahorrar en la factura sin inmovilizar capital.",
  },
  {
    q: "¿Cómo cualificáis los leads de renting?",
    a: "Preguntando por el tipo de empresa, el consumo o la factura eléctrica mensual, la cubierta disponible, si la nave es propia o alquilada y quién decide. Así tu comercial solo se reúne con empresas que pueden contratar.",
  },
  {
    q: "¿Trabajáis también la venta directa de instalaciones a empresas?",
    a: "Sí. Captamos tanto empresas que prefieren renting como las que compran la instalación. Lo vemos en nuestra página de autoconsumo para empresas.",
  },
  {
    q: "¿Los leads son exclusivos?",
    a: "Sí. Las campañas van con tu marca y cada lead es solo para tu empresa, con garantía de resultados por contrato.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Generación de leads de renting fotovoltaico para empresas",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Leads de renting fotovoltaico", URL),
];

export default function LeadsRentingFotovoltaicoPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Leads de renting fotovoltaico"
      eyebrow="Renting fotovoltaico"
      title={TITLE}
      updated="2026-11-20"
      updatedLabel="20 de noviembre de 2026"
      summary={
        <>
          Monq Media capta{" "}
          <strong>
            empresas interesadas en instalar placas solares en renting, sin
            inversión inicial
          </strong>
          , las cualifica por consumo, cubierta y decisor, y agenda reuniones
          con tu equipo comercial. Leads B2B exclusivos, con tu marca y
          contactados al momento.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más reuniones con empresas interesadas en renting?"
    >
      <h2 className={h2}>Por qué el renting fotovoltaico necesita otra captación</h2>
      <p className={p}>
        Vender renting de placas solares a empresas no es lo mismo que vender
        una instalación a un particular: decide un gerente o un responsable
        financiero, el ciclo es más largo y lo que pesa es el ahorro mensual
        frente a la cuota. Por eso los mensajes, la segmentación y la
        cualificación tienen que ser específicos para empresas.
      </p>

      <h2 className={h2}>Cómo cualificamos cada empresa</h2>
      <Table
        head={["Pregunta", "Por qué importa"]}
        rows={[
          ["Tipo de empresa y actividad", "Saber si el consumo es diurno y encaja con el autoconsumo"],
          ["Factura o consumo eléctrico mensual", "Dimensionar el ahorro y la cuota"],
          ["Cubierta o terreno disponible", "Confirmar que la instalación es viable"],
          ["Nave propia o alquilada", "Condiciona el contrato de renting"],
          ["Quién decide", "Reunirse con la persona correcta desde el principio"],
        ]}
      />

      <h2 className={h2}>Qué hacemos</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas B2B con tu marca</strong> dirigidas a empresas y
          sectores con consumo alto en tus zonas.
        </li>
        <li className={li}>
          <strong>Mensaje de renting:</strong> ahorro desde el primer mes, sin
          inversión inicial.
        </li>
        <li className={li}>
          <strong>Contacto inmediato con IA</strong> para que ninguna empresa
          se quede sin respuesta. Ver el{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA de contacto de leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Reuniones o estudios energéticos agendados</strong> en la
          agenda de tu equipo.
        </li>
      </ul>

      <h2 className={h2}>Renting, compra o PPA: una sola captación</h2>
      <p className={p}>
        Muchas empresas comparan fórmulas antes de decidir. Si también vendes
        instalaciones en propiedad, mira{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          leads de autoconsumo para empresas
        </Link>{" "}
        y{" "}
        <Link href="/blog/como-vender-autoconsumo-a-empresas" className={a}>
          cómo vender autoconsumo a empresas
        </Link>
        . Y si quieres saber cuántos leads necesitas, usa la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads
        </Link>
        .
      </p>

      <RelatedPosts
        title="Guías para empresas fotovoltaicas"
        slugs={[
          "como-vender-autoconsumo-a-empresas",
          "marketing-para-empresas-fotovoltaicas",
          "coste-de-captar-un-cliente-de-autoconsumo",
        ]}
      />
    </ContentPage>
  );
}
