import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.dog.ceo" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "hips.hearstapps.com" },
      { protocol: "https", hostname: "www.lanacion.com.ar" },
      { protocol: "https", hostname: "www.rover.com" },
      { protocol: "https", hostname: "phantom-elmundo.unidadeditorial.es" },
      { protocol: "https", hostname: "kamanpet.cl" },
      { protocol: "https", hostname: "mascoterias.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      
      
    ],
  },
};

export default nextConfig;