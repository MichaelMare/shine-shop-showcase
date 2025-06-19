
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="product-card">
      <Skeleton className="w-full h-64" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-end">
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  )
}
