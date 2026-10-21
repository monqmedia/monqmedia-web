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

const post = getPost("resenas-google-instaladora-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Por qué son tan importantes las reseñas para una instaladora solar?",
    a: "Porque instalar placas solares es una compra grande y poco frecuente: el cliente no conoce a la empresa y busca pruebas de que otros quedaron contentos. Las reseñas también ayudan a aparecer en las búsquedas locales de Google.",
  },
  {
    q: "¿Cuándo es mejor pedir una reseña?",
    a: "Justo después de un buen momento: al terminar la instalación, cuando el cliente ve la primera factura con ahorro o tras resolver una incidencia con éxito.",
  },
  {
    q: "¿Se pueden ofrecer regalos a cambio de reseñas?",
    a: "No es recomendable: las políticas de Google prohíben incentivar reseñas y puede costarte su eliminación. Es mejor pedirlas de forma sencilla y responder a todas.",
  },
  {
    q: "¿Qué hago con una reseña negativa?",
    a: "Responder con educación, reconocer el problema si lo hubo y ofrecer una solución. Una buena respuesta genera más confianza que no tener ninguna crítica.",
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
      crumb="Reseñas en Google"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Marketing local"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          las reseñas en Google son una de las pruebas de confianza más
          fuertes para una empresa de paneles solares. Se consiguen{" "}
          <strong>pidiéndolas siempre, en el momento adecuado y con un
          enlace directo</strong>, y respondiendo a todas, buenas y malas.
          Más reseñas reales significan más confianza y más solicitudes de
          presupuesto que llegan ya convencidas.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres que esa confianza se convierta en visitas técnicas?"
    >
      <h2 className={h2}>Cuándo y cómo pedir cada reseña</h2>
      <Table
        head={["Momento", "Cómo pedirla"]}
        rows={[
          ["Al terminar la instalación", "El técnico lo comenta y se envía el enlace por WhatsApp ese mismo día"],
          ["Primera factura con ahorro", "Mensaje breve preguntando por el ahorro e invitando a contarlo"],
          ["Tras resolver una incidencia", "Agradecer la paciencia y pedir su opinión sobre el servicio"],
          ["Cliente que te recomienda", "Pedirle que deje por escrito lo que ya cuenta a sus conocidos"],
        ]}
      />

      <h2 className={h2}>Cinco claves para tener reseñas de forma constante</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Enlace directo:</strong> usa el enlace para pedir reseñas
          de tu Perfil de Empresa de Google; cuantos menos pasos, más
          respuestas.
        </li>
        <li className={li}>
          <strong>Que forme parte del proceso:</strong> un paso fijo del
          cierre de cada instalación fotovoltaica, no algo que se hace
          cuando alguien se acuerda.
        </li>
        <li className={li}>
          <strong>Pedir detalles:</strong> que el cliente mencione su zona o
          el tipo de instalación (autoconsumo, baterías) hace la reseña más
          útil para otros.
        </li>
        <li className={li}>
          <strong>Responder a todas:</strong> muestra que hay una empresa
          detrás que cuida a sus clientes.
        </li>
        <li className={li}>
          <strong>Usarlas en tu marketing:</strong> en la web, en los
          presupuestos y en las campañas, siempre con el permiso del cliente.
        </li>
      </ol>

      <h2 className={h2}>Reseñas y captación de clientes</h2>
      <p className={p}>
        Las reseñas no sustituyen a la captación, pero la hacen más
        rentable: el cliente que llega desde un anuncio y encuentra
        opiniones reales confía antes y negocia menos por precio. Lee más
        sobre{" "}
        <Link href="/blog/marketing-local-para-instaladoras-solares" className={a}>
          marketing local para instaladoras solares
        </Link>{" "}
        y sobre cómo afrontar las{" "}
        <Link href="/blog/objeciones-cliente-placas-solares" className={a}>
          objeciones del cliente
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Llevamos clientes potenciales cualificados a empresas de energía
        solar de toda España con campañas que respetan su marca, y nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        los contacta al momento para llenar la agenda de visitas. Más
        instalaciones significan también más clientes satisfechos que
        pueden dejar su reseña. Descubre nuestro servicio de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads para placas solares
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
