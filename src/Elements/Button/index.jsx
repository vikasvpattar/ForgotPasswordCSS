import React from 'react';
import classNames from 'classnames';
import './index.css';
const Button = ({ variant, children, icon, onClick, style, ...rest }) => {
  return (
    <button
      style={style}
      className={classNames('.btn', variant)}
      onClick={onClick}
      {...rest}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
