import { useDispatch, useSelector } from "react-redux";
import useTrailer from "../../hooks/useTrailer";
import { useEffect } from "react";
import { addTrailer } from "../../utils/Redux Slices/moviesSlice";

const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();

  const trailer = useTrailer(id);

  useEffect(() => {
    if (trailer) {
      dispatch(addTrailer(trailer));
    }
  }, [trailer]);

  return (
    <div className="mt-0 lg:-mt-24">
      {trailer && (
        <iframe
          className="w-screen h-[50vh] lg:h-auto lg:aspect-video"
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
