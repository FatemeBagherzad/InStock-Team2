import "../header/Header.scss";
import Logo from "./Logo";
import WarehouseButton from "./WarehouseButton";
import InventoryButton from "./InventoryButton";

function Header() {
  return (
    <div className="header__nav">
      <div className="header__nav-box1">
        <Logo />
      </div>
      <div className="header__nav-box2">
        <WarehouseButton name="WarehouseBtn" />
        <InventoryButton name="InventoryBtn" />
      </div>
    </div>
  );
}

export default Header;
