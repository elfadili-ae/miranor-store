const SkeletonCard = () => (
  <div className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
    <div className="w-full h-80 bg-gray-400 rounded-md" />
    <div className="w-full flex justify-between">
      <div className="w-36 h-8 bg-gray-400 rounded-md" />
      <div className="w-16 h-8 bg-gray-400 rounded-md ml-auto" />
    </div>
    <div className="w-full h-4 bg-gray-400 rounded-md" />
    <div className="w-1/2 h-4 bg-gray-400 rounded-md" />
    <div className="w-1/2 h-12 bg-gray-400 rounded-2xl" />
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
