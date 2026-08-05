import { Syringe } from "lucide-react";
import { Vaccine } from "@/lib/types";
import Badge from "./Badge";

const statusConfig = {
  "al-dia": { label: "Al día", tone: "sage" as const },
  proxima: { label: "Próxima", tone: "sky" as const },
  atrasada: { label: "Atrasada", tone: "clay" as const },
};

export default function VaccineCard({ vaccine }: { vaccine: Vaccine }) {
  const status = statusConfig[vaccine.status];

  return (
    <div className="flex items-center gap-4 rounded-xl2 border border-ink-50 bg-white p-4">
      <span className="h-10 w-10 shrink-0 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
        <Syringe size={17} strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-ink-800 text-sm truncate">{vaccine.name}</p>
        <p className="text-xs text-ink-400 mt-0.5">Próxima dosis: {formatDate(vaccine.nextDue)}</p>
      </div>
      <Badge tone={status.tone}>{status.label}</Badge>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" });
}
