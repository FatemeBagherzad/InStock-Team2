import sortIcon from '../../assets/Icons/sort-24px.svg';
import './WarehouseListHeader.scss';

const WarehouseListHeader = () => {
  return (
    <>
      <div className="container WarehouseListHeaderDisplay ">
        <ul className="WarehouseListHeader">
          <li className="WarehouseListHeader__titleAndIcn">
            WAREHOUSE{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            ADDRESS{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            CONTACT NAME{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">
            CONTACT INFORMATION{' '}
            <img
              className="WarehouseListHeader__titleAndIcn--icon"
              src={sortIcon}
              alt="sort icon"
            />
          </li>
          <li className="WarehouseListHeader__titleAndIcn">ACTION </li>
        </ul>
      </div>
    </>
  );
};

export default WarehouseListHeader;
