import React from 'react';
import ButtonBootstrap from './ButtonBootstrap';

const Button = props => {
  const { size, color, children, type, onClick, name } = props;
  const sizeClass = size ? `btn-${size}` : '';

  return (
    <ButtonBootstrap name={name} type={type} onClick={onClick}>
      {children}
    </ButtonBootstrap>
  );

  // <button
  //   name={name}
  //   type={type}
  //   onClick={onClick}
  //   className={`btn btn-${color} ${sizeClass}`}
  // >
  //   {children}
  // </button>
};

Button.defaultProps = {
  type: 'button',
  color: 'default',
  children: 'Submit'
};

export default Button;
