import logo from "../../assets/Logo/InStock-Logo_1x.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="Header">
      <header className="Header__logo">
        <Link to="/">
          <img  alt="logo" src={logo} />
        </Link>
      </header>
    </div>
  );
}

export default Logo;
