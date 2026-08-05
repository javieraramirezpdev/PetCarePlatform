import { SkeletonBlock } from "@/components/LoadingSkeleton";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonBlock className="h-8 w-56" />
      <SkeletonBlock className="h-11 w-full max-w-md rounded-full" />
      <LoadingSkeleton count={9} columns="sm:grid-cols-2 lg:grid-cols-3" />
    </div>
  );
}
