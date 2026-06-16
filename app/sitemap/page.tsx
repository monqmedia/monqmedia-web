import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
};

export default function SitemapPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Sitemap</h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Próximamente
      </p>
    </main>
  );
}
