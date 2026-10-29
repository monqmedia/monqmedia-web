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
    q: "¿Cómo aparezco en el mapa de Google al buscar placas solares?",
    a: "Con un Perfil de Empresa de Google completo: categoría correcta, zona de servicio real, fotos de instalaciones, publicaciones y reseñas constantes de clientes.",
  },
  {
    q: "¿Debo crear una página por cada ciudad?",
    a: "Solo si tiene contenido propio y útil, como instalaciones y casos reales de esa zona. Muchas páginas casi iguales por ciudad pueden perjudicar tu posicionamiento.",
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
    modified: post.updated,
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
      updated={post.updated ?? post.date}
      updatedLabel={post.updatedLabel ?? post.dateLabel}
      summary={
        <>
          para una instaladora solar, el mejor lead es el que está{" "}
          <strong>dentro de su radio de trabajo</strong>. El marketing local
          combina cuatro piezas: un Perfil de Empresa de Google completo y con
          reseñas, una web que demuestre instalaciones en tu zona, anuncios
          limitados a donde puedes instalar y la medición del coste por
          instalación en cada zona. Así llenas la agenda de visitas técnicas
          sin perder dinero en desplazamientos.
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


      <h2 className={h2}>1. Perfil de Empresa de Google: tu escaparate local</h2>
      <p className={p}>
        Cuando alguien busca «placas solares» o «instaladores de placas
        solares cerca de mí», Google muestra primero el mapa con fichas de
        empresas. Para aparecer ahí:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Categoría principal correcta</strong> relacionada con energía
          solar y las secundarias que apliquen (baterías, aerotermia…).
        </li>
        <li className={li}>
          <strong>Zona de servicio</strong> con los municipios o provincias
          donde realmente instalas.
        </li>
        <li className={li}>
          <strong>Fotos reales de instalaciones</strong> y del equipo, y
          publicaciones periódicas.
        </li>
        <li className={li}>
          <strong>Reseñas constantes</strong> de clientes, respondiendo a
          todas. Ver{" "}
          <Link href="/blog/resenas-google-instaladora-placas-solares" className={a}>
            cómo conseguir reseñas en Google
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>2. Una web que demuestre que trabajas en la zona</h2>
      <p className={p}>
        Más que crear muchas páginas casi iguales por ciudad (Google las
        penaliza), muestra pruebas reales: instalaciones hechas en cada zona,
        casos con fotos y testimonios, y los municipios donde trabajas. Si
        creas una página por zona, que tenga contenido propio de verdad.
      </p>

      <h2 className={h2}>3. Anuncios limitados a donde puedes instalar</h2>
      <Table
        head={["Canal", "Cómo hacerlo local"]}
        rows={[
          ["Google Ads", "Ubicación por provincias, municipios o radio; búsquedas tipo «placas solares + ciudad»"],
          ["Facebook e Instagram", "Segmentación por radio o códigos postales; creatividades con instalaciones de la zona"],
          ["Formularios", "Pedir el código postal para descartar leads fuera de tu radio"],
        ]}
      />
      <p className={p}>
        Más detalle en{" "}
        <Link href="/publicidad-placas-solares" className={a}>
          publicidad para empresas de placas solares
        </Link>
        .
      </p>

      <h2 className={h2}>4. Referencias y boca a boca en la zona</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Clientes como prescriptores:</strong> pide recomendaciones
          tras cada instalación bien hecha.
        </li>
        <li className={li}>
          <strong>Mensajes con referencias locales:</strong> «más de X
          instalaciones en tu comarca» convence más que un mensaje genérico
          (usa siempre tus cifras reales).
        </li>
        <li className={li}>
          <strong>Venta a clientes actuales:</strong> baterías, aerotermia o
          cargadores. Ver{" "}
          <Link href="/blog/vender-aerotermia-y-cargadores-a-clientes-de-placas-solares" className={a}>
            venta cruzada
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>5. Mide el coste por instalación en cada zona</h2>
      <p className={p}>
        No todas las zonas rinden igual. Calcula cuánto te cuesta cada
        instalación por provincia o comarca, incluyendo desplazamientos, y
        reparte la inversión donde sale más rentable. Puedes empezar con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads para placas solares
        </Link>
        . Y amplía a nuevas zonas por fases, cuando tu equipo tenga capacidad.
      </p>

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
