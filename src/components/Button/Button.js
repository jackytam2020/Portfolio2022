import React from 'react';
import './Button.css'

function Button({buttonText}) {
    return (
        <div className='button-container'>
            <p>{buttonText}</p>
        </div>
    );
}

export default Button;