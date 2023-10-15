import { Link, useNavigate } from 'react-router-dom';
import './InventoryItemMob.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const InventoryItemMob = ({
  inventory,
  handleDeleteClick,
  handleEditClick,
}) => {
  const navigate = useNavigate();

  // // Function to handle the edit icon click
  // const handleEditClick = () => {
  //   navigate(`/inventory/edit/${inventory.id}`);
  // };

  return (
    <div className=" ">
      <div className="InventoryItemMobDisplay">
        <div className="inventoryItemMobTxt">
          <div className="inventoryItemMobTxt__left">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                INVENTORY ITEM
              </p>
              <p
                className="inventoryItemMobTxt__titleAndItem--item inventoryItemMobTxt__titleAndItem--item-withArrow"
                onClick={() => navigate(`/inventory/${inventory.id}`)}
              >
                {inventory.item_name}{' '}
                <img
                  className="inventoryItemMobTxt__arrowIcn"
                  src={arrowIcon}
                  alt="Right arrow icon"
                />
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                CATEGORY
              </p>
              <p className="inventoryItemMobTxt__titleAndItem--item">
                {inventory.category}
              </p>
            </div>
          </div>
          <div className="inventoryItemMobTxt__right">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">STATUS</p>
              <p
                className={`inventoryItemMobTxt__titleAndItem--itemStatus  ${
                  inventory.quantity > 0
                    ? 'inventoryItemMobTxt__titleAndItem--itemStatus-inStock'
                    : 'inventoryItemMobTxt__titleAndItem--itemStatus-outOfStock'
                }    `}
              >
                {inventory.status}
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">QTY</p>
              <p className="inventoryItemMobTxt__titleAndItem--item ">
                {inventory.quantity}
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                WAREHOUSE
              </p>
              <p className="inventoryItemMobTxt__titleAndItem--item">
                Washington
              </p>
            </div>
          </div>
        </div>
        <div className="inventoryItemMobIcons">
          <Link to={''}>
            <img
              className="inventoryItemMob__icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={() =>
                handleDeleteClick(true, inventory.id, inventory.item_name)
              }
            />
          </Link>
          <Link to={`/inventory/edit/${inventory.id}`}>
            <img
              className="inventoryItemMob__icon"
              src={editIcon}
              alt="edit icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InventoryItemMob;
