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

const post = getPost("ayudas-placas-solares-como-argumento-de-venta");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Conviene anunciar «placas solares subvencionadas»?",
    a: "Con cuidado. Atrae clics, pero también clientes que solo quieren algo gratis y expectativas que luego no se cumplen. Es mejor hablar del ahorro y presentar las ayudas como un posible extra.",
  },
  {
    q: "¿Qué tipos de ayudas existen para el autoconsumo?",
    a: "Según el momento y el lugar, puede haber subvenciones autonómicas, deducciones fiscales y bonificaciones municipales en impuestos como el IBI o el ICIO. Cambian con frecuencia, así que conviene comprobar siempre la normativa vigente antes de prometer nada.",
  },
  {
    q: "¿Debe la instaladora gestionar la ayuda?",
    a: "Ofrecer la gestión de la documentación es un buen diferencial, siempre que quede claro qué depende de la empresa y qué depende de la administración.",
  },
  {
    q: "¿Y si el cliente espera a que salga una nueva ayuda?",
    a: "Explicar con sus datos cuánto deja de ahorrar cada mes que espera ayuda a que decida con información, sin presionarle.",
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
      crumb="Ayudas como argumento de venta"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          las ayudas, deducciones y bonificaciones para placas solares son un
          buen argumento de venta <strong>si se presentan como un extra al
          ahorro, no como el motivo principal</strong>. Prometer
          subvenciones sin verificar atrae curiosos, retrasa decisiones y
          genera desconfianza; explicarlas con claridad y gestionarlas por el
          cliente ayuda a cerrar más instalaciones.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres clientes que instalen por el ahorro, no solo por la ayuda?"
    >
      <h2 className={h2}>Qué tipos de ayudas puedes mencionar</h2>
      <Table
        head={["Tipo", "Quién la concede", "Qué comprobar antes de mencionarla"]}
        rows={[
          ["Subvenciones al autoconsumo", "Comunidades autónomas u otras administraciones", "Si hay convocatoria abierta y fondos disponibles"],
          ["Deducciones fiscales", "Hacienda", "Requisitos y plazos vigentes para el cliente"],
          ["Bonificación del IBI", "Ayuntamiento", "Si el municipio del cliente la ofrece y en qué condiciones"],
          ["Bonificación del ICIO", "Ayuntamiento", "Ordenanza fiscal del municipio"],
        ]}
      />
      <p className={p}>
        No damos importes ni fechas porque cambian según la convocatoria y el
        municipio: consulta siempre la normativa vigente en la zona de cada
        cliente.
      </p>

      <h2 className={h2}>Cómo usar las ayudas sin frenar la venta</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Primero el ahorro:</strong> la instalación de paneles
          solares tiene que compensar por sí misma con la factura del
          cliente.
        </li>
        <li className={li}>
          <strong>Luego las ayudas, con prudencia:</strong> «en tu municipio
          puede aplicarse…», nunca «te van a dar…».
        </li>
        <li className={li}>
          <strong>Ofrece la gestión:</strong> el papeleo es una de las
          dudas que más retrasan la decisión.
        </li>
        <li className={li}>
          <strong>Fija el siguiente paso:</strong> una visita técnica o una
          fecha para revisar el presupuesto. Ver{" "}
          <Link href="/blog/objeciones-cliente-placas-solares" className={a}>
            objeciones del cliente de placas solares
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Ayudas en la publicidad: atención al lead de baja calidad</h2>
      <p className={p}>
        Los anuncios centrados en «subvención» o «placas gratis» suelen
        generar muchos contactos y pocas instalaciones. Si los usas, filtra
        bien en el formulario y en el primer contacto. Más en{" "}
        <Link href="/blog/por-que-fallan-las-campanas-de-una-instaladora-solar" className={a}>
          por qué fallan las campañas de una instaladora solar
        </Link>{" "}
        y{" "}
        <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
          cómo cualificar un lead de placas solares
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Captamos{" "}
        <Link href="/leads-placas-solares" className={a}>
          clientes potenciales cualificados
        </Link>{" "}
        para empresas de energía solar de toda España, con campañas que
        venden ahorro y confianza en tu marca. Nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        los contacta al momento y llena la agenda de visitas de tus
        técnicos. Si también vendes a empresas, lee{" "}
        <Link href="/blog/como-vender-autoconsumo-a-empresas" className={a}>
          cómo vender autoconsumo a empresas
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
