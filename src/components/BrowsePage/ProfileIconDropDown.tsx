import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/appStore";

function ProfileIconDropDown() {
  const username = useSelector(
    (store: RootState) => store?.userReducer?.displayName
  );
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log("Signout");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="absolute top-14 bg-black/80 px-5 py-3 rounded right-3 text-sm w-60">
      <div className="font-bold w-full hover:underline hover:cursor-pointer p-1">
        {username}
      </div>
      <hr className="my-2" />
      <button
        className="font-bold w-full hover:underline hover:cursor-pointer mb-2 p-1"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default ProfileIconDropDown;
