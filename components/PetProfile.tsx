import Image from "next/image";
import { Cake, Dna, Scale, VenetianMask } from "lucide-react";
import { Pet } from "@/lib/types";
import Card from "./Card";
import Badge from "./Badge";

function ageFromBirthDate(birthDate: string): string {
  const birth = new Date(birthDate);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return years > 0 ? `${years} año${years === 1 ? "" : "s"}` : `${months} meses`;
}

export default function PetProfile({ pet }: { pet: Pet }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-40 sm:h-48 w-full bg-sage-100">
        <Image src={pet.photo} alt={`Foto de ${pet.name}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 480px" priority />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink-800">{pet.name}</h2>
            <p className="text-sm text-ink-400">{pet.breed}</p>
          </div>
          <Badge tone="sage">{pet.species}</Badge>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-4">
          <Stat icon={Cake} label="Edad" value={ageFromBirthDate(pet.birthDate)} />
          <Stat icon={Scale} label="Peso" value={`${pet.weightKg} kg`} />
          <Stat icon={VenetianMask} label="Sexo" value={pet.sex} />
          <Stat icon={Dna} label="Microchip" value={pet.microchip} small />
        </dl>
      </div>
    </Card>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  small = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="h-8 w-8 shrink-0 rounded-full bg-mist flex items-center justify-center text-ink-600">
        <Icon size={15} strokeWidth={1.75} />
      </span>
      <div>
        <dt className="text-xs text-ink-400">{label}</dt>
        <dd className={`font-medium text-ink-800 ${small ? "text-xs" : "text-sm"}`}>{value}</dd>
      </div>
    </div>
  );
}
