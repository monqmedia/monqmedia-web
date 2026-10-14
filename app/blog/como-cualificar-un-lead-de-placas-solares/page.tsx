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

const post = getPost("como-cualificar-un-lead-de-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Qué es cualificar un lead de placas solares?",
    a: "Comprobar, antes de mandar a un técnico, que el cliente tiene interés real, que la instalación es viable y que puede tomar la decisión. Así la visita técnica se dedica a quien puede comprar.",
  },
  {
    q: "¿Cuándo hay que cualificar?",
    a: "Lo antes posible, en el primer contacto. Cuanto más se tarda, más se enfría el lead y más tiempo pierde el equipo con contactos que no van a instalar.",
  },
  {
    q: "¿Cualificar no hace perder clientes?",
    a: "Al contrario: el cliente con interés real agradece que la visita esté preparada. Lo que se filtra son curiosos que, de todos modos, no iban a instalar.",
  },
  {
    q: "¿Se puede automatizar?",
    a: "Sí. Monq Media usa un sistema de inteligencia artificial que contacta a cada lead al momento y ayuda a cualificarlo y a agendar la visita, para que el comercial reciba el trabajo hecho.",
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
      crumb="Cualificar un lead"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          cualificar un lead de placas solares es comprobar, en el primer
          contacto, <strong>que hay interés real, que la instalación es viable
          y que quien habla puede decidir</strong>. Así tus técnicos solo hacen
          visitas que se pueden cerrar y la agenda se llena de oportunidades,
          no de curiosos.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres recibir los leads ya cualificados?"
    >
      <h2 className={h2}>Por qué cualificar antes de la visita</h2>
      <p className={p}>
        Cada visita técnica cuesta horas de un técnico, desplazamiento y tiempo
        de preparación. Si la mitad de las visitas son con personas que solo
        querían «informarse», el coste por instalación se dispara y el equipo se
        desmotiva. Cualificar es poner un filtro barato (unas preguntas) antes
        del paso caro (la visita).
      </p>

      <h2 className={h2}>Las 5 preguntas que debe responder cada lead</h2>
      <Table
        head={["Qué comprobar", "Por qué importa"]}
        rows={[
          ["Tipo de inmueble y tejado", "Saber si la instalación es viable antes de desplazarse"],
          ["Si es propietario o puede decidir", "Evitar visitas a quien no puede firmar"],
          ["Consumo o factura aproximada", "Dimensionar el interés y preparar la propuesta"],
          ["Plazo en el que quiere instalar", "Priorizar a quien quiere hacerlo ya"],
          ["Disponibilidad para la visita", "Cerrar la cita en la misma conversación"],
        ]}
      />

      <h2 className={h2}>Señales de un lead caliente</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Responde rápido</strong> al primer contacto y da datos
          concretos.
        </li>
        <li className={li}>
          <strong>Pregunta por plazos o por la visita,</strong> no solo por el
          precio.
        </li>
        <li className={li}>
          <strong>Acepta una fecha</strong> para que el técnico vaya.
        </li>
      </ul>

      <h2 className={h2}>Señales de un curioso</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>No es quien decide</strong> y no puede concretar quién lo hará.
        </li>
        <li className={li}>
          <strong>Solo quiere un precio</strong> por teléfono, sin visita.
        </li>
        <li className={li}>
          <strong>No contesta</strong> después del primer mensaje.
        </li>
      </ul>
      <p className={p}>
        Un curioso no es un lead perdido: puede entrar en un seguimiento para
        más adelante. Pero no debe ocupar el hueco de una visita técnica.
      </p>

      <h2 className={h2}>Cómo hacerlo sin cargar a tu equipo</h2>
      <p className={p}>
        La cualificación funciona mejor cuando se hace al instante, en el mismo
        momento en que el lead pide información. Por eso en Monq Media
        combinamos{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        con un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA que contacta a cada lead al momento
        </Link>
        . Tu comercial recibe clientes con interés real y visitas listas para
        agendar. Si quieres ver cómo encaja en el día a día, lee{" "}
        <Link href="/blog/como-llenar-la-agenda-de-visitas-de-tus-tecnicos" className={a}>
          cómo llenar la agenda de visitas de tus técnicos
        </Link>
        .
      </p>
    </ContentPage>
  );
}
