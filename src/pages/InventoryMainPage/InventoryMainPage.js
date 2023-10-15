import "./InventoryMainPage.scss";
import { useEffect, useState } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";
import PageHeader from "../../components/PageHeader/PageHeader";
import axios from "axios";
import "./InventoryMainPage.scss";

const InventoryMainPage = () => {
  const [allInvetories, setAllInvetories] = useState([]);
  const [allWarehouses, setAllWarehouses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8888/warehouses").then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8888/inventory").then((response) => {
      setAllInvetories(response.data);
    });
  }, []);
  return (
    <body>
      <div className="mainInventoryPageBody container">
        <PageHeader
          pageTitle="Inventory"
          type="search"
          btnTxt="+Add A New Inventory"
        />
        <InventoryList allInvetories={allInvetories} />
      </div>
    </body>
  );
};
export default InventoryMainPage;
