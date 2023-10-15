import "../header/Header.scss";
import Logo from "./Logo";
import Button from "../Button/Button";
import React from "react";

function Header() {
  return (
    <div className="header__nav">
      <div className="header__nav-box1">
        <Logo />
      </div>
      <div className="header__nav-box2">
        <Button className="headerBtn" btnTxt="Warehouses" />
        <Button className="headerBtn" btnTxt="Inventory" />
      </div>
    </div>
  );
}

export default Header;
