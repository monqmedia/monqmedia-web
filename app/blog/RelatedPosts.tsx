import Link from "next/link";
import { h2 } from "@/app/components/ContentPage";
import { posts } from "./posts";

// Tres artículos relacionados: los siguientes en la lista (circular), para
// repartir el enlazado interno entre todos los posts. Las páginas de servicio
// pasan `slugs` para enlazar a guías concretas.
export default function RelatedPosts({
  slug,
  slugs,
  title = "Sigue leyendo",
}: {
  slug?: string;
  slugs?: string[];
  title?: string;
}) {
  const i = posts.findIndex((p) => p.slug === slug);
  const related = slugs
    ? posts.filter((p) => slugs.includes(p.slug))
    : [1, 2, 3]
        .map((n) => posts[(i + n) % posts.length])
        .filter((p) => p.slug !== slug);

  return (
    <section aria-label="Artículos relacionados">
      <h2 className={h2}>{title}</h2>
      <ul className="space-y-4 mb-4">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="text-[17px] font-bold text-[#14161b] hover:text-[#EB0A5C] transition-colors"
            >
              {p.title}
            </Link>
            <p className="text-[15px] leading-[1.6] text-[#5b5f6b] mt-1">
              {p.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
