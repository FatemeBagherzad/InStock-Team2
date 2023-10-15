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
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8888/warehouses").then((response) => {
      setAllWarehouses(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <form className="container InventoryNewItemForm">
      <div className="InventoryNewItemForm__form">
        <section className="InventoryNewItemForm__form-left">
          <h2>Item Details</h2>
          <InputAllTextType type="smallTxt" label="Name" />
          <InputAllTextType type="description" label="Description" />
          <InputAllTextType type="smallTxt" label="Category" />
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
                checked={statusChecked}
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
                checked={statusChecked}
              />
              <p className="">Out of Stock</p>
            </div>
          </div>
          <InputAllTextType type="smallTxt" label="Quantity" />

          {allWarehouses && (
            <InputAllTextType
              type="dropDown"
              label="Warehouse"
              allWarehouses={allWarehouses}
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

function handleChange() {
  console.log("hi from handleChange");
  // if (value === 'In Stock') {
  //   setQuantityShow(true);
  //   setStatusChecked('In Stock');
  // }
  // if (value === 'Out Of Stock') {
  //   setQuantityShow(false);
  //   setStatusChecked('Out Of Stock');
  // }
}
export default InventoryNewItemForm;
