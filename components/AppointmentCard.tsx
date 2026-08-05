import { Clock, MapPin, Stethoscope } from "lucide-react";
import { Appointment } from "@/lib/types";
import Card from "./Card";
import Badge from "./Badge";

const statusConfig = {
  confirmada: { label: "Confirmada", tone: "sage" as const },
  pendiente: { label: "Pendiente", tone: "sky" as const },
  completada: { label: "Completada", tone: "neutral" as const },
  cancelada: { label: "Cancelada", tone: "clay" as const },
};

export default function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const status = statusConfig[appointment.status];
  const date = new Date(appointment.date);

  return (
    <Card className="flex gap-4">
      <div className="shrink-0 w-14 rounded-xl2 bg-sage-50 text-sage-700 flex flex-col items-center justify-center py-2">
        <span className="text-xs font-medium uppercase">
          {date.toLocaleDateString("es-CL", { month: "short" })}
        </span>
        <span className="text-lg font-display font-semibold leading-none mt-0.5">
          {date.getDate()}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-ink-800 text-sm">{appointment.reason}</h3>
          <Badge tone={status.tone}>{status.label}</Badge>
        </div>
        <div className="mt-2 space-y-1 text-xs text-ink-400">
          <p className="flex items-center gap-1.5">
            <Clock size={13} /> {appointment.time} hrs
          </p>
          <p className="flex items-center gap-1.5">
            <Stethoscope size={13} /> {appointment.vetName}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={13} /> {appointment.clinic}
          </p>
        </div>
      </div>
    </Card>
  );
}
