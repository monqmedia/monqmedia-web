/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/que-ofrecemos",
        destination: "/#que-ofrecemos",
        permanent: true,
      },
      {
        source: "/nosotros",
        destination: "/#nosotros",
        permanent: true,
      },
      {
        source: "/opiniones",
        destination: "/#opiniones",
        permanent: true,
      },
      {
        source: "/contacto",
        destination: "/#contacto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
