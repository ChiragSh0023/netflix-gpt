import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";
import downArrow from "../assets/Images/down-arrow.png";
import DropdownMenu from "./DropdownMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/Redux Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { clearGptSlice, toggleShowGpt } from "../utils/Redux Slices/gptSlice";
import {
  clearConfigSlice,
  setLanguage,
} from "../utils/Redux Slices/configSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { clearMovieSlice } from "../utils/Redux Slices/moviesSlice";
import signOutIcon from "../assets/Images/logout.png";
import { handleSignOut } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGpt = useSelector((store) => store.gpt.showGpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(clearMovieSlice());
        dispatch(clearGptSlice());
        dispatch(clearConfigSlice());
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleShowGpt());
  };

  const handleSelect = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="sticky top-0 bg-black w-full z-30">
      <div className="flex gap-3 items-center w-full h-[69px] font-metropolis">
        <div className="ml:4 sm:ml-9">
          <img src={LOGO} alt="logo" className="w-[130px]" />
        </div>

        <div className="ml-4 hidden lg:block">
          <ul className="text-[#acacbe] flex  text-sm">
            <li className="mr-5 cursor-pointer hover:text-white">Home</li>
            <li className="mr-5 cursor-pointer hover:text-white">TV Shows</li>
            <li className="mr-5 cursor-pointer hover:text-white">Movies</li>
            <li className="mr-5 cursor-pointer hover:text-white">
              New & Popular
            </li>
            <li className="mr-5 cursor-pointer hover:text-white">My List</li>
            <li className="hidden xl:inline-block mr-5 cursor-pointer hover:text-white">
              Browse by Languages
            </li>
          </ul>
        </div>

        <div className="flex items-center absolute right-[4%]">
          <div className="flex items-center">
            {showGpt && (
              <div className="hidden sm:block">
                <select
                  className="p-2 text-white mr-4 bg-gray-700 rounded-md cursor-pointer"
                  onChange={handleSelect}
                >
                  {SUPPORTED_LANGUAGE.map((language) => {
                    return (
                      <option
                        key={language.identifier}
                        value={language.identifier}
                      >
                        {language.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
            <button
              className="bg-purple-600 text-white rounded-md mr-5 px-5 py-2 text-[16px] hover:bg-purple-700 cursor-pointer"
              onClick={handleGptSearch}
            >
              {showGpt ? "Home Page" : "GPT Search"}
            </button>
          </div>

          <div className="flex items-center gap-3 group relative cursor-pointer">
            <img src={USER_ICON} alt="user-icon" />
            <img
              src={downArrow}
              alt="down-icon"
              className="hidden md:block h-[10px] transform transition-transform duration-500 group-hover:rotate-180"
            />
            <img
              src={signOutIcon}
              alt="sing-out"
              className="md:hidden h-[17px] cursor-pointer"
              onClick={handleSignOut}
            />

            {/** Dropdown Menu */}
            <div className="hidden md:block absolute top-12 right-0 bg-black text-white text-[12px] rounded-sm transform transition-all duration-300 w-[180px] border border-solid border-gray-300 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100">
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
