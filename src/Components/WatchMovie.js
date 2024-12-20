import { useLocation, useNavigate } from "react-router-dom";
import useTrailer from "../hooks/useTrailer";
import backIcon from "../assets/Images/back-icon.png";

const WatchMovie = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("id");

  const trailer = useTrailer(movieId);

  if (!trailer) {
    return (
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        <div className="flex items-center gap-2 text-white font-metropolis">
          <svg
            className="animate-spin h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#FF7F50"
              ></path>{" "}
              <path
                d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                fill="#FF7F50"
              ></path>{" "}
            </g>
          </svg>
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  const takeToBrowsePage = () => {
    navigate("/browse");
  };

  return (
    <>
      <div
        className="absolute z-10 mt-[1%] ml-[1%] cursor-pointer"
        onClick={takeToBrowsePage}
      >
        <img src={backIcon} className="w-10 h-10" />
      </div>
      <div className="">
        <iframe
          className="w-screen h-screen"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            trailer?.key
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default WatchMovie;
