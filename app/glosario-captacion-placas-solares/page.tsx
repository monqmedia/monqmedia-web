import type { Metadata } from "next";
import Link from "next/link";
import ContentPage, {
  SITE,
  a,
  breadcrumbJsonLd,
  faqJsonLd,
  h2,
  p,
  type Faq,
} from "@/app/components/ContentPage";

const URL = `${SITE}/glosario-captacion-placas-solares`;
const TITLE = "Glosario de captación de clientes para placas solares";
const DESCRIPTION =
  "Qué es un lead cualificado, un lead exclusivo, el coste por lead, el coste por instalación, el speed to lead o el no-show: glosario para instaladores de placas solares y empresas fotovoltaicas.";

type Term = { term: string; def: string; href?: string };

const groups: { title: string; terms: Term[] }[] = [
  {
    title: "Leads y clientes potenciales",
    terms: [
      { term: "Lead", def: "Persona o empresa que ha mostrado interés en tu servicio y ha dejado sus datos de contacto, por ejemplo al pedir un presupuesto de placas solares." },
      { term: "Lead cualificado", def: "Lead que, además de interés, cumple los requisitos para comprar: tipo de vivienda o negocio adecuado, tejado viable, consumo suficiente e intención real de instalar a corto plazo.", href: "/blog/como-cualificar-un-lead-de-placas-solares" },
      { term: "Lead exclusivo", def: "Lead que solo recibe una empresa. Suele captarse con la marca del propio instalador y no se revende a otras instaladoras.", href: "/leads-placas-solares" },
      { term: "Lead compartido", def: "Lead que una plataforma vende a varias instaladoras a la vez, que compiten por el mismo cliente.", href: "/blog/leads-exclusivos-o-compartidos-placas-solares" },
      { term: "Solicitud de presupuesto", def: "Petición explícita de un cliente para recibir una propuesta de instalación. Es uno de los tipos de lead con más intención." },
      { term: "Lead frío", def: "Lead que ha perdido interés porque nadie lo contactó a tiempo o porque pasó demasiado tiempo desde su solicitud.", href: "/blog/por-que-se-enfrian-los-leads-de-placas-solares" },
    ],
  },
  {
    title: "Métricas de captación",
    terms: [
      { term: "Coste por lead (CPL)", def: "Inversión en captación dividida entre el número de leads conseguidos en el mismo periodo." },
      { term: "Coste por instalación (coste de captación por cliente)", def: "Inversión total en captación dividida entre las instalaciones cerradas. Es la métrica que indica si la captación es rentable.", href: "/blog/coste-de-captar-un-cliente-de-autoconsumo" },
      { term: "Tasa de conversión lead a visita", def: "Porcentaje de leads que aceptan una visita técnica." },
      { term: "Tasa de cierre", def: "Porcentaje de visitas técnicas o presupuestos que terminan en una instalación firmada." },
      { term: "Retorno de la inversión (ROI)", def: "Beneficio obtenido por cada euro invertido en captación. Por ejemplo, un retorno de x11 significa 11 € por cada euro invertido." },
      { term: "No-show", def: "Cita o visita técnica agendada a la que el cliente no se presenta o que cancela a última hora. Se reduce con recordatorios." },
    ],
  },
  {
    title: "Proceso comercial",
    terms: [
      { term: "Speed to lead", def: "Tiempo que tarda una empresa en contactar a un lead desde que deja sus datos. Cuanto menor, más probabilidad de venta.", href: "/sistema-ia-contacto-leads" },
      { term: "Visita técnica", def: "Visita a la vivienda o negocio del cliente para revisar el tejado, la instalación eléctrica y el consumo antes de presupuestar.", href: "/blog/como-llenar-la-agenda-de-visitas-de-tus-tecnicos" },
      { term: "Seguimiento de presupuestos", def: "Contactos planificados después de entregar un presupuesto para resolver dudas y llevar al cliente a la decisión.", href: "/blog/seguimiento-de-presupuestos-de-placas-solares" },
      { term: "Reactivación de leads", def: "Volver a contactar leads antiguos que no compraron para recuperar a los que siguen interesados." },
      { term: "CRM", def: "Software donde se registran los leads, su estado, las visitas y los seguimientos.", href: "/blog/crm-para-instaladores-de-placas-solares" },
      { term: "Venta cruzada", def: "Ofrecer productos complementarios, como baterías, aerotermia o cargadores, a clientes que ya tienen placas solares.", href: "/blog/vender-aerotermia-y-cargadores-a-clientes-de-placas-solares" },
    ],
  },
  {
    title: "Publicidad",
    terms: [
      { term: "Google Ads", def: "Publicidad en el buscador de Google. Capta a personas que ya buscan placas solares o autoconsumo en su zona.", href: "/publicidad-placas-solares" },
      { term: "Meta Ads", def: "Publicidad en Facebook e Instagram. Genera volumen de solicitudes; necesita filtro para evitar curiosos.", href: "/publicidad-placas-solares" },
      { term: "Landing page", def: "Página creada para una campaña, con un único objetivo: que el visitante pida presupuesto o deje sus datos." },
      { term: "Formulario cualificador", def: "Formulario con preguntas (tipo de vivienda, tejado, factura) que ayuda a separar a los clientes con intención real." },
    ],
  },
  {
    title: "Autoconsumo y energía solar",
    terms: [
      { term: "Autoconsumo fotovoltaico", def: "Producción de electricidad con placas solares para consumirla en la propia vivienda o negocio." },
      { term: "Excedentes", def: "Energía producida por las placas que no se consume en el momento y se vierte a la red o se almacena en una batería." },
      { term: "Batería solar", def: "Equipo que almacena la energía sobrante para usarla cuando las placas no producen, por ejemplo de noche.", href: "/leads-baterias-solares" },
      { term: "Inversor", def: "Equipo que convierte la corriente continua de los módulos solares en corriente alterna utilizable en la vivienda o negocio." },
      { term: "Módulo solar (panel o placa)", def: "Cada uno de los paneles que transforman la luz del sol en electricidad." },
    ],
  },
];

