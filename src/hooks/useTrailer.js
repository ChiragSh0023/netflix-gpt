import { useEffect } from "react";
import { GET_TRAILER_URL, OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/Redux Slices/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailer = (id) => {
  const dispatch = useDispatch();

  const url = GET_TRAILER_URL + `${id}/videos`;

  const fetchTrailer = async () => {
    const data = await fetch(url, OPTIONS);
    const json = await data.json();
    const trailer = extractKey(json?.results);
    dispatch(addTrailer(trailer));
  };

  const extractKey = (videos) => {
    let trailer = videos?.filter(
      (video) =>
        (video?.name === "Official Trailer" ||
          video?.name === "Final Trailer") &&
        video?.type === "Trailer"
    );

    if (!trailer) {
      trailer = videos?.filter((video) => video?.type === "Trailer");
    }

    return trailer?.[0];
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useTrailer;
