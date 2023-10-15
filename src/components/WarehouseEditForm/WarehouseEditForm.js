import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import axios from 'axios';

import './WarehouseEditForm.scss';

const WarehouseEditForm = ({ warehouse, warehouseid }) => {
  const navigate = useNavigate();
  const [allWarehouses, setAllWarehouses] = useState();
  const [statusChecked, setStatusChecked] = useState('In Stock');
  const [quantityShow, setQuantityShow] = useState(true);
  const [err, setErr] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8888/warehouses').then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErr({});
    // if (event.target.warehouse.value === 'Please select') {
    //   alert('Pleate choose a warehouse from the list!!');
    //   return;
    // }
    // //find warehouse id of warehouse that is chosen in form
    // const warehousechosen = allWarehouses.find(
    //   (warehouse) => warehouse.warehouse_name === event.target.warehouse.value
    // );

    // const editInventoryObj = {
    //   id: inventoryid,
    //   warehouse_id: warehousechosen.id,
    //   item_name: event.target.name.value,
    //   description: event.target.description.value,
    //   category: event.target.category.value,
    //   status: event.target.status.value,
    //   quantity: Number(event.target.quantity?.value) || 0,
    // };

    // //handle form errors

    // if (!editInventoryObj.warehouse_id) {
    //   err['warehouse'] = 'one warehouse must be chosen!';
    //   return;
    // }
    // if ((editInventoryObj.status = 'Out of Stock')) {
    //   editInventoryObj.quantity = 0;
    // }
    // if (
    //   (editInventoryObj.status = 'In Stock') &&
    //   parseInt(editInventoryObj.quantity) < 0
    // ) {
    //   err['quantity'] = 'Status and quantity must match!';
    //   alert(
    //     'This Inventory is in stock. the Quantity must be bigger that zero!'
    //   );
    //   return;
    // }
    // if (
    //   !editInventoryObj.item_name ||
    //   !editInventoryObj.description ||
    //   !editInventoryObj.category
    // ) {
    //   err['nameORdescriptionORcategory'] = 'All field should be filled!';
    //   return;
    // }
    // if (Object.keys(err).length !== 0) {
    //   alert(
    //     `Please check all the fields again:\n1-One warehouse must be chosen!\n2-Status and quantity must match!\n3-Inventory quantity must be >0!\n4-Inventory name and description and category must be filled!`
    //   );
    //   return;
    // }
    // console.log(editInventoryObj);
    // setErr({});
    // axios
    //   .put(`http://localhost:8888/inventory/${inventoryid}`, editInventoryObj)
    //   .then((res) => {
    //     console.log(res);
    //     event.target.reset();
    //     alert(' inventory item modified successfully :)');
    //     navigate('/inventory');
    //   })
    //   .catch((err) => {
    //     err.response
    //       ? console.error(err.response.data)
    //       : alert('cant connect to server');
    //   });
  };

  return (
    <form className="container WarehouseEditForm" onSubmit={handleSubmit}>
      <div className="WarehouseEditForm__form">
        <div className="WarehouseEditForm__formTxt">
          <section className="WarehouseEditForm__formTxt-left">
            <h2>Warehouse Details</h2>
            <InputAllTextType type="smallTxt" label="Warehouse Name" />
            <InputAllTextType type="smallTxt" label="Street Address" />
            <InputAllTextType type="smallTxt" label="City" />
            <InputAllTextType type="smallTxt" label="Country" />
          </section>
          <section className="WarehouseEditForm__formTxt-right">
            <h2>Contact Details</h2>
            <InputAllTextType type="smallTxt" label="Contact Name" />
            <InputAllTextType type="smallTxt" label="Position" />
            <InputAllTextType type="smallTxt" label="Phone number" />
            <InputAllTextType type="smallTxt" label="Email" />
          </section>
        </div>
        <div className="WarehouseEditForm__btns">
          <Button
            type="cancel"
            btnTxt="Cancel"
            onClick={() => navigate('/warehouses')}
          />
          <Button type="submit" btnTxt="Save" />
        </div>
      </div>
    </form>
  );
};
export default WarehouseEditForm;
