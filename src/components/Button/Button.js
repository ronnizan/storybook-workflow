import React, { useState } from 'react';
import './Button.css';
import { oneOf, string, number, func } from 'prop-types';

const Button = ({ color, backgroundColor, height, width, children, login }) => {
  return (
    <button
      className='btn'
      onClick={() => login({ name: 'ron' })}
      style={{ color, backgroundColor, height, width }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: oneOf(['red', 'black', 'green']),
  backgroundColor: string,
  height: number,
  width: number,
  children: string,
  login: func,
};

export default Button;
