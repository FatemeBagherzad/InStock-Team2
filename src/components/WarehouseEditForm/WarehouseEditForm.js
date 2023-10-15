import { useNavigate } from 'react-router-dom';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import './WarehouseEditForm.scss';


const WarehouseEditForm = () => {
    const navigate = useNavigate();
    

    return (
      <form className="container WarehouseNewForm">
          <div className="WarehouseNewForm__form">
              <section className="WarehouseNewForm__form-left">
              <h2>Warehouse Details</h2>
        <InputAllTextType type="smallTxt" label="Warehouse Name" />
        <InputAllTextType type="smallTxt" label="Street Address" />
        <InputAllTextType type="smallTxt" label="City" />
        <InputAllTextType type="smallTxt" label="Country" />
              </section>
              <section className="WarehouseNewForm__form-right">
          <InputAllTextType type="smallTxt" label="Contact Name" />
          <InputAllTextType type="smallTxt" label="Position" />
          <InputAllTextType type="smallTxt" label="Phone number" />
          <InputAllTextType type="smallTxt" label="Email" />
                  </section>
                  <div className="WarehouseNewForm__btns">
      <Button
        type="cancel"
        btnTxt="CANCEL"
        onClick={() => navigate('/warehouses')}
      />
      <Button type="submit" btnTxt="+ ADD WAREHOUSE" />
    </div>
          </div>
      </form>
    );
};
export default WarehouseEditForm;

// add prop to inputalltexttype for default value 
// play around with placeholder data