import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputAllTextType from "../InputAllTextType/InputAllTextType";
import axios from "axios";
import Button from "../Button/Button";
import "./InventoryNewItemForm.scss";

const InventoryNewItemForm = () => {
  const [allWarehouses, setAllWarehouses] = useState();
  const [quantityShow, setQuantityShow] = useState(true);
  const [statusChecked, setStatusChecked] = useState("In Stock");
  const [err, setErr] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8888/warehouses").then((response) => {
      setAllWarehouses(response.data);
    });
  }, []);

  function handleChange(event) {
    if (event.target.value === 'In Stock') {
      setQuantityShow(true);
    }
    if (event.target.value === 'Out of Stock') {
      setQuantityShow(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr({});
    console.log(event.target.value);
    if (event.target.warehouse.value === 'Please select') {
      alert('Pleate choose a warehouse from the menu!!');
      return;
    }
    //find warehouse id of warehouse that is chosen in form
    const warehousechosen = allWarehouses.find(
      (warehouse) => warehouse.warehouse_name === event.target.warehouse.value
    );

    const newInventoryObj = {
      warehouse_id: warehousechosen.id,
      item_name: event.target.name.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
      quantity: Number(event.target.quantity?.value) || 0,
    };

    //handle form errors

    if (!newInventoryObj.warehouse_id) {
      err['warehouse'] = 'one warehouse must be chosen!';
      return;
    }
    if ((newInventoryObj.status = 'Out of Stock')) {
      newInventoryObj.quantity = 0;
    }
    if (
      (newInventoryObj.status = 'In Stock') &&
      parseInt(newInventoryObj.quantity) < 0
    ) {
      err['quantity'] = 'Status and quantity must match!';
      alert(
        'This Inventory is in stock. the Quantity must be bigger that zero!'
      );
      return;
    }
    if (
      !newInventoryObj.item_name ||
      !newInventoryObj.description ||
      !newInventoryObj.category
    ) {
      err['nameORdescriptionORcategory'] = 'All field should be filled!';
      return;
    }
    if (Object.keys(err).length !== 0) {
      alert(
        `Please check all the fields again:\n1-One warehouse must be chosen!\n2-Status and quantity must match!\n3-Inventory quantity must be >0!\n4-Inventory name and description and category must be filled!`
      );
      return;
    }
    console.log(newInventoryObj);

    axios
      .post('http://localhost:8888/inventory', newInventoryObj)
      .then((response) => {
        event.target.reset();
        alert('New Inventory added successfully!');
        navigate('/inventory');
      });
  };

  return (
    <form className="container InventoryNewItemForm" onSubmit={handleSubmit}>
      <div className="InventoryNewItemForm__form">
        <section className="InventoryNewItemForm__form-left">
          <h2>Inventory Detail</h2>
          <InputAllTextType type="smallTxt" label="Name" name="name" />
          <InputAllTextType
            type="description"
            label="Description"
            name="description"
          />
          <InputAllTextType type="smallTxt" label="Category" name="category" />
        </section>
        <section className="InventoryNewItemForm__form-right">
          <h2>Item Availability</h2>
          <div className="InventoryNewItemForm__form-radioBtns">
            <div className="InventoryNewItemForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="In Stock"
                className=""
                onChange={handleChange}
              />
              <p className="">In Stock</p>
            </div>

            <div className="InventoryNewItemForm__form-radioBtns-group">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                className=""
                onChange={handleChange}
              />
              <p className="">Out of Stock</p>
            </div>
          </div>
          {quantityShow && (
            <InputAllTextType
              type="smallTxt"
              label="Quantity"
              name="quantity"
            />
          )}

          {allWarehouses && (
            <InputAllTextType
              name="warehouse"
              type="dropDown"
              label="Warehouse"
              allWarehouses={allWarehouses}
              value="warehouse_name"
            />
          )}
        </section>
      </div>
      <div className="InventoryNewItemForm__btns">
        <Button
          type="cancel"
          btnTxt="CANCEL"
          onClick={() => navigate("/inventory")}
        />
        <Button type="submit" btnTxt="+ ADD INVENTORY" />
      </div>
    </form>
  );
};

export default InventoryNewItemForm;
