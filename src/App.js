import { useEffect } from 'react';
import './App.css';
import InventoryItemMob from './components/InventoryItemMob/InventoryItemMob';
import InventoryItemMore from './components/InventoryItemMore/InventoryItemMore';
import InventoryItemTabDes from './components/InventoryItemTabDes/InventoryItemTabDes';
import InventoryList from './components/InventoryList/InventoryList';
import PageHeader from './components/PageHeader/PageHeader';
import axios from 'axios';

function App() {

  console.log('Hello World!');
 
  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      console.log(response.data);
    });
  }, []);



  return (
    <>
      <InventoryItemMore allData={allData} />
      <PageHeader
        pageTitle="Invetories"
        type="search"
        btnTxt="+Add A New Inventories"
      />
      <InventoryList allData={allData} />
    </>
  );
}

export default App;
