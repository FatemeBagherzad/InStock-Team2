import { useNavigate } from 'react-router-dom';
import InputAllTextType from '../InputAllTextType/InputAllTextType';
import Button from '../Button/Button';
import './WarehouseNewForm.scss';

const WarehouseNewForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <form className=" WarehouseNewForm">
        <div className="WarehouseNewForm__form">
          <div className="WarehouseNewForm__formTxt">
            <section className="WarehouseNewForm__formTxt-left">
              <h2>Warehouse Details</h2>
              <InputAllTextType type="smallTxt" label="Warehouse Name" />
              <InputAllTextType type="smallTxt" label="Street Address" />
              <InputAllTextType type="smallTxt" label="City" />
              <InputAllTextType type="smallTxt" label="Country" />
            </section>

            <section className="WarehouseNewForm__formTxt-right">
              <h2>Contact Details</h2>
              <InputAllTextType type="smallTxt" label="Contact Name" />
              <InputAllTextType type="smallTxt" label="Position" />
              <InputAllTextType type="smallTxt" label="Phone number" />
              <InputAllTextType type="smallTxt" label="Email" />
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
