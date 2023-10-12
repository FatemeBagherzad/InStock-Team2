import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InventoryItemMore from '../../components/InventoryItemMore/InventoryItemMore';
import PageHeader from '../../components/PageHeader/PageHeader';
import './InvetoryItemMorePage.scss';

const InvetoryItemMorePage = () => {
  const [inventory, setInvetory] = useState();
  const { inventoryid } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8888/inventory/` + inventoryid)
      .then((response) => {
        setInvetory(response.data);
      })
      .catch((err) => console.log(err));
  }, [inventoryid]);

  return (
    <div className="InvetoryItemMorePage">
      {inventory && (
        <PageHeader pageTitle={`${inventory[0]?.item_name}`} btnTxt="EDIT" />
      )}
      {inventory && <InventoryItemMore inventory={inventory} />}
    </div>
  );
};

export default InvetoryItemMorePage;
