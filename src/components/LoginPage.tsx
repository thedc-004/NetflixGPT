import { useRef, useState } from "react";
import bgImage from "../assets/login-bg.jpg";
import Header from "./Header";
import formValidate from "../utils/formValidation";
import { MouseEvent } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [login, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: MouseEvent<HTMLElement>) {
    e.preventDefault();

    const validation = formValidate(
      email.current?.value ?? null,
      password.current?.value ?? null,
      name.current?.value ?? null
    );
    setErrorMessage(validation);
    if (errorMessage) {
      return;
    }

    if (login) {
      signInWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current!.value,
        password.current!.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  }
  return (
    <div className="relative">
      <div className="absolute">
        <div className="bg-black h-[100vh] w-[100vw] absolute z-10 opacity-50"></div>
        <img
          src={bgImage}
          alt="Background Image"
          className="h-[100vh] w-[100vw]"
        />
      </div>
      <Header />
      <div className="flex items-center justify-center h-[100vh]">
        <div className="bg-black/75 absolute flex justify-start p-10 w-[20vw] text-white z-20 w">
          <form action="#">
            <h2 className="text-3xl font-bold mb-8">
              {login ? "Sign In" : "Sign Up"}
            </h2>
            {!login && (
              <input
                ref={name}
                type="text"
                name="name"
                className="bg-inherit border border-white/50 rounded-sm py-4 px-3 outline-none w-full"
                placeholder="Enter your name."
              />
            )}
            <input
              ref={email}
              type="email"
              name="email"
              className="bg-inherit border border-white/50 rounded-sm py-4 px-3 outline-none w-full my-5"
              placeholder="Enter your email Id"
            />

            <input
              ref={password}
              type="password"
              name="password"
              className="bg-inherit border border-white/50 rounded-sm py-4 px-3 outline-none w-full"
              placeholder={login ? "Enter your password" : "Set your password"}
            />
            <p className="mt-4 text-red-400 text-sm font-bold">
              {errorMessage}
            </p>
            <button
              type="submit"
              className="w-full px-3 py-3 bg-red-500 rounded-sm mt-5 font-bold"
              onClick={(e) => handleFormSubmit(e)}
            >
              {login ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-sm mt-4">
              {login ? "New to Netflix ?" : "Already have an account ?"}
              <span
                className="text-base hover:text-red-400 hover:cursor-pointer ml-2"
                onClick={() => setLogin(!login)}
              >
                {login ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
