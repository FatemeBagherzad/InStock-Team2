import { Link } from "react-router-dom";

function InventoryButton() {
  return (
    <Link to="">
      <button className="iButton">
        <p className="iButton__p">Inventory</p>
      </button>
    </Link>
  );
}

export default InventoryButton;
