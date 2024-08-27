import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import ProfileIcon from "./BrowsePage/ProfileIcon";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex fixed z-20 w-full justify-between items-center px-5 py-3 bg-gradient-to-b from-black to-transparent text-white">
        <div>
          <img src={logo} alt="Logo" className="w-36" />
        </div>
        <div>
          <ul className="flex items-center gap-5 ">
            <Link to={"/pages/browse"}>
              <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
                Home
              </li>
            </Link>
            <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
              TV Shows
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
              Movies
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
              New & Popular
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
              My List
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 px-3 py-3 rounded-full font-medium">
              Browse by Language
            </li>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <Link to="/pages/search">
            <div className="text-xl hover:bg-gradient-to-b hover:from-transparent hover:to-red-600 p-3 rounded-full">
              <FaSearch />
            </div>
          </Link>
          <div>Children</div>
          <div className="text-xl">
            <IoNotifications />
          </div>
          <ProfileIcon />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;

// Solve the bug, and implement signOut functionality

// Create search bar, call GPT api and then get the movie nmes and search in tmdb and show it to the user.
