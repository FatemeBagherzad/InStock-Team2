import React from 'react';
import './Button.scss';

const Button = ({ btnTxt, onClick }) => {
  let classbtn;
  if (btnTxt === 'cancel') {
    classbtn = 'cancel';
  } else if (btnTxt === 'delete') {
    classbtn = 'delete';
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
