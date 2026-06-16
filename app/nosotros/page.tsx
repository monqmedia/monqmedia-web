import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros: Expertos en marketing solar en España",
  description:
    "Conoce el equipo de Monq Media, especialistas en generación de leads para el sector de energías renovables y autoconsumo solar en España.",
  openGraph: {
    title: "Sobre nosotros: Expertos en marketing solar en España | Monq Media",
    description:
      "Conoce el equipo de Monq Media, especialistas en generación de leads para el sector de energías renovables y autoconsumo solar en España.",
    url: "https://www.monqmedia.com/nosotros",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Nosotros</h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
