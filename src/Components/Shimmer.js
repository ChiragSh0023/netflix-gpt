import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="mx-4 mt-6 p-8 pb-11 bg-black bg-opacity-90 flex flex-col gap-5 rounded-sm">
      <div className="text-white font-metropolis_semi_bold text-2xl">
        Relax, we’re brewing your movie list!
      </div>
      <div className="grid grid-cols-6 gap-9">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
