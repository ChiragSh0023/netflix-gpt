import React from "react";
import { logo } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img src={logo} alt="logo" className="ml-28 my-1 w-52" />
    </div>
  );
};

export default Header;
