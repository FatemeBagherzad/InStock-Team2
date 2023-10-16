import React from 'react';
import axios from 'axios';
import closeIcon from 'path/to/your/closeIcon'; // Import your close icon image
import Button from 'path/to/your/Button'; // Import your Button component

const WarehouseDeletePage = ({ onClose, show, warehouseName, warehouseId }) => {
  if (!show) {
    return null;
  }

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8888/warehouses/${warehouseId}`, {
        headers: {},
        data: {
          idToDelete: warehouseId,
        },
      })
      .then((res) => {
        console.log(res);
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="WarehouseDeleteContainer">
      <div className="WarehouseDelete">
        <div className="WarehouseDelete__closeIcn">
          <img onClick={onClose} src={closeIcon} alt="close icon" />
        </div>
        <div className="WarehouseDelete__txt">
          <h1 className="WarehouseDelete__txt-header">
            Delete {warehouseName} warehouse?
          </h1>
          <p className="WarehouseDelete__txt-p">
            Please confirm that you'd like to delete the {warehouseName} from
            the warehouse list. You won't be able to undo this action.
          </p>
        </div>
        <div className="WarehouseDelete__bottomIcons">
          <Button btnTxt="Cancel" onClick={onClose} />
          <Button btnTxt="Delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default WarehouseDeletePage;