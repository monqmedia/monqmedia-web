import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accesibilidad",
  description: "Declaración de accesibilidad de Monq Media. Nuestro compromiso con la accesibilidad web.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Accesibilidad | Monq Media",
    description: "Declaración de accesibilidad de Monq Media. Nuestro compromiso con la accesibilidad web.",
    url: "https://www.monqmedia.com/accesibilidad",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
};

export default function AccesibilidadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Accesibilidad
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
