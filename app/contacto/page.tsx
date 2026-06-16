import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto: Solicita leads para tu empresa solar",
  description:
    "¿Quieres captar más clientes para tu empresa de paneles solares o autoconsumo? Contacta con Monq Media y evaluamos tu caso sin compromiso.",
  openGraph: {
    title: "Contacto: Solicita leads para tu empresa solar | Monq Media",
    description:
      "¿Quieres captar más clientes para tu empresa de paneles solares o autoconsumo? Contacta con Monq Media y evaluamos tu caso sin compromiso.",
    url: "https://www.monqmedia.com/contacto",
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Contacto</h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
