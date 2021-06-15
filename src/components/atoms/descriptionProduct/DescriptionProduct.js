import React from "react";
import { Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import {FeaturesStyle, MarginLeft, NameStyle, PriceStyle} from "./descriptionProductStyle";

function DescriptionProduct (props) {
    const {
        Brand, Model, Price, ...description
    } = props.description;

    const descriptions = Object.keys(description).map((key, index) => {
        return (
            <div key={index}>  <BoldStyle>{`${key}: `}</BoldStyle> {`${description[key]}` }</div>
        )
    });

    return (
        <MarginLeft>
            <Col col={12}>
                <Row>
                    <NameStyle col="12" >
                        { `${Brand} ${Model}`}
                    </NameStyle>
                </Row>
                <Row>
                    <PriceStyle col="2">
                        { Price }€
                    </PriceStyle>
                </Row>
                <FeaturesStyle>Features</FeaturesStyle>
                { descriptions }
            </Col>
        </MarginLeft>
    )
}

const BoldStyle = styled.span`
  font-weight: bold;
`

export default DescriptionProduct;
