import LoadingSkeleton, { SkeletonBlock } from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonBlock className="h-40 w-full rounded-xl3" />
      <LoadingSkeleton count={6} />
    </div>
  );
}
