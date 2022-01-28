import React from 'react';
import './Button.css';
import { oneOf, string, number } from 'prop-types';

const Button = ({ color, backgroundColor, height, width, children }) => {
  return (
    <button className='btn' style={{ color, backgroundColor, height, width }}>
      {children} testt
    </button>
  );
};

Button.propTypes = {
  color: oneOf(['red', 'black', 'green']),
  backgroundColor: string,
  height: number,
  width: number,
  children: string,
};

export default Button;
