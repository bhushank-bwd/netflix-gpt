import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, DP_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  const dispatch = useDispatch();
  const handleBtnClick = (e) => {
    e.preventDefault();
    let message = validateForm(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMsg(message);
    if (message) return;
    setErrorMsg("");
    if (isSigninForm) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullNameRef.current.value,
            photoURL: DP_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1>{isSigninForm ? "Sign In" : "Sign up"}</h1>
        {!isSigninForm && (
          <input
            type="text"
            ref={fullNameRef}
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
