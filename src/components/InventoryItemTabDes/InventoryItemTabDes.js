import { Link, useNavigate } from "react-router-dom";
import "./InventoryItemTabDes.scss";
import arrowIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const InventoryItemTabDes = ({ inventory }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container inventoryItemTabDesDisplay ">
        <ul className="inventoryItemTabDes">
          <li
            className="inventoryItemTabDes__li inventoryItemTabDes__li--withIcn"
            onClick={() => navigate(`/inventory/${inventory.id}`)}>
            {inventory.item_name}{" "}
            <img
              className="inventoryItemTabDes__li--arrowIcn "
              src={arrowIcon}
              alt="Right arrow icon"
            />
          </li>
          <li className="inventoryItemTabDes__li">{inventory.category}</li>
          <li className="inventoryItemTabDes__li">
            <div
              className={`inventoryItemTabDes__li--status  ${
                inventory.quantity > 0
                  ? "inventoryItemTabDes__li--status-inStock"
                  : "inventoryItemTabDes__li--status-outOfStock"
              }`}>
              {inventory.status}
            </div>
          </li>
          <li className="inventoryItemTabDes__li">{inventory.quantity}</li>
          <li className="inventoryItemTabDes__li">Washington</li>
          <li className="inventoryItemTabDes__li">
            <div className="inventoryItemTabDes__li--delAnEdIcn">
              <img
                className="inventoryItemTabDes__li--delAnEdIcn-icon"
                src={deleteIcon}
                alt="delete icon"
              />
              <img
                className="inventoryItemTabDes__li--delAnEdIcn-icon"
                src={editIcon}
                alt="edit icon"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default InventoryItemTabDes;
