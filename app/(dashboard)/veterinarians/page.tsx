import type { Metadata } from "next";
import VeterinariansClient from "@/components/VeterinariansClient";

export const metadata: Metadata = {
  title: "Veterinarios",
  description: "Encuentra veterinarias cercanas usando OpenStreetMap (Nominatim y Overpass).",
  openGraph: {
    title: "Veterinarios · PetCare",
    description: "Busca clínicas veterinarias cerca de ti y ábrelas directamente en el mapa.",
  },
};

export default function VeterinariansPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-800">Veterinarios cercanos</h1>
        <p className="text-sm text-ink-400 mt-1">
          Datos obtenidos en tiempo real desde OpenStreetMap (Nominatim + Overpass).
        </p>
      </div>
      <VeterinariansClient />
    </div>
  );
}
