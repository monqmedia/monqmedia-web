import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qué ofrecemos: Generación de leads para paneles solares",
  description:
    "Descubre cómo Monq Media genera leads exclusivos y cualificados para instaladores de paneles solares y autoconsumo en España. Un sistema probado, medible y rentable.",
  openGraph: {
    title: "Qué ofrecemos: Generación de leads para paneles solares | Monq Media",
    description:
      "Descubre cómo Monq Media genera leads exclusivos y cualificados para instaladores de paneles solares y autoconsumo en España. Un sistema probado, medible y rentable.",
    url: "https://www.monqmedia.com/que-ofrecemos",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com/que-ofrecemos",
  },
};

export default function QueOfrecemosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Qué ofrecemos
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
