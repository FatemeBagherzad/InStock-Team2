import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WarehouseDetailsCard from "../../components/WarehouseDetailsCard/WarehouseDetailsCard";
import InventoryList from "../../components/InventoryList/InventoryList";
import "./WarehouseDetailPage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import axios from "axios";

function WarehouseDetailPage() {
  const [allInvetories, setAllInvetories] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [warehouseName, setWarehouseName] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const { warehouseid } = useParams();
  console.log(warehouseid);

  useEffect(() => {
    if (warehouseid) {
      axios
        .get(`http://localhost:8888/warehouses/${warehouseid}`)
        .then((res) => {
          console.log(res.data);
          setWarehouse(res.data);
          setWarehouseName(res.data.warehouse_name);
          console.log(res.data.warehouse_name);
        })
        .catch((err) => console.log(err));
    }
  }, [warehouseid]);
  console.log(warehouse);

  useEffect(() => {
    axios.get("http://localhost:8888/inventory").then((response) => {
      setAllInvetories(response.data);
      // if (warehouseid) {
      //   const allInventoryWithId = allInventory.filter(
      //     (obj) => obj.warehouse_id === warehouseid
      //   );
      //   console.log(allInventoryWithId);
      // }
    });
  }, []);
  const handleClick = (status, inventoryId, inventoryName) => {
    console.log(inventoryId);
    setShow(status);
    setId(inventoryId);
  };
  return (
    <>
      {warehouseName && <PageHeader pageTitle={warehouseName} btnTxt="Edit" />}
      <WarehouseDetailsCard />
      <div className="container">
        <InventoryList
          allInvetories={allInvetories}
          handleClick={handleClick}
        />
      </div>
    </>
  );
}

export default WarehouseDetailPage;
