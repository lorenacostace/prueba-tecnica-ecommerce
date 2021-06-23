import ImageProduct from "../../atoms/imageProduct/ImageProduct";
import DescriptionItem from "../../molecules/descriptionItem/DescriptionItem";
import styled from "styled-components";
import { ProductStyle } from "./ProductStyle";

function Product(props) {
    const {
        imgUrl, id, ...description
    } = props.data;
    return (
        <ProductStyle>
            <ImageProduct image={imgUrl}/>
            <SeparationLine/>
            <DescriptionItem description={description}/>
        </ProductStyle>
    )
}

const SeparationLine = styled.div`
  background-color: #E4E7ED;
  height: 1px;
`

export default Product