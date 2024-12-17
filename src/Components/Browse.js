import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

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
    </div>
  );
};

export default Browse;
