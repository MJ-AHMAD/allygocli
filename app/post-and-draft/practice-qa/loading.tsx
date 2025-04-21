import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col items-center mb-8">
        <Skeleton className="h-10 w-3/4 max-w-md mb-2" />
        <Skeleton className="h-5 w-2/3 max-w-sm" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Skeleton className="h-10 flex-grow" />
        <Skeleton className="h-10 w-[180px]" />
      </div>

      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-6 border rounded-lg p-6">
          <div className="mb-4">
            <Skeleton className="h-7 w-1/3 mb-2" />
            <Skeleton className="h-4 w-1/4" />
          </div>

          {[1, 2, 3, 4].map((j) => (
            <div key={j} className="mb-4">
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12 mt-1" />
              <Skeleton className="h-4 w-4/5 mt-1" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
