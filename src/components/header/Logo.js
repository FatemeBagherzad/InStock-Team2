import logo from "../../assets/Logo/InStock-Logo_1x.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Header">
      <header className="header__logo">
        <img alt="logo" src={logo} />
      </header>
    </div>
  );
}

export default Logo;
