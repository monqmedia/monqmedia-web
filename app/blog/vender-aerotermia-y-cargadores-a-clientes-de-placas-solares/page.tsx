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

const post = getPost("vender-aerotermia-y-cargadores-a-clientes-de-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Por qué vender a clientes que ya tienen placas solares?",
    a: "Porque ya confían en tu empresa, conocen tu servicio y tienes sus datos de consumo. Una venta a un cliente satisfecho suele ser más sencilla que captar uno nuevo.",
  },
  {
    q: "¿Qué productos encajan mejor con el autoconsumo?",
    a: "Baterías para aprovechar los excedentes, aerotermia para climatización y agua caliente con electricidad, y cargadores de coche eléctrico para cargar con energía solar cuando hay producción.",
  },
  {
    q: "¿Cuándo es mejor ofrecerlo?",
    a: "En la visita técnica, si el cliente lo menciona; al revisar la primera factura con ahorro; o cuando cambia su situación, como al comprar un coche eléctrico o renovar la caldera.",
  },
  {
    q: "¿Y si quiero captar clientes nuevos de aerotermia o cargadores?",
    a: "También se puede hacer con campañas específicas para cada servicio. En Monq Media lo trabajamos como complemento a la captación de placas solares.",
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
      crumb="Venta cruzada"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          tus clientes de placas solares son el mejor público para{" "}
          <strong>baterías, aerotermia y cargadores de coche
          eléctrico</strong>: ya confían en ti y tienes sus datos de consumo.
          La clave es ofrecerlo en el momento adecuado, explicar cómo encaja
          con su autoconsumo y tener un proceso para no olvidarse de nadie.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más clientes de energía solar y de sus servicios complementarios?"
    >
      <h2 className={h2}>Qué ofrecer y a quién</h2>
      <Table
        head={["Producto", "Cliente ideal", "Argumento principal"]}
        rows={[
          ["Batería solar", "Vierte muchos excedentes o consume de noche", "Aprovechar más su propia energía"],
          ["Aerotermia", "Caldera antigua o gasto alto en calefacción", "Climatizar con electricidad que puede producir en parte"],
          ["Cargador de coche eléctrico", "Tiene o va a comprar un coche eléctrico", "Cargar en casa aprovechando la producción solar"],
        ]}
      />

      <h2 className={h2}>Cómo hacerlo sin presionar</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Pregunta en la visita técnica:</strong> caldera, coche,
          horarios de consumo. Te dice qué le puede interesar más adelante.
        </li>
        <li className={li}>
          <strong>Anótalo en el CRM:</strong> así puedes volver a hablar en
          el momento adecuado. Ver{" "}
          <Link href="/blog/crm-para-instaladores-de-placas-solares" className={a}>
            CRM para instaladores de placas solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Usa sus datos reales:</strong> producción, excedentes y
          factura, no promesas genéricas.
        </li>
        <li className={li}>
          <strong>Aprovecha los buenos momentos:</strong> tras la
          instalación, con la primera factura o al pedir una reseña. Ver{" "}
          <Link href="/blog/resenas-google-instaladora-placas-solares" className={a}>
            reseñas en Google para instaladoras
          </Link>
          .
        </li>
      </ol>

      <h2 className={h2}>Venta cruzada y captación: las dos patas</h2>
      <p className={p}>
        Vender a la base de clientes es rentable, pero no sustituye a la
        captación: sin instalaciones nuevas de placas solares, la base deja
        de crecer. Lo ideal es combinar ambas y mantener llena la agenda de
        visitas técnicas todo el año. Más en{" "}
        <Link href="/blog/vender-placas-solares-en-invierno" className={a}>
          cómo vender placas solares en invierno
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Nuestra especialidad es la captación de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados de placas solares
        </Link>
        , y también trabajamos campañas de{" "}
        <Link href="/leads-baterias-solares" className={a}>
          baterías solares
        </Link>
        ,{" "}
        <Link href="/leads-aerotermia" className={a}>
          aerotermia
        </Link>{" "}
        y{" "}
        <Link href="/leads-cargadores-coche-electrico" className={a}>
          cargadores de coche eléctrico
        </Link>{" "}
        para empresas de energía renovable de toda España.
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
