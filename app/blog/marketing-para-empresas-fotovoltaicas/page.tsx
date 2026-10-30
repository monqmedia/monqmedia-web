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

const post = getPost("marketing-para-empresas-fotovoltaicas");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Cómo hago un plan de marketing para mi empresa fotovoltaica?",
    a: "En cinco pasos: define tu cliente y tu zona, elige los canales (Google, Meta, web y Perfil de Empresa), prepara páginas y formularios que filtren, organiza el contacto inmediato y el seguimiento, y mide el coste por instalación para invertir donde funciona.",
  },
  {
    q: "¿Cuánto debe invertir una empresa fotovoltaica en marketing?",
    a: "Parte de tu objetivo de instalaciones: con tus tasas de conversión calcula cuántos leads necesitas y cuánto cuestan. Nuestra calculadora de leads para placas solares lo hace en segundos.",
  },
  {
    q: "¿Qué tipo de marketing funciona mejor para una empresa fotovoltaica?",
    a: "El que genera visitas técnicas e instalaciones, no solo visibilidad: campañas de captación con la marca de la empresa, dirigidas a su zona, con filtro de calidad y contacto inmediato de cada lead.",
  },
  {
    q: "¿Redes sociales o Google?",
    a: "Ambos pueden funcionar. Lo importante no es el canal sino que la campaña esté bien segmentada, que los leads se filtren y que alguien los contacte al momento. Mide cada canal por coste por instalación.",
  },
  {
    q: "¿Sirve el SEO para una instaladora de paneles solares?",
    a: "Sí, a medio plazo. Una web con páginas claras por servicio y zona, preguntas frecuentes y reseñas ayuda a captar clientes que buscan instalaciones fotovoltaicas. Es complementario a las campañas, que dan resultados más rápidos.",
  },
  {
    q: "¿Qué hace Monq Media diferente?",
    a: "Nos especializamos en energías renovables y medimos el éxito en visitas e instalaciones. De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días, con garantía de resultados por contrato.",
  },
];

const jsonLd = [
  articleJsonLd({
    title: post.title,
    description: post.description,
    url: URL,
    published: post.date,
    modified: post.updated,
  }),
  faqJsonLd(faqs),
  breadcrumbJsonLd(post.title, URL, { name: "Blog", href: "/blog" }),
];

export default function Article() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Marketing para empresas fotovoltaicas"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Marketing"
      title={post.title}
      updated={post.updated ?? post.date}
      updatedLabel={post.updatedLabel ?? post.dateLabel}
      summary={
        <>
          el marketing para empresas fotovoltaicas funciona cuando se mide en{" "}
          <strong>visitas técnicas e instalaciones, no en clics</strong>. La
          combinación que mejor rinde es: campañas con tu marca y tu zona,
          clientes potenciales filtrados, contacto inmediato y seguimiento de
          cada presupuesto.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres un marketing que se mida en instalaciones?"
    >
      <h2 className={h2}>Por qué el marketing genérico no funciona en fotovoltaica</h2>
      <p className={p}>
        Una instalación de paneles solares es una decisión importante para una
        familia o una empresa. El cliente compara, pide varios presupuestos y
        necesita confiar en quien va a instalar. Un marketing pensado para
        conseguir clics baratos trae contactos que no llegan a visita. El
        sector fotovoltaico necesita un enfoque que acompañe al cliente hasta
        la instalación.
      </p>

      <h2 className={h2}>Plan de marketing para una empresa fotovoltaica en 5 pasos</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Cliente y zona:</strong> vivienda, empresa o ambos, y las
          provincias donde tu equipo puede instalar. Para negocios, mira{" "}
          <Link href="/blog/como-vender-autoconsumo-a-empresas" className={a}>
            cómo vender autoconsumo a empresas
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Propuesta clara:</strong> por qué elegirte (servicio,
          garantías, instalaciones en la zona, financiación si la ofreces).
        </li>
        <li className={li}>
          <strong>Canales:</strong> Google para quien ya busca, Meta para
          generar demanda, y web y Perfil de Empresa para la confianza.
        </li>
        <li className={li}>
          <strong>Conversión y contacto:</strong> páginas y formularios que
          filtran, contacto en minutos y seguimiento de cada presupuesto.
        </li>
        <li className={li}>
          <strong>Medición:</strong> coste por instalación por canal y por
          zona, revisado cada mes.
        </li>
      </ol>

      <h2 className={h2}>El embudo: del anuncio a la instalación</h2>
      <Table
        head={["Etapa", "Qué medir", "Cómo mejorarla"]}
        rows={[
          ["Anuncio", "Coste por lead", "Mensaje con tu marca y zona bien segmentada"],
          ["Lead", "% que llega a visita técnica", "Contacto inmediato y cualificación"],
          ["Visita técnica", "% que recibe presupuesto", "Visitas solo a clientes con intención"],
          ["Presupuesto", "% que firma", "Presupuesto claro y seguimiento planificado"],
          ["Instalación", "Coste por instalación y retorno", "Invertir más en lo que funciona"],
        ]}
      />
      <p className={p}>
        Calcula tus números con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads para placas solares
        </Link>{" "}
        y repasa los términos en el{" "}
        <Link href="/glosario-captacion-placas-solares" className={a}>
          glosario de captación
        </Link>
        .
      </p>

      <h2 className={h2}>Canales: qué aporta cada uno</h2>
      <Table
        head={["Canal", "Para qué sirve", "Ojo con"]}
        rows={[
          ["Campañas en redes sociales", "Generar demanda en tu zona", "Filtrar curiosos antes de la visita"],
          ["Campañas en buscadores", "Captar a quien ya busca placas solares", "Coste por clic en zonas competidas"],
          ["SEO y web", "Visibilidad estable a medio plazo", "Tarda meses en dar resultados"],
          ["Google Business Profile", "Clientes de tu zona y reseñas", "Mantenerlo actualizado"],
          ["Plataformas de leads", "Volumen rápido", "Leads compartidos con otras instaladoras"],
        ]}
      />

      <h2 className={h2}>Las métricas que importan</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Coste por instalación</strong> (no coste por lead). Ver{" "}
          <Link href="/blog/coste-de-captar-un-cliente-de-autoconsumo" className={a}>
            cómo calcularlo
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Porcentaje de leads que llegan a visita técnica.</strong>
        </li>
        <li className={li}>
          <strong>Tiempo hasta el primer contacto</strong> con cada lead.
        </li>
        <li className={li}>
          <strong>Presupuestos con seguimiento</strong> frente a presupuestos
          olvidados.
        </li>
      </ul>

      <h2 className={h2}>Errores frecuentes</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas sin tu marca:</strong> el cliente no sabe quién eres
          cuando le llamas.
        </li>
        <li className={li}>
          <strong>Zona demasiado amplia:</strong> visitas lejos que no
          compensan. Más en{" "}
          <Link href="/blog/marketing-local-para-instaladoras-solares" className={a}>
            marketing local para instaladoras solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Nadie contacta a tiempo:</strong> el lead se enfría. Ver{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Cómo lo hacemos en Monq Media</h2>
      <p className={p}>
        Somos una{" "}
        <Link href="/agencia-marketing-placas-solares" className={a}>
          agencia de marketing especializada en empresas de placas solares
        </Link>{" "}
        y fotovoltaicas de toda España, centrada en la captación de
        clientes. Combinamos campañas personalizadas con tu marca,{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        y un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA que contacta cada lead al momento
        </Link>
        . Mira los resultados en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
