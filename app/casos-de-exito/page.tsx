import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
  SITE,
  Table,
  a,
  breadcrumbJsonLd,
  faqJsonLd,
  h2,
  p,
  type Faq,
} from "@/app/components/ContentPage";

const URL = `${SITE}/casos-de-exito`;
const TITLE = "Casos de éxito de empresas de placas solares";
const DESCRIPTION =
  "Resultados reales de instaladoras de placas solares que trabajan con Monq Media: Vira Energy, Eco Max Energía, Pulso Solar, Efistar, Vadesol Energía y Solarclic.";

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

const cases = [
  {
    name: "Vira Energy",
    headline: "x3,2 instalaciones cerradas",
    text: "Empresa de autoconsumo solar y eficiencia energética para viviendas y empresas, con sedes en Cataluña, Comunidad Valenciana y Madrid. Querían llenar la agenda de su equipo con solicitudes de estudio energético gratuito, sin depender de plataformas de leads compartidos ni de la captación a puerta fría. Con Monq Media logran y sostienen x3,2 instalaciones cerradas, más de 400 leads cualificados al mes, un 41 % menos de coste por cliente captado y un retorno de x11 por cada euro invertido.",
  },
  {
    name: "Eco Max Energía",
    headline: "+30.000 € de beneficio mensual extra",
    text: "Monq Media se ha convertido en su canal nº1 de ventas, con más de 30.000 € de beneficio extra cada mes.",
  },
  {
    name: "Pulso Solar",
    headline: "+20 % en ventas",
    text: "Aumentaron sus ventas un 20 % trabajando con Monq Media. Daniel Ballester, CEO de Hegosun.com y Pulsosolar.es, destaca: «su trato cercano, resolutivo y proactivo: su implicación marca realmente la diferencia».",
  },
  {
    name: "Efistar",
    headline: "10-15 estudios extra para empresas al mes",
    text: "Realizan entre 10 y 15 estudios extra para empresas cada mes en Andalucía.",
  },
  {
    name: "Vadesol Energía",
    headline: "Más instalaciones y flujo estable",
    text: "Aumentaron sus instalaciones y consiguieron un flujo de clientes estable mes a mes.",
  },
  {
    name: "Solarclic",
    headline: "Más instalaciones y flujo estable",
    text: "Aumentaron sus instalaciones y la estabilidad de su flujo mensual de clientes.",
  },
];

const faqs: Faq[] = [
  {
    q: "¿Qué resultados consiguen las empresas que trabajan con Monq Media?",
    a: "De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días. En conjunto generamos más de 2.000 clientes potenciales al mes y más de 9 M€ de facturación para nuestros clientes.",
  },
  {
    q: "¿Trabajáis con empresas pequeñas o solo con grandes instaladoras?",
    a: "Trabajamos con empresas de placas solares de distintos tamaños en toda España. En el asesoramiento gratuito analizamos tu caso y te decimos con honestidad si podemos ayudarte.",
  },
  {
    q: "¿Ofrecéis garantía?",
    a: "Sí, ofrecemos garantía de resultados por contrato.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: URL,
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "Monq Media", url: SITE },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cases.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${c.name}: ${c.headline}`,
      })),
    },
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Casos de éxito", URL),
];

export default function CasosDeExitoPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Casos de éxito"
      eyebrow="Resultados"
      title={TITLE}
      updated="2026-10-08"
      updatedLabel="8 de octubre de 2026"
      summary={
        <>
          instaladoras de placas solares de toda España trabajan con Monq Media
          para conseguir <strong>leads cualificados y la agenda de visitas
          llena</strong>. De media, añaden entre 7 y 10 instalaciones extra al
          mes en los primeros 60 días.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres ser el próximo caso de éxito?"
    >
      <h2 className={h2}>Resultados de un vistazo</h2>
      <Table
        head={["Empresa", "Resultado con Monq Media"]}
        rows={cases.map((c) => [c.name, c.headline])}
      />

      {cases.map((c) => (
        <section key={c.name}>
          <h2 className={h2}>
            {c.name}: {c.headline}
          </h2>
          <p className={p}>{c.text}</p>
        </section>
      ))}

      <h2 className={h2}>Qué tienen en común</h2>
      <p className={p}>
        En todos los casos aplicamos el mismo sistema: campañas personalizadas
        con la marca de cada empresa para crear un canal propio y predecible,{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        y contacto inmediato con nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de inteligencia artificial
        </Link>
        , para que sus técnicos tengan la agenda llena de visitas con clientes
        que quieren instalar.
      </p>
    </ContentPage>
  );
}
