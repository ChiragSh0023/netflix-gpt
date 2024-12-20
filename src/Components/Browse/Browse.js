import Header from "../Header";
import useFetchMovies from "../../hooks/useFetchMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import GptPage from "../GPT/GptPage";

const Browse = () => {
  useFetchMovies();

  const showGpt = useSelector((store) => store.gpt.showGpt);

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
