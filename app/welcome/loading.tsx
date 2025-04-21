import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-16 w-full max-w-2xl" />
            <Skeleton className="h-12 w-full max-w-xl" />
            <Skeleton className="h-6 w-full max-w-3xl" />
            <Skeleton className="h-6 w-full max-w-2xl" />
            <div className="flex gap-4 justify-center">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>

          <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
            <Skeleton className="w-full aspect-[16/9] rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Skeleton className="h-12 w-64 mx-auto" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
