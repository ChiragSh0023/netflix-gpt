import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ id }) => {
  useTrailer(id);

  const trailer = useSelector((store) => store.movies?.trailer);

  return (
    <div className="-mt-24">
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&controls=0&mute=1&loop=1&playlist=" +
            trailer?.key
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