const allTerms = groups.flatMap((g) => g.terms);

const faqs: Faq[] = [
  {
    q: "¿Qué diferencia hay entre un lead y un lead cualificado?",
    a: "Un lead es cualquier persona que deja sus datos; un lead cualificado además cumple los requisitos para comprar y tiene intención real de instalar placas solares.",
  },
  {
    q: "¿Qué métrica es más importante para una instaladora?",
    a: "El coste por instalación: indica cuánto cuesta realmente conseguir cada cliente y si la captación es rentable. Puedes calcularlo con nuestra calculadora de leads.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: TITLE,
    url: URL,
    description: DESCRIPTION,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Monq Media", url: SITE },
    hasDefinedTerm: allTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
    })),
  },
  faqJsonLd(faqs),
  breadcrumbJsonLd("Glosario", URL),
];

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

export default function GlosarioPage() {
  return (
    <ContentPage
      jsonLd={jsonLd}
      crumb="Glosario"
      eyebrow="Glosario"
      title={TITLE}
      updated="2026-10-27"
      updatedLabel="27 de octubre de 2026"
      summary={
        <>
          los términos clave para captar clientes de placas solares son{" "}
          <strong>lead cualificado, lead exclusivo, coste por instalación,
          speed to lead, visita técnica y no-show</strong>. Aquí tienes cada
          uno explicado en una frase, con enlaces a guías para profundizar.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres leads cualificados y la agenda llena?"
    >
      {groups.map((g) => (
        <section key={g.title}>
          <h2 className={h2}>{g.title}</h2>
          <dl className="space-y-5 mb-4">
            {g.terms.map((t) => (
              <div key={t.term}>
                <dt className="text-[17px] font-bold text-[#14161b]">{t.term}</dt>
                <dd className="text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46]">
                  {t.def}
                  {t.href && (
                    <>
                      {" "}
                      <Link href={t.href} className={a}>
                        Saber más
                      </Link>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
      <p className={p}>
        Calcula tus métricas con la{" "}
        <Link href="/calculadora-leads-placas-solares" className={a}>
          calculadora de leads para placas solares
        </Link>{" "}
        o descubre cómo trabajamos como{" "}
        <Link href="/agencia-marketing-placas-solares" className={a}>
          agencia de marketing para empresas de placas solares
        </Link>
        .
      </p>
    </ContentPage>
  );
}
