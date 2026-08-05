import Image from "next/image";
import { HeartPulse, Ruler, Scale, Sparkles } from "lucide-react";
import { DogBreed } from "@/lib/types";
import Badge from "./Badge";

export default function BreedCard({ breed }: { breed: DogBreed }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl2 border border-ink-50 bg-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative h-40 w-full bg-mist">
        <Image
          src={breed.image}
          alt={`Fotografía de la raza ${breed.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 320px"
        />
        {breed.isCustom && (
          <div className="absolute left-3 top-3">
            <Badge tone="clay">Agregada por el equipo</Badge>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <div>
          <h3 className="font-display font-semibold text-ink-800">{breed.name}</h3>
          <p className="text-xs text-ink-400 mt-0.5">{breed.group}</p>
        </div>

        {breed.description && (
          <p className="text-xs text-ink-400 leading-relaxed line-clamp-3">{breed.description}</p>
        )}

        <p className="text-xs text-ink-600 leading-relaxed line-clamp-2">
          <span className="font-medium text-ink-800">Temperamento: </span>
          {breed.temperament}
        </p>

        <div className="mt-1 grid grid-cols-2 gap-2 text-[11px] text-ink-600">
          <MiniStat icon={HeartPulse} label={breed.lifeSpan} />
          <MiniStat icon={Ruler} label={breed.heightCm} />
          <MiniStat icon={Scale} label={breed.weightKg} />
          {breed.energyLevel && <MiniStat icon={Sparkles} label={`Energía: ${breed.energyLevel}`} />}
        </div>
      </div>
    </article>
  );
}

function MiniStat({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1">
      <Icon size={12} strokeWidth={1.75} className="shrink-0 text-sage-600" />
      <span className="truncate">{label}</span>
    </span>
  );
}
