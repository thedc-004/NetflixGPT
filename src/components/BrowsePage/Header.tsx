import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import ProfileIcon from "./ProfileIcon";

function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-gradient-to-b from-black to-white text-white">
      <div>
        <img src={logo} alt="Logo" className="w-36" />
      </div>
      <div>
        <ul className="flex items-center gap-5 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Language</li>
        </ul>
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-xl">
          <FaSearch />
        </div>
        <div>Children</div>
        <div className="text-xl">
          <IoNotifications />
        </div>
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Header;

// Solve the bug, and implement signOut functionality
