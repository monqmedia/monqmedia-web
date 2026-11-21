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

const post = getPost("como-vender-renting-fotovoltaico-a-empresas");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Qué es el renting fotovoltaico para empresas?",
    a: "Una fórmula en la que la empresa instala placas solares sin pagar la instalación por adelantado: abona una cuota periódica durante el contrato y empieza a ahorrar en su factura eléctrica desde que la instalación produce.",
  },
  {
    q: "¿A qué empresas conviene ofrecer renting de placas solares?",
    a: "A las que tienen un consumo eléctrico diurno relevante, una cubierta o terreno viable y prefieren no inmovilizar capital: naves industriales, comercios, explotaciones agrícolas, hoteles o talleres, entre otras.",
  },
  {
    q: "¿Cuál es el argumento principal para vender renting?",
    a: "Comparar la cuota con el ahorro mensual en la factura. Si el ahorro estimado supera la cuota, la empresa ahorra desde el primer mes sin hacer inversión inicial. Ese cálculo, con sus datos reales, es lo que convence al decisor.",
  },
  {
    q: "¿Con quién hay que hablar en la empresa?",
    a: "Con quien decide y con quien paga: gerente, propietario o responsable financiero. Si solo hablas con el responsable de mantenimiento, la propuesta suele quedarse parada.",
  },
  {
    q: "¿Cómo se consiguen empresas interesadas en renting solar?",
    a: "Con campañas B2B segmentadas por sector y zona, formularios que pidan consumo, cubierta y decisor, y contacto inmediato para agendar la reunión o el estudio energético mientras el interés está vivo.",
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
      crumb="Vender renting fotovoltaico"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Renting fotovoltaico"
      title={post.title}
      updated={post.updated ?? post.date}
      updatedLabel={post.updatedLabel ?? post.dateLabel}
      summary={
        <>
          para vender renting fotovoltaico a empresas hay que{" "}
          <strong>
            hablar con quien decide, comparar la cuota con el ahorro real de su
            factura y quitar el miedo al contrato
          </strong>
          . El renting elimina la barrera de la inversión inicial, pero exige
          una venta más consultiva que la de una instalación para una
          vivienda.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres reuniones con empresas interesadas en renting solar?"
    >
      <h2 className={h2}>Renting, compra o PPA: cómo explicarlo en una frase</h2>
      <Table
        head={["Fórmula", "Qué paga la empresa", "A quién encaja"]}
        rows={[
          ["Compra", "La instalación al principio", "Empresas con liquidez que buscan el máximo ahorro"],
          ["Renting", "Una cuota periódica, sin inversión inicial", "Empresas que no quieren inmovilizar capital"],
          ["PPA", "La energía que consume, a un precio pactado", "Consumos grandes y contratos largos"],
        ]}
      />
      <p className={p}>
        Presentar las tres opciones con claridad genera confianza: la empresa
        siente que la ayudas a decidir, no que le vendes una fórmula concreta.
      </p>

      <h2 className={h2}>A quién dirigirse</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Empresas con consumo diurno alto:</strong> producen y
          consumen a la vez, y el ahorro se nota antes.
        </li>
        <li className={li}>
          <strong>Con cubierta o terreno viable:</strong> confirma
          orientación, superficie y estado antes de la reunión.
        </li>
        <li className={li}>
          <strong>Nave propia o con permiso del propietario:</strong> si la
          nave es alquilada, el contrato de renting necesita su acuerdo.
        </li>
        <li className={li}>
          <strong>El decisor real:</strong> gerente, propietario o
          responsable financiero desde la primera llamada.
        </li>
      </ul>

      <h2 className={h2}>El argumento que cierra: cuota frente a ahorro</h2>
      <p className={p}>
        Una empresa no compra placas solares: compra pagar menos cada mes. Pide
        sus facturas, estima la producción y enséñale lado a lado la cuota
        del renting y el ahorro esperado. Si el ahorro supera la cuota, el
        mensaje es simple: <strong>ahorra desde el primer mes sin invertir</strong>.
        Añade lo que pasa al terminar el contrato y quién se encarga del
        mantenimiento.
      </p>

      <h2 className={h2}>Objeciones habituales y cómo responderlas</h2>
      <Table
        head={["Objeción", "Respuesta"]}
        rows={[
          ["«No quiero atarme a un contrato largo»", "Explica duración, qué incluye la cuota y qué opciones hay al final"],
          ["«¿Y si cambia mi consumo?»", "Dimensiona con datos reales y deja margen; muestra el ahorro con escenarios prudentes"],
          ["«La nave no es mía»", "Plantea el acuerdo con el propietario desde el principio"],
          ["«Prefiero comprarla»", "Perfecto: ofrece también la compra y compara ambas"],
          ["«Lo tengo que consultar»", "Agenda ya la siguiente reunión con quien decide"],
        ]}
      />
      <p className={p}>
        Más respuestas en{" "}
        <Link href="/blog/objeciones-cliente-placas-solares" className={a}>
          objeciones del cliente de placas solares
        </Link>{" "}
        y en{" "}
        <Link href="/blog/como-vender-autoconsumo-a-empresas" className={a}>
          cómo vender autoconsumo a empresas
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo conseguir empresas interesadas en renting</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Segmenta por sector y zona</strong> donde tu equipo puede
          instalar.
        </li>
        <li className={li}>
          <strong>Mensaje claro:</strong> placas solares para tu empresa, sin
          inversión inicial.
        </li>
        <li className={li}>
          <strong>Formulario que cualifica:</strong> actividad, factura o
          consumo, cubierta, nave propia y quién decide.
        </li>
        <li className={li}>
          <strong>Contacto inmediato</strong> para agendar la reunión antes de
          que la empresa hable con otro proveedor. Ver el{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA de contacto de leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Seguimiento de cada propuesta</strong> hasta la firma.
        </li>
      </ol>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Captamos{" "}
        <Link href="/leads-renting-fotovoltaico" className={a}>
          leads de renting fotovoltaico para empresas
        </Link>{" "}
        con tu marca, cualificados por consumo, cubierta y decisor, y con la
        reunión ya agendada. Si también vendes instalaciones en propiedad, mira{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          leads de autoconsumo para empresas
        </Link>{" "}
        y nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
