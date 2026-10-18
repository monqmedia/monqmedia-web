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

const post = getPost(
  "que-pedir-a-una-agencia-de-marketing-para-instaladores-solares",
);
const URL = postUrl(post);

export const metadata: Metadata = postMetadata(post);

const faqs: Faq[] = [
  {
    q: "¿Por qué fallan muchas agencias con instaladoras solares?",
    a: "Porque miden el éxito en clics, alcance o número de formularios, no en visitas e instalaciones. Sin conocer el sector, es fácil generar contactos baratos que no tienen intención real de instalar.",
  },
  {
    q: "¿Qué métrica debo exigir?",
    a: "Las que importan a tu negocio: visitas técnicas agendadas, instalaciones cerradas y coste por cliente captado. Los clics y el alcance son medios, no resultados.",
  },
  {
    q: "¿Tiene sentido pedir garantía de resultados?",
    a: "Sí. Una agencia que confía en su sistema puede comprometerse por contrato. Monq Media ofrece garantía de resultados por contrato.",
  },
  {
    q: "¿Las campañas deben ir con mi marca?",
    a: "Sí. Si el cliente conoce tu marca desde el primer anuncio, llega con más confianza a la visita. Y construyes un canal propio a largo plazo en lugar de depender de un intermediario.",
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
      crumb="Qué pedir a una agencia"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Marketing"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          antes de contratar una agencia de marketing para tu empresa de placas
          solares, exige que se comprometa con{" "}
          <strong>visitas e instalaciones, no con clics</strong>: leads
          exclusivos y cualificados, campañas con tu marca, contacto inmediato
          con cada lead, especialización en el sector y garantía por contrato.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres una agencia que se comprometa con resultados?"
    >
      <h2 className={h2}>El problema: agencias que no conocen el sector</h2>
      <p className={p}>
        Muchas instaladoras ya han probado agencias de marketing digital y no
        les ha funcionado, por falta de calidad o de volumen de leads. El motivo
        suele ser el mismo: la agencia mide su trabajo en métricas de marketing
        y no en lo que de verdad necesita una instaladora, que es tener la
        agenda de sus técnicos llena de visitas con clientes que quieren
        instalar.
      </p>

      <h2 className={h2}>7 preguntas que debes hacer antes de contratar</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>¿Los leads son exclusivos para mi empresa?</strong> Si se
          comparten con otras instaladoras, competirás por el mismo cliente.
        </li>
        <li className={li}>
          <strong>¿Cómo filtráis a los curiosos?</strong> Pide que te expliquen
          cómo se asegura que el lead tiene intención real.
        </li>
        <li className={li}>
          <strong>¿Quién contacta al lead y en cuánto tiempo?</strong> Un lead
          que espera horas se enfría.
        </li>
        <li className={li}>
          <strong>¿Las campañas van con mi marca?</strong> Construir tu marca
          es construir un canal propio a largo plazo.
        </li>
        <li className={li}>
          <strong>¿Qué medís?</strong> Exige visitas agendadas, instalaciones y
          coste por cliente, no solo clics.
        </li>
        <li className={li}>
          <strong>¿Tenéis casos en el sector solar?</strong> Pide nombres y
          resultados concretos.
        </li>
        <li className={li}>
          <strong>¿Qué garantía ofrecéis?</strong> Si la agencia confía en su
          sistema, puede comprometerse por contrato.
        </li>
      </ol>

      <h2 className={h2}>Señales de alerta</h2>
      <Table
        head={["Señal", "Por qué es un problema"]}
        rows={[
          ["Te hablan solo de clics y alcance", "No garantiza ni una visita"],
          ["No saben quién llamará al lead", "Los leads se enfrían antes de convertir"],
          ["Leads de plataforma revendidos", "Compites con otras instaladoras por cada cliente"],
          ["Sin casos del sector", "Aprenderán a costa de tu inversión"],
          ["Sin compromiso de resultados", "El riesgo es solo tuyo"],
        ]}
      />

      <h2 className={h2}>Cómo respondemos en Monq Media</h2>
      <p className={p}>
        Somos una agencia especializada en captación de clientes para empresas
        de placas solares. Trabajamos con{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>
        , campañas personalizadas con tu marca, un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA que contacta cada lead al instante
        </Link>{" "}
        y garantía de resultados por contrato. De media, nuestros clientes
        añaden entre 7 y 10 instalaciones extra al mes en los primeros 60 días.
        Puedes comprobarlo en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
      <RelatedPosts slug={post.slug} />
    </ContentPage>
  );
}
