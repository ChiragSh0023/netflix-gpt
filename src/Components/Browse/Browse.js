import Header from "../Header";
import useFetchMovies from "../../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import GptPage from "../GPT/GptPage";
import ErrorComponent from "../ErrorComponent";

const Browse = () => {
  useFetchMovies();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const showGpt = useSelector((store) => store.gpt.showGpt);

  if (!nowPlayingMovies) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <Header />

      {showGpt ? (
        <GptPage />
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
