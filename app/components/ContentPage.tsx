import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const SITE = "https://www.monqmedia.com";

export const h2 =
  "text-[24px] sm:text-[30px] font-extrabold tracking-tight text-[#14161b] mt-12 mb-4";
export const p = "text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46] mb-4";
export const li = "text-[16px] sm:text-[17px] leading-[1.7] text-[#3a3d46]";
export const a = "text-[#EB0A5C] font-semibold hover:underline";

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  };
}

export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-left text-[15px] border-collapse">
        <thead>
          <tr className="border-b border-[#ececf0]">
            {head.map((h, i) => (
              <th key={i} className="py-3 pr-4 font-bold text-[#14161b]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[#3a3d46]">
          {rows.map((r, i) => (
            <tr
              key={i}
              className={i < rows.length - 1 ? "border-b border-[#f0f0f2]" : ""}
            >
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`py-3 pr-4 align-top ${j === 0 ? "font-semibold" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ContentPage({
  jsonLd,
  crumb,
  eyebrow,
  title,
  updated,
  updatedLabel,
  summary,
  faqs,
  ctaTitle,
  children,
}: {
  jsonLd: object[];
  crumb: string;
  eyebrow: string;
  title: string;
  updated: string;
  updatedLabel: string;
  summary: React.ReactNode;
  faqs: Faq[];
  ctaTitle: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-white min-h-screen">
        <article className="max-w-[760px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <nav className="text-[13px] text-[#9aa0aa] mb-6" aria-label="Migas de pan">
            <Link href="/" className="hover:text-[#EB0A5C]">
              Inicio
            </Link>{" "}
            / {crumb}
          </nav>
          <p className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#EB0A5C] mb-4">
            {eyebrow}
          </p>
          <h1 className="text-[32px] sm:text-[44px] leading-[1.08] font-extrabold tracking-tight text-[#14161b] mb-4">
            {title}
          </h1>
          <p className="text-[14px] text-[#9aa0aa] mb-10 pb-8 border-b border-[#f0f0f2]">
            Actualizado el <time dateTime={updated}>{updatedLabel}</time> · Monq
            Media
          </p>

          <div className="rounded-2xl bg-[#fdf2f6] border border-[#f4d4e1] px-6 py-5 mb-8">
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#14161b]">
              <strong>En resumen:</strong> {summary}
            </p>
          </div>

          {children}

          <h2 className={h2}>Preguntas frecuentes</h2>
          <div className="space-y-6 mb-12">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-[18px] font-bold text-[#14161b] mb-2">{f.q}</h3>
                <p className={p}>{f.a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] bg-[#0f1015] text-white px-6 py-8 sm:px-10 sm:py-10">
            <p className="text-[22px] sm:text-[26px] font-extrabold mb-3">
              {ctaTitle}
            </p>
            <p className="text-[#c9ccd3] mb-6">
              Asesoramiento gratuito y 100% sin compromiso. Garantía de
              resultados por contrato.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center px-[22px] py-[12px] rounded-full bg-[#EB0A5C] text-white text-[15px] font-bold hover:bg-[#c40a4d] transition-colors"
            >
              Contáctanos
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
