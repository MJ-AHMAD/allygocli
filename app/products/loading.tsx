import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-8">
      {/* Hero Section Skeleton */}
      <section className="text-center py-12 px-4 mb-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
        <Skeleton className="h-10 w-[300px] mx-auto mb-4" />
        <Skeleton className="h-6 w-[600px] mx-auto mb-2" />
        <Skeleton className="h-6 w-[500px] mx-auto mb-8" />
        <div className="flex flex-wrap justify-center gap-4">
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </section>

      {/* Featured Products Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-8 w-[200px] mx-auto mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-[400px] w-full rounded-lg" />
          ))}
        </div>
      </section>

      {/* Pricing Models Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-8 w-[250px] mx-auto mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[350px] w-full rounded-lg" />
          ))}
        </div>
      </section>

      {/* Products Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-8 w-[300px] mx-auto mb-6" />

        {/* Category Skeleton */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="py-8">
            <Skeleton className="h-6 w-[200px] mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-[350px] w-full rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
