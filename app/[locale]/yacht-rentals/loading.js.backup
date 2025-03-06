export default function Loading() {
    return (
      <div className="w-full bg-white">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center justify-center pt-10 container mx-auto">
          <div className="h-10 w-72 bg-gray-200 animate-pulse rounded-md mb-4"></div>
        </div>
  
        {/* Tab Buttons Skeleton */}
        <div className="flex justify-center items-center gap-6 py-2 md:py-7 px-2">
          <div className="h-8 w-24 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="h-8 w-28 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="h-8 w-24 bg-gray-200 animate-pulse rounded-md"></div>
        </div>
  
        {/* Yacht Cards Grid Skeleton */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-10 xl:px-32 container mx-auto">
            {/* Generate 6 skeleton cards */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col justify-center bg-white rounded-2xl shadow-custom h-auto relative p-4"
              >
                {/* Image Skeleton */}
                <div className="h-[250px] md:h-[300px] bg-gray-200 animate-pulse rounded-2xl"></div>
  
                {/* Content Skeleton */}
                <div className="flex flex-col items-start pt-3">
                  <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded-md my-4"></div>
                  <div className="h-4 w-full bg-gray-200 animate-pulse rounded-md"></div>
                  <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded-md mt-5 mb-2"></div>
                  <div className="h-10 w-full bg-gray-200 animate-pulse rounded-md mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }