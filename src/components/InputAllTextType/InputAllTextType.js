import { useRef } from 'react';
import './InputAllTextType.scss';

const InputAllTextType = ({ type, value, label, allWarehouses }) => {
  const ref = useRef(null);
  let input;

  if (type === 'search') {
    input = (
      <input
        type={type}
        name={label}
        placeholder="Search..."
        ref={ref}
        className="inputs inputs__search"
      />
    );
  } else if (type === 'tel') {
    input = (
      <input
        type={type}
        name={label}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__userInfo"
      />
    );
  } else if (type === 'email') {
    input = (
      <input
        type={type}
        name={label}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__userInfo"
      />
    );
  } else if (type === 'description') {
    input = (
      <textarea
        type={type}
        name={label}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__description"
      />
    );
  } else if (type === 'smallTxt') {
    input = (
      <input
        type={type}
        name={label}
        placeholder={label}
        defaultValue={value}
        ref={ref}
        className="inputs inputs__smallTxt"
      />
    );
  } else if (type === 'dropDown') {
    input = (
      <select name={label} className="inputs inputs__dropdown" value="">
        <option value="" hidden>
          Please select
        </option>
        {allWarehouses.map((warehouse, index) => (
          <option key={index} value={warehouse.warehouse_name}>
            {warehouse.warehouse_name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <div
        className={`inputs__${type === 'search' ? 'label--search' : 'label'} `}
      >
        <h3 className="inputs__label--labelHeader">{label}</h3>
      </div>
      {input}
    </div>
  );
};
export default InputAllTextType;
