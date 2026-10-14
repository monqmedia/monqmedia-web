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

const post = getPost("leads-exclusivos-o-compartidos-placas-solares");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Un lead compartido sale más barato?",
    a: "Por unidad, suele parecerlo. Pero si el mismo cliente lo reciben varias instaladoras, cierras menos y con menos margen, así que el coste por instalación real puede ser mayor.",
  },
  {
    q: "¿Qué métrica debo comparar?",
    a: "El coste por instalación cerrada (o por cliente captado), no el precio por lead. Es la única cifra que te dice qué canal es rentable.",
  },
  {
    q: "¿Los leads exclusivos siempre son mejores?",
    a: "Son mejores si además están cualificados y se contactan rápido. Un lead exclusivo que nadie llama a tiempo también se pierde.",
  },
  {
    q: "¿Cómo lo resuelve Monq Media?",
    a: "Con campañas propias para cada instaladora, con su marca, leads exclusivos y cualificados, y un sistema de IA que contacta a cada lead al momento. De media, nuestros clientes añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días.",
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
      crumb="Exclusivos o compartidos"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Rentabilidad"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          el precio por lead engaña. Lo que importa es{" "}
          <strong>cuánto te cuesta cada instalación cerrada</strong>. Un lead
          compartido parece barato, pero compites con otras instaladoras por el
          mismo cliente, cierras menos y con menos margen. Un lead exclusivo y
          cualificado, contactado al momento, suele salir más rentable.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres leads que solo trabaja tu empresa?"
    >
      <h2 className={h2}>La trampa del precio por lead</h2>
      <p className={p}>
        Muchas instaladoras comparan proveedores por el precio de cada lead.
        Es la cifra más visible, pero no la que decide si ganas dinero. Entre el
        lead y la instalación hay varias etapas, y en cada una el lead compartido
        pierde terreno frente al exclusivo.
      </p>

      <h2 className={h2}>La fórmula que de verdad importa</h2>
      <div className="rounded-2xl border border-[#ececf0] bg-[#fafafb] px-6 py-5 mb-4">
        <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#14161b] font-semibold">
          Coste por instalación = inversión total en leads ÷ instalaciones
          cerradas
        </p>
      </div>
      <p className={p}>
        Si un tipo de lead cuesta la mitad pero cierras muchas menos
        instalaciones con él, el coste por instalación puede acabar siendo
        mayor. Haz este cálculo con tus propios datos de cada canal: es la
        comparación justa.
      </p>

      <h2 className={h2}>Dónde pierde valor un lead compartido</h2>
      <Table
        head={["Etapa", "Lead compartido", "Lead exclusivo"]}
        rows={[
          ["Primer contacto", "Gana quien llama primero", "Solo llamas tú"],
          ["Experiencia del cliente", "Recibe varias llamadas y se satura", "Habla con una sola empresa"],
          ["Negociación", "Compara precios entre instaladoras", "Valora tu propuesta"],
          ["Margen", "Presión para bajar precio", "Más margen para vender valor"],
          ["Marca", "Llega por una plataforma", "Llega por tu marca"],
        ]}
      />

      <h2 className={h2}>Qué hacer si hoy compras leads compartidos</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Mide el coste por instalación</strong> de cada canal durante
          unos meses.
        </li>
        <li className={li}>
          <strong>Mide la velocidad de contacto:</strong> en leads compartidos,
          llegar tarde equivale a perderlo.
        </li>
        <li className={li}>
          <strong>Prueba un canal propio</strong> con tu marca y compara el
          coste por instalación con los mismos criterios.
        </li>
      </ol>

      <h2 className={h2}>Cómo trabajamos en Monq Media</h2>
      <p className={p}>
        Creamos para cada instaladora un canal propio con{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads exclusivos y cualificados
        </Link>
        , campañas con su marca y un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA que contacta al momento
        </Link>
        , con garantía de resultados por contrato. Puedes ver los resultados en
        nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        o leer{" "}
        <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
          cómo cualificar un lead de placas solares
        </Link>
        .
      </p>
    </ContentPage>
  );
}
