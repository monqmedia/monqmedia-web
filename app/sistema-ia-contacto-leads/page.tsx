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

const URL = `${SITE}/sistema-ia-contacto-leads`;
const TITLE = "IA que contacta tus leads de placas solares al instante";
const DESCRIPTION =
  "Sistema de inteligencia artificial que contacta automáticamente cada lead de placas solares en cuanto entra, también en fin de semana, para que no se enfríe y tu comercial reciba visitas listas para agendar.";

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
    q: "¿Por qué se enfrían los leads de placas solares?",
    a: "Porque pasa demasiado tiempo entre que el cliente pide información y alguien le contacta: el comercial llega tarde, el lead entra en fin de semana o fuera de horario, o se acumulan y el equipo no da abasto. Mientras tanto, el cliente pierde interés o habla con otra instaladora.",
  },
  {
    q: "¿Qué hace el sistema de IA de Monq Media?",
    a: "Contacta automáticamente a cada lead en cuanto entra, a cualquier hora, para que no se enfríe. Así tu comercial recibe el trabajo más fácil: un cliente interesado y una visita técnica lista para agendar.",
  },
  {
    q: "¿Sustituye a mi equipo comercial?",
    a: "No. La IA se encarga del primer contacto inmediato, que es justo donde se pierden más oportunidades. El cierre y la visita técnica siguen siendo de tu equipo, que ahora dedica su tiempo a clientes con intención real.",
  },
  {
    q: "¿Funciona fuera de horario y en fin de semana?",
    a: "Sí. Ese es uno de sus puntos fuertes: un lead que entra un sábado por la noche recibe respuesta al momento, en lugar de esperar al lunes.",
  },
  {
    q: "¿Está incluido en el servicio de captación de leads?",
    a: "Forma parte del sistema que implementamos para nuestros clientes junto con las campañas personalizadas. En el asesoramiento gratuito te explicamos cómo encaja en tu empresa.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: TITLE,
    serviceType: "Contacto automático de leads con inteligencia artificial",
    url: URL,
    provider: { "@type": "Organization", name: "Monq Media", url: SITE },
    areaServed: { "@type": "Country", name: "España" },
    description: DESCRIPTION,
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("IA de contacto de leads", URL),
];

export default function SistemaIaContactoLeadsPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="IA de contacto de leads"
      eyebrow="Inteligencia artificial"
      title={TITLE}
      updated="2026-10-08"
      updatedLabel="8 de octubre de 2026"
      summary={
        <>
          un lead que nadie contacta a tiempo se enfría. Monq Media implementa
          un <strong>sistema de inteligencia artificial que contacta
          automáticamente a cada lead en cuanto entra</strong>, también en fin
          de semana o fuera de horario, para que no se pierda y tu comercial
          reciba una visita lista para agendar.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres que ningún lead se te vuelva a enfriar?"
    >
      <h2 className={h2}>El problema: leads que se pierden antes de llamar</h2>
      <p className={p}>
        Conseguir leads cualificados es solo la mitad del trabajo. La otra mitad
        es contactarlos rápido. En las empresas de placas solares es habitual
        que se pierdan oportunidades por tres motivos:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>El comercial llega tarde:</strong> cuando llama, el cliente ya
          no está tan interesado o ha hablado con otra empresa.
        </li>
        <li className={li}>
          <strong>Fuera de horario:</strong> los leads que entran en fin de
          semana o por la noche esperan horas o días.
        </li>
        <li className={li}>
          <strong>Acumulación:</strong> en semanas con muchos leads, el equipo no
          da abasto y algunos se quedan sin atender.
        </li>
      </ul>

      <h2 className={h2}>La solución: contacto inmediato con IA</h2>
      <p className={p}>
        Nuestro sistema de inteligencia artificial contacta automáticamente a
        cada lead en cuanto deja sus datos. Mantiene vivo el interés del cliente
        y le da a tu comercial el trabajo hecho: en lugar de perseguir
        contactos fríos, recibe clientes interesados y visitas técnicas listas
        para agendar.
      </p>

      <h2 className={h2}>Antes y después</h2>
      <Table
        head={["", "Sin IA", "Con el sistema de Monq Media"]}
        rows={[
          ["Primer contacto", "Cuando el comercial puede", "Al momento"],
          ["Fines de semana", "El lead espera al lunes", "Respuesta inmediata"],
          ["Picos de leads", "Algunos se quedan sin atender", "Todos reciben contacto"],
          ["Trabajo del comercial", "Perseguir contactos fríos", "Atender visitas listas"],
        ]}
      />

      <h2 className={h2}>Cómo encaja en la captación de clientes</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>Captación:</strong> campañas personalizadas con tu marca
          generan{" "}
          <Link href="/leads-placas-solares" className={a}>
            leads cualificados de placas solares
          </Link>
          .
        </li>
        <li className={li}>
          <strong>Contacto inmediato:</strong> la IA contacta a cada lead al
          instante, a cualquier hora.
        </li>
        <li className={li}>
          <strong>Agenda llena:</strong> tus técnicos reciben visitas con
          clientes que quieren instalar.
        </li>
      </ol>
      <p className={p}>
        El resultado es lo que de verdad importa: más visitas y más
        instalaciones. De media, nuestros clientes añaden entre 7 y 10
        instalaciones extra al mes en los primeros 60 días. Puedes ver ejemplos
        en nuestros{" "}
        <Link href="/casos-de-exito" className={a}>
          casos de éxito
        </Link>
        .
      </p>
    </ContentPage>
  );
}
