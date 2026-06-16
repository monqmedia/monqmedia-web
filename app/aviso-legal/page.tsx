import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de Monq Media. Información legal sobre el uso del sitio web.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Aviso Legal | Monq Media",
    description: "Aviso legal de Monq Media. Información legal sobre el uso del sitio web.",
    url: "https://www.monqmedia.com/aviso-legal",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Aviso Legal
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
