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

const post = getPost("vender-placas-solares-en-invierno");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Se venden menos placas solares en invierno?",
    a: "Muchas instaladoras notan menos demanda en los meses fríos, sobre todo en vivienda. Pero el interés no desaparece: cambia el argumento y conviene ajustar la captación para no vaciar la agenda.",
  },
  {
    q: "¿Producen las placas solares en invierno?",
    a: "Sí, aunque menos que en verano por tener menos horas de sol. La decisión se toma por el ahorro a lo largo del año, no por un mes concreto.",
  },
  {
    q: "¿Qué argumento funciona mejor en invierno?",
    a: "Instalar ahora para estar produciendo cuando llegan los meses de más sol, y aprovechar que suele haber más disponibilidad para la instalación y la legalización.",
  },
  {
    q: "¿Conviene parar las campañas en invierno?",
    a: "Parar del todo suele ser un error: la agenda se vacía y luego cuesta arrancar. Es mejor ajustar mensajes, segmentación y presupuesto, y trabajar a la vez los presupuestos pendientes.",
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
      crumb="Vender placas solares en invierno"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          en otoño e invierno se pueden seguir vendiendo placas solares si{" "}
          <strong>se cambia el argumento (instalar ahora para aprovechar los
          meses de más sol), se ajustan las campañas en vez de pararlas y se
          trabajan los presupuestos pendientes</strong>. Las empresas que
          mantienen la captación llegan a la primavera con la agenda llena.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres llegar a la primavera con la agenda llena?"
    >
      <h2 className={h2}>Qué cambia en el cliente en los meses fríos</h2>
      <Table
        head={["Cambio", "Qué hacer"]}
        rows={[
          ["Piensa menos en el sol", "Hablar de ahorro anual y de estar listo para los meses de más producción"],
          ["Facturas de invierno altas", "Usar su factura real como punto de partida del estudio"],
          ["Gastos de fin de año", "Explicar formas de pago y plazos con claridad"],
          ["Más dudas sobre si «compensa»", "Mostrar instalaciones de su zona y reseñas reales"],
        ]}
      />

      <h2 className={h2}>Cuatro acciones para mantener la agenda</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Ajustar las campañas, no apagarlas:</strong> mensajes de
          temporada, zonas más rentables y filtro en el formulario. Ver{" "}
          <Link href="/blog/por-que-fallan-las-campanas-de-una-instaladora-solar" className={a}>
            por qué fallan las campañas de una instaladora solar
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Recuperar presupuestos pendientes:</strong> los clientes
          que dijeron «más adelante» son la venta más barata. Lee{" "}
          <Link href="/blog/seguimiento-de-presupuestos-de-placas-solares" className={a}>
            seguimiento de presupuestos
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Apostar por empresas:</strong> el autoconsumo para negocios
          depende menos de la estación. Ver{" "}
          <Link href="/blog/como-vender-autoconsumo-a-empresas" className={a}>
            cómo vender autoconsumo a empresas
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Ofrecer baterías a clientes con placas:</strong> una venta
          a quien ya confía en ti. Más en{" "}
          <Link href="/leads-baterias-solares" className={a}>
            leads de baterías solares
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Contactar rápido importa todavía más</h2>
      <p className={p}>
        Con menos solicitudes de presupuesto, cada una vale más. Un lead que
        espera un día en invierno es una visita técnica perdida. Por eso
        nuestro{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA
        </Link>{" "}
        contacta a cada cliente potencial al momento, también fuera de
        horario.
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Diseñamos campañas personalizadas para empresas de energía solar de
        toda España, con enfoque a largo plazo para que la agenda no dependa
        de la temporada. Conoce nuestro servicio de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads para placas solares
        </Link>{" "}
        y los{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        de nuestros clientes.
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
