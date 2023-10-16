import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WarehouseDetailsCard from '../../components/WarehouseDetailsCard/WarehouseDetailsCard';
import InventoryList from '../../components/InventoryList/InventoryList';
import './WarehouseDetailPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import axios from 'axios';

function WarehouseDetailPage() {
  const [allInventories, setAllInventories] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [warehouseName, setWarehouseName] = useState(null);
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const { warehouseid } = useParams();

  useEffect(() => {
    if (warehouseid) {
      axios
        .get(`http://localhost:8888/warehouses/${warehouseid}`)
        .then((res) => {
          setWarehouse(res.data[0]);
          console.log(res.data[0].warehouse_name);
          setWarehouseName(res.data[0].warehouse_name);
        })
        .catch((err) => console.log(err));
    }
  }, [warehouseid]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/warehouses/getInventoriesByWarehouseId/${warehouseid}`
      )
      .then((response) => {
        console.log(response.data);
        setAllInventories(response.data);
      });
  }, [warehouseid]);

  const handleClick = (status, inventoryId, inventoryName) => {
    console.log(inventoryId);
    setShow(status);
    setId(inventoryId);
  };
  console.log(allInventories);

  return (
    <>
      {allInventories ? (
        <>
          <PageHeader pageTitle={warehouseName} btnTxt="Edit" />
          <WarehouseDetailsCard />
          <div className="container">
            <InventoryList
              allInvetories={allInventories}
              handleClick={handleClick}
            />
          </div>
        </>
      ) : null}
    </>
  );
}

export default WarehouseDetailPage;
