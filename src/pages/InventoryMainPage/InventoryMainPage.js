import { useEffect, useState } from 'react';
import InventoryItemMore from '../../components/InvetoryItemDetail/InvetoryItemDetail';
import InventoryList from '../../components/InventoryList/InventoryList';
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from 'axios';

const InventoryMainPage = () => {
  const [allInvetories, setAllInvetories] = useState([]);
  const [allWarehouses, setAllWarehouses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8888/inventory').then((response) => {
      setAllInvetories(response.data);
    });
  }, []);

  return (
    <>
      <PageHeader
        pageTitle="Invetories"
        type="search"
        btnTxt="+Add A New Inventory"
      />
      <InventoryList allInvetories={allInvetories} />
    </>
  );
};

export default InventoryMainPage;
