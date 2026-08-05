import type { Metadata } from "next";
import BreedsClient from "@/components/BreedsClient";
import { getBreeds } from "@/lib/api";

// Se evalúa en cada request: las imágenes de Dog CEO pueden cambiar
// y no queremos que el build falle si la API está temporalmente inaccesible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Razas",
  description: "Catálogo de razas de perros con temperamento, tamaño y esperanza de vida, vía Dog CEO API.",
  openGraph: {
    title: "Razas · PetCare",
    description: "Explora características de cada raza antes de elegir a tu próximo compañero.",
  },
};

export default async function BreedsPage() {
  const breeds = await getBreeds();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-800">Catálogo de razas</h1>
        <p className="text-sm text-ink-400 mt-1">
          Fotografías obtenidas desde Dog CEO API; temperamento, tamaño y cuidados curados por el equipo.
        </p>
      </div>
      <BreedsClient breeds={breeds} />
    </div>
  );
}
