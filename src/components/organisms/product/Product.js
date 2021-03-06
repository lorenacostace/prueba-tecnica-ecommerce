import React from "react";
import ImageProduct from "../../atoms/imageProduct/ImageProduct";
import DescriptionItem from "../../molecules/descriptionItem/DescriptionItem";
import {ProductStyle, SeparationLine } from "./ProductStyle";

function Product(props) {
    const {
        imgUrl, ...description
    } = props.data;
    return (
        <ProductStyle>
            <ImageProduct image={imgUrl}/>
            <SeparationLine/>
            <DescriptionItem description={description}/>
        </ProductStyle>
    )
}

export default Product
