import React from "react";
import "./Button.scss";
const Button = ({ btnTxt, onClick }) => {
  let classbtn;
<<<<<<< HEAD
  if (btnTxt === "CANCEL") {
    classbtn = "cancel";
  } else if (btnTxt === "delete") {
    classbtn = "delete";
  } else if (btnTxt === "Warehouses" || btnTxt === "Inventory") {
    classbtn = "headerBtn";
=======
  if (btnTxt === 'Cancel') {
    classbtn = 'cancel';
  } else if (btnTxt === 'Delete') {
    classbtn = 'delete';
  } else if (btnTxt === 'Warehouses' || btnTxt === 'Inventory') {
    classbtn = 'headerBtn';
>>>>>>> master
  } else {
    classbtn = "";
  }
  return (
    <button className={`button button--${classbtn}`} type="" onClick={onClick}>
      {btnTxt}
    </button>
  );
};
export default Button;
