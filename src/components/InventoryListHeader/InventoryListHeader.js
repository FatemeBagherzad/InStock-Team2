import sortIcon from '../../assets/Icons/sort-24px.svg';
import './InventoryListHeader.scss';

const InventoryListHeader = () => {
  return (
    <>
      <div className="container InventoryListHeaderDisplay ">
        <ul className="InventoryListHeader">
          <li className="InventoryListHeader__titleAndIcn">
            INVENTORY ITEM{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            CATEGORY{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            STATUS{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            QTY{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">
            WAREHOUSES{' '}
            <img
              className="InventoryListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="InventoryListHeader__titleAndIcn">ACTION </li>
        </ul>
      </div>
    </>
  );
};
export default InventoryListHeader;
