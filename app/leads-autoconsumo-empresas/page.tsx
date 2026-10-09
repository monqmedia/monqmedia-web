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

const URL = `${SITE}/leads-autoconsumo-empresas`;
const TITLE = "Leads de autoconsumo solar para empresas e industria";
const DESCRIPTION =
  "Captamos empresas, naves e industrias interesadas en autoconsumo solar y llenamos la agenda de estudios y visitas técnicas de tu instaladora. Leads cualificados y exclusivos en toda España.";

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
      updated="2026-10-09"
      updatedLabel="9 de octubre de 2026"
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

      <h2 className={h2}>Resultados</h2>
      <p className={p}>
        De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al
        mes en los primeros 60 días, con garantía de resultados por contrato.
        Mira cómo lo han conseguido otras instaladoras en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        , o descubre nuestro servicio general de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads para placas solares
        </Link>
        .
      </p>
    </ContentPage>
  );
}
