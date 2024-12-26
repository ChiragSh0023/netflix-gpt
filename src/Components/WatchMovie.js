import { useLocation, useNavigate } from "react-router-dom";
import useTrailer from "../hooks/useTrailer";
import backIcon from "../assets/Images/back-icon.png";
import LoadingComponent from "./LoadingComponent";

const WatchMovie = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("id");

  const trailer = useTrailer(movieId);

  if (!trailer) {
    return <LoadingComponent />;
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
        <img src={backIcon} className="w-10 h-10" alt="back-icon" />
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
