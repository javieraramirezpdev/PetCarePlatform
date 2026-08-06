import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClipboardList, Syringe } from "lucide-react";
import PetProfile from "@/components/PetProfile";
import VaccineCard from "@/components/VaccineCard";
import Card from "@/components/Card";
import { getPetById } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pet = getPetById(id);
  return {
    title: pet ? `${pet.name} · Mi mascota` : "Mascota no encontrada",
    description: "Foto, datos, vacunas e historial médico completo de tu mascota.",
  };
}

export default async function MyPetPage({ params }: Props) {
  const { id } = await params;
  const pet = getPetById(id);

  if (!pet) notFound();

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-800">Mi mascota</h1>
        <p className="text-sm text-ink-400 mt-1">
          Datos, vacunas y controles de {pet.name} siempre a mano.
        </p>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-8 items-start">
        <PetProfile pet={pet} />

        <div className="flex flex-col gap-8">
          <section aria-labelledby="vacunas">
            <h2 id="vacunas" className="font-display text-lg font-semibold text-ink-800 mb-3 flex items-center gap-2">
              <Syringe size={18} className="text-sage-600" /> Vacunas
            </h2>
            <div className="flex flex-col gap-3">
              {pet.vaccines.map((v) => (
                <VaccineCard key={v.id} vaccine={v} />
              ))}
            </div>
          </section>

          <section aria-labelledby="historial">
            <h2 id="historial" className="font-display text-lg font-semibold text-ink-800 mb-3 flex items-center gap-2">
              <ClipboardList size={18} className="text-sage-600" /> Historial médico
            </h2>
            <ol className="flex flex-col gap-3">
              {pet.history.map((entry) => (
                <li key={entry.id}>
                  <Card>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-medium text-ink-800 text-sm">{entry.title}</h3>
                      <time className="text-xs text-ink-400 shrink-0">
                        {new Date(entry.date).toLocaleDateString("es-CL", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-sm text-ink-600 mt-2 leading-relaxed">{entry.notes}</p>
                    <p className="text-xs text-ink-400 mt-2">Atendido por {entry.vet}</p>
                  </Card>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}