"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Calendar from "./Calendar";
import Card from "./Card";
import Button from "./Button";
import AppointmentCard from "./AppointmentCard";
import { Appointment } from "@/lib/types";

const vetOptions = ["Dra. Camila Reyes", "Dr. Ignacio Paredes", "Dra. Fernanda Soto"];

export default function AgendaClient({ initialAppointments }: { initialAppointments: Appointment[] }) {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState("10:00");
  const [vet, setVet] = useState(vetOptions[0]);
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const upcoming = appointments.filter((a) => a.status !== "completada");
  const history = appointments.filter((a) => a.status === "completada");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!date || !reason.trim()) return;

    const newAppointment: Appointment = {
      id: `a-${Date.now()}`,
      date,
      time,
      vetName: vet,
      clinic: "Clínica PetCare Quilicura",
      reason: reason.trim(),
      status: "confirmada",
    };

    setAppointments((prev) => [newAppointment, ...prev]);
    setConfirmed(true);
    setDate(null);
    setReason("");
    setTimeout(() => setConfirmed(false), 4000);
  }

  return (
    <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-8 items-start">
      <Card className="flex flex-col gap-5">
        <h2 className="font-display text-lg font-semibold text-ink-800">Agendar nueva cita</h2>

        <Calendar selected={date} onSelect={setDate} />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Hora">
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl2 border border-ink-100 bg-white py-2.5 px-3 text-sm outline-none focus:border-sage-300"
              >
                {["09:00", "10:30", "12:00", "15:00", "16:00", "17:30"].map((t) => (
                  <option key={t} value={t}>
                    {t} hrs
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Veterinario">
              <select
                value={vet}
                onChange={(e) => setVet(e.target.value)}
                className="w-full rounded-xl2 border border-ink-100 bg-white py-2.5 px-3 text-sm outline-none focus:border-sage-300"
              >
                {vetOptions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="Motivo de consulta">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Ej: control anual, vacuna, revisión general..."
              rows={3}
              required
              className="w-full rounded-xl2 border border-ink-100 bg-white py-2.5 px-3 text-sm outline-none focus:border-sage-300 resize-none"
            />
          </Field>

          <Button type="submit" disabled={!date} className="w-full">
            {date ? "Confirmar cita" : "Selecciona una fecha"}
          </Button>

          {confirmed && (
            <p className="flex items-center gap-2 text-sm text-sage-600" role="status">
              <CheckCircle2 size={16} /> Cita confirmada correctamente.
            </p>
          )}
        </form>
      </Card>

      <div className="flex flex-col gap-8">
        <section aria-labelledby="proximas">
          <h2 id="proximas" className="font-display text-lg font-semibold text-ink-800 mb-3">
            Próximas citas
          </h2>
          {upcoming.length === 0 ? (
            <p className="text-sm text-ink-400">No tienes citas próximas.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {upcoming.map((a) => (
                <AppointmentCard key={a.id} appointment={a} />
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="historial-citas">
          <h2 id="historial-citas" className="font-display text-lg font-semibold text-ink-800 mb-3">
            Historial de citas
          </h2>
          {history.length === 0 ? (
            <p className="text-sm text-ink-400">Aún no tienes citas completadas.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {history.map((a) => (
                <AppointmentCard key={a.id} appointment={a} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink-600">{label}</span>
      {children}
    </label>
  );
}
