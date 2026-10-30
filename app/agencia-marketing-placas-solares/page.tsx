import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
  SITE,
  Table,
  a,
  breadcrumbJsonLd,
  faqJsonLd,
  h2,
  li,
  p,
  type Faq,
} from "@/app/components/ContentPage";
import RelatedPosts from "@/app/blog/RelatedPosts";

const URL = `${SITE}/agencia-marketing-placas-solares`;
const TITLE = "Agencia de marketing para empresas de placas solares";
const DESCRIPTION =
  "Agencia de marketing especializada en instaladores de placas solares y empresas fotovoltaicas de toda España: captación de clientes, publicidad e IA para llenar tu agenda de visitas técnicas, con garantía por contrato.";

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
  },
};

const faqs: Faq[] = [
  {
    q: "¿Qué hace una agencia de marketing para instaladores de placas solares?",
    a: "Consigue clientes para la empresa: diseña y gestiona la publicidad, las páginas y los formularios, filtra a los curiosos y, en nuestro caso, contacta a cada lead al momento con IA para entregar visitas técnicas agendadas. Se mide en instalaciones, no en clics.",
  },
  {
    q: "¿Por qué elegir una agencia especializada en energía solar?",
    a: "Porque conoce cómo decide el cliente de autoconsumo, qué objeciones tiene, qué zonas y mensajes funcionan y cómo coordinar los leads con la agenda de los técnicos. Una agencia generalista suele optimizar contactos; una especializada optimiza instalaciones.",
  },
  {
    q: "¿Trabajáis con empresas fotovoltaicas de toda España?",
    a: "Sí. Tenemos casos de éxito en Cataluña, Comunidad Valenciana, Madrid y Andalucía, y adaptamos cada campaña a las zonas donde trabaja tu equipo.",
  },
  {
    q: "¿Qué resultados puedo esperar?",
    a: "De media, nuestros clientes suman entre 7 y 10 instalaciones extra al mes en los primeros 60 días, y trabajamos con garantía de resultados por contrato.",
  },
  {
    q: "¿Las campañas llevan mi marca?",
    a: "Sí. Cada campaña es personalizada y respeta la marca de tu empresa, con visión a largo plazo para crear un canal de captación propio.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Agencia de marketing para instaladores de placas solares",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Agencia de marketing para placas solares", URL),
];

export default function AgenciaMarketingPlacasSolaresPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Agencia de marketing para placas solares"
      eyebrow="Agencia especializada"
      title={TITLE}
      updated="2026-10-26"
      updatedLabel="26 de octubre de 2026"
      summary={
        <>
          Monq Media es una agencia de marketing especializada en{" "}
          <strong>
            captación de clientes para instaladores de placas solares y
            empresas fotovoltaicas
          </strong>{" "}
          de toda España. No vendemos clics ni contactos sueltos: llenamos la
          agenda de visitas técnicas con leads cualificados y exclusivos, con
          garantía de resultados por contrato.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Buscas una agencia que se mida en instalaciones?"
    >
      <h2 className={h2}>Qué hacemos por tu empresa de energía solar</h2>
      <Table
        head={["Servicio", "Qué consigues"]}
        rows={[
          ["Captación de leads de placas solares", "Clientes potenciales exclusivos y cualificados"],
          ["Publicidad en Google y Meta", "Anuncios con tu marca en tus zonas de trabajo"],
          ["Contacto inmediato con IA", "Ningún lead se enfría, ni de noche ni en fin de semana"],
          ["Agenda de visitas técnicas", "Tus técnicos visitan a clientes que quieren instalar"],
          ["Medición hasta la instalación", "Coste por cliente y retorno de cada campaña"],
        ]}
      />
      <p className={p}>
        Más detalle en{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>
        ,{" "}
        <Link href="/publicidad-placas-solares" className={a}>
          publicidad para placas solares
        </Link>{" "}
        y{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de IA de contacto de leads
        </Link>
        .
      </p>

      <h2 className={h2}>Agencia especializada frente a agencia generalista</h2>
      <Table
        head={["", "Agencia especializada en solar", "Agencia generalista"]}
        rows={[
          ["Objetivo", "Instalaciones y visitas técnicas", "Clics, alcance o contactos"],
          ["Conocimiento del sector", "Autoconsumo, baterías, empresas", "Varios sectores a la vez"],
          ["Qué pasa con el lead", "Contacto inmediato y cualificación", "Se entrega y ahí acaba"],
          ["Cómo se mide", "Coste por instalación y retorno", "Coste por clic o por lead"],
        ]}
      />

      <h2 className={h2}>Cómo trabajamos</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Asesoramiento gratuito:</strong> analizamos tu empresa, tus
          zonas y tu capacidad de instalación.
        </li>
        <li className={li}>
          <strong>Campañas personalizadas</strong> con tu marca y visión a
          largo plazo.
        </li>
        <li className={li}>
          <strong>Filtrado y contacto inmediato</strong> para que solo lleguen
          clientes con intención real.
        </li>
        <li className={li}>
          <strong>Agenda llena</strong> de visitas técnicas y seguimiento de
          cada presupuesto.
        </li>
        <li className={li}>
          <strong>Optimización mensual</strong> con datos de instalaciones
          cerradas.
        </li>
      </ol>

      <h2 className={h2}>Resultados de nuestros clientes</h2>
      <Table
        head={["Empresa", "Resultado"]}
        rows={[
          ["Vira Energy", "x3,2 instalaciones cerradas, +400 leads cualificados al mes, x11 de retorno"],
          ["Eco Max Energía", "+30.000 € de beneficio mensual extra; somos su canal nº1 de ventas"],
          ["Pulso Solar", "+28 % de ventas"],
          ["Efistar", "10-15 estudios extra para empresas al mes en Andalucía"],
          ["Vadesol Energía y Solarclic", "Más instalaciones y un flujo mensual estable"],
        ]}
      />
      <p className={p}>
        En conjunto generamos más de 2.000 clientes potenciales al mes y más
        de 9 M€ de facturación para nuestros clientes, con más de 1 M€
        invertido en publicidad. Lee el{" "}
        <Link href="/casos-de-exito/vira-energy" className={a}>
          caso completo de Vira Energy
        </Link>{" "}
        o todos los{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>

      <h2 className={h2}>También para aerotermia, baterías y cargadores</h2>
      <p className={p}>
        Nuestra especialidad es el autoconsumo solar, residencial y para{" "}
        <Link href="/leads-autoconsumo-empresas" className={a}>
          empresas
        </Link>
        , y también captamos clientes de{" "}
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
        </Link>
        .
      </p>

      <RelatedPosts
        title="Guías para instaladores"
        slugs={[
          "que-pedir-a-una-agencia-de-marketing-para-instaladores-solares",
          "marketing-para-empresas-fotovoltaicas",
          "por-que-fallan-las-campanas-de-una-instaladora-solar",
        ]}
      />
    </ContentPage>
  );
}
