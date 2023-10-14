import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseItemMore from "../../components/WarehouseItemDetail/WarehouseItemDetail";

const WarehousePage = () => {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const [allInventories, setAllInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [warehouse, setWarehouse] = useState();
  const { warehouseid } = useParams();
  const [allInvetories, setAllInvetories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/warehouses/` + warehouseid)
      .then((response) => {
        setWarehouse(response.data);
        console.log(response.data);
      });
  }, [warehouseid]);

  useEffect(() => {
    axios.get("http://localhost:8888/inventory").then((response) => {
      setAllInvetories(response.data);
    });
  }, []);

  useEffect(() => {
    // Fetch warehouses
    axios
      .get("http://localhost:8888/warehouses")
      .then((response) => {
        setAllWarehouses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Fetch inventories

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
