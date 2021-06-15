import React from 'react';
import { Button } from "./CustomButtonStyle";

function CustomButton ({enableAddButton, addCart, text, ...props}) {
    return (
        <Button disabled={!enableAddButton} onClick={addCart} {...props}>{text}</Button>
    )
}

export default CustomButton;
