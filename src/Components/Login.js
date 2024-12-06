import React, { useState } from "react";
import Header from "./Header";
import bgImg from "../assets/Images/netflix bg.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        className="absolute  w-full h-full object-cover"
        src={bgImg}
        alt="bg-img"
      />

      <form className="absolute w-[30%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg bg-opacity-70">
        <div className="flex flex-col gap-10 p-14 text-white font-metropolis text-[14px]">
          <div className="font-metropolis_semi_bold text-[33px]">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </div>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3]"
            />
          )}

          <input
            type="text"
            placeholder="Email address"
            className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3]"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3]"
          />

          <button className="bg-[#E50914] text-white rounded-md p-3 cursor-pointer hover:bg-[#B00710] w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <span>
            {isSignInForm ? "New to Netflix? " : "Already a user? "}
            <Link
              className="hover:text-red-500 hover:underline"
              onClick={toggleSignIn}
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
