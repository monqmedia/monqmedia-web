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

const post = getPost("como-llenar-la-agenda-de-visitas-de-tus-tecnicos");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Por qué tengo leads pero la agenda de visitas sigue medio vacía?",
    a: "Porque entre el lead y la visita hay varios filtros donde se pierden oportunidades: leads de poca calidad, contacto tardío, falta de seguimiento o citas que no se confirman. Llenar la agenda depende de cuidar todo ese recorrido, no solo de generar más leads.",
  },
  {
    q: "¿Cuántas visitas debería tener cada técnico?",
    a: "Depende de tu zona, del tipo de instalación y de tu capacidad. Lo importante es que el volumen sea constante y que cada visita sea con un cliente que quiere instalar, para no saturar al equipo con citas que no se convierten.",
  },
  {
    q: "¿Es mejor más leads o leads mejores?",
    a: "Leads mejores. Un volumen alto de contactos sin filtrar llena el día del comercial de llamadas, no la agenda de los técnicos de visitas útiles.",
  },
  {
    q: "¿Cómo ayuda Monq Media a llenar la agenda?",
    a: "Con campañas personalizadas que generan leads cualificados y exclusivos y un sistema de inteligencia artificial que contacta a cada lead al momento. De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días.",
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
      crumb="Llenar la agenda de visitas"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          una agenda de visitas llena no depende solo de conseguir más leads,
          sino de cuidar todo el recorrido: <strong>leads cualificados,
          contacto inmediato, cita confirmada y visita con un cliente que quiere
          instalar</strong>. Si falla uno de esos pasos, la agenda se vacía
          aunque entren contactos.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres la agenda de tus técnicos llena de visitas?"
    >
      <h2 className={h2}>Del lead a la visita: dónde se pierden las oportunidades</h2>
      <p className={p}>
        Muchas instaladoras miden cuántos leads entran, pero no cuántos acaban
        en visita técnica. Entre un punto y otro hay cuatro etapas, y en cada
        una se puede perder un cliente:
      </p>
      <Table
        head={["Etapa", "Qué puede fallar", "Qué hacer"]}
        rows={[
          ["Captación", "Leads sin interés real o compartidos", "Leads cualificados y exclusivos"],
          ["Primer contacto", "Se llama tarde y el lead se enfría", "Contacto inmediato, a cualquier hora"],
          ["Cita", "No se concreta día ni hora", "Agendar en la misma conversación"],
          ["Visita", "El cliente no estaba decidido", "Filtrar antes de mandar al técnico"],
        ]}
      />

      <h2 className={h2}>1. Empieza por la calidad del lead</h2>
      <p className={p}>
        Una agenda llena de visitas inútiles es peor que una agenda corta: el
        técnico pierde la jornada y el coste por instalación se dispara. Por eso
        el primer paso es atraer a personas y empresas que buscan placas
        solares de verdad, con campañas propias en lugar de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads compartidos con otras instaladoras
        </Link>
        .
      </p>

      <h2 className={h2}>2. Contacta en minutos, no en horas</h2>
      <p className={p}>
        El interés del cliente es máximo justo cuando pide información. Si la
        respuesta llega al día siguiente, la probabilidad de conseguir la visita
        baja. Lee más sobre{" "}
        <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
          por qué se enfrían los leads de placas solares
        </Link>
        .
      </p>

      <h2 className={h2}>3. Separa el primer contacto del trabajo comercial</h2>
      <p className={p}>
        Tu comercial no puede estar pendiente del teléfono las 24 horas. La
        solución es automatizar el primer contacto para que cada lead reciba
        respuesta al instante, y reservar el tiempo del equipo para los clientes
        con intención real. Es lo que hace nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>
        .
      </p>

      <h2 className={h2}>4. Mide visitas e instalaciones, no clics</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Visitas agendadas por semana</strong> y por técnico.
        </li>
        <li className={li}>
          <strong>Porcentaje de leads que llegan a visita.</strong>
        </li>
        <li className={li}>
          <strong>Instalaciones cerradas</strong> y coste por cliente captado.
        </li>
      </ul>
      <p className={p}>
        Con esos datos sabes qué campaña llena la agenda y cuál solo llena el
        móvil de llamadas. Mira cómo lo han conseguido otras empresas en
        nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
