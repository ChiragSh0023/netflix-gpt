import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { USER_ICON } from "../utils/constants";
import downArrow from "../assets/Images/down-arrow.png";
import DropdownMenu from "./DropdownMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/Redux Slices/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="absolute w-full z-10">
      <div className="flex gap-3 items-center w-full bg-gradient-to-b from-black h-[69px]">
        <div className="ml-9">
          <img src={LOGO} alt="logo" className="w-[130px]" />
        </div>

        <div className="ml-4">
          <ul className="text-[#e5e5e5] flex font-metropolis text-sm">
            <li className="mr-5 cursor-pointer hover:text-white">Home</li>
            <li className="mr-5 cursor-pointer hover:text-white">TV Shows</li>
            <li className="mr-5 cursor-pointer hover:text-white">Movies</li>
            <li className="mr-5 cursor-pointer hover:text-white">
              New & Popular
            </li>
            <li className="mr-5 cursor-pointer hover:text-white">My List</li>
            <li className="mr-5 cursor-pointer hover:text-white">
              Browse by Languages
            </li>
          </ul>
        </div>

        <div className="flex items-center absolute right-[4%]">
          <div className="flex items-center gap-3 group relative cursor-pointer">
            <img src={USER_ICON} alt="user-icon" />
            <img
              src={downArrow}
              alt="down-icon"
              className="h-[10px] transform transition-transform duration-500 group-hover:rotate-180"
            />

            {/** Dropdown Menu */}
            <div className="absolute top-12 right-0 bg-black text-white text-[12px] rounded-sm opacity-0 scale-95 transform transition-all duration-300 font-metropolis w-[180px] border border-solid border-gray-300 group-hover:opacity-100 group-hover:scale-100">
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
