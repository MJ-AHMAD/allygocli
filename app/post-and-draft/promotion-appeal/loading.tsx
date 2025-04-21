export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="h-8 w-64 bg-gray-200 animate-pulse rounded mx-auto mb-6"></div>
      <div className="h-4 w-full max-w-2xl bg-gray-200 animate-pulse rounded mx-auto mb-8"></div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded mb-8"></div>

        <div className="border rounded-lg p-6 mb-8">
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 animate-pulse rounded mb-6"></div>

          <div className="space-y-4 mb-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>

          <div className="flex justify-between">
            <div className="h-4 w-48 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>

        <div className="h-32 w-full bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  )
}
