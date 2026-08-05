"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-10">
      <ErrorState
        title="No pudimos cargar PetCare"
        message="Ocurrió un problema inesperado al mostrar esta página. Intenta nuevamente en unos segundos."
        onRetry={reset}
      />
    </div>
  );
}
