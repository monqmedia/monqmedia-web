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

const post = getPost("presupuesto-de-placas-solares-que-convierte");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Qué debe incluir un presupuesto de placas solares?",
    a: "Los datos de consumo del cliente, la potencia y los componentes propuestos (módulos solares, inversor y, si aplica, batería), el ahorro estimado, el precio con impuestos y formas de pago, los plazos, las garantías y el siguiente paso.",
  },
  {
    q: "¿Es mejor enviar el presupuesto por email o presentarlo?",
    a: "Presentarlo, en la visita o en una llamada breve. Un PDF enviado sin explicación se compara solo por precio; explicado, el cliente entiende qué compra y por qué.",
  },
  {
    q: "¿Cuánto tiempo debe pasar entre la visita técnica y el presupuesto?",
    a: "Cuanto menos, mejor. Si el cliente espera días, se enfría y puede pedir otros presupuestos. Lo ideal es entregarlo en la misma visita o muy poco después.",
  },
  {
    q: "¿Qué hago si el cliente no responde al presupuesto?",
    a: "Tener un seguimiento planificado: llamadas y mensajes en fechas concretas, resolviendo dudas en lugar de solo preguntar «¿lo has pensado?».",
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
      crumb="Presupuesto que convierte"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          un presupuesto de placas solares que se firma es{" "}
          <strong>claro, personalizado con los datos del cliente, rápido de
          entregar y con un siguiente paso fijado</strong>. Explica el ahorro
          antes que el precio, detalla componentes y garantías y se presenta
          en persona o por llamada, no solo por email.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más visitas técnicas que acaben en presupuesto firmado?"
    >
      <h2 className={h2}>Qué incluir en un presupuesto de instalación fotovoltaica</h2>
      <Table
        head={["Apartado", "Por qué importa"]}
        rows={[
          ["Consumo y factura actual del cliente", "Demuestra que el estudio es suyo, no genérico"],
          ["Potencia y componentes (módulos, inversor, batería)", "Da transparencia y evita comparar solo precio"],
          ["Ahorro estimado y retorno", "Es el motivo real de compra"],
          ["Precio, impuestos y formas de pago", "Evita sorpresas y facilita la decisión"],
          ["Plazos de instalación y legalización", "Responde a «¿cuándo empiezo a ahorrar?»"],
          ["Garantías y servicio posventa", "Genera confianza en la empresa"],
          ["Siguiente paso y validez", "Convierte el documento en una decisión"],
        ]}
      />

      <h2 className={h2}>Cinco errores que dejan presupuestos sin firmar</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Tardar en entregarlo:</strong> el interés baja cada día que
          pasa.
        </li>
        <li className={li}>
          <strong>Empezar por el precio:</strong> sin contexto de ahorro,
          cualquier cifra parece cara.
        </li>
        <li className={li}>
          <strong>Lenguaje técnico sin explicar:</strong> el cliente no
          firma lo que no entiende.
        </li>
        <li className={li}>
          <strong>Prometer ayudas sin confirmar:</strong> genera
          desconfianza. Ver{" "}
          <Link href="/blog/ayudas-placas-solares-como-argumento-de-venta" className={a}>
            ayudas como argumento de venta
          </Link>
          .
        </li>
        <li className={li}>
          <strong>No fijar seguimiento:</strong> lee{" "}
          <Link href="/blog/seguimiento-de-presupuestos-de-placas-solares" className={a}>
            seguimiento de presupuestos de placas solares
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>El presupuesto empieza antes de la visita</h2>
      <p className={p}>
        Un buen presupuesto solo convierte si llega a un cliente con
        intención real. Si la agenda de tus técnicos se llena de visitas a
        curiosos, ningún documento lo arregla: primero hay que{" "}
        <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
          cualificar cada lead
        </Link>{" "}
        y preparar las respuestas a las{" "}
        <Link href="/blog/objeciones-cliente-placas-solares" className={a}>
          objeciones más habituales
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Captamos{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados de placas solares
        </Link>{" "}
        para empresas fotovoltaicas de toda España y nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        los contacta al momento para llenar la agenda de visitas técnicas.
        De media, nuestros clientes suman entre 7 y 10 instalaciones extra
        al mes en los primeros 60 días. Mira los{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
