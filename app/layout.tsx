import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.monqmedia.com"),
  title: {
    default: "Monq Media | Leads exclusivos para instaladores de paneles solares en España",
    template: "%s | Monq Media",
  },
  description:
    "Generamos leads exclusivos y de calidad para la instalación de paneles solares en toda España. Conectamos empresas de energías renovables con clientes reales listos para instalar.",
  openGraph: {
    siteName: "Monq Media",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.monqmedia.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${jakarta.className} min-h-screen bg-white text-[#14161b] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
