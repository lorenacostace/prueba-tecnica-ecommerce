import React from "react";
import { Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import {FeaturesStyle, Line, MarginLeft, NameStyle, PriceStyle} from "./DescriptionProductStyle";

function DescriptionProduct (props) {
    const {
        Brand, Model, Price, CurrencySymbol = '€',...description
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
                    <NameStyle col>
                        { `${Brand} ${Model}`}
                    </NameStyle>
                </Row>
                <Row>
                    <PriceStyle col>
                        { Price ? `${Price} ${CurrencySymbol}` : 'Price not available' }
                    </PriceStyle>
                </Row>
                <FeaturesStyle>Features</FeaturesStyle>
                <Line/>
                { descriptions }
            </Col>
        </MarginLeft>
    )
}

const BoldStyle = styled.span`
  font-weight: bold;
`

export default DescriptionProduct;
