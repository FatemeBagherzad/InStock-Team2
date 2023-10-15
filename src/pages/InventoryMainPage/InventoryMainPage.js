import { useEffect, useState } from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
import PageHeader from '../../components/PageHeader/PageHeader';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import './InventoryMainPage.scss';
import InventoryDeletePage from '../InventoryDeletePage/InventoryDeletePage';

const InventoryMainPage = () => {
  const [allInvetories, setAllInvetories] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const [inventoryName, setInventoryName] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8888/inventory").then((response) => {
      setAllInvetories(response.data);
    });
  }, []);

  const handleClick = (status, inventoryId, inventoryName) => {
    console.log(inventoryId);
    setShow(status);
    setId(inventoryId);
    setInventoryName(inventoryName);
  };

  const close = () => {
    axios
      .get('http://localhost:8888/inventory')
      .then((response) => {
        setAllInvetories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //get the data again
    setShow(false);
  };

  return (
    <main>
      <div className="mainInventoryPageBody container">
        <PageHeader
          pageTitle="Inventories"
          type="search"
          btnTxt="+Add A New Inventory"
        />
        <InventoryList
          allInvetories={allInvetories}
          handleClick={handleClick}
        />
      </div>
      <InventoryDeletePage
        show={show}
        inventoryName={inventoryName}
        inventoryId={id}
        onClose={close}
      />
    </main>
  );
};
export default InventoryMainPage;
