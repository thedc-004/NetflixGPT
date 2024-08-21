import { useRef, useState } from "react";
import bgImage from "../../assets/login-bg.jpg";
import Header from "./Header";
import formValidate from "../../utils/formValidation";
import { MouseEvent } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

function LoginPage() {
  const [login, setLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  function handleFormSubmit(e: MouseEvent<HTMLElement>) {
    e.preventDefault();

    const validation = formValidate(
      emailRef.current?.value ?? null,
      passwordRef.current?.value ?? null,
      nameRef.current?.value ?? null
    );
    setErrorMessage(validation);
    if (errorMessage) {
      return;
    }
    if (login) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      )
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
          return;
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current!.value,
        passwordRef.current!.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: nameRef.current!.value,
          })
            .then(() => {
              const displayName = nameRef.current!.value;
              dispatch(addUser({ displayName }));
            })
            .catch((error) => {
              console.log("Didn't happened");
              console.log(error);
            });
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
                ref={nameRef}
                type="text"
                name="name"
                className="bg-inherit border border-white/50 rounded-sm py-4 px-3 outline-none w-full"
                placeholder="Enter your name."
              />
            )}
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="bg-inherit border border-white/50 rounded-sm py-4 px-3 outline-none w-full my-5"
              placeholder="Enter your email Id"
            />

            <input
              ref={passwordRef}
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
