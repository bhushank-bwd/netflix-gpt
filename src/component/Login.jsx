import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  const handleBtnClick = (e) => {
    e.preventDefault();
    let validateResult = validateForm(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (validateResult) {
      setErrorMsg(validateResult);
      return false;
    } else {
      setErrorMsg("");
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1>{isSigninForm ? "Sign In" : "Sign up"}</h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="full name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="email"
          ref={emailRef}
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          ref={passwordRef}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          type="submit"
          onClick={handleBtnClick}
        >
          {isSigninForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="text-red-600">{errorMsg}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
