import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

import InputAllTextType from "../../components/InputAllTextType/InputAllTextType";
import axios from "axios";

const EditInventoryItemPage = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [allWarehouses, setAllWarehouses] = useState();
  const [quantityShow, setQuantityShow] = useState(true);
  const [statusChecked, setStatusChecked] = useState("In Stock");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8888/inventory/${id}`).then((response) => {
      setInventory(response.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:8888/inventory/${id}`).then((response) => {
      setInventory(response.data);
    });

    axios.get("http://localhost:8888/warehouses").then((response) => {
      setAllWarehouses(response.data);
    });
  }, [id]);

  return (
    <form className="container EditInventoryItemPage">
      <section className="InventoryEditForm__form-left">
        <h2>Item Details</h2>

        <InputAllTextType
          type="smallTxt"
          label=" Item Name"
          value={inventory.name}
        />
        <InputAllTextType
          type="description"
          label="Description"
          value={inventory.description}
        />
        <InputAllTextType
          type="smallTxt"
          label=" Category"
          value={inventory.category}
        />
      </section>
      <section className="InventoryEditForm__form-right">
        <h2>Item Availability</h2>
        <div className="InventoryEditForm__form-radioBtns">
          <div className="InventoryEditForm__form-radioBtns-group">
            <input
              type="radio"
              name="status"
              value="In Stock"
              className=""
              checked={statusChecked}
            />
            <p className="">In Stock</p>
          </div>
          <div className="InventoryEditForm__form-radioBtns-group">
            <input
              type="radio"
              name="status"
              value="Out of Stock"
              className=""
              checked={statusChecked}
            />
            <p className="">Out of Stock</p>
          </div>

          {allWarehouses && (
            <InputAllTextType
              type="dropDown"
              label="Warehouse"
              allWarehouses={allWarehouses}
            />
          )}
        </div>
      </section>
      <div className="InventoryNewItemForm__btns">
        <Button
          type="cancel"
          btnTxt="Cancel"
          onClick={() => navigate("/inventory")}
        />
        <Button
          type="save"
          btnTxt="Save"
          onClick={() => navigate("/inventory")}
        />
      </div>
    </form>
  );
};

export default EditInventoryItemPage;
