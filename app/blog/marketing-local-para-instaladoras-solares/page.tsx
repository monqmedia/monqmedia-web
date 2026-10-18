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

const post = getPost("marketing-local-para-instaladoras-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Por qué es importante el marketing local para una instaladora?",
    a: "Porque cada visita técnica tiene un coste de desplazamiento. Un lead fuera de tu zona de trabajo puede no compensar, aunque tenga interés real.",
  },
  {
    q: "¿Se pueden segmentar las campañas por provincia o código postal?",
    a: "Sí. Las campañas digitales permiten limitar la zona geográfica, de modo que los leads lleguen solo de donde tu equipo puede instalar.",
  },
  {
    q: "¿Trabaja Monq Media con instaladoras de cualquier región?",
    a: "Sí, trabajamos con empresas de toda España. Por ejemplo, con Vira Energy (Cataluña, Comunidad Valenciana y Madrid) o con Efistar en Andalucía.",
  },
  {
    q: "¿Qué pasa si quiero crecer a otra provincia?",
    a: "Se puede ampliar la zona de las campañas de forma progresiva, a medida que tu equipo tiene capacidad para atender visitas allí.",
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
      crumb="Marketing local"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Marketing"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          para una instaladora solar, el mejor lead es el que está{" "}
          <strong>dentro de su radio de trabajo</strong>. El marketing local
          consiste en atraer clientes solo de las zonas donde tu equipo puede
          hacer visitas e instalaciones de forma rentable, y crecer a nuevas
          provincias cuando tengas capacidad.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres llenar la agenda en tu zona de trabajo?"
    >
      <h2 className={h2}>El problema de captar clientes demasiado lejos</h2>
      <p className={p}>
        Un lead de otra provincia puede parecer una buena noticia, pero si tu
        técnico tiene que hacer muchos kilómetros para la visita, el coste de
        esa instalación sube y la agenda se desordena. Por eso la zona
        geográfica es una de las primeras decisiones de cualquier campaña.
      </p>

      <h2 className={h2}>Cómo definir tu zona</h2>
      <Table
        head={["Pregunta", "Para qué sirve"]}
        rows={[
          ["¿Desde dónde salen tus técnicos?", "Fijar el centro de la zona de trabajo"],
          ["¿Hasta dónde compensa desplazarse?", "Marcar el radio máximo de las campañas"],
          ["¿Dónde tienes más instalaciones hechas?", "Priorizar zonas con referencias cercanas"],
          ["¿Cuántas visitas puedes atender a la semana?", "Ajustar el volumen de leads por zona"],
        ]}
      />

      <h2 className={h2}>Tácticas de marketing local que funcionan</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas limitadas a tu zona</strong> (provincia, comarca o
          códigos postales).
        </li>
        <li className={li}>
          <strong>Mensajes con referencias locales:</strong> el cliente confía
          más en una empresa que trabaja cerca.
        </li>
        <li className={li}>
          <strong>Ficha de Google Business Profile</strong> completa y con
          reseñas de clientes reales.
        </li>
        <li className={li}>
          <strong>Crecimiento por fases:</strong> amplía la zona cuando tu
          equipo tenga capacidad, no antes.
        </li>
      </ul>

      <h2 className={h2}>Cómo lo hacemos en Monq Media</h2>
      <p className={p}>
        Diseñamos campañas personalizadas para cada instaladora, con su marca
        y su zona de trabajo, para que solo lleguen{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados
        </Link>{" "}
        de donde puede instalar. Trabajamos con empresas de toda España: puedes
        ver ejemplos en Cataluña, Comunidad Valenciana, Madrid y Andalucía en
        nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        . Y si tu zona tiene muchas empresas, mira también{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          leads de autoconsumo para empresas
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
