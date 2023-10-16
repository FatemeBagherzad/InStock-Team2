import React from 'react';
import './Button.scss';
const Button = ({ btnTxt, onClick }) => {
  let classbtn;
  if (btnTxt === 'Cancel') {
    classbtn = 'cancel';
  } else if (btnTxt === 'Delete') {
    classbtn = 'delete';
  } else if (btnTxt === 'Warehouses' || btnTxt === 'Inventory') {
    classbtn = 'headerBtn';
  } else if (!btnTxt) {
    classbtn = 'noshow';
  } else {
    classbtn = '';
  }
  return (
    <button className={`button button--${classbtn}`} type="" onClick={onClick}>
      {btnTxt}
    </button>
  );
};
export default Button;
