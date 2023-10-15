import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader';
import WarehouseList from '../../components/WarehouseList/WarehouseList';

const WarehousePage = () => {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const [allInventories, setAllInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    // Fetch inventories
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

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>; // Show an error message if API calls fail
  }

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
