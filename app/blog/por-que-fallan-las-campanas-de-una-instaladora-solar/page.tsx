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

const post = getPost("por-que-fallan-las-campanas-de-una-instaladora-solar");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Funcionan Facebook Ads y Google Ads para vender placas solares?",
    a: "Sí, pero solo si la campaña está pensada para conseguir clientes que quieren instalar, no clics baratos. La segmentación, el mensaje, el formulario y la rapidez de contacto importan tanto como el presupuesto.",
  },
  {
    q: "¿Por qué recibo muchos leads de placas solares pero pocas ventas?",
    a: "Normalmente por falta de filtro (formularios demasiado fáciles, mensajes de «paneles gratis»), por contactar tarde o por medir solo el coste por lead en lugar del coste por instalación.",
  },
  {
    q: "¿Qué métrica debo mirar en una campaña de energía solar?",
    a: "El coste por visita técnica realizada y por instalación cerrada. El coste por lead es útil para optimizar anuncios, pero no dice si la campaña es rentable.",
  },
  {
    q: "¿Cuánto tarda una campaña en dar resultados?",
    a: "Depende de la zona, la marca y el presupuesto. En Monq Media nuestros clientes suman de media entre 7 y 10 instalaciones extra al mes en los primeros 60 días, con garantía de resultados por contrato.",
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
      crumb="Por qué fallan las campañas"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Publicidad"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          las campañas de Facebook y Google de una instaladora de placas
          solares suelen fallar por <strong>optimizar el coste por lead en
          vez del coste por instalación</strong>: mensajes que atraen
          curiosos, formularios sin filtro, zonas mal segmentadas y leads que
          se contactan tarde. Corregir esos puntos llena la agenda de visitas
          técnicas con clientes que sí quieren instalar.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Tus campañas traen contactos pero no instalaciones?"
    >
      <h2 className={h2}>Los errores más comunes y cómo corregirlos</h2>
      <Table
        head={["Error", "Qué provoca", "Cómo corregirlo"]}
        rows={[
          ["Mensaje de «placas gratis» o precio irreal", "Curiosos y clientes decepcionados", "Promesa realista con ahorro y calidad de servicio"],
          ["Formulario sin preguntas", "Muchos leads sin intención", "Preguntar tipo de vivienda, tejado y factura"],
          ["Zona demasiado amplia", "Visitas fuera de tu radio de trabajo", "Segmentar por provincias o códigos postales que cubres"],
          ["Contactar al día siguiente", "El cliente ya habló con otra empresa", "Contacto en minutos, también fuera de horario"],
          ["Medir solo coste por lead", "Campañas «baratas» que no venden", "Medir coste por visita y por instalación"],
          ["Anuncios genéricos sin tu marca", "Desconfianza y comparación por precio", "Creatividades con tu marca, tu equipo y tus instalaciones"],
        ]}
      />

      <h2 className={h2}>Facebook e Instagram (Meta Ads): el riesgo del lead fácil</h2>
      <p className={p}>
        En Meta los formularios instantáneos se rellenan en dos toques, y eso
        dispara el volumen de clientes potenciales… y también de contactos
        que no recuerdan haber pedido presupuesto. Para la fotovoltaica
        residencial funciona mejor añadir fricción útil: preguntas que solo
        responde quien de verdad quiere instalar paneles solares.
      </p>

      <h2 className={h2}>Google Ads: buena intención, mala selección</h2>
      <p className={p}>
        En Google el usuario busca activamente, pero las palabras clave
        amplias atraen búsquedas informativas, de empleo o de otras
        provincias. Revisar los términos de búsqueda, excluir lo que no
        vende y llevar el tráfico a una página centrada en tu servicio de
        autoconsumo marca la diferencia.
      </p>

      <h2 className={h2}>El fallo que no está en el anuncio</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Leads que se enfrían:</strong> la mayoría de campañas no
          fallan en la captación, sino después. Lee{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads de placas solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Sin cualificación:</strong> si el técnico visita a todo el
          mundo, el coste por instalación se dispara. Ver{" "}
          <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
            cómo cualificar un lead
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Sin datos de cierre:</strong> si no sabes qué campaña trae
          instalaciones, no puedes invertir donde funciona. Ver{" "}
          <Link href="/blog/coste-de-captar-un-cliente-de-autoconsumo" className={a}>
            cuánto cuesta captar un cliente de autoconsumo
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Cómo lo hacemos en Monq Media</h2>
      <p className={p}>
        Diseñamos campañas personalizadas para cada empresa fotovoltaica,
        respetando su marca y con visión a largo plazo. Buscamos{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        que nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        contacta al momento para entregar visitas técnicas agendadas. Puedes
        ver resultados reales en{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        y, si ya trabajaste con otra agencia, revisa{" "}
        <Link href="/blog/que-pedir-a-una-agencia-de-marketing-para-instaladores-solares" className={a}>
          qué pedir a una agencia de marketing
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
