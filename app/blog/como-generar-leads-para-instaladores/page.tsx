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

const post = getPost("como-generar-leads-para-instaladores");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Cuál es la forma más rápida de generar leads para instaladores?",
    a: "La publicidad en Google y en Facebook e Instagram, limitada a la zona donde instalas y con un formulario que filtre. Da resultados en días; el SEO y las reseñas tardan más pero abaratan la captación a medio plazo.",
  },
  {
    q: "¿Es mejor generar leads propios o comprarlos?",
    a: "Los leads propios, con tu marca, suelen ser exclusivos y confían más en ti. Los comprados a plataformas son rápidos, pero a menudo se venden a varias instaladoras a la vez y obligan a competir por precio.",
  },
  {
    q: "¿Cuántos leads necesita un instalador al mes?",
    a: "Depende de cuántas instalaciones quieras cerrar y de tus tasas de conversión (lead a visita y visita a venta). Puedes calcularlo con nuestra calculadora de leads para placas solares.",
  },
  {
    q: "¿Qué hago para que los leads no se pierdan?",
    a: "Contactarlos en minutos, también fuera de horario, cualificarlos antes de enviar al técnico y hacer seguimiento de cada presupuesto. Un sistema de IA puede encargarse del primer contacto.",
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
      crumb="Generar leads para instaladores"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Captación"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          para generar leads como instalador de placas solares, aerotermia o
          cargadores necesitas{" "}
          <strong>
            anuncios con tu marca limitados a tu zona, un formulario que filtre
            a los curiosos, contacto en minutos y medir el coste por instalación
          </strong>
          . Con eso, cada lead tiene opciones reales de convertirse en una
          visita técnica y una venta.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres leads que acaben en visitas técnicas?"
    >
      <h2 className={h2}>Los 5 pasos para generar leads como instalador</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Define cliente y zona:</strong> vivienda o empresa, y los
          municipios donde tu equipo puede instalar de forma rentable.
        </li>
        <li className={li}>
          <strong>Elige los canales:</strong> Google para quien ya busca,
          Facebook e Instagram para generar demanda, y web y Perfil de Empresa
          para la confianza.
        </li>
        <li className={li}>
          <strong>Filtra desde el formulario:</strong> tipo de vivienda o
          negocio, tejado o instalación actual, factura y plazo.
        </li>
        <li className={li}>
          <strong>Contacta en minutos:</strong> un lead que espera horas se
          enfría. Ver{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Mide hasta la instalación:</strong> coste por visita y por
          cliente, por canal y por zona.
        </li>
      </ol>

      <h2 className={h2}>Canales para generar leads: qué aporta cada uno</h2>
      <Table
        head={["Canal", "Cómo es", "Lo que debes vigilar"]}
        rows={[
          ["Google Ads", "Rápido, alta intención", "Búsquedas que no venden"],
          ["Facebook e Instagram", "Rápido, calidad variable", "Curiosos sin filtro"],
          ["SEO y web", "Lento, alta calidad", "Tarda meses en arrancar"],
          ["Perfil de Empresa y reseñas", "Medio, alta confianza", "Constancia en reseñas"],
          ["Plataformas de leads", "Inmediato, a menudo compartido", "Competir por el mismo cliente"],
          ["Clientes actuales y referidos", "Medio, muy alta calidad", "Pedir recomendaciones siempre"],
        ]}
      />
      <p className={p}>
        Para la publicidad, mira{" "}
        <Link href="/publicidad-placas-solares" className={a}>
          publicidad para empresas de placas solares
        </Link>
        ; para la zona,{" "}
        <Link href="/blog/marketing-local-para-instaladoras-solares" className={a}>
          marketing local para instaladores
        </Link>
        .
      </p>

      <h2 className={h2}>Leads para cada tipo de instalador</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Placas solares y autoconsumo:</strong> el mayor volumen de
          búsquedas y de campañas. Ver{" "}
          <Link href="/leads-placas-solares" className={a}>
            leads de placas solares
          </Link>{" "}
          y{" "}
          <Link href="/leads-autoconsumo-empresas" className={a}>
            autoconsumo para empresas
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Aerotermia:</strong> decisión más técnica; cualifica bien el
          sistema actual. Ver{" "}
          <Link href="/leads-aerotermia" className={a}>
            leads de aerotermia
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Cargadores de coche eléctrico:</strong> encaja con clientes
          que ya tienen o van a instalar placas. Ver{" "}
          <Link href="/leads-cargadores-coche-electrico" className={a}>
            leads de cargadores
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Baterías:</strong> ideal para tu base de clientes con
          placas. Ver{" "}
          <Link href="/leads-baterias-solares" className={a}>
            leads de baterías solares
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Cuántos leads necesitas</h2>
      <p className={p}>
        Leads necesarios = instalaciones objetivo ÷ (% de leads que llegan a
        visita × % de visitas que acaban en venta). Hazlo en segundos con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo lo hacemos en Monq Media</h2>
      <p className={p}>
        Somos una{" "}
        <Link href="/agencia-marketing-placas-solares" className={a}>
          agencia especializada en captación para instaladores
        </Link>
        : campañas con tu marca, leads exclusivos y un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        que los contacta al momento y agenda la visita técnica. De media,
        nuestros clientes suman entre 7 y 10 instalaciones extra al mes en los
        primeros 60 días, con garantía de resultados por contrato.
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
