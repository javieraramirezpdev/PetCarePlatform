"use client";

import { useEffect } from "react";
import ErrorState from "@/components/ErrorState";

export default function BreedsError({
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
        title="No pudimos cargar las razas"
        message="Dog CEO API no respondió correctamente. Revisa tu conexión o intenta de nuevo en unos segundos."
        onRetry={reset}
      />
    </div>
  );
}
