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

const post = getPost("crm-para-instaladores-de-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Necesita un CRM una instaladora de placas solares pequeña?",
    a: "Sí, en cuanto recibe leads de forma regular. Una hoja de cálculo sirve al principio, pero no avisa, no programa seguimientos y hace que los contactos se pierdan cuando hay volumen.",
  },
  {
    q: "¿Qué es lo más importante de un CRM para energía solar?",
    a: "Que los leads entren solos desde las campañas, que se contacten al momento y que cada uno tenga siempre un siguiente paso: llamada, visita técnica, presupuesto o seguimiento.",
  },
  {
    q: "¿Un CRM sustituye al comercial?",
    a: "No. Le quita tareas repetitivas y le da orden. Con un sistema de IA conectado, el primer contacto y los recordatorios se automatizan y el comercial se dedica a las visitas y al cierre.",
  },
  {
    q: "¿Qué métricas debería mostrar?",
    a: "Leads recibidos, tiempo hasta el primer contacto, visitas técnicas agendadas, presupuestos enviados, instalaciones cerradas y coste por instalación por cada fuente.",
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
      crumb="CRM para instaladores"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          un buen CRM para instaladores de placas solares{" "}
          <strong>recibe los leads automáticamente, avisa para contactarlos
          al momento, organiza la agenda de visitas técnicas y programa el
          seguimiento de cada presupuesto</strong>. Más que el programa
          concreto, importa que ningún cliente potencial se quede sin
          siguiente paso.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres un sistema que llene tu agenda de visitas?"
    >
      <h2 className={h2}>Funciones imprescindibles</h2>
      <Table
        head={["Función", "Para qué sirve en una empresa fotovoltaica"]}
        rows={[
          ["Entrada automática de leads", "Que cada solicitud de presupuesto llegue al instante, sin copiar datos"],
          ["Aviso y contacto inmediato", "Llamar o escribir antes de que el cliente hable con otra instaladora"],
          ["Etapas del proceso", "Ver quién está pendiente de visita, de presupuesto o de firma"],
          ["Agenda de visitas técnicas", "Asignar visitas por zona y técnico sin solapes"],
          ["Seguimientos programados", "Que ningún presupuesto se quede olvidado"],
          ["Origen de cada lead", "Saber qué campaña trae instalaciones y no solo contactos"],
        ]}
      />

      <h2 className={h2}>Errores habituales al usar un CRM</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Tenerlo pero no usarlo:</strong> si el equipo sigue con
          libretas y WhatsApp personal, el CRM solo muestra datos viejos.
        </li>
        <li className={li}>
          <strong>Demasiados campos:</strong> cuanto más largo es registrar
          un lead, menos se registra.
        </li>
        <li className={li}>
          <strong>No medir hasta la instalación:</strong> sin datos de
          cierre no sabes cuánto cuesta cada cliente. Ver{" "}
          <Link href="/blog/coste-de-captar-un-cliente-de-autoconsumo" className={a}>
            cuánto cuesta captar un cliente de autoconsumo
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Contacto manual y tardío:</strong> el CRM avisa, pero si
          nadie llama hasta el día siguiente, el lead se enfría. Lee{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads de placas solares
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>CRM + IA: el contacto que no espera</h2>
      <p className={p}>
        El salto de verdad llega al conectar el CRM con un sistema de IA que
        llama y escribe por WhatsApp a cada lead en cuanto entra, lo
        cualifica y agenda la visita técnica en el calendario del equipo,
        también por la noche y en fin de semana. Lo explicamos en{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>{" "}
        y en{" "}
        <a href="https://ia.monqmedia.com" className={a}>
          MONQ &amp;IA
        </a>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Captamos{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados para empresas de placas solares
        </Link>{" "}
        de toda España y los entregamos con el contacto ya hecho y la visita
        agendada. Mira cómo lo hemos hecho en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        y cómo organizar el día a día en{" "}
        <Link href="/blog/como-llenar-la-agenda-de-visitas-de-tus-tecnicos" className={a}>
          cómo llenar la agenda de tus técnicos
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
