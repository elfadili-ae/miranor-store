const SkeletonCard = () => (
  <div className="flex flex-col gap-2 justify-between w-[90%] sm:w-[44%] lg:w-[22%] shadow-[2px_2px_2px_2px_rgb(0_0_0/0.1)] animate-pulse">
    <div className="relative w-full h-72 bg-gray-200 rounded-md" />

    <div className="w-3/4 h-6 bg-gray-200 rounded-md mx-auto" />

    <div className="h-4 bg-gray-200 rounded-md w-[80%] mx-auto" />

    <div className="flex justify-center gap-3 mt-2">
      <div className="w-5 h-5 rounded-full bg-gray-300 border-[1px] border-gray-400"></div>
      <div className="w-5 h-5 rounded-full bg-gray-300 border-[1px] border-gray-400"></div>
      <div className="w-5 h-5 rounded-full bg-gray-300 border-[1px] border-gray-400"></div>
    </div>

    <div className="flex justify-between items-center pt-2 pb-4 px-2">
      <div className="w-1/3 h-6 bg-gray-200 rounded-md" />
      <div className="w-20 h-8 bg-gray-800 rounded-md" />
    </div>
  </div>
);

export const Skeleton = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap animate-pulse">
      {[...Array(4)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};
