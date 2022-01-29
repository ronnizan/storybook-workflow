import React, { useState } from 'react';
import './Header.css';
import { string } from 'prop-types';

const Header = ({ className, user }) => {
  return (
    <>
      <h1 className={`header ${className}`}>Header</h1>
    </>
  );
};

Header.propTypes = {
  className: string,
};

export default Header;
