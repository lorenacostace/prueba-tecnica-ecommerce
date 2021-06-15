import React from 'react';
import {Image} from "./ImageProductStyle";

function ImageProduct (props) {
    return (
        <Image>
            <img src={ props.image } alt="product" />
        </Image>
    )
}

export default ImageProduct;
