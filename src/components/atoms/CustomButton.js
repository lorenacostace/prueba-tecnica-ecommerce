import React from 'react';

function CustomButton ({enableAddButton, addCart, text, ...props}) {
    return (
        <button disabled={!enableAddButton} onClick={addCart} {...props}>{text}</button>
    )
}

export default CustomButton;
