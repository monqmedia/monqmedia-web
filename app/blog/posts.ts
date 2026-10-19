import type { Metadata } from "next";
import { SITE } from "@/app/components/ContentPage";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
};

// Más recientes primero.
export const posts: Post[] = [
  {
    slug: "objeciones-cliente-placas-solares",
    title: "Objeciones del cliente de placas solares y cómo responderlas",
    description:
      "Las dudas más habituales de un cliente antes de instalar paneles solares (precio, plazos, tejado, confianza) y cómo responderlas para pasar del presupuesto a la instalación.",
    date: "2026-10-19",
    dateLabel: "19 de octubre de 2026",
  },
  {
    slug: "como-vender-autoconsumo-a-empresas",
    title: "Cómo vender autoconsumo fotovoltaico a empresas",
    description:
      "Qué cambia al vender placas solares a empresas, naves e industrias: quién decide, qué argumentos funcionan y cómo llenar la agenda de estudios energéticos.",
    date: "2026-10-19",
    dateLabel: "19 de octubre de 2026",
  },
  {
    slug: "marketing-para-empresas-fotovoltaicas",
    title: "Marketing para empresas fotovoltaicas: qué funciona para conseguir instalaciones",
    description:
      "Guía de marketing para empresas fotovoltaicas e instaladores de paneles solares: qué canales funcionan, qué medir y cómo convertir clientes potenciales en visitas e instalaciones.",
    date: "2026-10-17",
    dateLabel: "17 de octubre de 2026",
  },
  {
    slug: "coste-de-captar-un-cliente-de-autoconsumo",
    title: "Cuánto cuesta captar un cliente de autoconsumo y cómo calcularlo",
    description:
      "Cómo calcular el coste real de captar un cliente de placas solares, qué gastos incluir y qué palancas lo bajan sin reducir la calidad de los leads.",
    date: "2026-10-16",
    dateLabel: "16 de octubre de 2026",
  },
  {
    slug: "seguimiento-de-presupuestos-de-placas-solares",
    title: "Seguimiento de presupuestos de placas solares: cómo cerrar más instalaciones",
    description:
      "Qué hacer después de entregar un presupuesto de placas solares para que no se quede en un cajón: cuándo llamar, qué decir y cómo automatizar el seguimiento.",
    date: "2026-10-15",
    dateLabel: "15 de octubre de 2026",
  },
  {
    slug: "marketing-local-para-instaladoras-solares",
    title: "Marketing local para instaladoras solares: captar clientes en tu zona",
    description:
      "Cómo una instaladora de placas solares puede captar clientes en su provincia o región sin desperdiciar visitas fuera de su radio de trabajo.",
    date: "2026-10-15",
    dateLabel: "15 de octubre de 2026",
  },
  {
    slug: "como-cualificar-un-lead-de-placas-solares",
    title: "Cómo cualificar un lead de placas solares antes de enviar al técnico",
    description:
      "Las preguntas y señales que separan a un curioso de un cliente que quiere instalar placas solares, para que tus técnicos solo hagan visitas que pueden cerrarse.",
    date: "2026-10-14",
    dateLabel: "14 de octubre de 2026",
  },
  {
    slug: "leads-exclusivos-o-compartidos-placas-solares",
    title: "Leads exclusivos o compartidos: qué le sale más rentable a una instaladora",
    description:
      "Por qué el precio por lead engaña y cómo calcular lo que de verdad cuesta cada instalación cuando compras leads compartidos frente a leads exclusivos.",
    date: "2026-10-14",
    dateLabel: "14 de octubre de 2026",
  },
  {
    slug: "como-llenar-la-agenda-de-visitas-de-tus-tecnicos",
    title: "Cómo llenar la agenda de visitas de tus técnicos de placas solares",
    description:
      "Guía para instaladoras solares: cómo pasar de leads sueltos a una agenda de visitas técnicas llena y predecible, sin saturar al equipo ni perder clientes.",
    date: "2026-10-13",
    dateLabel: "13 de octubre de 2026",
  },
  {
    slug: "que-pedir-a-una-agencia-de-marketing-para-instaladores-solares",
    title: "Qué pedir a una agencia de marketing para instaladores solares",
    description:
      "Las preguntas que debes hacer antes de contratar una agencia de marketing para tu empresa de placas solares, para no pagar por leads que no acaban en instalación.",
    date: "2026-10-13",
    dateLabel: "13 de octubre de 2026",
  },
  {
    slug: "por-que-se-enfrian-los-leads-de-placas-solares",
    title: "Por qué se enfrían los leads de placas solares (y cómo evitarlo)",
    description:
      "Las causas por las que una instaladora de placas solares o fotovoltaica pierde clientes potenciales antes de la visita técnica, y cómo evitarlo con contacto inmediato y un buen filtro.",
    date: "2026-10-10",
    dateLabel: "10 de octubre de 2026",
  },
  {
    slug: "conseguir-clientes-placas-solares-sin-puerta-fria",
    title: "Cómo conseguir clientes de placas solares sin puerta fría",
    description:
      "Alternativas a la puerta fría, el boca a boca y los leads compartidos para que una instaladora de placas solares o empresa fotovoltaica tenga la agenda de visitas llena de forma predecible.",
    date: "2026-10-10",
    dateLabel: "10 de octubre de 2026",
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post no encontrado: ${slug}`);
  return post;
}

export function postUrl(post: Post): string {
  return `${SITE}/blog/${post.slug}`;
}

export function postMetadata(post: Post): Metadata {
  const url = postUrl(post);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Monq Media`,
      description: post.description,
      url,
      siteName: "Monq Media",
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
    },
  };
}
