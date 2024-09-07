import axios from 'axios';
import './InventoryItem.scss';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import editIcon from '../../assets/Icons/edit-24px.svg';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';

const InventoryItem = ({ inventory, handleDeleteClick }) => {
  const [warehouse, setWarehouse] = useState(null);
  const navigate = useNavigate();
  const warehouseid = inventory.warehouse_id;

  useEffect(() => {
    if (warehouseid) {
      axios
        .get(`http://localhost:8888/warehouses/` + warehouseid)
        .then((response) => {
          setWarehouse(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [warehouseid]);

  if (warehouse === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {warehouseid && (
        <div className="inventoryItemDisplay container ">
          <ul className="inventoryItem">
            <li
              className="inventoryItem__li"
              onClick={() => navigate(`/inventory/${inventory.id}`)}
            >
              <span className="inventoryItem__mobile-title">
                INVENTORY ITEM
              </span>
              <div className="inventoryItem__li-nameWithIcn">
                {inventory.item_name}{' '}
                <img
                  className="inventoryItem__li-arrowIcn "
                  src={arrowIcon}
                  alt="Right arrow icon"
                />
              </div>
            </li>
            <li className="inventoryItem__li">
              <span className="inventoryItem__mobile-title">CATEGORY</span>
              {inventory.category}
            </li>
            <li className="inventoryItem__li inventoryItem__li-statusContainer">
              <span className="inventoryItem__mobile-title">STATUS</span>
              <div
                className={`inventoryItem__li-status  ${
                  inventory.quantity > 0
                    ? 'inventoryItem__li-status-inStock'
                    : 'inventoryItem__li-status-outOfStock'
                }`}
              >
                {inventory.status}
              </div>
            </li>
            <li className="inventoryItem__li">
              <span className="inventoryItem__mobile-title">QTY</span>
              {inventory.quantity}
            </li>
            <li className="inventoryItem__li inventoryItem__li-warehouse">
              <span className="inventoryItem__mobile-title">WAREHOUSE</span>
              {warehouse[0].warehouse_name}
            </li>

            <Link to={''} className="inventoryItem__li-del-link">
              <img
                className="inventoryItem__li-del-icon"
                src={deleteIcon}
                alt="delete icon"
                onClick={() =>
                  handleDeleteClick(true, inventory.id, inventory.item_name)
                }
              />
            </Link>
            <Link
              to={`/inventory/edit/${inventory.id}`}
              className="inventoryItem__li-ed-link"
            >
              <img
                className="inventoryItem__li-ed-icon "
                src={editIcon}
                alt="edit icon"
              />
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};
export default InventoryItem;
