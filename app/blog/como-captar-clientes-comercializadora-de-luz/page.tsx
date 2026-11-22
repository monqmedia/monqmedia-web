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

const post = getPost("como-captar-clientes-comercializadora-de-luz");
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Cuál es la mejor forma de captar clientes para una comercializadora de luz?",
    a: "Combinar campañas online segmentadas (hogares o empresas, según tu oferta) con formularios que pidan la factura o el gasto mensual y un contacto inmediato. Así llegan menos curiosos y tu asesor habla con quien de verdad quiere cambiar.",
  },
  {
    q: "¿Por qué pedir la factura en el formulario?",
    a: "Porque filtra la intención: quien comparte su factura quiere una comparativa real. Además permite preparar la propuesta antes de la llamada y hablar de ahorro con datos, no con promesas.",
  },
  {
    q: "¿Particulares o empresas?",
    a: "Depende de tu oferta. Los hogares dan volumen y ciclos de decisión cortos; las empresas tienen facturas más altas, deciden más despacio y suelen necesitar asesoría sobre potencia y tarifa.",
  },
  {
    q: "¿Cómo se mide si la captación funciona?",
    a: "Por coste por contrato firmado, no por coste por lead. Mide leads recibidos, contactados, facturas recibidas, propuestas enviadas y contratos firmados por cada canal.",
  },
  {
    q: "¿Se puede vender autoconsumo a los clientes de tarifa?",
    a: "Sí. Quien optimiza su tarifa suele interesarse después por placas solares, baterías o aerotermia. El estudio de la factura es una buena puerta de entrada a esas ventas.",
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
      crumb="Captar clientes de luz"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ahorro energético"
      title={post.title}
      updated={post.updated ?? post.date}
      updatedLabel={post.updatedLabel ?? post.dateLabel}
      summary={
        <>
          para captar clientes para una comercializadora de luz o una asesoría
          energética hay que{" "}
          <strong>
            atraer a quien quiere pagar menos, filtrar pidiendo la factura y
            contactar al momento
          </strong>
          , cuando el cliente aún la tiene delante. El volumen de contactos
          importa menos que cuántos acaban firmando.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres más clientes que quieren bajar su factura de luz?"
    >
      <h2 className={h2}>Por qué cuesta captar clientes de luz</h2>
      <p className={p}>
        Casi todo el mundo quiere pagar menos luz, pero pocos cambian de
        tarifa. Desconfían de las llamadas comerciales, no entienden su factura
        y temen la letra pequeña. Por eso los formularios genéricos traen
        muchos contactos y pocos contratos: falta filtro y falta confianza.
      </p>

      <h2 className={h2}>Canales para conseguir clientes</h2>
      <Table
        head={["Canal", "Qué aporta", "A qué prestar atención"]}
        rows={[
          ["Google", "Personas que ya buscan mejorar su tarifa", "Excluir búsquedas de atención al cliente o de otras marcas"],
          ["Facebook e Instagram", "Volumen de hogares y pequeños negocios", "Filtrar con preguntas y pedir la factura"],
          ["Base de datos propia", "Clientes antiguos y contactos sin cerrar", "Reactivar con un mensaje de ahorro concreto"],
          ["Venta cruzada", "Clientes de placas solares o aerotermia", "Ofrecer revisión de tarifa tras la instalación"],
        ]}
      />

      <h2 className={h2}>El formulario que filtra</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Vivienda o empresa:</strong> para asignar la oferta y el
          asesor adecuados.
        </li>
        <li className={li}>
          <strong>Factura o gasto mensual:</strong> la señal de intención más
          clara y la base de la comparativa.
        </li>
        <li className={li}>
          <strong>Comercializadora y potencia actuales:</strong> para preparar
          la propuesta antes de llamar.
        </li>
        <li className={li}>
          <strong>Interés en placas solares:</strong> abre una segunda venta.
          Ver{" "}
          <Link href="/blog/como-cualificar-un-lead-de-placas-solares" className={a}>
            cómo cualificar un lead
          </Link>
          .
        </li>
      </ul>

      <h2 className={h2}>Contacto inmediato: el factor que más pesa</h2>
      <p className={p}>
        Un lead de ahorro energético se enfría en horas: compara con otras
        ofertas o simplemente lo olvida. Llamar o escribir por WhatsApp en
        minutos, pedir la factura si no la envió y agendar la llamada con el
        asesor multiplica los contratos. Un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>{" "}
        lo hace también por la noche y en fin de semana. Más en{" "}
        <Link href="/blog/por-que-se-enfrian-los-leads-de-placas-solares" className={a}>
          por qué se enfrían los leads
        </Link>
        .
      </p>

      <h2 className={h2}>Cómo medir: del lead al contrato</h2>
      <Table
        head={["Métrica", "Qué te dice"]}
        rows={[
          ["Leads recibidos por canal", "Dónde está el volumen"],
          ["Tiempo hasta el primer contacto", "Si se pierden leads por lentitud"],
          ["Facturas recibidas", "Cuántos leads tienen intención real"],
          ["Propuestas enviadas", "Si el equipo da abasto"],
          ["Contratos firmados y coste por contrato", "Qué canal es rentable de verdad"],
        ]}
      />

      <h2 className={h2}>Cómo ayudamos en Monq Media</h2>
      <p className={p}>
        Captamos{" "}
        <Link href="/leads-ahorro-factura-luz" className={a}>
          leads de ahorro en factura de luz
        </Link>{" "}
        para comercializadoras, comparadores y asesorías energéticas: con tu
        marca, cualificados con su factura y contactados al momento. Si además
        instalas, mira nuestros servicios de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>{" "}
        y{" "}
        <Link href="/leads-aerotermia" className={a}>
          aerotermia
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
