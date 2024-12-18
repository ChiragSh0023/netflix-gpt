import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);

  return (
    <div className="pt-[3%] font-metropolis flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
        <input
          type="text"
          placeholder={lang?.[language]?.gptInputPlaceHolder}
          className="p-3 m-4 rounded-md col-span-9"
        />
        <button className="bg-red-600 text-white rounded-md p-3 m-4 hover:bg-red-700 col-span-3">
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
