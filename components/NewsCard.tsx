import Image from "next/image";
import { NewsItem } from "@/lib/types";
import Badge from "./Badge";

const categoryTone = {
  Vacunas: "sky",
  Nutrición: "sage",
  Adopción: "clay",
  Salud: "sky",
  Consejos: "sage",
} as const;

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl2 border border-ink-50 bg-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative h-36 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 320px"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={categoryTone[item.category]}>{item.category}</Badge>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-medium text-ink-800 text-sm leading-snug">{item.title}</h3>
        <p className="text-xs text-ink-400 leading-relaxed line-clamp-2">{item.excerpt}</p>
        <span className="mt-auto text-[11px] text-ink-400">{item.readMinutes} min de lectura</span>
      </div>
    </article>
  );
}
