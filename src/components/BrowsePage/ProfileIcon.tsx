import profileIcon from "../../assets/profileIcon.png";
import { FaAngleDown } from "react-icons/fa";
import ProfileIconDropDown from "./ProfileIconDropDown";
import { useState, useRef, MouseEvent } from "react";

function ProfileIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const profilDivRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (
      profilDivRef.current &&
      profilDivRef.current.contains(event.target as Node)
    ) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }
  return (
    <div
      ref={profilDivRef}
      className="flex gap-2 items-center relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setTimeout(() => setIsHovered(false), 500)}
      onMouseMove={handleMouseMove}
    >
      <img src={profileIcon} alt="profileIcon" className="rounded" />
      <div className="text-xl">
        <FaAngleDown />
      </div>
      {isHovered && <ProfileIconDropDown />}
    </div>
  );
}

export default ProfileIcon;
