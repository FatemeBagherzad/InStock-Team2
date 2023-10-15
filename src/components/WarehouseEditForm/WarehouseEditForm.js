import { useNavigate } from 'react-router-dom';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import './WarehouseEditForm.scss';
const WarehouseEditForm = () => {
  const navigate = useNavigate();
  return (
    <form className="container WarehouseEditForm">
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
