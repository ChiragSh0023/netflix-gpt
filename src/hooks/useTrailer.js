import { useEffect, useState } from "react";
import { GET_TRAILER_URL, OPTIONS } from "../utils/constants";

const useTrailer = (id) => {
  const [trailer, setTrailer] = useState(null);
  const url = GET_TRAILER_URL + `${id}/videos`;

  const fetchTrailer = async () => {
    const data = await fetch(url, OPTIONS);
    const json = await data.json();
    const trailerObj = extractKey(json?.results);
    setTrailer(trailerObj);
  };

  const extractKey = (videos) => {
    let trailer = videos?.filter(
      (video) =>
        (video?.name.includes("Official Trailer") ||
          video?.name.includes("Final Trailer")) &&
        video?.type === "Trailer"
    );

    if (trailer.length === 0) {
      trailer = videos?.filter((video) => video?.type === "Trailer");
    }

    return trailer?.[0];
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return trailer;
};

export default useTrailer;
