import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
  SITE,
  Table,
  a,
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  h2,
  li,
  p,
  type Faq,
} from "@/app/components/ContentPage";
import { getPost } from "../posts";

const post = getPost("conseguir-clientes-placas-solares-sin-puerta-fria");
const URL = `${SITE}/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: URL },
  openGraph: {
    title: `${post.title} | Monq Media`,
    description: post.description,
    url: URL,
    siteName: "Monq Media",
    locale: "es_ES",
    type: "article",
    publishedTime: post.date,
  },
};

const faqs: Faq[] = [
  {
    q: "¿Funciona todavía la puerta fría para vender placas solares?",
    a: "Puede generar alguna venta, pero exige mucho tiempo de comerciales, no es predecible y no escala bien. Además, el cliente no te ha pedido nada: empiezas la conversación desde la desconfianza.",
  },
  {
    q: "¿Cuál es la mejor alternativa?",
    a: "Un canal propio de captación: campañas con tu marca que atraen a personas y empresas que ya buscan placas solares, con filtro de calidad y contacto inmediato para convertirlas en visitas técnicas.",
  },
  {
    q: "¿Y comprar leads a plataformas?",
    a: "Es rápido de empezar, pero esos leads se suelen vender a varias instaladoras a la vez, que compiten por el mismo cliente. El resultado suele ser guerra de precios y menos cierres.",
  },
  {
    q: "¿Cuánto tarda en notarse un canal propio?",
    a: "Depende de cada empresa y zona. Como referencia, los clientes de Monq Media añaden de media entre 7 y 10 instalaciones extra al mes en los primeros 60 días.",
  },
];

const jsonLd = [
  articleJsonLd({
    title: post.title,
    description: post.description,
    url: URL,
    published: post.date,
  }),
  faqJsonLd(faqs),
  breadcrumbJsonLd(post.title, URL, { name: "Blog", href: "/blog" }),
];

export default function Article() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Clientes sin puerta fría"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Captación"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          para conseguir clientes de placas solares sin puerta fría necesitas
          un <strong>canal propio de captación</strong>: campañas con tu marca
          que atraen a quien ya busca placas, un filtro que deja pasar solo a
          clientes con intención real y contacto inmediato para convertirlos en
          visitas técnicas.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres la agenda llena sin tocar puertas?"
    >
      <h2 className={h2}>Por qué la puerta fría ya no es suficiente</h2>
      <p className={p}>
        La puerta fría, el boca a boca y los comerciales en la calle han
        funcionado durante años. El problema es que no son predecibles: un mes
        hay trabajo y al siguiente no. Además, consumen muchas horas de equipo
        por cada visita conseguida y no dependen de ti, sino de la suerte o de
        las recomendaciones.
      </p>

      <h2 className={h2}>Comparativa de canales de captación</h2>
      <Table
        head={["Canal", "Ventaja", "Problema"]}
        rows={[
          ["Puerta fría", "No requiere inversión en publicidad", "Mucho tiempo por visita y poco predecible"],
          ["Boca a boca", "Clientes de confianza", "No se puede escalar ni planificar"],
          ["Plataformas de leads", "Rápido de empezar", "Leads compartidos con otras instaladoras"],
          ["Canal propio", "Leads exclusivos y predecibles", "Requiere un sistema bien montado"],
        ]}
      />

      <h2 className={h2}>Las 4 piezas de un canal propio que funciona</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas con tu marca.</strong> El cliente te conoce a ti, no
          a una plataforma intermedia. Eso genera confianza desde el primer
          contacto.
        </li>
        <li className={li}>
          <strong>Filtro de calidad.</strong> Lo importante no es tener muchos
          formularios, sino leads cualificados que quieren una visita técnica.
        </li>
        <li className={li}>
          <strong>Contacto inmediato.</strong> Un lead que espera horas se
          enfría. Lee{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads de placas solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Medición.</strong> Saber qué campaña trae visitas e
          instalaciones, no solo clics, para invertir donde funciona.
        </li>
      </ol>

      <h2 className={h2}>Errores frecuentes al dejar la puerta fría</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Medir el éxito en leads y no en visitas.</strong> Muchos
          contactos baratos que no llegan a visita salen caros.
        </li>
        <li className={li}>
          <strong>Depender de leads compartidos.</strong> Competir por el mismo
          cliente con otras instaladoras hunde el margen.
        </li>
        <li className={li}>
          <strong>Elegir una agencia generalista.</strong> Muchas instaladoras
          ya han probado agencias de marketing digital que no conocían el sector
          y no les funcionó por calidad o por volumen de leads.
        </li>
      </ul>

      <h2 className={h2}>Cómo lo hacemos en Monq Media</h2>
      <p className={p}>
        Montamos para cada instaladora un canal propio con campañas
        personalizadas que respetan su marca,{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        y un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA que contacta cada lead al momento
        </Link>
        . El objetivo es la agenda de tus técnicos llena de visitas, con
        garantía de resultados por contrato. Puedes ver resultados reales en
        nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
    </ContentPage>
  );
}
