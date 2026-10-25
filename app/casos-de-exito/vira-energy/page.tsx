import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentPage, {
  SITE,
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
import RelatedPosts from "@/app/blog/RelatedPosts";

const URL = `${SITE}/casos-de-exito/vira-energy`;
const TITLE = "Caso Vira Energy: x3,2 instalaciones de placas solares";
const DESCRIPTION =
  "Cómo Vira Energy, empresa de autoconsumo solar en Cataluña, Comunidad Valenciana y Madrid, multiplicó por 3,2 sus instalaciones con más de 400 leads cualificados al mes y un 41 % menos de coste por cliente.";
const PUBLISHED = "2026-10-25";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Monq Media`,
    description: DESCRIPTION,
    url: URL,
    siteName: "Monq Media",
    locale: "es_ES",
    type: "article",
    images: [{ url: `${SITE}/vira-desktop.png`, alt: "Web de Vira Energy" }],
  },
};

const faqs: Faq[] = [
  {
    q: "¿Qué resultados consiguió Vira Energy con Monq Media?",
    a: "x3,2 instalaciones cerradas, más de 400 leads cualificados al mes, un 41 % menos de coste por cliente captado y un retorno de x11 por cada euro invertido.",
  },
  {
    q: "¿En qué zonas trabaja Vira Energy?",
    a: "Es una empresa de autoconsumo solar y eficiencia energética para viviendas y empresas, con sedes en Cataluña, Comunidad Valenciana y Madrid.",
  },
  {
    q: "¿Qué papel tuvo la inteligencia artificial?",
    a: "El sistema de IA de MONQ &IA contacta al momento a cada lead que pide un estudio, lo cualifica, lo categoriza en el CRM para que el comercial lo priorice y envía recordatorios de las visitas técnicas. Con él, Vira Energy pasó de responder en torno a un día a menos de 10 segundos y aumentó un 40 % las visitas técnicas agendadas.",
  },
  {
    q: "¿Se puede replicar en otra instaladora?",
    a: "El sistema es el mismo, pero cada campaña se personaliza para la marca, la zona y la capacidad de cada empresa. De media, nuestros clientes suman entre 7 y 10 instalaciones extra al mes en los primeros 60 días.",
  },
];

const jsonLd = [
  articleJsonLd({
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    published: PUBLISHED,
  }),
  faqJsonLd(faqs),
  breadcrumbJsonLd("Vira Energy", URL, {
    name: "Casos de éxito",
    href: "/casos-de-exito",
  }),
];

export default function ViraEnergyPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Vira Energy"
      parent={{ name: "Casos de éxito", href: "/casos-de-exito" }}
      eyebrow="Caso de éxito · Autoconsumo solar"
      title={TITLE}
      updated={PUBLISHED}
      updatedLabel="25 de octubre de 2026"
      summary={
        <>
          Vira Energy, empresa de autoconsumo solar con sedes en Cataluña,
          Comunidad Valenciana y Madrid, consiguió con Monq Media{" "}
          <strong>
            x3,2 instalaciones cerradas, más de 400 leads cualificados al mes,
            un 41&nbsp;% menos de coste por cliente y un retorno de x11
          </strong>
          , con un canal de captación propio y sin depender de plataformas de
          leads compartidos.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres resultados como los de Vira Energy?"
    >
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#ececf0] mb-8">
        <Image
          src="/vira-desktop.png"
          alt="Web de Vira Energy, empresa de autoconsumo solar"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 760px) 100vw, 760px"
        />
      </div>

      <h2 className={h2}>Resultados</h2>
      <Table
        head={["Métrica", "Resultado"]}
        rows={[
          ["Instalaciones cerradas", "x3,2"],
          ["Leads cualificados al mes", "Más de 400"],
          ["Coste por cliente captado", "-41 %"],
          ["Retorno por cada euro invertido", "x11"],
          ["Visitas técnicas agendadas (sistema de IA)", "+40 %"],
          ["Tiempo de primera respuesta", "De ~1 día a menos de 10 segundos"],
        ]}
      />

      <h2 className={h2}>La empresa</h2>
      <p className={p}>
        Vira Energy es una empresa de autoconsumo solar y eficiencia
        energética para viviendas y empresas, con sedes en Cataluña,
        Comunidad Valenciana y Madrid.
      </p>

      <h2 className={h2}>El reto</h2>
      <p className={p}>
        Querían llenar la agenda de su equipo con solicitudes de estudio
        energético gratuito, sin depender de plataformas de leads compartidos
        ni de la captación a puerta fría. Necesitaban un canal propio,
        predecible y rentable, y que su equipo dejara de perder tiempo en
        llamadas que no llevaban a ningún sitio.
      </p>

      <h2 className={h2}>Qué hicimos</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Campañas con su marca</strong> para captar solicitudes de
          estudio de autoconsumo en sus zonas de trabajo.
        </li>
        <li className={li}>
          <strong>Filtrado de curiosos:</strong> solo pasan las solicitudes con
          intención real de agendar una visita técnica e instalar placas
          solares.
        </li>
        <li className={li}>
          <strong>Contacto instantáneo con IA</strong> a cada lead que entra
          desde los anuncios, con cualificación y categorización en el CRM
          para que el comercial priorice.
        </li>
        <li className={li}>
          <strong>Recordatorios y seguimientos:</strong> recordatorios de las
          visitas técnicas para reducir ausencias y seguimiento a quien no
          contesta o ya tiene presupuesto.
        </li>
      </ol>

      <h2 className={h2}>Por qué funcionó</h2>
      <p className={p}>
        Porque se midió en instalaciones, no en contactos: leads exclusivos
        con su marca, respuesta en segundos y una agenda de visitas técnicas
        con clientes que quieren instalar. Es el mismo sistema que aplicamos
        en nuestro servicio de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>{" "}
        y en el{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>
        . Mira el resto de{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        o calcula tus números con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads
        </Link>
        .
      </p>

      <RelatedPosts
        title="Guías para instaladores"
        slugs={[
          "leads-exclusivos-o-compartidos-placas-solares",
          "por-que-se-enfrian-los-leads-de-placas-solares",
          "coste-de-captar-un-cliente-de-autoconsumo",
        ]}
      />
    </ContentPage>
  );
}
