import React, { useState, useRef } from "react";
import { LOGO } from "../utils/constants";
import bgImg from "../assets/Images/netflix bg.png";
import { Link } from "react-router-dom";
import { signInFormValidation } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = (e) => {
    e.preventDefault();

    [name, email, password].forEach((ref) => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
    setErrorMessage(null);

    setIsSignInForm(!isSignInForm);
  };

  const createUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed Up

        setSuccessMessage("User signed up successfully!");

        setTimeout(() => {
          setSuccessMessage(null);
          setIsSignInForm(true);
        }, 2000);

        // console.log(userCredential.user);

        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage("Invalid email or password.");
      });
  };

  const handleClick = () => {
    const nameValue = name?.current?.value || null;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const errMsg = signInFormValidation(nameValue, emailValue, passwordValue);
    setErrorMessage(errMsg);

    if (!errMsg) {
      if (!isSignInForm) {
        // Create a new user
        createUser(nameValue, emailValue, passwordValue);
      } else {
        // Login existing user
        loginUser(emailValue, passwordValue);
      }
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <div className="absolute z-10 left-3 md:left-32">
        <img src={LOGO} alt="logo" className="my-1 w-[160px] md:w-52" />
      </div>

      <img
        className="absolute w-full h-full object-cover"
        src={bgImg}
        alt="bg-img"
      />

      <form
        className="absolute w-[60%] md:w-[30%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col p-7 md:p-14 text-white font-metropolis text-[14px]">
          <div className="font-metropolis_semi_bold text-[33px]">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </div>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              ref={name}
              className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3] mt-5 mb-4"
            />
          )}

          <input
            type="text"
            placeholder="Email address"
            ref={email}
            className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3] my-4"
          />

          <input
            type="password"
            placeholder="Password"
            ref={password}
            className="p-3 rounded-md bg-[#374151] w-full border border-transparent focus:border-white focus:outline-none placeholder-[#ffffffb3] my-4"
          />

          {errorMessage && (
            <p className="text-red-500 text-xs">{errorMessage}</p>
          )}

          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <button
            className="bg-[#E50914] text-white rounded-md p-3 cursor-pointer hover:bg-[#B00710] w-full my-4"
            onClick={handleClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <span>
            {isSignInForm ? "New to Netflix? " : "Already a user? "}
            <Link
              className="hover:text-red-500 hover:underline"
              onClick={(e) => toggleSignIn(e)}
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
