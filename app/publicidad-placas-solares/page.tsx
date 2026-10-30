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

const URL = `${SITE}/publicidad-placas-solares`;
const TITLE = "Publicidad para empresas de placas solares";
const DESCRIPTION =
  "Publicidad en Google y Facebook/Instagram para empresas de placas solares y paneles solares: anuncios con tu marca que traen leads cualificados y visitas técnicas, con garantía de resultados.";

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
    q: "¿Dónde conviene anunciar una empresa de placas solares?",
    a: "Normalmente en Google, para captar a quien ya busca placas solares en su zona, y en Facebook e Instagram, para generar más volumen de solicitudes de presupuesto. La combinación depende de tu zona, tu capacidad de instalación y tus objetivos.",
  },
  {
    q: "¿Cuánto hay que invertir en publicidad de paneles solares?",
    a: "Depende de la zona, la competencia y cuántas instalaciones puede asumir tu equipo. Lo importante es medir el coste por instalación, no solo el coste por clic o por lead. En el asesoramiento gratuito te damos una estimación para tu caso.",
  },
  {
    q: "¿Los anuncios llevan la marca de mi empresa?",
    a: "Sí. Las campañas se hacen con tu marca, tus instalaciones y tu equipo. Así el cliente te conoce desde el primer anuncio y llega con más confianza a la visita.",
  },
  {
    q: "¿Qué pasa con los leads que llegan de los anuncios?",
    a: "Un sistema de inteligencia artificial los contacta al momento por llamada y WhatsApp, los cualifica y agenda la visita técnica. Así no se enfrían, ni siquiera de noche o en fin de semana.",
  },
  {
    q: "¿Ofrecéis garantía?",
    a: "Sí, trabajamos con garantía de resultados por contrato. De media, nuestros clientes suman entre 7 y 10 instalaciones extra al mes en los primeros 60 días.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Publicidad online para empresas de placas solares",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Publicidad para placas solares", URL),
];

export default function PublicidadPlacasSolaresPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Publicidad para placas solares"
      eyebrow="Publicidad y anuncios"
      title={TITLE}
      updated="2026-10-23"
      updatedLabel="23 de octubre de 2026"
      summary={
        <>
          la publicidad para empresas de placas solares funciona cuando{" "}
          <strong>se mide en instalaciones, no en clics</strong>: anuncios en
          Google y en Facebook e Instagram con tu marca, segmentados por tu
          zona, con filtro para los curiosos y contacto inmediato a cada lead.
          En Monq Media lo hacemos con garantía de resultados por contrato.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres anuncios que se conviertan en visitas técnicas?"
    >
      <h2 className={h2}>Google Ads o Facebook e Instagram: qué aporta cada uno</h2>
      <Table
        head={["Canal", "Qué aporta", "A qué prestar atención"]}
        rows={[
          ["Google Ads", "Clientes que ya buscan placas solares o paneles solares en su zona", "Elegir bien las búsquedas y excluir las que no venden"],
          ["Facebook e Instagram (Meta Ads)", "Volumen de solicitudes de presupuesto y notoriedad de marca", "Filtrar curiosos con preguntas en el formulario"],
          ["Ambos combinados", "Flujo estable de clientes potenciales todo el año", "Medir qué canal trae instalaciones, no solo contactos"],
        ]}
      />

      <h2 className={h2}>Qué incluye nuestra publicidad para empresas fotovoltaicas</h2>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Estrategia por zona:</strong> anuncios solo donde tu equipo
          puede instalar.
        </li>
        <li className={li}>
          <strong>Anuncios con tu marca:</strong> textos, imágenes y vídeos
          con tus instalaciones y tu equipo.
        </li>
        <li className={li}>
          <strong>Páginas y formularios que cualifican:</strong> tipo de
          vivienda o negocio, tejado y factura.
        </li>
        <li className={li}>
          <strong>Contacto inmediato con IA:</strong> cada solicitud se
          atiende al momento. Ver el{" "}
          <Link href="/sistema-ia-contacto-leads" className={a}>
            sistema de IA de contacto de leads
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Medición hasta la instalación:</strong> coste por visita y
          por cliente, campaña a campaña.
        </li>
      </ul>

      <h2 className={h2}>Errores habituales en la publicidad de paneles solares</h2>
      <p className={p}>
        Mensajes de «placas gratis», formularios sin filtro, zonas demasiado
        amplias o leads que se llaman al día siguiente. Son los motivos más
        comunes por los que una campaña trae contactos pero no instalaciones.
        Lo explicamos en detalle en{" "}
        <Link href="/blog/por-que-fallan-las-campanas-de-una-instaladora-solar" className={a}>
          por qué fallan las campañas de Facebook y Google de una instaladora
          solar
        </Link>
        .
      </p>

      <h2 className={h2}>Resultados de nuestros clientes</h2>
      <Table
        head={["Empresa", "Resultado"]}
        rows={[
          ["Vira Energy", "x3,2 instalaciones cerradas, +400 leads cualificados al mes, -41 % coste por cliente"],
          ["Eco Max Energía", "+30.000 € de beneficio mensual extra"],
          ["Pulso Solar", "+28 % de ventas"],
          ["Efistar", "10-15 estudios extra para empresas al mes en Andalucía"],
        ]}
      />
      <p className={p}>
        Más detalles en{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>{" "}
        y en nuestro servicio de{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads de placas solares
        </Link>
        .
      </p>

      <RelatedPosts
        title="Guías para instaladores"
        slugs={[
          "por-que-fallan-las-campanas-de-una-instaladora-solar",
          "coste-de-captar-un-cliente-de-autoconsumo",
          "marketing-para-empresas-fotovoltaicas",
        ]}
      />
    </ContentPage>
  );
}
