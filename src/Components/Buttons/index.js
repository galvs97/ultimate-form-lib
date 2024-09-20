import React from 'react';
import './style.scss';

const Button = ({ type = 'filled', state = 'enabled', onClick, children }) => {
  return (
    <button className={`${type} ${state}`} onClick={onClick} disabled={state === 'disabled'}>
      {children}
    </button>
  );
};

export default Button;