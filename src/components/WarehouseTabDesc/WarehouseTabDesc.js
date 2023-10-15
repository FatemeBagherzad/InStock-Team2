import arrowIcon from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import { Link, useNavigate } from 'react-router-dom';
import './WarehouseTabDesc.scss';

const WarehouseTabDesc = ({ warehouse }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container WarehouseTabDesDisplay">
        <ul className="WarehouseTabDes">
          <li
            className="WarehouseTabDes__li WarehouseTabDes__li--withIcn"
            onClick={() => navigate(`/warehouses/${warehouse.id}`)}
          >
            {warehouse.warehouse_name}
            {''}
            <img
              className="WarehouseTabDes__li--arrowIcn"
              src={arrowIcon}
              alt="Right arrow icon"
            />
          </li>
          <li className="WarehouseTabDes__li">{warehouse.address}</li>
          <li className="WarehouseTabDes__li">{warehouse.contact_name}</li>
          <li className="WarehouseTabDes__li">
            {warehouse.contact_phone} {warehouse.contact_email}
          </li>
          <div className="WarehouseTabDes__li--delAnEdIcn">
            <img
              className="WarehouseTabDes__li--delAnEdIcn"
              src={deleteIcon}
              alt="delete Icon"
            />
            <img
              className="WarehouseTabDes__li--delAnEdIcn"
              src={editIcon}
              alt="edit Icon"
            />
          </div>
        </ul>
      </div>
    </>
  );
};
export default WarehouseTabDesc;
