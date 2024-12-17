import Header from "./Header";
import useFetchMovies from "../hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";

const Browse = () => {
  useFetchMovies();

  {
    /*
      Main Container
        - Video in background
        - Movie Details
      
      Secondary Container
        - Movie Lists * n
        - Movie Cards * n
  */
  }

  return (
    <div>
      <Header />

      <MainContainer />

      <SecondaryContainer />

      <Footer />
    </div>
  );
};

export default Browse;
