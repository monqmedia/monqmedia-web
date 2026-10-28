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

const post = getPost("reactivar-leads-antiguos-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Merece la pena reactivar leads antiguos de placas solares?",
    a: "Sí. Son contactos que ya pagaste y que en su momento se interesaron por instalar placas solares. Recuperar una parte de ellos cuesta mucho menos que captar leads nuevos con publicidad.",
  },
  {
    q: "¿Qué leads conviene reactivar primero?",
    a: "Los presupuestos entregados que no se cerraron y las solicitudes recientes que nunca llegaron a visita técnica. Son los que más intención mostraron.",
  },
  {
    q: "¿Qué mensaje funciona para reactivar a un cliente?",
    a: "Uno personal y útil: recordar su solicitud, preguntar si sigue interesado y ofrecer algo concreto, como revisar su presupuesto o una visita técnica sin compromiso. Sin presión.",
  },
  {
    q: "¿Se puede automatizar la reactivación?",
    a: "Sí. Un sistema de IA puede contactar por WhatsApp, llamada, email o SMS a toda la base de datos, cualificar a quien responde y agendar la visita en tu calendario.",
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
      crumb="Reactivar leads antiguos"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          reactivar leads antiguos de placas solares consiste en{" "}
          <strong>volver a contactar, con orden y un mensaje útil, a las
          solicitudes y presupuestos que se quedaron sin cerrar</strong>.
          Empieza por los presupuestos entregados, segmenta por antigüedad y
          lleva a quien siga interesado a una visita técnica. Es la forma más
          barata de sumar instalaciones.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres recuperar las ventas de tu base de datos?"
    >
      <h2 className={h2}>Por qué tienes ventas escondidas en tu base de datos</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Leads que nadie llamó a tiempo</strong> y se enfriaron. Ver{" "}
          <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
            por qué se enfrían los leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Presupuestos de instalación fotovoltaica sin respuesta</strong>{" "}
          a los que no se hizo seguimiento.
        </li>
        <li className={li}>
          <strong>Clientes que dijeron «más adelante»</strong> y cuyo momento
          puede ser ahora: nueva factura alta, cambio de vivienda o de
          negocio.
        </li>
      </ul>

      <h2 className={h2}>Por dónde empezar: prioriza tu base de datos</h2>
      <Table
        head={["Grupo", "Por qué", "Qué ofrecer"]}
        rows={[
          ["Presupuestos entregados sin cerrar", "Ya conocen tu propuesta", "Revisar el presupuesto y resolver dudas"],
          ["Solicitudes sin visita técnica", "Mostraron interés y no llegaron a verte", "Visita técnica sin compromiso"],
          ["Leads antiguos sin respuesta", "Su situación puede haber cambiado", "Un estudio actualizado de ahorro"],
          ["Clientes con placas solares", "Ya confían en ti", "Baterías, aerotermia o cargador"],
        ]}
      />

      <h2 className={h2}>Cinco pasos para reactivar leads de placas solares</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Reúne y limpia la base de datos:</strong> CRM, hojas de
          cálculo y plataformas de anuncios, sin duplicados.
        </li>
        <li className={li}>
          <strong>Segmenta</strong> por antigüedad y por etapa (solicitud,
          visita, presupuesto).
        </li>
        <li className={li}>
          <strong>Mensaje personal y útil:</strong> recuerda su solicitud y
          ofrece algo concreto, sin presionar.
        </li>
        <li className={li}>
          <strong>Varios canales y varios intentos:</strong> WhatsApp,
          llamada, email. Un solo intento no basta.
        </li>
        <li className={li}>
          <strong>Agenda y mide:</strong> lleva a quien responde a una visita
          técnica y anota el resultado en el CRM. Ver{" "}
          <Link href="/blog/crm-para-instaladores-de-placas-solares" className={a}>
            CRM para instaladores
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Automatizarlo con IA</h2>
      <p className={p}>
        Llamar uno a uno a cientos de contactos antiguos es inviable para la
        mayoría de equipos comerciales. Un sistema de IA puede hacerlo por
        ti: contacta a toda la base de datos, cualifica a quien responde y
        agenda la visita. Lo explicamos en{" "}
        <a href="https://ia.monqmedia.com/reactivacion-leads/" className={a}>
          reactivación de leads con IA
        </a>{" "}
        y en nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Combinamos la reactivación con la captación de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads nuevos y exclusivos de placas solares
        </Link>{" "}
        para que la agenda de visitas técnicas de tu empresa esté llena todo
        el año. Calcula cuántos leads necesitas con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
