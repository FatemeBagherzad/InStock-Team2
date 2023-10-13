import './InventoryItemMob.scss';
import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const InventoryItemMob = ({ data }) => {
  return (
    <div className="container ">
      <div className="InventoryItemMobDisplay">
        <div className="inventoryItemMobTxt">
          <div className="inventoryItemMobTxt__left">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">
                INVENTORY ITEM
              </p>
              <p className="inventoryItemMobTxt__titleAndItem--item inventoryItemMobTxt__titleAndItem--item-withArrow">
                {data.item_name}{' '}
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
                {data.category}
              </p>
            </div>
          </div>
          <div className="inventoryItemMobTxt__right">
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">STATUS</p>
              <p
                className={`inventoryItemMobTxt__titleAndItem--itemStatus  ${
                  data.quantity > 0
                    ? 'inventoryItemMobTxt__titleAndItem--itemStatus-inStock'
                    : 'inventoryItemMobTxt__titleAndItem--itemStatus-outOfStock'
                }    `}
              >
                {data.status}
              </p>
            </div>
            <div className="inventoryItemMobTxt__titleAndItem">
              <p className="inventoryItemMobTxt__titleAndItem--label">QTY</p>
              <p className="inventoryItemMobTxt__titleAndItem--item ">
                {data.quantity}
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
          <img
            className="inventoryItemMob__icon"
            src={deleteIcon}
            alt="delete icon"
          />
          <img
            className="inventoryItemMob__icon"
            src={editIcon}
            alt="edit icon"
          />
        </div>
      </div>
    </div>
  );
};
export default InventoryItemMob;
