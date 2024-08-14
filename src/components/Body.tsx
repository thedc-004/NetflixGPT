import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Body() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "browse",
      element: <BrowsePage />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        console.log(user);
      } else {
        console.log("It's logged out");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
