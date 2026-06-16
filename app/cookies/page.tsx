import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Monq Media. Información sobre el uso de cookies en este sitio web.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Política de Cookies | Monq Media",
    description: "Política de cookies de Monq Media. Información sobre el uso de cookies en este sitio web.",
    url: "https://www.monqmedia.com/cookies",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
};

export default function CookiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Política de Cookies
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
