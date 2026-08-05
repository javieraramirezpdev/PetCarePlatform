"use client";

import { useMemo, useState } from "react";
import { DogBreed } from "@/lib/types";
import SearchBar from "./SearchBar";
import BreedCard from "./BreedCard";

export default function BreedsClient({ breeds }: { breeds: DogBreed[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return breeds;
    return breeds.filter(
      (b) => b.name.toLowerCase().includes(q) || b.temperament.toLowerCase().includes(q)
    );
  }, [breeds, query]);

  return (
    <div className="flex flex-col gap-5">
      <SearchBar
        label="Buscar raza"
        placeholder="Buscar por nombre o temperamento (ej: leal, activo)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-md"
      />

      <p className="text-sm text-ink-400">
        {filtered.length} raza{filtered.length === 1 ? "" : "s"} encontrada{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <p className="text-sm text-ink-400 py-10 text-center">
          No encontramos razas que coincidan con “{query}”.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      )}
    </div>
  );
}
