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

const post = getPost("como-vender-autoconsumo-a-empresas");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿En qué se diferencia vender autoconsumo a empresas y a particulares?",
    a: "En una empresa suele decidir más de una persona, el proyecto es mayor y el ciclo de venta más largo. El primer paso habitual es un estudio energético, no un presupuesto directo.",
  },
  {
    q: "¿Qué argumentos funcionan con una empresa?",
    a: "Los ligados a su negocio: reducir el coste energético, coincidir la producción solar con su horario de consumo y la imagen de empresa sostenible ante sus clientes.",
  },
  {
    q: "¿Cómo consigo más reuniones con empresas?",
    a: "Con campañas dirigidas a empresas de tu zona, filtrado de interés real y contacto inmediato. Por ejemplo, Efistar realiza entre 10 y 15 estudios extra para empresas cada mes en Andalucía trabajando con Monq Media.",
  },
  {
    q: "¿Cuánto dura el ciclo de venta?",
    a: "Depende del tamaño de la empresa y de cuántas personas intervienen. Por eso el seguimiento estructurado es todavía más importante que en residencial.",
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
      crumb="Vender autoconsumo a empresas"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Empresas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          vender autoconsumo fotovoltaico a empresas exige{" "}
          <strong>identificar a quién decide, empezar por un estudio
          energético y hacer un seguimiento constante</strong>. El argumento
          principal es económico y ligado a su forma de consumir energía, no
          genérico.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más estudios con empresas cada mes?"
    >
      <h2 className={h2}>Qué cambia frente al cliente particular</h2>
      <Table
        head={["", "Particular", "Empresa"]}
        rows={[
          ["Quién decide", "La familia", "Gerencia, finanzas, mantenimiento…"],
          ["Primer paso", "Visita y presupuesto", "Estudio energético"],
          ["Argumento principal", "Ahorro en la factura de casa", "Coste energético del negocio"],
          ["Ciclo de venta", "Más corto", "Más largo, varias reuniones"],
        ]}
      />

      <h2 className={h2}>El proceso de venta paso a paso</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Primer contacto rápido</strong> para confirmar interés y
          quién participa en la decisión.
        </li>
        <li className={li}>
          <strong>Estudio energético</strong> con sus consumos y su cubierta.
        </li>
        <li className={li}>
          <strong>Propuesta adaptada</strong> a su horario de consumo y a su
          forma de financiar.
        </li>
        <li className={li}>
          <strong>Seguimiento ordenado</strong> hasta la decisión, sin dejar
          pasar semanas entre contactos.
        </li>
      </ol>

      <h2 className={h2}>Argumentos que funcionan con empresas</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Coste energético:</strong> la energía es un gasto fijo del
          negocio que el autoconsumo ayuda a reducir.
        </li>
        <li className={li}>
          <strong>Producción en horario laboral:</strong> muchas empresas
          consumen de día, cuando producen los paneles solares.
        </li>
        <li className={li}>
          <strong>Imagen sostenible:</strong> un argumento cada vez más valorado
          por sus propios clientes.
        </li>
      </ul>

      <h2 className={h2}>Cómo llenar la agenda de estudios con empresas</h2>
      <p className={p}>
        En Monq Media captamos empresas, naves e industrias interesadas en
        autoconsumo y las contactamos al momento para que tu equipo dedique su
        tiempo a estudios con interés real. Mira nuestro servicio de{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          leads de autoconsumo para empresas
        </Link>{" "}
        y el caso de Efistar en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
