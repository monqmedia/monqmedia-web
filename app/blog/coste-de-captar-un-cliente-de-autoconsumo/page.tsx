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

const post = getPost("coste-de-captar-un-cliente-de-autoconsumo");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Qué es el coste de captar un cliente de autoconsumo?",
    a: "Es todo lo que gastas para conseguir una instalación cerrada: publicidad o compra de leads, tiempo comercial, visitas técnicas que no se cierran y herramientas, dividido entre las instalaciones que cierras.",
  },
  {
    q: "¿Existe un coste por cliente «normal» en el sector?",
    a: "Varía mucho según la zona, el tipo de cliente (residencial o empresa), la competencia y cómo trabaja tu equipo. Por eso lo útil es calcular el tuyo y mejorarlo mes a mes, no compararte con una cifra genérica.",
  },
  {
    q: "¿Cómo se baja el coste por cliente?",
    a: "Mejorando la calidad del lead, contactando más rápido, filtrando antes de la visita y haciendo seguimiento de los presupuestos. Así cierras más con la misma inversión.",
  },
  {
    q: "¿Qué resultados ha conseguido Monq Media en este indicador?",
    a: "En el caso de Vira Energy, el coste por cliente captado bajó un 41 % trabajando con Monq Media.",
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
      crumb="Coste por cliente"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Rentabilidad"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          el coste de captar un cliente de autoconsumo es{" "}
          <strong>todo lo que gastas para conseguir una instalación cerrada,
          dividido entre las instalaciones que cierras</strong>. No depende solo
          del precio de la publicidad: la calidad del lead, la rapidez de
          contacto y el seguimiento lo cambian por completo.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres bajar tu coste por cliente?"
    >
      <h2 className={h2}>La fórmula</h2>
      <div className="rounded-2xl border border-[#ececf0] bg-[#fafafb] px-6 py-5 mb-4">
        <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#14161b] font-semibold">
          Coste por cliente = (inversión en captación + coste comercial y de
          visitas) ÷ instalaciones cerradas
        </p>
      </div>
      <p className={p}>
        Calcúlalo por mes y por canal. Así sabrás qué fuente de clientes te
        sale rentable y cuál solo parece barata. Para hacerlo en segundos,
        usa nuestra{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads para placas solares
        </Link>
        .
      </p>

      <h2 className={h2}>Qué gastos incluir</h2>
      <Table
        head={["Partida", "Qué incluye"]}
        rows={[
          ["Captación", "Publicidad, agencia o compra de leads"],
          ["Tiempo comercial", "Horas de llamadas, seguimiento y presupuestos"],
          ["Visitas técnicas", "Desplazamientos y horas de técnico, también las que no se cierran"],
          ["Herramientas", "CRM, telefonía y automatizaciones"],
        ]}
      />
      <p className={p}>
        El error más habitual es contar solo la publicidad. Las visitas que no
        se cierran son un coste muy real y, en muchas instaladoras, el más alto.
      </p>

      <h2 className={h2}>Las palancas que bajan el coste por cliente</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Leads cualificados y exclusivos:</strong> menos competencia y
          menos visitas inútiles. Más en{" "}
          <Link href="/blog/leads-exclusivos-o-compartidos-placas-solares" className={a}>
            leads exclusivos o compartidos
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Contacto inmediato:</strong> un lead que se enfría es
          inversión perdida.
        </li>
        <li className={li}>
          <strong>Filtrar antes de la visita:</strong> ver{" "}
          <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
            cómo cualificar un lead de placas solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Seguimiento de presupuestos:</strong> cada presupuesto
          recuperado baja el coste de todos los demás. Más en{" "}
          <Link href="/blog/seguimiento-de-presupuestos-de-placas-solares" className={a}>
            seguimiento de presupuestos
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Un caso real</h2>
      <p className={p}>
        Vira Energy, empresa de autoconsumo con sedes en Cataluña, Comunidad
        Valenciana y Madrid, redujo un 41 % su coste por cliente captado
        trabajando con Monq Media, a la vez que multiplicaba por 3,2 sus
        instalaciones cerradas. Puedes ver más resultados en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        o conocer nuestro servicio de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados para placas solares
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
