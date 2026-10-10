import type { Metadata } from "next";
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
import { getPost } from "../posts";

const post = getPost("por-que-se-enfrian-los-leads-de-placas-solares");
const URL = `${SITE}/blog/${post.slug}`;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: URL },
  openGraph: {
    title: `${post.title} | Monq Media`,
    description: post.description,
    url: URL,
    siteName: "Monq Media",
    locale: "es_ES",
    type: "article",
    publishedTime: post.date,
  },
};

const faqs: Faq[] = [
  {
    q: "¿Qué significa que un lead se enfríe?",
    a: "Que el cliente pierde interés o atención entre el momento en que pide información y el momento en que alguien le contacta. Cuanto más tarda la respuesta, más difícil es convertir ese lead en una visita técnica.",
  },
  {
    q: "¿Cuál es la causa más habitual?",
    a: "El tiempo de respuesta: el comercial llega tarde, el lead entra en fin de semana o fuera de horario, o hay tantos leads acumulados que el equipo no da abasto.",
  },
  {
    q: "¿Cómo se evita?",
    a: "Contactando a cada lead al momento, a cualquier hora, y filtrando antes para que el equipo comercial solo dedique tiempo a clientes con intención real. Monq Media lo hace con un sistema de inteligencia artificial que contacta automáticamente a cada lead.",
  },
  {
    q: "¿Los leads compartidos se enfrían más?",
    a: "Sí, en la práctica pierden valor más rápido: si el mismo lead se reparte entre varias instaladoras, la primera que llama tiene ventaja y el resto compite por un cliente que ya ha recibido varias llamadas.",
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
      crumb="Leads que se enfrían"
      parent={{ name: "Blog", href: "/blog" }}
      eyebrow="Blog · Ventas"
      title={post.title}
      updated={post.date}
      updatedLabel={post.dateLabel}
      summary={
        <>
          un lead de placas solares se enfría cuando pasa demasiado tiempo sin
          respuesta. Las causas más habituales son{" "}
          <strong>llegar tarde, los leads de fin de semana y la acumulación</strong>
          . La solución es contactar a cada lead al momento y filtrar antes,
          para que tus técnicos solo hagan visitas con clientes que quieren
          instalar.
        </>
      }
      faqs={faqs}
      ctaTitle="¿Quieres que ningún lead se te vuelva a enfriar?"
    >
      <h2 className={h2}>Qué es un lead frío y por qué cuesta dinero</h2>
      <p className={p}>
        Cuando alguien pide información sobre placas solares, su interés está
        en el punto más alto. A partir de ahí, cada hora sin respuesta juega en
        contra: se distrae, compara con otras opciones o simplemente deja de
        contestar. Para una instaladora, cada lead que se enfría es inversión en
        publicidad que no se convierte en visita ni en instalación.
      </p>

      <h2 className={h2}>Las 5 causas más habituales</h2>
      <ol className="list-decimal pl-6 space-y-3 mb-4">
        <li className={li}>
          <strong>El comercial llega tarde.</strong> Está en otra visita, en
          carretera o con otro cliente, y la llamada se retrasa horas.
        </li>
        <li className={li}>
          <strong>Leads de fin de semana y fuera de horario.</strong> Muchos
          particulares buscan información por la tarde o el fin de semana, justo
          cuando nadie puede atenderles.
        </li>
        <li className={li}>
          <strong>Acumulación.</strong> En semanas de muchos leads, el equipo no
          da abasto y algunos se quedan sin llamar.
        </li>
        <li className={li}>
          <strong>Leads compartidos.</strong> Si el mismo contacto lo reciben
          varias instaladoras, el cliente se satura de llamadas y deja de
          responder.
        </li>
        <li className={li}>
          <strong>Falta de filtro.</strong> Si el equipo pierde tiempo con
          curiosos, los clientes con intención real esperan más.
        </li>
      </ol>

      <h2 className={h2}>Cómo evitarlo</h2>
      <Table
        head={["Causa", "Solución"]}
        rows={[
          ["El comercial llega tarde", "Primer contacto automático e inmediato"],
          ["Fin de semana y fuera de horario", "Contacto a cualquier hora, sin esperar al lunes"],
          ["Acumulación de leads", "Todos los leads reciben respuesta, aunque haya picos"],
          ["Leads compartidos", "Leads exclusivos para tu empresa"],
          ["Falta de filtro", "Filtrar antes para que solo pasen clientes con intención real"],
        ]}
      />
      <p className={p}>
        La idea de fondo es sencilla: separar el primer contacto (que tiene que
        ser inmediato) del trabajo comercial (que tiene que ser de calidad). Así
        tus comerciales y técnicos dedican su tiempo a visitas con clientes que
        quieren instalar.
      </p>

      <h2 className={h2}>Cómo lo resolvemos en Monq Media</h2>
      <p className={p}>
        Implementamos un{" "}
        <Link href="/sistema-ia-contacto-leads" className={a}>
          sistema de inteligencia artificial que contacta a cada lead al
          instante
        </Link>
        , también en fin de semana o fuera de horario, para que no se enfríe.
        Lo combinamos con campañas personalizadas que generan{" "}
        <Link href="/leads-placas-solares" className={a}>
          leads cualificados y exclusivos
        </Link>{" "}
        para tu empresa. El resultado es la agenda de tus técnicos llena de
        visitas: de media, nuestros clientes añaden entre 7 y 10 instalaciones
        extra al mes en los primeros 60 días.
      </p>
    </ContentPage>
  );
}
