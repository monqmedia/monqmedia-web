import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Monq Media. Cómo tratamos y protegemos tus datos personales.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Política de Privacidad | Monq Media",
    description: "Política de privacidad de Monq Media. Cómo tratamos y protegemos tus datos personales.",
    url: "https://www.monqmedia.com/politica-de-privacidad",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Política de Privacidad
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
