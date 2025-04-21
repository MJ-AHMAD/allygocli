import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      {/* Hero Section Skeleton */}
      <div className="text-center mb-16">
        <Skeleton className="h-12 w-3/4 max-w-xl mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
      </div>

      {/* Pricing Toggle Skeleton */}
      <div className="flex justify-center mb-12">
        <Skeleton className="h-10 w-full max-w-md mx-auto mb-8" />

        {/* Pricing Cards Skeleton */}
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 w-full mt-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col border rounded-lg p-6">
              <Skeleton className="h-8 w-1/2 mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-10 w-1/3 mb-6" />

              {/* Feature list skeleton */}
              {[...Array(6)].map((_, j) => (
                <Skeleton key={j} className="h-5 w-full mb-3" />
              ))}

              <Skeleton className="h-10 w-full mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison Skeleton */}
      <div className="mt-20 mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-10" />
        <div className="overflow-x-auto">
          <div className="w-full">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex border-b py-4">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-6 w-12 mx-auto" />
                <Skeleton className="h-6 w-12 mx-auto" />
                <Skeleton className="h-6 w-12 mx-auto" />
                <Skeleton className="h-6 w-12 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* One-time Purchase Skeleton */}
      <div className="mt-20 mb-16">
        <Skeleton className="h-10 w-80 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-10" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col border rounded-lg p-6">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-6" />
              <Skeleton className="h-10 w-1/2 mb-6" />

              {/* Feature list skeleton */}
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="h-5 w-full mb-3" />
              ))}

              <Skeleton className="h-10 w-full mt-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Skeleton */}
      <div className="mt-20 mb-16">
        <Skeleton className="h-10 w-72 mx-auto mb-10" />
        <div className="max-w-3xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-b py-4">
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Skeleton */}
      <div className="mt-20 mb-10 text-center">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-6 w-full max-w-xl mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-40 mx-auto sm:mx-2" />
          <Skeleton className="h-12 w-40 mx-auto sm:mx-2" />
        </div>
      </div>
    </div>
  )
}
