import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import Card from "@/components/Card";
import { pets } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mis mascotas",
  description: "Elige una mascota para ver su perfil, vacunas e historial médico.",
};

export default function MyPetsIndexPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-ink-800">Mis mascotas</h1>
          <p className="text-sm text-ink-400 mt-1">Selecciona una mascota para ver su perfil.</p>
        </div>

        <Link
          href="/mypet/new"
          className="inline-flex items-center gap-2 rounded-xl2 bg-sage-600 text-white text-sm font-medium px-4 py-2 hover:bg-sage-700 transition"
        >
          <Plus size={16} /> Agregar mascota
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pets.map((pet) => (
          <Link key={pet.id} href={`/mypet/${pet.id}`}>
            <Card>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image src={pet.photo} alt={pet.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink-800">{pet.name}</h3>
                  <p className="text-sm text-ink-400">{pet.breed}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}