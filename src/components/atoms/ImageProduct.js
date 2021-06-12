import React from 'react';

function ImageProduct (props) {
    return (
        <image>
            <img src={ props.image } alt="product" />
        </image>
    )
}

export default ImageProduct;
