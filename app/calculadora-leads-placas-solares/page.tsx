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
import Calculator from "./Calculator";

const URL = `${SITE}/calculadora-leads-placas-solares`;
const TITLE = "Calculadora de leads para instaladores de placas solares";
const DESCRIPTION =
  "Calcula cuántos leads y visitas técnicas necesita tu empresa de placas solares para cerrar las instalaciones que quieres cada mes, y cuánto te cuesta captar cada cliente. Gratis.";

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
    type: "website",
  },
};

const faqs: Faq[] = [
  {
    q: "¿Cuántos leads necesito para cerrar una instalación de placas solares?",
    a: "Depende de dos tasas: qué porcentaje de leads llega a visita técnica y qué porcentaje de visitas acaba en venta. Leads necesarios = instalaciones ÷ (% visita × % cierre). La calculadora lo hace por ti con tus datos.",
  },
  {
    q: "¿Cómo se calcula el coste de captación por instalación?",
    a: "Se divide la inversión total en captación (leads, publicidad, herramientas) entre las instalaciones cerradas en el mismo periodo. Es la métrica que de verdad dice si tu captación es rentable.",
  },
  {
    q: "¿Qué tasa de cierre es buena en placas solares?",
    a: "Varía mucho según la zona, el tipo de cliente y la calidad de los leads. Lo útil es medir la tuya y mejorarla: cualificar mejor y contactar antes sube tanto el paso de lead a visita como el de visita a venta.",
  },
  {
    q: "¿Cómo reduzco el número de leads que necesito?",
    a: "Mejorando las tasas, no solo comprando más leads: leads exclusivos en vez de compartidos, contacto inmediato para que no se enfríen, filtro antes de la visita y seguimiento de cada presupuesto.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: TITLE,
    url: URL,
    description: DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "es",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@type": "Organization", name: "Monq Media", url: SITE },
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Calculadora de leads", URL),
];

export default function CalculadoraLeadsPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Calculadora de leads"
      eyebrow="Herramienta gratuita"
      title={TITLE}
      updated="2026-10-24"
      updatedLabel="24 de octubre de 2026"
      summary={
        <>
          para saber cuántos leads necesitas al mes,{" "}
          <strong>
            divide tus instalaciones objetivo entre el % de visitas que acaban
            en venta (son tus visitas técnicas) y el resultado entre el % de
            leads que llegan a visita
          </strong>
          . Introduce tus datos y verás cuántos leads, visitas e inversión
          necesitas, y cuánto te cuesta captar cada cliente de placas solares.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres que te ayudemos a llenar esas visitas?"
    >
      <Calculator />

      <h2 className={h2}>Cómo funciona el cálculo</h2>
      <Table
        head={["Paso", "Fórmula"]}
        rows={[
          ["Visitas técnicas necesarias", "Instalaciones ÷ % de visitas que acaban en venta"],
          ["Leads necesarios", "Visitas ÷ % de leads que llegan a visita"],
          ["Inversión en leads", "Leads × coste medio por lead"],
          ["Coste por instalación", "Inversión ÷ instalaciones"],
        ]}
      />
      <p className={p}>
        Ejemplo: para 10 instalaciones con un 30&nbsp;% de cierre en visita
        necesitas unas 34 visitas; si el 40&nbsp;% de los leads acepta la
        visita, necesitas unos 84 leads al mes.
      </p>

      <h2 className={h2}>Qué palanca mueve más tus números</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>% de leads que llegan a visita:</strong> sube con contacto
          inmediato y leads exclusivos. Ver{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>% de visitas que acaban en venta:</strong> sube con buena
          cualificación, un presupuesto claro y seguimiento. Ver{" "}
          <Link href="/blog/presupuesto-de-placas-solares-que-convierte" className={a}>
            cómo hacer un presupuesto que se firme
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Coste por lead:</strong> importa, pero menos de lo que
          parece; un lead barato y compartido suele empeorar las otras dos
          tasas. Ver{" "}
          <Link href="/blog/leads-exclusivos-o-compartidos-placas-solares" className={a}>
            leads exclusivos o compartidos
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Cómo te ayuda Monq Media</h2>
      <p className={p}>
        Trabajamos las tres palancas a la vez: campañas con tu marca que
        generan{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads exclusivos de placas solares
        </Link>
        , un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        que los contacta al momento y visitas técnicas agendadas en tu
        calendario. De media, nuestros clientes suman entre 7 y 10
        instalaciones extra al mes en los primeros 60 días, con garantía de
        resultados por contrato.
      </p>

      <RelatedPosts
        title="Guías para instaladores"
        slugs={[
          "coste-de-captar-un-cliente-de-autoconsumo",
          "como-cualificar-un-lead-de-placas-solares",
          "como-llenar-la-agenda-de-visitas-de-tus-tecnicos",
        ]}
      />
    </ContentPage>
  );
}
