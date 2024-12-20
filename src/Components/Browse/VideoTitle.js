import play from "../../assets/Images/play.png";
import info from "../../assets/Images/info.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const navigate = useNavigate();
  const trailer = useSelector((store) => store.movies.trailer);
  const playTrailer = () => {
    navigate(`/watch?id=${trailer.id}`);
  };
  return (
    <div className="absolute pt-[23%] sm:pt-[12%] px-12 pb-12 font-metropolis text-white w-screen h-[50vh] lg:h-auto aspect-video z-10 bg-gradient-to-r from-black">
      <div className="w-[50%] lg:w-[35%] py-4 flex flex-col lg:gap-6">
        <h1 className="text-xl sm:text-3xl lg:text-[43px] font-metropolis_bold leading-[52px]">
          {title}
        </h1>
        <div className="hidden lg:block lg:text-[16px]">{overview}</div>
        <div className="flex gap-4 mt-4">
          <button className="flex cursor-pointer gap-1 bg-white rounded-md px-2 py-2 lg:px-7 lg:py-3 items-center hover:bg-opacity-80">
            <div>
              <img src={play} alt="play-icon" className="h-3 sm:h-3 lg:h-5" />
            </div>
            <div
              className="text-black font-metropolis_semi_bold text-sm lg:text-[17px]"
              onClick={playTrailer}
            >
              Play
            </div>
          </button>
          <button className="hidden sm:flex cursor-pointer gap-2 bg-[#515556] rounded-md px-2 py-2 lg:px-6 lg:py-3 items-center hover:bg-opacity-80">
            <div>
              <img
                src={info}
                alt="info-icon"
                className="h-0 sm:h-3 lg:h-5 relative top-[-1.5px]"
              />
            </div>
            <div className="text-white font-metropolis_semi_bold text-sm lg:text-[17px]">
              More Info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
