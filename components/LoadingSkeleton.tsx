export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl2 bg-mist ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl2 border border-ink-50 bg-white p-5 shadow-soft">
      <SkeletonBlock className="h-10 w-10 rounded-full mb-4" />
      <SkeletonBlock className="h-4 w-2/3 mb-2" />
      <SkeletonBlock className="h-3 w-full mb-1.5" />
      <SkeletonBlock className="h-3 w-4/5" />
    </div>
  );
}

export default function LoadingSkeleton({
  count = 6,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  count?: number;
  columns?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 ${columns} gap-4`}
      role="status"
      aria-label="Cargando contenido"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
      <span className="sr-only">Cargando…</span>
    </div>
  );
}
