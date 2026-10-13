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
    slug: "por-que-se-enfrian-los-leads-de-placas-solares",
    title: "Por qué se enfrían los leads de placas solares (y cómo evitarlo)",
    description:
      "Las causas por las que una instaladora pierde leads de placas solares antes de llegar a la visita técnica y cómo evitarlo con contacto inmediato y un buen filtro.",
    date: "2026-10-10",
    dateLabel: "10 de octubre de 2026",
  },
  {
    slug: "conseguir-clientes-placas-solares-sin-puerta-fria",
    title: "Cómo conseguir clientes de placas solares sin puerta fría",
    description:
      "Alternativas a la puerta fría, el boca a boca y los leads compartidos para que una instaladora solar tenga la agenda de visitas llena de forma predecible.",
    date: "2026-10-10",
    dateLabel: "10 de octubre de 2026",
  },
];

export function getPost(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post no encontrado: ${slug}`);
  return post;
}
