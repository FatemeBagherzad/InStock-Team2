import { Link, useNavigate } from 'react-router-dom';
import './InventoryItemTabDes.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const InventoryItemTabDes = ({ inventory, handleDeleteClick }) => {
  const navigate = useNavigate();

  // // Function to handle the edit icon click
  // const handleEditClick = () => {
  //   navigate(`/inventory/edit/${inventory.id}`);
  // };

  return (
    <>
      <div className="container inventoryItemTabDesDisplay ">
        <ul className="inventoryItemTabDes">
          <li
            className="inventoryItemTabDes__li inventoryItemTabDes__li--withIcn"
            onClick={() => navigate(`/inventory/${inventory.id}`)}
          >
<<<<<<< HEAD
            {inventory.item_name}{" "}
=======
            {inventory.item_name}{' '}
>>>>>>> master
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
<<<<<<< HEAD
                  ? "inventoryItemTabDes__li--status-inStock"
                  : "inventoryItemTabDes__li--status-outOfStock"
=======
                  ? 'inventoryItemTabDes__li--status-inStock'
                  : 'inventoryItemTabDes__li--status-outOfStock'
>>>>>>> master
              }`}
            >
              {inventory.status}
            </div>
          </li>
          <li className="inventoryItemTabDes__li">{inventory.quantity}</li>
          <li className="inventoryItemTabDes__li">Washington</li>
          <li className="inventoryItemTabDes__li">
            <div className="inventoryItemTabDes__li--delAnEdIcn">
              <Link to={""}>
                <img
                  className="inventoryItemTabDes__li--delAnEdIcn-icon"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={() =>
                    handleDeleteClick(true, inventory.id, inventory.item_name)
                  }
                />
              </Link>
              <Link to={`/inventory/edit/${inventory.id}`}>
                <img
                  className="inventoryItemTabDes__li--delAnEdIcn-icon"
                  src={editIcon}
                  alt="edit icon"
                  onClick={handleEditClick}
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default InventoryItemTabDes;
