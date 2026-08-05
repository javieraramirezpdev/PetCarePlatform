import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petcare-app.vercel.app"),
  title: {
    default: "PetCare · Cuidado veterinario simple",
    template: "%s · PetCare",
  },
  description:
    "PetCare es la plataforma para dueños de mascotas: agenda citas, controla vacunas y encuentra veterinarios cercanos en un solo lugar.",
  keywords: [
    "PetCare",
    "cuidado de mascotas",
    "veterinarios cerca de mí",
    "control de vacunas",
    "agenda veterinaria",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "PetCare",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetCare · Cuidado veterinario simple",
    description:
      "Agenda citas, controla vacunas y encuentra veterinarios cercanos en un solo lugar.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-paper text-ink-800 antialiased">{children}</body>
    </html>
  );
}
