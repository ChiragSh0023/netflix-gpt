import React from "react";
import { logo } from "../utils/constants";
import { userIcon } from "../utils/constants";
import downArrow from "../assets/Images/down-arrow.png";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <div className="flex gap-3 items-center w-full bg-black h-[69px] ">
      <div className="ml-9">
        <img src={logo} alt="logo" className="w-[130px]" />
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
          <img src={userIcon} alt="user-icon" />
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
  );
};

export default Header;
