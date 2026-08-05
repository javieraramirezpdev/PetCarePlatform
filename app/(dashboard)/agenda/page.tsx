import type { Metadata } from "next";
import AgendaClient from "@/components/AgendaClient";
import { appointments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Agenda una hora con tu veterinario y revisa tus próximas citas e historial.",
  openGraph: {
    title: "Agenda · PetCare",
    description: "Elige fecha, veterinario y motivo de consulta en pocos pasos.",
  },
};

export default function AgendaPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-800">Agenda</h1>
        <p className="text-sm text-ink-400 mt-1">Elige fecha, veterinario y motivo de consulta.</p>
      </div>
      <AgendaClient initialAppointments={appointments} />
    </div>
  );
}
