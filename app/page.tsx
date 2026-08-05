import type { Metadata } from "next";
import { CalendarDays, Dna, PawPrint, ShieldCheck, Stethoscope } from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import LandingHero from "@/components/LandingHero";
import FeatureCard from "@/components/FeatureCard";
import HowItWorks from "@/components/HowItWorks";
import LandingCTA from "@/components/LandingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cuidado veterinario simple para tu mascota",
  description:
    "Agenda citas veterinarias, controla vacunas y encuentra veterinarios cercanos desde una sola app. Prueba PetCare gratis.",
  keywords: [
    "cuidado de mascotas",
    "app para mascotas",
    "veterinarios cerca de mí",
    "control de vacunas mascotas",
    "agendar hora veterinario",
    "salud de mascotas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PetCare · Cuidado veterinario, simple y cercano",
    description:
      "Agenda citas veterinarias, controla vacunas y encuentra veterinarios cercanos desde una sola app.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetCare · Cuidado veterinario, simple y cercano",
    description:
      "Agenda citas veterinarias, controla vacunas y encuentra veterinarios cercanos desde una sola app.",
  },
};

const features = [
  {
    icon: PawPrint,
    title: "Mi mascota",
    description: "Perfil completo con raza, peso, microchip e historial médico.",
    href: "/mypet",
  },
  {
    icon: CalendarDays,
    title: "Agenda",
    description: "Reserva y administra citas veterinarias en pocos clics.",
    href: "/agenda",
  },
  {
    icon: Stethoscope,
    title: "Veterinarios",
    description: "Encuentra clínicas y veterinarios de confianza cerca de ti.",
    href: "/veterinarians",
  },
  {
    icon: Dna,
    title: "Razas",
    description: "Aprende sobre cuidados específicos según la raza de tu mascota.",
    href: "/breeds",
  },
  {
    icon: ShieldCheck,
    title: "Vacunas al día",
    description: "Recordatorios automáticos para que nunca se te pase un refuerzo.",
    href: "/mypet",
    tone: "sky" as const,
  },
];

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://petcare-app.vercel.app/#organization",
        name: "PetCare",
        url: "https://petcare-app.vercel.app",
        description: "Cuidado veterinario, simple y cercano.",
      },
      {
        "@type": "WebSite",
        "@id": "https://petcare-app.vercel.app/#website",
        url: "https://petcare-app.vercel.app",
        name: "PetCare",
        publisher: { "@id": "https://petcare-app.vercel.app/#organization" },
        inLanguage: "es-CL",
      },
      {
        "@type": "SoftwareApplication",
        name: "PetCare",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        description:
          "Plataforma para dueños de mascotas: agenda citas, controla vacunas y encuentra veterinarios cercanos en un solo lugar.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "CLP",
        },
      },
    ],
  };

  return (
    <>
      {/* Datos estructurados para motores de búsqueda */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LandingNavbar />

      <main>
        <LandingHero />

        <section id="features" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-sage-600">Funciones</p>
            <h2 className="font-display text-3xl font-semibold text-ink-800 mt-2">
              Todo lo que necesitas, en un solo lugar
            </h2>
            <p className="text-ink-400 mt-3 leading-relaxed">
              PetCare centraliza el cuidado de tu mascota para que no tengas que
              recordarlo todo tú.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <HowItWorks />

        <section id="veterinarios" className="sr-only">
          Veterinarios cercanos disponibles en PetCare
        </section>

        <LandingCTA />
      </main>

      <Footer />
    </>
  );
}
