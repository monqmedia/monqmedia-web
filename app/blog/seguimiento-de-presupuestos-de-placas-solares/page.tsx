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

const post = getPost("seguimiento-de-presupuestos-de-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Cuántas veces hay que hacer seguimiento a un presupuesto?",
    a: "Más de una. La mayoría de empresas abandonan tras el primer intento, y muchos clientes simplemente no han tenido tiempo de decidir. Un seguimiento con varios contactos espaciados, por distintos canales, recupera ventas que se daban por perdidas.",
  },
  {
    q: "¿No resulta pesado para el cliente?",
    a: "No si cada contacto aporta algo: resolver una duda, aclarar la propuesta o ofrecer una nueva fecha para hablar. Lo que molesta es insistir sin aportar nada.",
  },
  {
    q: "¿Qué hago con los presupuestos antiguos sin respuesta?",
    a: "Reactivarlos. Son clientes que ya mostraron interés y por los que ya pagaste. Un contacto ordenado puede recuperar parte de ellos.",
  },
  {
    q: "¿Se puede automatizar el seguimiento?",
    a: "Sí. El sistema de IA de Monq Media hace seguimientos automáticos a los leads que no contestan o a los que ya se les ha entregado el presupuesto, para que tu comercial solo intervenga cuando hay interés.",
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
      crumb="Seguimiento de presupuestos"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          un presupuesto de placas solares sin seguimiento suele acabar
          olvidado. Para cerrar más instalaciones necesitas{" "}
          <strong>un seguimiento estructurado, con varios contactos y por
          varios canales</strong>, que resuelva dudas y proponga el siguiente
          paso, en lugar de esperar a que el cliente llame.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres que ningún presupuesto se quede en el cajón?"
    >
      <h2 className={h2}>Por qué se pierden los presupuestos</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Nadie vuelve a llamar.</strong> El comercial está con nuevas
          visitas y el presupuesto entregado queda en segundo plano.
        </li>
        <li className={li}>
          <strong>Se abandona tras el primer intento.</strong> Si el cliente no
          contesta una vez, se da por perdido.
        </li>
        <li className={li}>
          <strong>Dudas sin resolver.</strong> El cliente tiene preguntas sobre
          financiación, plazos o la instalación y nadie se las aclara.
        </li>
        <li className={li}>
          <strong>Otra instaladora llega antes</strong> con una llamada a tiempo.
        </li>
      </ul>

      <h2 className={h2}>Un calendario de seguimiento sencillo</h2>
      <Table
        head={["Momento", "Qué hacer"]}
        rows={[
          ["Al entregar el presupuesto", "Acordar cuándo volveréis a hablar"],
          ["Primeros días", "Contacto breve para resolver dudas"],
          ["Si no hay respuesta", "Nuevo intento por otro canal (llamada, WhatsApp, email)"],
          ["Más adelante", "Recordatorio con el siguiente paso concreto"],
          ["Presupuestos antiguos", "Campaña de reactivación ordenada"],
        ]}
      />
      <p className={p}>
        Adapta los plazos a tu forma de trabajar, pero mantén la regla
        principal: varios contactos, espaciados y con algo útil que decir en
        cada uno.
      </p>

      <h2 className={h2}>Qué decir en cada contacto</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Preguntar, no presionar:</strong> «¿Te ha surgido alguna duda
          con la propuesta?»
        </li>
        <li className={li}>
          <strong>Aclarar lo que frena la decisión:</strong> plazos, forma de
          pago o detalles técnicos.
        </li>
        <li className={li}>
          <strong>Proponer el siguiente paso:</strong> una llamada, una segunda
          visita o la fecha de instalación.
        </li>
      </ol>

      <h2 className={h2}>Automatizar el seguimiento sin perder el trato</h2>
      <p className={p}>
        El seguimiento falla sobre todo por falta de tiempo. Por eso en Monq
        Media lo automatizamos con un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de inteligencia artificial
        </Link>{" "}
        que contacta a los leads y hace seguimiento a quien no contesta o ya
        tiene presupuesto. Tu comercial interviene cuando el cliente está
        listo para avanzar. Si quieres empezar antes por el principio del
        embudo, lee{" "}
        <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
          cómo cualificar un lead de placas solares
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
