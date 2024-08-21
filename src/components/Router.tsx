import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./LogInPage/LoginPage";
import BrowsePage from "./BrowsePage/BrowsePage";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "../utils/userSlice";

function Router() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removerUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/browse" element={<BrowsePage />} />
    </Routes>
  );
}

export default Router;
