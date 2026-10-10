import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { SITE, breadcrumbJsonLd } from "@/app/components/ContentPage";
import { posts } from "./posts";

const URL = `${SITE}/blog`;
const TITLE = "Blog para instaladores de placas solares";
const DESCRIPTION =
  "Guías prácticas para empresas de placas solares y autoconsumo: captación de clientes, leads cualificados y cómo llenar la agenda de visitas de tus técnicos.";

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
    type: "website",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: TITLE,
    url: URL,
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "Monq Media", url: SITE },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${URL}/${p.slug}`,
      datePublished: p.date,
    })),
  },
  breadcrumbJsonLd("Blog", URL),
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <nav className="text-[13px] text-[#9aa0aa] mb-6" aria-label="Migas de pan">
            <Link href="/" className="hover:text-[#EB0A5C]">
              Inicio
            </Link>{" "}
            / Blog
          </nav>
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">
            Blog
          </p>
          <h1 className="text-[32px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-[#14161b] mb-4">
            {TITLE}
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46] mb-10 pb-8 border-b border-[#f0f0f2]">
            {DESCRIPTION}
          </p>
          <ul className="space-y-8">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <h2 className="text-[22px] sm:text-[26px] font-extrabold tracking-tight text-[#14161b] group-hover:text-[#EB0A5C] transition-colors mb-2">
                    {p.title}
                  </h2>
                  <p className="text-[16px] leading-[1.7] text-[#3a3d46] mb-2">
                    {p.description}
                  </p>
                  <time dateTime={p.date} className="text-[13px] text-[#9aa0aa]">
                    {p.dateLabel}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
