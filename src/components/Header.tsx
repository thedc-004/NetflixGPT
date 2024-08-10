import LogoImage from "../assets/logo.png";

function Header() {
  return (
    <div className="absolute z-20 mx-14 my-10">
      <img src={LogoImage} alt="" className="h-24" />
    </div>
  );
}

export default Header;
