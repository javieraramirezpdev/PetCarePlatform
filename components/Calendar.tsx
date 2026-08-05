"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

export default function Calendar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (isoDate: string) => void;
}) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const firstDayIndex = (viewDate.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDayIndex).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function isoFor(day: number) {
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return d.toISOString().slice(0, 10);
  }

  function isPast(day: number) {
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  return (
    <div className="rounded-xl2 border border-ink-50 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          aria-label="Mes anterior"
          onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-mist transition-colors duration-200"
        >
          <ChevronLeft size={16} />
        </button>
        <p className="font-medium text-ink-800 text-sm">
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </p>
        <button
          type="button"
          aria-label="Mes siguiente"
          onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-mist transition-colors duration-200"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-ink-400 mb-1.5">
        {weekdays.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) =>
          day === null ? (
            <span key={i} />
          ) : (
            <button
              key={i}
              type="button"
              disabled={isPast(day)}
              onClick={() => onSelect(isoFor(day))}
              aria-pressed={selected === isoFor(day)}
              className={`aspect-square rounded-full text-sm font-medium transition-colors duration-200 disabled:text-ink-100 disabled:cursor-not-allowed ${
                selected === isoFor(day)
                  ? "bg-sage-500 text-white"
                  : "text-ink-600 hover:bg-sage-50"
              }`}
            >
              {day}
            </button>
          )
        )}
      </div>
    </div>
  );
}
