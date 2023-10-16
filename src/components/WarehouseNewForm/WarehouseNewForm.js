import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import './WarehouseNewForm.scss';

const WarehouseNewForm = () => {
  const [error, setErr] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setErr({});
    const newWarehouseObj = {
      warehouse_name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactName.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phNumber.value,
      contact_email: event.target.email.value,
    };

    // if (!newWarehouseObj[warehouse_name] && !newWarehouseObj[address]) {
    //   console.log('The warehouse name is required!!');
    //   return;
    // }
    // if (!newWarehouseObj.address) {
    //   error['address'] = 'The warehouse address is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.city) {
    //   error['city'] = 'The warehouse city is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.country) {
    //   error['country'] = 'The warehouse country is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.contact_name) {
    //   error['contact_name'] = 'The contact name is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.contact_position) {
    //   error['contact_position'] = 'The contact position is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.contact_phone) {
    //   error['contact_phone'] = 'The contact phone is required!!';
    //   return;
    // }
    // if (!newWarehouseObj.contact_email) {
    //   error['contact_email'] = 'The contact email is required!!';
    //   return;
    // }
    // if (Object.keys(error).length !== 0) {
    //   alert(`Please check all the fields again: All field must be filled!!!`);
    //   return;
    // }
    console.log(newWarehouseObj);
    setErr({});
    axios
      .post('http://localhost:8888/warehouses', newWarehouseObj)
      .then((response) => {
        event.target.reset();
        alert('New Warehouse added successfully!');
        navigate('/warehouses');
      });
  };

  return (
    <div className="container">
      <form className=" WarehouseNewForm" onSubmit={handleSubmit}>
        <div className="WarehouseNewForm__form">
          <div className="WarehouseNewForm__formTxt">
            <section className="WarehouseNewForm__formTxt-left">
              <h2>Warehouse Details</h2>
              <InputAllTextType
                type="smallTxt"
                label="Warehouse Name"
                name="name"
              />
              <InputAllTextType
                type="smallTxt"
                label="Street Address"
                name="address"
              />
              <InputAllTextType type="smallTxt" label="City" name="city" />
              <InputAllTextType
                type="smallTxt"
                label="Country"
                name="country"
              />
            </section>

            <section className="WarehouseNewForm__formTxt-right">
              <h2>Contact Details</h2>
              <InputAllTextType
                type="smallTxt"
                label="Contact Name"
                name="contactName"
              />
              <InputAllTextType
                type="smallTxt"
                label="Position"
                name="position"
              />
              <InputAllTextType
                type="smallTxt"
                label="Phone number"
                name="phNumber"
              />
              <InputAllTextType type="smallTxt" label="Email" name="email" />
            </section>
          </div>

          <div className="WarehouseNewForm__btns">
            <Button
              type="cancel"
              btnTxt="Cancel"
              onClick={() => navigate('/warehouses')}
            />
            <Button type="submit" btnTxt="+ Add warehouse" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default WarehouseNewForm;
