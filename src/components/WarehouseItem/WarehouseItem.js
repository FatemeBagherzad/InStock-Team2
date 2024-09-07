import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link, useNavigate } from 'react-router-dom';
import './WarehouseItem.scss';

const WarehouseItem = ({ warehouse, handleDeleteClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container WarehouseTabDesDisplay">
        <ul className="Warehouse">
          <li
            className="Warehouse__li"
            onClick={() => navigate(`/warehouses/${warehouse.id}/detail`)}
          >
            <span className="Warehouse__mobile-title">WAREHOUSE</span>

            <div className="Warehouse__li-withIcn">
              {warehouse.warehouse_name}
              {''}
              <img
                className="Warehouse__li-arrowIcn"
                src={arrowIcon}
                alt="Right arrow icon"
              />{' '}
            </div>
          </li>
          <li className="Warehouse__li Warehouse__li-add">
            <span className="Warehouse__mobile-title">ADDRESS</span>

            {warehouse.address}
          </li>
          <li className="Warehouse__li ">
            <span className="Warehouse__mobile-title">CONTACT NAME</span>

            {warehouse.contact_name}
          </li>
          <li className="Warehouse__li ">
            <span className="Warehouse__mobile-title">CONTACT INFORMATION</span>
            <span>{warehouse.contact_phone}</span>
            <span>{warehouse.contact_email}</span>
          </li>

          <Link to={''}>
            <img
              className="Warehouse__li-delAnEdIcn "
              src={deleteIcon}
              alt="delete Icon"
              onClick={() =>
                handleDeleteClick(true, warehouse.id, warehouse.warehouse_name)
              }
            />{' '}
          </Link>
          <Link
            to={`/warehouses/${warehouse.id}/edit`}
            className="Warehouse__li-edit"
          >
            <img
              className="Warehouse__li-delAnEdIcn"
              src={editIcon}
              alt="edit Icon"
            />
          </Link>
        </ul>
      </div>
    </>
  );
};
export default WarehouseItem;
