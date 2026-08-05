"use client";

import { FormEvent, useState } from "react";
import { LocateFixed, Search } from "lucide-react";
import { getNearbyVets } from "@/lib/api";
import { VetClinic } from "@/lib/types";
import Button from "./Button";
import ErrorState from "./ErrorState";
import LoadingSkeleton from "./LoadingSkeleton";
import VetMap from "./VetMap";

export default function VeterinariansClient() {
  const [query, setQuery] = useState("Quilicura, Santiago, Chile");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [clinics, setClinics] = useState<VetClinic[]>([]);
  const [center, setCenter] = useState<{ lat: number; lon: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function search(searchQuery: string) {
    setStatus("loading");
    setErrorMessage("");
    try {
      const results = await getNearbyVets(searchQuery);
      setClinics(results);
      if (results.length > 0) {
        setCenter({ lat: results[0].lat, lon: results[0].lon });
      } else {
        setCenter(null);
      }
      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
      setStatus("error");
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) search(query.trim());
  }

  function handleGeolocate() {
    if (!navigator.geolocation) {
      setErrorMessage("Tu navegador no soporta geolocalización.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const results = await getNearbyVets(`${pos.coords.latitude},${pos.coords.longitude}`);
          setClinics(results);
          setCenter({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setStatus("success");
        } catch {
          setErrorMessage("No pudimos buscar veterinarias en tu ubicación actual.");
          setStatus("error");
        }
      },
      () => {
        setErrorMessage("No pudimos acceder a tu ubicación. Revisa los permisos del navegador.");
        setStatus("error");
      }
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label className="relative flex-1">
          <span className="sr-only">Comuna o dirección</span>
          <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ingresa tu comuna o dirección"
            className="w-full rounded-full border border-ink-100 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-800 placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-sage-300"
          />
        </label>
        <div className="flex gap-3">
          <Button type="submit" size="md">
            Buscar
          </Button>
          <Button type="button" variant="secondary" size="md" icon={<LocateFixed size={16} />} onClick={handleGeolocate}>
            Usar mi ubicación
          </Button>
        </div>
      </form>

      {status === "loading" && <LoadingSkeleton count={4} columns="sm:grid-cols-2" />}

      {status === "error" && (
        <ErrorState
          title="No pudimos buscar veterinarias"
          message={errorMessage}
          onRetry={() => search(query)}
        />
      )}

      {status === "success" && center && <VetMap center={center} clinics={clinics} />}

      {status === "idle" && (
        <p className="text-sm text-ink-400 text-center py-10">
          Ingresa una comuna o dirección para ver veterinarias cercanas en el mapa.
        </p>
      )}
    </div>
  );
}
