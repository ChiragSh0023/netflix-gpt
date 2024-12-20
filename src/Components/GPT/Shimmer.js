import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="mx-4 mt-6 p-8 pb-11 bg-black bg-opacity-90 flex flex-col gap-5 rounded-sm">
      <div className="text-white font-metropolis_semi_bold text-xl md:text-2xl">
        Relax, we’re brewing your movie list!
      </div>
      <div className="grid grid-cols-3 gap-x-4 md:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-4 gap-x-4 justify-items-center lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-6 gap-x-4 md:justify-items-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
