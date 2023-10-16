import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import WarehouseEditPage from '../WarehouseEditPage/WarehouseEditPage';

const WarehousePage = () => {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const [allInventories, setAllInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  useEffect(() => {
    // Fetch warehouses
    axios.get('http://localhost:8888/warehouses')
      .then((response) => {
        console.log(response.data);
        setAllWarehouses(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  useEffect(() => {
    axios.get('http://localhost:8888/inventory')
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





  return (
    <>
      <PageHeader
        pageTitle="Warehouses"
        type="search"
        btnTxt="+ Add A New Warehouse"
      />
      <WarehouseList allWarehouses={allWarehouses} />
    </>
  );
};

export default WarehousePage;
