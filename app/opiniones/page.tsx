import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opiniones: Casos de éxito en leads para paneles solares",
  description:
    "Lee los testimonios de instaladores de paneles solares que confían en Monq Media para crecer con leads de calidad. Resultados reales, clientes reales.",
  openGraph: {
    title: "Opiniones: Casos de éxito en leads para paneles solares | Monq Media",
    description:
      "Lee los testimonios de instaladores de paneles solares que confían en Monq Media para crecer con leads de calidad. Resultados reales, clientes reales.",
    url: "https://www.monqmedia.com/opiniones",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com/opiniones",
  },
};

export default function OpinionesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Opiniones</h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
