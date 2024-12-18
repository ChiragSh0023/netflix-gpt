import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import GptSearch from "./MovieGpt";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchMovies();

  const showGpt = useSelector((store) => store.gpt.showGpt);

  return (
    <div>
      <Header />

      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />

          <SecondaryContainer />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
