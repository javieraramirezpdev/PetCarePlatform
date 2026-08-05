import type { MetadataRoute } from "next";

const baseUrl = "https://petcare-app.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/login"],
        // Rutas del dashboard: contenido personalizado por usuario, sin valor de indexación pública.
        disallow: ["/home", "/mypet", "/agenda", "/veterinarians", "/breeds"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
