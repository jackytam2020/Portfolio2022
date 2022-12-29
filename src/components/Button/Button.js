import React from 'react';
import './Button.scss';

function Button({ buttonText }) {
  return (
    <div className="button-container">
      <p>{buttonText}</p>
    </div>
  );
}

export default Button;
