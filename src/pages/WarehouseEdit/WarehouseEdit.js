import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import EditWarehouseForm from "../../components/WarehouseNewForm/WarehouseNewForm"; //This should be Edited out for Editwarehouse

import "./WarehouseEdit.scss";

function EditWarehouse() {
  const { warehouseId } = useParams();
  const navigate = useNavigate();
  const [warehouseDetails, setWarehouseDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );
        if (response.status === 200) {
          setWarehouseDetails(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWarehouseDetails();
  }, [warehouseId]);

  if (error) {
    return <h2 className="error-message">{error}</h2>;
  }

  if (!warehouseDetails) {
    return <h1>Loading Warehouse Details...</h1>;
  }

  return (
    <div className="edit-warehouse-page">
      <header className="edit-warehouse-header">
        <img
          className="edit-warehouse-header__back-arrow"
          src={backArrow}
          alt="Back Arrow"
          onClick={() => navigate(-1)}
        />
        <h1 className="edit-warehouse-header__title">Edit Warehouse</h1>
      </header>
      <EditWarehouseForm defaultStateValues={warehouseDetails} />
    </div>
  );
}

export default EditWarehouse;
