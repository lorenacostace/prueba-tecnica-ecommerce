import React from "react";
import { Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";

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
        <Row>
            <Col col={12}>
                <Row>
                    <Col col="12" >
                        { `${Brand} ${Model}`}
                    </Col>
                </Row>
                <Row>
                    <Col col="2">
                        { Price }€
                    </Col>
                </Row>
                <span>Features</span>
                { descriptions }
            </Col>
        </Row>
    )
}

const BoldStyle = styled.span`
  font-weight: bold;
`

export default DescriptionProduct;
