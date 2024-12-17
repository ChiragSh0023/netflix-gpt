import play from "../assets/Images/play.png";
import info from "../assets/Images/info.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[15%] px-12 pb-12 font-metropolis text-white w-screen aspect-video bg-gradient-to-r from-black">
      <div className="w-[35%] py-4 flex flex-col gap-6">
        <h1 className="text-[43px] font-metropolis_bold leading-[52px]">
          {title}
        </h1>
        <div className="text-[16px]">{overview}</div>
        <div className="flex gap-4 mt-4">
          <button className="flex cursor-pointer gap-1 bg-white rounded-md px-7 py-3 items-center hover:bg-opacity-80">
            <div>
              <img src={play} alt="play-icon" className="h-5" />
            </div>
            <div className="text-black font-metropolis_semi_bold text-[17px]">
              Play
            </div>
          </button>
          <button className="flex cursor-pointer gap-2 bg-[#515556] rounded-md px-6 py-3 items-center hover:bg-opacity-80">
            <div>
              <img
                src={info}
                alt="info-icon"
                className="h-5 relative top-[-1.5px]"
              />
            </div>
            <div className="text-white font-metropolis_semi_bold text-[17px]">
              More Info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
