import Header from "../Header";
import useFetchMovies from "../../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import GptPage from "../GPT/GptPage";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LoadingComponent";

const Browse = () => {
  useFetchMovies();

  const moviesFetchedStatus = useSelector(
    (store) => store.movies.moviesFetchedStatus
  );
  const moviesFetchError = useSelector(
    (store) => store.movies.moviesFetchError
  );

  const showGpt = useSelector((store) => store.gpt.showGpt);

  if (!moviesFetchedStatus && !moviesFetchError) {
    return <LoadingComponent />;
  }

  if (!moviesFetchedStatus && moviesFetchError) {
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
