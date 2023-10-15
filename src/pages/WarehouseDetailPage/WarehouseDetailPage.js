import { useEffect, useState } from "react";
import WarehouseDetailsCard from "../../components/WarehouseDetailsCard/WarehouseDetailsCard";
import InventoryList from "../../components/InventoryList/InventoryList";
// import WarehouseDetailsHeader from "../../components/WarehouseDetailsHeader/WarehouseDetailsHeader";
import "./WarehouseDetailPage.scss";
import axios from "axios";

function WarehouseDetailPage() {
  const [allInvetories, setAllInvetories] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [inventoryName, setInventoryName] = useState("");

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

  return (
    <>
      <main className="details-page">
        <WarehouseDetailsCard />
        {/* <WarehouseDetailsHeader /> */}
        <InventoryList
          allInvetories={allInvetories}
          handleClick={handleClick}
        />
        {/* <WarehouseDetailsInventory /> */}
      </main>
    </>
  );
}

export default WarehouseDetailPage;
