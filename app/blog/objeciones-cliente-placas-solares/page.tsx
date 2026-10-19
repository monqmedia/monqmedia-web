import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
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
import { getPost, postMetadata, postUrl } from "../posts";
import RelatedPosts from "../RelatedPosts";

const post = getPost("objeciones-cliente-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Cuál es la objeción más habitual al vender placas solares?",
    a: "El precio, o más bien la duda sobre si la inversión compensa. Casi siempre se resuelve explicando el ahorro con los datos del propio cliente y las opciones de pago, no bajando el precio.",
  },
  {
    q: "¿Qué hago si el cliente dice «me lo tengo que pensar»?",
    a: "Preguntar qué le falta para decidir y acordar una fecha para volver a hablar. Sin un siguiente paso concreto, el presupuesto suele quedarse olvidado.",
  },
  {
    q: "¿Cómo genero confianza si el cliente no me conoce?",
    a: "Con referencias cercanas, instalaciones hechas en su zona, reseñas reales y un proceso claro. Que el cliente haya llegado por tu propia marca, y no por una plataforma, también ayuda.",
  },
  {
    q: "¿Se pueden evitar objeciones antes de la visita?",
    a: "Sí: cualificando bien el lead y resolviendo dudas básicas en el primer contacto. Así la visita técnica se dedica a clientes con intención real.",
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
      crumb="Objeciones del cliente"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          las objeciones del cliente de placas solares suelen ser cuatro:{" "}
          <strong>precio, momento, viabilidad de la instalación y
          confianza</strong>. Responderlas con datos del propio cliente y un
          siguiente paso concreto convierte más presupuestos en instalaciones
          que bajar el precio.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres clientes que lleguen ya convencidos?"
    >
      <h2 className={h2}>Las objeciones más habituales y cómo responder</h2>
      <Table
        head={["Objeción", "Qué hay detrás", "Cómo responder"]}
        rows={[
          ["«Es muy caro»", "Duda sobre si compensa", "Ahorro con su factura real y formas de pago"],
          ["«Me lo tengo que pensar»", "Falta información o urgencia", "Preguntar qué falta y fijar el siguiente paso"],
          ["«No sé si mi tejado sirve»", "Miedo a que no sea viable", "Visita técnica sin compromiso"],
          ["«No os conozco»", "Falta de confianza", "Referencias de su zona y reseñas reales"],
          ["«Ya me han llamado otras empresas»", "Lead compartido o saturado", "Diferenciarse en servicio y rapidez"],
        ]}
      />

      <h2 className={h2}>Tres reglas para manejar objeciones</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Escuchar antes de responder:</strong> la objeción que dice el
          cliente no siempre es la real.
        </li>
        <li className={li}>
          <strong>Usar sus datos, no promesas genéricas:</strong> su consumo,
          su tejado, su zona.
        </li>
        <li className={li}>
          <strong>Cerrar siempre con un siguiente paso:</strong> una visita,
          una llamada o una fecha.
        </li>
      </ol>

      <h2 className={h2}>Muchas objeciones empiezan antes de la visita</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Leads compartidos:</strong> si el cliente ya ha hablado con
          otras instaladoras, llega comparando precios. Más en{" "}
          <Link href="/blog/leads-exclusivos-o-compartidos-placas-solares" className={a}>
            leads exclusivos o compartidos
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Contacto tardío:</strong> un cliente que esperó días llega
          más frío y con más dudas.
        </li>
        <li className={li}>
          <strong>Falta de filtro:</strong> visitas con curiosos que nunca iban
          a instalar. Ver{" "}
          <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
            cómo cualificar un lead
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Trabajamos para que tus comerciales reciban clientes con interés real:{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>
        , captados con tu marca y contactados al momento por nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>
        . Y si un presupuesto se queda parado, el seguimiento lo recupera:
        lee{" "}
        <Link href="/blog/seguimiento-de-presupuestos-de-placas-solares" className={a}>
          seguimiento de presupuestos de placas solares
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
