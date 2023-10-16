import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import './WarehousePage.scss';
import WarehouseDeletePage from '../WarehouseDeletePage/WarehouseDeletePage';

const WarehousePage = () => {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const [allInventories, setAllInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [warehouseName, setWarehouseName] = useState('');
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    // Fetch warehouses
    axios
      .get('http://localhost:8888/warehouses')
      .then((response) => {
        setAllWarehouses(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // Fetch inventories
    axios
      .get('http://localhost:8888/inventory')
      .then((response) => {
        setAllInventories(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>; // Show an error message if API calls fail
  }

  const handleDeleteClick = (status, warehouseId, warehouseName) => {
    setShow(status);
    setId(warehouseId);
    setWarehouseName(warehouseName);
  };

  const close = () => {
    axios
      .get('http://localhost:8888/warehouses')
      .then((response) => {
        setAllWarehouses(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //get the data again
    setShow(false);
  };

  return (
    <div className="warehousePage container">
      <PageHeader
        pageTitle="Warehouses"
        type="search"
        btnTxt="+ Add A New Warehouse"
      />
      <WarehouseList
        allWarehouses={allWarehouses}
        handleDeleteClick={handleDeleteClick}
      />
      <WarehouseDeletePage
        show={show}
        warehouseName={warehouseName}
        warehouseId={id}
        onClose={close}
      />
    </div>
  );
};

export default WarehousePage;
