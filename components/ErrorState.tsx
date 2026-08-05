"use client";

import { PawPrint, RotateCcw } from "lucide-react";
import Button from "./Button";

export default function ErrorState({
  title = "Algo no salió bien",
  message = "No pudimos cargar esta información. Puede ser un problema de conexión temporal.",
  onRetry,
}: {
  title?: string;
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center text-center gap-3 rounded-xl2 border border-ink-50 bg-white p-10 shadow-soft"
    >
      <div className="h-12 w-12 rounded-full bg-clay/15 text-clay flex items-center justify-center">
        <PawPrint size={22} strokeWidth={1.75} />
      </div>
      <h2 className="font-display text-lg font-semibold text-ink-800">{title}</h2>
      <p className="text-sm text-ink-400 max-w-sm leading-relaxed">{message}</p>
      {onRetry && (
        <Button variant="secondary" size="sm" icon={<RotateCcw size={15} />} onClick={onRetry}>
          Reintentar
        </Button>
      )}
    </div>
  );
}
